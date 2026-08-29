# Portfolio Context — Zaid Duartee

> Living context for humans and AI agents working on this repository.
> Last audited: 2026-08-29

## Project purpose

Executive technical portfolio for **Zaid Duartee** (CTO / Technical Lead).
Positions credibility in product, engineering, data systems, geospatial
intelligence, SaaS, and applied AI — with three published case studies.

**Production URL:** https://zaid-portfolio-dusky.vercel.app

## Deployment

| Item | Status |
|------|--------|
| Vercel production | **Live** at `zaid-portfolio-dusky.vercel.app` |
| GitHub → Vercel auto-deploy | **Not connected** |
| Deployment method | Clean-clone + Vercel CLI (`vercel --prod`) |
| `.vercelignore` | Excludes private source, screenshots, env files |

## Connect integrations

| Integration | Status |
|-------------|--------|
| Cal.com booking | **Configured** — `https://cal.com/zaidduartee/20min` (public default in `siteConfig`) |
| WhatsApp | **Configured** — `https://wa.me/923289771651` (public default in `siteConfig`) |
| Formspree | **Unconfigured** — email fallback active on Leave a Note |
| Connect QR | **Enabled** — encodes `https://zaid-portfolio-dusky.vercel.app/connect` |

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
- No database, CMS, or API routes

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
| `/connect` | Complete | Connect hub, booking, QR, private note |
| `/work/atlas` | Complete | ATLAS case study (18 sections) |
| `/work/noesis` | Complete | Noesis case study (18 sections) |
| `/work/marginai` | Complete | MarginAI case study (17 sections) |
| `/robots.txt`, `/sitemap.xml` | Complete | SEO |

## Component map (high level)

- `components/home/*` — Homepage sections
- `components/work/atlas/*` — ATLAS case study sections
- `components/work/noesis/*` — Noesis case study sections
- `components/work/marginai/*` — MarginAI case study sections
- `components/connect/*` — Connect page, booking modal, visitor note form
- `components/layout/Header.tsx` — Global nav
- `components/ui/*` — Reveal, Modal, CustomCursor, Magnetic, etc.
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
- Connect page with booking modal, vCard, CV, email, LinkedIn, GitHub, QR
- ATLAS, Noesis, MarginAI case studies with JSON-LD and sanitized public content
- Public booking and WhatsApp defaults (env-overridable)
- Connect QR assets for Vercel production URL
- SEO metadata, sitemap, robots, favicon
- `.vercelignore` for safe CLI deployment
- Build/lint/tsc pass

## Unfinished work

- Custom domain (`zaidduartee.com`) — not configured
- Formspree endpoint for private note form
- GitHub automatic Vercel deployment hookup
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

- **`.screenshots/`** — Multi-viewport capture evidence from manual QA. Kept locally for regression comparison. **Must not be committed** (listed in `.gitignore` and `.vercelignore`).

## Decisions still required

- Custom domain DNS
- Formspree endpoint
- GitHub → Vercel auto-deploy connection
- Testimonial attribution policy
- Analytics tooling (if any)

## Prioritized next steps

1. Connect custom domain when ready
2. Add Formspree endpoint and rebuild
3. Enable GitHub automatic Vercel deployments (optional)
4. Add OG PNGs for ATLAS and Noesis if desired

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
11. **Ask before removing connect integrations or changing `siteConfig` contact info**
12. **Never overwrite or revert existing uncommitted user work**
13. **MarginAI evidence rule** — see evidence boundary above
