# Mejoras propuestas para la single page

## Imágenes responsivas y navegación contextual

- [x] Imágenes de Pexels con `srcSet`/`sizes`, variantes AVIF/WebP y fallback JPEG; dimensiones intrínsecas para reservar espacio y carga diferida en fotos bajo el primer pantallazo.
- [x] Imagen del hero priorizada con `fetchPriority="high"`, carga inmediata y variantes responsivas.
- [x] Menú principal y móvil reflejan la sección actual durante el desplazamiento con `aria-current`; se añadió un botón discreto para volver arriba.
- [x] El botón de retorno respeta `prefers-reduced-motion` y usa desplazamiento inmediato cuando esa preferencia está activa.
- [x] Revisado visualmente el hero en escritorio, la imagen principal carga y el menú marca el estado actual al navegar; el control de retorno aparece después de desplazarse.
- [x] Typecheck y build pasan; lint sin errores y con una advertencia Fast Refresh preexistente en `src/i18n.tsx`.

## Street View a ancho completo y destinos verificados

### Implementado

- [x] Conservados los nombres, orden y descripciones EN/ES de las cuatro tarjetas originales; controles de destino compactos cambian una sola tarjeta informativa y el panorama activo.
- [x] Visor casi a ancho completo, separado 1rem de cada borde, con esquinas redondeadas, sombra y altura adaptable por dispositivo. La tarjeta informativa compacta queda inmediatamente debajo.
- [x] La tarjeta mantiene una composición vertical consistente: destino, ubicación, descripción y selectores; los enlaces de visitantes y Google Maps quedan en una fila inferior separada por una línea, tanto en móvil como en escritorio.
- [x] Lancaster usa el panorama de The Amish Village en Ronks; Bird-in-Hand usa el panorama asociado a 2760 Old Philadelphia Pike; Intercourse usa el panorama de Kitchen Kettle Village. URLs y orientaciones proceden de los enlaces suministrados por el usuario. Google etiqueta visualmente la panorámica de Bird-in-Hand como 2754 Old Philadelphia Pike, por lo que la tarjeta indica «cerca de 2760».
- [x] Strasburg conserva la búsqueda exterior por ubicación pública que ya cargaba la panorámica del ferrocarril.
- [x] Se mantienen controles nativos del iframe, foco visible, estados seleccionados, alternativa bilingüe cuando falta la clave y advertencia de que las imágenes no son una transmisión en vivo.

### Validación ejecutada

- [x] En navegador, se visualizaron los panoramas proporcionados para Lancaster (The Amish Village), Intercourse (Kitchen Kettle Village) y Bird-in-Hand (Google identifica el punto como 2754 Old Philadelphia Pike); la vista exterior de Strasburg se había comprobado anteriormente.
- [x] En navegador móvil, el visor conserva un margen uniforme, esquinas redondeadas y controles de Maps; la fila inferior presenta los dos enlaces juntos bajo una línea divisoria. No se observó desbordamiento horizontal en esta vista.
- [x] `npm run typecheck`, `npm run lint` y `npm run build` finalizaron correctamente; lint conserva una advertencia Fast Refresh existente en `src/i18n.tsx`.
- [ ] No se pudo confirmar visualmente el ancho completo en escritorio en este pase.
- [ ] Antes de Preview en Vercel, permitir el dominio Preview en las restricciones HTTP referrer de `VITE_GOOGLE_MAPS_EMBED_API_KEY`; en la sesión anterior Google aceptó `localhost:5173` y rechazó el origen `localhost:5174`.

### Archivos de esta corrección

- `src/components/DiscoverRegion.tsx`
- `src/content.ts`
- `src/index.css`
- `todo.md`
- Artefactos de Graphify generados anteriormente en `graphify-out/`.

Análisis de la implementación con Graphify (237 nodos, 340 relaciones tras la preparación del MVP) y contraste con `PRD.md`.

## Prioridad alta

