# OAB monogram concepts

Four vector refinements of the existing overlapping OAB mark. Created 7 October 2026.

- 01 refined: closest to the original, straight terminals and stronger inner strokes.
- 02 angular: straighter oval sides and geometric B bowls.
- 03 serif: short serif terminals for an editorial treatment.
- 04 compact: heavier optical weight for smaller applications.

Each version has a transparent gold SVG (`#C4A265`) and an ink SVG (`#1A1A1A`). They use explicit paths, with no fonts, scripts, external references or raster effects. Open `index.html` to compare the large mark and 24/36/40 px renderings.

Selected by Omar: 01 for the primary identity and 04 for navigation and the small favicon. Site components and generated image assets now share the approved geometry in `lib/monogram.ts`. The signature preserves its existing dimensions and uses `?v=2` to avoid the previous immutable image cache. This branch has not been merged into production.

Validation: all SVG source files parsed as XML; all 20 comparison-board images loaded in-browser; desktop 1440 px and mobile 375 px had no page-level horizontal overflow. Inspected rendered joins, counter shapes and small-size examples. No claims of production favicon acceptance at 16 px.
