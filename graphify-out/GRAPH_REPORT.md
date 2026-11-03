# Graph Report - Amish-main  (2026-11-02)

## Corpus Check
- 28 files · ~17,619 words
- Verdict: corpus is large enough that graph structure adds value.
- Unclassified: 4 file(s) not represented in the graph (top: .example 1, (none) 1, .vtt 1)

## Summary
- 247 nodes · 384 edges · 16 communities (11 shown, 5 thin omitted)
- Extraction: 99% EXTRACTED · 1% INFERRED · 0% AMBIGUOUS · INFERRED: 2 edges (avg confidence: 0.95)
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `96100ec8`
- Run `git rev-parse HEAD` and compare to check if the graph is stale.
- Run `graphify update .` after code changes (no API cost).

## Community Hubs (Navigation)
- App.tsx
- PRODUCT REQUIREMENTS DOCUMENT (PRD)
- package.json
- compilerOptions
- compilerOptions
- scripts
- 13. Requisitos funcionales detallados
- scripts
- 10. Requisitos técnicos
- Mejoras propuestas para la single page
- tsconfig.json
- AGENTS.md
- Lancaster Amish — Responsible Tourism Guide

## God Nodes (most connected - your core abstractions)
1. `useLang()` - 23 edges
2. `PRODUCT REQUIREMENTS DOCUMENT (PRD)` - 21 edges
3. `compilerOptions` - 18 edges
4. `compilerOptions` - 14 edges
5. `Page()` - 13 edges
6. `ui` - 12 edges
7. `7. Arquitectura de información` - 11 edges
8. `13. Requisitos funcionales detallados` - 11 edges
9. `lucide-react` - 10 edges
10. `Mejoras propuestas para la single page` - 10 edges

## Surprising Connections (you probably didn't know these)
- `Observaciones del análisis` --references--> `VideoSection()`  [INFERRED]
  todo.md → src/components/VideoSection.tsx
- `Observaciones del análisis` --references--> `LanguageProvider()`  [INFERRED]
  todo.md → src/i18n.tsx
- `App()` --calls--> `LanguageProvider()`  [EXTRACTED]
  src/App.tsx → src/i18n.tsx
- `Page()` --calls--> `DiscoverRegion()`  [EXTRACTED]
  src/App.tsx → src/components/DiscoverRegion.tsx
- `Page()` --calls--> `EnglishToolkit()`  [EXTRACTED]
  src/App.tsx → src/components/EnglishToolkit.tsx

## Import Cycles
- None detected.

## Communities (16 total, 5 thin omitted)

### Community 0 - "App.tsx"
Cohesion: 0.12
Nodes (41): lucide-react, react, App(), Page(), DiscoverRegion(), EnglishToolkit(), Footer(), GettingThere() (+33 more)

### Community 1 - "PRODUCT REQUIREMENTS DOCUMENT (PRD)"
Cohesion: 0.04
Nodes (46): 11. Requisitos de accesibilidad, 12. Requisitos de turismo responsable, 14. Criterios de calidad antes de entregar, 15. Fases de implementación, 16. Riesgos y mitigaciones, 17. Definición de terminado (Definition of Done), 18. Supuestos y decisiones pendientes, 19. Resultado esperado (+38 more)

### Community 2 - "package.json"
Cohesion: 0.08
Nodes (33): devDependencies, autoprefixer@^10.4.18, eslint@^9.9.1, @eslint/js@^9.9.1, eslint-plugin-react-hooks@^5.1.0-rc.0, eslint-plugin-react-refresh@^0.4.11, globals@^15.9.0, postcss@^8.4.35 (+25 more)

### Community 3 - "compilerOptions"
Cohesion: 0.10
Nodes (19): compilerOptions, allowImportingTsExtensions, baseUrl, isolatedModules, jsx, lib, module, moduleDetection (+11 more)

### Community 4 - "compilerOptions"
Cohesion: 0.12
Nodes (15): compilerOptions, allowImportingTsExtensions, isolatedModules, lib, module, moduleDetection, moduleResolution, noEmit (+7 more)

### Community 5 - "scripts"
Cohesion: 0.22
Nodes (7): dependencies, lucide-react@^0.446.0, react@^18.3.1, react-dom@^18.3.1, @supabase/supabase-js@^2.57.4, react-dom, @supabase/supabase-js

### Community 6 - "13. Requisitos funcionales detallados"
Cohesion: 0.18
Nodes (11): 13. Requisitos funcionales detallados, FR-01 — Navegación, FR-02 — Selector de idioma, FR-03 — Texto escrito, FR-04 — Video, FR-05 — Mapa, FR-06 — Recursos multimedia, FR-07 — Turismo responsable (+3 more)

### Community 7 - "scripts"
Cohesion: 0.33
Nodes (6): scripts, build, dev, lint, preview, typecheck

### Community 8 - "10. Requisitos técnicos"
Cohesion: 0.40
Nodes (5): 10. Requisitos técnicos, Estructura sugerida de archivos, Rendimiento, Responsividad, Tecnología propuesta

### Community 9 - "Mejoras propuestas para la single page"
Cohesion: 0.08
Nodes (24): Afirmaciones que requieren verificación adicional antes de publicarlas con cifras o como reglas generales, Archivos de esta corrección, Bloqueado por acceso/contexto, Cambios locales, Comprobaciones de integración, Comprobado en este pase, Comprobado en la preparación MVP, Configuración confirmada (+16 more)

### Community 15 - "Lancaster Amish — Responsible Tourism Guide"
Cohesion: 0.29
Nodes (6): Content and sources, Educational video, Lancaster Amish — Responsible Tourism Guide, Optional Street View panorama, Run locally, Vercel Preview settings

## Knowledge Gaps
- **5 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `Mejoras propuestas para la single page` connect `Mejoras propuestas para la single page` to `App.tsx`?**
  _High betweenness centrality (0.093) - this node is a cross-community bridge._
- **Should `App.tsx` be split into smaller, more focused modules?**
  _Cohesion score 0.11717171717171718 - nodes in this community are weakly interconnected._
- **Why does `Observaciones del análisis` connect `App.tsx` to `Mejoras propuestas para la single page`?**
  _High betweenness centrality (0.088) - this node is a cross-community bridge._
- **Should `PRODUCT REQUIREMENTS DOCUMENT (PRD)` be split into smaller, more focused modules?**
  _Cohesion score 0.0425531914893617 - nodes in this community are weakly interconnected._
- **Why does `react` connect `App.tsx` to `package.json`, `scripts`?**
  _High betweenness centrality (0.074) - this node is a cross-community bridge._
- **Should `package.json` be split into smaller, more focused modules?**
  _Cohesion score 0.08258258258258258 - nodes in this community are weakly interconnected._
- **Should `compilerOptions` be split into smaller, more focused modules?**
  _Cohesion score 0.1 - nodes in this community are weakly interconnected._