- [ ] **Completar la sección del video (FR-04).** El reproductor ya admite video MP4 y pista de subtítulos mediante `VITE_EDUCATIONAL_VIDEO_URL` y `VITE_EDUCATIONAL_VIDEO_CAPTIONS_EN`, con una alternativa de transcripción cuando el medio aún no está configurado. **Pendiente:** recibir el archivo o URL del video final y subtítulos para cumplir FR-04.
- [x] **Hacer que el menú móvil sea plenamente usable.** Añadidos cierre con Escape, cambio de idioma y selección de sección; Escape devuelve el foco al botón. El control expone `aria-controls` y `aria-expanded`.
- [x] **Mejorar navegación por anclas.** Navegación convertida a enlaces con hash en encabezado, hero y pie; `scroll-margin-top` evita que el encabezado fijo tape los destinos y el desplazamiento suave respeta movimiento reducido.
- [x] **Persistir y revisar el selector de idioma.** Preferencia EN/ES guardada/restaurada de forma segura; `document.documentElement.lang`, título y metadatos se sincronizan con el idioma actual. Verificación de interacción en navegador pendiente.
- [x] **Validar contenido, créditos y enlaces externos.** Texto alternativo descriptivo separado de créditos; atribución de mapa mantenida; enlaces externos se identifican y usan `noopener noreferrer`. Los derechos y nombres de autor de cada foto siguen pendientes de confirmación.

## Prioridad media

- [ ] **Optimizar carga y estabilidad visual.** Sustituir imágenes remotas directas por recursos optimizados y bajo control del proyecto cuando haya autorización de uso; generar variantes responsivas (`srcSet`/`sizes`), dimensiones reservadas y formatos modernos. Mantener carga diferida bajo el primer pantallazo y priorizar la imagen principal.
- [x] **Mejorar la accesibilidad de imágenes y controles.** Textos alternativos localizados y créditos separados; hero decorativo usa `alt=""`; foco visible y objetivos táctiles mínimos en controles principales. Contraste/zoom requieren inspección visual en navegador.
- [ ] **Añadir navegación contextual durante el recorrido.** Marcar la sección activa en el menú según el desplazamiento y ofrecer un control discreto para volver arriba. Respetar `prefers-reduced-motion` también en el desplazamiento iniciado por botones.
- [x] **Convertir las indicaciones de transporte en recursos accionables.** Enlace oficial de Amtrak agregado para rutas y horarios; no se prometen horarios en tiempo real.
- [x] **Pulir el diseño adaptable y lectura larga.** Secciones y mapa usan rejillas que colapsan en pantallas pequeñas, anchuras flexibles y foco/targets táctiles. Zoom al 200% y orientación horizontal no se han validado visualmente.

## Prioridad baja

- [x] **Completar metadatos para compartir.** Título, descripción bilingüe, favicon y Open Graph/Twitter implementados. No se inventaron canonical, dominio ni imagen social.
- [ ] **Medir calidad antes de publicar.** Build local verificado; quedan auditoría visual/accesible en navegador y vista previa real. No se midieron métricas de rendimiento.
- [ ] **Documentar mantenimiento de la página.** Explicar cómo cambiar contenido bilingüe, medios, créditos y fecha de consulta en `src/content.ts`, además de cómo actualizar la página sin romper el orden de secciones.

## Observaciones del análisis

- `src/App.tsx` compone la single page como secciones separadas y ordenadas; Graphify no detectó ciclos de importación.
- `src/content.ts` centraliza textos y navegación bilingües. `LanguageProvider` restaura la preferencia guardada de forma segura y usa inglés si no existe o el almacenamiento no está disponible.
- El hero usa una imagen remota decorativa con crédito visible; las imágenes de introducción conservan texto alternativo descriptivo.
- `VideoSection` usa URLs opcionales para MP4/WebVTT y ofrece la transcripción cuando falta o falla el video; faltan los medios finales.
- El encabezado, hero y pie navegan con hash anchors; el menú móvil cierra con Escape, idioma o selección de sección.
- Graphify no modeló `src/index.css`; las propuestas de estilo se basan en su lectura directa y en los requisitos del PRD.

## Preparación para Vercel

### Configuración confirmada

