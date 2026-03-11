export type Locale = 'en' | 'es' | 'eus';

export const localeOptions: Array<{ code: Locale; label: string; htmlLang: string }> = [
  { code: 'en', label: 'EN', htmlLang: 'en' },
  { code: 'es', label: 'ES', htmlLang: 'es' },
  { code: 'eus', label: 'EUS', htmlLang: 'eu' },
];

export const sharedTranslations = {
  en: {
    header: {
      homeAria: 'Lamassu home',
      navAria: 'Main navigation',
      localeAria: 'Language selector',
      nav: {
        platform: 'Platform',
        features: 'Features',
        value: 'Value',
        cases: 'Success stories',
        docs: 'Docs',
        arch: 'Arch',
      },
      githubAria: 'Lamassu GitHub',
      themeToggleAria: 'Toggle theme',
      ctaTalk: 'Talk to experts',
      ctaLogin: 'Log in',
    },
    footer: {
      documentation: 'Documentation',
      apiDefinition: 'API Definition',
      resources: 'Resources',
      sdks: 'SDKs',
      docs: 'Docs',
      openApi: 'OpenAPI',
      blog: 'Blog',
      slack: 'Slack',
      socialAria: 'Social links',
      copyright: '© 2026 Lamassu • Located in Arrasate, ES',
    },
  },
  es: {
    header: {
      homeAria: 'Inicio de Lamassu',
      navAria: 'Navegación principal',
      localeAria: 'Selector de idioma',
      nav: {
        platform: 'Plataforma',
        features: 'Funcionalidades',
        value: 'Valor',
        cases: 'Casos de éxito',
        docs: 'Docs',
        arch: 'Arch',
      },
      githubAria: 'GitHub de Lamassu',
      themeToggleAria: 'Cambiar tema',
      ctaTalk: 'Habla con expertos',
      ctaLogin: 'Inicia sesión',
    },
    footer: {
      documentation: 'Documentación',
      apiDefinition: 'Definición API',
      resources: 'Recursos',
      sdks: 'SDKs',
      docs: 'Docs',
      openApi: 'OpenAPI',
      blog: 'Blog',
      slack: 'Slack',
      socialAria: 'Redes sociales',
      copyright: '© 2026 Lamassu • Ubicado en Arrasate, ES',
    },
  },
  eus: {
    header: {
      homeAria: 'Lamassuren hasiera',
      navAria: 'Nabigazio nagusia',
      localeAria: 'Hizkuntza hautatzailea',
      nav: {
        platform: 'Plataforma',
        features: 'Funtzionalitateak',
        value: 'Balioa',
        cases: 'Arrakasta kasuak',
        docs: 'Docs',
        arch: 'Arch',
      },
      githubAria: 'Lamassuren GitHub',
      themeToggleAria: 'Aldatu gaia',
      ctaTalk: 'Hitz egin adituekin',
      ctaLogin: 'Hasi saioa',
    },
    footer: {
      documentation: 'Dokumentazioa',
      apiDefinition: 'API definizioa',
      resources: 'Baliabideak',
      sdks: 'SDKak',
      docs: 'Docs',
      openApi: 'OpenAPI',
      blog: 'Bloga',
      slack: 'Slack',
      socialAria: 'Sare sozialak',
      copyright: '© 2026 Lamassu • Arrasaten kokatua, ES',
    },
  },
} as const;

