# Website review — 7 October 2026

## Verdict

The site has an identifiable visual voice: warm black, antique gold, a Fraunces nameplate, an orbital dotted tunnel and restrained editorial layouts. Preserve it. The strongest next improvement is to make engineering evidence easier to inspect and the supporting text easier to read. A wholesale redesign would discard useful identity before resolving the actual gaps.

The live site omits the current confidential investment-management engagement. This branch adds an evidence-limited description to Introduction, Experience and agent summaries. Portfolio work is described as a prototype and trade monitoring as synthetic validation. Neither is promoted into an operationally accepted production system.

## Release follow-up — 8 October 2026

The release candidate closes the unused wrapper, signature-location/canonical-host and missing-publication findings. Muted text is #938C85, measuring 5.97:1 on the base background and 5.25:1 on the subtle background. Motion now defaults to system preference. The remaining audit below records the original 7 October state; broader proof/layout, legacy CSP and form abuse-control work remains separate technical debt.

## Scope and evidence

Reviewed the live homepage, mobile navigation, writing archive and full article in the Codex browser, including 375 × 812 mobile, 768 × 1024 article and 1440 × 900 desktop views. Mobile menu navigation opened, selected Writing and closed correctly. At the sampled mobile view the document did not exceed the viewport width. These observations do not establish every browser, breakpoint, zoom level or interaction state.

The original workspace was on stale commit `d4e0fa9`; fetch failed with a missing historical Git object and unresolved deltas. An isolated shallow clone recovered GitHub main `fd39866fa0c89329968b81f084ff2794b3ddbf23`. Implementation uses that source, not the stale three-product checkout. The observed live DOM matches the recovered source's four-product positioning. No deployment receipt linking that commit to the hosting build was available.

Exact dependency versions: Next.js 14.2.30, React 18.3.1, TypeScript 5.8.3, Framer Motion 10.18.0. Read the package lock and installed source. Findings below use repository source and rendered evidence; performance, form delivery, article financial assertions and full WCAG compliance were not commissioned by this review.

## What works

- **Identity:** black and warm gold fit financial infrastructure and an experienced practitioner. Gold is used for navigation and emphasis rather than flooding every surface. The monogram and tunnel make the homepage recognisable.
- **Typography:** Fraunces gives the name and long-form writing an editorial character. Inter is a practical body face; its presence is not itself a design defect. The article's serif title/deck and readable paragraph rhythm are stronger than an all-purpose SaaS treatment.
- **Restraint:** squared buttons, thin dividers and mostly flat surfaces avoid gratuitous glass, glow and rounded containers. Keep this grammar.
- **Honesty:** product labels distinguish live, private and pre-launch work. The new source is substantially more credible than the stale checkout's blanket production claims.
- **Commercial grounding:** the site explains the connection between enterprise buying experience and engineering work. Role and engagement paths are explicit, and the first-message instructions give a visitor a useful next action.
- **Publishing:** a native article, a dated archive and an RSS feed exist. There is a useful foundation for machine access without introducing another service.

## Highest-impact debt

| Priority | Finding | Evidence | Recommended change |
|---|---|---|---|
| 1 | Current client engineering work is absent from the public narrative | `app/data/experiences.ts`, `app/components/about-section.tsx` | Prepared on this branch: confidential engagement, portfolio prototype, synthetic monitoring and reviewer evidence, with status limits |
| 1 | Small muted text is difficult to read | `app/globals.css` muted `#6B6560`; hero, stack tags, dates and supporting labels use it | Raise the muted token to an AA-capable value across actual backgrounds; then inspect both CSS and Tailwind definitions |
| 1 | Reduced motion is opt-in through a query parameter | `lib/motion-preference.ts` defaults to `full`; `motion-provider.tsx` maps it to `never` | Default to system preference, retain explicit overrides, verify curtain/tunnel/content reveal with motion reduced |
| 2 | Product rows show architecture inventory before inspectable proof | `products-section.tsx` description, chips and bullets; `products.ts` | Give each product one real, public-safe proof asset and one clear limitation; reduce stack chips to the few relevant to the hiring/engagement decision |
| 2 | The hero's decorative field dominates its professional proposition | Live mobile/desktop hero and `hero-section.tsx` | Keep the tunnel but reduce its contrast/density behind the text; make the engineering proposition more prominent and the biography secondary |
| 2 | Reading rhythm is repetitive and the page is long | Repeated `py-32 lg:py-40`, similar product/experience rows | Vary spacing by information density, compress older experience and move deep details to project pages |
| 2 | Every product status has the same success styling | `products-section.tsx` applies `text-success` to all statuses | Retain explicit labels and differentiate live, private and pre-launch without making unfinished work visually look shipped |
| 3 | Writing freshness is limited to an April article and older linked posts | Six records in `publications.ts` | Publish current, generalisable engineering notes; keep source dates, add genuine updates and primary references |
| 3 | Agent discovery stops at summaries and RSS | Existing agent files and feeds; live content API was 404 | Prepared: shared article content, public JSON/detail API, Markdown, JSON Feed and OpenAPI |

### Contrast findings

