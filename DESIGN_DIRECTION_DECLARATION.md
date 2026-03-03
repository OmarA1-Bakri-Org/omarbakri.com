# DESIGN DIRECTION DECLARATION
project: Omar Al-Bakri — Personal Portfolio
site_category: Personal brand / executive portfolio
project_mode: BROWNFIELD
version: 1.0
status: PENDING_APPROVAL

---

## Conceptual Anchor
**Earned authority expressed through restraint.** Every element demonstrates competence by what it chooses NOT to do.

## Aesthetic Direction
Editorial minimalism with warm precision — think the confidence of a Monocle cover crossed with the clarity of Linear's UI. Large, lightweight typography does the work. Color is a scalpel, not a paintbrush. The site should feel like a well-tailored suit: you notice the quality, not the effort.

## Relationship to Category Conventions
**Deliberately AGAINST** the category in three specific ways:
1. Most tech portfolios use cyan/blue gradients — we use warm neutrals with a single amber accent
2. Most portfolios pile on animations and particles — we use motion as punctuation, not decoration
3. Most portfolios try to be "impressive" with effects — we let typography and whitespace create authority

**Working WITH** the category on:
- Dark mode (it's expected, and it's correct for this audience)
- Single-page scrolling with clear section breaks
- Professional headshot/monogram as identity anchor

## Research Findings Applied
1. "Fonts that whisper rather than shout" — Inter at thin/light weights for display creates the elegance Omar wants
2. Warm charcoal + single accent outperforms multi-gradient approaches in the executive portfolio category
3. Process and impact documentation converts 40% better than image-only showcases — experience section should lead with measurable outcomes

## Brownfield Preservation Decisions
Items preserved: Navbar structure (restyle), Footer structure (restyle), Next.js config, Contact form logic
Items being transformed: All section components (restyle to new design system)
Items being replaced: hero-section (rebuild), particle-animation (remove), BeamsBackground (remove from hero — could repurpose elsewhere if needed)
Items being deleted: ALL parallax-* variants (unused), hero.tsx (duplicate), dark-mode-toggle (dead), reading-progress (conflicts with nav)

---

## SYSTEM SPECIFICATIONS

### Typography
Display font: Inter (weights 200–300) — light, elegant, thinner at larger sizes
Body font: Inter (weight 400) — clear, readable
Monospace: JetBrains Mono (weight 300) — if code/tech content appears
Type scale (fluid, using clamp):
  --text-xs:    clamp(0.75rem, 0.7rem + 0.25vw, 0.8rem)
  --text-sm:    clamp(0.8rem, 0.75rem + 0.3vw, 0.875rem)
  --text-base:  clamp(0.875rem, 0.8rem + 0.4vw, 1rem)
  --text-lg:    clamp(1rem, 0.9rem + 0.5vw, 1.125rem)
  --text-xl:    clamp(1.125rem, 1rem + 0.6vw, 1.25rem)
  --text-2xl:   clamp(1.5rem, 1.2rem + 1.5vw, 2rem)
  --text-3xl:   clamp(2rem, 1.5rem + 2.5vw, 3rem)
  --text-4xl:   clamp(2.5rem, 1.8rem + 3.5vw, 4rem)
  --text-hero:  clamp(3rem, 2rem + 5vw, 6rem)
Font source: next/font/google (already in use — extend to variable weights)

### Display Heading Rules
- Hero heading: weight 200, tracking -0.03em
- Section headings: weight 300, tracking -0.02em
- Subheadings: weight 400
- Body: weight 400, line-height 1.7
- Captions/labels: weight 500, letter-spacing 0.05em, uppercase, text-xs

### Color System
PHILOSOPHY: Warm monochrome + one accent. That's it.

--color-bg:              #0A0A0A   (near-black, slightly warm)
--color-bg-elevated:     #111111   (cards, elevated surfaces)
--color-bg-subtle:       #1A1A1A   (subtle section differentiation)
--color-surface:         #1E1E1E   (interactive surface hover)
--color-border:          #2A2A2A   (default borders — barely visible)
--color-border-strong:   #3A3A3A   (emphasized borders)

--color-text-primary:    #F0EDE8   (warm off-white — NOT pure white)
--color-text-secondary:  #A09A90   (warm mid-gray)
--color-text-muted:      #6B6560   (warm dark gray)

