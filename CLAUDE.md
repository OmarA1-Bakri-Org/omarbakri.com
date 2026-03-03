# FRONTEND EXCELLENCE HARNESS
### Long-Running Autonomous Session Protocol for Claude Code
> v3.1 — The Artist in Both Worlds: Greenfield and Brownfield
> Drop as `CLAUDE.md` at project root. This is the operating contract for every session.

---

## THE ARTIST PRINCIPLE

A master craftsman is not made uncomfortable by an existing canvas. They read what is there —
the original intentions, the compromises, the decay, the moments of unexpected quality — and
they understand it before they touch it. A great restoration artist does not paint over everything.
A great muralist does not treat every wall as blank.

This harness treats both situations with equal seriousness and equal craft:

- **Greenfield** — total creative freedom, the weight of making every choice deliberately
- **Brownfield** — the discipline of archaeology, the skill of working with and against what exists

The approach differs. The standard does not.

---

## HOW THIS DOCUMENT WORKS

This is a **state machine with two parallel tracks** and **agentic orchestration**. Every phase has:
- An **entry condition**
- A **project mode** tag — `[BOTH]`, `[GREEN]`, or `[BROWN]`
- **Loop constructs** with explicit exit conditions (and escape hatches)
- **Quality gates** that block forward progress
- **`/task-router` calls** at every fork where tool selection matters
- **`/agent-browser` checkpoints** where visual evidence is required
- **PARALLEL BLOCK** markers where independent tasks fan out concurrently
- **COMMITTEE SESSION** markers where BMAD agents deliberate at critical gates

State is written to `HARNESS_STATE.md` continuously. Sessions are interruptible and resumable without loss.

### Agentic Execution Model

This harness runs as an **orchestrator with delegated sub-agents**, not a single-threaded executor. Where tasks are independent, they execute in parallel. Where specialist judgment is needed, BMAD agent personas are summoned as committees. The orchestrator coordinates, synthesises, and advances — it does not do everything sequentially.

```
ORCHESTRATOR (main agent)
├── delegates research to Research Agent
├── delegates archaeology to Archaeology Agent (brownfield)
├── fans out parallel component builds to Build Agents
├── fans out validation to Validation Agents (agent-browser sessions)
├── summons BMAD Committee at gate boundaries
└── synthesises results and advances phases
```

### Notation Reference

```markdown
PARALLEL BLOCK — [name]
  tasks:
    - [task A]: [description]
    - [task B]: [description]
  sync_condition: [when to reconverge]
  merge_into: [next step or artifact]

DELEGATE — [agent role]
  brief: [what the agent does]
  context_provided: [files/state the agent receives]
  tools_available: [which tools]
  return_format: [what comes back]
  autonomy_level: [full | supervised]

COMMITTEE SESSION — [Gate]
  personas_summoned: [BMAD agent names]
  artifact_under_review: [what's being judged]
  verdict_options: [CONSENSUS | CONDITIONAL_PASS | BLOCK]
```

---

## BMAD AGENT ROSTER

These personas are borrowed from the BMAD v6 agent ecosystem. They are summoned at gate
boundaries as committee members and as specialist sub-agents during execution.
Their communication styles, principles, and natural tensions are the committee's value.

| Icon | Name | Role | Communication Style | Key Principle |
|---|---|---|---|---|
| 🎨 | **Sally** | UX Designer | Paints pictures with words, tells user stories that make you FEEL the problem | Every decision serves genuine user needs |
| 🏗️ | **Winston** | Architect | Calm, pragmatic tones, balancing "what could be" with "what should be" | Embrace boring technology for stability |
| 💻 | **Amelia** | Developer | Ultra-succinct. Speaks in file paths and AC IDs. No fluff, all precision | Tests pass 100% or it isn't done |
| 📋 | **John** | Product Manager | Asks "WHY?" relentlessly like a detective on a case | Ruthless prioritisation — user value first |
| 🧪 | **Quinn** | QA Engineer | Practical, straightforward. Ship it and iterate | Tests should pass on first run |
| 🏃 | **Bob** | Scrum Master | Crisp, checklist-driven. Zero tolerance for ambiguity | Stories are the single source of truth |
| 🎬 | **Spike** | Presentation Master | Sarcastic wit, experimental flair. Dramatic reveals, visual metaphors | Visual hierarchy tells the story before words |

### Standing Committee (Every Gate)
Sally, Winston, Amelia, John

### Gate-Specific Additions
| Gate | Extra Members | Why |
|---|---|---|
| Post-2B Debt Map | +Bob | Validates classifications are unambiguous |
| Gate 2 — Design Direction | +Spike | Judges visual impact vs. safe choices |
| Gate 4 — Visual Validation | +Quinn | Validates testability and accessibility |
| Gate 7 — Production Ready | +Quinn, +Bob | Full pre-mortem — nothing ships without both |

---

## SESSION INITIALISATION `[BOTH]`

Run once. Every session. No exceptions.

```bash
# 1. Activate codebase intelligence
serena: activate_project("root")
serena: check_onboarding_performed()

# 2. Check for existing session state
# HARNESS_STATE.md exists? → READ IT → jump to recorded phase
# Does not exist? → this is a new session → continue

# 3. Inventory the toolset for this session
/task-router "What skills, MCP servers, and built-in tools are available
to me for frontend design and development right now?"
```

Record the routing response. Every downstream `/task-router` call is grounded in what was confirmed here.

### Initialise State File

```markdown
# HARNESS STATE
session_start: [ISO timestamp]
project_mode: [GREENFIELD | BROWNFIELD | DETECTING]
phase: INIT
project_name: [name or TBD]
site_category: [TBD — e.g. B2B SaaS dashboard / marketing site / fintech portal]
tech_stack: [TBD]
design_direction_status: [NONE | DECLARED | APPROVED]
brownfield_debt_map: [NONE | IN_PROGRESS | COMPLETE]
research_status: [NONE | IN_PROGRESS | COMPLETE]
current_iteration: 0
quality_score: 0/10
iteration_cap_reached: false
dev_url: [TBD — e.g. http://localhost:3000]
git_branch: [TBD]
skills_loaded: []
gates_passed: []
gates_pending: [GATE_0_MODE_DETECTED, GATE_1_RESEARCH_COMPLETE,
               GATE_2_DESIGN_APPROVED, GATE_3_COMPONENT_BUILT,
               GATE_4_VISUAL_VALIDATED, GATE_5_PERFORMANCE_PASSED,
               GATE_6_ACCESSIBILITY_PASSED, GATE_7_PRODUCTION_READY]
last_checkpoint: [ISO timestamp]
active_skills: []
committee_sessions: 0
```

---

## PHASE 0 — SKILL & PLUGIN INVENTORY `[BOTH]`

**Entry**: New session, HARNESS_STATE.md does not exist or phase is INIT.

### Step 0.1 — Two-Stage Skill Loading

Skills are loaded in two stages to preserve context window budget. Stage 1 loads immediately.
Stage 2 skills load on-demand when their phase is reached.

**STAGE 1 — Load Immediately (Core)**

| Priority | Path | What It Unlocks |
|---|---|---|
| 🔴 | `/mnt/skills/public/frontend-design/SKILL.md` | Core aesthetic rules and anti-patterns |
| 🔴 | `/mnt/skills/user/senior-frontend/SKILL.md` | Scaffold scripts, bundle analysis, component patterns |

**STAGE 2 — Load On-Demand (When Phase Requires)**

| Priority | Path | Load At | What It Unlocks |
|---|---|---|---|
| 🟠 | `/mnt/skills/user/ux-researcher-designer/SKILL.md` | Phase 3 (Research) | Persona gen, journey mapping, usability testing |
| 🟠 | `/mnt/skills/examples/web-artifacts-builder/SKILL.md` | Phase 2G or 6 (Scaffold/Build) | React + shadcn/ui multi-component builds |
| 🟠 | `theme-factory/SKILL.md` | Phase 5 (Design Direction) | 10 pre-built palettes + custom theme generation |
| 🟡 | `/mnt/skills/user/code-reviewer/SKILL.md` | Phase 6 (Build) | Automated quality gates, security scanning |
| 🟡 | `brand-guidelines/SKILL.md` | Phase 4 (Discovery) | If this project has a defined brand |
| 🟡 | `/mnt/skills/user/senior-prompt-engineer/SKILL.md` | Phase 6 (Build) | AI-powered UI components |
| 🟢 | `/mnt/skills/examples/algorithmic-art/SKILL.md` | Phase 6 (Build) | Only if direction calls for generative/p5.js effects |
| 🟢 | `/mnt/skills/examples/canvas-design/SKILL.md` | Phase 6 (Build) | Static visual assets, only if needed |

Update `skills_loaded` in `HARNESS_STATE.md` each time a skill is loaded.

### Step 0.2 — Route the Skill Combination

```
/task-router "I'm starting a frontend project. Available skills: [list from 0.1].
The project appears to be [brief description if known, or 'unknown — detecting'].
Which skill combination is optimal? In what order should they be applied?
What dependencies exist between them?"
```

