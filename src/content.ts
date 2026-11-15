export type Lang = 'en' | 'es';

export const LANGS: Lang[] = ['en', 'es'];

export interface NavItem {
  id: string;
  label: Record<Lang, string>;
}

export const navItems: NavItem[] = [
  { id: 'home', label: { en: 'Home', es: 'Inicio' } },
  { id: 'culture', label: { en: 'Culture', es: 'Cultura' } },
  { id: 'region', label: { en: 'Region', es: 'Región' } },
  { id: 'getting-there', label: { en: 'Getting There', es: 'Cómo Llegar' } },
  { id: 'video', label: { en: 'Video', es: 'Video' } },
  { id: 'responsible', label: { en: 'Responsible Tourism', es: 'Turismo Responsable' } },
  { id: 'toolkit', label: { en: 'English Toolkit', es: 'Kit de Inglés' } },
  { id: 'places', label: { en: 'Places', es: 'Lugares' } },
  { id: 'interaction', label: { en: 'Interaction', es: 'Interacción' } },
  { id: 'sources', label: { en: 'Sources', es: 'Fuentes' } },
];

export const ui = {
  siteName: { en: 'Lancaster Amish', es: 'Lancaster Amish' },
  tagline: {
    en: 'Responsible Tourism Guide',
    es: 'Guía de Turismo Responsable',
  },
  openMenu: { en: 'Open menu', es: 'Abrir menú' },
  closeMenu: { en: 'Close menu', es: 'Cerrar menú' },
  langLabel: { en: 'Language', es: 'Idioma' },
  mainNavigation: { en: 'Main navigation', es: 'Navegación principal' },
  references: { en: 'References for this introduction', es: 'Referencias de esta introducción' },
  narration: { en: 'Narration', es: 'Narración' },
  visualSuggestion: { en: 'Visual suggestion', es: 'Propuesta visual' },
  audioCue: { en: 'Audio cue', es: 'Sugerencia de audio' },
  subtitleSummary: { en: 'Subtitle summary', es: 'Resumen para subtítulos' },
  videoReferences: { en: 'References', es: 'Referencias' },
  glossarySources: { en: 'Sources for these terms', es: 'Fuentes de estos términos' },
  mobileNavigation: { en: 'Mobile navigation', es: 'Navegación móvil' },
  footerNavigation: { en: 'Footer navigation', es: 'Navegación del pie de página' },
  opensNewTab: { en: 'Opens in a new tab', es: 'Se abre en una pestaña nueva' },
  skipToContent: { en: 'Skip to main content', es: 'Ir al contenido principal' },
  backToTop: { en: 'Back to top', es: 'Volver arriba' },
  explore: { en: 'Explore the Guide', es: 'Explorar la Guía' },
  watchVideo: { en: 'Watch the Video', es: 'Ver el Video' },
  sectionLabel: {
    intro: { en: 'Section 01', es: 'Sección 01' },
    region: { en: 'Section 02', es: 'Sección 02' },
    getting: { en: 'Section 03', es: 'Sección 03' },
    video: { en: 'Section 04', es: 'Sección 04' },
    responsible: { en: 'Section 05', es: 'Sección 05' },
    toolkit: { en: 'Section 06', es: 'Sección 06' },
    places: { en: 'Section 07', es: 'Sección 07' },
    interaction: { en: 'Section 08', es: 'Sección 08' },
    sources: { en: 'Section 09', es: 'Sección 09' },
  },
};

export const hero = {
  title: {
    en: 'Discover Lancaster Amish Country',
    es: 'Descubre el País Amish de Lancaster',
  },
  subtitle: {
    en: 'A guide to local culture, travel and responsible tourism',
    es: 'Una guía de cultura local, viajes y turismo responsable',
  },
  photoCredit: {
    en: 'Photo credit: Clinton Weaver / Pexels',
    es: 'Crédito de foto: Clinton Weaver / Pexels',
  },
};

export const metadata = {
  title: {
    en: 'Lancaster Amish — Responsible Tourism Guide',
    es: 'Lancaster Amish — Guía de Turismo Responsable',
  },
  description: {
    en: 'A guide to local culture, travel and responsible tourism in Lancaster County, Pennsylvania.',
    es: 'Una guía de cultura local, viajes y turismo responsable en Lancaster County, Pensilvania.',
  },
};

export const intro = {
  heading: { en: 'Introduction to the Place', es: 'Introducción al lugar' },
  paragraphs: {
    en: [
      'Lancaster County lies in southeastern Pennsylvania. Its county seat, Lancaster City, has museums, restaurants and transport connections; outside the city, farms and small towns shape a working rural landscape. The county is home to one of the oldest and largest Amish settlements in the United States. Amish communities also live across North America, and their population estimates change as communities grow and new settlements form.',
      'Amish history is connected to the European Anabaptist movement of the sixteenth century. In 1693, Jakob Ammann’s followers separated from other Mennonite communities, and Amish families later settled in Pennsylvania. The first substantial Lancaster settlement dates to the early eighteenth century. Amish people are Christians; church membership is generally an adult decision made through baptism. These roots help explain the importance many communities place on faith, mutual responsibility and a life shaped by local congregations.',
      'Daily practices are guided by shared religious commitments and by an Ordnung, the community’s customary expectations for conduct. Each church district sets its own practices, so clothing, worship, work and the use of technology can differ between congregations. It is more accurate to describe technology as used selectively than to say that Amish people reject every modern tool. Some communities limit connections to public power lines or private car ownership, while permitting other tools or energy sources for particular needs.',
      'Language also carries community history. Many Amish households speak Pennsylvania German, often called Pennsylvania Dutch in English. English is learned for school and communication beyond the community, while High German is used in religious reading and worship. The balance among these languages varies by context and community; visitors should use English and follow the lead of the people they meet.',
      'Farming remains important, alongside woodworking, construction, retail and other small businesses. Horse-drawn buggies are a familiar sight on local roads, while residents may use other transport for longer journeys. Lancaster’s fields, villages and city are connected places where Amish and non-Amish neighbours live and work. A visit should support local businesses without treating anyone’s home or daily routine as a display.',
      'Learn from public sources and visitor-facing businesses, respect private property, and ask before photographing identifiable people. Customs are not identical across Amish communities, and no single visitor guide can speak for every family or district. Keeping that diversity in view makes room for curiosity without turning a living religious community into a tourist attraction.',
    ],
    es: [
      'Lancaster County está en el sureste de Pensilvania. Su capital, Lancaster City, cuenta con museos, restaurantes y conexiones de transporte; fuera de la ciudad, las granjas y los pueblos pequeños forman un paisaje rural activo. El condado alberga uno de los asentamientos Amish más antiguos y grandes de Estados Unidos. También existen comunidades Amish en toda Norteamérica, y sus estimaciones de población cambian a medida que crecen y surgen nuevos asentamientos.',
      'La historia Amish está vinculada al movimiento anabaptista europeo del siglo XVI. En 1693, los seguidores de Jakob Ammann se separaron de otras comunidades menonitas, y más adelante algunas familias Amish se establecieron en Pensilvania. El primer asentamiento importante de Lancaster data de principios del siglo XVIII. Los Amish son cristianos; por lo general, la incorporación a la iglesia es una decisión adulta que se formaliza mediante el bautismo. Estos orígenes ayudan a comprender la importancia que muchas comunidades dan a la fe, la responsabilidad mutua y la vida de las congregaciones locales.',
      'Las prácticas cotidianas se orientan por compromisos religiosos compartidos y por la Ordnung, las expectativas consuetudinarias de la comunidad. Cada distrito eclesial establece sus propias prácticas, por lo que la vestimenta, el culto, el trabajo y el uso de tecnología pueden variar entre congregaciones. Es más preciso hablar de un uso selectivo de la tecnología que decir que los Amish rechazan todas las herramientas modernas. Algunas comunidades limitan la conexión a la red eléctrica pública o la propiedad de automóviles, y permiten otras herramientas o fuentes de energía para necesidades concretas.',
      'El idioma también transmite la historia comunitaria. En muchos hogares Amish se habla alemán de Pensilvania, llamado a menudo Pennsylvania Dutch en inglés. El inglés se aprende para la escuela y la comunicación fuera de la comunidad, mientras que el alemán clásico se utiliza en lecturas religiosas y el culto. El equilibrio entre estos idiomas depende del contexto y de cada comunidad; los visitantes pueden comunicarse en inglés y seguir las indicaciones de las personas que conocen.',
      'La agricultura sigue siendo importante, junto con la carpintería, la construcción, el comercio minorista y otros pequeños negocios. Los carruajes tirados por caballos son habituales en las carreteras locales, mientras que los residentes pueden utilizar otros medios para viajes largos. Los campos, pueblos y la ciudad de Lancaster son lugares conectados donde conviven y trabajan vecinos Amish y no Amish. Una visita puede apoyar a los negocios locales sin convertir los hogares ni la vida cotidiana de nadie en una exhibición.',
      'Infórmese con fuentes públicas y negocios abiertos a visitantes, respete la propiedad privada y pida permiso antes de fotografiar a personas identificables. Las costumbres no son iguales en todas las comunidades Amish, y ninguna guía puede representar a cada familia o distrito. Tener presente esa diversidad permite aprender con curiosidad sin convertir a una comunidad religiosa viva en una atracción turística.',
    ],
  } as Record<Lang, string[]>,
  references: [
    { title: { en: 'Amish Studies — Frequently Asked Questions', es: 'Estudios Amish — Preguntas frecuentes' }, org: 'Young Center, Elizabethtown College', url: 'https://groups.etown.edu/amishstudies/frequently-asked-questions/' },
    { title: { en: 'Pennsylvania Amish History & Beliefs', es: 'Historia y creencias Amish de Pensilvania' }, org: 'Discover Lancaster', url: 'https://www.discoverlancaster.com/amish/history-beliefs/' },
    { title: { en: 'Pennsylvania Amish Lifestyle', es: 'Estilo de vida Amish de Pensilvania' }, org: 'Discover Lancaster', url: 'https://www.discoverlancaster.com/amish/lifestyle/' },
    { title: { en: 'Technology — Amish Studies', es: 'Tecnología — Estudios Amish' }, org: 'Young Center, Elizabethtown College', url: 'https://groups.etown.edu/amishstudies/cultural-practices/technology/' },
  ],
  figureCaption: {
    en: 'Farmland in Lancaster County, Pennsylvania.',
    es: 'Tierras de cultivo en Lancaster County, Pensilvania.',
  },
};