- Framework: Vite con React y TypeScript; gestor: npm; lockfile: `package-lock.json`.
- Comandos: instalación reproducible `npm ci`; build `npm run build`; salida confirmada en `dist/`.
- La página es estática y navega por anclas/hash. No usa router con rutas de cliente; no necesita `vercel.json` ni rewrites para la navegación actual.
- `vercel.json` no existe. En Vercel, usar el preset Vite y los comandos/salida anteriores; la raíz debe ser el directorio que contiene `package.json` (`.` si ese directorio se conecta como raíz del repositorio).
- El directorio de trabajo inspeccionado no contiene `.git`, por lo que no fue posible consultar estado staged/untracked ni confirmar la raíz de un repositorio remoto.
- No existe script `test` en `package.json`; las comprobaciones disponibles son `typecheck`, `lint`, `build` y `preview`.

### Implementado localmente

- [x] Añadir `.env.example` con `VITE_EDUCATIONAL_VIDEO_URL` (URL pública HTTPS directa a un archivo MP4) y `VITE_EDUCATIONAL_VIDEO_CAPTIONS_EN` (URL pública HTTPS directa a subtítulos WebVTT `.vtt`). Ambos valores quedan vacíos, sin secretos ni URLs inventadas. Las variables `VITE_*` son públicas en el bundle; no colocar credenciales en ellas.
- [x] Ignorar `.env*` y mantener `.env.example` versionable en `.gitignore`.
- [x] Corregir la etiqueta de subtítulos para que solo los anuncie cuando existan video y pista de captions. Sin video configurado se conserva el estado informativo y la transcripción; ante error de reproducción aparece una alternativa accesible.
- [x] Mantener configuración Vite existente sin añadir `vercel.json` ni reglas de rewrite.
- [x] Persistir idioma EN/ES con fallback inglés y tolerancia a `localStorage` no disponible; sincronizar atributo `lang`, título y metadatos de compartir.
- [x] Añadir favicon propio y metadatos descriptivos bilingües sin inventar dominio, canonical ni imagen social.
- [x] Separar alt text de créditos Pexels y añadir el enlace oficial de rutas de Amtrak.
- [x] Actualizar únicamente la dependencia transitiva `ws` de `8.18.3` a `8.22.0`, dentro del rango ya declarado por `@supabase/realtime-js`, para corregir un hallazgo alto de ejecución. Sin cambios de dependencias directas.

### Comprobado en este pase

- [x] `npm ci --no-audit --fund=false` instaló correctamente el lockfile actual en este proyecto; `npm ls ws` confirma `8.22.0` dentro del rango existente.
- [x] `npm run typecheck` finalizó sin errores; `npm run lint` sin errores y con una advertencia Fast Refresh en `src/i18n.tsx`.
- [x] `npm run build` finalizó con ambas variables de video retiradas del entorno; produjo `dist/index.html` y archivos en `dist/assets/`.
- [x] En la validación MVP, `vite preview` sirvió `dist/index.html`, CSS, JavaScript y favicon con HTTP 200.
- [x] Revisión estática: los 8 destinos de `navItems` existen como secciones; las URLs remotas declaradas en HTML y componentes usan HTTPS. La verificación visual/interactiva de esos destinos no se ejecutó.
- [ ] No se ejecutaron pruebas automatizadas: no existe script `test`.
- [ ] No se verificó la reproducción de medios ni la interacción EN/ES en navegador; no se proporcionaron video/subtítulos definitivos.
- [x] Auditoría npm después del ajuste: 13 hallazgos restantes (1 bajo, 4 moderados, 8 altos), todos transitivos. `npm audit --omit=dev` reporta 0 vulnerabilidades en el árbol de ejecución; los hallazgos restantes pertenecen a herramientas de desarrollo. No se ejecutó `npm audit fix`.

### Pendiente manual antes de producción

- [ ] Conectar este código a un repositorio Git y confirmar en Vercel el directorio raíz que contiene `package.json`.
- [ ] En el proyecto Vercel, confirmar preset Vite, instalación `npm ci`, build `npm run build` y salida `dist`; no añadir configuración duplicada si Vercel detecta esos valores.
- [ ] Proporcionar el video final MP4 y subtítulos WebVTT en inglés. Si se alojan en otro dominio, confirmar HTTPS, compatibilidad de entrega y CORS para el archivo `.vtt`; después establecer ambas variables opcionales en Vercel.
- [ ] Confirmar cada nombre de fotógrafo y los derechos de terceros para las imágenes Pexels; la licencia general de la plataforma no prueba permisos específicos de cada imagen.
- [ ] Publicar una Preview y comprobar en navegador enlaces internos, EN/ES, imágenes, mapa, reproducción, subtítulos, transcripción y responsive; registrar URL y resultado.
- [ ] Validar visualmente teclado/foco, contraste, zoom al 200%, orientación horizontal y carga externa del mapa en la Preview.
- [ ] Verificar la URL de producción después de publicar. No se ha realizado despliegue ni se declara producción completada.