Write the routing decision to `HARNESS_STATE.md` under `active_skills`.

**PHASE 0 EXIT**: Stage 1 skills read ✅ | Routing decision recorded ✅

---

## PHASE 1 — PROJECT MODE DETECTION `[BOTH]`

**Entry**: Phase 0 complete.

This phase determines whether you are working on a greenfield or brownfield project.
The answer changes everything: your research framing, your discovery questions,
your execution approach, and what "done" looks like.

### Step 1.1 — Probe the Codebase

```bash
serena: list_dir(".", recursive=True, skip_ignored_files=True)
serena: find_file("package.json", ".")
serena: read_file("package.json")
```

Then answer these diagnostics:

```
Does a src/ directory with existing components exist?       Y / N
Does a styling system exist (Tailwind config / CSS files)?  Y / N
Are there existing design tokens or CSS variables?          Y / N
Is there an existing live URL or deployed environment?      Y / N
Are there more than 10 committed components?                Y / N
```

**If 3+ are YES → BROWNFIELD mode.**
**If 3+ are NO → GREENFIELD mode.**
**If ambiguous → ask the user one question**: "Is this a new project or an existing one we're redesigning?"

Update `HARNESS_STATE.md`: `project_mode: [GREENFIELD | BROWNFIELD]`

**GATE 0 — MODE DETECTED** ✅

> From here the harness **splits**. Follow the correct track.
> Both tracks reconverge at **Phase 3 — Research Intelligence**.

---

## PHASE 2G — GREENFIELD CODEBASE SETUP `[GREEN]`

**Entry**: Mode confirmed as GREENFIELD.

### Step 2G.1 — Safety Branching

```bash
git checkout -b harness/[YYYY-MM-DD]-frontend-build
```

All modifications happen on this branch. Record in state: `git_branch: harness/[date]-frontend-build`

### Step 2G.2 — Establish Technical Foundation

```
/task-router "Setting up a greenfield [type of project] frontend.
Available scaffold tools: web-artifacts-builder init script,
senior-frontend scaffolder, manual Next.js/Vite setup.
What is the best starting scaffold for this project type and tech requirements?"
```

Load `web-artifacts-builder/SKILL.md` now if the routing recommends it.

Run the recommended scaffold. Confirm these are in place before Phase 3:
- Package manager and dependencies locked
- Styling system initialised (Tailwind config or equivalent)
- CSS custom property scaffold (empty token shell ready to fill)
- Routing structure defined
- Component directory structure established

Write to `HARNESS_STATE.md`: `tech_stack: [confirmed stack]`

**PHASE 2G EXIT**: Project scaffold confirmed ✅ | Token shell exists ✅ | Git branch created ✅

---

## PHASE 2B — BROWNFIELD ARCHAEOLOGY `[BROWN]`

**Entry**: Mode confirmed as BROWNFIELD.

> This is not a code review. This is archaeology. The question is not
> "what is wrong with this code?" It is "what was this trying to be,
> what actually became of it, and what is the gap?"
>
> Read with the eye of a restoration artist — find the original intent,
> trace the decay, locate what is worth preserving.

### Step 2B.1 — Safety Branching

```bash
git checkout -b harness/[YYYY-MM-DD]-brownfield-redesign
```

All modifications happen on this branch. User reviews diff before merge to main.
Record: `git_branch: harness/[date]-brownfield-redesign`

### Step 2B.2 — Deep Codebase Read

**DELEGATE — Archaeology Agent**
```
brief: "Excavate the existing codebase across 4 layers and return structured findings."
context_provided: project root access, serena tools
tools_available: serena (list_dir, get_symbols_overview, find_file, search_for_pattern, read_file)
return_format: structured findings per layer (architecture, design system, component quality, live state)
autonomy_level: full — execute and return
```

Run a structured excavation using Serena. All four layers are independent and execute concurrently.

**PARALLEL BLOCK — Codebase Excavation**
```
tasks:
  - Layer 1 — Architecture:
      serena: list_dir("src", recursive=True)
      serena: get_symbols_overview("src/components")
      serena: get_symbols_overview("src/pages")   # or app/ for Next.js App Router
      serena: find_file("*.config.*", ".")        # vite, next, tailwind, postcss

  - Layer 2 — Design System Probe:
      # What tokens exist, if any?
      serena: search_for_pattern("--[a-z]", paths_include_glob="*.css,*.scss")

      # What colors are hardcoded vs. tokenised? (includes modern CSS color functions)
      serena: search_for_pattern("#[0-9a-fA-F]{3,8}|rgb\\(|hsl\\(|oklch\\(|lab\\(|color\\(",
              paths_include_glob="*.css,*.scss,*.tsx,*.jsx",
              context_lines_after=1)

      # What fonts are declared?
      serena: search_for_pattern("font-family|@import.*font|next/font|google.*font",
              restrict_search_to_code_files=False)

      # What animation/transition patterns exist?
      serena: search_for_pattern("transition|animation|keyframe|motion",
              paths_include_glob="*.css,*.scss,*.tsx")

      # What spacing approach is being used?
      serena: search_for_pattern("margin|padding|gap|space-",
              paths_include_glob="*.css,*.scss", context_lines_before=1)

  - Layer 3 — Component Quality Scan:
      # How many components exist and what are they?
      serena: find_file("*.tsx", "src/components")
      serena: find_file("*.jsx", "src/components")

      # Are there any existing design system files?
      serena: search_for_pattern("design.system|tokens|theme|variables",
              restrict_search_to_code_files=False)

      # What's the state management approach?
      serena: search_for_pattern("useState|useContext|zustand|redux|jotai",
              paths_include_glob="*.tsx,*.ts")

  - Layer 4 — Living Product Scan (if deployed):
      # If a URL exists — capture the current state visually with annotated refs
      agent-browser open [existing URL or localhost]
      agent-browser set viewport 375 812
      agent-browser screenshot --annotate brownfield-baseline-mobile.png
      agent-browser set viewport 768 1024
      agent-browser screenshot --annotate brownfield-baseline-tablet.png
      agent-browser set viewport 1440 900
      agent-browser screenshot --annotate brownfield-baseline-desktop.png
      # Also capture full-page baseline for later visual diff
      agent-browser screenshot --full brownfield-baseline-full.png
      agent-browser close

sync_condition: all 4 layers complete
merge_into: Step 2B.3 — Debt Map synthesis
```

### Step 2B.3 — Build the Design Debt Map

After the excavation, synthesise your findings into a structured map.
This is the core artifact of brownfield work. Write it to `DESIGN_DEBT_MAP.md`:

```markdown
# DESIGN DEBT MAP — [PROJECT NAME]
generated: [timestamp]
analyst: Claude Code (Archaeology Agent)

## Executive Summary
[2–3 sentences: what was this design trying to be, and what actually happened to it]

## Original Intent (Inferred)
[What design decisions suggest the original vision was — style, audience, mood]
[What moments of quality still exist that hint at that original intent]

## Current Aesthetic Quality: [n]/10
[Honest, specific assessment. What earned each point. What lost them.]

## Debt Register

### TYPOGRAPHY
status: [coherent | fragmented | absent]
fonts_declared: [list — were they chosen or defaulted to?]
scale: [defined / arbitrary / inconsistent]
issues:
  - file: [path] | selector: [.class] | issue: [specific problem]
    severity: [cosmetic | structural]
    action: [preserve | restyle | replace]

### COLOR SYSTEM
status: [tokenised | partially tokenised | scattered hardcoded values]
palette_coherence: [intentional | accidental | none]
contrast_compliance: [pass | fail | unknown]
issues:
  - file: [path] | property: [value] | issue: [what's wrong]
    severity: [cosmetic | structural]
    action: [preserve | restyle | replace | tokenise]

### SPACING & LAYOUT
status: [scale-based | semi-consistent | arbitrary]
grid_system: [exists | implied | absent]
issues:
  - [specific layout problem with file reference]

### MOTION & ANIMATION
status: [coherent vocabulary | ad hoc | absent]
issues:
  - [specific animation problem with file reference]

### COMPONENT ARCHITECTURE
issues:
  - [components with structural design problems — not just style]

## Preservation Register
[What is WORKING and must NOT be touched unless the user explicitly approves]
- [Component/pattern]: [why it's worth keeping]
- [Component/pattern]: [why it's worth keeping]

## Priority Debt — Top 5 Highest Impact Fixes
1. [Issue] — [file] — [one-line fix description] — estimated impact: [high/medium]
2. [Issue] — [file] — [one-line fix description] — estimated impact: [high/medium]
3. [Issue] — [file] — [one-line fix description] — estimated impact: [high/medium]
4. [Issue] — [file] — [one-line fix description] — estimated impact: [high/medium]
5. [Issue] — [file] — [one-line fix description] — estimated impact: [high/medium]

## The Untouched Rooms
[Routes, screens, or components that appear abandoned or deprioritised —
worth noting but not in scope unless the user directs us there]
```

### Step 2B.4 — Route the Brownfield Strategy