export const region = {
  heading: { en: 'Discover the Region', es: 'Descubre la región' },
  lead: {
    en: 'Explore public destinations in Lancaster County through captured Street View panoramas. Select a place below to change the view; no private home or farm is presented as an attraction.',
    es: 'Explora lugares públicos de Lancaster County mediante panorámicas capturadas de Street View. Selecciona un destino para cambiar la vista; ninguna casa ni granja privada se presenta como atracción.',
  },
  points: [
    {
      name: { en: 'Lancaster City', es: 'Lancaster City' },
      location: { en: 'The Amish Village · Ronks, Lancaster County', es: 'The Amish Village · Ronks, Lancaster County' },
      coordinates: '40.0075807,-76.1867228',
      pano: 'fDQM9qi-4nHwYiewKP2wug',
      heading: 60.6343,
      pitch: -4.2549,
      mapsUrl: 'https://www.google.com/maps/@40.0075807,-76.1867228,18z',
      sourceUrl: 'https://lancasterpa.com/things-to-do/amish-attractions/',
      role: {
        en: 'County seat — museums, dining and Amtrak station.',
        es: 'Capital del condado — museos, restaurantes y estación de Amtrak.',
      },
    },
    {
      name: { en: 'Intercourse', es: 'Intercourse' },
      location: { en: 'Kitchen Kettle Village · Intercourse', es: 'Kitchen Kettle Village · Intercourse' },
      coordinates: '40.0398741,-76.1097525',
      pano: 'RtNjIuiJVVH50t2bstiPYw',
      heading: 51.0445,
      pitch: 4.4246,
      mapsUrl: 'https://www.google.com/maps/@40.0398741,-76.1097525,18z',
      sourceUrl: 'https://www.kitchenkettle.com/our-village/contact-us.asp',
      role: {
        en: 'Small village with shops and visitor information.',
        es: 'Pequeño pueblo con tiendas e información para visitantes.',
      },
    },
    {
      name: { en: 'Strasburg', es: 'Strasburg' },
      location: { en: 'Strasburg', es: 'Strasburg' },
      coordinates: '39.9830121,-76.1606952',
      radius: 100,
      heading: 0,
      pitch: 0,
      mapsUrl: 'https://www.google.com/maps/@39.9830121,-76.1606952,18z',
      sourceUrl: 'https://strasburgrailroad.com/',
      role: {
        en: 'Heritage rail line and rural surroundings.',
        es: 'Línea ferroviaria histórica y entorno rural.',
      },
    },
    {
      name: { en: 'Bird-in-Hand', es: 'Bird-in-Hand' },
      location: { en: 'Near 2760 Old Philadelphia Pike · Bird-in-Hand', es: 'Cerca de 2760 Old Philadelphia Pike · Bird-in-Hand' },
      coordinates: '40.0381283,-76.174453',
      pano: 'l-dPhOCGrVlHGrFnPRgg9g',
      heading: 359.4434,
      pitch: -0.8143,
      mapsUrl: 'https://www.google.com/maps/@40.0381283,-76.174453,18z',
      sourceUrl: 'https://bird-in-hand.com/',
      role: {
        en: 'Roadside community with markets and bakeries.',
        es: 'Comunidad a pie de carretera con mercados y panaderías.',
      },
    },
  ],
  streetViewNote: {
    en: 'These are captured Google Street View panoramas, not a live broadcast. If Google shows an access error, enable Maps Embed API and allow this page origin in the key’s HTTP referrer restrictions. Coverage and image dates may change.',
    es: 'Son panorámicas capturadas de Google Street View, no una transmisión en vivo. Si Google muestra un error de acceso, habilita Maps Embed API y permite el origen de esta página en las restricciones de HTTP referrer de la clave. La cobertura y las fechas de las imágenes pueden cambiar.',
  },
};

export const gettingThere = {
  heading: { en: 'Getting There & Moving Around', es: 'Cómo llegar y desplazarse' },
  lead: {
    en: 'Lancaster County is reachable by train, bus and car. Visitors use different ways to travel around the area; horse-drawn buggies are familiar on rural roads, while practices and transport choices vary among Amish communities.',
    es: 'Se puede llegar a Lancaster County en tren, autobús o coche. Los visitantes utilizan distintos medios para recorrer la zona; los carruajes son habituales en las carreteras rurales, aunque las prácticas y los medios varían entre comunidades Amish.',
  },
  trainLink: {
    url: 'https://www.amtrak.com/train-routes',
    label: {
      en: 'Check official routes and schedules',
      es: 'Consultar rutas y horarios oficiales',
    },
  },
  cards: [
    {
      title: { en: 'By Train', es: 'En tren' },
      body: {
        en: 'Amtrak’s Pennsylvanian and Keystone Service connect Lancaster City with Philadelphia, Harrisburg and New York. Check amtrak.com for current schedules.',
        es: 'El Pennsylvanian y el Keystone Service de Amtrak conectan Lancaster City con Filadelfia, Harrisburg y Nueva York. Consulte amtrak.com para los horarios actuales.',
      },
    },
    {
      title: { en: 'By Bus', es: 'En autobús' },
      body: {
        en: 'Check current intercity services and connections before travelling. Transit coverage can be limited in rural areas, so plan the last leg of your trip in advance.',
        es: 'Consulte los servicios interurbanos y las conexiones vigentes antes de viajar. El transporte puede ser limitado en zonas rurales; planifique con antelación el último tramo.',
      },
    },
    {
      title: { en: 'By Car', es: 'En coche' },
      body: {
        en: 'Use an up-to-date official map for your route. Rural roads are shared with horse-drawn buggies and other road users — slow down and leave room.',
        es: 'Use un mapa oficial actualizado para planificar la ruta. En las carreteras rurales circulan carruajes y otros usuarios: reduzca la velocidad y deje espacio.',
      },
    },
    {
      title: { en: 'Local Mobility', es: 'Movilidad local' },
      body: {
        en: 'Walking and cycling suit the flat countryside between villages. There is no public transit into most rural lanes, so plan a base in town.',
        es: 'Caminar e ir en bicicleta son adecuados para el campo llano entre pueblos. No hay transporte público hacia la mayoría de los caminos rurales, por lo que conviene tener una base en el pueblo.',
      },
    },
  ],
  directionsHeading: { en: 'Asking for and giving directions', es: 'Pedir y dar indicaciones' },
  directions: [
    { en: 'Excuse me, how can I get to Lancaster Station?', es: 'Disculpe, ¿cómo llego a la estación de Lancaster?' },
    { en: 'Follow the signs toward the town center.', es: 'Siga las señales hacia el centro del pueblo.' },
    { en: 'Go north along Route 222, then turn left at the second light.', es: 'Vaya al norte por la Route 222 y luego gire a la izquierda en el segundo semáforo.' },
    { en: 'The market is next to the square, near the visitor center.', es: 'El mercado está junto a la plaza, cerca del centro de visitantes.' },
  ],
  safetyHeading: { en: 'Road safety reminders', es: 'Recordatorios de seguridad vial' },
  safety: [
    { en: 'You should slow down when approaching a buggy.', es: 'Debería reducir la velocidad al acercarse a un carruaje.' },
    { en: 'You shouldn’t pass a buggy on a blind curve.', es: 'No debería adelantar a un carruaje en una curva ciega.' },
    { en: 'You should leave plenty of room when passing.', es: 'Debería dejar bastante espacio al adelantar.' },
    { en: 'You shouldn’t honk near horses — it can startle them.', es: 'No debería tocar el claxon cerca de los caballos: puede asustarlos.' },
  ],
};

