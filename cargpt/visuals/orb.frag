#version 300 es
precision highp float;
uniform vec2 resolution;
// Native C3 orb. Three thin frosted glass sheets on a light surface.
// Shape and motion come from C3OrbEngine. The palette and frost are fixed here.

// OKLab stops per sheet: dissolve, body, crest.
const vec3 orbPalette[9] = vec3[9](
    vec3(0.900175, 0.029392, -0.049251), vec3(0.640602, 0.092620, -0.196574), vec3(0.538799, 0.066740, -0.259483),
    vec3(0.874517, 0.018815, -0.061806), vec3(0.584927, 0.041492, -0.228467), vec3(0.570443, -0.023627, -0.234085),
    vec3(0.917752, 0.059457, -0.034384), vec3(0.706339, 0.199441, -0.162601), vec3(0.586962, 0.135325, -0.232314)
);

// Medium frost.
const float frostGrain = 0.19;      // strength of the surface grain
const float frostBlur = 0.100;      // how far shapes behind a sheet diffuse, in orb units
const float frostTint = 0.80;       // body opacity multiplier
const float frostVeil = 0.11;       // tinted milkiness, keeps a sheet visible where colour dissolves
const float frostWhite = 0.09;      // white scatter over the colour
const float frostEdge = 0.55;       // hairline strength
const float frostMottle = 0.05;     // large soft variation across the surface
const float hairlinePoints = 1.05;  // const edge width on screen
const float grainPoints = 0.5;      // size of one grain cell on screen
const float seedSoftness = 0.075;   // edge softness of the folded seed, in orb units

float orbHash(vec2 p) {
    vec3 q = fract(vec3(p.x, p.y, p.x) * 0.1031);
    q += dot(q, vec3(q.y, q.z, q.x) + 33.33);
    return fract((q.x + q.y) * q.z);
}

float orbNoise(vec2 p) {
    vec2 i = floor(p), f = fract(p);
    f = f * f * (3.0 - 2.0 * f);
    float a = mix(orbHash(i), orbHash(i + vec2(1.0, 0.0)), f.x);
    float b = mix(orbHash(i + vec2(0.0, 1.0)), orbHash(i + vec2(1.0, 1.0)), f.x);
    return mix(a, b, f.y);
}

vec3 orbLabToSRGB(vec3 c) {
    float l = c.x + 0.3963377774 * c.y + 0.2158037573 * c.z;
    float m = c.x - 0.1055613458 * c.y - 0.0638541728 * c.z;
    float s = c.x - 0.0894841775 * c.y - 1.291485548 * c.z;
    l = l * l * l; m = m * m * m; s = s * s * s;
    vec3 r = vec3(4.0767416621 * l - 3.3077115913 * m + 0.2309699292 * s,
                      -1.2684380046 * l + 2.6097574011 * m - 0.3413193965 * s,
                      -0.0041960863 * l - 0.7034186147 * m + 1.707614701 * s);
    r = clamp(r, 0.0, 1.0);
    return mix(12.92 * r, 1.055 * pow(r, vec3(1.0 / 2.4)) - 0.055, step(0.0031308, r));
}