```
/task-router "I've completed a brownfield codebase audit.
Design debt summary: [3-line summary from map].
Preservation list: [key items].
Top 5 priority fixes: [list].
What strategy is optimal:
(a) surgical fixes to existing code using code-reviewer scripts,
(b) component-by-component rebuild using web-artifacts-builder alongside existing code,
(c) design system extraction first using theme-factory, then propagate,
(d) a hybrid approach?
What does the skill set make most achievable?"
```

Record the strategy in `HARNESS_STATE.md`: `brownfield_strategy: [approach]`

### Step 2B.5 — Present Findings to User

Before proceeding, surface the debt map. Ask:

> "I've completed an archaeology pass on the codebase. Here's what I found:
> [3-sentence summary of original intent, current state, top priorities].
> The preservation list includes: [key items].
> Does this match your understanding? Is there anything I've misread about the original intent?"

**LOOP**: If user corrects the assessment → update the debt map → re-present → loop until confirmed.

### Step 2B.6 — Committee Review: Debt Map

**COMMITTEE SESSION — Post-2B Debt Map Review**
```
personas_summoned: Sally (UX), Winston (Architect), Amelia (Dev), John (PM), Bob (SM)
artifact_under_review: DESIGN_DEBT_MAP.md

BRIEFING:
Each agent receives ONLY:
- DESIGN_DEBT_MAP.md
- The user's correction notes (if any from Step 2B.5)
They do NOT receive the excavation conversation or reasoning.
Information asymmetry is deliberate.

ROUND 1 — Independent Assessment (PARALLEL):
  Sally:  Do preserved items genuinely serve users? Are we preserving out of attachment?
  Winston: Is the strategy technically sound? Will the migration approach hold under load?
  Amelia:  Are the file references correct? Are dependency chains accounted for?
  John:    WHY are we preserving each item? Does it connect to user or business value?
  Bob:     Are classifications unambiguous? Could a developer misinterpret any action tag?

ROUND 2 — Cross-Examination:
  Key tension: Sally vs. John — empathy-preserving vs. ruthless prioritisation
  Key tension: Amelia vs. Winston — code-level accuracy vs. architectural pragmatism

ROUND 3 — Verdict:
  CONSENSUS: all ≥7 → proceed
  CONDITIONAL_PASS: one <7, addressable → proceed with action item
  BLOCK: two+ <7 → revise debt map before advancing
```

Update `HARNESS_STATE.md`: `brownfield_debt_map: COMPLETE`

**PHASE 2B EXIT**: Debt map written ✅ | User confirmed ✅ | Committee passed ✅ | Git branch created ✅

---

## PHASE 3 — RESEARCH INTELLIGENCE `[BOTH]`

**Entry**: Phase 2G or 2B complete.

> Before any design direction is locked, Claude Code must be informed.
> Not vaguely familiar with "good design" — specifically, precisely informed about
> what is happening RIGHT NOW in the exact category of product being built.

Load Stage 2 skill: `ux-researcher-designer/SKILL.md` now.

### Step 3.1 — Identify the Site Category

If not already known from the codebase, ask one question:

> "What category does this product fall into? For example: B2B SaaS dashboard,
> marketing / landing site, e-commerce, fintech portal, developer tool,
> consumer app, portfolio, editorial / media, internal tool, other?"

Record: `site_category: [confirmed category]` in `HARNESS_STATE.md`.

### Step 3.2 — Route the Research Approach

```
/task-router "I need to research current frontend design trends for a [site_category].
Available tools: web search, agent-browser for scraping live sites.
What's the optimal research sequence to build an informed design position in the
shortest time? What should I look for and in what order?"
```

### Step 3.3 — Research Execution

**DELEGATE — Research Agent**
```
brief: "Research current design trends, award winners, techniques, and competitors
        for [site_category]. Return a structured research report."
context_provided: site_category, project_mode, tech_stack
tools_available: web_search, agent-browser
return_format: RESEARCH_REPORT.md (template below)
autonomy_level: full — execute all searches and return consolidated report
```

The Research Agent executes these in parallel workstreams, capped at **6 core searches + 2 competitor deep-dives** (expandable if results are thin):

**PARALLEL BLOCK — Research Workstreams**
```
tasks:
  - Workstream A — Award & Category Research:
      web_search("awwwards site of the year 2024 2025 [site_category]")
      web_search("best [site_category] web design 2025")

  - Workstream B — Pattern & Convention Research:
      web_search("[site_category] UI design trends 2025")
      web_search("[site_category] UX patterns best practices 2025")

  - Workstream C — Technique Research:
      web_search("CSS scroll-driven animations view transitions 2025 production")
      web_search("[site_category] typography motion micro-interaction trends 2025")

  - Workstream D — Competitive Deep-Dives (top 2 from Workstream A/B results):
      agent-browser --session comp1 open [competitor 1 URL] && agent-browser --session comp1 wait --load networkidle
      agent-browser --session comp1 set viewport 1440 900
      agent-browser --session comp1 screenshot --annotate competitor-1-hero.png
      agent-browser --session comp1 snapshot -i
      # Note: typography, palette, motion vocabulary, layout approach
      agent-browser --session comp1 close

      agent-browser --session comp2 open [competitor 2 URL] && agent-browser --session comp2 wait --load networkidle
      agent-browser --session comp2 set viewport 1440 900
      agent-browser --session comp2 screenshot --annotate competitor-2-hero.png
      agent-browser --session comp2 snapshot -i
      agent-browser --session comp2 close

sync_condition: all workstreams complete
merge_into: RESEARCH_REPORT.md synthesis
```

**Expansion rule**: If core searches return fewer than 3 relevant award-winning references,
run up to 4 additional targeted searches. Otherwise, cap here.

### Step 3.4 — Synthesise the Research Report

Write `RESEARCH_REPORT.md`:

```markdown
# RESEARCH REPORT — [PROJECT NAME]
site_category: [category]
generated: [timestamp]
searches_executed: [count]
competitors_analysed: [count]

## What's Winning Right Now in This Category
[3–5 bullet points — specific, concrete. Not "clean design" but
"editorial-style hero sections with large serif display type and
asymmetric grid layouts — see [URL]"]

## Technique Frontier (What's Technically Possible and Being Used)
[New CSS/JS techniques seen in production. Each with a URL example.]
- Scroll-driven animations: [status — widely adopted / emerging / experimental]
- View Transitions API: [status + example]
- CSS container queries: [status + example]
- Variable fonts: [status + example]
- [other relevant technique]: [status + example]

## Category Visual Conventions
[What users of this product type have been conditioned to expect.
These are the conventions — we can follow or deliberately break them,
but we must know them first.]
- Navigation pattern: [e.g., sticky top nav with logo-left, links-right]
- Hero pattern: [e.g., large headline + CTA + screenshot/mockup]
- Data visualisation approach: [if applicable]
- Trust signals: [how this category builds credibility visually]

## Typography Landscape in This Category
- Dominant approach: [e.g., geometric sans-serif for headings, system UI for body]
- Breaking from convention: [e.g., editorial serif + code-like monospace]
- Fonts to consider: [specific names with rationale]
- Fonts that are saturated / to avoid: [specific names]

## Color Landscape in This Category
- Dominant palette approach: [e.g., dark mode with vibrant accent, or clean white with one bold color]
- What creates differentiation: [e.g., most use blue — therefore NOT blue]
- Specific palette observations from research:

## Motion Vocabulary in This Category
- Baseline expectation: [what users assume will move]
- Differentiating moves: [what creates delight in the best examples]
- What to avoid: [what looks dated or inappropriate for this category]

## Competitor Analysis
| Competitor | Strongest Design Element | Weakest Element | What to Learn | What to Reject |
|---|---|---|---|---|
| [name] | [element] | [element] | [note] | [note] |
| [name] | [element] | [element] | [note] | [note] |

## Strategic Design Opportunities
[Where is the category playing it safe that we can exploit?]
[What is being done by everyone that we can deliberately NOT do?]
[What is the one technique or aesthetic move that would make this product
visually distinctive within its category?]

## Reference Shortlist (5–7 URLs for Design Direction)
1. [URL] — [why it's a reference] — [specific thing to borrow]
2. [URL] — [why it's a reference] — [specific thing to borrow]
3. [URL] — [why it's a reference] — [specific thing to borrow]
4. [URL] — [why it's a reference] — [specific thing to borrow]
5. [URL] — [why it's a reference] — [specific thing to borrow]
```

Update `HARNESS_STATE.md`: `research_status: COMPLETE`

**GATE 1 — RESEARCH COMPLETE** ✅: Research report written with category analysis, technique frontier, and reference shortlist.

---

## PHASE 4 — DISCOVERY CONVERSATION `[BOTH]`

**Entry**: Gate 1 passed. Research report exists.

> Claude Code arrives at this conversation informed. The research means the questions
> are sharper. The references are specific. The options are grounded in what is
> actually being built in the world right now, not in abstract design taste.

Load Stage 2 skill: `brand-guidelines/SKILL.md` if user mentions an existing brand.

### Fast-Path Check