export const homeTranslations = {
  en: {
    meta: {
      title: 'Lamassu IoT | Industrial PKI for IoT fleets',
    },
    home: {
      hero: {
        kicker: 'Industrial PKI for IoT fleets',
        title: 'Industrial PKI to manage IoT identities end to end',
        lead:
          'Centralize keys, certification authorities, issuance, validation and device lifecycle management in a single platform built for industrial operations.',
        ctaPrimary: 'View features',
        ctaSecondary: 'Core capabilities',
        stackAria: 'Platform capabilities',
      },
      overview: {
        title: 'A single platform for the IoT cryptographic lifecycle',
        body:
          'Lamassu IoT unifies the critical components of an industrial PKI: key management, certification authorities, issuance automation, certificate validation and device identity.',
        imageAlt: 'Lamassu IoT dashboard view',
        blocks: [
          {
            title: 'The dashboard centralizes day-to-day operations.',
            body1:
              'Security and operations teams get a single view of active certificates, expirations, revocations and the status of IoT identities by environment or business line.',
            body2:
              'Fast reading helps detect deviations before they affect plant availability and enables traceable actions.',
          },
          {
            title: 'Control fleet status.',
            body1:
              'Each device shows its real-time status: active, revoked, decommissioned or without an assigned identity. The team can act directly from the view without switching tools.',
          },
          {
            title: 'Structure and organization.',
            body1:
              'Groups, tags and registration authorities make it possible to organize fleets of any size, from lab prototypes to full production lines, while keeping traceability and context-aware access control.',
          },
        ],
      },
      customersAria: 'Customers',
      outcomes: {
        title: 'Operate your IoT fleet at scale with guarantees. Strengthen the cyber-resilience of your equipment',
        items: [
          {
            title: 'Device identity built for the real world',
            body:
              'Each device gets a unique cryptographic identity from the first moment, enabling strong authentication, factory trust establishment and secure communications throughout its operational life.',
            alt: 'Illustration of device identity',
          },
          {
            title: 'PKI designed for IoT',
            body:
              'The architecture is designed to operate with millions of devices, edge deployments, distributed production lines and heterogeneous industrial environments without losing consistency or cryptographic control.',
            alt: 'Illustration of PKI for IoT',
          },
          {
            title: 'Full certificate lifecycle automation',
            body:
              'Continuously manage issuance, renewal, rotation and revocation of certificates, eliminating manual work and reducing operational risk in large fleets or deployments that do not allow frequent intervention.',
            alt: 'Illustration of the certificate lifecycle',
          },
          {
            title: 'Integration with your ecosystem',
            body:
              'APIs, SDKs and connectors let you integrate Lamassu with cloud platforms, existing infrastructure, enterprise systems and manufacturing processes without rebuilding the stack already running in production.',
            alt: 'Illustration of ecosystem and platform integration',
          },
        ],
      },
      capabilities: {
        title: 'Key features',
        listAria: 'Key features',
        items: [
          '<strong>Certification authority management</strong> - Create and manage CAs with flexible profiles and issuance policies.',
          '<strong>Device identity management</strong> - Track device lifecycles, identities and certificate associations.',
          '<strong>EST protocol support</strong> - RFC 7030 enrollment for automatic certificate provisioning on devices.',
          '<strong>Key management service</strong> - Pluggable cryptographic engines: software, AWS KMS, PKCS#11 and HashiCorp Vault.',
          '<strong>Advanced filtering</strong> - Filtering and sorting with JSONPath across all resources.',
          '<strong>Cloud connectors</strong> - Native AWS IoT integration and an extensible model for custom platforms.',
        ],
      },
      cases: {
        title: 'Fits into your stack, without lock-in',
        subtitle:
          'Lamassu is built with modular, pluggable components so you can deploy it your way and integrate it with the tools you already use.',
        rows: [
          {
            title: 'Cryptographic backends',
            body: 'Choose where to store keys: software, AWS KMS, PKCS#11 hardware tokens or HashiCorp Vault.',
          },
          {
            title: 'Storage and events',
            body:
              'Run on PostgreSQL. Emit events through RabbitMQ or AWS EventBridge to connect it to your existing data pipelines.',
          },
          {
            title: 'Cloud and platform connectors',
            body:
              'Native integration with AWS IoT Core from day one, with an extensible connector model to add your own platforms.',
          },
        ],
      },
      references: {
        title: 'Success stories in energy and connected industry',
        subtitle:
          'Real references where Lamassu reduced operational friction and improved cryptographic posture in OT and IoT environments.',
        eyebrow: 'OUR CUSTOMERS, OUR BEST REFERENCE',
        cta: 'View dedicated page',
        cards: [
          {
            sector: 'Rail',
            title: 'Rolling stock and signaling',
            highlight: '24x7 cryptographic continuity in operation',
            body: 'PKI for trains, stations and track systems with segmentation by line, operator or region.',
          },
          {
            sector: 'Connected Hospitality',
            title: 'Multi-site hospitality and restaurant chains',
            highlight: 'Secure onboarding for in-store devices',
            body: 'Identity control for smart locks, POS, kiosks and sensors with simplified operations.',
          },
          {
            sector: 'Energy · Batteries',
            title: 'BESS, inverters and energy management',
            highlight: 'Lower operational risk in distributed assets',
            body: 'Strong identity for controllers and gateways in storage plants and connected energy networks.',
          },
          {
            sector: 'Cranes',
            title: 'Industrial fleets and remote operation',
            highlight: 'More control over assets with variable connectivity',
            body: 'Security for telemetry, control and remote maintenance in logistics, port and construction environments.',
          },
          {
            sector: 'Connected Access',
            title: 'Intelligent physical access control at scale',
            highlight: 'Fast revocation and centralized governance',
            body: 'Certificate management for controllers, readers and locks across buildings and campus deployments.',
          },
        ],
      },
    },
  },
  es: {
    meta: {
      title: 'Lamassu IoT | PKI industrial para flotas IoT',
    },
    home: {
      hero: {
        kicker: 'PKI industrial para flotas IoT',
        title: 'PKI industrial para gestionar identidades IoT de extremo a extremo',
        lead:
          'Centraliza claves, autoridades de certificación, emisión, validación y ciclo de vida de dispositivos en una sola plataforma preparada para operación industrial.',
        ctaPrimary: 'Ver funcionalidades',
        ctaSecondary: 'Capacidades core',
        stackAria: 'Capacidades de la plataforma',
      },
      overview: {
        title: 'Una plataforma única para el ciclo de vida criptográfico IoT',
        body:
          'Lamassu IoT unifica los componentes críticos de una PKI industrial: gestión de claves, autoridades de certificación, automatización de emisión, validación de certificados e identidad de dispositivos.',
        imageAlt: 'Vista del dashboard de Lamassu IoT',
        blocks: [
          {
            title: 'El dashboard centraliza la operación diaria.',
            body1:
              'Equipos de seguridad y operación ven en una sola vista certificados activos, expiraciones, revocaciones y estado de identidades IoT por entorno o línea de negocio.',
            body2:
              'La lectura rápida permite detectar desvíos antes de que afecten la disponibilidad en planta y aplicar acciones con trazabilidad.',
          },
          {
            title: 'Controla el estado de la flota.',
            body1:
              'Cada dispositivo muestra su estado en tiempo real: activo, revocado, decomisionado o sin identidad asignada. El equipo puede actuar directamente desde la vista, sin cambiar de herramienta.',
          },
          {
            title: 'Estructura y organización.',
            body1:
              'Los grupos, tags y autoridades de registro permiten organizar flotas de cualquier tamaño, desde prototipos en laboratorio hasta líneas de producción completas, manteniendo trazabilidad y control de acceso por contexto.',
          },
        ],
      },
      customersAria: 'Clientes',
      outcomes: {
        title: 'Controla tu flota IoT a escala con garantías. Controla la ciberresiliencia de tus equipos',
        items: [
          {
            title: 'Identidad de dispositivo preparada para el mundo real',
            body:
              'Cada dispositivo obtiene una identidad criptográfica única desde el primer momento, lo que permite autenticación fuerte, establecimiento de confianza desde fábrica y comunicaciones seguras durante toda su vida operativa.',
            alt: 'Ilustración de identidad de dispositivos',
          },
          {
            title: 'PKI diseñada para IoT',
            body:
              'La arquitectura está pensada para operar con millones de dispositivos, despliegues edge, líneas de producción distribuidas y entornos industriales heterogéneos sin perder consistencia ni control criptográfico.',
            alt: 'Ilustración de PKI para IoT',
          },
          {
            title: 'Automatización completa del ciclo de certificados',
            body:
              'Gestiona de forma continua la emisión, renovación, rotación y revocación de certificados, eliminando tareas manuales y reduciendo el riesgo operativo en flotas grandes o en despliegues que no admiten intervención frecuente.',
            alt: 'Ilustración del ciclo de certificados',
          },
          {
            title: 'Integración con tu ecosistema',
            body:
              'APIs, SDKs y conectores permiten integrar Lamassu con plataformas cloud, infraestructuras existentes, sistemas corporativos y procesos de fabricación sin obligarte a rehacer el stack que ya tienes en producción.',
            alt: 'Ilustración de integración con ecosistemas y plataformas',
          },
        ],
      },
      capabilities: {
        title: 'Funcionalidades clave',
        listAria: 'Funcionalidades clave',
        items: [
          '<strong>Gestión de autoridades de certificación</strong> - Crea y administra CAs con perfiles y políticas de emisión flexibles.',
          '<strong>Gestión de identidades de dispositivos</strong> - Sigue ciclos de vida de dispositivos, identidades y asociaciones de certificados.',
          '<strong>Soporte de protocolo EST</strong> - Enrollment RFC 7030 para provisión automática de certificados en dispositivos.',
          '<strong>Servicio de gestión de claves</strong> - Motores criptográficos conectables: software, AWS KMS, PKCS#11 y HashiCorp Vault.',
          '<strong>Filtrado avanzado</strong> - Filtrado y ordenación con JSONPath sobre todos los recursos.',
          '<strong>Conectores cloud</strong> - Integración nativa con AWS IoT y modelo extensible para plataformas personalizadas.',
        ],
      },
      cases: {
        title: 'Encaja en tu stack, sin lock-in',
        subtitle:
          'Lamassu está construido con componentes modulares y conectables para desplegarlo a tu manera e integrarlo con las herramientas que ya utilizas.',
        rows: [
          {
            title: 'Backends criptográficos',
            body: 'Elige dónde custodiar claves: software, AWS KMS, tokens hardware PKCS#11 o HashiCorp Vault.',
          },
          {
            title: 'Almacenamiento y eventos',
            body:
              'Ejecuta sobre PostgreSQL. Emite eventos por RabbitMQ o AWS EventBridge para conectarlo a tus pipelines de datos existentes.',
          },
          {
            title: 'Conectores cloud y de plataforma',
            body:
              'Integración nativa con AWS IoT Core desde el primer día, con un modelo de conectores extensible para añadir tus propias plataformas.',
          },
        ],
      },
      references: {
        title: 'Casos de éxito en energía e industria conectada',
        subtitle:
          'Referencias reales donde Lamassu redujo fricción operativa y elevó la postura criptográfica en entornos OT e IoT.',
        eyebrow: 'NUESTROS CLIENTES, NUESTRA MEJOR REFERENCIA',
        cta: 'Ver página dedicada',
        cards: [
          {
            sector: 'Ferroviario',
            title: 'Material rodante y señalización',
            highlight: 'Continuidad criptográfica en operación 24x7',
            body: 'PKI para trenes, estaciones y sistemas de vía con segmentación por línea, operador o región.',
          },
          {
            sector: 'Hostelería conectada',
            title: 'Cadenas multi-sede de hostelería y restauración',
            highlight: 'Onboarding seguro para dispositivos de local',
            body: 'Control de identidad para cerraduras inteligentes, TPV, kioscos y sensores con operación simplificada.',
          },
          {
            sector: 'Energía · Baterías',
            title: 'BESS, inversores y gestión energética',
            highlight: 'Menor riesgo operativo en activos distribuidos',
            body: 'Identidad fuerte para controladores y gateways en plantas de almacenamiento y redes energéticas conectadas.',
          },
          {
            sector: 'Grúas',
            title: 'Flotas industriales y operación remota',
            highlight: 'Mayor control sobre activos con conectividad variable',
            body: 'Seguridad para telemetría, control y mantenimiento remoto en entornos logísticos, portuarios y de obra.',
          },
          {
            sector: 'Puertas de acceso conectadas',
            title: 'Control físico inteligente a escala',
            highlight: 'Revocación rápida y gobierno centralizado',
            body: 'Gestión de certificados para controladores, lectores y cerraduras en despliegues de edificios y campus.',
          },
        ],
      },
    },
  },
  eus: {
    meta: {
      title: 'Lamassu IoT | IoT floten PKI industriala',
    },
    home: {
      hero: {
        kicker: 'IoT flotetarako PKI industriala',
        title: 'IoT identitateak mutur batetik bestera kudeatzeko PKI industriala',
        lead:
          'Gakoak, ziurtapen agintariak, jaulkipena, balidazioa eta gailuen bizi-zikloa zentralizatu industria-eragiketetarako prestatutako plataforma bakarrean.',
        ctaPrimary: 'Ikusi funtzionalitateak',
        ctaSecondary: 'Gaitasun nagusiak',
        stackAria: 'Plataformaren gaitasunak',
      },
      overview: {
        title: 'IoT kriptografia-bizitza-ziklorako plataforma bakarra',
        body:
          'Lamassu IoT-k PKI industrial baten osagai kritikoak bateratzen ditu: gakoen kudeaketa, ziurtapen agintariak, jaulkipen automatizazioa, ziurtagirien balidazioa eta gailuen identitatea.',
        imageAlt: 'Lamassu IoT dashboard-aren ikuspegia',
        blocks: [
          {
            title: 'Dashboardak eguneroko operazioa zentralizatzen du.',
            body1:
              'Segurtasuneko eta eragiketetako taldeek ikuspegi bakarrean ikusten dituzte ziurtagiri aktiboak, iraungitzeak, ezeztapenak eta IoT identitateen egoera ingurune edo negozio-lerro bakoitzean.',
            body2:
              'Irakurketa azkarrak desbideratzeak antzematea ahalbidetzen du plantako erabilgarritasunean eragin aurretik eta ekintzak trazabilitatearekin aplikatzeko.',
          },
          {
            title: 'Kontrolatu flotaren egoera.',
            body1:
              'Gailu bakoitzak bere egoera denbora errealean erakusten du: aktiboa, ezeztatua, zerbitzuz kanpo edo esleitutako identitaterik gabe. Taldeak ikuspegitik bertatik jardun dezake, tresnaz aldatu gabe.',
          },
          {
            title: 'Egitura eta antolaketa.',
            body1:
              'Taldeek, tag-ek eta erregistro agintariek edozein tamainatako flotak antolatzeko aukera ematen dute, laborategiko prototipoetatik ekoizpen-lerro osoetara arte, trazabilitatea eta testuinguruaren araberako sarbide-kontrola mantenduz.',
          },
        ],
      },
      customersAria: 'Bezeroak',
      outcomes: {
        title: 'Kontrolatu zure IoT flota eskalan bermeekin. Indartu zure ekipoen zibererresilientzia',
        items: [
          {
            title: 'Mundu errealerako prestatutako gailu-identitatea',
            body:
              'Gailu bakoitzak identitate kriptografiko bakarra lortzen du lehen unetik bertatik; horrek autentifikazio sendoa, fabrikatik konfiantza ezartzea eta komunikazio seguruak ahalbidetzen ditu bere bizi operatibo osoan.',
            alt: 'Gailuen identitatearen ilustrazioa',
          },
          {
            title: 'IoTarako diseinatutako PKIa',
            body:
              'Arkitektura milioika gailurekin, edge hedapenekin, ekoizpen-lerro banatuekin eta industria-ingurune heterogeneoekin jarduteko dago pentsatuta, koherentzia edo kontrol kriptografikoa galdu gabe.',
            alt: 'IoTarako PKIaren ilustrazioa',
          },
          {
            title: 'Ziurtagirien bizi-zikloaren automatizazio osoa',
            body:
              'Kudeatu modu jarraituan ziurtagirien jaulkipena, berritzea, errotazioa eta ezeztapena, eskuzko lanak ezabatuz eta esku-hartze maizik onartzen ez duten flota handietan edo hedapenetan arrisku operatiboa murriztuz.',
            alt: 'Ziurtagirien bizi-zikloaren ilustrazioa',
          },
          {
            title: 'Integrazioa zure ekosistemarekin',
            body:
              'APIek, SDKek eta konektoreek Lamassu cloud plataformekin, dagoen azpiegiturarekin, sistema korporatiboekin eta fabrikazio-prozesuekin integratzea ahalbidetzen dute, ekoizpenean duzun stack-a berreraiki behar izan gabe.',
            alt: 'Ekosistemen eta plataformen integrazioaren ilustrazioa',
          },
        ],
      },
      capabilities: {
        title: 'Funtzionalitate nagusiak',
        listAria: 'Funtzionalitate nagusiak',
        items: [
          '<strong>Ziurtapen agintarien kudeaketa</strong> - Sortu eta administratu CAak profil eta jaulkipen-politika malguekin.',
          '<strong>Gailuen identitateen kudeaketa</strong> - Jarraitu gailuen bizi-zikloak, identitateak eta ziurtagirien loturak.',
          '<strong>EST protokoloaren euskarria</strong> - RFC 7030 enrollment gailuetan ziurtagiriak automatikoki hornitzeko.',
          '<strong>Gakoen kudeaketa zerbitzua</strong> - Motor kriptografiko konektagarriak: softwarea, AWS KMS, PKCS#11 eta HashiCorp Vault.',
          '<strong>Iragazketa aurreratua</strong> - JSONPath bidezko iragazketa eta ordenazioa baliabide guztietan.',
          '<strong>Cloud konektoreak</strong> - AWS IoTrekin integrazio natiboa eta plataforma pertsonalizatuetarako eredu hedagarria.',
        ],
      },
      cases: {
        title: 'Zure stack-ean sartzen da, lock-in gabe',
        subtitle:
          'Lamassu osagai modular eta konektagarriekin eraikita dago, zure erara hedatzeko eta jada erabiltzen dituzun tresnekin integratzeko.',
        rows: [
          {
            title: 'Backend kriptografikoak',
            body: 'Aukeratu non gorde gakoak: softwarea, AWS KMS, PKCS#11 hardware tokenak edo HashiCorp Vault.',
          },
          {
            title: 'Biltegiratzea eta gertaerak',
            body:
              'PostgreSQL gainean exekutatzen da. RabbitMQ edo AWS EventBridge bidez gertaerak igortzen ditu zure datu-pipelineekin konektatzeko.',
          },
          {
            title: 'Cloud eta plataformaren konektoreak',
            body:
              'AWS IoT Corerekin integrazio natiboa lehen egunetik, zure plataforma propioak gehitzeko konektore-eredu hedagarri batekin.',
          },
        ],
      },
      references: {
        title: 'Energiako eta industria konektatuko arrakasta kasuak',
        subtitle:
          'Lamassuk OT eta IoT inguruneetan frikzio operatiboa murriztu eta jarrera kriptografikoa hobetu duen erreferentzia errealak.',
        eyebrow: 'GURE BEZEROAK, GURE ERREFERENTZIARIK ONENA',
        cta: 'Ikusi dagokion orria',
        cards: [
          {
            sector: 'Ferroviarioa',
            title: 'Material mugikorra eta seinaleztapena',
            highlight: '24x7 eragiketan jarraitutasun kriptografikoa',
            body: 'PKI trenetarako, geltokietarako eta bide-sistemetarako, linea, operadore edo eskualdeka segmentatuta.',
          },
          {
            sector: 'Ostalaritza konektatua',
            title: 'Ostalaritza eta jatetxe kate multi-siteak',
            highlight: 'Lokaleko gailuentzako onboarding segurua',
            body: 'Identitate-kontrola sarraila adimendunentzat, TPVentzat, kioskoentzat eta sentsoreentzat, eragiketa sinplifikatuarekin.',
          },
          {
            sector: 'Energia · Bateriak',
            title: 'BESS, inbertsoreak eta kudeaketa energetikoa',
            highlight: 'Arrisku operatibo txikiagoa aktibo banatuetan',
            body: 'Identitate sendoa kontrolagailu eta gateway-entzat biltegiratze-plantetan eta energia-sare konektatuetan.',
          },
          {
            sector: 'Garabiak',
            title: 'Flota industrialak eta urruneko eragiketa',
            highlight: 'Kontrol handiagoa konektibitate aldakorreko aktiboetan',
            body: 'Segurtasuna telemetriarako, kontrolerako eta urruneko mantentzerako logistika, portu eta obra inguruneetan.',
          },
          {
            sector: 'Sarbide ate konektatuak',
            title: 'Kontrol fisiko adimenduna eskalan',
            highlight: 'Ezeztapen azkarra eta gobernantza zentralizatua',
            body: 'Ziurtagirien kudeaketa kontrolagailu, irakurgailu eta sarrailetarako eraikin eta campus hedapenetan.',
          },
        ],
      },
    },
  },
} as const;
