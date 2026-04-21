# Lumiose — Global i18n + PPP Pricing · Design

**Date:** 2026-04-20
**Scope:** Make lumiose.com responsive to region (language + purchasing-power pricing) globally, starting with EN/ES × US/MX and architected to scale to more locales without refactors.

---

## 1. Goal

A visitor from any country lands on Lumiose and sees:
- **The site in their language** (EN or ES to start)
- **Pricing adjusted to their country's purchasing power**, always displayed in USD
- **A clean, SEO-indexed URL** that reflects their locale
- **Override controls** so they can switch language or region manually, with their choice remembered

Everything must be preserved visually — no regressions on the existing design.

---

## 2. URL Structure

**Pattern:** `/[locale]/...` where `locale = {lang}-{region}`

**Initial locales (4):**
- `/en-us/` — English · United States
- `/es-us/` — Spanish · United States (SD Latino market)
- `/en-mx/` — English · Mexico (expats, intl. firms)
- `/es-mx/` — Spanish · Mexico

**Expansion pattern:** add rows to `i18n/config.ts` — `pt-br`, `fr-fr`, `en-ca`, etc. No routing code changes needed.

**Root `/`** is handled by middleware: redirects to the best locale based on IP + `Accept-Language`, then sets a cookie.

**SEO:** `<link rel="alternate" hreflang="..." />` tags injected into `<head>` for every active locale + `x-default=/en-us/`. Sitemap emits one URL per locale.

---

## 3. Detection & Redirect Flow

```
Visitor hits lumiose.com/
  │
  ▼
middleware.ts reads:
  - cookie `lumiose-locale`  (explicit prior choice — always wins)
  - request.geo.country       (Vercel header — fallback 1)
  - Accept-Language header    (fallback 2)
  - Default: en-us            (fallback 3)
  │
  ▼
Redirect to /<chosen-locale>/
  │
  ▼
If detection-confidence < 100% (e.g. fallback to default):
  show DetectionBanner for one session
  "Viewing in English · United States — change region ↗"
```

**Cookie:** `lumiose-locale` (1 year, Secure, SameSite=Lax). Set by middleware on redirect, updated by the LocaleSwitcher.

**Deployment assumption:** Vercel. Uses `request.geo.country` out of the box. For Cloudflare/other, swap to the equivalent header in one place.

---

## 4. Pricing — PPP Tier System

All prices displayed **in USD**, multiplied per country tier.

**Tiers** (`lib/pricing/tiers.ts`):

| Tier         | Multiplier | Countries (ISO-3166-1 alpha-2)                                                          |
|--------------|------------|------------------------------------------------------------------------------------------|
| `premium`    | 1.15×      | CH, NO, DK, IS, LU                                                                       |
| `standard`   | 1.00×      | US, CA, UK, IE, DE, FR, IT, ES, NL, BE, AT, SE, FI, PT, AU, NZ, JP, SG, KR, IL, AE, QA  |
| `latam-high` | 0.45×      | MX, CL, UY, AR, PA, CR                                                                   |
| `latam-sea`  | 0.35×      | CO, PE, BR, EC, DO, GT, TH, MY, ZA, TR                                                   |
| `emerging`   | 0.25×      | IN, ID, PH, VN, BD, PK, EG, NG, KE + default fallback                                    |

**Base prices** (USD, unchanged from current site):
- Corner Shop: 2,400
- Main Street: 6,800
- Harbor: 14,000 (from)
- Maintenance: 180/mo
- Ads management: 950/mo

**Rendering:** server-side in `page.tsx`. Price is computed once per request using the detected tier, injected into the HTML via string placeholder substitution (`{{PRICE_CORNER_SHOP}}` → `$3,060`).

Prices are rounded to the nearest $50 for cleanness (e.g., 0.45 × 6800 = 3,060 stays as-is; 0.35 × 6800 = 2,380 stays).

---

## 5. Content Translation — Full (option c)

Every visible string has an EN and ES version. No mixed copy.

**Approach:** keep the current "HTML string → `dangerouslySetInnerHTML`" pattern to preserve 100% visual parity. Split the single `body-content.ts` into **two files per language**:

```
app/
  [locale]/
    page.tsx
    body-content.en.ts   ← full EN markup, with {{PRICE_*}} placeholders
    body-content.es.ts   ← full ES markup, with {{PRICE_*}} placeholders
    Interactions.tsx
```

`page.tsx` picks the right body file by locale, runs placeholder substitution with the tier-adjusted prices, and renders it.

**Why this approach:** preserves the zero-visual-regression guarantee the user set as a hard constraint. Avoids the risky 1100-line HTML → JSX conversion. If/when we later want component-level i18n, the translated copy is already written and can be ported over.

**Scope of translation:**
- Banner (spring launch offer)
- Nav labels + CTAs
- Hero eyebrow / h1 / sub / CTAs
- IDE mockup visible strings ("LIVE PREVIEW", metrics, etc.)
- Marquee chips
- Portfolio section: head copy + each case's title/description/tags
- Services section: head, each of 8 service titles/subtitles/body/tags
- Pricing section: head + plan names/subs/feature lists/CTA labels
- Contact section: head, form labels/placeholders, meta rows
- Footer: columns + brand copy + `HECHO CON ☀ + ☕`
- Immersive overlay: the 6 fake-site mocks (their nav items, hero copy, cards)

