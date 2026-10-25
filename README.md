# R&S Multi Cleaning — Sitio corporativo

Sitio de captación de cotizaciones para R&S Multi Cleaning S.A.C. (Lima). Vende un servicio concreto: lavado y desinfección de sofás, colchones, alfombras y cortinas a domicilio. Construido con Astro 7 y Tailwind CSS 4; sin backend ni base de datos.

> **El build pasa.** `npm run build` genera 16 páginas, incluidas las nueve de detalle por servicio. Quedan páginas de cierre sin contenido y datos de negocio por confirmar: detalle en [`docs/STATUS.md`](docs/STATUS.md).

## Fases del proyecto

Leyenda: ✅ completa · 🟡 parcial · ⬜ pendiente.

| Fase | Qué entrega | Estado |
|---|---|---|
| **0 — Insumos del cliente** | Fotos reales antes/después, precios de referencia, RUC, teléfono, horarios y seis testimonios autorizados. Sin esto el sitio se ve genérico y puede publicar un teléfono equivocado. | ⬜ Pendiente — checkpoint **2026-11-05** |
| **1 — Base técnica** | Proyecto Astro, tokens de marca en `@theme`, fuentes, layouts, Header/Footer y componentes UI reutilizables. | ✅ Completa |
| **2 — Home** | Las 14 piezas del informe están montadas: header, doce secciones y footer. El hero usa fotos antes/después reales y los testimonios ya no muestran estrellas inventadas. | ✅ Completa |
| **3 — Servicios** | Nueve páginas de detalle generadas desde el catálogo del flyer del cliente, con señales, proceso, qué incluye, qué no incluye, FAQ y enlaces internos. Falta el hub: `services/index.astro` sigue siendo una maqueta. | 🟡 Parcial |
| **4 — Cierre** | `contact` ya tiene formulario, canales directos y expectativa de respuesta. `about` y el hub de servicios siguen siendo maquetas; `coverage`, `thanks` y `404` están vacías; las legales no existen aunque el footer las enlaza. | 🟡 Parcial |
| **5 — Medición** | Analítica, eventos de WhatsApp con origen, Search Console y Lighthouse CI. Nada iniciado; sin esto no se puede comprobar el objetivo de 4% de conversión. | ⬜ Pendiente |
| **6 — Crecimiento** | Páginas por distrito, blog técnico y CRM. Fuera del alcance actual. | ⬜ Pendiente |

Si los insumos de la fase 0 no llegan antes del checkpoint, se publica un one-pager de cinco secciones con CTA de WhatsApp en lugar del sitio completo. Decisión registrada en [`docs/HISTORY.md`](docs/HISTORY.md).

## Mapa del proyecto

| Necesitas | Ve a | Verifica con |
|---|---|---|
| Cambiar textos, precios o servicios | `src/data/*.ts` | `npx astro check` |
| Editar una sección de la home | `src/components/sections/` y `src/pages/index.astro` | Fondo alterno + `Container`; `npm run build` |
| Cambiar colores, tipografía, foco o pulido visual | `src/styles/global.css` (`@theme` y base) | `npm run build` |
| Añadir una página | `src/pages/` (la ruta es el nombre del archivo) | `npm run build` |
| Ajustar SEO o meta tags | `src/components/seo/BaseHead.astro` | Inspeccionar el HTML generado |
| Cambiar enlaces de WhatsApp | `src/utils/wa.ts` (`waLink`) | Abrir un CTA en el navegador |
| Cambiar logo o favicon | `public/images/logo.png`, `public/favicon-32.png`, `public/apple-touch-icon.png` | `npm run build` |
| Actualizar teléfono, RUC o correo | `src/data/empresa.ts` | Buscar `TODO` en el archivo |

La especificación completa vive fuera del repositorio: `../INFORME_LANDING/INFORME_LANDING_RS_MULTI_CLEANING.md`.

## Cómo correrlo

Requiere Node >= 22.12.0 y conexión a internet (las fuentes se descargan de Google Fonts).

```sh
npm install
npm run dev       # servidor local; en segundo plano: npx astro dev --background
npm run build     # build de producción
npm run preview   # previsualizar el build
npx astro check   # typecheck
```

## Documentación

- [`docs/STATUS.md`](docs/STATUS.md) — blockers, decisiones pendientes y delete-zone. Léelo antes de tocar código.
- [`docs/HISTORY.md`](docs/HISTORY.md) — decisiones durables del proyecto.
- [`AGENTS.md`](AGENTS.md) — reglas y convenciones para agentes.
