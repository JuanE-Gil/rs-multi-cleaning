# Status

Rol: **Status**. Salud actual, blockers, umbrales y delete-zone.
Actualizar solo cuando cambie un blocker o se retire algo. La estructura vive en el código, no aquí.

**Build: FAIL** (2026-10-22). `npm run build` aborta en `generating static routes`.

## Blockers

| # | Blocker | Evidencia |
|---|---|---|
| 1 | `src/pages/servicios/[slug].astro` está vacío (0 bytes) y no exporta `getStaticPaths()` → el build falla con `GetStaticPathsRequired`. Rompe todo el despliegue. | `npm run build`, log del 2026-10-22 |
| 2 | Tres páginas más son archivos de 0 bytes: `src/pages/404.astro`, `cobertura.astro` y `gracias.astro`. Renderizarían en blanco. | Tamaño 0 en disco |
| 3 | `ServicesGrid` enlaza a `/servicios/{slug}` para los 6 servicios, pero esas rutas no se generan (ver #1) → 404. | `src/components/sections/ServicesGrid.astro` |
| 4 | `site` sin definir en `astro.config.mjs` → `@astrojs/sitemap` no genera sitemap ni URLs canónicas. | `astro.config.mjs` |
| 5 | Datos de negocio placeholder en `src/data/empresa.ts`: teléfono, correo, RUC y dirección tienen TODO. | Comentarios TODO en el archivo |
| 6 | Enlaces a `/legal/politica-de-privacidad` y `/legal/terminos-y-condiciones` sin página que los resuelva. | `Footer.astro`, `FinalCta.astro` |
| 7 | `PUBLIC_FORM_ENDPOINT` no definido: el formulario de cotización postea a `#`. | `FinalCta.astro` línea 9 |

## Delete-zone

| Path / concepto | Por qué se retiró | Reemplazo | Condición para recrear |
|---|---|---|---|
| `src/content/` | Colecciones vacías; el contenido vive en `src/data/`. | `src/data/*.ts` | Solo con una decisión nueva de adoptar content collections |
| Contenido starter de `README.md` | Boilerplate de Astro; no describe el proyecto. | Pendiente: mapa del proyecto | Al reescribir el README |
| `CLAUDE.md` | Deriva de `AGENTS.md` y duplica reglas. | `AGENTS.md` | Al decidir si queda como stub o se elimina |

## Umbrales y restricciones

- Build y dev descargan Montserrat y Open Sans desde Google Fonts: requieren red.
- Iconos: solo los 5 permitidos en `astro.config.mjs`; añadir nuevos ahí o dan 404.
- Sin tests, sin configuración de lint y sin CI.