**Dynamic/injected:**
- Pricing plans ({{PRICE_*}})
- Currency-tier label optionally shown near pricing ("Pricing shown for Mexico — change ↗")
- "Now booking · Mayo/May 2026" month name adapts to language

**Library:** `next-intl` — mature, App Router–native, zero runtime for static strings. Used for the LocaleSwitcher, banner copy, metadata (`<title>`, `<meta>`), and any client-side strings. The body HTML stays in `body-content.*.ts` files (simpler than threading message IDs through 1100 lines of markup).

---

## 6. Language / Region Switcher

**Location:** nav, replaces the current `EN · ES` link.

**Design:** two dropdowns in a single pill:
```
  [  🌐 English ▾  |  🇺🇸 United States ▾  ]
```
- **Language dropdown:** EN, ES (more as added)
- **Country dropdown:** searchable list of all supported countries, grouped by tier ("Premium", "Standard", "LATAM", "Emerging"). Selecting a country updates the currency tier cookie and re-renders pricing.

**Language change** → navigate to `/{newLang}-{currentRegion}/...`
**Country change** → navigate to `/{currentLang}-{newRegion}/...` if that combo exists, else stay on current language and just update cookie (URL's `region` slot becomes a "nearest supported" mapping).

**DetectionBanner:** small dismissible strip above the main top-banner, only shown when the visit was redirected via geo fallback (not a returning cookie visitor). One-click to switch or dismiss.

---

## 7. File Structure (after migration)

```
app/
  [locale]/
    layout.tsx                ← per-locale metadata, hreflang alternates
    page.tsx                  ← picks body file, injects prices, renders
    body-content.en.ts
    body-content.es.ts
    Interactions.tsx
  globals.css                 ← unchanged
  middleware.ts               ← locale detection + redirect + cookie
  sitemap.ts                  ← emits all locale URLs
  robots.ts
lib/
  i18n/
    config.ts                 ← locale list, labels, fallbacks
    messages/
      en.json                 ← UI strings (switcher, banner, metadata)
      es.json
    detect.ts                 ← geo + Accept-Language logic
  pricing/
    tiers.ts                  ← tier definitions + country map
    prices.ts                 ← base prices + compute(tier) helper
components/
  LocaleSwitcher.tsx          ← client component
  DetectionBanner.tsx         ← client component
```

---

## 8. Implementation Phases

Each phase ships independently. Site stays working after every phase.

**Phase 1 — Scaffolding & routing**
- Install `next-intl`, add `middleware.ts` with fallback to `/en-us/`
- Move existing `app/page.tsx` + `body-content.ts` + `Interactions.tsx` into `app/[locale]/`
- Config: `lib/i18n/config.ts` with the 4 locales
- **Verify:** direct visits to `/en-us/` render identically to today

**Phase 2 — Pricing engine**
- `lib/pricing/tiers.ts` + `prices.ts`
- Introduce `{{PRICE_*}}` placeholders in `body-content.en.ts` (ES comes in phase 4)
- Server-side substitution in `page.tsx`
- **Verify:** `/en-us/` shows $6,800, a VPN/header-spoofed MX visit shows $3,060

**Phase 3 — Detection & switcher**
- Flesh out middleware: geo → Accept-Language → default, set cookie
- `LocaleSwitcher` in nav
- `DetectionBanner` above top-banner
- `hreflang` tags in `[locale]/layout.tsx`
- **Verify:** MX IP redirects to `/es-mx/`; switcher updates cookie + URL

**Phase 4 — Spanish translation**
- Populate `body-content.es.ts` (full ES translation)
- Populate `messages/es.json` for switcher/banner/metadata
- Verify every string across all 4 locale URLs

**Phase 5 — SEO polish**
- `sitemap.ts` with all locales
- Per-locale `<meta>` title/description
- Structured data (Organization, breadcrumbs) localized

---

## 9. Open Questions / TODOs

- **Country-tier mapping is seed data** — you may want to move specific countries between tiers (e.g., is AR `latam-high` or `latam-sea`? BR at 0.35× vs 0.30×?). Adjustable in `tiers.ts` without code changes elsewhere.
- **Plan name translations** — should "Corner Shop / Main Street / Harbor" be translated to Spanish, or kept as English brand names? Recommendation: keep English brand names, translate only the description line.
- **Bilingual SEO metadata** — is "Lumiose — Web Development Studio · San Diego" translated for ES locales, or kept? Recommend translate.
- **Analytics** — GA4 or Plausible events for locale switch / banner dismissal. Out of scope here; noting for later.
- **Currency symbol for non-US visitors** — all shown as USD ("$6,800 USD"). Confirm this display format.

---

## 10. Non-goals

- Multi-currency (EUR/GBP/MXN as actual currencies). Stays USD-only with PPP multipliers.
- Language auto-translation via AI. All ES copy is hand-translated.
- Geo-blocking or region-restricted features. Every visitor can reach every locale.
- Splitting into per-route components. The body-content HTML-string pattern stays until/unless we later refactor.
