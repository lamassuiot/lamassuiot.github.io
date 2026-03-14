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
      cta: {
        left: {
          eyebrow: 'Why we\'re different',
          heading: 'Get started today and take control of your IoT fleet security.',
          btn: 'Explore features',
        },
        right: {
          eyebrow: 'Newsletter',
          heading: 'Sign up and receive product updates and news from Lamassu.',
          inputPlaceholder: 'your@email.com',
          submitLabel: 'Subscribe',
        },
      },
      features: {
        title: 'One platform, every security discipline',
        items: [
          {
            tag: 'PKI',
            title: 'Public Key Infrastructure',
            body: 'Deploy a full CA hierarchy with flexible issuance policies, automated CRL and OCSP, and cryptographic control at every layer — from root to device certificates.',
            points: ['Full CA hierarchy deployed in minutes, not weeks', 'CRL and OCSP endpoints automated and always current', 'Issuance policies enforced at the API, not in documentation'],
            link: 'Learn more',
          },
          {
            tag: 'Device Identity',
            title: 'Device Identity',
            body: 'Assign a unique cryptographic identity to every device at manufacturing time and track it through its entire operational life — from provisioning to decommission.',
            points: ['Unique cryptographic identity assigned at manufacturing', 'Continuous lifecycle tracking from factory to end-of-life', 'Fleet-wide certificate status and expiry in one view'],
            link: 'Learn more',
          },
          {
            tag: 'Secure Updates',
            title: 'Secure Software Updates',
            body: 'Sign firmware and software packages so your fleet only runs verified, untampered code — regardless of transport or deployment method.',
            points: ['Sign firmware and packages with CA-issued certificates', 'Devices verify code integrity before executing any update', 'Delivery-method agnostic — OTA, USB, cloud or on-prem'],
            link: 'Learn more',
          },
          {
            tag: 'Code Signing',
            title: 'Code Signing',
            body: 'Protect your release pipeline with certificate-based signing for binaries, containers, scripts and build artifacts — trust anchored to your own CA.',
            points: ['Sign binaries, containers, scripts and build artifacts', 'Trust chain anchored to your own CA, not a third party', 'Plugs into your CI/CD pipeline without custom tooling'],
            link: 'Learn more',
          },
          {
            tag: 'Integrations',
            title: 'Corporate Integrations',
            body: 'Connect to AWS IoT, Azure, SCEP, EST, LDAP and your own platforms via an extensible connector model and open APIs — no rip-and-replace required.',
            points: ['Native AWS IoT Core and Azure connectivity out of the box', 'LDAP and Active Directory for enterprise identity federation', 'Open connector API to integrate any existing or custom platform'],
            link: 'Learn more',
          },
        ],
      },
      capabilities: {
        title: 'Each discipline, in detail',
        listAria: 'Security discipline details',
        items: [
          {
            title: 'CA management',
            body: 'Create and manage certificate authorities with flexible profiles, issuance policies and full hierarchy control — from root to subordinate CAs.',
            points: ['Multi-level hierarchies with root and intermediate CAs', 'Customizable certificate profiles and validity periods', 'Automated revocation and CRL / OCSP distribution'],
          },
          {
            title: 'Device identity',
            body: 'Track device lifecycles, cryptographic identities and certificate associations across your entire fleet from first provisioning to decommission.',
            points: ['Full lifecycle from provisioning to end-of-life', 'Real-time certificate status per device', 'Bulk operations and fleet-wide revocation'],
          },
          {
            title: 'EST protocol',
            body: 'RFC 7030 enrollment for automatic certificate provisioning on any device — no manual steps, no scripts, no human error.',
            points: ['Zero-touch provisioning at scale', 'Compatible with any RFC 7030 EST client', 'Re-enrollment and renewal automation'],
          },
          {
            title: 'Key management',
            body: 'Pluggable cryptographic engines let you store private keys exactly where your security policy requires — hardware or cloud.',
            points: ['AWS KMS, PKCS#11 HSMs and HashiCorp Vault', 'Software engine for development and testing', 'No key export — keys never leave the HSM'],
          },
          {
            title: 'Advanced filtering',
            body: 'Filter and sort with JSONPath expressions across all resources and certificate fields for precise operational queries.',
            points: ['JSONPath queries across all resource types', 'Combine multiple conditions for precise results', 'Audit-ready export of filtered datasets'],
          },
          {
            title: 'Cloud connectors',
            body: 'Native AWS IoT Core integration and an extensible connector model so you can reach any platform or cloud without custom glue code.',
            points: ['Native AWS IoT Core synchronization', 'Extensible API to build custom connectors', 'Event-driven integration with your data pipelines'],
          },
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
      cta: {
        left: {
          eyebrow: 'Por qué somos diferentes',
          heading: 'Empieza hoy y toma el control de la seguridad de tu flota IoT.',
          btn: 'Explorar funcionalidades',
        },
        right: {
          eyebrow: 'Newsletter',
          heading: 'Suscríbete y recibe actualizaciones del producto y novedades de Lamassu.',
          inputPlaceholder: 'tu@email.com',
          submitLabel: 'Suscribirse',
        },
      },
      features: {
        title: 'Una plataforma, todas las disciplinas de seguridad',
        items: [
          {
            tag: 'PKI',
            title: 'Infraestructura de clave pública',
            body: 'Despliega una jerarquía de CAs completa con políticas de emisión flexibles, CRL y OCSP automatizados y control criptográfico en cada capa — desde la raíz hasta los certificados de dispositivo.',
            points: ['Jerarquía de CAs completa desplegada en minutos, no semanas', 'Endpoints de CRL y OCSP automatizados y siempre actualizados', 'Políticas de emisión aplicadas en la API, no en la documentación'],
            link: 'Saber más',
          },
          {
            tag: 'Device Identity',
            title: 'Identidad de dispositivos',
            body: 'Asigna una identidad criptográfica única a cada dispositivo en fabricación y haz seguimiento durante todo su ciclo de vida operativo — desde el aprovisionamiento hasta la baja.',
            points: ['Identidad criptográfica única asignada en fabricación', 'Seguimiento continuo del ciclo de vida de fábrica a fin de vida', 'Estado de certificados y caducidades de toda la flota en un solo lugar'],
            link: 'Saber más',
          },
          {
            tag: 'Secure Updates',
            title: 'Actualizaciones seguras de software',
            body: 'Firma firmware y paquetes de software para que tu flota solo ejecute código verificado e íntegro, independientemente del método de despliegue.',
            points: ['Firma firmware y paquetes con certificados emitidos por tu CA', 'Los dispositivos verifican la integridad del código antes de ejecutar', 'Compatible con OTA, USB, cloud u on-prem sin cambios de arquitectura'],
            link: 'Saber más',
          },
          {
            tag: 'Code Signing',
            title: 'Firma de código',
            body: 'Protege tu pipeline de releases con firma basada en certificados para binarios, contenedores, scripts y artefactos de build — confianza anclada a tu propia CA.',
            points: ['Firma binarios, contenedores, scripts y artefactos de build', 'Cadena de confianza anclada a tu propia CA, no a un tercero', 'Se integra en tu pipeline CI/CD sin herramientas adicionales'],
            link: 'Saber más',
          },
          {
            tag: 'Integrations',
            title: 'Integraciones corporativas',
            body: 'Conéctate a AWS IoT, Azure, SCEP, EST, LDAP y tus propias plataformas a través de un modelo de conectores extensible y APIs abiertas — sin tener que rehacer tu stack.',
            points: ['Conectividad nativa con AWS IoT Core y Azure desde el primer día', 'LDAP y Active Directory para federación de identidad empresarial', 'API de conectores abierta para integrar cualquier plataforma propia'],
            link: 'Saber más',
          },
        ],
      },
      capabilities: {
        title: 'Cada disciplina, en detalle',
        listAria: 'Detalle por disciplina de seguridad',
        items: [
          {
            title: 'Gestión de CAs',
            body: 'Crea y administra autoridades de certificación con perfiles flexibles, políticas de emisión y control total de jerarquías — desde la raíz hasta las CAs subordinadas.',
            points: ['Jerarquías multinivel con CAs raíz e intermedias', 'Perfiles de certificado y períodos de validez personalizables', 'Revocación automatizada y distribución de CRL / OCSP'],
          },
          {
            title: 'Identidad de dispositivos',
            body: 'Sigue ciclos de vida, identidades criptográficas y asociaciones de certificados en toda tu flota, desde el primer aprovisionamiento hasta la baja.',
            points: ['Ciclo de vida completo desde el aprovisionamiento hasta la baja', 'Estado del certificado en tiempo real por dispositivo', 'Operaciones masivas y revocación a nivel de flota'],
          },
          {
            title: 'Protocolo EST',
            body: 'Enrollment RFC 7030 para aprovisionamiento automático de certificados en cualquier dispositivo — sin pasos manuales, sin scripts, sin error humano.',
            points: ['Aprovisionamiento sin intervención humana a escala', 'Compatible con cualquier cliente EST según RFC 7030', 'Automatización de re-enrolamiento y renovación'],
          },
          {
            title: 'Gestión de claves',
            body: 'Motores criptográficos conectables para custodiar claves privadas exactamente donde tu política de seguridad lo exige — hardware o nube.',
            points: ['Soporte para AWS KMS, HSMs PKCS#11 y HashiCorp Vault', 'Motor software para desarrollo y pruebas', 'Sin exportación de claves — nunca salen del HSM'],
          },
          {
            title: 'Filtrado avanzado',
            body: 'Filtra y ordena con expresiones JSONPath sobre todos los recursos y campos de certificados para consultas operativas de alta precisión.',
            points: ['Consultas JSONPath sobre todos los tipos de recursos', 'Combina múltiples condiciones para resultados precisos', 'Exportación de datos filtrados lista para auditoría'],
          },
          {
            title: 'Conectores cloud',
            body: 'Integración nativa con AWS IoT Core y un modelo de conectores extensible para conectar cualquier plataforma o nube sin código de pegamento.',
            points: ['Sincronización nativa con AWS IoT Core', 'API extensible para construir conectores propios', 'Integración orientada a eventos con tus pipelines de datos'],
          },
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
      cta: {
        left: {
          eyebrow: 'Zergatik gara desberdinak',
          heading: 'Hasi gaur eta hartu kontrola zure IoT flotaren segurtasunean.',
          btn: 'Esploratu funtzionalitateak',
        },
        right: {
          eyebrow: 'Newsletter',
          heading: 'Harpidetu eta jaso produktuaren eguneratzeak eta Lamassu-ren berriak.',
          inputPlaceholder: 'zure@email.com',
          submitLabel: 'Harpidetu',
        },
      },
      features: {
        title: 'Plataforma bakarra, segurtasun diziplina guztiak',
        items: [
          {
            tag: 'PKI',
            title: 'Gako publikoaren azpiegitura',
            body: 'Zabaldu CA hierarkia osoa emisio-politika malguekin, CRL eta OCSP automatizatuekin eta kontrol kriptografikoarekin geruzetan — erroa eta gailuen ziurtagiriak barne.',
            points: ['CA hierarkia osoa minutuetan zabalduta, ez asteetan', 'CRL eta OCSP endpoint-ak automatizatuta eta beti eguneratuta', 'Jaulkipen-politikak APIan aplikatuta, ez dokumentazioan'],
            link: 'Gehiago jakin',
          },
          {
            tag: 'Device Identity',
            title: 'Gailuen identitatea',
            body: 'Esleitu identitate kriptografiko bakarra gailu bakoitzari fabrikazioan eta jarraitu bizi-ziklo operatibo osoan zehar — horniduratatik bajara arte.',
            points: ['Identitate kriptografiko bakarra fabrikazioan esleituta', 'Bizi-zikloaren jarraipen jarraitua fabrikatik bajara arte', 'Flota osoko ziurtagiri-egoera eta iraungitzeak leku bakarrean'],
            link: 'Gehiago jakin',
          },
          {
            tag: 'Secure Updates',
            title: 'Software eguneraketa seguruak',
            body: 'Sinatu firmware eta software paketeak zure flotan soilik egiaztatu eta osotasuna betetako kodea exekutatzeko, hedapen-metodoaren arabera.',
            points: ['Firmatu firmware eta paketeak zure CAk emandako ziurtagiriekin', 'Gailuek kode-osotasuna egiaztatzen dute eguneraketa exekutatu aurretik', 'OTA, USB, cloud edo on-prem bateragarria arkitektura aldatu gabe'],
            link: 'Gehiago jakin',
          },
          {
            tag: 'Code Signing',
            title: 'Kodearen sinadura',
            body: 'Babestu zure release pipeline ziurtagiri-oinarritutako sinadurarekin binario, edukiontzi, script eta build artefaktuetarako — konfiantza zure CA propioan ainguratuta.',
            points: ['Firmatu bitarrak, edukiontziak, scriptak eta build artefaktuak', 'Konfiantza-katea zure CA propioan ainguratuta, ez hirugarren batean', 'CI/CD pipeline-an txertatzen da tresna gehigarririk gabe'],
            link: 'Gehiago jakin',
          },
          {
            tag: 'Integrations',
            title: 'Enpresako integrazioak',
            body: 'Konektatu AWS IoT, Azure, SCEP, EST, LDAP eta zure plataformei konektore-eredu hedagarri eta API ireki baten bidez — stack-a berreraiki behar izan gabe.',
            points: ['AWS IoT Core eta Azure natibo lehen egunetik', 'LDAP eta Active Directory enpresako identitate-federaziorako', 'API irekia edozein plataforma existente edo propio integratzeko'],
            link: 'Gehiago jakin',
          },
        ],
      },
      capabilities: {
        title: 'Diziplina bakoitza, xehetasunez',
        listAria: 'Segurtasun diziplinen xehetasunak',
        items: [
          {
            title: 'CA kudeaketa',
            body: 'Sortu eta administratu ziurtapen agintariak profil malguekin, jaulkipen-politikekin eta hierarkien kontrol osoarekin — erroa eta CA menpekoak barne.',
            points: ['Maila anitzeko hierarkiak erro eta CA bitartekariekin', 'Ziurtagiri-profilak eta balio-epeak pertsonalizagarriak', 'Baliogabetze automatizatua eta CRL / OCSP banaketa'],
          },
          {
            title: 'Gailuen identitatea',
            body: 'Jarraitu bizi-zikloak, identitate kriptografikoak eta ziurtagirien loturak flota osoan, lehen horniduratatik bajara arte.',
            points: ['Bizi-ziklo osoa horniduratatik bajara arte', 'Ziurtagiriaren egoera denbora errealean gailu bakoitzeko', 'Operazio masiboa eta flota-mailako baliogabetzea'],
          },
          {
            title: 'EST protokoloa',
            body: 'RFC 7030 enrollment gailuen ziurtagiri hornidura automatikorako — eskuzko pausurik gabe, scriptsik gabe, giza errorik gabe.',
            points: ['Eskuhartzarik gabeko hornidura eskalan', 'RFC 7030 EST bezero edozinekin bateragarria', 'Re-enrollamendu eta berritzeen automatizazioa'],
          },
          {
            title: 'Gakoen kudeaketa',
            body: 'Motor kriptografiko konektagarriak gako pribatuak zure segurtasun-politikak eskatzen duen lekuan gordetzeko — hardware edo hodeian.',
            points: ['AWS KMS, PKCS#11 HSM eta HashiCorp Vault euskarria', 'Software-motorra garapen eta probetarako', 'Gako-esportaziorik ez — gakoak ez dira HSMetik ateratzen'],
          },
          {
            title: 'Iragazketa aurreratua',
            body: 'Iragazki eta ordenatu JSONPath adierazpenekin baliabide eta ziurtagiri eremu guztietan zehaztasun handiko kontsulta operatiboetarako.',
            points: ['JSONPath kontsultak baliabide mota guztien gainean', 'Konbinatu baldintza anitzak emaitza zehatzetarako', 'Iragazitako datuen esportazioa auditoria prest'],
          },
          {
            title: 'Cloud konektoreak',
            body: 'AWS IoT Core-rekin integrazio natiboa eta edozein plataforma edo hodeirako konektore-eredu hedagarria, kode-itsaskirik gabe.',
            points: ['AWS IoT Corerekin sinkronizazio natiboa', 'API hedagarria konektore pertsonalizatuak eraikitzeko', 'Gertaeretan oinarritutako integrazioa zure pipelineekin'],
          },
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