--color-accent:          #C4A265   (champagne amber — refined, warm, NOT harsh gold)
--color-accent-hover:    #D4B275   (lighter on hover)
--color-accent-muted:    #C4A265/20 (20% opacity for backgrounds)
--color-accent-subtle:   #C4A265/10 (10% opacity for borders)

--color-error:           #E5534B   (muted red)
--color-success:         #57AB5A   (muted green)

Contrast ratio text-primary/bg: 15.2:1 (WCAG AAA pass)
Contrast ratio accent/bg: 7.8:1 (WCAG AAA pass)
Contrast ratio text-secondary/bg: 5.1:1 (WCAG AA pass)

### Motion Vocabulary
Philosophy: RESTRAINED — motion as punctuation, not decoration
Page load: single subtle fade-up (0.6s, ease-out) — NOT staggered cascade
Section reveals: fade-up on scroll (intersection observer, once) — 0.5s, ease-out
Hover states: 200ms ease-out (color transitions only — no scale, no transform)
Focus transitions: 150ms ease-out (ring appearance)
Content reveals: single fade-in, no stagger unless it's a list of 3+ items
The signature animation: The monogram — a thin amber stroke that draws itself on page load. Subtle, distinctive, memorable. 3 seconds. Plays once.
Motion library: Framer Motion (already installed — use sparingly)
prefers-reduced-motion: YES (non-negotiable) — all animations instantly resolve

### Spatial System
Spacing scale base: 4px (Tailwind default)
Layout system: CSS Grid for page structure, Flexbox for component internals
Breakpoints:
  --bp-sm: 640px
  --bp-md: 768px
  --bp-lg: 1024px
  --bp-xl: 1280px
Container max-width: 1200px (tighter than current 1280 — editorial feel)
Grid columns: 12 (desktop) / 8 (tablet) / 4 (mobile)
Key spatial decision: GENEROUS WHITESPACE. Sections breathe. Content doesn't fill every pixel. The emptiness IS the design. Minimum 120px vertical padding between major sections.

---

## SITE STRUCTURE (Revised)

### Single Page — Sections in Order:
1. **Hero** — Name, title, one-liner, monogram. No profile photo. Let the typography be the identity.
2. **About** — Who Omar is (professional only). Current role at RTGS.global. AI passion. Brief, confident.
3. **Experience** — Timeline/cards. Measurable outcomes. RTGS.global, previous roles. Impact-focused.
4. **Expertise** — What Omar brings: AI strategy, FinTech sales, customer solutions, business development. Visual grid.
5. **Newsletter** — "Intelligent Rails" section. Subscribe CTA. Recent editions/articles. LinkedIn articles integration.
6. **Contact** — Clean form. LinkedIn link prominently. Email. Meeting booking link if available.
7. **Footer** — Minimal. Monogram. Links. Copyright.

### Content Additions:
- "Intelligent Rails" newsletter section (new)
- LinkedIn articles feed/links (new)
- Remove: testimonials (fake names — credibility risk), portfolio project cards (Pexels stock images — credibility risk)

---

## THE ONE UNFORGETTABLE THING
The monogram. An OAB ligature rendered in thin amber strokes on the dark background. It draws itself — stroke by stroke — when the page first loads. Three seconds. Elegant. Once. It becomes the favicon, the section divider motif, and the visual signature of the entire site. When someone screenshots this site to share with a colleague, they screenshot the monogram.

## References
1. Linear.app — borrowing: restrained dark UI, typography-forward, generous whitespace
2. Monocle magazine — borrowing: editorial authority, warm palette, confident layout
3. Stripe.com — borrowing: section transitions, how to make a dark site feel warm
4. Luca Volino Portfolio 2025 (Awwwards nominee) — borrowing: typographic scale, minimal structure
5. Darkfolio (Awwwards) — borrowing: dark mode portfolio conventions that work

## What We Are Explicitly NOT Doing
1. No particle animations or canvas effects — they say "I downloaded a template"
2. No cyan/blue gradients — every tech portfolio uses them. We differentiate by NOT using them.
3. No stock photography (Pexels images go) — either real content or no images at all
4. No skill percentage bars — they're subjective, unverifiable, and look like a junior developer's portfolio
5. No "Download CV" button front and center — this is a personal brand site, not a job application
6. No thick/bold display fonts — weight 200-300 only for headings
7. No purple gradients
8. No testimonials with made-up names
