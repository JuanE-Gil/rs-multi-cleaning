# Status

Rol: **Status**. Salud actual, blockers, umbrales y delete-zone.
Actualizar solo cuando cambie un blocker o se retire algo. La estructura vive en el código, no aquí.

**Build: PASS** (2026-10-22). `npm run build` genera 13 páginas sin errores.

## Blockers

| # | Blocker | Evidencia |
|---|---|---|
| 1 | Tres páginas son archivos de 0 bytes: `src/pages/404.astro`, `cobertura.astro` y `gracias.astro`. Renderizan en blanco. | Tamaño 0 en disco; build del 2026-10-22 |
| 2 | `site` sin definir en `astro.config.mjs` → `@astrojs/sitemap` no genera sitemap ni URLs canónicas. | `astro.config.mjs`, warning del build |
| 3 | Datos de negocio placeholder en `src/data/empresa.ts`: teléfono, correo, RUC y dirección tienen TODO. | Comentarios TODO en el archivo |
| 4 | Enlaces a `/legal/politica-de-privacidad` y `/legal/terminos-y-condiciones` sin página que los resuelva. | `Footer.astro`, `FinalCta.astro` |
| 5 | `PUBLIC_FORM_ENDPOINT` no definido: el formulario de cotización postea a `#`. | `FinalCta.astro` línea 9 |
| 6 | Sin precios reales: `ServicesGrid` oculta `precioDesde` y las páginas de detalle no publican tarifa, solo explican qué la hace variar. | `src/data/servicios.ts` |
| 7 | Solo el servicio de sofás tiene fotos antes/después. Los otros cinco muestran un placeholder honesto hasta que lleguen los casos de fase 0. | `src/data/servicios.ts` (`casoId`), `src/data/casos.ts` |
| 8 | `servicios/index.astro` sigue siendo una maqueta de un solo título; el hub del informe (filtro por segmento y tabla método/material) no existe. | `src/pages/servicios/index.astro` |

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

## Umbrales y restricciones

- Build y dev descargan Montserrat y Open Sans desde Google Fonts: requieren red.
- Iconos: solo los 5 permitidos en `astro.config.mjs`; añadir nuevos ahí o dan 404.
- Sin tests, sin configuración de lint y sin CI.
