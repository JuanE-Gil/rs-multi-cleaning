# Status

Rol: **Status**. Salud actual, blockers, umbrales y delete-zone.
Actualizar solo cuando cambie un blocker o se retire algo. La estructura vive en el código, no aquí.

**Build: PASS** (2026-10-23). `npm run build` genera 16 páginas sin errores; `npx astro check` no reporta errores (2 hints, `Props` no usadas).

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
| 10 | Teléfono y WhatsApp temporales de pruebas (`993 905 978` / `51993905978`) en `src/data/empresa.ts`; `tel:` y `waLink` los usan en todo el sitio. Restaurar `977 383 121` / `51977383121` antes de publicar. | Comentarios TEMPORAL en el archivo |

## Accesibilidad (WCAG 2.2 AA)

Corregido el 2026-10-22 en la rama `a11y/wcag-2.2-aa`; integrado a `main` con merge `--no-ff` y la rama se conserva para futuras auditorías WCAG.

- Contraste: el verde de WhatsApp pasa de `#1FA855` (3.09:1 con texto blanco) a `--color-wa: #0E7A3C` (5.43:1); `--color-wa-strong` para hover. Los números de proceso usan `bg-teal-900` (9.39:1) en vez de `bg-teal` (4.43:1). El hover del botón primario usa `--color-green-strong` (6.63:1) en vez de `green-ink/90` (4.17:1).
- Foco visible de dos tonos (`:focus-visible` con contorno teal-ink y halo blanco) para fondos claros y oscuros; el comparador antes/después marca el contenedor con `focus-within`.
- Estructura: `lang="es-PE"`, un solo `h1` por página, `SectionHeading` acepta `as="h1"`, columnas del footer pasan de `h3` a `h2`.
- Objetivos táctiles: navegación principal a 44 px (`min-h-11`); footer, breadcrumbs y CTAs de tarjetas a 24 px (`min-h-6`) por densidad; checkbox de consentimiento de 24×24 con `id`/`for`.
- Región de testimonios desplazable con teclado (`tabindex="0"`, `role="region"`, `aria-label`); iconos decorativos con `aria-hidden`.

Pendiente de verificar con lector de pantalla y navegador real. No hay CI ni Chrome en el entorno, así que no se ejecutó axe/Lighthouse; la comprobación fue build + `astro check` + revisión de contraste calculada. Las tres páginas vacías del blocker 1 siguen sin estructura accesible porque no tienen contenido.

## Pulido de interfaz (2026-10-22)

Rama `polish/interface-details`, creada desde `main` después de integrar la accesibilidad:

- Tipografía: `text-wrap: balance` en títulos y `pretty` en párrafos; `antialiased` ya estaba en `BaseLayout`.
- Imágenes con outline neutro de 1 px desde `global.css` para separar bordes del fondo.
- Controles de formulario con `border-field` (`#6F889C`, 3.7:1 sobre blanco). Antes usaban `border-hairline` (1.44:1), insuficiente para identificar el campo.
- Botones con press `active:scale-[0.98]`, transiciones de propiedades explícitas (sin `transition-all`) y override para `prefers-reduced-motion`.
- Enlaces "Ver detalle" con nombre accesible único; testimonios como `figure`/`blockquote`/`figcaption`; asteriscos de campos obligatorios ocultos a lectores de pantalla.
- Se retiró el scale de hover del FAB y del comparador: el movimiento no aportaba y añadía ruido.
- Shell de la home: se retiró `rounded-lg`, borde y sombra de las 11 secciones; ahora son bandas full-bleed con `Container` interno y fondos alternos mist/blanco/navy. Se corrigió la colisión Testimonios–Cobertura y FAQ pasó a blanco con borde de control a 3.7:1. `#servicios` recibe `scroll-mt-24` para el header sticky.

Límites: los enlaces del footer conservan 24 px de alto por densidad (la recomendación de 40–44 px no cabe sin romper el layout). Sin navegador real ni axe; verificación con build, `astro check` y revisión estática. Quedan diferidos el acento de `SectionHeading`, la línea de tiempo del proceso y la numeración de tarjetas de servicio: primero hay que validar el shell en navegador.

## Convenciones de estilo para agentes (2026-10-23)

Rama `polish/interface-details`, commits `58b218e` y `035140d`:

- `.ai-style-rules.md` en la raíz: Golden Files, reglas de naming/estado y DONTs, derivadas de un full-scan de ~47 archivos. `AGENTS.md` lo referencia como lectura previa (hook suave, sin enforcement mecánico).
- `NavKey` (`inicio|servicios|nosotros|contacto`) exportada en `src/data/nav.ts` y usada por `PageLayout`, `Header` y `NavMobile`; ya no circula `string` suelto.
- Props tipadas con `Astro.props as Props`: verificado que `interface Props` solo tipa la API pública y que sin cast `Astro.props` es `any` dentro del componente (rompía `SectionHeading`).
- Cabecera: nombre de marca "R&S Multi Cleaning" junto al logo en `Header.astro` (se había perdido al añadir el badge circular).

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
