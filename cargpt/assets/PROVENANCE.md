# CarGPT C3 web assets — 17 November 2026

- `rive/aurora-orb.riv`: user supplied `/Users/a36473/Downloads/aurora-orb_(1).riv`, unchanged SHA-256 `b4aeb6566ebf3eee87bab45039b01202e629e4bbb43a22fcd26944ff6a078c93`. Inspected artboard `AuroraOrb`, state machine `OrbController`, automatic view model: `stateIndex` (Idle 0, Listening 1, Thinking 2, Speaking 3, Disabled 4), `voiceLevel`, `darkMode`, `reducedMotion`, `demoVoice`, `tap`. Authored GPU Canvas scripts require Rive WebGL2. No Rive editor changes made.
- `voice-floor.png`: Figma `hpM8CDgv3rxbN0kHhc1o8a`, frame `9860:101349`, bottom-bar material layer `I10401:114547;10372:36440`. Static source gradient, downloaded through official design context; temporary asset URLs are not used at runtime. Orb is replaced with the user-requested Rive. Existing header/status bar/home indicator remain from this prototype, per user instruction.
- `catalogue/*.webp`: original vehicle photos from supplied design-playground C3 handoff commit `0adfcdee44f810592376d46a5e0a15f245ded220`, `VoiceCarGPT/Assets.xcassets`. Re-encoded as WebP quality 82, maximum 1200 × 900, preserving aspect ratio. All 49 source photographs total approximately 1.93 MB, versus 11.6 MB original. Photo categories and per-listing identity preserved. Gallery loads lazily.
- Listing facts in `../catalogue.js` come from `VoiceCarGPT/C1PrototypeData.swift` (29 October 2026 snapshot). That file is byte-identical in the user-supplied `/Users/a36473/Desktop/VoiceCarGPT/VoiceCarGPT/` copy inspected on 17 November. Seven records supplement the prototype's existing dated catalogue; duplicate listing URLs are filtered out of results. No live availability or external appointment is implied.
- C3 voice behavior reviewed in the supplied local `Iterations/ConversionC1Model.swift`, `TestsUI/ConversionC3Tests.swift`, `TestsUI/C3CompleteWidgetTests.swift`, and `DesignReferences/IterationC3/BottomBarHandoff/README.md`. First-time introduction and its replay UI are removed by explicit user instruction. Earlier text/attachment fallback remains available when voice is closed, preserving this chat's previous requirement.

## CLP / CDP disclosure reference

The user-supplied `car-gpt-layout-worikng.riv` (SHA-256 `1041dbfb79eff5d499f2d1a2dbfb56ccc595697c75e71e4b562d32f13a0cfe90`) was inspected locally for compact/expanded/nudge states. Its artboard1/state_01 uses an80×68 compact board and a30-frame/60fps entry. The native web disclosure uses those dimensions/sequence/timing with accessible DOM chips and the unchanged Aurora asset above. Original CDP gallery/test-drive/price-breakup/similar-cars destinations are retained. The reference Rive is not an additional runtime dependency or modified output asset.


## C3 carousel and gallery polish

Figma `hpM8CDgv3rxbN0kHhc1o8a / 9880:104694` supplies the compact card’s static stage, ownership cutout/ellipse, ribbon tail, wishlist and small owned-stock mark. Files live in `prototype/packages/prototype-ui/src/car-card/assets/` and are copied unchanged. Dynamic photos use their actual listing assets. Gallery behavior follows Figma `9954:236837` and local C1GalleryView, preserving source Exterior/Interior/Features/Tyres photo groups. Utility glyphs use the existing self-hosted Cars24 theme. The Aurora Rive is unchanged; higher canvas density is a runtime setting.

Latest correction supersedes the earlier discovery paragraph: CLP has no tray. CDP reveals chips on scroll up and opens their responses inside CarGPT, rather than CDP page panels.

| Static asset | Bytes | Root/raster dimensions | SHA-256 |
| --- | ---: | --- | --- |
| `slider-stage.png` | 42660 | 690 × 152 | `d75939f0767787bfdc185dd0acd9628bc96d14c40cf29f5114521d78af742a6e` |
| `slider-cutout.svg` | 344 | 245 × 34.2588 (viewBox 0 0 245 34.2588) | `ed8031722ec7fc47d7ffab408a068c92126ed1e22986e9e6c097901afb382e2b` |
| `slider-ellipse.png` | 6524 | 867 × 263 | `3c1ff5ae11dae72f0af1c3849cbabbd9c418b327b5670e9bdff1c41c8c705673` |
| `slider-tail.svg` | 353 | 24 × 18 (viewBox 0 0 24 18) | `13e04decb6afdb28f305a6c2b0ee50a80909cd1df24af000b38186b5fe5dbbd2` |
| `slider-wishlist.svg` | 1168 | 24 × 24 (viewBox 0 0 24 24) | `58f63747d4251f2d6a1ef6a7a54a1d6328877b013ded8592c14e2f2859a268e2` |
| `seller-owned-small.svg` | 13747 | 94 × 18 (viewBox 0 0 94 18) | `1423feca494d36f428e17be782c072492fa88eb2049045588824ffa2e0fa3686` |