export const videoSection = {
  heading: { en: 'Watch the Educational Video', es: 'Vea el video educativo' },
  title: {
    en: 'Getting to Lancaster County and Exploring Amish Country Responsibly',
    es: 'Cómo llegar a Lancaster County y explorar el País Amish con responsabilidad',
  },
  durationNote: {
    en: 'Approx. 4 minutes — English narration with English captions and transcript.',
    es: 'Aprox. 4 minutos — narración en inglés con subtítulos y transcripción en inglés.',
  },
  placeholderNote: {
    en: 'The video could not be displayed. You can still read its transcript below.',
    es: 'No se pudo mostrar el video. Aun así, puede leer la transcripción a continuación.',
  },
  unsupported: {
    en: 'Your browser cannot play this video. Read the transcript below instead.',
    es: 'Su navegador no puede reproducir este video. Puede leer la transcripción a continuación.',
  },
  playbackError: {
    en: 'The video could not be loaded. Read the transcript below instead.',
    es: 'No se pudo cargar el video. Puede leer la transcripción a continuación.',
  },
  transcriptLabel: { en: 'Video transcript and notes', es: 'Transcripción y notas del video' },
  showTranscript: { en: 'Show transcript', es: 'Mostrar transcripción' },
  hideTranscript: { en: 'Hide transcript', es: 'Ocultar transcripción' },
  minutes: [
    {
      label: { en: 'Minute 1 — Getting to Lancaster County', es: 'Minuto 1 — Cómo llegar a Lancaster County' },
      text: {
        en: 'Welcome to Lancaster County in southeastern Pennsylvania, a region of farms, small towns and Lancaster City. Plan your journey using current information from the transport operator: Amtrak serves Lancaster, while intercity bus options may connect through regional hubs. Routes and schedules change, so check them before leaving. If you travel by car, choose a public visitor destination and follow its published directions rather than entering private lanes. In the countryside, roads are shared by cars and horse-drawn buggies. Leave extra time, stay alert and remember that this is a living community, not a set built for visitors. Lancaster City is the county seat and a useful starting point for public visitor information. Use official sources to check current connections and opening hours before you set out.',
        es: 'Bienvenidos a Lancaster County, en el sureste de Pensilvania: una región de granjas, pueblos pequeños y Lancaster City. Planifique el viaje con información vigente de los operadores: Amtrak llega a Lancaster y algunas opciones de autobús interurbano pueden conectar a través de centros regionales. Las rutas y los horarios cambian; consúltelos antes de salir. Si viaja en automóvil, elija un destino público para visitantes y siga las indicaciones publicadas, sin entrar en caminos privados. En el campo, los automóviles comparten la vía con carruajes tirados por caballos. Reserve tiempo adicional, manténgase alerta y recuerde que esta es una comunidad viva, no un escenario turístico. Lancaster City es la capital del condado y un punto de partida útil para buscar información pública. Consulte fuentes oficiales para confirmar conexiones y horarios de atención.',
      },
      subtitle: {
        en: 'Plan with current operator information. Rural roads are shared with buggies; allow extra time and respect private roads.',
        es: 'Planifique con información vigente de los operadores. En las carreteras rurales hay carruajes; reserve tiempo y respete los caminos privados.',
      },
      visual: {
        en: 'Use a wide landscape view, then a clearly labeled map moving from Lancaster City toward the county. Show public transport icons without suggesting unverified routes or schedules.',
        es: 'Muestre primero un paisaje amplio y luego un mapa rotulado desde Lancaster City hacia el condado. Use iconos de transporte público sin sugerir rutas u horarios no verificados.',
      },
      audio: { en: 'Quiet acoustic music with restrained countryside ambience.', es: 'Música acústica suave con ambiente rural discreto.' },
      references: [
        { title: 'Amtrak — Train routes', url: 'https://www.amtrak.com/train-routes' },
        { title: 'Discover Lancaster — History & Beliefs', url: 'https://www.discoverlancaster.com/amish/history-beliefs/' },
      ],
    },
    {
      label: { en: 'Minute 2 — Moving Around: City vs. Countryside', es: 'Minuto 2 — Desplazarse: ciudad frente a campo' },
      text: {
        en: 'Before exploring rural towns, plan how you will travel between them. Public transit is limited in some rural areas, so check local services and distances in advance. Horse-drawn buggies are a familiar form of local transport for some Old Order Amish communities in Lancaster County. People may use other transport for longer journeys, including rides with non-Amish drivers; practices differ by community and individual. Visitors can walk, cycle or drive where access and road conditions allow, following signs and local rules. Do not assume that one route, vehicle or custom represents every Amish family. Keep private homes and farms private, and use public roads and visitor destinations to explore the region.',
        es: 'Antes de recorrer los pueblos rurales, planifique cómo se desplazará entre ellos. El transporte público es limitado en algunas zonas; revise los servicios y las distancias con antelación. En Lancaster County, los carruajes son un medio de transporte local conocido en algunas comunidades Amish de la Vieja Orden. Para viajes largos, las personas pueden recurrir a otros medios, incluidos conductores no Amish; las prácticas varían según la comunidad y cada persona. Los visitantes pueden caminar, ir en bicicleta o conducir cuando el acceso y las condiciones lo permitan, respetando las señales y normas locales. No suponga que una ruta, vehículo o costumbre representa a todas las familias Amish. Mantenga la privacidad de hogares y granjas, y recorra la región por vías públicas y destinos abiertos a visitantes.',
      },
      subtitle: {
        en: 'Plan rural connections ahead. Buggies are used in some Old Order communities; practices and transport choices vary.',
        es: 'Planifique las conexiones rurales. Algunas comunidades de la Vieja Orden usan carruajes; las prácticas y los transportes varían.',
      },
      visual: {
        en: 'Contrast public streets in Lancaster City with a rural road. If showing a buggy or people, use public, non-identifying footage and avoid implying that one scene represents everyone.',
        es: 'Contraste calles públicas de Lancaster City con una carretera rural. Si aparecen carruajes o personas, use imágenes públicas sin identificar a nadie y no sugiera que una escena representa a todos.',
      },
      audio: { en: 'Light road ambience; avoid exaggerated hoof or buggy effects.', es: 'Ambiente vial ligero; evite efectos exagerados de cascos o carruajes.' },
      references: [
        { title: 'Amish Studies — Frequently Asked Questions', url: 'https://groups.etown.edu/amishstudies/frequently-asked-questions/' },
        { title: 'Pennsylvania Amish Lifestyle', url: 'https://www.discoverlancaster.com/amish/lifestyle/' },
      ],
    },
    {
      label: { en: 'Minute 3 — Road Safety and Buggy Etiquette', es: 'Minuto 3 — Seguridad vial y etiqueta con carruajes' },
      text: {
        en: 'Rural roads can be narrow and visibility may change quickly. When you approach a buggy, reduce speed and leave enough room. Never pass where your view is blocked by a hill, bend or traffic; wait until the road ahead is clearly visible and the maneuver is legal. Avoid sudden or unnecessary horn use close to horses, and obey road signs at every intersection. Watch for people walking or cycling at the roadside, too. A patient driver gives slower road users time and space. If you are unsure whether it is safe to pass, stay behind and wait. These habits support safer journeys for residents and visitors sharing the same roads.',
        es: 'Las carreteras rurales pueden ser estrechas y la visibilidad puede cambiar rápidamente. Al acercarse a un carruaje, reduzca la velocidad y deje suficiente espacio. Nunca adelante si una colina, curva o el tráfico bloquean la vista; espere hasta ver claramente la vía y confirme que la maniobra sea legal. Evite usar la bocina de forma repentina o innecesaria cerca de los caballos y obedezca las señales en cada cruce. También preste atención a quienes caminan o circulan en bicicleta junto a la carretera. Un conductor paciente da tiempo y espacio a quienes avanzan más despacio. Si no sabe si es seguro adelantar, manténgase detrás y espere. Estos hábitos ayudan a que residentes y visitantes compartan las vías con mayor seguridad.',
      },
      subtitle: {
        en: 'Slow down, leave room and wait for a clear view before passing. Avoid sudden horn use near horses and obey road signs.',
        es: 'Reduzca la velocidad, deje espacio y espere a tener visibilidad antes de adelantar. Evite bocinazos cerca de caballos y respete las señales.',
      },
      visual: {
        en: 'Use a simple top-down road diagram showing safe following distance and clear visibility before passing. Do not depict a specific legal distance unless verified.',
        es: 'Use un diagrama sencillo desde arriba que muestre distancia de seguimiento y visibilidad antes de adelantar. No indique distancias legales específicas sin verificarlas.',
      },
      audio: { en: 'Lower the engine sound as the vehicle slows; keep the mix calm and non-alarmist.', es: 'Reduzca el sonido del motor al bajar la velocidad; mantenga una mezcla tranquila y sin alarmismo.' },
      references: [
        { title: 'Pennsylvania Amish History & Beliefs', url: 'https://www.discoverlancaster.com/amish/history-beliefs/' },
        { title: 'Pennsylvania Amish Lifestyle', url: 'https://www.discoverlancaster.com/amish/lifestyle/' },
      ],
    },
    {
      label: { en: 'Minute 4 — Responsible Behavior and Cultural Respect', es: 'Minuto 4 — Comportamiento responsable y respeto cultural' },
      text: {
        en: 'A responsible visit begins with respect for privacy. Ask before taking an identifiable photograph, honor a request not to be photographed and never enter private property without permission. Business hours vary, so check directly before you travel. When a farm stand or shop is open to visitors, consider buying directly from the business. Use public spaces for photographs and learning, and avoid staging or approaching people as if they were part of a display. Lancaster County is home to diverse communities, not one set of customs. Listen, follow local guidance and leave residents in control of how they take part in public life.',
        es: 'Una visita responsable empieza por respetar la privacidad. Pida permiso antes de tomar una fotografía que identifique a alguien, respete cualquier negativa y nunca entre en una propiedad privada sin autorización. Los horarios de los negocios varían; confirme directamente antes de viajar. Si un puesto agrícola o una tienda recibe visitantes, considere comprar directamente allí. Use espacios públicos para fotografiar y aprender, sin preparar escenas ni acercarse a las personas como si fueran parte de una exhibición. Lancaster County alberga comunidades diversas, no una sola costumbre. Escuche, siga las indicaciones locales y permita que cada residente decida cómo participar en la vida pública.',
      },
      subtitle: {
        en: 'Ask before photographing people. Respect private property, check business hours and support local businesses on their terms.',
        es: 'Pida permiso antes de fotografiar personas. Respete la propiedad privada, confirme horarios y apoye a los negocios según sus condiciones.',
      },
      visual: {
        en: 'Show public landscapes, a covered bridge or produce at a visitor-facing stand, with no identifiable people. Avoid “no faces” slogans that stereotype a whole community.',
        es: 'Muestre paisajes públicos, un puente cubierto o productos en un puesto abierto a visitantes, sin personas identificables. Evite consignas sobre rostros que estereotipen a toda una comunidad.',
      },
      audio: { en: 'Close with warm, quiet acoustic music and natural ambience.', es: 'Cierre con música acústica cálida y suave y sonidos ambientales naturales.' },
      references: [
        { title: 'Pennsylvania Amish Lifestyle', url: 'https://www.discoverlancaster.com/amish/lifestyle/' },
        { title: 'Amish Studies — Frequently Asked Questions', url: 'https://groups.etown.edu/amishstudies/frequently-asked-questions/' },
      ],
    },
  ],
};