// discs holds 12 floats per sheet:
// x, y, rx, ry, rotation, local gradient angle, fade, alpha, morph 2, morph 3, morph phase, depth.
// size is the host view in points. orbScale is the on-screen diameter divided by the host width.
out vec4 outColor;
uniform vec2 size;
uniform float orbScale,pointsToPixels,flowPhase,flow,vivid,soft;
uniform float discs[36];
void main() {
    vec2 position = vec2(gl_FragCoord.x, resolution.y-gl_FragCoord.y) / pointsToPixels;
    float unitPoints = 0.5 * min(size.x, size.y);
    vec2 screen = (position - 0.5 * size) / unitPoints;
    vec2 P = vec2(screen.x, -screen.y) / 0.95;                    // y up, with room for overshoot-free motion
    float pointUnits = 1.0 / (unitPoints * max(orbScale, 0.05));      // orb units per on-screen point
    float px = 0.8 * pointUnits / max(pointsToPixels, 1.0);           // anti-aliasing half-width
    vec2 grainCell = position * max(orbScale, 0.05) / grainPoints;  // grain keeps its on-screen size

    float D[3]; float CV[3]; float BA[3]; float GN[3]; float MO[3]; float ED[3]; vec3 CO[3];
    vec2 lightDirection = normalize(vec2(-0.5, 0.8));

    for (int i = 0; i < 3; i++) {
        int b = i * 12;
        vec2 p = P - vec2(discs[b], discs[b + 1]);
        float cr = cos(discs[b + 4]), sr = sin(discs[b + 4]);
        vec2 q = vec2(cr * p.x + sr * p.y, -sr * p.x + cr * p.y);
        vec2 R = vec2(discs[b + 2], discs[b + 3]);
        float th = atan(q.y / R.y, q.x / R.x);
        float ph = discs[b + 10];
        float scale = 1.0 + discs[b + 8] * cos(2.0 * th + ph) + discs[b + 9] * cos(3.0 * th - 1.3 * ph);
        vec2 Rs = R * scale;
        float k0 = length(q / Rs);
        float k1 = max(length(q / (Rs * Rs)), 1e-4);
        float d = k0 * (k0 - 1.0) / k1;
        vec2 dl = q / (Rs * Rs); dl /= max(length(dl), 1e-4);
        vec2 dw = vec2(cr * dl.x - sr * dl.y, sr * dl.x + cr * dl.y);
        vec2 g = vec2(cos(discs[b + 5]), sin(discs[b + 5]));
        float fi = float(i);
        float t = dot(q / R, g) * 0.5 + 0.5;
        float fl = sin(q.x * 2.3 + flowPhase + fi * 2.1 + sin(q.y * 2.9 - flowPhase * 0.6 + fi) * 1.4);
        t = clamp(t + flow * fl * 0.1, 0.0, 1.0);
        float u = t * t * (3.0 - 2.0 * t);
        vec3 s0 = orbPalette[i * 3], s1 = orbPalette[i * 3 + 1], s2 = orbPalette[i * 3 + 2];
        vec3 lab = u < 0.5 ? mix(s0, s1, u * 2.0) : mix(s1, s2, u * 2.0 - 1.0);
        float neutral = 0.84;
        lab = vec3(mix(neutral, lab.x, 0.3 + 0.7 * vivid), lab.y * (0.2 + 0.8 * vivid), lab.z * (0.2 + 0.8 * vivid));
        CO[i] = orbLabToSRGB(lab);
        float fade = mix(1.0, smoothstep(0.02, 0.88, t), discs[b + 6]);
        D[i] = d;
        CV[i] = smoothstep(px, -px, d);
        BA[i] = discs[b + 7] * frostTint * fade;
        vec2 cell = grainCell + fi * 17.3;
        GN[i] = 0.62 * orbHash(floor(cell)) + 0.38 * orbNoise(cell / 2.3);  // fixed to the view, so it never crawls
        MO[i] = orbNoise(q * 6.5 + fi * 5.3);                               // travels with the sheet
        ED[i] = 0.62 + 0.38 * dot(dw, lightDirection);
    }

    vec3 T = vec3(1.0);
    float Sp = 0.0;
    float lw = pointUnits * hairlinePoints;
    for (int i = 0; i < 3; i++) {
        float alphaBase = discs[i * 12 + 7];
        float front = 1.0;
        for (int j = 0; j < 3; j++) {
            front *= 1.0 - CV[j] * clamp(discs[j * 12 + 11] - discs[i * 12 + 11], 0.0, 1.0);
        }
        front = 1.0 - front;
        float w = px + frostBlur * front + seedSoftness * soft;
        float cb = smoothstep(w, -w, D[i] + (GN[i] - 0.5) * frostBlur * front * 0.5);
        float gr = (GN[i] - 0.5) * 2.0;
        float a = clamp(BA[i] * cb * (1.0 + frostGrain * gr + frostMottle * (MO[i] - 0.5) * 2.0), 0.0, 1.0);
        float dim = 0.45 + 0.55 * vivid;
        float veil = frostVeil * cb * alphaBase * (1.0 + frostGrain * gr * 1.6) * dim;
        float aa = clamp(a + veil * (1.0 - a), 0.0, 1.0);
        float eb = smoothstep(-lw - px, -lw + px, D[i]) * CV[i] * frostEdge * dim * (1.0 - soft);
        aa = clamp(aa + eb * 0.55 * (1.0 - aa), 0.0, 1.0);
        T *= mix(vec3(1.0), CO[i], aa);
        float wv = frostWhite * cb * alphaBase * (0.75 + frostGrain * gr * 2.2) * dim;
        Sp = 1.0 - (1.0 - Sp) * (1.0 - clamp(wv, 0.0, 1.0)) * (1.0 - clamp(eb * ED[i] * 0.5, 0.0, 1.0));
    }

    float ai = 1.0 - min(T.x, min(T.y, T.z));
    vec3 rgb = (T - (1.0 - ai)) * (1.0 - Sp) + Sp;
    float alpha = ai * (1.0 - Sp) + Sp;
    float n = fract(52.9829189 * fract(dot(position * pointsToPixels, vec2(0.06711056, 0.00583715))));
    float dither = (n - 0.5) / 255.0 * step(0.004, alpha);
    rgb = clamp(rgb + dither, vec3(0.0), vec3(alpha));
    outColor = vec4(rgb,alpha);
}
