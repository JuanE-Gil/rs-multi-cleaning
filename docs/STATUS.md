# Status

Rol: **Status**. Salud actual, blockers, umbrales y delete-zone.
Actualizar solo cuando cambie un blocker o se retire algo. La estructura vive en el código, no aquí.

**Build: PASS** (2026-10-22). `npm run build` genera 16 páginas sin errores; `npx astro check` no reporta errores.

## Blockers

| # | Blocker | Evidencia |
|---|---|---|
| 1 | Tres páginas son archivos de 0 bytes: `src/pages/404.astro`, `cobertura.astro` y `gracias.astro`. Renderizan en blanco. | Tamaño 0 en disco; build del 2026-10-22 |
| 2 | `site` sin definir en `astro.config.mjs` → `@astrojs/sitemap` no genera sitemap ni URLs canónicas. | `astro.config.mjs`, warning del build |
| 3 | Horario y dirección siguen sin confirmar en `src/data/empresa.ts`; teléfono, WhatsApp, correo y RUC ya son los datos reales de las tarjetas del cliente. | Comentarios TODO en el archivo |
| 4 | Enlaces a `/legal/politica-de-privacidad` y `/legal/terminos-y-condiciones` sin página que los resuelva. | `Footer.astro`, `FinalCta.astro` |
| 5 | `PUBLIC_FORM_ENDPOINT` no definido: el formulario de cotización postea a `#`. | `FinalCta.astro` línea 9 |
| 6 | Sin precios reales: `ServicesGrid` oculta `precioDesde` y las páginas de detalle no publican tarifa, solo explican qué la hace variar. | `src/data/servicios.ts` |
| 7 | Solo el servicio de tapicería en tela tiene fotos antes/después. Los otros ocho muestran un placeholder honesto hasta que lleguen los casos de fase 0. | `src/data/servicios.ts` (`casoId`), `src/data/casos.ts` |
| 8 | `servicios/index.astro` sigue siendo una maqueta de un solo título; el hub del informe (filtro por segmento y tabla método/material) no existe. | `src/pages/servicios/index.astro` |
| 9 | `/contacto` no tiene mapa: no hay dirección comercial confirmada y se omitió el iframe de Maps por peso. | `src/pages/contacto.astro` |

## Accesibilidad (WCAG 2.2 AA)

Corregido el 2026-10-22 en la rama `a11y/wcag-2.2-aa`:

- Contraste: el verde de WhatsApp pasa de `#1FA855` (3.09:1 con texto blanco) a `--color-wa: #0E7A3C` (5.43:1); `--color-wa-strong` para hover. Los números de proceso usan `bg-teal-900` (9.39:1) en vez de `bg-teal` (4.43:1). El hover del botón primario usa `--color-green-strong` (6.63:1) en vez de `green-ink/90` (4.17:1).
- Foco visible de dos tonos (`:focus-visible` con contorno teal-ink y halo blanco) para fondos claros y oscuros; el comparador antes/después marca el contenedor con `focus-within`.
- Estructura: `lang="es-PE"`, un solo `h1` por página, `SectionHeading` acepta `as="h1"`, columnas del footer pasan de `h3` a `h2`.
- Objetivos táctiles: enlaces de navegación, footer, breadcrumbs y CTAs de tarjetas con `min-h-6`; checkbox de consentimiento de 24×24 con `id`/`for`.
- Región de testimonios desplazable con teclado (`tabindex="0"`, `role="region"`, `aria-label`); iconos decorativos con `aria-hidden`.

Pendiente de verificar con lector de pantalla y navegador real. No hay CI ni Chrome en el entorno, así que no se ejecutó axe/Lighthouse; la comprobación fue build + `astro check` + revisión de contraste calculada. Las tres páginas vacías del blocker 1 siguen sin estructura accesible porque no tienen contenido.

## Decisiones pendientes

| Decisión | Dueño | Fecha límite | Estado |
|---|---|---|---|
| Insumos de fase 0: fotos reales, precios, RUC, teléfono y testimonios | Cliente | 2026-11-05 | Pendiente; al vencer se activa el fallback |
| Fallback acordado si vence el checkpoint | — | 2026-11-05 | One-pager de 5 secciones con CTA de WhatsApp |
| Proveedor del formulario (Web3Forms / Formspree / otro) | Por asignar | — | Pendiente |
| Dominio y `site` en `astro.config.mjs` | Por asignar | — | Pendiente |
| Analítica y eventos de WhatsApp | Por asignar | — | Pendiente |

## Delete-zone

| Path / concepto | Por qué se retiró | Reemplazo | Condición para recrear |
|---|---|---|---|
| `src/content/` | Colecciones vacías; el contenido vive en `src/data/`. | `src/data/*.ts` | Solo con una decisión nueva de adoptar content collections |
| `CLAUDE.md` | Duplicaba `AGENTS.md` mediante hardlink y derivaba. | `AGENTS.md` | Solo si un harness exige `CLAUDE.md` |
| Estrellas ★★★★★ en testimonios | Se mostraban en los tres testimonios sin reseñas reales detrás; el informe prohíbe inventar ratings. | Texto del testimonio, sin rating | Solo con reseñas verificables y consentimiento del cliente |
| `favicon.svg` y `favicon.ico` de Astro | Eran los íconos por defecto del starter, no de la marca. | `favicon-32.png` y `apple-touch-icon.png` generados desde el logo | Solo si se consigue una versión vectorial del emblema |

## Umbrales y restricciones

- Build y dev descargan Montserrat y Open Sans desde Google Fonts: requieren red.
- Iconos: solo los 5 permitidos en `astro.config.mjs`; añadir nuevos ahí o dan 404.
- Sin tests, sin configuración de lint y sin CI.
- Logo: el cliente solo entregó PNG con fondo blanco (original 944×1124). El header y el footer usan un badge circular; pedir SVG o PNG transparente al diseñador para una versión limpia.
