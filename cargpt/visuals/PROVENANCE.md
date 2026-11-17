# C3 visual source

Source repository: https://github.com/CSPL-CARS24/design-playground/tree/codex/cargpt-c3-handoff-2026-11-12/prototypes/cargpt-c3

Source commit: `0adfcdee44f810592376d46a5e0a15f245ded220`.

`c1-aurora.js`, `c1-aurora.css` and `c1-permission-glow.svg` are copied unchanged from `ReactNativeGradient/renderer/`. They contain the original C3 Aurora painter; its state handler retains the last speaking level while thinking. The adapter uses the original `updateC1Aurora` protocol in a persistent local iframe. The 800px renderer is anchored to the bottom and scaled to 65%, clipped inside a 130px material region. No network/CDN runtime is required.

The C3 orb now ports `VoiceCarGPT/Iterations/C3OrbShaders.metal` to the WebGL2 fragment shader `orb.frag` and `VoiceCarGPT/C3OrbEngine.swift` to `orb-engine.js`. The nine OKLab colour stops, three-sheet compositing, frost constants, fixed grain/noise, edge lighting, state poses, spring/filter rates, Tide motion and speaking-wave math come from those source files. The shader changes are platform syntax and uniform/buffer plumbing. Browser rasterisation/precision can differ from Metal; no alternate CSS orb is drawn. When WebGL2 is unavailable, the canvas remains empty and surrounding accessible controls/status remain available. Audio motion uses supplied measurements, with no fabricated speech-level oscillator.

The integration keeps the supplied license notices alongside the bundle. This private company prototype remains separate from live inventory, finance or booking services.

`intro-motion.js` ports the source `IntroMotion.swift`/`IntroClock.swift` entrance values: master cubic (0.34,0,0.07,1), orb start0.08s,0.9s movement,0.04s size lag, y860→286, size58→180, source unfurl and follower stagger, and reduced-motion0.3s fade. The visual host uses one finite entrance clock and forwards its sheet appearance/travel into the orb engine. `fabric.js` ports the native twelve-node FabricSimulation and Canvas ribbon with source stiffness/damping, release ripple, Catmull–Rom-to-Bézier control points, thinning, 30px body blur, 10px sheen and source gradient stops. It runs on the same finite intro clock and is skipped under Reduced Motion; the unchanged Aurora painter remains the separate bottom material. Browser docking targets the actual web voice controls using the source0.06s delay/0.70s master curve; it does not claim the native close-to-listing-corner transition.