If the user has provided a comprehensive brief covering all Round 1–3 topics:
→ Skip to Completeness Gate
→ Fill in any gaps with targeted questions (max 3)
→ Do NOT re-ask what's already been answered

### Round 1 — Foundation

Ask all of these before proceeding:

```
1. What is this interface FOR in one precise sentence?
   What is the single feeling a user should have in the first 3 seconds?

2. Describe the target user with uncomfortable specificity.
   Not "developers" — "senior engineers at Series B fintechs who've been
   burned by bad tooling and are evaluating us against three competitors."

3. [BROWNFIELD ONLY] Looking at the current design — what does it
   make you feel, and what is it supposed to make people feel?
   Where is the gap biggest?

4. [GREENFIELD ONLY] Name 3 things — products, spaces, physical objects,
   anything — whose design you genuinely respect. What quality do they share?

5. Is there a brand guide, existing palette, or typography already defined?
   If yes — share it. If no — is that creative freedom, or do we need to
   establish one first?

6. The primary action. What is the single thing this UI must make effortless
   above everything else?
```

### Round 2 — Aesthetic Lock

After Round 1 is fully answered:

```
7. I've done research on [site_category] design. Here's what I found:
   [2-sentence research summary from the report].
   Given this landscape — do you want to work WITH the category conventions
   or deliberately AGAINST them? Neither is wrong.

8. When you picture the ideal version of this — what word or phrase lands first?
   Not a genre. An emotional quality.
   ("Earned authority." "Warm precision." "Unsettling intelligence." Etc.)

9. [BROWNFIELD] From the debt map — the preservation list includes [items].
   Are there things on there you WANT to replace, even if they're technically fine?
   Any emotional attachments to specific components or approaches?

10. Aesthetics to explicitly avoid. Competitors, industries, visual moods,
    design clichés you don't want anywhere near this product.

11. Animation — yes with intention, maximally expressive, or restrained elegance?
    This is a spectrum question, not binary.

12. Which single screen, component, or interaction is THE most important?
    The one that must be extraordinary above all others. Build there first.
```

### Round 3 — Constraints

```
13. Performance requirements — is Core Web Vitals a hard target?
    Any LCP ceiling, or just "feel fast"?

14. Accessibility — WCAG AA as a floor, or specific org standards?

15. Who maintains this after delivery?
    Conservative-readable code, or can it be expressive?

16. Timeline — proof of direction, or production-grade?

17. [BROWNFIELD] Migration approach preference:
    (a) Surgical — fix the debt incrementally while keeping everything running
    (b) Component-by-component — rebuild each component, replace in place
    (c) Parallel — build the new design alongside, then cut over
    (d) Tell me what you recommend based on the debt map
```

### Completeness Gate

Before exiting this phase, every answer to these must be solid:

```
□ I can describe this product and user in two precise sentences
□ I know the emotional target state ("what it should feel like")
□ I know whether we're working with or against category conventions — and why
□ I have a locked aesthetic direction (one sentence)
□ I have 5–7 specific references with notes
□ I know the primary action the UI must serve
□ I know the technical stack and constraints
□ I know what to build first
□ [BROWNFIELD] I know what is preserved vs. transformed
□ [BROWNFIELD] I know the migration approach
```

If any box is empty → ask one targeted question. Do not guess. Do not proceed.

**PHASE 4 EXIT**: All completeness checks pass ✅

---

## PHASE 5 — DESIGN DIRECTION DECLARATION `[BOTH]`

**Entry**: Phase 4 complete.

**Hard gate. No code before approval. No exceptions.**

Load Stage 2 skill: `theme-factory/SKILL.md` now.

### Step 5.1 — Route the Direction

```
/task-router "I'm declaring a design direction for a [site_category].
Aesthetic: [one-liner from discovery].
Tech stack: [stack].
[BROWNFIELD]: brownfield strategy is [approach], preservation list is [items].
Should I: generate a custom design system from scratch using frontend-design skill,
use theme-factory as a starting palette and extend it,
or use algorithmic-art for a generative approach?
What combination of skills gets the most expressive result within the constraints?"
```

### Step 5.2 — Write the Declaration

```markdown
# DESIGN DIRECTION DECLARATION
project: [name]
site_category: [category]
project_mode: [GREENFIELD | BROWNFIELD]
version: 1.0
status: PENDING_APPROVAL

---

## Conceptual Anchor
[One sentence. The unifying idea all decisions serve.]
[e.g., "Precision that respects intelligence — every element earns its place
or it doesn't exist."]

## Aesthetic Direction
[One sentence — specific, committed, not vague.]
[e.g., "Surgical editorial clarity with a single moment of controlled drama —
think Linear's restraint with Stripe's purposeful motion."]

## Relationship to Category Conventions
[Are we working WITH or AGAINST the category? Why?]
[What specific conventions do we follow? Which do we deliberately reject?]

## Research Findings Applied
[3 specific things from the research that directly shaped this direction]

## [BROWNFIELD ONLY] Preservation Decisions
Items preserved from existing codebase: [list with rationale]
Items being transformed: [list with transformation approach]
Items being replaced: [list — requires user approval if not already given]

---

## SYSTEM SPECIFICATIONS

### Typography
Display font: [name] — [rationale in one clause]
Body font: [name] — [rationale in one clause]
Monospace (if needed): [name]
Type scale:
  --text-xs:   [value]
  --text-sm:   [value]
  --text-base: [value]
  --text-lg:   [value]
  --text-xl:   [value]
  --text-2xl:  [value]
  --text-3xl:  [value]
  --text-4xl:  [value]
Font source: [Google Fonts URL / Adobe / system]

### Color System
[BROWN: annotate which values are new vs. preserved from existing codebase]
--color-bg:              [hex]  [note]
--color-surface:         [hex]  [note]
--color-surface-raised:  [hex]  [note]
--color-surface-overlay: [hex]  [note]
--color-text-primary:    [hex]  [note]
--color-text-secondary:  [hex]  [note]
--color-text-muted:      [hex]  [note]
--color-accent:          [hex]  [rationale — WHY this accent]
--color-accent-muted:    [hex]
--color-accent-subtle:   [hex]
--color-border:          [hex]
--color-border-strong:   [hex]
--color-error:           [hex]
--color-warning:         [hex]
--color-success:         [hex]
Contrast ratio text/bg: [value] [WCAG AA: pass/fail]
Contrast ratio accent/bg: [value] [WCAG AA: pass/fail]

### Motion Vocabulary
Philosophy: [restrained / intentional / expressive]
Page load: [staggered reveals / fade cascade / instant]
Hover states: [duration]ms [easing]
Focus transitions: [duration]ms [easing]
Content reveals: [approach]
The signature animation: [the one memorable motion this product has]
Motion library: [CSS-only / Framer Motion / GSAP / Web Animations API]
Respect prefers-reduced-motion: YES (non-negotiable)

### Spatial System
Spacing scale base: [4px / 8px]
Layout system: [CSS Grid / Flexbox / both]
Breakpoints:
  --bp-sm: [value]
  --bp-md: [value]
  --bp-lg: [value]
  --bp-xl: [value]
Container max-width: [value]
Grid columns: [desktop] / [tablet] / [mobile]
Key spatial decision: [the intentional layout choice — asymmetry / density / breathing room]

---

## THE ONE UNFORGETTABLE THING
[What is the single detail someone will screenshot and share with a designer friend?
This must be specific. Not "great animations" but "the way data rows cascade in
on scroll with a 40ms stagger and a barely-perceptible vertical blur that dissolves."]

## References
1. [URL] — borrowing: [specific, named technique or quality]
2. [URL] — borrowing: [specific, named technique or quality]
3. [URL] — borrowing: [specific, named technique or quality]
4. [URL] — borrowing: [specific, named technique or quality]
5. [URL] — borrowing: [specific, named technique or quality]

## What We Are Explicitly NOT Doing
[At least 4 entries. These are commitments, not suggestions.]
- [Anti-pattern / design cliché]
- [Competitor aesthetic]
- [Category convention we're rejecting]
- [Technical shortcut that would compromise the vision]
```

### Step 5.3 — Committee Review: Design Direction

**COMMITTEE SESSION — Gate 2: Design Direction Approval**
```
personas_summoned: Sally (UX), Winston (Architect), Amelia (Dev), John (PM), Spike (Presentation Master)
artifact_under_review: DESIGN_DIRECTION_DECLARATION.md

BRIEFING:
Each agent receives ONLY:
- The Design Direction Declaration
- RESEARCH_REPORT.md
- [BROWNFIELD] DESIGN_DEBT_MAP.md
They do NOT receive the discovery conversation transcript.

ROUND 1 — Independent Assessment (PARALLEL):
  Sally:  Does this direction serve user needs? Will the emotional target land?
          Will the unforgettable thing create genuine delight?
  Winston: Is the tech stack sound? Will the motion library choice scale?
           Are the performance targets achievable with this design ambition?
  Amelia:  Can this be built maintainably? Is the type scale implementable?
           Are there implicit dependencies in the specification?
  John:    WHY this direction over alternatives? Does every choice trace to
           user value or business impact? What's the risk if this is wrong?
  Spike:   Is this BOLD enough? Will this be featured or forgotten?
           Does the visual hierarchy tell a story? Is the unforgettable thing
           actually unforgettable or is it playing it safe?

ROUND 2 — Cross-Examination:
  Key tension: Spike vs. Winston — "Visual hierarchy demands this effect" vs.
               "That adds complexity for marginal user benefit"
  Key tension: Sally vs. Spike — "Users need clarity and simplicity" vs.
               "Every element must earn its place through visual impact"
  Key tension: John vs. everyone — "WHY?" on every specification that doesn't
               trace directly to user value

ROUND 3 — Verdict:
  CONSENSUS: all ≥7 → present to user for final approval
  CONDITIONAL_PASS: one <7, addressable → note the concern, present to user
  BLOCK: two+ <7 → revise declaration before user sees it
```

