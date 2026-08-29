# Portfolio Context — Zaid Duartee

> Living context for humans and AI agents working on this repository.
> Last audited: 2026-08-29

## Project purpose

Executive technical portfolio for **Zaid Duartee** (CTO / Technical Lead).
Positions credibility in product, engineering, data systems, geospatial
intelligence, SaaS, and applied AI — with three published case studies.

**Target URL:** https://zaidduartee.com

## Target audience

- Technical hiring managers and founders
- Research / enterprise partners in healthcare, insurance, geospatial
- Clients evaluating senior technical leadership

## Confirmed stack

- Next.js 16.3.3 (App Router, static export-style SSG)
- React 19.2.8, TypeScript (strict)
- Tailwind CSS v4 (`app/globals.css` + `@theme inline`)
- Fonts: Geist Sans, Geist Mono, Instrument Serif
- ESLint 9, no test framework configured
- No database, CMS, API routes, or env secrets

## Case studies

| # | Project | Route | Status |
|---|---------|-------|--------|
| 001 | ATLAS | `/work/atlas` | **Published** |
| 002 | Noesis | `/work/noesis` | **Published** |
| 003 | MarginAI | `/work/marginai` | **Published** |

### Case-study navigation chain

```
ATLAS (001) → Noesis (002) → MarginAI (003) → Selected Work / Connect
MarginAI closing also links back to Noesis
```

## Routes

| Route | Status | Purpose |
|-------|--------|---------|
| `/` | Complete | Homepage narrative (11 sections) |
| `/connect` | Complete | Connect card + actions |
| `/work/atlas` | Complete | ATLAS case study (18 sections) |
| `/work/noesis` | Complete | Noesis case study (18 sections) |
| `/work/marginai` | Complete | MarginAI case study (17 sections: Hero + 15 numbered + Closing) |
| `/robots.txt`, `/sitemap.xml` | Complete | SEO |

## Component map (high level)

- `components/home/*` — Homepage sections
- `components/work/atlas/*` — ATLAS case study sections
- `components/work/noesis/*` — Noesis case study sections
- `components/work/marginai/*` — MarginAI case study sections
- `components/connect/*` — Connect page
- `components/layout/Header.tsx` — Global nav
- `components/ui/*` — Reveal, ClipReveal, CustomCursor, Magnetic, AnimatedRule
- `components/providers/InteractionProvider.tsx` — Mounts custom cursor
- `content/*.ts` — All copy and structured data

## Design system

- **Canvas:** `#f3f1ec` | **Ink:** `#171717` | **Accent:** `#2457ff`
- **Dark bands:** ATLAS feature + MarginAI (`#12141a` / `#15171a`)
- **Layout:** `max-w-[1400px]`, `section-pad`, `section-y`
- **Typography:** Sans body + Instrument Serif editorial moments
- **Motion:** Scroll reveals, clip reveals, page enter, custom cursor (fine pointer only)
- **Always respect** `prefers-reduced-motion`

## Completed work

- Full homepage with motion and responsive patterns
- Connect page with vCard, CV, email, LinkedIn, GitHub
- ATLAS case study with video, images, JSON-LD, sanitized public content
- Noesis case study with Beyond Intelligence imagery, JSON-LD, sanitized public content
- MarginAI case study with architecture narrative, designed-vs-proposed visual distinction, OG PNG
- All three projects published and clickable on homepage
- SEO metadata, sitemap, robots, favicon
- Content architecture (`content/` modules)
- Multi-viewport screenshot QA (`.screenshots/`, local only — do not commit)
- Build/lint/tsc pass

## Unfinished work

- Deployment to production domain (Vercel)
- WhatsApp + calendar URLs (`siteConfig` null)
- Project-specific README
- Optional: automated tests
- ATLAS / Noesis OG PNGs (MarginAI has `public/og/marginai-case-study.png`)

## Known issues

1. **Medium:** ~18.5MB ATLAS video assets — monitor performance
2. **Low:** Default README
3. **Low:** ATLAS video prefetch may log `ERR_ABORTED` in Playwright (pre-existing)
4. **Low:** Homepage LCP warning for ATLAS preview image (pre-existing)

## MarginAI evidence boundary

> MarginAI is publicly presented as product architecture and MVP design. Do not claim implementation, production validation, customers, compatibility breadth, or achieved savings without new verified evidence.

Public-safe assets:

- `public/images/marginai/marginai-hero.svg` — in-page hero (decorative)
- `public/images/marginai/marginai-preview.svg` — homepage card preview
- `public/og/marginai-case-study.png` — social preview (1200×630)

Private source (never commit):

- `content/case-study-source/marginai/` — text + PNG diagrams

## Local QA artifacts

- **`.screenshots/`** — Multi-viewport capture evidence from manual QA. Kept locally for regression comparison. **Must not be committed** (listed in `.gitignore`).

## Decisions still required

- WhatsApp + calendar URLs
- Deployment target confirmation
- Testimonial attribution policy
- Analytics tooling (if any)

## Prioritized next steps

1. Deploy to `zaidduartee.com`
2. Wire pending connect actions when URLs available
3. Add OG PNGs for ATLAS and Noesis if desired
4. Optional: automated visual regression tests

## Rules for future AI agents

1. **Do not rewrite from scratch** — extend existing patterns
2. **Content lives in `content/`** — not hardcoded in components
3. **Preserve ATLAS public-safe abstractions** — no proprietary pipeline/scoring detail on the public site
4. **Never put `content/case-study-source/` or confidential handoffs in `public/`**
5. **Match design tokens** in `app/globals.css` — no ad-hoc colors
6. **Respect `prefers-reduced-motion`** for all new animations
7. **Custom cursor is opt-in** via `data-cursor` — don't break coarse-pointer/mobile
8. **Run `npm run lint`, `tsc`, `build`** before claiming done
9. **Don't invent metrics, clients, or testimonials**
10. **Don't commit `.screenshots/`** — local QA evidence only
11. **Ask before removing “Pending” connect rows or changing `siteConfig` contact info**
12. **Never overwrite or revert existing uncommitted user work** — treat all local changes as authoritative; preserve, extend, or ask before replacing
13. **MarginAI evidence rule** — see evidence boundary above; use “modeled cost impact” not “achieved savings”
