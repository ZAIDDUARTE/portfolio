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
| Cal.com booking | **Configured** — public default in `siteConfig` |
| WhatsApp | **Configured** — public default in `siteConfig` |
| Formspree | **Unconfigured** — email fallback active on Leave a Note |
| Connect QR | **Enabled** — encodes production `/connect` URL |

## Technical systems positioning

All three published case studies (ATLAS, Noesis, MarginAI) describe **technical
implementation complete within each system’s defined scope**.

**Do not claim:** customer adoption, commercial outcomes, revenue, market
performance, or achieved cost savings unless new verified evidence is added.

**Distinction:** technical completion ≠ commercial proof. Safety boundaries
(non-diagnostic, non-causal, fail-open) are product constraints — not
incomplete-stage disclaimers.

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
| `/` | Complete | Homepage narrative |
| `/connect` | Complete | Connect hub, booking, QR, private note |
| `/work/atlas` | Complete | ATLAS case study |
| `/work/noesis` | Complete | Noesis case study |
| `/work/marginai` | Complete | MarginAI case study |
| `/robots.txt`, `/sitemap.xml` | Complete | SEO |

## Component map (high level)

- `components/home/*` — Homepage sections
- `components/work/atlas/*` — ATLAS case study sections
- `components/work/noesis/*` — Noesis case study sections
- `components/work/marginai/*` — MarginAI case study sections
- `components/connect/*` — Connect page, booking modal, visitor note form
- `content/*.ts` — All copy and structured data

## Design system

- **Canvas:** `#f3f1ec` | **Ink:** `#171717` | **Accent:** `#2457ff`
- **Layout:** `max-w-[1400px]`, `section-pad`, `section-y`
- **Always respect** `prefers-reduced-motion`

## Completed work

- Full homepage with three published case studies
- Connect page with booking, QR, vCard, private note fallback
- ATLAS, Noesis, MarginAI case studies with JSON-LD
- Public booking and WhatsApp defaults
- `.vercelignore` for safe CLI deployment

## Unfinished work

- Custom domain (`zaidduartee.com`)
- Formspree endpoint for private note form
- GitHub automatic Vercel deployment hookup

## MarginAI evidence boundary

> MarginAI is a completed technical system within documented scope. Do not
> claim customer adoption, broad SDK compatibility, achieved savings, or
> external production scale without new verified evidence.

Private source (never commit):

- `content/case-study-source/` — text + diagrams

## Local QA artifacts

- **`.screenshots/`** — Local only. **Must not be committed.**

## Rules for future AI agents

1. **Content lives in `content/`** — not hardcoded in components
2. **Never put `content/case-study-source/` in `public/`**
3. **Don't commit `.screenshots/`**
4. **Technical completion ≠ commercial claims** — see positioning above
5. **Run `npm run lint`, `tsc`, `build`** before claiming done
6. **Don't invent metrics, clients, or testimonials**
7. **MarginAI:** no achieved savings or customer adoption without evidence