### Step 5.4 — User Approval Gate

Present the declaration (committee-vetted). Ask one question:

> "Does this match your vision? Specific feedback on any section, or approve as written?"

**LOOP**: Receive feedback → revise → re-present → repeat until explicit approval received.

Update `HARNESS_STATE.md`:
```
design_direction_status: APPROVED
gates_passed: [..., GATE_2_DESIGN_APPROVED]
committee_sessions: [n+1]
```

**GATE 2 — DESIGN APPROVED** ✅

---

## PHASE 6 — EXECUTION LOOP `[BOTH]`

**Entry**: Gate 2 passed.
**Loop**: BUILD → VALIDATE → SCORE → ITERATE until score ≥ 8/10 for 2 consecutive cycles.

Load Stage 2 skills now: `code-reviewer/SKILL.md`, `senior-prompt-engineer/SKILL.md`
(and `algorithmic-art/SKILL.md` or `canvas-design/SKILL.md` only if the design direction calls for them).

### Step 6.0 — Development Environment

Start the dev server before any build or validation work.

```bash
# Framework-appropriate command
npm run dev    # or: npx vite / npx next dev / etc.
```

Verify:
- Server running on detected port
- No console errors on initial load
- Base route renders

Record in `HARNESS_STATE.md`: `dev_url: http://localhost:[port]`

If the server fails to start → debug and resolve before proceeding. No builds without a running dev server.

### Step 6.1 — Component Dependency Graph

Before building, map which components are independent vs. dependent:

```markdown
### Component Dependency Graph
independent: [nav, footer, hero, sidebar]         → PARALLEL BUILD eligible
depends_on_nav: [mobile-menu]                      → SEQUENTIAL after nav
depends_on_hero: [hero-animation]                  → SEQUENTIAL after hero
shared_dependency: [design-tokens, base-layout]    → BUILD FIRST (blocking)
```

Build shared dependencies first. Then fan out independent components.

### Step 6.2 — Route the Build Approach

Before writing any code for each new component:

```
/task-router "Building [component/screen] for a [site_category] in [mode].
Design direction: [one-liner].
[BROWNFIELD]: existing implementation at [file path], debt notes: [from map].
Stack: [framework, styling system].
Options: web-artifacts-builder scaffold, senior-frontend component generator,
manual build against design tokens.
What's the fastest path to production-grade for THIS specific component?"
```

### Step 6.3 — [BROWNFIELD] Read Before Writing

**For every brownfield component, before touching it:**

```bash
serena: read_file("[component path]")
serena: find_referencing_symbols("[ComponentName]", "[file path]")
```

Understand what it does and what depends on it before changing anything. The debt map classifies each component — follow the classification:

| Debt Map Action | What it means |
|---|---|
| `preserve` | Do not touch. Document why. Move on. |
| `restyle` | CSS changes only. No JSX structural changes. |
| `refactor` | Structural changes allowed. Functionality preserved. |
| `replace` | Rebuild. Requires explicit user confirmation before deleting old code. |

Never upgrade a classification without user confirmation. A `restyle` never silently becomes a `replace`.

### Step 6.4 — Parallel Component Build

For independent components identified in the dependency graph:

**PARALLEL BLOCK — Component Build**
```
tasks:
  - Build Agent A: [component-name-1] against design declaration
  - Build Agent B: [component-name-2] against design declaration
  - Build Agent C: [component-name-3] against design declaration
sync_condition: all components built and passing lint
merge_into: Integration verification step
```

Each Build Agent operates as:
```
DELEGATE — Build Agent [component]
  brief: "Build [component] to the Design Direction Declaration specification."
  context_provided: Design Direction Declaration, design tokens, component dependency graph
  tools_available: serena (read/write), bash (dev server, tests)
  return_format: completed component files + internal checklist confirmation
  autonomy_level: full — build and return
```

### Step 6.5 — Build Checklist (Every Component)

Every line of code traces back to the Design Direction Declaration.

**Before committing any component — internal checklist:**

```
□ Tokens used from CSS variables — no hardcoded hex values
□ Font from the declared system — not a default
□ Spacing from the spacing scale — not arbitrary px
□ All interactive states designed: hover, focus, active, disabled
□ All data states designed: loading, empty, error, success
□ Signature animation present where it belongs
□ prefers-reduced-motion respected for all animations
□ No Inter / Roboto / Arial unless explicitly in the declaration
□ No purple gradient unless explicitly in the declaration
□ No component that exists only on the happy path
□ [BROWNFIELD] No silent deletions — preserved items are preserved
```

### Step 6.6 — Incremental Checkpoints & Commits

After each component:

```bash
# Commit the work
git add -A
git commit -m "harness: [component name] — [brief description]"

# Update state
cat >> HARNESS_STATE.md << EOF
checkpoint: [component name] complete
timestamp: [ISO]
files_modified: [list]
debt_items_resolved: [list from debt map, brownfield only]
next_component: [name]
EOF
```

### Step 6.7 — Automated Quality Scripts

```bash
python /mnt/skills/user/code-reviewer/scripts/code_quality_checker.py ./src --verbose
python /mnt/skills/user/senior-frontend/scripts/bundle_analyzer.py .
python /mnt/skills/user/code-reviewer/scripts/review_report_generator.py ./src
```

**GATE 3 — COMPONENT BUILT** ✅: First deliverable complete, quality scripts pass.

---

## PHASE 7 — VISUAL VALIDATION LOOP `[BOTH]`

**Entry**: Gate 3 passed.
**Loop**: RENDER → INSPECT → SCORE → ELEVATE → repeat until ≥ 8/10 for 2 consecutive cycles.

### Step 7.1 — Parallel Validation

All validation dimensions are independent and run concurrently via agent-browser sessions.

**PARALLEL BLOCK — Validation Suite**
```
tasks:
  - Visual Audit Agent (agent-browser --session visual):
      agent-browser --session visual open [dev_url]
      agent-browser --session visual wait --load networkidle
      agent-browser --session visual set viewport 375 812
      agent-browser --session visual screenshot --annotate validation-mobile.png
      agent-browser --session visual set viewport 768 1024
      agent-browser --session visual screenshot --annotate validation-tablet.png
      agent-browser --session visual set viewport 1440 900
      agent-browser --session visual screenshot --annotate validation-desktop.png
      # For each breakpoint verify against declaration:
      # Typography, color tokens, spacing scale, motion, composition
      # Annotated refs allow direct element-level inspection
      agent-browser --session visual snapshot -i
      # Report with @eN refs and CSS selectors for every deviation
      agent-browser --session visual close

  - Accessibility Audit Agent (agent-browser --session a11y):
      agent-browser --session a11y open [dev_url]
      agent-browser --session a11y wait --load networkidle
      agent-browser --session a11y eval "axe.run()"  # or equivalent
      # Tab through every interactive element
      agent-browser --session a11y snapshot  # Full accessibility tree
      # Heading hierarchy check, color contrast, form labels, alt text, aria
      agent-browser --session a11y close

  - Performance Audit Agent (bash — no agent-browser session needed):
      npx lighthouse [dev_url] --output=json --output-path=./lighthouse-report.json --chrome-flags="--headless"
      # Targets: LCP < 2.5s | CLS < 0.1 | Performance ≥ 85 | FID/INP < 200ms
      # Total page weight, render-blocking resources, unused CSS/JS

  - Animation Audit Agent (agent-browser --session animation):
      agent-browser --session animation open [dev_url]
      agent-browser --session animation wait --load networkidle
      # Record page load animation for frame-by-frame review
      agent-browser --session animation record start ./animation-review.webm
      agent-browser --session animation scroll down 500
      agent-browser --session animation record stop
      # Snapshot interactive elements and test hover transitions
      agent-browser --session animation snapshot -i
      # Hover on 5 interactive elements — transition consistency
      agent-browser --session animation set media prefers-reduced-motion
      agent-browser --session animation screenshot reduced-motion-test.png
      # Verify ALL animations respect reduced motion
      # Verify signature animation lands
      agent-browser --session animation close

sync_condition: all 4 audits complete
merge_into: Scoring synthesis
```

### [BROWNFIELD] Before/After Visual Diff

Use agent-browser's built-in visual diff against the Phase 2B baselines:

