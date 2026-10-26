# Graph Report - Amish-main  (2026-10-26)

## Corpus Check
- 27 files · ~15,597 words
- Verdict: corpus is large enough that graph structure adds value.
- Unclassified: 3 file(s) not represented in the graph (top: .example 1, (none) 1, .css 1)

## Summary
- 237 nodes · 340 edges · 16 communities (10 shown, 6 thin omitted)
- Extraction: 99% EXTRACTED · 1% INFERRED · 0% AMBIGUOUS · INFERRED: 2 edges (avg confidence: 0.95)
- Token cost: 0 input · 0 output

## Community Hubs (Navigation)
- App.tsx
- PRODUCT REQUIREMENTS DOCUMENT (PRD)
- package.json
- compilerOptions
- compilerOptions
- devDependencies
- 13. Requisitos funcionales detallados
- 7. Arquitectura de información
- main.tsx
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
9. `lucide-react` - 9 edges
10. `Mejoras propuestas para la single page` - 8 edges

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

## Communities (16 total, 6 thin omitted)

### Community 0 - "App.tsx"
Cohesion: 0.13
Nodes (36): lucide-react, react, Page(), DiscoverRegion(), EnglishToolkit(), Footer(), GettingThere(), icons (+28 more)

### Community 1 - "PRODUCT REQUIREMENTS DOCUMENT (PRD)"
Cohesion: 0.05
Nodes (40): 10. Requisitos técnicos, 11. Requisitos de accesibilidad, 12. Requisitos de turismo responsable, 14. Criterios de calidad antes de entregar, 15. Fases de implementación, 16. Riesgos y mitigaciones, 17. Definición de terminado (Definition of Done), 18. Supuestos y decisiones pendientes (+32 more)

### Community 2 - "package.json"
Cohesion: 0.07
Nodes (30): dependencies, lucide-react, react, react-dom, @supabase/supabase-js, name, private, scripts (+22 more)

### Community 3 - "compilerOptions"
Cohesion: 0.10
Nodes (19): compilerOptions, allowImportingTsExtensions, baseUrl, isolatedModules, jsx, lib, module, moduleDetection (+11 more)

### Community 4 - "compilerOptions"
Cohesion: 0.12
Nodes (15): compilerOptions, allowImportingTsExtensions, isolatedModules, lib, module, moduleDetection, moduleResolution, noEmit (+7 more)

### Community 5 - "devDependencies"
Cohesion: 0.13
Nodes (15): devDependencies, autoprefixer, eslint, @eslint/js, eslint-plugin-react-hooks, eslint-plugin-react-refresh, globals, postcss (+7 more)

### Community 6 - "13. Requisitos funcionales detallados"
Cohesion: 0.18
Nodes (11): 13. Requisitos funcionales detallados, FR-01 — Navegación, FR-02 — Selector de idioma, FR-03 — Texto escrito, FR-04 — Video, FR-05 — Mapa, FR-06 — Recursos multimedia, FR-07 — Turismo responsable (+3 more)

### Community 7 - "7. Arquitectura de información"
Cohesion: 0.18
Nodes (11): 7.10 Footer, 7.1 Header y navegación principal, 7.2 Hero — presentación del destino, 7.3 Section 01 — Introduction to the Place, 7.4 Section 02 — Discover the Region, 7.5 Section 03 — Getting There & Moving Around, 7.6 Section 04 — Watch the Educational Video, 7.7 Section 05 — Travel Responsibly (+3 more)

### Community 9 - "Mejoras propuestas para la single page"
Cohesion: 0.10
Nodes (20): Afirmaciones que requieren verificación adicional antes de publicarlas con cifras o como reglas generales, Bloqueado por acceso/contexto, Cambios locales, Comprobaciones de integración, Comprobado en este pase, Comprobado en la preparación MVP, Configuración confirmada, Dependencias: reporte previo, no repetido en esta ronda (+12 more)

### Community 15 - "Lancaster Amish — Responsible Tourism Guide"
Cohesion: 0.33
Nodes (5): Content and sources, Lancaster Amish — Responsible Tourism Guide, Optional educational video, Run locally, Vercel Preview settings

## Knowledge Gaps
- **8 isolated node(s):** `@supabase/supabase-js`, `@types/react`, `@types/react-dom`, `autoprefixer`, `eslint` (+3 more)
  These have ≤1 connection - possible missing edges or undocumented components. (Counts symbols only; 156 node(s) total have ≤1 connection when file, concept and rationale nodes are included.)
- **6 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `Observaciones del análisis` connect `Mejoras propuestas para la single page` to `App.tsx`?**
  _High betweenness centrality (0.074) - this node is a cross-community bridge._
- **What connects `@supabase/supabase-js`, `@types/react`, `@types/react-dom` to the rest of the system?**
  _8 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `App.tsx` be split into smaller, more focused modules?**
  _Cohesion score 0.12670068027210885 - nodes in this community are weakly interconnected._
- **Why does `react` connect `App.tsx` to `main.tsx`, `package.json`?**
  _High betweenness centrality (0.072) - this node is a cross-community bridge._
- **Should `PRODUCT REQUIREMENTS DOCUMENT (PRD)` be split into smaller, more focused modules?**
  _Cohesion score 0.04878048780487805 - nodes in this community are weakly interconnected._
- **Should `package.json` be split into smaller, more focused modules?**
  _Cohesion score 0.0677361853832442 - nodes in this community are weakly interconnected._
- **Should `compilerOptions` be split into smaller, more focused modules?**
  _Cohesion score 0.1 - nodes in this community are weakly interconnected._