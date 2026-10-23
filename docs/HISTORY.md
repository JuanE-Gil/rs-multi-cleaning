# History

Rol: **History**. Registra decisiones difíciles de revertir, eliminaciones intencionales y reemplazos.
No duplica `git log`: los commits rutinarios viven en Git (`git log --oneline`). Añadir una entrada
solo cuando cambie una decisión durable.

Formato: `[YYYY-MM-DD] tipo | qué cambió; evidencia`.

## Entradas

- `[2026-09-16] scaffold` | Astro starter mínimo como base del proyecto (13 archivos). Evidencia: `6e9c26d`.
- `[2026-10-19] implementación` | Sitio SSG completo en 4 commits: tooling → datos/layouts → secciones/páginas → SEO/widgets/WhatsApp. Evidencia: `ec8019a..cc6a637`.
- `[2026-10-19] decisión` | SSG puro, sin backend ni API. Todo el contenido se resuelve en build time.
- `[2026-10-19] decisión` | Contenido de negocio centralizado en `src/data/*.ts`. `src/content/` queda deliberadamente sin usar (no migrar sin una decisión nueva).
- `[2026-10-19] decisión` | `trailingSlash: 'never'`. Los enlaces se escriben sin slash final.
- `[2026-10-19] decisión` | WhatsApp como canal principal de conversión, centralizado en `src/utils/wa.ts` (`waLink`).
- `[2026-10-19] gobernanza` | Rama `master` renombrada a `main`; Conventional Commits adoptado; `.opencode/` y `graphify-out/` ignorados por ser artefactos locales.
- `[2026-10-22] gobernanza` | Se separan los roles de documentación: este archivo (History), `docs/STATUS.md` (Status) y `AGENTS.md` (Constitution).
- `[2026-10-22] decisión` | Checkpoint de fase 0: si los insumos del cliente (fotos reales, precios, RUC, teléfono, testimonios) no están antes del **2026-11-05**, se publica un one-pager de 5 secciones con CTA de WhatsApp en lugar del sitio completo de 14 secciones. Evidencia: revisión dev-team/council del 2026-10-22.
- `[2026-10-22] decisión` | No se publican precios, ratings ni fotos de un servicio como si pertenecieran a otro. Las páginas de detalle explican qué hace variar el precio y solo muestran el caso real disponible (tapicería en tela); el resto espera fotos de fase 0. Evidencia: `src/pages/servicios/[slug].astro`, `src/data/servicios.ts`.
- `[2026-10-22] catálogo` | El catálogo oficial pasa a los 9 servicios del flyer del cliente: tapicería en tela, tapicería en cuero, cabeceras tapizadas, box tarima/bases de cama, colchones, alfombras, roller, interior automotriz y línea infantil. Se retiran del listado sillas de oficina e inmuebles porque no figuran en el flyer. Fuente: `docs/catalogo-servicios-2026-10-22.jpeg`.
- `[2026-10-22] marca` | El logo del cliente se publica como PNG de 256 px en un badge circular (header y footer) y los favicons se generan desde ese mismo archivo. Se retiran los favicons de Astro. Falta una versión vectorial o transparente. Evidencia: `public/images/logo.png`, `src/components/seo/BaseHead.astro`.
- `[2026-10-22] decisión` | `/contacto` se publica sin mapa hasta tener una dirección comercial confirmada; el iframe de Maps se omitió por peso. El formulario de cotización se extrajo a `src/components/forms/QuoteForm.astro` y se reutiliza en home y contacto (contacto agrega correo electrónico).
- `[2026-10-22] accesibilidad` | Se aplican correcciones WCAG 2.2 AA: verde de WhatsApp accesible (`--color-wa: #0E7A3C`, 5.43:1 con blanco) en lugar de `#1FA855` (3.09:1); hover primario `--color-green-strong`; números de proceso sobre `teal-900`; foco de dos tonos; `lang="es-PE"`; un `h1` por página; objetivos táctiles de 24 px; checkbox de consentimiento de 24×24; testimonios desplazables con teclado. Evidencia: `src/styles/global.css`, `docs/STATUS.md`.