```bash
# Take current full-page screenshot for comparison
agent-browser open [dev_url] && agent-browser wait --load networkidle
agent-browser screenshot --full current-build-full.png

# Pixel diff against brownfield baseline — returns mismatch percentage
agent-browser diff screenshot --baseline brownfield-baseline-full.png

# Per-breakpoint diffs for detailed comparison
agent-browser set viewport 375 812
agent-browser screenshot current-mobile.png
agent-browser diff screenshot --baseline brownfield-baseline-mobile.png

agent-browser set viewport 1440 900
agent-browser screenshot current-desktop.png
agent-browser diff screenshot --baseline brownfield-baseline-desktop.png
agent-browser close
```

Diff output highlights changed pixels in red with a mismatch percentage.
Assess: visual improvement confirmed, functional parity, any regressions flagged by unexpected diff regions.

### Step 7.2 — Score and Iterate

After each validation cycle, score honestly:

```markdown
## VALIDATION CYCLE [N] — [component] — [timestamp]
visual_design:   [n]/10  [specific note]
typography:      [n]/10  [specific note]
color_system:    [n]/10  [specific note]
motion:          [n]/10  [specific note]
layout:          [n]/10  [specific note]
accessibility:   [n]/10  [WCAG pass rate]
performance:     [n]/10  [LCP, CLS values]
overall:         [n]/10

validation_findings: [key issues from parallel audits]
fixes_applied_this_cycle: [what changed]
```

Write to both `HARNESS_STATE.md` and `ITERATION_LOG.md`.

### Step 7.3 — Elevation Moves by Symptom

Route the fix before applying it:

```
/task-router "Validation cycle [n] scored [x]/10. Issues identified: [list].
Root cause appears to be [analysis].
Highest-impact fix: is it a CSS/token change, a design declaration revision,
a theme-factory palette adjustment, a bundle optimisation, or something else?
What's the right tool here?"
```

| Validation Finding | Elevation Move |
|---|---|
| Typography feels generic | Increase display scale contrast. Push size differential. Try weight extremes. |
| Color feels corporate/safe | Push the accent further. Reduce palette to fewer, more confident choices. |
| Feels cold or clinical | Add texture via CSS noise overlay. Warm the surface color 2–3 steps. Soften radius. |
| Too busy, too much | Remove 30% of decoration. Rebuild with restraint. Density without decoration. |
| Flat — no depth | Layer subtle shadows. Introduce blur+transparency. Z-axis differentiation. |
| Static — no life | Implement the signature animation. It must be present by cycle 2. |
| Mobile layout broken | Fluid type with clamp(). Check container queries. Audit safe-area-inset. |
| Slow LCP | Preload hero assets. Lazy-load below fold. Inline critical CSS. |
| CLS present | Reserve space for async content. Explicit dimensions on all media elements. |
| Animations janky | Compositor-only properties (transform, opacity). Remove will-change abuse. |
| Accessibility failures | Fix DOM order first. Then focus states. Then contrast. In that order. |
| "Unforgettable thing" absent | Stop all other work. Implement it. Everything else can wait. |

### Step 7.4 — Committee Review: First ≥8 Score

When overall score first reaches ≥8/10, before running the second confirmation cycle:

**COMMITTEE SESSION — Gate 4: Visual Validation**
```
personas_summoned: Sally (UX), Winston (Architect), Amelia (Dev), John (PM), Quinn (QA)
artifact_under_review: current build at [dev_url] + validation scores + screenshots

BRIEFING:
Each agent receives:
- Annotated screenshots at all breakpoints (with @eN element refs)
- Validation scores from all audit dimensions
- Design Direction Declaration (the contract)
- [BROWNFIELD] Visual diff output (mismatch % and diff images) from before/after comparison
They review the LIVE BUILD via agent-browser, not just scores.

ROUND 1 — Independent Assessment (PARALLEL):
  Sally:  Does the experience FEEL right? Is the emotional target landing?
          Would the target user described in discovery actually prefer this?
  Winston: Is the implementation sound? Any architectural concerns with how
           the design was achieved? Performance tradeoffs acceptable?
  Amelia:  Code quality of the implementation. Are there shortcuts that will
           bite later? Test coverage gaps? File paths and specifics.
  John:    Does this serve the primary action? Is the hierarchy clear?
           WHY would a user choose this over the competitor?
  Quinn:   Can this be tested? Are interactive states consistent?
           Accessibility gaps the automated audit missed?

ROUND 2 — Cross-Examination:
  Key question for all: "Is this actually good, or just technically passing?"
  Key tension: Sally vs. Quinn — "It feels wonderful" vs. "But can you test it?"
  Key tension: Amelia vs. everyone — "The code behind this is fragile" vs.
               "But the output is beautiful"

ROUND 3 — Verdict:
  CONSENSUS: all ≥7 → proceed to second confirmation cycle
  CONDITIONAL_PASS: one <7, addressable → fix, then run second cycle
  BLOCK: two+ <7 → more iteration needed before second cycle
```

### Loop Exit Condition

```
overall < 8/10?
  → route the fix → apply → re-validate → re-score → loop

overall ≥ 8/10 for cycle 1?
  → run committee review (Step 7.4)
  → if committee passes → continue to second cycle

overall ≥ 8/10 for 2 consecutive cycles (post-committee)?
  → advance to Phase 8
```

### Loop Escape Conditions

```
ESCAPE RULE 1 — Iteration Cap:
  After 5 cycles without reaching 8/10 → ESCALATE to user:
  "After 5 iterations, the highest score achieved is [x]/10.
  Blocking factors: [list]. Options:
  (a) Accept current score and advance with documented limitations
  (b) Revise the design declaration to accommodate constraints
  (c) Address blocking factors first (may require external changes)"
  User can override gate at any time with explicit approval.

ESCAPE RULE 2 — Structural Ceiling:
  If the same dimension scores <6 for 3 consecutive cycles AND the root
  cause is external (third-party scripts, mandated brand constraints,
  legacy dependencies that can't be changed):
  → Auto-flag as structural limitation
  → Score that dimension as "constrained: [n]/10 (ceiling: [reason])"
  → Remaining dimensions must still reach 8/10

ESCAPE RULE 3 — User Override:
  "Ship it" is always available. Logged with accepted risks.
  Committee concerns are recorded but do not block a user override.
```

Update `HARNESS_STATE.md` on escape: `iteration_cap_reached: true` with documented reason.

**GATE 4 — VISUAL VALIDATED** ✅: Two consecutive cycles ≥ 8/10 (or user override with documented limitations).
**GATE 5 — PERFORMANCE PASSED** ✅: LCP < 2.5s, CLS < 0.1, score ≥ 85.
**GATE 6 — ACCESSIBILITY PASSED** ✅: WCAG 2.1 AA fully compliant.

---

## PHASE 8 — PRODUCTION HARDENING `[BOTH]`

**Entry**: Gates 4, 5, 6 passed.

### Step 8.0 — Test Coverage

Before final review, ensure testing baseline exists:

```bash
# Component tests for all interactive components
npm test -- --coverage

# Visual regression baseline captured (annotated for element identification)
agent-browser open [dev_url] && agent-browser wait --load networkidle
agent-browser screenshot --full --annotate visual-regression-baseline.png
agent-browser close

# Critical user flows have integration test coverage
# (at minimum: primary action flow identified in discovery)
```

Pass condition: critical interactive components have tests. Primary user flow has coverage.

### Step 8.1 — Final Code Review

**PARALLEL BLOCK — Code Review Suite**
```
tasks:
  - Code Quality Agent:
      python /mnt/skills/user/code-reviewer/scripts/code_quality_checker.py ./src --verbose
  - PR Analysis Agent:
      python /mnt/skills/user/code-reviewer/scripts/pr_analyzer.py ./src
  - Review Report Agent:
      python /mnt/skills/user/code-reviewer/scripts/review_report_generator.py ./src --final
  - Bundle Analysis Agent:
      python /mnt/skills/user/senior-frontend/scripts/bundle_analyzer.py . --final-report
sync_condition: all scripts complete
merge_into: Final review synthesis
```

Pass condition: 0 critical issues, 0 security flags, ≤ 3 warnings (each documented with rationale if accepted).

### Step 8.2 — [BROWNFIELD] Debt Resolution Audit

```bash
# Confirm all debt items from the map are in the correct state
cat DESIGN_DEBT_MAP.md | grep "action:"
# Cross-reference against what was actually done
# Any item marked 'replace' that wasn't replaced → flag for user
# Any item marked 'preserve' that was touched → flag for user immediately
```

### Step 8.3 — Cross-Browser Smoke Test

```bash
# Chrome desktop (default agent-browser)
agent-browser --session chrome open [dev_url] && agent-browser --session chrome wait --load networkidle
agent-browser --session chrome set viewport 1440 900
agent-browser --session chrome screenshot --annotate cross-browser-chrome.png
agent-browser --session chrome errors
agent-browser --session chrome console
agent-browser --session chrome close

# Mobile emulation
agent-browser --session mobile open [dev_url] && agent-browser --session mobile wait --load networkidle
agent-browser --session mobile set device "iPhone 14"
agent-browser --session mobile screenshot --annotate cross-browser-iphone.png
agent-browser --session mobile errors
agent-browser --session mobile close

# Dark mode variant
agent-browser --session dark --color-scheme dark open [dev_url] && agent-browser --session dark wait --load networkidle
agent-browser --session dark set viewport 1440 900
agent-browser --session dark screenshot --annotate cross-browser-dark.png
agent-browser --session dark close
```

