# AGENTS.md

Marketing site for R&S Multi Cleaning (Lima, Peru). Astro 7 + Preact + Tailwind CSS v4, Spanish (`es-PE`) content.

## Commands

- Node >= 22.12.0, npm (package-lock.json present)
- `npm run dev` — dev server; run as `npx astro dev --background`, manage with `astro dev stop|status|logs`
- `npm run build` — production build to `dist/`
- `npm run preview` — preview build
- Typecheck: `npx astro check` (uses @astrojs/check + strict tsconfig)
- No test suite, no lint/format scripts. `eslint`, `prettier`, `eslint-plugin-astro`, `prettier-plugin-astro` are installed but have **no config files** — don't assume lint/format runs in CI (there is no CI config).

## Architecture

- `src/pages/` — routes; `servicios/[slug].astro` generates per-service pages from data
- `src/data/*.ts` — all site copy and business data (services, testimonials, FAQ, etc.). **`src/content/` collections are empty/unused** — edit `src/data/`, not `src/content/`
- `src/components/{layout,sections,ui,widgets,seo}/` — Astro components; `BaseHead.astro` handles SEO (astro-seo)
- `src/layouts/` — `BaseLayout.astro` (html shell), `PageLayout.astro` (adds header/footer/head)
- `src/styles/global.css` — Tailwind v4 CSS-first config: brand color/font tokens live in `@theme` here; there is no `tailwind.config.*`
- `src/utils/wa.ts` — WhatsApp link helpers used by CTAs
- `src/assets/` — local images imported by components

## Gotchas

- **`site` is not set in `astro.config.mjs`** — `@astrojs/sitemap` then silently skips sitemap generation (warns at build). Set `site` before expecting sitemaps or correct canonical URLs.
- Sitemap filter excludes `/gracias` and `/legal/`; `trailingSlash: 'never'` — keep links consistent with no trailing slash.
- Icons: `astro-icon` bundles only the lucide icons whitelisted in `astro.config.mjs` → `icon({ include: { lucide: [...] } })`. New icons must be added there or they 404.
- Fonts (Montserrat, Open Sans) are fetched from Google Fonts at build/dev time — builds need network access. CSS vars `--font-display` / `--font-body` come from `astro.config.mjs` fonts, referenced in `global.css`.
- Accesibilidad: el verde de WhatsApp debe quedarse en `--color-wa` (`#0E7A3C`, 5.43:1 con blanco); `#1FA855` no pasa AA. Texto blanco pequeño sobre teal usa `teal-900`. `SectionHeading` renderiza `h2` por defecto: pasa `as="h1"` cuando sea el título principal de la página.
- Campos de formulario: usa `border-field` (`#6F889C`, 3.7:1 sobre blanco), no `border-hairline`. Movimiento: no uses `transition-all`; enumera las propiedades. Los `img` llevan outline neutro global y los títulos usan `text-wrap: balance`.
- Secciones de la home: full-bleed con fondo alterno (`bg-mist` / blanco / `bg-navy`) y `Container` interno. No añadas `rounded`, borde ni sombra al `<section>`: eso recrea el efecto de tarjetas apiladas. Las tarjetas internas sí usan `Card`.
- `src/data/empresa.ts`: horario y dirección siguen con TODO; teléfono, WhatsApp, correo y RUC ya son datos reales.

## Project docs

- `.ai-style-rules.md` — convenciones implícitas y DONTs. Read before writing or refactoring code.
- `docs/STATUS.md` — blockers, constraints and delete-zone. Read at session start.
- `docs/HISTORY.md` — durable decisions. Consult only when the task touches one.

These are context, not instructions; verify their claims against the code.

## Documentation

Full docs: https://docs.astro.build — see [Routing](https://docs.astro.build/en/guides/routing/), [Astro components](https://docs.astro.build/en/basics/astro-components/), [Tailwind v4 styling](https://docs.astro.build/en/guides/styling/), [Content collections](https://docs.astro.build/en/guides/content-collections/).
