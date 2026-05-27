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
      title: 'Lamassu IoT | Industrial device security without operational friction',
    },
    home: {
      hero: {
        kicker: 'Industrial device security',
        title: 'Industrial PKI to manage IoT identities end to end',
        lead:
          'Lamassu gives CISOs and OT directors complete control over industrial device identity: automatic onboarding, managed lifecycle and instant incident response — without stopping operations.',
        ctaPrimary: 'Request a demo',
        ctaSecondary: 'Success stories',
        stackAria: 'Industries served',
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
          eyebrow: 'Take the first step',
          heading: 'Ready to see how Lamassu protects your industrial fleet?',
          btn: 'Request a demo',
        },
        right: {
          eyebrow: 'Newsletter',
          heading: 'Sign up and receive product updates and news from Lamassu.',
          inputPlaceholder: 'your@email.com',
          submitLabel: 'Subscribe',
        },
      },
      features: {
        title: 'Five problems Lamassu solves',
        items: [
          {
            tag: 'Device onboarding',
            title: 'Thousands of devices ready for production, without manual work',
            body: 'Every device receives its cryptographic identity at the moment it leaves the factory or arrives in the field — no scripts, no SSH access, no support queues.',
            points: [
              'Automatic onboarding from factory to field',
              'No per-device manual tasks',
              'Scales from 10 to 10,000 devices without changing the process',
            ],
            link: 'How it works',
          },
          {
            tag: 'Post-Quantum Cryptography',
            title: 'Ready for the post-quantum world',
            body: 'Issue pure and hybrid post-quantum certificates today — protecting your industrial assets before quantum computers threaten classical cryptography.',
            points: [
              'NIST post-quantum algorithms (ML-DSA, SLH-DSA)',
              'Hybrid certificates for gradual, compatibility-safe migration',
              'Transition without disrupting current operations',
            ],
            link: 'Explore PQC',
          },
          {
            tag: 'Regulatory compliance',
            title: 'NIS2, IEC 62443 and data sovereignty',
            body: 'Lamassu deploys on-prem, in a private cloud or in air-gapped environments. Your private keys never leave your infrastructure and audit evidence is built in.',
            points: [
              'On-prem, private cloud or air-gapped to match your policy',
              'Exportable audit evidence at any time',
              'No cloud vendor dependency for your keys',
            ],
            link: 'Deployment models',
          },
          {
            tag: 'Incident response',
            title: 'Revoke a compromised device in seconds',
            body: 'When an asset is stolen, compromised or decommissioned, its identity is immediately invalidated across the entire fleet — no open risk windows.',
            points: [
              'Immediate revocation, propagated fleet-wide',
              'No risk window between incident and decommission',
              'Traceable audit trail of every security decision',
            ],
            link: 'Identity management',
          },
          {
            tag: 'Continuous operations',
            title: 'Zero downtime from expired certificates',
            body: 'Certificate renewal, rotation and revocation happen automatically. Your operations team never gets paged about expired certificates in production.',
            points: [
              'Automatic renewal before expiry',
              'Real-time visibility across the entire fleet',
              'Bulk operations without interrupting production',
            ],
            link: 'See details',
          },
        ],
      },
      capabilities: {
        title: 'How it works',
        listAria: 'How Lamassu works step by step',
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
            body: 'Enrollment for automatic certificate provisioning on any device — no manual steps, no scripts, no human error.',
            points: ['Zero-touch provisioning at scale', 'Compatible with any standard EST client', 'Re-enrollment and renewal automation'],
          },
          {
            title: 'Key management',
            body: 'Pluggable cryptographic engines let you store private keys exactly where your security policy requires — hardware or cloud.',
            points: ['Hardware security modules and cloud KMS support', 'Software engine for development and testing', 'No key export — keys never leave the HSM'],
          },
          {
            title: 'Advanced filtering',
            body: 'Filter and sort across all resources and certificate fields for precise operational queries and audit-ready exports.',
            points: ['Rich query support across all resource types', 'Combine multiple conditions for precise results', 'Audit-ready export of filtered datasets'],
          },
          {
            title: 'Cloud connectors',
            body: 'Native AWS IoT Core integration and an extensible connector model so you can reach any platform or cloud without custom glue code.',
            points: ['Native AWS IoT Core synchronization', 'Extensible API to build custom connectors', 'Event-driven integration with your data pipelines'],
          },
        ],
      },
      cases: {
        title: 'Deploy as you need, comply as required',
        subtitle:
          'Lamassu adapts to your operational environment and the regulatory frameworks of your industry — no platform lock-in, no compromise on sovereignty.',
        rows: [
          {
            title: 'Managed SaaS, on-prem or air-gapped',
            body: 'Choose the deployment model that fits your security policy. Your private keys never leave your infrastructure if that is what you require.',
          },
          {
            title: 'Built-in regulatory compliance',
            body:
              'Audit controls, traceable logs and lifecycle management are designed to satisfy NIS2, IEC 62443 and ISO 27001 requirements without extra effort from your team.',
          },
          {
            title: 'Integrate what you already use',
            body:
              'Connect to your CMDB, SIEM, cloud platforms and manufacturing tools without replacing what already works in production.',
          },
        ],
      },
      references: {
        title: 'Success stories in energy and connected industry',
        subtitle:
          'Real references where Lamassu reduced operational friction and improved security posture in OT and IoT environments.',
        eyebrow: 'OUR CUSTOMERS, OUR BEST REFERENCE',
        cta: 'View dedicated page',
        cards: [
          {
            sector: 'Rail',
            title: 'Rolling stock and signaling',
            highlight: '24x7 cryptographic continuity in operation',
            body: 'Device security for trains, stations and track systems with segmentation by line, operator or region.',
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
      title: 'Lamassu IoT | Seguridad industrial para activos conectados',
    },
    home: {
      hero: {
        kicker: 'Seguridad industrial para activos conectados',
        title: 'PKI industrial para gestionar identidades IoT de extremo a extremo',
        lead:
          'Lamassu da a CISOs y directores de OT control completo sobre la identidad de sus dispositivos industriales: alta automática, ciclo de vida gestionado y respuesta inmediata ante incidentes, sin detener la operación.',
        ctaPrimary: 'Solicitar demo',
        ctaSecondary: 'Ver casos de éxito',
        stackAria: 'Sectores donde operamos',
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
              'Los grupos, etiquetas y autoridades de registro permiten organizar flotas de cualquier tamaño, desde prototipos en laboratorio hasta líneas de producción completas, manteniendo trazabilidad y control de acceso por contexto.',
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
          eyebrow: 'Da el primer paso',
          heading: '¿Listo para ver cómo Lamassu protege tu flota industrial?',
          btn: 'Solicitar demo',
        },
        right: {
          eyebrow: 'Newsletter',
          heading: 'Suscríbete y recibe actualizaciones del producto y novedades de Lamassu.',
          inputPlaceholder: 'tu@email.com',
          submitLabel: 'Suscribirse',
        },
      },
      features: {
        title: 'Cinco problemas que Lamassu resuelve',
        items: [
          {
            tag: 'Alta de dispositivos',
            title: 'Miles de dispositivos listos para producción, sin trabajo manual',
            body: 'Cada dispositivo recibe su identidad en el momento en que sale de fábrica o llega a campo. Sin scripts, sin acceso SSH, sin colas de soporte.',
            points: [
              'Alta automática desde fábrica hasta campo',
              'Sin tareas manuales por dispositivo',
              'Escala de 10 a 10.000 dispositivos sin cambiar el proceso',
            ],
            link: 'Cómo funciona',
          },
          {
            tag: 'Criptografía post-cuántica',
            title: 'Preparado para el mundo post-cuántico',
            body: 'Emite certificados post-cuánticos puros e híbridos hoy — para proteger tus activos industriales antes de que los ordenadores cuánticos amenacen la criptografía clásica.',
            points: [
              'Algoritmos post-cuánticos NIST (ML-DSA, SLH-DSA)',
              'Certificados híbridos para migración gradual sin romper compatibilidad',
              'Transición sin interrumpir la operación actual',
            ],
            link: 'Explorar PQC',
          },
          {
            tag: 'Cumplimiento normativo',
            title: 'NIS2, IEC 62443 y soberanía de datos',
            body: 'Lamassu se despliega on-prem, en nube privada o en entornos air-gapped. Tus claves privadas nunca salen de tu infraestructura y las evidencias de auditoría vienen incorporadas.',
            points: [
              'On-prem, nube privada o air-gapped según tu política',
              'Evidencias de auditoría exportables en cualquier momento',
              'Sin dependencia de proveedores cloud para tus claves',
            ],
            link: 'Modelos de despliegue',
          },
          {
            tag: 'Respuesta a incidentes',
            title: 'Revoca un dispositivo comprometido en segundos',
            body: 'Cuando un activo es robado, comprometido o dado de baja, su identidad queda invalidada de forma inmediata en toda la flota. Sin ventanas de riesgo abiertas.',
            points: [
              'Revocación inmediata, propagada a toda la flota',
              'Sin ventana de riesgo entre el incidente y la baja',
              'Historial trazable de cada decisión de seguridad',
            ],
            link: 'Gestión de identidades',
          },
          {
            tag: 'Operación continua',
            title: 'Cero interrupciones por certificados caducados',
            body: 'La renovación, rotación y revocación de certificados ocurren de forma automática. Tu equipo operativo no gestiona caducidades ni recibe alertas por certificados expirados en producción.',
            points: [
              'Renovación automática antes de la caducidad',
              'Visibilidad en tiempo real de toda la flota',
              'Operaciones masivas sin interrumpir la producción',
            ],
            link: 'Ver detalles',
          },
        ],
      },
      capabilities: {
        title: 'Cómo funciona',
        listAria: 'Cómo funciona Lamassu paso a paso',
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
            title: 'Aprovisionamiento automático',
            body: 'Alta automática de certificados en cualquier dispositivo — sin pasos manuales, sin scripts, sin error humano.',
            points: ['Aprovisionamiento sin intervención humana a escala', 'Compatible con cualquier cliente estándar', 'Automatización de re-enrolamiento y renovación'],
          },
          {
            title: 'Gestión de claves',
            body: 'Motores criptográficos conectables para custodiar claves privadas exactamente donde tu política de seguridad lo exige — hardware o nube.',
            points: ['Soporte para HSMs hardware y KMS en nube', 'Motor software para desarrollo y pruebas', 'Sin exportación de claves — nunca salen del HSM'],
          },
          {
            title: 'Filtrado avanzado',
            body: 'Filtra y ordena sobre todos los recursos y campos de certificados para consultas operativas de alta precisión y exportaciones listas para auditoría.',
            points: ['Consultas ricas sobre todos los tipos de recursos', 'Combina múltiples condiciones para resultados precisos', 'Exportación de datos filtrados lista para auditoría'],
          },
          {
            title: 'Conectores cloud',
            body: 'Integración nativa con AWS IoT Core y un modelo de conectores extensible para conectar cualquier plataforma o nube sin código de pegamento.',
            points: ['Sincronización nativa con AWS IoT Core', 'API extensible para construir conectores propios', 'Integración orientada a eventos con tus pipelines de datos'],
          },
        ],
      },
      cases: {
        title: 'Despliega como necesitas, cumple lo que exigen',
        subtitle:
          'Lamassu se adapta a tu entorno operativo y a los marcos normativos de tu industria — sin lock-in de plataforma, sin comprometer la soberanía de tus datos.',
        rows: [
          {
            title: 'SaaS gestionado, on-prem o air-gapped',
            body: 'Elige el modelo de despliegue que se ajusta a tu política de seguridad. Las claves privadas nunca salen de tu infraestructura si así lo requieres.',
          },
          {
            title: 'Cumplimiento normativo integrado',
            body:
              'Los controles de auditoría, los registros trazables y la gestión de ciclo de vida están diseñados para satisfacer las exigencias de NIS2, IEC 62443 e ISO 27001 sin trabajo extra.',
          },
          {
            title: 'Integra lo que ya usas',
            body:
              'Conéctate a tu CMDB, SIEM, plataformas cloud y herramientas de fabricación sin remplazar lo que ya funciona en producción.',
          },
        ],
      },
      references: {
        title: 'Casos de éxito en energía e industria conectada',
        subtitle:
          'Referencias reales donde Lamassu redujo la fricción operativa y elevó la postura de seguridad en entornos OT e IoT.',
        eyebrow: 'NUESTROS CLIENTES, NUESTRA MEJOR REFERENCIA',
        cta: 'Ver página dedicada',
        cards: [
          {
            sector: 'Ferroviario',
            title: 'Material rodante y señalización',
            highlight: 'Continuidad operativa en servicio 24x7',
            body: 'Seguridad de dispositivos para trenes, estaciones y sistemas de vía con segmentación por línea, operador o región.',
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
      title: 'Lamassu IoT | Aktibo konektatuen segurtasun industriala',
    },
    home: {
      hero: {
        kicker: 'Aktibo konektatuen segurtasun industriala',
        title: 'IoT identitateak mutur batetik bestera kudeatzeko PKI industriala',
        lead:
          'Lamassuk CISOei eta OT zuzendariei kontrol osoa ematen die industria-gailuen identitatearen gainean: alta automatikoa, kudeatutako bizi-zikloa eta berehalako erantzuna gertakariei, eragiketak gelditu gabe.',
        ctaPrimary: 'Demo eskatu',
        ctaSecondary: 'Arrakasta kasuak ikusi',
        stackAria: 'Aritzen garen sektoreak',
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
              'Taldeek, etiketek eta erregistro agintariek edozein tamainatako flotak antolatzeko aukera ematen dute, laborategi-prototipoetatik ekoizpen-lerro osoetara arte, trazabilitatea eta testuinguruaren araberako sarbide-kontrola mantenduz.',
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
          eyebrow: 'Eman lehen urratsa',
          heading: 'Prest al zaude Lamassuk zure flota industriala nola babesten duen ikusteko?',
          btn: 'Demo eskatu',
        },
        right: {
          eyebrow: 'Newsletter',
          heading: 'Harpidetu eta jaso produktuaren eguneratzeak eta Lamassu-ren berriak.',
          inputPlaceholder: 'zure@email.com',
          submitLabel: 'Harpidetu',
        },
      },
      features: {
        title: 'Lamassuk konpontzen dituen bost arazo',
        items: [
          {
            tag: 'Gailuen alta',
            title: 'Milaka gailu ekoizpenerako prest, eskuzko lanik gabe',
            body: 'Gailu bakoitzak bere identitatea jasotzen du fabrikatik irten edo eremuara iritsi bezain laster. Scriptik gabe, SSH sarbiderik gabe, laguntza-ilarik gabe.',
            points: [
              'Alta automatikoa fabrikatik eremuara',
              'Eskuzko lanik ez gailu bakoitzeko',
              '10etik 10.000 gailura eskala daiteke prozesua aldatu gabe',
            ],
            link: 'Nola funtzionatzen duen',
          },
          {
            tag: 'Kriptografia post-kuantikoa',
            title: 'Mundu post-kuantikoan prest',
            body: 'Emititu ziurtagiri post-kuantiko puruak eta hibridoak gaur — zure aktibo industrialak babesteko ordenagailu kuantikoek kriptografia klasikoa mehatxatzen aurretik.',
            points: [
              'NIST algoritmo post-kuantikoak (ML-DSA, SLH-DSA)',
              'Ziurtagiri hibridoak bateragarritasuna mantenduz migrazio gradualerako',
              'Trantsizio eragiketak eten gabe',
            ],
            link: 'PQC esploratu',
          },
          {
            tag: 'Arau betetzea',
            title: 'NIS2, IEC 62443 eta datuen subiranotasuna',
            body: 'Lamassu on-prem, hodei pribatuan edo air-gapped inguruneetan hedatzen da. Zure gako pribatuak ez dira zure azpiegituratik ateratzen eta auditoria-ebidentziak barnean daude.',
            points: [
              'On-prem, hodei pribatua edo air-gapped zure politikaren arabera',
              'Auditoria-ebidentziak esportatzeko edozein unetan',
              'Ez cloud hornitzaileekiko menpekotasunik zure gakoentzat',
            ],
            link: 'Hedapen-ereduak',
          },
          {
            tag: 'Gertakariei erantzuna',
            title: 'Konpromisatutako gailu bat segundotan ezezta ezazu',
            body: 'Aktibo bat lapurtzen, konpromisatzen edo bajatzen denean, bere identitatea berehalakoan baliogabetzen da flota osoan. Arrisku-leiho irekiak gabe.',
            points: [
              'Berehalako ezeztapena, flota osoan zabaldu',
              'Arrisku-leiho gabe gertakaria eta baja artean',
              'Segurtasun-erabaki bakoitzaren historia trazagarria',
            ],
            link: 'Identitateen kudeaketa',
          },
          {
            tag: 'Eragiketa jarraitua',
            title: 'Zero etekin iraungitako ziurtagirien ondorioz',
            body: 'Ziurtagirien berritzea, errotazioa eta ezeztapena automatikoki gertatzen dira. Zure eragiketa-taldeak ez du iraungitako ziurtagiriengatik alertarik jasotzen ekoizpenean.',
            points: [
              'Berritzea automatikoa iraungitze aurretik',
              'Denbora errealeko ikusgarritasuna flota osoan',
              'Eragiketa masiboa ekoizpena eten gabe',
            ],
            link: 'Xehetasunak ikusi',
          },
        ],
      },
      capabilities: {
        title: 'Nola funtzionatzen duen',
        listAria: 'Lamassuk nola funtzionatzen duen urrats bakoitzean',
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
            title: 'Hornidura automatikoa',
            body: 'Gailuen ziurtagiri hornidura automatikoa — eskuzko pausurik gabe, scriptsik gabe, giza errorik gabe.',
            points: ['Eskuhartzarik gabeko hornidura eskalan', 'Edozein bezero estandarrekin bateragarria', 'Re-enrollamendu eta berritzeen automatizazioa'],
          },
          {
            title: 'Gakoen kudeaketa',
            body: 'Motor kriptografiko konektagarriak gako pribatuak zure segurtasun-politikak eskatzen duen lekuan gordetzeko — hardware edo hodeian.',
            points: ['Hardware HSM eta cloud KMS euskarria', 'Software-motorra garapen eta probetarako', 'Gako-esportaziorik ez — gakoak ez dira HSMetik ateratzen'],
          },
          {
            title: 'Iragazketa aurreratua',
            body: 'Iragazki eta ordenatu baliabide eta ziurtagiri eremu guztietan zehaztasun handiko kontsulta operatiboetarako eta auditoria prest esportazioetarako.',
            points: ['Kontsulta aberatsak baliabide mota guztien gainean', 'Konbinatu baldintza anitzak emaitza zehatzetarako', 'Iragazitako datuen esportazioa auditoria prest'],
          },
          {
            title: 'Cloud konektoreak',
            body: 'AWS IoT Core-rekin integrazio natiboa eta edozein plataforma edo hodeirako konektore-eredu hedagarria, kode-itsaskirik gabe.',
            points: ['AWS IoT Corerekin sinkronizazio natiboa', 'API hedagarria konektore pertsonalizatuak eraikitzeko', 'Gertaeretan oinarritutako integrazioa zure pipelineekin'],
          },
        ],
      },
      cases: {
        title: 'Behar duzun bezala hedatu, eskakizunak bete',
        subtitle:
          'Lamassu zure ingurune operatiboaren eta industriako arau-markoaren arabera egokitzen da — plataforma lock-in gabe, datuen subiranotasuna arriskuan jarri gabe.',
        rows: [
          {
            title: 'SaaS kudeatua, on-prem edo air-gapped',
            body: 'Aukeratu zure segurtasun-politikara egokitzen den hedapen-eredua. Gako pribatuak ez dira zure azpiegituratik ateratzen hala eskatuz gero.',
          },
          {
            title: 'Araudi-betetzea barnean',
            body:
              'Auditoria-kontrolak, erregistro trazagarriak eta bizi-zikloaren kudeaketa NIS2, IEC 62443 eta ISO 27001-en eskakizunak betetzeko diseinatuta daude, zure taldearen lan gehigarririk gabe.',
          },
          {
            title: 'Jada erabiltzen duzuna integratu',
            body:
              'Konektatu zure CMDB, SIEM, cloud plataformak eta fabrikazio-tresnak ekoizpenean dagoeneko funtzionatzen duena ordezkatu gabe.',
          },
        ],
      },
      references: {
        title: 'Energiako eta industria konektatuko arrakasta kasuak',
        subtitle:
          'Lamassuk OT eta IoT inguruneetan frikzio operatiboa murriztu eta segurtasun-jarrera hobetu duen erreferentzia errealak.',
        eyebrow: 'GURE BEZEROAK, GURE ERREFERENTZIARIK ONENA',
        cta: 'Ikusi dagokion orria',
        cards: [
          {
            sector: 'Ferroviarioa',
            title: 'Material mugikorra eta seinaleztapena',
            highlight: '24x7 eragiketan jarraitutasun operatiboa',
            body: 'Gailuen segurtasuna trenetarako, geltokietarako eta bide-sistemetarako, linea, operadore edo eskualdeka segmentatuta.',
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