Report browser-specific failures with recommended fix. Annotated screenshots allow
direct ref-based identification of problem elements.

### Step 8.4 — Final Bundle

```bash
# web-artifacts-builder projects:
bash /mnt/skills/examples/web-artifacts-builder/scripts/bundle-artifact.sh

# Standard projects:
npm run build
```

### Step 8.5 — Committee Review: Production Ready (Pre-Mortem)

**COMMITTEE SESSION — Gate 7: Production Ready**
```
personas_summoned: Sally (UX), Winston (Architect), Amelia (Dev), John (PM), Quinn (QA), Bob (SM)
artifact_under_review: final build + all review reports + test coverage + bundle analysis

BRIEFING:
Each agent receives:
- Final build at [dev_url]
- Code review reports (all scripts)
- Bundle analysis report
- Test coverage report
- Validation scores (all cycles)
- [BROWNFIELD] Debt resolution audit results

This is a PRE-MORTEM. Every persona answers:
"What will go wrong in production that we haven't caught?"

ROUND 1 — Independent Assessment (PARALLEL):
  Sally:  What will confuse users that we haven't tested for?
          What edge case in the user journey will break the experience?
  Winston: What will fail under scale? What architectural shortcut will bite?
           What dependency will cause problems in 6 months?
  Amelia:  What code will the next developer struggle with?
           What's untested that should be? What file paths are fragile?
  John:    What's the business risk if this ships as-is?
           What's missing that the user will notice in week 2?
  Quinn:   What test scenario wasn't covered? What will fail in
           a browser/device we didn't test? What accessibility gap remains?
  Bob:     Is the delivery checklist complete? Are all acceptance criteria met?
           What process step was skipped or abbreviated?

ROUND 2 — Cross-Examination:
  Focus: highest-severity concern from each agent
  Direct contradictions between agents
  "Zero findings is suspicious" rule — if any agent finds nothing wrong,
  the committee challenges them to look harder

ROUND 3 — Verdict:
  CONSENSUS: all ≥7, all concerns resolved or accepted → SHIP
  CONDITIONAL_PASS: concerns logged as known limitations → SHIP with documentation
  BLOCK: unresolved critical concern → fix before shipping

GUARD RAILS:
  User override ("Ship it") always available — logged with full committee concerns
  Diminishing returns: same concern blocked 3x → auto-downgrade to conditional
```

### Step 8.6 — Close Session

```bash
# Final commit
git add -A
git commit -m "harness: production ready — session complete"
```

```markdown
## HARNESS STATE — SESSION COMPLETE
session_end: [timestamp]
gates_passed: [all 7]
final_quality_score: [n]/10
iterations_run: [n]
iteration_cap_reached: [true/false]
committee_sessions: [n]
committee_overrides: [list if any]
[BROWNFIELD] debt_items_resolved: [n]/[total]
[BROWNFIELD] debt_items_preserved: [list]
[BROWNFIELD] debt_items_deferred: [list with reason]
key_decisions_this_session: [3–5 lines]
files_modified: [list]
git_branch: [branch name]
merge_status: [pending user review]
next_session_entry: [complete | or specific starting point]
```

**GATE 7 — PRODUCTION READY** ✅

---

## INTERRUPTION & RESUME PROTOCOL `[BOTH]`

### On Interruption (or context limit approaching)

```bash
# Commit current work
git add -A
git commit -m "harness: interrupt checkpoint — [phase] [step]"

cat >> HARNESS_STATE.md << EOF
## INTERRUPT CHECKPOINT — [timestamp]
phase: [current phase]
current_step: [specific step identifier]
current_component: [name]
iteration_n: [n]
last_scores: [all dimensions]
gates_passed: [list]
skills_loaded: [list]
dev_url: [URL if server was running]
git_branch: [branch]
[BROWNFIELD] debt_items_completed: [list]
[BROWNFIELD] debt_items_in_progress: [name + partial state]
committee_sessions_completed: [n]
next_action_on_resume: "[exact instruction — what to run first]"
session_notes: "[anything important the next session needs to know]"
EOF
```

### On Resume

```bash
# Always these first two
serena: activate_project("root")
serena: read_file("HARNESS_STATE.md")

# Confirm toolset hasn't changed
/task-router "Resuming a session at [phase / step]. Confirm skill and MCP
availability is the same as the prior session."

# Reload skills that were active (from skills_loaded in state)
# Read the research and direction
serena: read_file("RESEARCH_REPORT.md")
serena: read_file("DESIGN_DIRECTION_DECLARATION.md")

# [BROWNFIELD] Refresh debt map context
serena: read_file("DESIGN_DEBT_MAP.md")

# Restart dev server if needed
npm run dev

# Jump to recorded next_action_on_resume
# Do NOT restart from Phase 0
```

---

## COMMITTEE SESSION PROTOCOL (FULL REFERENCE)

This section defines the complete committee protocol used at all gate boundaries.

### Information Asymmetry Principle

Borrowed from BMAD's adversarial review (step-05-adversarial-review):
> "Use information asymmetry: load this step, and only it, in a separate subagent
> or process with read access to the project, but no context except the artifact."

Each committee member reviews the artifact with only the artifact and reference documents —
not the full conversation history of why decisions were made. They judge the output, not the process.

### Session Structure

```markdown
### COMMITTEE SESSION — [Gate/Decision Point]
trigger: [gate reached]
artifact_under_review: [file or decision]
personas_summoned: [names from gate-specific roster]

#### BRIEFING
Each agent receives ONLY:
- The artifact under review
- The Design Direction Declaration (for reference)
- [BROWNFIELD] The Debt Map
- Validation scores (if applicable)
They do NOT receive: conversation history, reasoning behind decisions,
or the orchestrator's opinion.

#### ROUND 1 — Independent Assessment (PARALLEL)
Each BMAD agent reviews in character and delivers:
- Score (1–10) against their domain
- Top 3 strengths (in their communication style)
- Top 3 concerns (in their communication style)
- One non-negotiable (the thing they won't ship without)

#### ROUND 2 — Cross-Examination (SEQUENTIAL)
The orchestrator synthesises Round 1, identifies tensions:
- Highest-severity concern from each agent
- Direct contradictions between agents
- Any non-negotiable that conflicts with another agent's position

#### ROUND 3 — Verdict
CONSENSUS: All agents score ≥7 in their domain → proceed
CONDITIONAL_PASS: One agent scores <7, group agrees addressable → proceed with action item
BLOCK: Two+ agents score <7, or non-negotiable invoked → work stops, remediation listed

#### GUARD RAILS
- User override: "Ship it" always available — logged with accepted risks
- Diminishing returns: Same concern blocked 3x → auto-downgrades to conditional
- Zero findings is suspicious: If any agent finds nothing wrong, re-analyse
```

### Committee Output Format

Written to `COMMITTEE_LOG.md`:

```markdown
## COMMITTEE SESSION [N] — [Gate] — [timestamp]
artifact: [name]
project_mode: [GREEN | BROWN]

### Sally (UX Designer) 🎨
score: [n]/10
strengths: [in her empathetic, story-driven voice]
concerns: [in her empathetic, story-driven voice]
non-negotiable: [statement]

### Winston (Architect) 🏗️
score: [n]/10
strengths: [calm, pragmatic assessment]
concerns: [calm, pragmatic assessment]
non-negotiable: [statement]

### Amelia (Developer) 💻
score: [n]/10
strengths: [file paths and specifics, zero fluff]
concerns: [file paths and specifics, zero fluff]
non-negotiable: [statement]

### John (Product Manager) 📋
score: [n]/10
strengths: [data-sharp, cuts through fluff]
concerns: [relentless WHY questions]
non-negotiable: [statement]

### [Gate-specific agent] [icon]
score: [n]/10
strengths: [in character]
concerns: [in character]
non-negotiable: [statement]

### Cross-Examination Highlights
[Key tensions and how they resolved]

### Verdict
decision: [CONSENSUS | CONDITIONAL_PASS | BLOCK]
conditions: [list if conditional]
blocking_concerns: [list if blocked]
dissenting_opinion: [if any agent was outvoted — record their view]
action_items: [specific, assigned to next phase]
```

---

## ITERATION LOG FORMAT

`ITERATION_LOG.md` — maintained throughout the session:

```markdown
# ITERATION LOG — [PROJECT NAME]

## [timestamp] — [Phase] — [component/screen]
project_mode: [GREEN | BROWN]
scores: visual=[n] typo=[n] color=[n] motion=[n] layout=[n] a11y=[n] perf=[n] overall=[n]
validation_findings: [bullet list from parallel audits]
fixes_applied: [bullet list]
task_router_calls: [list of routing decisions made]
parallel_blocks_executed: [list]
committee_sessions_this_cycle: [list]
debt_items_touched: [BROWNFIELD only]
gates_cleared_this_cycle: [list]
gates_still_pending: [list]
```