export const responsible = {
  heading: { en: 'Travel Responsibly', es: 'Viaje de forma responsable' },
  lead: {
    en: 'A few clear habits help ensure your visit respects the people who live here. The Amish are a diverse, living community — not every family or district follows the same practices.',
    es: 'Algunos hábitos claros ayudan a que su visita respete a quienes viven aquí. Los Amish son una comunidad viva y diversa: no todas las familias ni distritos siguen las mismas prácticas.',
  },
  tips: [
    { en: 'Respect local privacy.', es: 'Respete la privacidad local.' },
    { en: 'Avoid photographing identifiable people without permission.', es: 'Evite fotografiar a personas identificables sin permiso.' },
    { en: 'Do not enter private property without authorization.', es: 'No entre en propiedades privadas sin autorización.' },
    { en: 'Drive carefully around horse-drawn buggies.', es: 'Conduzca con cuidado cerca de los carruajes.' },
    { en: 'Respect local customs and religious practices.', es: 'Respete las costumbres y prácticas religiosas locales.' },
    { en: 'Check opening hours before visiting local businesses.', es: 'Compruebe los horarios antes de visitar comercios locales.' },
    { en: 'Support local businesses through responsible purchases.', es: 'Apoye los comercios locales con compras responsables.' },
  ],
};

export type PodcastSpeaker = 'host' | 'guide' | 'both';

export interface PodcastTurn {
  speaker: PodcastSpeaker;
  text: string;
}

