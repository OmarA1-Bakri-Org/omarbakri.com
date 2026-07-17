# OmarBakri.com recovery comparison

## Evidence baseline

- Current `main`: `7ef6db4c8007d199e51f16cef859fbfe5f73fed1`
- Current production deployment: `dpl_2cs4AcvvVDgQ5esudvVzcQGJDeUW`
- Verified prior production baseline: `d4e0fa9f2ac00c1ce0d110739812eca43816bbcc`
- CallScore portfolio addition: `4a55ca5dfd34a8ddc62e292bd9b848775bc2a41c`
- Later copy baseline: `b8d06b8dd1ac1861381cbb580ff09f4542b0bbf5`
- Historical comparison candidate: `70a2ca1c1a6a65d301184da38e0aeeeaf7cf0b01`

| Surface | Current behavior | Verified baseline | Recovery decision | Source files |
| --- | --- | --- | --- | --- |
| OAB intro | OAB source exists, but a session marker suppresses replay and the sequence lasts about 4.5 seconds | OAB geometry was present in the June production baseline | Retain the verified OAB geometry; remove session suppression; replay on hard load/reload; complete within two seconds; add visible skip and failure-safe exit | `app/components/page-load-curtain.tsx`, `app/components/page-load-curtain.config.ts`, `app/components/curtain-overlay.tsx`, `app/components/monogram.tsx` |
| Tunnel | Original renderer remains, but renderer or shader failure can escape and there is no static underlay | Gold-dot Three.js tunnel was present in the June production baseline | Retain the renderer and motion character; add a static fallback, first-frame gating and context/error containment | `components/ui/tunnel-background.tsx`, `app/components/hero-section.tsx` |
| Hero | UK-authorisation claim, generic Thailand location and sales-oriented CTA copy | Earlier editorial hero without the rate catalogue | Use the approved role, supporting copy, Bangkok/global availability and semantic role/project CTAs | `app/components/hero-section.tsx` |
| Homepage order | Story precedes work; a rate catalogue interrupts the narrative | One-page editorial portfolio | Work before story; then experience, capabilities, work together, newsletter and contact | `app/page.tsx` |
| Routes | Homepage only; no tracked pricing route exists on current `main` | Homepage only | Keep the focused one-page portfolio and add a permanent `/pricing` redirect | `next.config.js`, `app/sitemap.ts` |
| Pricing catalogue | Six public offers include rates and duration promises | Absent from the June baseline | Remove catalogue and replace it with Remote roles / Consulting and contracting | `app/components/services-section.tsx`, `app/components/work-together-section.tsx` |
| UK-authorisation copy | Present in hero, contact, work section, structured data and LLM files | Not required for product context | Remove all eligibility and UK-only availability claims while retaining ruleIQ's UK financial-services product context | `app/**`, `public/llms*.txt` |
| Product cards | CallScore is already integrated into the shared editorial card system | Original cards plus later CallScore addition | Retain CallScore with conservative copy and accurate project/repository links | `app/components/products-section.tsx`, `app/data/products.ts` |
| Mobile navigation | `aria-controls` points to an element that does not exist while the menu is closed; navigation uses buttons | Editorial hash navigation | Render the controlled menu element continuously and use semantic anchors | `app/components/navbar.tsx`, `lib/nav-links.ts` |

## Environment-file security observation

`.env.local` is absent from current `main` and remains ignored. It was present in historical public commits inspected for visual comparison. No values were printed, changed or committed during this recovery. Credential rotation and any history remediation require a separate explicit security action.