Using the exact source colours and the standard sRGB relative-luminance calculation, muted text is **3.45:1 on `#0A0A0A`** and **3.03:1 on `#1A1A1A`**. This is below the 4.5:1 threshold for normal-size text. Secondary text is 7.09:1 and 6.23:1 respectively, so readability can improve without changing the palette. These are flat-colour calculations; the animated background introduces additional variation. Borders also deserve a separate non-text contrast audit.

### Motion and performance

The tunnel code includes visibility handling, disposal and a device-pixel-ratio cap. That is evidence of deliberate engineering, not evidence of acceptable battery use or Core Web Vitals. The opening curtain's configured reveal/hold/fade total is 1.5 seconds before subsequent choreography. Ask whether a repeat visitor needs that delay. Preserve a static recognisable version of the motif and make useful text available promptly.

Do not call this a Lighthouse pass. No measured LCP, INP, CLS, throttled mobile profile or battery test was completed. A focused performance check should measure the hero/curtain separately from the content page and verify unavailable-WebGL and JavaScript failure behaviour.

## Taste and copy

The site is strongest when it names concrete work: extracting a market call, tracing evidence, defining dependencies or reviewing a portfolio calculation. It is weaker when it describes its own principles repeatedly.

- **Contextual abstract-noun clustering:** “product judgement, architecture, code, evaluation and stakeholder delivery” is accurate but a visitor has to translate it into a job. Follow it with one concrete engagement example.
- **Contextual interpretive metadiscourse:** “Status labels separate what is live, private and pre-launch” explains the labels rather than letting them do their work. A short project introduction can use the space to establish relevance.
- **Contextual aphoristic emphasis:** “The buyer's problem should survive every technical decision” works once as a voice anchor. The surrounding commercial-to-engineering narrative already makes that point; avoid repeating it in further sections.
- **Technical noun density:** long chips and integration lists create an appearance of specificity while obscuring the mechanism and result. Keep precise names where they prove a capability; move the rest into architecture details.

These are editing directions, not claims about who wrote the text. The current copy is substantially cleaner than a generic AI consultancy template. Keep its plain voice and avoid invented ROI, test totals or production metrics.

## Confidential engagement and public proof

The latest inspected project state is the 6 October portfolio demo update and the recorded synthetic trade-monitoring acceptance checkpoint. The demo mixes invented balances/returns/history with client reference material; existing HTML, screenshots, branding and reference lists must not be reused as public portfolio media. A public illustration should be recreated independently with neutral branding and fully invented assets.

Safe public narrative: a confidential investment-management client; portfolio analysis; deterministic calculation; source-to-output traceability; synthetic trade monitoring; reviewer decisions; integration in progress. Exclude stakeholder names, proprietary systems, resource names, holdings, account counts, reference funds, project communications and distinctive delivery chronology. The prepared experience entry uses a broad year rather than exact contract dates.

The best eventual case-study structure is **problem → constraint → system → evidence → current status**. An appropriate title is “Portfolio analysis with traceable evidence”. Explain how deterministic calculations and evidence-bounded AI commentary serve the reviewer. Add a neutral data-flow illustration or independently recreated synthetic screen. Do not imply real-data approval, model-route acceptance, measured detection efficacy or a live operational rollout.

## Agent-access direction

The existing publication inventory contains one owned full article and five LinkedIn links/excerpts. There are no verified news entries. The prepared API uses those facts: full article access where the text exists; metadata and excerpt-only access for external posts; an empty news filter until news is actually published. It never reads subscriber/contact tables or private project material.

Use public HTTP/JSON as the primary interface, with Markdown for cheap ingestion, OpenAPI for explicit capabilities and feeds for discovery. `llms.txt` is a discovery aid, not a promise that every agent will find the site. Public accessibility is also not a republication licence. Preserve author, date, source, canonical URL and explicit content availability when adopting material into another workflow.

Draft submission, scheduled publishing, CMS integrations and MCP tooling are separate extensions. They are not required to make existing published material readable. If added later, keep authentication, draft review and publishing authority explicit.

## Recommended visual direction

**An editorial engineering portfolio: warm black and gold, expressive serif identity, restrained motion and inspectable product evidence.** Preserve the visual identity. Prioritise contrast and system motion preferences, then improve project proof and page rhythm. The new engagement should strengthen the existing site rather than introduce another aesthetic.

The contrast, motion, proof and spacing changes remain recommendations. Separately, Omar selected the monogram refinements: 01 Refined for the main identity and 04 Compact for navigation and the favicon. Those approved marks are implemented on this branch through shared geometry. Content/API and monogram changes are available for review; the branch has not been merged into production.

## References consulted

- Live site: https://www.omarbakri.com/ and its writing archive/article.
- Category research via Exa: https://singhcodes.dev/ and https://hassanshuman.co.uk/ — extracted content shows concrete engineering mechanisms and case-study proof. Their claims were not independently validated and their rendered designs were not benchmarked.
- OpenAPI purpose: https://www.openapis.org/what-is-openapi
- JSON Feed 1.1: https://www.jsonfeed.org/version/1.1/
- llms.txt proposal v2, modified 10 August 2026: https://llmstxt.org/
- Exact local source and installed dependency versions listed above; reviewed 7 October 2026.