Referencia de configuración: [builds de Vercel](https://vercel.com/docs/builds) y [configuración de build](https://vercel.com/docs/builds/configure-a-build).

### Bloqueado por acceso/contexto

- [ ] No hay metadatos `.git` en este directorio ni se proporcionó una URL de repositorio o de Vercel; la conexión/importación y la verificación remota requieren esa acción manual.
- [ ] La validación real del video queda bloqueada hasta recibir los medios definitivos y sus URLs públicas.

## Integración del paquete editorial NotebookLM

### Cambios locales

- [x] Localizados y leídos completos `../intro.md`, `../video-script.md` y `../research-and-sources.md`.
- [x] Integrada en la sección cultural una introducción EN/ES de aproximadamente 400 palabras por idioma; su contenido conserva referencias institucionales consultables y evita marcadores numéricos en pantalla.
- [x] Ampliado el fallback de transcripción a cuatro bloques de narración EN/ES, propuestas visuales, sugerencias de audio, resúmenes de subtítulos EN/ES y enlaces relacionados por bloque.
- [x] Distribuidos términos de historia, comunidad, idioma, tecnología, movilidad y economía entre Introducción, Cómo llegar, Turismo responsable y un glosario cultural bilingüe del kit de inglés.
- [x] Actualizada la bibliografía con el Young Center/Elizabethtown College, sus preguntas frecuentes y página de tecnología, y las páginas temáticas de Discover Lancaster. La guía no muestra marcadores `[n]` del paquete fuente.
- [x] Reformuladas generalizaciones sobre propiedad/transporte, fotografía y horarios para reconocer variaciones locales y no presentar horarios ni reglas como universales.

### Comprobaciones de integración

- [x] `npm run typecheck`, `npm run lint` y `npm run build` pasan tras la integración; lint conserva una advertencia Fast Refresh en `src/i18n.tsx`.
- [x] Conteo estático de la introducción: inglés 398 palabras y español 474; 6 párrafos por idioma.
- [x] Conteo estático de narración: inglés 453 palabras y español 481; cuatro bloques. La estimación inglesa es ~3:56 a 115 palabras/minuto, antes de pausas; duración final depende de locución y edición.
- [x] Enlaces institucionales y de Amtrak abiertos y revisados; Amtrak lista Keystone Service y Pennsylvanian con parada en Lancaster. Esto no verifica horarios futuros.

### Afirmaciones que requieren verificación adicional antes de publicarlas con cifras o como reglas generales

- [ ] El material fuente presenta cifras demográficas distintas en alcance y fecha: ~43.500 residentes Amish en Lancaster y ~411.060 personas/684 asentamientos/32 estados en Norteamérica; no se publican en la interfaz. Si se incorporan, identificar año, geografía y metodología.
- [ ] Las fechas de establecimiento en municipios concretos, y la diferencia entre “década de 1720” y “1720s o 1730s”, requieren una fuente histórica local adicional. La interfaz usa únicamente “principios del siglo XVIII”.
- [ ] Estadísticas familiares, educativas y religiosas del cuaderno (cinco o más hijos de promedio, 7–10 en algunas familias, ~90% escolarización, ~85% retención, edades asociadas a *Rumspringa* y bautismo) no se exponen como cifras; revisar población y afiliación antes de atribuirlas a todas las comunidades.
- [ ] La exención de Social Security y otras afirmaciones tributarias son jurídicas y dependen de alcance y fecha; verificar con fuente oficial/legal antes de reutilizarlas.
- [ ] Las reglas concretas de tecnología, bicicletas juveniles, transporte aéreo, fotografía de rostros y cierres dominicales varían o están expresadas de forma general en el paquete; la interfaz evita presentarlas como universales. Mantener la verificación por distrito/afiliación.
- [ ] Confirmar en fuentes oficiales las indicaciones al centro de visitantes de Greenfield Road, las carreteras/números de ruta, la cobertura actual de autobuses, distancias legales para adelantar, y las descripciones turísticas de Intercourse, Strasburg y Bird-in-Hand antes de volver a publicarlas como instrucciones. Verificar tarifas/operadores locales si se añaden.
- [ ] El material de investigación cita referencias `[1]` a `[59]`, pero no incluye aquí una bibliografía individual completa para cada marcador. No mapear esos números a afirmaciones hasta obtener la lista íntegra de referencias originales.

## Preparación MVP para GitHub y Vercel

### Implementado localmente

- [x] Añadido `README.md` operativo con comandos, variables opcionales de medios y los valores de build para Vercel.
- [x] Quitadas de la interfaz dos frases internas que mencionaban la consigna/paquete editorial; las notas de verificación permanecen solo en esta documentación.
- [x] `.gitignore` ya excluye `node_modules/`, `dist/`, archivos `.env*` salvo `.env.example`, configuración local `.codex/` y la caché de Graphify. No se modificaron dependencias directas ni configuración de build.
- [x] No se añadieron `vercel.json`, rewrites ni variables con valores inventados. No se inicializó Git.

### Comprobado en la preparación MVP

- [x] `npm ci --no-audit --fund=false` instaló el lockfile actual en el proyecto (284 paquetes añadidos); `npm ls --depth=0` termina sin dependencias faltantes.
- [x] `npm run typecheck` y `npm run build` pasan. `npm run lint` pasa sin errores, con una advertencia Fast Refresh en `src/i18n.tsx`.
- [x] El build se ejecutó sin las variables opcionales del video. `dist/index.html`, CSS, JavaScript y favicon respondieron HTTP 200 desde `vite preview`; el bundle conserva la alternativa y el texto de transcripción en EN/ES.
- [x] Los 8 IDs de navegación tienen secciones correspondientes; no hay archivos `.env` locales ni `vercel.json`. Búsqueda estática no encontró marcadores bibliográficos ni notas NotebookLM/pendientes en `src` o `public`.
- [x] Amtrak y las páginas de Amish Studies/Discover Lancaster citadas en la guía se revisaron; las URLs de horarios de transporte pueden cambiar.
- [ ] No hay script `test`; no se ejecutaron pruebas automatizadas ni una revisión interactiva/visual del navegador, zoom al 200% o móvil.

### Dependencias: reporte previo, no repetido en esta ronda

- [x] El último reporte local disponible registra 13 hallazgos transitivos, todos en dependencias de desarrollo: bajo `@eslint/plugin-kit`; moderados `@humanfs/node`, `ajv`, `postcss-selector-parser`, `yaml`; altos `brace-expansion`, `browserslist`, `cross-spawn`, `flatted`, `glob`, `js-yaml`, `minimatch`, `picomatch`.
- [x] En ese reporte, `npm audit --omit=dev` dio 0 vulnerabilidades de ejecución; `ws` ya fue actualizado a `8.22.0` dentro del rango existente. El reporte indicaba correcciones disponibles, pero no se aplicaron actualizaciones masivas a herramientas de desarrollo porque no afectan al bundle estático de producción. No se volvió a ejecutar `npm audit` por ser una comprobación ya completada.

### Listo localmente; pendiente manual para publicar

- [x] Valores Vercel documentados: preset Vite, instalación `npm ci`, build `npm run build`, salida `dist`; el sitio estático no necesita rewrites.
- [ ] No se encontró `.git` en el directorio del proyecto ni en sus carpetas padre inmediatas; tampoco hay URL remota conocida. Crear/importar el repositorio correcto y confirmar la raíz `Amish-main` en GitHub/Vercel requiere una acción manual.
- [ ] Abrir una Preview de Vercel y comprobar visualmente idioma, teclado, imágenes, mapa y responsive; no se ha publicado ni verificado URL de Preview o producción.
- [ ] Confirmar la autoría/derechos de cada imagen Pexels. El nombre de fotógrafo existente no se ha verificado individualmente.
- [ ] Recibir el MP4 y WebVTT definitivos para probar la reproducción; esto no bloquea una Preview porque el fallback bilingüe está incluido.