export const toolkit = {
  heading: { en: 'English Travel Toolkit', es: 'Kit de inglés para viajar' },
  series: { en: 'English Travel Toolkit – Podcast', es: 'English Travel Toolkit – Podcast' },
  episodeTitle: { en: 'How to Travel Around Lancaster County', es: 'How to Travel Around Lancaster County' },
  episodeDescription: {
    en: 'A host and a travel guide talk through the practical basics of getting around Lancaster County: where to start, how to ask for directions, and how to share the road safely with horse-drawn buggies.',
    es: 'Un presentador y un guía de viaje repasan lo básico para desplazarse por Lancaster County: por dónde empezar, cómo pedir indicaciones y cómo compartir la carretera con seguridad con los carruajes tirados por caballos.',
  },
  audioNote: {
    en: 'The episode is in English. Audio and transcript stay in English in both languages.',
    es: 'El episodio está en inglés. El audio y la transcripción permanecen en inglés en ambos idiomas.',
  },
  speakers: {
    host: { en: 'Speaker 1 – Host', es: 'Speaker 1 – Presentador' },
    guide: { en: 'Speaker 2 – Travel Guide', es: 'Speaker 2 – Guía de viaje' },
    both: { en: 'Both', es: 'Ambos' },
  },
  player: {
    play: { en: 'Play episode', es: 'Reproducir episodio' },
    pause: { en: 'Pause episode', es: 'Pausar episodio' },
    seek: { en: 'Seek position', es: 'Posición de reproducción' },
    volume: { en: 'Volume', es: 'Volumen' },
    mute: { en: 'Mute', es: 'Silenciar' },
    unmute: { en: 'Unmute', es: 'Activar sonido' },
    unsupported: { en: 'Your browser does not support the audio element.', es: 'Su navegador no admite el elemento de audio.' },
    error: {
      en: 'The episode audio could not be loaded. Please try again later.',
      es: 'No se pudo cargar el audio del episodio. Inténtelo de nuevo más tarde.',
    },
  },
  transcriptHeading: { en: 'Follow the Conversation', es: 'Sigue la conversación' },
  transcriptLead: {
    en: 'Read along with the full episode. The transcript does not follow playback time.',
    es: 'Siga el episodio completo. La transcripción no se sincroniza con el tiempo de reproducción.',
  },
  showTranscript: { en: 'Show transcript', es: 'Mostrar transcripción' },
  hideTranscript: { en: 'Hide transcript', es: 'Ocultar transcripción' },
  glossaryHeading: { en: 'Cultural vocabulary', es: 'Vocabulario cultural' },
  glossaryLead: {
    en: 'Terms used in the guide. Meanings and practices can vary by community.',
    es: 'Términos utilizados en la guía. Los significados y las prácticas pueden variar según la comunidad.',
  },
  glossary: [
    {
      term: 'Church district',
      translation: { en: 'Local congregation', es: 'Distrito eclesial / congregación local' },
      meaning: { en: 'A local group of households that worship and make community decisions together.', es: 'Grupo local de hogares que comparte el culto y toma decisiones comunitarias.' },
    },
    {
      term: 'Ordnung',
      translation: { en: 'Customary community guidelines', es: 'Normas consuetudinarias de la comunidad' },
      meaning: { en: 'Shared expectations for conduct and daily practice; details differ between districts.', es: 'Expectativas compartidas sobre conducta y vida diaria; los detalles varían entre distritos.' },
    },
    {
      term: 'Pennsylvania Dutch',
      translation: { en: 'Pennsylvania German', es: 'Alemán de Pensilvania' },
      meaning: { en: 'A German dialect spoken at home by many Amish families.', es: 'Dialecto alemán que muchas familias Amish hablan en el hogar.' },
    },
    {
      term: 'High German',
      translation: { en: 'Standard German', es: 'Alemán estándar' },
      meaning: { en: 'Used in some religious reading and worship contexts.', es: 'Se utiliza en algunos contextos de lectura religiosa y culto.' },
    },
    {
      term: 'Rumspringa',
      translation: { en: 'Youth socializing period', es: 'Periodo de socialización juvenil' },
      meaning: { en: 'A term associated with youth before adult baptism; experiences are not uniform.', es: 'Término asociado a la juventud antes del bautismo adulto; las experiencias no son uniformes.' },
    },
    {
      term: 'Horse-drawn buggy',
      translation: { en: 'Horse-drawn carriage', es: 'Carruaje tirado por caballos' },
      meaning: { en: 'A familiar form of local transport on Lancaster County roads.', es: 'Medio de transporte habitual en carreteras de Lancaster County.' },
    },
    {
      term: 'Roadside stand',
      translation: { en: 'Farm stand', es: 'Puesto agrícola al borde de la carretera' },
      meaning: { en: 'A small local business selling farm products or crafts directly to visitors.', es: 'Pequeño negocio local que vende productos agrícolas o artesanías directamente a visitantes.' },
    },
  ],
  glossaryReferences: [
    { title: { en: 'Amish Studies — Frequently Asked Questions', es: 'Amish Studies — Preguntas frecuentes' }, url: 'https://groups.etown.edu/amishstudies/frequently-asked-questions/' },
    { title: { en: 'Technology — Amish Studies', es: 'Tecnología — Amish Studies' }, url: 'https://groups.etown.edu/amishstudies/cultural-practices/technology/' },
    { title: { en: 'Pennsylvania Amish Lifestyle', es: 'Estilo de vida amish en Pensilvania' }, url: 'https://www.discoverlancaster.com/amish/lifestyle/' },
  ],
  // Source: approved podcast script (verbatim). Do not add timestamps or edit the dialogue.
  transcript: [
    { speaker: 'host', text: 'Hello, everyone! Welcome to our travel podcast. Today, we are talking about how to visit Lancaster County and explore Amish Country.' },
    { speaker: 'guide', text: "That's right! Lancaster is a beautiful county in Pennsylvania. There are many interesting places to visit." },
    { speaker: 'host', text: 'Great! First, how can I get to Lancaster from Philadelphia?' },
    { speaker: 'guide', text: "Well, first, take the Keystone Service train to Lancaster Station. Then, follow the signs toward the town center. It's near the square, next to the visitor center." },
    { speaker: 'host', text: 'And how can I explore the countryside?' },
    { speaker: 'guide', text: 'You can rent a bicycle. After that, ride toward Intercourse and enjoy the rural roads. Finally, return before sunset.' },
    { speaker: 'host', text: 'That sounds interesting! What should I know before visiting Amish communities?' },
    { speaker: 'guide', text: 'You should respect their traditions and private property. Also, keep a safe distance from horse-drawn buggies. Slow down when approaching a buggy.' },
    { speaker: 'host', text: "That's good advice! Where are the Amish communities located?" },
    { speaker: 'guide', text: 'Lancaster is west of Philadelphia. You can go north along Route 222 or drive toward Strasburg. You can also see farms and barns next to the roads.' },
    { speaker: 'host', text: 'Have you ever visited Lancaster County?' },
    { speaker: 'guide', text: 'Yes! I visited last year. I was riding my bicycle when I saw an Amish family traveling in a horse-drawn buggy.' },
    { speaker: 'host', text: 'Really? What were you doing when you saw them?' },
    { speaker: 'guide', text: 'I was exploring the countryside and taking pictures of the landscape. It was a beautiful experience!' },
    { speaker: 'host', text: 'Amazing! Do you have any final recommendations for travelers?' },
    { speaker: 'guide', text: "Yes! Visitors should check transportation schedules before traveling. You shouldn't enter private property without permission. And remember to drive carefully." },
    { speaker: 'host', text: 'Excellent! So, remember: first, plan your route; then, explore the countryside; and finally, enjoy your visit respectfully.' },
    { speaker: 'guide', text: "That's all for today's Travel Toolkit podcast. Thank you for listening!" },
    { speaker: 'both', text: 'See you next time!' },
  ] as PodcastTurn[],
};

