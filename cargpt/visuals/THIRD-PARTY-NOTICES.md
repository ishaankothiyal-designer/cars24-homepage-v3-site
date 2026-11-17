# Third-party notices

The Aurora painter is adapted from the existing CarGPT C3 app bundle.

- **voice-glow0.3.0** — Jakub Antalik, MIT. Full license: `renderer/VOICE-GLOW-LICENSE.txt`. Source repository: https://github.com/Jakubantalik/Libraries.dev/tree/main/packages/voice-glow
- The prebuilt `renderer/c1-aurora.js` retains its embedded esbuild legal notices for bundled dependencies, including React/React DOM and Three.js. Do not remove those notices. The entry bundle contains the app's shared light/blob helpers; this package selects only the light surface.
- CARS24-specific theme, masks, artwork, source and interaction configuration retain their existing ownership. This package does not relicense company assets or grant rights to distribute them publicly.

Runtime host dependency: `react-native-webview` (MIT), installed by the integrating app. Its license is distributed with that package.
