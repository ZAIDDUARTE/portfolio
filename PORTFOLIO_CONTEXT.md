# Portfolio Context — Zaid Duartee

> Living context for humans and AI agents working on this repository.
> Last audited: 2026-11-04

## Project purpose

Client-facing technical portfolio for **Zaid Duartee**
(**React & Next.js Developer | SaaS, WordPress & AI Integrations**).
Positions credibility for Upwork clients, SaaS founders, and businesses needing
frontend delivery, WordPress work, API integrations, and AI-assisted web apps —
while preserving deeper technical case studies.

**Production URL:** https://zaid-portfolio-dusky.vercel.app

## Positioning (verified)

- Role framing: React & Next.js Developer | SaaS, WordPress & AI Integrations
- Rate: $15/hour
- Upwork: 459+ recorded hours; multiple 5-star frontend contracts
- Do **not** invent earnings, testimonials, clients, or unsupported production claims
- Upwork profile: `https://www.upwork.com/freelancers/~015dcfc95d6b6b8758` (default + `NEXT_PUBLIC_UPWORK_URL`)

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
| Cal.com booking | **Configured** — public default in `siteConfig` |
| WhatsApp | **Configured** — public default in `siteConfig` |
| Formspree | **Unconfigured** — email fallback active on Project inquiry (no false success) |
| Upwork CTA | **Configured** — verified profile URL |
| Connect QR | **Enabled** — encodes production `/connect` URL |

## Technical systems positioning

ATLAS, Noesis, and MarginAI describe **technical implementation complete within
each system’s defined scope**.

Alexander and Satori describe **verified contribution areas** only.

**Do not claim:** customer adoption, commercial outcomes, revenue, market
performance, completed telephony integrations (unless newly verified), or
achieved cost savings unless new verified evidence is added.

## Case studies

| # | Project | Route | Homepage | Status |
|---|---------|-------|----------|--------|
| 001 | Alexander | `/work/alexander` | Featured flagship | **Published** (dashboard screenshot connected; demo video optional) |
| 002 | Satori | `/work/satori` | Featured | **Published** (demo media pending) |
| 003 | ATLAS | `/work/atlas` | Featured | **Published** (local demo video connected) |
| 004 | Noesis | `/work/noesis` | Archive link | **Published** |
| 005 | MarginAI | `/work/marginai` | Archive link | **Published** |

### Featured navigation chain

```
Alexander (001) → Satori (002) → ATLAS (003)
ATLAS closing still links into Noesis → MarginAI for the systems trilogy
```

## Routes

| Route | Status | Purpose |
|-------|--------|---------|
| `/` | Complete | Homepage narrative + services + CTAs |
| `/connect` | Complete | Connect hub, booking, QR, project inquiry |
| `/services/nextjs-support` | Complete | Next.js lead-gen service page |
| `/services/wordpress-development` | Complete | WordPress lead-gen service page |
| `/services/ai-integrations` | Complete | AI integrations lead-gen service page |
| `/work/alexander` | Complete | Alexander case study |
| `/work/satori` | Complete | Satori case study |
| `/work/atlas` | Complete | ATLAS case study |
| `/work/noesis` | Complete | Noesis case study |
| `/work/marginai` | Complete | MarginAI case study |
| `/robots.txt`, `/sitemap.xml` | Complete | SEO (includes service routes) |

## Component map (high level)

- `components/home/*` — Homepage sections (incl. Services)
- `components/work/shared/*` — Shared case-study section primitives
- `components/work/atlas|noesis|marginai/*` — Deep technical case studies
- `components/ui/ProjectVideo.tsx` — Local / YouTube / Vimeo demo player
- `components/connect/*` — Connect page, booking modal, visitor note form
- `content/*.ts` — All copy and structured data

## Design system

- **Canvas:** `#f3f1ec` | **Ink:** `#171717` | **Accent:** `#2457ff`
- **Layout:** `max-w-[1400px]`, `section-pad`, `section-y`
- **Always respect** `prefers-reduced-motion`

## Missing assets / info from owner

- Alexander demo video or YouTube/Vimeo URL (+ optional poster)
- Satori demo video or YouTube/Vimeo URL (+ optional poster)
- Optional public-safe screenshots for Alexander / Satori
- Formspree endpoint (`NEXT_PUBLIC_FEEDBACK_FORM_ENDPOINT`) for real inquiry delivery
- Enable Vercel Web Analytics in the project dashboard (package already wired; Hobby page views only)

## Rules for future AI agents

1. **Content lives in `content/`** — not hardcoded in components
2. **Never put `content/case-study-source/` in `public/`**
3. **Don't commit `.screenshots/`**
4. **Technical completion ≠ commercial claims**
5. **Run `npm run lint`, `tsc`, `build`** before claiming done
6. **Don't invent metrics, clients, or testimonials**
7. **Don't fabricate video URLs or broken embeds**
8. **MarginAI / ATLAS / Noesis:** no customer adoption claims without evidence