export const sources = {
  heading: { en: 'Sources & Credits', es: 'Fuentes y créditos' },
  lead: {
    en: 'Information and media used in this guide, with direct links. Transport details should be re-verified on official sites before travelling.',
    es: 'Información y recursos utilizados en esta guía, con enlaces directos. Los datos de transporte deben verificarse de nuevo en sitios oficiales antes de viajar.',
  },
  list: [
    {
      title: 'Amish Studies',
      org: 'Young Center for Anabaptist and Pietist Studies, Elizabethtown College',
      url: 'https://groups.etown.edu/amishstudies/',
      note: { en: 'Academic research and population estimates; demographic figures change over time.', es: 'Investigación académica y estimaciones de población; las cifras demográficas cambian con el tiempo.' },
    },
    {
      title: 'Frequently Asked Questions — Amish Studies',
      org: 'Young Center, Elizabethtown College',
      url: 'https://groups.etown.edu/amishstudies/frequently-asked-questions/',
      note: { en: 'Background on history, community life, language and practices.', es: 'Información sobre historia, vida comunitaria, idiomas y prácticas.' },
    },
    {
      title: 'Technology — Amish Studies',
      org: 'Young Center, Elizabethtown College',
      url: 'https://groups.etown.edu/amishstudies/cultural-practices/technology/',
      note: { en: 'Explains selective technology practices; choices vary among communities.', es: 'Explica el uso selectivo de tecnología; las decisiones varían entre comunidades.' },
    },
    {
      title: 'Discover Lancaster',
      org: 'Lancaster County tourism office',
      url: 'https://www.discoverlancaster.com/',
      note: { en: 'Official visitor information for Lancaster County.', es: 'Información oficial para visitantes de Lancaster County.' },
    },
    {
      title: 'Pennsylvania Amish History & Beliefs',
      org: 'Discover Lancaster',
      url: 'https://www.discoverlancaster.com/amish/history-beliefs/',
      note: { en: 'Regional history and introductory cultural information.', es: 'Historia regional e información cultural introductoria.' },
    },
    {
      title: 'Pennsylvania Amish Lifestyle',
      org: 'Discover Lancaster',
      url: 'https://www.discoverlancaster.com/amish/lifestyle/',
      note: { en: 'Visitor guidance and cultural context; local practices can differ.', es: 'Orientación para visitantes y contexto cultural; las prácticas locales pueden variar.' },
    },
    {
      title: 'Amtrak — Train routes',
      org: 'Amtrak',
      url: 'https://www.amtrak.com/train-routes',
      note: {
        en: 'Official route finder includes Keystone Service and Pennsylvanian stops in Lancaster. Confirm current schedules before travel.',
        es: 'El buscador oficial incluye paradas del Keystone Service y el Pennsylvanian en Lancaster. Confirme los horarios vigentes antes de viajar.',
      },
    },
    {
      title: 'Google Maps Street View',
      org: 'Google Maps Platform',
      url: 'https://developers.google.com/maps/documentation/embed/embedding-map',
      note: {
        en: 'Documentation for the embedded panorama viewer. Imagery is captured, may change, and depends on coverage near each public location.',
        es: 'Documentación del visor panorámico incrustado. Las imágenes son capturadas, pueden cambiar y dependen de la cobertura cercana a cada lugar público.',
      },
    },
    {
      title: 'Pexels',
      org: 'Pexels',
      url: 'https://www.pexels.com/',
      note: {
        en: 'Pexels publishes a general license for website use; image-specific permissions and third-party rights are not independently verified here.',
        es: 'Pexels publica una licencia general para uso en sitios web; aquí no se verifican de forma independiente los permisos de cada imagen ni derechos de terceros.',
      },
    },
    {
      title: 'Wisconsin v. Yoder, 406 U.S. 205 (1972)',
      org: 'Legal Information Institute, Cornell Law School',
      url: 'https://www.law.cornell.edu/supremecourt/text/406/205',
      note: { en: 'Full text of the U.S. Supreme Court decision on compulsory schooling for Amish parents.', es: 'Texto completo de la decisión de la Corte Suprema de EE. UU. sobre la escolarización obligatoria de familias amish.' },
    },
    {
      title: 'Discover Lancaster – Amish Tour',
      org: 'Discover Lancaster',
      url: 'https://www.discoverlancaster.com/groups/itineraries/amish-tour/',
      note: { en: 'Original tourism itinerary analysed in Section 08.', es: 'Itinerario turístico original analizado en la Sección 08.' },
    },
    {
      title: 'Amish Farm and House – Plan Your Visit',
      org: 'Amish Farm and House',
      url: 'https://amishfarmandhouse.com/plan-your-visit/',
      note: { en: 'Official visitor information cited in Section 07.', es: 'Información oficial para visitantes citada en la Sección 07.' },
    },
    {
      title: 'Amish Farm and House – House Tour',
      org: 'Amish Farm and House',
      url: 'https://amishfarmandhouse.com/tours/house-tour/',
      note: { en: 'Official page for the house tour cited in Section 07.', es: 'Página oficial de la visita a la casa citada en la Sección 07.' },
    },
    {
      title: 'Discover Lancaster – Farmers Markets',
      org: 'Discover Lancaster',
      url: 'https://www.discoverlancaster.com/things-to-do/shopping/farmers-markets/',
      note: { en: 'Official information on farmers\x27 markets cited in Section 07.', es: 'Información oficial sobre mercados de agricultores citada en la Sección 07.' },
    },
    {
      title: 'Discover Lancaster – Amish Countryside',
      org: 'Discover Lancaster',
      url: 'https://www.discoverlancaster.com/regions-towns/amish-countryside/',
      note: { en: 'Official overview of the Amish countryside cited in Section 07.', es: 'Descripción oficial de la campiña amish citada en la Sección 07.' },
    },
  ],
  consultedOn: { en: 'Check current details with each source before relying on information that may change over time.', es: 'Consulte cada fuente para confirmar los datos que puedan cambiar con el tiempo.' },
};

export const footer = {
  note: {
    en: 'An educational guide. Transport schedules, routes and fares may change — always verify with official operators before travelling.',
    es: 'Una guía educativa. Los horarios, las rutas y las tarifas de transporte pueden cambiar — verifíquelos siempre con los operadores oficiales antes de viajar.',
  },
  project: { en: 'Lancaster Amish — Responsible Tourism Guide', es: 'Lancaster Amish — Guía de Turismo Responsable' },
  sections: { en: 'Sections', es: 'Secciones' },
  credits: { en: 'Sources & Credits', es: 'Fuentes y créditos' },
  copyright: {
    en: 'Educational project.',
    es: 'Proyecto educativo.',
  },
};

export const photoCredits: { url: string; alt: Record<Lang, string>; photographer: string }[] = [
  {
    url: 'https://images.pexels.com/photos/37410126/pexels-photo-37410126.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    alt: { en: 'Pennsylvania farmland beneath a clear blue sky.', es: 'Tierras agrícolas de Pensilvania bajo un cielo azul despejado.' },
    photographer: 'Clinton Weaver',
  },
  {
    url: 'https://images.pexels.com/photos/34627886/pexels-photo-34627886.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    alt: { en: 'Pennsylvania farm with red barns and autumn foliage.', es: 'Granja de Pensilvania con graneros rojos y follaje otoñal.' },
    photographer: 'Phil Evenden',
  },
  {
    url: 'https://images.pexels.com/photos/32678634/pexels-photo-32678634.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    alt: { en: 'Horse-drawn buggy on a rural road in Lancaster County.', es: 'Carruaje tirado por caballos en una carretera rural de Lancaster County.' },
    photographer: 'Phyllis Lilienthal',
  },
  {
    url: 'https://images.pexels.com/photos/34690876/pexels-photo-34690876.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    alt: { en: 'Covered bridge reflected in a creek in autumn.', es: 'Puente cubierto reflejado en un arroyo durante el otoño.' },
    photographer: 'Phil Evenden',
  },
  {
    url: 'https://images.pexels.com/photos/33777986/pexels-photo-33777986.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    alt: { en: 'Two red barns among rolling green hills under a blue sky.', es: 'Dos graneros rojos entre colinas verdes bajo un cielo azul.' },
    photographer: 'Mark Stebnicki',
  },
  {
    url: 'https://images.pexels.com/photos/462038/pexels-photo-462038.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    alt: { en: 'Golden fields and farm buildings at sunset.', es: 'Campos dorados y edificios agrícolas al atardecer.' },
    photographer: 'Pixabay',
  },
  {
    url: 'https://images.pexels.com/photos/5275507/pexels-photo-5275507.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    alt: { en: 'Yellow road sign showing a horse-drawn carriage.', es: 'Señal amarilla que muestra un carruaje tirado por caballos.' },
    photographer: 'Aaron J Hill',
  },
];

// Submission 2. Interface labels are bilingual. Academic text, dialogue, source names and the
// original tourism excerpt stay in English in both languages, exactly as supplied.

export type TopicBlock =
  | { kind: 'text'; paragraphs: string[] }
  | { kind: 'list'; items: string[] }
  | { kind: 'places'; items: { name: string; location?: string; note: string; url: string }[] }
  | { kind: 'activities'; items: { title: string; learn: string; url?: string }[] };

