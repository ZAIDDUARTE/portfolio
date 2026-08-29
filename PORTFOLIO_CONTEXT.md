# Portfolio Context — Zaid Duartee

> Living context for humans and AI agents working on this repository.
> Last audited: 2026-08-28

## Project purpose

Executive technical portfolio for **Zaid Duartee** (CTO / Technical Lead).
Positions credibility in product, engineering, data systems, geospatial
intelligence, SaaS, and applied AI — with **ATLAS** as the flagship case study.

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

## Routes

| Route | Status | Purpose |
|-------|--------|---------|
| `/` | Complete | Homepage narrative (11 sections) |
| `/connect` | Complete | Connect card + actions |
| `/work/atlas` | Complete | ATLAS case study (18 sections) |
| `/work/marginai` | **Not built** | MarginAI remains visible on homepage as “Coming Soon” |
| `/work/noesis` | **Not built** | Noesis remains visible on homepage as “Coming Soon” |
| `/robots.txt`, `/sitemap.xml` | Complete | SEO |

## Component map (high level)

- `components/home/*` — Homepage sections
- `components/work/atlas/*` — ATLAS case study sections
- `components/connect/*` — Connect page
- `components/layout/Header.tsx` — Global nav
- `components/ui/*` — Reveal, ClipReveal, CustomCursor, Magnetic, AnimatedRule
- `components/providers/InteractionProvider.tsx` — Mounts custom cursor
- `content/*.ts` — All copy and structured data

## Design system

- **Canvas:** `#f3f1ec` | **Ink:** `#171717` | **Accent:** `#2457ff`
- **Dark bands:** ATLAS feature + final contact (`#15171a`)
- **Layout:** `max-w-[1400px]`, `section-pad`, `section-y`
- **Typography:** Sans body + Instrument Serif editorial moments
- **Motion:** Scroll reveals, clip reveals, page enter, custom cursor (fine pointer only)
- **Always respect** `prefers-reduced-motion`

## Completed work

- Full homepage with motion and responsive patterns
- Connect page with vCard, CV, email, LinkedIn, GitHub
- ATLAS case study with video, images, JSON-LD, sanitized public content
- SEO metadata, sitemap, robots, favicon
- Content architecture (`content/` modules)
- Multi-viewport screenshot QA (`.screenshots/`, local only — do not commit)
- Build/lint/tsc pass

## Unfinished work

- Git commit of all portfolio work (only scaffold committed)
- MarginAI and Noesis full case studies (homepage shows “Coming Soon” until verified content is ready)
- Verified project preview images (currently SVG placeholders)
- WhatsApp + calendar URLs (`siteConfig` null)
- Deployment to production domain
- Project-specific README
- Optional: PNG OG image, profile image optimization, automated tests

## Known issues

1. **Critical:** All substantive work is uncommitted
2. **Medium:** Placeholder project assets (TODO in code)
3. **Medium:** ~18.5MB ATLAS video assets — monitor performance
4. **Low:** Default README; OG image is SVG only

## Local QA artifacts

- **`.screenshots/`** — Multi-viewport capture evidence from manual QA. Kept locally for regression comparison. **Must not be committed** (listed in `.gitignore`).

## Decisions still required

- MarginAI / Noesis: full case study content when ready (routes not built yet)
- WhatsApp + calendar URLs
- Deployment target confirmation
- Testimonial attribution policy
- Analytics tooling (if any)

## Prioritized next steps

1. Commit current work to preserve it
2. Deploy to `zaidduartee.com`
3. Replace placeholder project imagery
4. Wire pending connect actions when URLs available
5. Build MarginAI / Noesis case studies when verified content is ready

## Rules for future AI agents

1. **Do not rewrite from scratch** — extend existing patterns
2. **Content lives in `content/`** — not hardcoded in components
3. **Preserve ATLAS public-safe abstractions** — no proprietary pipeline/scoring detail on the public site
4. **Never put `content/case-study-source/` or confidential handoffs in `public/`**
5. **Match design tokens** in `app/globals.css` — no ad-hoc colors
6. **Respect `prefers-reduced-motion`** for all new animations
7. **Custom cursor is opt-in** via `data-cursor` — don’t break coarse-pointer/mobile
8. **Run `npm run lint`, `tsc`, `build`** before claiming done
9. **Don’t invent metrics, clients, or testimonials**
10. **Don’t commit `.screenshots/`** — local QA evidence only
11. **Ask before removing “Pending” connect rows or changing `siteConfig` contact info**
12. **MarginAI and Noesis stay visible as “Coming Soon”** on the homepage until verified case-study content exists — do not create stub routes or placeholder pages
13. **Never overwrite or revert existing uncommitted user work** — treat all local changes as authoritative; preserve, extend, or ask before replacing