---

## QUALITY SCORING RUBRIC

Use this rubric identically in every scoring step:

| Score | What It Means |
|---|---|
| 1–3 | Broken or generic. No design voice. Functional at best. |
| 4–5 | Competent but unmemorable. Correct but not designed. Category-default. |
| 6–7 | Clear intent. Good execution. Missing the unforgettable thing. |
| 8–9 | Award-candidate level. Strong voice, excellent execution, distinctive moments. |
| 10 | Awwwards / CSS Design Award level. Would be featured and shared. |

**The harness minimum standard is 8. The goal is 9.**

Category-relative adjustment: An 8/10 for a fintech compliance dashboard means
something different than 8/10 for a creative portfolio. The committee naturally
adjusts for this through their domain-specific perspectives.

---

## CANONICAL CALL PATTERNS

### `/task-router` Framings

```bash
# Mode detection
/task-router "Examining a [description] codebase. Should this be treated as
greenfield or brownfield? Key findings: [3 bullets from Phase 1 probe]"

# Tool selection
/task-router "Building [component]. Available: [skill list].
Tech: [stack]. Constraints: [list]. Optimal combination and sequence?"

# Brownfield strategy
/task-router "Brownfield audit complete. Debt summary: [3 lines].
Strategy options: surgical / component-rebuild / design-system-first / hybrid.
What does the skill set make most achievable here?"

# Research routing
/task-router "Researching [site_category] design. Available: web search,
agent-browser for live site scraping. Optimal research sequence?"

# Problem resolution
/task-router "Cycle [n] scored [x]/10. Issues: [list]. Root cause: [analysis].
Highest-impact fix from available tools?"

# Phase transition
/task-router "Completing Phase [n] for a [mode] [category] project.
Entering Phase [n+1]. What approach and tools are optimal for this next phase?"
```

### `/agent-browser` Patterns

```bash
# Screenshot capture at breakpoints (use annotated for element-level inspection)
agent-browser open [URL] && agent-browser wait --load networkidle
agent-browser set viewport 375 812
agent-browser screenshot --annotate [name]-mobile.png
agent-browser set viewport 768 1024
agent-browser screenshot --annotate [name]-tablet.png
agent-browser set viewport 1440 900
agent-browser screenshot --annotate [name]-desktop.png

# Interactive element audit (snapshot first, then interact using refs)
agent-browser snapshot -i          # Get @eN refs for all interactive elements
agent-browser click @e1            # Test hover/focus states
agent-browser get text @e1         # Verify content
agent-browser snapshot -i -C       # Include cursor-interactive elements (onclick divs)

# Accessibility quick check
agent-browser snapshot             # Full accessibility tree (not just interactive)
agent-browser eval "axe.run()"     # If axe-core loaded

# Reduced motion test
agent-browser set media prefers-reduced-motion
agent-browser screenshot reduced-motion-test.png

# Performance via Lighthouse CLI (separate from agent-browser)
npx lighthouse [URL] --output=json --output-path=./lighthouse.json --chrome-flags="--headless"

# Video recording for animation review
agent-browser record start ./animation-review.webm
agent-browser scroll down 500
agent-browser record stop

# Visual diff against baseline (brownfield before/after)
agent-browser screenshot --full current.png
agent-browser diff screenshot --baseline brownfield-baseline-full.png
# Returns pixel diff image with mismatch percentage

# Snapshot diff to verify DOM changes after an action
agent-browser snapshot -i              # Baseline
agent-browser click @e3                # Action
agent-browser diff snapshot            # Shows +additions -removals

# Page-to-page comparison (e.g. staging vs production)
agent-browser diff url [staging-url] [production-url] --screenshot --wait-until networkidle

# Parallel sessions for concurrent validation
agent-browser --session visual open [URL]
agent-browser --session a11y open [URL]
agent-browser --session animation open [URL]
# Each session is isolated — refs, state, viewport are independent
# Always close sessions when done:
agent-browser --session visual close
agent-browser --session a11y close
agent-browser --session animation close

# Command chaining for efficiency (when intermediate output isn't needed)
agent-browser open [URL] && agent-browser wait --load networkidle && agent-browser screenshot --annotate capture.png

# Dark mode testing
agent-browser --color-scheme dark open [URL] && agent-browser wait --load networkidle
agent-browser screenshot --annotate dark-mode.png

# Chrome DevTools profiling for performance investigation
agent-browser profiler start
# ... perform actions ...
agent-browser profiler stop trace.json
```

---

## THE ARTIST PRINCIPLES

These are not a checklist at the end. They govern every decision throughout the session.

**On greenfield:** Total freedom is the heaviest constraint. Every choice is active, not passive. Defaulting to a familiar font is a choice. Defaulting to a safe color is a choice. Make choices that the work demands — not choices that require the least justification.

**On brownfield:** The existing code contains information. Some of it is intent — choices that were made deliberately and should be respected. Some of it is entropy — defaults that were never really chosen. The skill is telling them apart and treating them differently.

**Archaeology before architecture.** In brownfield work, you must understand what is there before you change anything. Rushing to fix produces more debt than it removes.

**The declaration is a contract, not a mood board.** Once the Design Direction Declaration is approved, every decision is measured against it. If you want to deviate, say so and get approval. Quiet deviations accumulate into incoherence.

**Informed research, not received opinion.** The research phase exists so that design decisions are grounded in what is actually happening in the world, in this category, right now — not in what Claude Code happens to remember or find aesthetically pleasing in the abstract. Arrive at every design conversation with evidence.

**The one unforgettable thing is not optional.** It must be implemented. It cannot be deferred. It is the marker that separates work that is technically complete from work that is genuinely designed.

**Agent-browser is the arbiter.** Code that looks right is not done. Code that renders right, performs right, and passes accessibility — in an actual browser — is done. One is opinion. The other is evidence.

**The committee is not a blocker — it is a mirror.** BMAD agents exist to surface blind spots, not to create bureaucracy. Their value is in the tensions between perspectives: beauty vs. maintainability, empathy vs. ruthless prioritisation, ambition vs. pragmatism. If every committee session is unanimous, something is wrong.

**Parallelism is not optional.** Independent tasks run concurrently. Sequential execution of independent work is a waste of capability. The orchestrator's job is to identify independence and fan out.

---

## CHANGELOG — v3.0 → v3.1

| Change | Category | Rationale |
|---|---|---|
| Two-stage skill loading | Context window | Prevents loading 11 skills at session start; loads on-demand |
| Git branching at Phase 2G/2B | Safety | All work on a branch; user reviews diff before merge |
| Dev server management (Step 6.0) | Operational | agent-browser needs a running server to validate against |
| Component dependency graph (Step 6.1) | Parallelism | Maps which components can build concurrently |
| Parallel blocks throughout | Architecture | Independent tasks fan out: archaeology, research, build, validation |
| Agentic delegation protocol | Architecture | Sub-agents for research, archaeology, builds, validation |
| BMAD committee protocol at 4 gates | Quality | Adversarial multi-persona review with information asymmetry |
| Loop escape conditions | Operational | 5-cycle cap, structural ceiling detection, user override |
| Research cap (6 searches + 2 deep-dives) | Efficiency | Prevents unbounded research consuming context |
| Fast-path for comprehensive briefs | UX | Skips multi-round discovery when user provides full context |
| Updated color regex | Accuracy | Catches oklch(), lab(), color(), 8-digit hex |
| Test coverage step (8.0) | Quality | Production-ready gate requires tests, not just scripts |
| Additional state file fields | Resume accuracy | dev_url, git_branch, skills_loaded, committee_sessions |
| Category-relative scoring note | Fairness | 8/10 means different things for different product types |
| COMMITTEE_LOG.md artifact | Traceability | Full record of every committee session and verdict |
| Lighthouse via CLI, not agent-browser | Accuracy | Lighthouse needs Chrome DevTools Protocol, not Playwright |
| agent-browser `diff screenshot` for brownfield | Accuracy | Built-in pixel diff with mismatch % replaces manual comparison |
| agent-browser `--annotate` screenshots | Observability | Numbered element labels with @eN refs for direct inspection |
| agent-browser `--session` named sessions | Parallelism | Isolated concurrent sessions for validation suite |
| agent-browser `&&` command chaining | Efficiency | Reduces tool call overhead for sequential non-interactive steps |
| agent-browser `--color-scheme dark` testing | Coverage | Dark mode variant in cross-browser smoke test |
| agent-browser `record` for animation audit | Evidence | Video capture of page load and scroll animations |
| agent-browser `snapshot -i -C` for cursor-interactive | Coverage | Catches onclick divs and cursor:pointer elements |

---

*FRONTEND EXCELLENCE HARNESS v3.1*
*Built for Omar Al-Bakri / RTGS.global project ecosystem*
*Equal craft. Both canvases. No exceptions.*
*BMAD agent personas © BMad Method — used with respect.*