export const newSections = {
  pendingLabel: { en: 'Pending approved content', es: 'Contenido aprobado pendiente' },
  places: {
    heading: { en: 'Places of Interest', es: 'Lugares de interés' },
    subtitle: { en: 'Stories & Recommendations', es: 'Historias y recomendaciones' },
    lead: {
      en: 'The history of Amish communities in Lancaster County, the difficulties they have faced, and the places, activities, products and recommendations that connect visitors with that history.',
      es: 'La historia de las comunidades amish en el condado de Lancaster, las dificultades que han enfrentado y los lugares, actividades, productos y recomendaciones que conectan a los visitantes con esa historia.',
    },
    topicsHint: {
      en: 'Select a topic to read it. You can open several topics at once.',
      es: 'Seleccione un tema para leerlo. Puede abrir varios temas a la vez.',
    },
    visitLinkLabel: { en: 'Official website', es: 'Sitio oficial' },
    infoLinkLabel: { en: 'Official information', es: 'Información oficial' },
    homesNote: {
      en: 'Educational attractions and shops listed here are open to visitors. Private Amish homes and farms are not attractions: do not enter private property or assume that it is open to visitors.',
      es: 'Los atractivos educativos y las tiendas que aparecen aquí están abiertos a visitantes. Las casas y granjas amish privadas no son atractivos: no entre en propiedad privada ni suponga que está abierta a visitantes.',
    },
    topics: [
      {
        id: 'history',
        title: { en: 'Amish history in Lancaster County', es: 'Historia amish en el condado de Lancaster' },
        blocks: [
          {
            kind: 'text',
            paragraphs: [
              'The Amish are part of the Anabaptist Christian tradition. Their origins are connected to the Anabaptist movement in sixteenth-century Europe. Amish communities developed as a distinct religious group under the leadership of Jakob Ammann in the late seventeenth century.',
              'Amish families migrated to Pennsylvania during the eighteenth century, attracted by William Penn\'s policy of religious tolerance.',
              'Lancaster County became one of the oldest and most recognized Amish settlements in North America.',
              'Their religious identity emphasizes community, humility, family, mutual assistance, and separation from aspects of mainstream society.',
              'Amish communities are not homogeneous. Different church districts have different practices and rules.',
            ],
          },
        ],
      },
      {
        id: 'discrimination',
        title: { en: 'Discrimination, exclusion and community response', es: 'Discriminación, exclusión y respuesta comunitaria' },
        blocks: [
          {
            kind: 'list',
            items: [
              'Religious persecution in Europe: the Amish trace their origins to the Anabaptist movement, whose members faced religious persecution in sixteenth-century Europe. Sources in the list below give the historical detail; this guide does not extend specific episodes to the Amish without evidence.',
              'Migration to Pennsylvania in search of religious freedom: Amish families came to Pennsylvania in the eighteenth century, attracted by William Penn\'s policy of religious tolerance.',
              'Conflicts with public education requirements: in the twentieth century, compulsory schooling rules conflicted with Amish beliefs about separation from worldly influences and with their system of community-based vocational education.',
              'The importance of religious freedom and community autonomy: the right to live by the community\'s religious rules is central to Amish identity and to the community\'s response to these conflicts.',
            ],
          },
          {
            kind: 'text',
            paragraphs: [
              'Wisconsin v. Yoder (1972). Amish parents challenged compulsory high-school attendance because they believed it conflicted with their religious way of life and their system of community-based vocational education. The United States Supreme Court ruled in favor of the Amish parents under the circumstances of that case.',
              'The decision matters for religious freedom in the United States. It did not eliminate every conflict between Amish communities and wider society, and Amish communities continue to negotiate with public institutions.',
            ],
          },
        ],
      },
      {
        id: 'places',
        title: { en: 'Places of historical and cultural importance', es: 'Lugares de importancia histórica y cultural' },
        blocks: [
          {
            kind: 'places',
            items: [
              {
                name: 'Amish Farm and House',
                location: '2395 Covered Bridge Drive, Lancaster, PA 17602',
                note: 'Educational attraction presenting Amish history and aspects of daily life. Guided farmhouse and farm experiences.',
                url: 'https://amishfarmandhouse.com/',
              },
              {
                name: 'The Amish Experience',
                location: 'Bird-in-Hand',
                note: 'Educational experiences about Amish history and culture.',
                url: 'https://www.amishexperience.com/',
              },
              {
                name: 'Kitchen Kettle Village',
                location: 'Intercourse, Pennsylvania',
                note: 'Local shops, food products, crafts and activities.',
                url: 'https://www.kitchenkettlevillage.com/',
              },
              {
                name: 'Bird-in-Hand Farmers Market',
                note: 'Local vendors, baked goods, produce, crafts and regional products.',
                url: 'https://www.discoverlancaster.com/things-to-do/shopping/farmers-markets/',
              },
            ],
          },
        ],
      },
      {
        id: 'activities',
        title: { en: 'Activities for visitors', es: 'Actividades para visitantes' },
        blocks: [
          {
            kind: 'activities',
            items: [
              {
                title: 'Guided countryside tours',
                learn: 'Learn about farms, rural roads and the landscape from a guide who explains the local context.',
                url: 'https://www.discoverlancaster.com/regions-towns/amish-countryside/',
              },
              {
                title: 'Authorized horse-and-buggy rides',
                learn: 'Experience travel by horse-drawn buggy with an authorized operator and see how buggies are used for local transport.',
                url: 'https://www.discoverlancaster.com/groups/itineraries/amish-tour/',
              },
              {
                title: 'Educational farmhouse tours',
                learn: 'Learn about daily life, family and farm work in an organized educational setting.',
                url: 'https://amishfarmandhouse.com/plan-your-visit/',
              },
              {
                title: 'Visiting farmers\' markets',
                learn: 'See local produce, baked goods and crafts sold directly by local vendors.',
                url: 'https://www.discoverlancaster.com/things-to-do/shopping/farmers-markets/',
              },
              {
                title: 'Exploring local villages such as Intercourse and Bird-in-Hand',
                learn: 'Walk through village centres with shops, food and crafts, and keep to public areas when you visit.',
                url: 'https://www.discoverlancaster.com/regions-towns/amish-countryside/',
              },
              {
                title: 'Learning about traditional crafts and agricultural activities',
                learn: 'Understand how quilts, woodwork and farming form part of community economic life.',
                url: 'https://www.kitchenkettlevillage.com/',
              },
              {
                title: 'Visiting museums and cultural attractions',
                learn: 'Visit educational exhibits that explain Amish history and culture.',
                url: 'https://www.discoverlancaster.com/groups/itineraries/amish-tour/',
              },
            ],
          },
        ],
      },
      {
        id: 'products',
        title: { en: 'Products, food and local markets', es: 'Productos, gastronomía y mercados locales' },
        blocks: [
          {
            kind: 'text',
            paragraphs: [
              'Local markets and small businesses sell regional products that are part of community life: handmade quilts, baked goods, jams and relishes, fresh produce, handmade crafts and wooden products.',
              'Pennsylvania Dutch regional food includes dishes such as shoofly pie and chicken corn soup.',
              'Farmers\' markets and small local businesses give visitors direct contact with local producers. Buying from them supports the local economy.',
            ],
          },
          {
            kind: 'list',
            items: [
              'Handmade quilts',
              'Baked goods',
              'Jams and relishes',
              'Fresh produce',
              'Handmade crafts',
              'Wooden products',
              'Pennsylvania Dutch regional food, such as shoofly pie and chicken corn soup',
            ],
          },
        ],
      },
      {
        id: 'recommendations',
        title: { en: 'Recommendations for responsible tourism', es: 'Recomendaciones para el turismo responsable' },
        blocks: [
          {
            kind: 'list',
            items: [
              'Respect private property.',
              'Ask permission before photographing people.',
              'Do not assume all Amish families follow the same customs.',
              'Drive carefully around horse-drawn buggies.',
              'Follow local guides\' instructions.',
              'Respect religious practices and Sunday closures where applicable.',
              'Prefer educational experiences with reliable cultural information.',
              'Support local businesses respectfully.',
            ],
          },
          {
            kind: 'text',
            paragraphs: [
              'Responsible tourism means treating Lancaster County as a living community: enjoy its landscapes, markets and educational experiences, and leave private life and daily work undisturbed.',
            ],
          },
        ],
      },
    ] as { id: string; title: Record<Lang, string>; blocks: TopicBlock[] }[],
    mapHeading: { en: 'Map of Lancaster County and the places mentioned', es: 'Mapa del condado de Lancaster y de los lugares mencionados' },
    mapNote: {
      en: 'Street View panoramas show only verified public places. Panoramas are captured images, not a live view.',
      es: 'Las panorámicas de Street View muestran solo lugares públicos verificados. Son imágenes capturadas, no una vista en vivo.',
    },
    // Verified Street View points, same shape as the Discover the Region points. Empty until verified.
    streetViewPoints: [] as {
      name: Record<Lang, string>;
      location: Record<Lang, string>;
      coordinates?: string;
      pano?: string;
      radius?: number;
      heading?: number;
      pitch?: number;
    }[],
    streetViewNoKey: {
      en: 'Street View is not configured. Set VITE_GOOGLE_MAPS_EMBED_API_KEY in .env.local and restart Vite.',
      es: 'Street View no está configurado. Configura VITE_GOOGLE_MAPS_EMBED_API_KEY en .env.local y reinicia Vite.',
    },
    streetViewNoPoints: {
      en: 'Street View panoramas will appear here once the locations are verified.',
      es: 'Las panorámicas de Street View aparecerán aquí cuando se verifiquen las ubicaciones.',
    },
  },
  interaction: {
    heading: { en: 'Tourist Interaction & Critical Mediation', es: 'Interacción turística y mediación crítica' },
    lead: {
      en: 'How the Amish community is presented in tourism, what that presentation leaves out, and how to adapt it for international visitors.',
      es: 'Cómo se presenta a la comunidad amish en el turismo, qué deja fuera esa presentación y cómo adaptarla para visitantes internacionales.',
    },
    parts: {
      intro: { en: 'Introduction', es: 'Introducción' },
      original: { en: 'Original tourism content', es: 'Contenido turístico original' },
      analysis: { en: 'Critical analysis', es: 'Análisis crítico' },
      adaptation: { en: 'Cultural adaptation', es: 'Adaptación cultural' },
      video: { en: 'Final video', es: 'Video final' },
    },
    introText:
      'This section explores how tourism websites represent the Amish community in Lancaster County. Tourism information can help visitors discover local activities and attractions, but it can also create incomplete representations when it focuses mainly on commercial experiences. Our goal is to examine one authentic tourism example and adapt its message to encourage respectful and culturally informed visits.',
    originalLabel: { en: 'Original excerpt (English)', es: 'Fragmento original (inglés)' },
    originalExcerpt:
      'Buggy ride, Amish homestead attractions, quilt shops and museum, farmers\' market, crafts and local jam/relish/canning shops.',
    originalOrg: { en: 'Discover Lancaster', es: 'Discover Lancaster' },
    originalLinkLabel: { en: 'Open the original itinerary', es: 'Abrir el itinerario original' },
    originalUrl: 'https://www.discoverlancaster.com/groups/itineraries/amish-tour/',
    originalNote: {
      en: 'This is a tourism itinerary written to promote visits. It is not a statement written by a member of the Amish community. The excerpt does not state an author or a publication date.',
      es: 'Es un itinerario turístico escrito para promover visitas. No es una declaración escrita por un miembro de la comunidad amish. El fragmento no indica autor ni fecha de publicación.',
    },
    analysis: [
      {
        title: { en: 'Tourist representation of the community', es: 'Representación turística de la comunidad' },
        paragraphs: [
          'The text presents Lancaster County through tourist activities, shopping, attractions, local crafts and food products. It gives visitors practical ideas for planning a visit.',
        ],
      },
      {
        title: { en: 'Perspectives included and excluded', es: 'Perspectivas incluidas y excluidas' },
        paragraphs: [
          'The text includes the perspective of tourism planners and visitor experiences. However, it does not directly present Amish voices, personal experiences, religious beliefs or explanations of community privacy.',
        ],
      },
      {
        title: { en: 'Possible stereotypes', es: 'Posibles estereotipos' },
        paragraphs: [
          'By focusing on horse-drawn buggies, traditional crafts and homestead attractions, the text may reinforce an image of Amish people as a tourist attraction or as a community frozen in the past.',
          'This does not mean that the itinerary is necessarily disrespectful. Its limitation is that it provides a commercial tourism perspective rather than a complete cultural explanation.',
        ],
      },
      {
        title: { en: 'Tourist attraction and living community', es: 'Atracción turística y comunidad viva' },
        paragraphs: [
          'The Amish are people who live, work, raise families and practice their faith. They are not performers in a museum. Visitors should distinguish between authorized educational attractions and private community life.',
        ],
      },
    ],
    adaptedTitle: { en: 'Adapted message for international visitors', es: 'Mensaje adaptado para visitantes internacionales' },
    adaptedMessage:
      'Discover Lancaster County through its rural landscapes, local markets, traditional crafts, and guided cultural experiences. Learn about Amish history and traditions from reliable educational sources and authorized local guides. Remember that Amish families live and work in these communities. Respect private property, ask permission before taking photographs, and drive carefully when you see horse-drawn buggies.',
    decisionsTitle: { en: 'Translation and contextualization decisions', es: 'Decisiones de traducción y contextualización' },
    decisions: [
      '"Amish homestead attractions" should be contextualized as educational experiences about Amish history and daily life. The phrase should not suggest that visitors can freely enter private homes.',
      'Local products such as quilts, jams and handmade crafts should be presented as part of regional economic and cultural life, not simply as souvenirs.',
      'Recommendations about privacy, photography and road safety should be added because international visitors may not know the cultural and practical context of Lancaster County.',
    ],
    responsibleTitle: { en: 'Responsible tourism recommendations', es: 'Recomendaciones para el turismo responsable' },
    responsible: [
      'Respect private property.',
      'Ask permission before taking photographs.',
      'Follow local guides\' instructions.',
      'Drive carefully around horse-drawn buggies.',
      'Learn about the community from reliable sources.',
      'Avoid generalizations about all Amish families.',
    ],
    videoTitle: { en: 'Final video, about four minutes, two speakers', es: 'Video final, unos cuatro minutos, dos narradores' },
    videoError: {
      en: 'The video could not be loaded. Please try again later.',
      es: 'No se pudo cargar el video. Inténtelo de nuevo más tarde.',
    },
    videoUnsupported: {
      en: 'Your browser does not support the video element.',
      es: 'Su navegador no admite el elemento de video.',
    },
    scriptToggleShow: { en: 'Show video script', es: 'Mostrar guion del video' },
    scriptToggleHide: { en: 'Hide video script', es: 'Ocultar guion del video' },
    scriptHeading: { en: 'Video script', es: 'Guion del video' },
    videoScript: [
      { speaker: 'one', text: 'Welcome to our cultural tourism guide! Today, we are going to analyze how tourism websites present the Amish community in Lancaster County, Pennsylvania. We will also explain how to adapt this information for international visitors in a respectful way.' },
      { speaker: 'two', text: 'We selected an authentic example from Discover Lancaster, an official tourism organization. Its Amish Tour itinerary promotes buggy rides, Amish homestead attractions, quilt shops, museums, farmers\' markets, crafts, and local food products.' },
      { speaker: 'one', text: 'This description is useful because it gives visitors clear ideas about activities and places. It also highlights local products, such as quilts, jams, and handmade crafts. However, does it show the complete story of the Amish community?' },
      { speaker: 'two', text: 'Not really. The text focuses mainly on the visitor experience. It presents activities, shopping, and attractions, but it does not explain much about Amish history, religious beliefs, family life, or the importance of privacy.' },
      { speaker: 'one', text: 'This representation can create an incomplete image. Visitors might think that Amish people are simply a tourist attraction or that every family is available for photographs, tours, and questions.' },
      { speaker: 'two', text: 'We should remember that the Amish are a diverse religious community. They are not actors in a museum. They live, work, study, and practice their beliefs. Different Amish groups may also follow different traditions.' },
      { speaker: 'one', text: 'Now, let\'s adapt the original message for international visitors. Instead of translating only the list of attractions, we can provide cultural context and responsible recommendations.' },
      { speaker: 'two', text: 'Our adapted version is: "Discover Lancaster County through its rural landscapes, local markets, traditional crafts, and guided cultural experiences. Learn about Amish history and traditions from reliable educational sources and authorized local guides. Remember that Amish families live and work in these communities. Respect private property, ask permission before taking photographs, and drive carefully when you see horse-drawn buggies."' },
      { speaker: 'one', text: 'We made some important translation decisions. First, we translated "Amish homestead attractions" as educational experiences about Amish history and daily life, instead of suggesting that visitors can freely enter private homes.' },
      { speaker: 'two', text: 'Second, we kept the meaning of local products, such as quilts and homemade foods, but added context. These products are part of local economic and cultural life, not just souvenirs.' },
      { speaker: 'one', text: 'Finally, we included recommendations about privacy, photography, and road safety. These details help international visitors understand that responsible tourism requires respect.' },
      { speaker: 'two', text: 'We enjoy discovering new cultures, but we should not reduce a community to stereotypes or commercial experiences.' },
      { speaker: 'both', text: 'Travel with curiosity, learn with respect, and remember that every community deserves privacy and dignity. Thank you for watching!' },
    ] as { speaker: 'one' | 'two' | 'both'; text: string }[],
    scriptSpeakers: {
      one: { en: 'Speaker 1', es: 'Speaker 1' },
      two: { en: 'Speaker 2', es: 'Speaker 2' },
      both: { en: 'Both', es: 'Both' },
    },
  },
};
