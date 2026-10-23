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
