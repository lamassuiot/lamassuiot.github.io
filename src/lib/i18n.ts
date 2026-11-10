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
        pqc: 'Post-quantum',
        automation: 'Automation',
        deployment: 'Deployment',
        cases: 'Case studies',
        docs: 'Docs',
        arch: 'Arch',
      },
      githubAria: 'Lamassu GitHub',
      themeToggleAria: 'Toggle theme',
      ctaTalk: 'Talk to experts',
      ctaLogin: 'Log in',
    },
    footer: {
      "aria": "Lamassu footer",
      "navigationAria": "Footer navigation",
      "tagline": "Open PKI for every connected device.",
      "principle": "Open source. Open standards.",
      "backToTop": "Back to top",
      "navigation": [
        {
          "title": "Platform",
          "links": [
            {
              "label": "Certificate authorities",
              "href": "/#pki"
            },
            {
              "label": "Device identity",
              "href": "/#automation"
            },
            {
              "label": "Key custody",
              "href": "/#keys"
            },
            {
              "label": "Post-quantum",
              "href": "/#pqc"
            },
            {
              "label": "Deployment",
              "href": "/#deployment"
            }
          ]
        },
        {
          "title": "Developers",
          "links": [
            {
              "label": "Documentation",
              "href": "https://www.lamassu.io/docs/"
            },
            {
              "label": "Architecture",
              "href": "/arch/"
            },
            {
              "label": "Source code",
              "href": "https://github.com/lamassuiot"
            }
          ]
        },
        {
          "title": "Industries",
          "links": [
            {
              "label": "Railway",
              "href": "/ferroviario/"
            },
            {
              "label": "Connected hospitality",
              "href": "/hosteleria-conectada/"
            },
            {
              "label": "Energy & batteries",
              "href": "/energia-baterias/"
            },
            {
              "label": "Cranes",
              "href": "/gruas/"
            },
            {
              "label": "Connected access",
              "href": "/puertas-de-acceso-conectadas/"
            }
          ]
        },
        {
          "title": "Connect",
          "links": [
            {
              "label": "info@lamassu.io",
              "href": "mailto:info@lamassu.io"
            },
            {
              "label": "Open the console",
              "href": "https://lab.lamassu.io"
            },
            {
              "label": "LinkedIn",
              "href": "https://www.linkedin.com/company/lks-next"
            }
          ]
        }
      ],

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
        pqc: 'Post-cuántica',
        automation: 'Automatización',
        deployment: 'Despliegue',
        cases: 'Casos de estudio',
        docs: 'Docs',
        arch: 'Arch',
      },
      githubAria: 'GitHub de Lamassu',
      themeToggleAria: 'Cambiar tema',
      ctaTalk: 'Habla con expertos',
      ctaLogin: 'Inicia sesión',
    },
    footer: {
      "aria": "Pie de página de Lamassu",
      "navigationAria": "Navegación del pie de página",
      "tagline": "Una PKI abierta para cada dispositivo conectado.",
      "principle": "Código abierto. Estándares abiertos.",
      "backToTop": "Volver arriba",
      "navigation": [
        {
          "title": "Plataforma",
          "links": [
            {
              "label": "Autoridades de certificación",
              "href": "/#pki"
            },
            {
              "label": "Identidad de dispositivos",
              "href": "/#automation"
            },
            {
              "label": "Custodia de claves",
              "href": "/#keys"
            },
            {
              "label": "Post-cuántica",
              "href": "/#pqc"
            },
            {
              "label": "Despliegue",
              "href": "/#deployment"
            }
          ]
        },
        {
          "title": "Desarrolladores",
          "links": [
            {
              "label": "Documentación",
              "href": "https://www.lamassu.io/docs/es/"
            },
            {
              "label": "Arquitectura",
              "href": "/arch/"
            },
            {
              "label": "Código fuente",
              "href": "https://github.com/lamassuiot"
            }
          ]
        },
        {
          "title": "Sectores",
          "links": [
            {
              "label": "Ferroviario",
              "href": "/ferroviario/"
            },
            {
              "label": "Hostelería conectada",
              "href": "/hosteleria-conectada/"
            },
            {
              "label": "Energía y baterías",
              "href": "/energia-baterias/"
            },
            {
              "label": "Grúas",
              "href": "/gruas/"
            },
            {
              "label": "Accesos conectados",
              "href": "/puertas-de-acceso-conectadas/"
            }
          ]
        },
        {
          "title": "Contacto",
          "links": [
            {
              "label": "info@lamassu.io",
              "href": "mailto:info@lamassu.io"
            },
            {
              "label": "Acceder a la consola",
              "href": "https://lab.lamassu.io"
            },
            {
              "label": "LinkedIn",
              "href": "https://www.linkedin.com/company/lks-next"
            }
          ]
        }
      ],

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
        pqc: 'Post-kuantikoa',
        automation: 'Automatizazioa',
        deployment: 'Hedapena',
        cases: 'Azterketa kasuak',
        docs: 'Docs',
        arch: 'Arch',
      },
      githubAria: 'Lamassuren GitHub',
      themeToggleAria: 'Aldatu gaia',
      ctaTalk: 'Hitz egin adituekin',
      ctaLogin: 'Hasi saioa',
    },
    footer: {
      "aria": "Lamassuren orri-oina",
      "navigationAria": "Orri-oinaren nabigazioa",
      "tagline": "PKI irekia konektatutako gailu bakoitzarentzat.",
      "principle": "Kode irekia. Estandar irekiak.",
      "backToTop": "Itzuli gora",
      "navigation": [
        {
          "title": "Plataforma",
          "links": [
            {
              "label": "Ziurtapen-agintariak",
              "href": "/#pki"
            },
            {
              "label": "Gailuen identitatea",
              "href": "/#automation"
            },
            {
              "label": "Gakoen zaintza",
              "href": "/#keys"
            },
            {
              "label": "Post-kuantikoa",
              "href": "/#pqc"
            },
            {
              "label": "Hedapena",
              "href": "/#deployment"
            }
          ]
        },
        {
          "title": "Garatzaileak",
          "links": [
            {
              "label": "Dokumentazioa",
              "href": "https://www.lamassu.io/docs/"
            },
            {
              "label": "Arkitektura",
              "href": "/arch/"
            },
            {
              "label": "Iturburu-kodea",
              "href": "https://github.com/lamassuiot"
            }
          ]
        },
        {
          "title": "Sektoreak",
          "links": [
            {
              "label": "Trenbidea",
              "href": "/ferroviario/"
            },
            {
              "label": "Ostalaritza konektatua",
              "href": "/hosteleria-conectada/"
            },
            {
              "label": "Energia eta bateriak",
              "href": "/energia-baterias/"
            },
            {
              "label": "Garabiak",
              "href": "/gruas/"
            },
            {
              "label": "Sarbide konektatuak",
              "href": "/puertas-de-acceso-conectadas/"
            }
          ]
        },
        {
          "title": "Kontaktua",
          "links": [
            {
              "label": "info@lamassu.io",
              "href": "mailto:info@lamassu.io"
            },
            {
              "label": "Ireki kontsola",
              "href": "https://lab.lamassu.io"
            },
            {
              "label": "LinkedIn",
              "href": "https://www.linkedin.com/company/lks-next"
            }
          ]
        }
      ],

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

// Home copy. Product claims follow the docs at /docs (lamassu docs repo); the
// post-quantum and CMP sections describe early-access features not covered there yet.
// Doc links are per locale: English has no prefix, Spanish lives under /docs/es/,
// Basque falls back to the English docs.
export const homeTranslations = {
  en: {
    meta: {
      title: 'Lamassu | Open PKI for IoT and industrial device identity',
    },
    home: {
      docs: {
        pki: 'https://www.lamassu.io/docs/platform/pki/overview',
        enrollment: 'https://www.lamassu.io/docs/platform/iot-fleets/enrollment/overview',
        keys: 'https://www.lamassu.io/docs/platform/pki/key-management',
      },
      hero: {
        announceTag: 'Preview',
        announce: 'Post-quantum certificates in early access',
        title: 'Trusted identity for every',
        titleMark: 'connected device',
        lead:
          'Lamassu is an open PKI for IoT and industrial fleets. Create your certificate authorities, enrol devices over EST and manage every X.509 identity — issuance, renewal and revocation — with keys in the HSM or KMS you choose.',
        ctaPrimary: 'Talk to an expert',
        ctaSecondary: 'See deployment options',
        proofAria: 'Key facts about Lamassu',
        proof: ['CAs, profiles, CRL & OCSP', 'Enrolment and renewal over EST', 'Keys in HSM, AWS KMS, Azure or Vault', 'SaaS, AWS or Kubernetes'],
        imageAlt: 'Lamassu console showing the managed device inventory',
        toasts: ['Device enrolled via EST', 'Certificate revoked · MQTT session closed'],
      },
      logos: {
        aria: 'Companies working with Lamassu',
        title: 'Industrial companies that trust Lamassu with their device identity',
      },
      platform: {
        label: 'The platform',
        title: 'A',
        titleMark: 'complete PKI',
        titleEnd: 'for your device identity',
        lead:
          'Lamassu ties together a root of trust, an issuance policy and every device that has to prove who it is. All in one console and one API, with access control and traceability.',
        items: [
          {
            title: 'Certificate authorities',
            body: 'Root and intermediate hierarchies, created or imported, and profiles that decide what gets issued and for how long.',
            link: 'Explore the PKI',
            href: '#pki',
          },
          {
            title: 'Device identity',
            body: 'Enrolment over EST, the state of every device and renewal windows set fleet by fleet.',
            link: 'See device enrolment',
            href: '#automation',
          },
          {
            title: 'Key custody',
            body: 'Seven kinds of crypto engine, from HSMs to AWS KMS or Azure Key Vault, running side by side.',
            link: 'See the engines',
            href: '#keys',
          },
        ],
      },
      pki: {
        label: 'PKI',
        title: 'Certificate authorities',
        lead:
          'Build your hierarchy from the root or import the CAs you already run. Issuance profiles set validity, usages and allowed algorithms, and every CA publishes its revocation status.',
        cta: 'Explore the PKI',
        features: [
          {
            tag: 'Hierarchy & rotation',
            body: 'Root and intermediate CAs, reissue on the same key or rotate to a successor CA, with the whole lineage linked and visible as a tree or a graph.',
            link: 'Hierarchy and rotation',
            href: 'https://www.lamassu.io/docs/platform/pki/ca-hierarchy-and-rotation',
          },
          {
            tag: 'Issuance profiles',
            body: 'Templates for IoT devices, TLS servers or code signing that fix validity, key usages and which algorithms and sizes are accepted.',
            link: 'Certificate profiles',
            href: 'https://www.lamassu.io/docs/platform/pki/certificate-profiles',
          },
          {
            tag: 'CRL & OCSP',
            body: 'Every CA publishes its CRL and answers OCSP per RFC 6960. And from the browser you can inspect, validate and zlint any certificate.',
            link: 'Certificate validation',
            href: 'https://www.lamassu.io/docs/platform/pki/certificate-validation',
          },
        ],
      },
      devices: {
        label: 'IoT fleets',
        title: 'Device identity',
        lead:
          'Each fleet has its own registration authority (DMS): it decides how a device authenticates, how it enrols and when it must renew. Your devices speak open standards, with no proprietary agents.',
        protocols: ['EST · RFC 7030 · Available', 'CMP · RFC 9483 · Early access'],
        cta: 'How a device enrols',
        features: [
          {
            tag: 'Enrolment over EST',
            body: 'RFC 7030 endpoints per fleet: /cacerts, /simpleenroll, /simplereenroll and /serverkeygen. Authenticate with a factory certificate, an authorization webhook or both.',
            link: 'EST reference',
            href: 'https://www.lamassu.io/docs/platform/iot-fleets/enrollment/est-reference',
          },
          {
            tag: 'Renewal by policy',
            body: 'Renewal windows and warning thresholds per fleet: the device re-enrols before it expires, and you see which state each one is in.',
            link: 'Renewal and recovery',
            href: 'https://www.lamassu.io/docs/platform/iot-fleets/enrollment/renewal-and-recovery',
          },
          {
            tag: 'Groups & states',
            body: 'Dynamic groups by tags and metadata, identity history and an event timeline for every device.',
          },
        ],
      },
      keys: {
        label: 'KMS',
        title: 'Key custody',
        lead:
          'Your CA private keys live wherever your policy requires. Connect several engines at once and choose the custody level CA by CA.',
        cta: 'See the crypto engines',
        features: [
          {
            tag: 'Hardware & cloud KMS',
            body: 'HSMs over PKCS#11, AWS KMS and Azure Key Vault Keys: the key does not need to leave the module to sign.',
          },
          {
            tag: 'Key access control',
            body: 'Control who can access and operate with your keys. Integrate via API and the PKCS#11 client.',
          },
          {
            tag: 'Bring your own key',
            body: 'Import existing keys, generate CSRs from KMS keys and combine several engines, even of the same type.',
          },
        ],
      },
      pqc: {
        badge: 'Experimental · Early access',
        title: 'Start your post-quantum migration.',
        titleMuted: 'Before it becomes urgent.',
        lead:
          "Quantum computers able to break RSA and ECC don't exist yet, but the devices you deploy this year will still be running when they arrive. Lamassu lets you issue post-quantum certificates today, so your teams can measure the impact, validate compatibility and plan the migration with real data, not assumptions.",
        certs: [
          {
            tag: 'Today',
            name: 'Classic',
            body: 'RSA and ECDSA certificates for everything already in production. Fully supported.',
          },
          {
            tag: 'Transition',
            name: 'Hybrid',
            body: 'One certificate, two signatures — classic and post-quantum — bound together following the emerging IETF standard. It stays secure as long as either algorithm holds.',
          },
          {
            tag: 'Destination',
            name: 'Pure post-quantum',
            body: 'ML-DSA or SLH-DSA only, as standardised by NIST. For new ecosystems where you control both ends, and to prove your stack is ready.',
          },
        ],
        points: [
          {
            title: 'Harvest now, decrypt later',
            body: 'An attacker can record traffic today and break it tomorrow. Long-lived assets and secrets are already exposed.',
          },
          {
            title: 'Migration by policy, not by truck roll',
            body: 'Because devices renew through the same flows, moving a product line to post-quantum certificates becomes a profile change, not a field campaign.',
          },
          {
            title: 'No surprises in 2030',
            body: 'Post-quantum keys and signatures are larger. Testing now reveals which devices, links and firmware need attention while there is still time to plan.',
          },
        ],
        note:
          'Post-quantum support is experimental and offered in early access for pilots. It follows NIST standards and IETF drafts that are still being finalised. For now, post-quantum keys are protected in software, until HSM and cloud KMS vendors support these algorithms.',
        ctaPrimary: 'Request a PQC pilot',
      },
      whyNow: {
        label: 'Why now',
        title: 'Your certificates are racing three clocks',
        lead:
          'Certificates live shorter lives, regulation turns device security into a condition of sale, and the cryptography in today’s certificates has its own expiry date. Any one of them makes a manual PKI unsustainable. Together, they make it a board-level risk.',
        items: [
          {
            value: '47 days',
            label: 'Maximum lifetime of a public TLS certificate in 2029',
            body: 'The industry has voted to cut public certificate validity from 398 to 47 days. Renewals multiply eightfold, and the same pressure is already reaching private and device PKIs. Spreadsheets and reminders break down long before that.',
            source: 'CA/Browser Forum · Ballot SC-081 (2025)',
          },
          {
            value: 'Dec 2027',
            label: 'Cyber Resilience Act (CRA) fully applies',
            body: 'Every product with digital elements sold in the EU must be secure by design: unique identities, protected communications, secure updates. Vulnerability-reporting obligations already apply from September 2026.',
            source: 'Regulation (EU) 2024/2847',
          },
          {
            value: '2030',
            label: 'RSA and ECC start being phased out',
            body: 'Transition plans on both sides of the Atlantic start deprecating quantum-vulnerable algorithms in 2030 and retire them by 2035. A device you ship this year will still be in the field when that happens.',
            source: 'NIST IR 8547 · Coordinated EU PQC roadmap (2025)',
          },
        ],
        closing:
          'The only sustainable answer is a PKI that runs the whole certificate lifecycle and can change its cryptography fleet by fleet. That is what Lamassu is built for.',
      },
      ops: {
        label: 'Operations & governance',
        title: 'For the people who run it and the people who audit it',
        lead: 'Security sets the rules, operations applies them and audit can follow every step, from the same platform.',
        tiles: [
          {
            title: 'One console for the whole PKI',
            body: 'CAs as a table, a hierarchy or a key graph; certificates, devices and fleets, with their state, in a single view.',
          },
          {
            title: 'Open by design',
            body: 'Open source, IETF standards and a REST API documented with OpenAPI. No proprietary agent on your devices.',
          },
          {
            title: 'Policy-based access',
            body: 'Users from your OIDC provider or X.509 certificates, policies that deny by default and listings filtered by who is asking.',
          },
          {
            title: 'Audit & alerts',
            body: 'Every change to CAs, certificates, keys and devices emits an event with who, what and the outcome. Notifications by email, Microsoft Teams or webhook.',
          },
          {
            title: 'AWS IoT Core, built in',
            body: 'Register your CAs in AWS IoT, create Things and policies at enrolment, and drop a device’s MQTT session as soon as it is revoked.',
          },
        ],
      },
      deployment: {
        label: 'Deployment',
        title: 'Your PKI, where your policy says it should live',
        lead: 'As a managed service, in your own AWS account or on your Kubernetes. The same product in all three models; you choose how much you control.',
        operatedByLabel: 'Operated by',
        bestForLabel: 'Best for',
        options: [
          {
            tag: 'SaaS',
            title: 'Lamassu SaaS',
            body: 'We run it, with backups and upgrades included. The shortest path from evaluation to production.',
            chips: [],
            operatedBy: 'Us, end to end',
            bestFor: 'Teams that want production without operating a PKI',
            cta: 'See plans',
            href: 'https://www.lamassu.io/docs/deployment/saas',
          },
          {
            tag: 'AWS Marketplace',
            title: 'Lamassu on AWS',
            body: 'An EC2 image you launch in your own account and region, next to your workloads and under your cloud governance.',
            chips: ['Amazon EC2', 't3.large or larger'],
            operatedBy: 'You, in your AWS account',
            bestFor: 'Cloud-first organisations that keep data in their own account',
            cta: 'AWS guide',
            href: 'https://aws.amazon.com/marketplace/pp/prodview-fyfailowg3ewc',
          },
          {
            tag: 'Kubernetes · Helm',
            title: 'Self-hosted',
            body: 'Official Helm charts for your cluster: in your data centre, a private cloud or disconnected environments with your own mirror.',
            chips: ['Kubernetes 1.24+', 'Helm 3'],
            operatedBy: 'You, on your infrastructure',
            bestFor: 'Regulated and industrial environments with sovereignty requirements',
            cta: 'Helm guide',
            href: 'https://www.lamassu.io/docs/deployment/self-hosted/helm',
          },
        ],
        keys: 'In all three models you choose where your CA keys live: HSM over PKCS#11, AWS KMS, Azure Key Vault, HashiCorp Vault or AWS Secrets Manager.',
      },
      compare: {
        label: 'Comparison',
        title: 'Why teams move to Lamassu',
        lead: 'Most organisations start with scripts and a spreadsheet, or by stretching a corporate PKI built for laptops and web servers. Both break at device scale.',
        headers: ['', 'Scripts & spreadsheets', 'Traditional corporate PKI', 'Lamassu'],
        rows: [
          ['Device enrolment', 'Manual steps or custom scripts per project', 'Built for users and servers; few device protocols', 'Standards-based: EST, with CMP in early access'],
          ['Renewal', 'Calendar reminders; outages when one is missed', 'Often manual or agent-based', 'Renewal windows per fleet; the device re-enrols itself'],
          ['Post-quantum readiness', 'Not addressed', 'On the vendor roadmap', 'Pure and hybrid certificates in early access'],
          ['Key protection', 'Keys on disk, often shared', 'HSM, at significant cost', 'HSM, AWS KMS, Azure Key Vault or Vault'],
          ['Deployment', 'Wherever the scripts run', 'On-premises, heavy to operate', 'SaaS, your AWS account or Kubernetes'],
          ['Lock-in', 'Tied to whoever wrote them', 'Proprietary licences and agents', 'Open source, open standards, OpenAPI'],
        ],
      },
      references: {
        label: 'Case studies',
        title: 'Case studies in energy and connected industry',
        lead: 'Real references where Lamassu reduced operational friction and raised the security posture of OT and IoT environments.',
        tabsAria: 'Sectors',
        sectorLabel: 'Sector',
        cta: 'See the case',
        stepsTitle: 'How it works',
        steps: ['Device identity', 'Connected operation', 'Lifecycle management'],
        close: 'Close',
        approach: 'Our approach',
        contact: 'Talk to our team',
        details: ['Certificates for trains, signalling and station systems can be managed through shared policies for issuance, renewal and revocation across operational domains.', 'Manage identities for equipment across multiple locations, with shared certificate policies for connected devices and services.', 'Define certificate policies for controllers, gateways and services across distributed energy installations, with lifecycle management throughout operation.', 'Provide identities to controllers and telemetry modules, supporting secure remote maintenance across industrial fleets.', 'Manage certificates for readers, controllers and locks across buildings, with centralised lifecycle policies.'],
        cards: [
          {
            sector: 'Railway',
            title: 'Rolling stock and signalling.',
            highlight: '24x7 operational continuity.',
            body: 'Device security for trains, stations and trackside systems, segmented by line, operator or region.',
          },
          {
            sector: 'Connected hospitality',
            title: 'Multi-site hospitality and restaurant chains.',
            highlight: 'Secure onboarding for on-site devices.',
            body: 'Identity control for smart locks, POS terminals, kiosks and sensors, with simplified operations.',
          },
          {
            sector: 'Energy · Batteries',
            title: 'BESS, inverters and energy management.',
            highlight: 'Lower operational risk across distributed assets.',
            body: 'Strong identity for controllers and gateways in storage plants and connected energy networks.',
          },
          {
            sector: 'Cranes',
            title: 'Industrial fleets and remote operations.',
            highlight: 'More control over assets with variable connectivity.',
            body: 'Security for telemetry, control and remote maintenance in logistics, port and construction environments.',
          },
          {
            sector: 'Connected access doors',
            title: 'Smart physical access at scale.',
            highlight: 'Fast revocation and central governance.',
            body: 'Certificate management for controllers, readers and locks across building and campus deployments.',
          },
        ],
      },
      faq: {
        label: 'FAQ',
        title: 'What CISOs and CTOs ask us',
        lead: "Can't find your question? Talk directly to the team that builds Lamassu.",
        cta: 'Talk to an expert',
        items: [
          {
            q: 'Do we have to replace our current PKI?',
            a: 'No. Lamassu can run as a dedicated device PKI next to your corporate PKI, or import the certificate authorities you already operate. Most organisations start with one product line or one plant and grow from there.',
          },
          {
            q: 'Do our devices need a proprietary agent?',
            a: 'No. Lamassu uses EST (RFC 7030), an open protocol supported by many devices, gateways and operating systems, and CMP is in early access. The console can also generate the openssl and curl commands to test an enrolment.',
          },
          {
            q: 'Are post-quantum certificates production-ready?',
            a: "Not yet, and we say so openly. Lamassu's post-quantum support is experimental: it implements NIST's ML-DSA and SLH-DSA standards and hybrid certificates based on an IETF standard still being finalised, with keys protected in software for now. It is offered in early access so you can test, measure and plan your migration now, and move to production as standards and devices mature.",
          },
          {
            q: 'Where are our private keys stored?',
            a: 'Wherever your security policy requires: HSMs over PKCS#11, AWS KMS, Azure Key Vault, HashiCorp Vault, AWS Secrets Manager or a file-system engine for testing. With HSMs, AWS KMS or Azure Key Vault Keys, the CA key does not need to leave the module to sign.',
          },
          {
            q: 'How long does it take to get started?',
            a: 'With the SaaS or the AWS image, a pilot can be issuing certificates within days. Most teams start with one certificate authority, one fleet and a handful of devices enrolling over EST; from there, scaling is a matter of policy, not re-engineering.',
          },
          {
            q: 'Does Lamassu make us CRA or NIS2 compliant?',
            a: 'No product does that on its own. Lamassu covers key technical requirements — unique device identities, protected communications, a managed credential lifecycle and traceable evidence — and we help you place it within your specific obligations.',
          },
        ],
      },
      cta: {
        left: {
          label: 'Take the first step',
          heading: "Let's design your PKI and your post-quantum roadmap together.",
          btn: 'Talk to an expert',
        },
        right: {
          label: 'Newsletter',
          heading: 'PKI, post-quantum and regulation news, plus product updates. Once a month, no filler.',
          inputPlaceholder: 'you@email.com',
          submitLabel: 'Subscribe',
        },
      },
    },
  },
  es: {
    meta: {
      title: 'Lamassu | PKI abierta para la identidad de dispositivos IoT e industriales',
    },
    home: {
      docs: {
        pki: 'https://www.lamassu.io/docs/es/platform/pki/overview',
        enrollment: 'https://www.lamassu.io/docs/es/platform/iot-fleets/enrollment/overview',
        keys: 'https://www.lamassu.io/docs/es/platform/pki/key-management',
      },
      hero: {
        announceTag: 'Preview',
        announce: 'Certificados post-cuánticos en acceso anticipado',
        title: 'Una PKI soberana:',
        titleMark: 'tus claves, tus reglas',
        lead:
          'Lamassu es una PKI abierta para flotas IoT e industriales. Crea tus autoridades de certificación, da de alta dispositivos con EST y gestiona cada identidad X.509 —emisión, renovación y revocación— con las claves en el HSM o KMS que elijas.',
        ctaPrimary: 'Habla con un experto',
        ctaSecondary: 'Ver opciones de despliegue',
        proofAria: 'Datos clave sobre Lamassu',
        proof: ['CAs, perfiles, CRL y OCSP', 'Alta y renovación con EST', 'Claves en HSM, AWS KMS, Azure o Vault', 'SaaS, AWS o Kubernetes'],
        imageAlt: 'Consola de Lamassu con el inventario de dispositivos gestionados',
        toasts: ['Dispositivo dado de alta vía EST', 'Certificado revocado · sesión MQTT cerrada'],
      },
      logos: {
        aria: 'Empresas que trabajan con Lamassu',
        title: 'Empresas industriales que confían la identidad de sus dispositivos a Lamassu',
      },
      platform: {
        label: 'La plataforma',
        title: 'Una',
        titleMark: 'PKI soberana',
        titleEnd: 'para la identidad de tus dispositivos',
        lead:
          'Lamassu une una raíz de confianza, una política de emisión y cada dispositivo que necesita demostrar quién es. La soberanía es tuya: tus CAs, tus claves, tus políticas. Todo en una consola y una API, con control de acceso y trazabilidad.',
        items: [
          {
            title: 'Autoridades de certificación',
            body: 'Jerarquías raíz e intermedias, creadas o importadas, y perfiles que deciden qué se emite y durante cuánto tiempo.',
            link: 'Explorar la PKI',
            href: '#pki',
          },
          {
            title: 'Identidad de dispositivos',
            body: 'Alta con EST, el estado de cada dispositivo y ventanas de renovación definidas flota a flota.',
            link: 'Ver el alta de dispositivos',
            href: '#automation',
          },
          {
            title: 'Custodia de claves',
            body: 'Siete tipos de motor criptográfico, del HSM a AWS KMS o Azure Key Vault, funcionando en paralelo.',
            link: 'Ver los motores',
            href: '#keys',
          },
        ],
      },
      pki: {
        label: 'PKI',
        title: 'Autoridades de certificación',
        lead:
          'Construye tu jerarquía desde la raíz o importa las CAs que ya operas. Los perfiles de emisión fijan validez, usos y algoritmos permitidos, y cada CA publica su estado de revocación.',
        cta: 'Explorar la PKI',
        features: [
          {
            tag: 'Jerarquía y rotación',
            body: 'CAs raíz e intermedias, reemisión sobre la misma clave o rotación a una CA sucesora, con todo el linaje enlazado y visible como árbol o como grafo.',
            link: 'Jerarquía y rotación',
            href: 'https://www.lamassu.io/docs/es/platform/pki/ca-hierarchy-and-rotation',
          },
          {
            tag: 'Perfiles de emisión',
            body: 'Plantillas para dispositivos IoT, servidores TLS o firma de código que fijan validez, usos de clave y qué algoritmos y tamaños se aceptan.',
            link: 'Perfiles de certificado',
            href: 'https://www.lamassu.io/docs/es/platform/pki/certificate-profiles',
          },
          {
            tag: 'CRL y OCSP',
            body: 'Cada CA publica su CRL y responde OCSP según la RFC 6960. Y desde el navegador puedes inspeccionar, validar y pasar zlint a cualquier certificado.',
            link: 'Validación de certificados',
            href: 'https://www.lamassu.io/docs/es/platform/pki/certificate-validation',
          },
        ],
      },
      devices: {
        label: 'Flotas IoT',
        title: 'Identidad de dispositivos',
        lead:
          'Cada flota tiene su autoridad de registro (DMS): decide cómo se autentica un dispositivo, cómo se da de alta y cuándo debe renovar. Tus dispositivos hablan estándares abiertos, sin agentes propietarios.',
        protocols: ['EST · RFC 7030 · Disponible', 'CMP · RFC 9483 · Acceso anticipado'],
        cta: 'Cómo se da de alta un dispositivo',
        features: [
          {
            tag: 'Alta con EST',
            body: 'Endpoints RFC 7030 por flota: /cacerts, /simpleenroll, /simplereenroll y /serverkeygen. Autenticación con certificado de fábrica, con webhook de autorización o con ambos.',
            link: 'Referencia EST',
            href: 'https://www.lamassu.io/docs/es/platform/iot-fleets/enrollment/est-reference',
          },
          {
            tag: 'Renovación por política',
            body: 'Ventanas de renovación y umbrales de aviso por flota: el dispositivo se re-enrola antes de caducar y tú ves en qué estado está cada uno.',
            link: 'Renovación y recuperación',
            href: 'https://www.lamassu.io/docs/es/platform/iot-fleets/enrollment/renewal-and-recovery',
          },
          {
            tag: 'Grupos y estados',
            body: 'Grupos dinámicos por etiquetas y metadatos, historial de identidad y una línea temporal de eventos para cada dispositivo.',
          },
        ],
      },
      keys: {
        label: 'KMS',
        title: 'Custodia de claves',
        lead:
          'Las claves privadas de tus CAs viven donde lo exija tu política. Conecta varios motores a la vez y elige, CA a CA, el nivel de custodia.',
        cta: 'Ver los motores criptográficos',
        features: [
          {
            tag: 'Hardware y KMS cloud',
            body: 'HSMs vía PKCS#11, AWS KMS y Azure Key Vault Keys: la clave no necesita salir del módulo para firmar.',
          },
          {
            tag: 'Control de acceso a las claves',
            body: 'Controla quién puede acceder y operar con tus claves. Integración vía API y cliente PKCS#11.',
          },
          {
            tag: 'Trae tu propia clave',
            body: 'Importa claves existentes, genera CSRs a partir de claves del KMS y combina varios motores, incluso del mismo tipo.',
          },
        ],
      },
      pqc: {
        badge: 'Experimental · Acceso anticipado',
        title: 'Empieza tu migración post-cuántica.',
        titleMuted: 'Antes de que sea urgente.',
        lead:
          'Los ordenadores cuánticos capaces de romper RSA y ECC aún no existen, pero los dispositivos que despliegues este año seguirán funcionando cuando lleguen. Lamassu te permite emitir certificados post-cuánticos hoy, para que tus equipos midan el impacto, validen la compatibilidad y planifiquen la migración con datos reales y no con suposiciones.',
        certs: [
          {
            tag: 'Hoy',
            name: 'Clásico',
            body: 'Certificados RSA y ECDSA para todo lo que ya tienes en producción. Plenamente soportados.',
          },
          {
            tag: 'Transición',
            name: 'Híbrido',
            body: 'Un certificado, dos firmas —clásica y post-cuántica— unidas según el estándar emergente del IETF. Sigue siendo seguro mientras cualquiera de los dos algoritmos resista.',
          },
          {
            tag: 'Destino',
            name: 'Post-cuántico puro',
            body: 'Solo ML-DSA o SLH-DSA, tal y como los ha estandarizado el NIST. Para ecosistemas nuevos en los que controlas ambos extremos, y para demostrar que tu stack está preparado.',
          },
        ],
        points: [
          {
            title: 'Captura hoy, descifra mañana',
            body: 'Un atacante puede grabar hoy el tráfico y romperlo mañana. Los activos y secretos de larga vida ya están expuestos.',
          },
          {
            title: 'Migración por política, no por desplazamiento',
            body: 'Como los dispositivos renuevan por los mismos flujos, pasar una línea de producto a certificados post-cuánticos es un cambio de perfil, no una campaña en campo.',
          },
          {
            title: 'Sin sorpresas en 2030',
            body: 'Las claves y firmas post-cuánticas son más grandes. Probar ahora revela qué dispositivos, enlaces y firmwares necesitan atención mientras aún hay tiempo para planificar.',
          },
        ],
        note:
          'El soporte post-cuántico es experimental y se ofrece en acceso anticipado para pilotos. Sigue estándares del NIST y borradores del IETF que aún se están cerrando. Por ahora, las claves post-cuánticas se protegen por software, hasta que los fabricantes de HSM y KMS cloud soporten estos algoritmos.',
        ctaPrimary: 'Solicitar un piloto PQC',
      },
      whyNow: {
        label: 'Por qué ahora',
        title: 'Tus certificados corren contra tres relojes',
        lead:
          'Los certificados viven cada vez menos, la regulación convierte la seguridad del dispositivo en condición de venta y la criptografía de los certificados actuales tiene su propia fecha de caducidad. Cualquiera de las tres hace insostenible una PKI manual. Juntas, la convierten en un riesgo de consejo de dirección.',
        items: [
          {
            value: '47 días',
            label: 'Vida máxima de un certificado TLS público en 2029',
            body: 'La industria ha votado reducir la validez de los certificados públicos de 398 a 47 días. Las renovaciones se multiplican por ocho, y la misma presión llega ya a las PKI privadas y de dispositivos. Las hojas de cálculo y los recordatorios dejan de funcionar mucho antes.',
            source: 'CA/Browser Forum · Ballot SC-081 (2025)',
          },
          {
            value: 'Dic 2027',
            label: 'Aplicación plena del Reglamento de Ciberresiliencia (CRA)',
            body: 'Todo producto con elementos digitales vendido en la UE deberá ser seguro desde el diseño: identidades únicas, comunicaciones protegidas, actualizaciones seguras. Las obligaciones de notificación de vulnerabilidades ya se aplican desde septiembre de 2026.',
            source: 'Reglamento (UE) 2024/2847',
          },
          {
            value: '2030',
            label: 'RSA y ECC empiezan a retirarse',
            body: 'Los planes de transición a ambos lados del Atlántico empiezan a desaconsejar los algoritmos vulnerables a la computación cuántica en 2030 y los retiran en 2035. Un dispositivo que envíes este año seguirá en campo cuando ocurra.',
            source: 'NIST IR 8547 · Hoja de ruta PQC coordinada de la UE (2025)',
          },
        ],
        closing:
          'La única respuesta sostenible es una PKI que gestione todo el ciclo de vida del certificado y pueda cambiar su criptografía flota a flota. Para eso está construido Lamassu.',
      },
      ops: {
        label: 'Operación y gobierno',
        title: 'Para quien la opera y para quien la audita',
        lead: 'Seguridad define las reglas, operaciones las aplica y auditoría puede seguir cada paso, desde la misma plataforma.',
        tiles: [
          {
            title: 'Una consola para toda la PKI',
            body: 'CAs en tabla, jerarquía o grafo de claves; certificados, dispositivos y flotas, con su estado, en una sola vista.',
          },
          {
            title: 'Abierta por diseño',
            body: 'Código abierto, estándares del IETF y una API REST documentada con OpenAPI. Ningún agente propietario en tus dispositivos.',
          },
          {
            title: 'Acceso por políticas',
            body: 'Usuarios de tu proveedor OIDC o certificados X.509, políticas que deniegan por defecto y listados filtrados según quién pregunta.',
          },
          {
            title: 'Auditoría y alertas',
            body: 'Cada cambio en CAs, certificados, claves y dispositivos genera un evento con quién, qué y con qué resultado. Avisos por email, Microsoft Teams o webhook.',
          },
          {
            title: 'AWS IoT Core, integrado',
            body: 'Registra tus CAs en AWS IoT, crea Things y políticas al dar de alta y cierra la sesión MQTT de un dispositivo en cuanto se revoca.',
          },
        ],
      },
      deployment: {
        label: 'Despliegue',
        title: 'Tu PKI, donde tu política dice que debe estar',
        lead: 'Como servicio gestionado, en tu propia cuenta de AWS o en tu Kubernetes. El mismo producto en los tres modelos; tú eliges cuánto controlas.',
        operatedByLabel: 'Operado por',
        bestForLabel: 'Ideal para',
        options: [
          {
            tag: 'SaaS',
            title: 'Lamassu SaaS',
            body: 'Lo operamos nosotros, con copias de seguridad y actualizaciones incluidas. El camino más corto de la evaluación a producción.',
            chips: [],
            operatedBy: 'Nosotros, de principio a fin',
            bestFor: 'Equipos que quieren llegar a producción sin operar una PKI',
            cta: 'Ver planes',
            href: 'https://www.lamassu.io/docs/es/deployment/saas',
          },
          {
            tag: 'AWS Marketplace',
            title: 'Lamassu en AWS',
            body: 'Una imagen de EC2 que lanzas en tu cuenta y región, junto a tus cargas de trabajo y bajo tu gobierno cloud.',
            chips: ['Amazon EC2', 't3.large o superior'],
            operatedBy: 'Tú, en tu cuenta de AWS',
            bestFor: 'Organizaciones cloud-first que quieren los datos en su propia cuenta',
            cta: 'Guía de AWS',
            href: 'https://aws.amazon.com/marketplace/pp/prodview-fyfailowg3ewc',
          },
          {
            tag: 'Kubernetes · Helm',
            title: 'Autoalojado',
            body: 'Charts de Helm oficiales para tu clúster: en tu centro de datos, en una nube privada o en entornos desconectados con tu propio mirror.',
            chips: ['Kubernetes 1.24+', 'Helm 3'],
            operatedBy: 'Tú, en tu infraestructura',
            bestFor: 'Entornos regulados e industriales con requisitos de soberanía',
            cta: 'Guía de Helm',
            href: 'https://www.lamassu.io/docs/es/deployment/self-hosted/helm',
          },
        ],
        keys: 'En los tres modelos eliges dónde viven las claves de tus CAs: HSM vía PKCS#11, AWS KMS, Azure Key Vault, HashiCorp Vault o AWS Secrets Manager.',
      },
      compare: {
        label: 'Comparativa',
        title: 'Por qué los equipos se pasan a Lamassu',
        lead: 'La mayoría de las organizaciones empiezan con scripts y una hoja de cálculo, o estirando una PKI corporativa pensada para portátiles y servidores web. Ambas cosas se rompen a escala de dispositivos.',
        headers: ['', 'Scripts y hojas de cálculo', 'PKI corporativa tradicional', 'Lamassu'],
        rows: [
          ['Alta de dispositivos', 'Pasos manuales o scripts a medida por proyecto', 'Pensada para usuarios y servidores; pocos protocolos de dispositivo', 'Por estándar: EST, y CMP en acceso anticipado'],
          ['Renovación', 'Recordatorios en el calendario; caídas cuando se olvida uno', 'A menudo manual o basada en agentes', 'Ventanas de renovación por flota; el dispositivo se re-enrola solo'],
          ['Preparación post-cuántica', 'Sin abordar', 'En la hoja de ruta del proveedor', 'Certificados puros e híbridos en acceso anticipado'],
          ['Protección de claves', 'Claves en disco, a menudo compartidas', 'HSM, con un coste considerable', 'HSM, AWS KMS, Azure Key Vault o Vault'],
          ['Despliegue', 'Donde se ejecuten los scripts', 'On-premise, pesada de operar', 'SaaS, tu cuenta de AWS o Kubernetes'],
          ['Dependencia', 'Atada a quien los escribió', 'Licencias y agentes propietarios', 'Código abierto, estándares abiertos, OpenAPI'],
        ],
      },
      references: {
        label: 'Casos de estudio',
        title: 'Casos de estudio en energía e industria conectada',
        lead: 'Referencias reales donde Lamassu redujo la fricción operativa y elevó la postura de seguridad en entornos OT e IoT.',
        tabsAria: 'Sectores',
        sectorLabel: 'Sector',
        cta: 'Ver el caso',
        stepsTitle: 'Cómo funciona',
        steps: ['Identidad de los dispositivos', 'Operación conectada', 'Gestión del ciclo de vida'],
        close: 'Cerrar',
        approach: 'Nuestro enfoque',
        contact: 'Habla con nuestro equipo',
        details: ['Los certificados de trenes, señalización y sistemas de estación pueden gestionarse con políticas comunes de emisión, renovación y revocación, adaptadas a cada dominio operativo.', 'Gestiona las identidades de los equipos de múltiples locales con políticas comunes para los certificados de dispositivos y servicios conectados.', 'Define políticas de certificados para controladores, gateways y servicios de instalaciones energéticas distribuidas, y gestiona su ciclo de vida durante la operación.', 'Asigna identidades a controladores y módulos de telemetría para facilitar el mantenimiento remoto seguro de flotas industriales.', 'Gestiona los certificados de lectores, controladores y cerraduras entre edificios mediante políticas centralizadas de ciclo de vida.'],
        cards: [
          {
            sector: 'Ferroviario',
            title: 'Material rodante y señalización.',
            highlight: 'Continuidad operativa en servicio 24x7.',
            body: 'Seguridad de dispositivos para trenes, estaciones y sistemas de vía con segmentación por línea, operador o región.',
          },
          {
            sector: 'Hostelería conectada',
            title: 'Cadenas multi-sede de hostelería y restauración.',
            highlight: 'Onboarding seguro para dispositivos de local.',
            body: 'Control de identidad para cerraduras inteligentes, TPV, kioscos y sensores con operación simplificada.',
          },
          {
            sector: 'Energía · Baterías',
            title: 'BESS, inversores y gestión energética.',
            highlight: 'Menor riesgo operativo en activos distribuidos.',
            body: 'Identidad fuerte para controladores y gateways en plantas de almacenamiento y redes energéticas conectadas.',
          },
          {
            sector: 'Grúas',
            title: 'Flotas industriales y operación remota.',
            highlight: 'Mayor control sobre activos con conectividad variable.',
            body: 'Seguridad para telemetría, control y mantenimiento remoto en entornos logísticos, portuarios y de obra.',
          },
          {
            sector: 'Puertas de acceso conectadas',
            title: 'Control físico inteligente a escala.',
            highlight: 'Revocación rápida y gobierno centralizado.',
            body: 'Gestión de certificados para controladores, lectores y cerraduras en despliegues de edificios y campus.',
          },
        ],
      },
      faq: {
        label: 'Preguntas frecuentes',
        title: 'Lo que nos preguntan CISOs y CTOs',
        lead: '¿No encuentras tu pregunta? Habla directamente con el equipo que construye Lamassu.',
        cta: 'Habla con un experto',
        items: [
          {
            q: '¿Tenemos que sustituir nuestra PKI actual?',
            a: 'No. Lamassu puede funcionar como PKI dedicada a dispositivos junto a tu PKI corporativa, o importar las autoridades de certificación que ya operas. La mayoría de las organizaciones empiezan con una línea de producto o una planta y crecen desde ahí.',
          },
          {
            q: '¿Nuestros dispositivos necesitan un agente propietario?',
            a: 'No. Lamassu usa EST (RFC 7030), un protocolo abierto que soportan muchos dispositivos, gateways y sistemas operativos, y CMP está en acceso anticipado. La consola también genera los comandos de openssl y curl para probar un alta.',
          },
          {
            q: '¿Los certificados post-cuánticos están listos para producción?',
            a: 'Todavía no, y lo decimos abiertamente. El soporte post-cuántico de Lamassu es experimental: implementa los estándares ML-DSA y SLH-DSA del NIST y certificados híbridos basados en un estándar del IETF que aún se está cerrando, con las claves protegidas por software por ahora. Se ofrece en acceso anticipado para que puedas probar, medir y planificar tu migración ahora, y pasar a producción a medida que maduren los estándares y los dispositivos.',
          },
          {
            q: '¿Dónde se guardan nuestras claves privadas?',
            a: 'Donde lo exija tu política de seguridad: HSM vía PKCS#11, AWS KMS, Azure Key Vault, HashiCorp Vault, AWS Secrets Manager o un motor de ficheros para pruebas. Con HSM, AWS KMS o Azure Key Vault Keys, la clave de la CA no necesita salir del módulo para firmar.',
          },
          {
            q: '¿Cuánto tardamos en empezar?',
            a: 'Con el SaaS o la imagen de AWS, un piloto puede estar emitiendo certificados en pocos días. La mayoría de los equipos empiezan con una autoridad de certificación, una flota y unos cuantos dispositivos dándose de alta por EST; a partir de ahí, escalar es cuestión de política, no de reingeniería.',
          },
          {
            q: '¿Lamassu nos hace cumplir el CRA o NIS2?',
            a: 'Ningún producto lo hace por sí solo. Lamassu cubre requisitos técnicos clave —identidades únicas de dispositivo, comunicaciones protegidas, un ciclo de vida de credenciales gestionado y evidencias trazables— y te ayudamos a situarlo dentro de tus obligaciones concretas.',
          },
        ],
      },
      cta: {
        left: {
          label: 'Da el primer paso',
          heading: 'Diseñemos juntos tu PKI y tu hoja de ruta post-cuántica.',
          btn: 'Habla con un experto',
        },
        right: {
          label: 'Newsletter',
          heading: 'Novedades de PKI, post-cuántica y regulación, y noticias del producto. Una vez al mes, sin relleno.',
          inputPlaceholder: 'tu@email.com',
          submitLabel: 'Suscribirse',
        },
      },
    },
  },
  eus: {
    meta: {
      title: 'Lamassu | IoT eta industria-gailuen identitaterako PKI irekia',
    },
    home: {
      docs: {
        pki: 'https://www.lamassu.io/docs/platform/pki/overview',
        enrollment: 'https://www.lamassu.io/docs/platform/iot-fleets/enrollment/overview',
        keys: 'https://www.lamassu.io/docs/platform/pki/key-management',
      },
      hero: {
        announceTag: 'Preview',
        announce: 'Ziurtagiri post-kuantikoak aurretiazko sarbidean',
        title: 'Konfiantzazko identitatea',
        titleMark: 'konektatutako gailu bakoitzarentzat',
        lead:
          'Lamassu IoT eta industria-flotetarako PKI irekia da. Sortu zure ziurtapen-agintariak, eman gailuei alta EST bidez eta kudeatu X.509 identitate bakoitza —jaulkipena, berritzea eta ezeztapena— gakoak zuk aukeratutako HSM edo KMSan dituzula.',
        ctaPrimary: 'Hitz egin aditu batekin',
        ctaSecondary: 'Ikusi hedapen-aukerak',
        proofAria: 'Lamassuri buruzko datu nagusiak',
        proof: ['CAak, profilak, CRL eta OCSP', 'Alta eta berritzea EST bidez', 'Gakoak HSMan, AWS KMSan, Azuren edo Vaulten', 'SaaS, AWS edo Kubernetes'],
        imageAlt: 'Kudeatutako gailuen inbentarioa erakusten duen Lamassu kontsola',
        toasts: ['Gailuari alta emana EST bidez', 'Ziurtagiria ezeztatua · MQTT saioa itxia'],
      },
      logos: {
        aria: 'Lamassurekin lan egiten duten enpresak',
        title: 'Beren gailuen identitatea Lamassuren esku uzten duten enpresa industrialak',
      },
      platform: {
        label: 'Plataforma',
        title: 'Zure gailuen identitaterako',
        titleMark: 'PKI osoa',
        titleEnd: '',
        lead:
          'Lamassuk konfiantza-erro bat, jaulkipen-politika bat eta bere identitatea frogatu behar duen gailu bakoitza lotzen ditu. Dena kontsola eta API bakarrean, sarbide-kontrolarekin eta trazabilitatearekin.',
        items: [
          {
            title: 'Ziurtapen-agintariak',
            body: 'Erro- eta tarteko hierarkiak, sortuak edo inportatuak, eta zer jaulkitzen den eta zenbat denborarako erabakitzen duten profilak.',
            link: 'Esploratu PKIa',
            href: '#pki',
          },
          {
            title: 'Gailuen identitatea',
            body: 'Alta EST bidez, gailu bakoitzaren egoera eta flotaz flota definitutako berritze-leihoak.',
            link: 'Ikusi gailuen alta',
            href: '#automation',
          },
          {
            title: 'Gakoen zaintza',
            body: 'Zazpi motor kriptografiko mota, HSMtik AWS KMS edo Azure Key Vaulteraino, aldi berean lanean.',
            link: 'Ikusi motorrak',
            href: '#keys',
          },
        ],
      },
      pki: {
        label: 'PKI',
        title: 'Ziurtapen-agintariak',
        lead:
          'Eraiki zure hierarkia errotik edo inportatu dagoeneko kudeatzen dituzun CAak. Jaulkipen-profilek baliozkotasuna, erabilerak eta onartutako algoritmoak finkatzen dituzte, eta CA bakoitzak bere ezeztapen-egoera argitaratzen du.',
        cta: 'Esploratu PKIa',
        features: [
          {
            tag: 'Hierarkia eta errotazioa',
            body: 'Erro- eta tarteko CAak, gako berean berrargitaratzea edo CA ondorengo batera errotatzea, leinu osoa lotuta eta zuhaitz edo grafo gisa ikusgai.',
            link: 'Hierarkia eta errotazioa',
            href: 'https://www.lamassu.io/docs/platform/pki/ca-hierarchy-and-rotation',
          },
          {
            tag: 'Jaulkipen-profilak',
            body: 'IoT gailu, TLS zerbitzari edo kode-sinadurarako txantiloiak, baliozkotasuna, gako-erabilerak eta onartutako algoritmo eta tamainak finkatzen dituztenak.',
            link: 'Ziurtagiri-profilak',
            href: 'https://www.lamassu.io/docs/platform/pki/certificate-profiles',
          },
          {
            tag: 'CRL eta OCSP',
            body: 'CA bakoitzak bere CRLa argitaratzen du eta OCSPri erantzuten dio RFC 6960ren arabera. Eta nabigatzailetik edozein ziurtagiri ikuskatu, balidatu eta zlint bidez azter dezakezu.',
            link: 'Ziurtagirien balidazioa',
            href: 'https://www.lamassu.io/docs/platform/pki/certificate-validation',
          },
        ],
      },
      devices: {
        label: 'IoT flotak',
        title: 'Gailuen identitatea',
        lead:
          'Flota bakoitzak bere erregistro-agintaria (DMS) du: gailu bat nola autentifikatzen den, nola ematen zaion alta eta noiz berritu behar duen erabakitzen du. Zure gailuek estandar irekiak hitz egiten dituzte, agente jabedunik gabe.',
        protocols: ['EST · RFC 7030 · Eskuragarri', 'CMP · RFC 9483 · Aurretiazko sarbidea'],
        cta: 'Nola ematen zaio alta gailu bati',
        features: [
          {
            tag: 'Alta EST bidez',
            body: 'RFC 7030 endpointak flotako: /cacerts, /simpleenroll, /simplereenroll eta /serverkeygen. Autentifikazioa fabrikako ziurtagiriaren bidez, baimen-webhook bidez edo biak batera.',
            link: 'EST erreferentzia',
            href: 'https://www.lamassu.io/docs/platform/iot-fleets/enrollment/est-reference',
          },
          {
            tag: 'Berritzea politika bidez',
            body: 'Berritze-leihoak eta abisu-atalaseak flotako: gailua iraungi aurretik erroldatzen da berriro, eta bakoitza zein egoeratan dagoen ikusten duzu.',
            link: 'Berritzea eta berreskuratzea',
            href: 'https://www.lamassu.io/docs/platform/iot-fleets/enrollment/renewal-and-recovery',
          },
          {
            tag: 'Taldeak eta egoerak',
            body: 'Etiketa eta metadatuen araberako talde dinamikoak, identitate-historia eta gertaeren denbora-lerroa gailu bakoitzeko.',
          },
        ],
      },
      keys: {
        label: 'KMS',
        title: 'Gakoen zaintza',
        lead:
          'Zure CAen gako pribatuak zure politikak eskatzen duen lekuan bizi dira. Konektatu hainbat motor aldi berean eta aukeratu, CAz CA, zaintza-maila.',
        cta: 'Ikusi motor kriptografikoak',
        features: [
          {
            tag: 'Hardwarea eta cloud KMSa',
            body: 'HSMak PKCS#11 bidez, AWS KMS eta Azure Key Vault Keys: gakoak ez du modulutik atera beharrik sinatzeko.',
          },
          {
            tag: 'Gakoetarako sarbide-kontrola',
            body: 'Kontrolatu nork atzitu eta erabil ditzakeen zure gakoak. Integrazioa APIaren eta PKCS#11 bezeroaren bidez.',
          },
          {
            tag: 'Ekarri zure gakoa',
            body: 'Inportatu dauden gakoak, sortu CSRak KMSko gakoetatik eta konbinatu hainbat motor, mota berekoak ere bai.',
          },
        ],
      },
      pqc: {
        badge: 'Esperimentala · Aurretiazko sarbidea',
        title: 'Hasi zure migrazio post-kuantikoa.',
        titleMuted: 'Premiazko bihurtu aurretik.',
        lead:
          'RSA eta ECC hausteko gai diren ordenagailu kuantikoak ez daude oraindik, baina aurten hedatzen dituzun gailuek funtzionatzen jarraituko dute iristen direnean. Lamassurekin gaur jaulki ditzakezu ziurtagiri post-kuantikoak, zure taldeek eragina neur dezaten, bateragarritasuna balida dezaten eta migrazioa datu errealekin planifika dezaten, ez suposizioekin.',
        certs: [
          {
            tag: 'Gaur',
            name: 'Klasikoa',
            body: 'RSA eta ECDSA ziurtagiriak dagoeneko ekoizpenean duzun guztirako. Guztiz onartuak.',
          },
          {
            tag: 'Trantsizioa',
            name: 'Hibridoa',
            body: 'Ziurtagiri bat, bi sinadura —klasikoa eta post-kuantikoa— IETFren estandar berriaren arabera lotuak. Segurua izaten jarraitzen du bi algoritmoetako edozeinek eusten dion bitartean.',
          },
          {
            tag: 'Helmuga',
            name: 'Post-kuantiko purua',
            body: 'ML-DSA edo SLH-DSA bakarrik, NISTek estandarizatu bezala. Bi muturrak zuk kontrolatzen dituzun ekosistema berrietarako, eta zure stacka prest dagoela frogatzeko.',
          },
        ],
        points: [
          {
            title: 'Harrapatu orain, deszifratu gero',
            body: 'Erasotzaile batek gaur graba dezake trafikoa eta bihar hautsi. Bizitza luzeko aktiboak eta sekretuak agerian daude jada.',
          },
          {
            title: 'Migrazioa politika bidez, ez joan-etorri bidez',
            body: 'Gailuek fluxu beretatik berritzen dutenez, produktu-lerro bat ziurtagiri post-kuantikoetara pasatzea profil-aldaketa bat da, ez eremuko kanpaina bat.',
          },
          {
            title: 'Ezustekorik ez 2030ean',
            body: 'Gako eta sinadura post-kuantikoak handiagoak dira. Orain probatzeak erakusten du zein gailuk, loturak eta firmwarek behar duten arreta, planifikatzeko denbora dagoen bitartean.',
          },
        ],
        note:
          'Euskarri post-kuantikoa esperimentala da eta pilotuetarako aurretiazko sarbide gisa eskaintzen da. Oraindik ixten ari diren NIST estandarrei eta IETF zirriborroei jarraitzen die. Oraingoz, gako post-kuantikoak software bidez babesten dira, HSM eta cloud KMS hornitzaileek algoritmo hauek onartu arte.',
        ctaPrimary: 'Eskatu PQC pilotu bat',
      },
      whyNow: {
        label: 'Zergatik orain',
        title: 'Hiru erlojuk egiten dute lasterka zure ziurtagirien aurka',
        lead:
          'Ziurtagiriek gero eta bizitza laburragoa dute, araudiak gailuaren segurtasuna salmenta-baldintza bihurtzen du, eta gaur egungo ziurtagirien kriptografiak ere badu iraungitze-data. Horietako edozeinek eskuzko PKIa jasanezin bihurtzen du. Hirurek batera, zuzendaritza-kontseiluko arrisku bihurtzen dute.',
        items: [
          {
            value: '47 egun',
            label: 'TLS ziurtagiri publiko baten gehieneko iraupena 2029an',
            body: 'Industriak ziurtagiri publikoen baliozkotasuna 398 egunetik 47ra murriztea bozkatu du. Berritzeak zortzi aldiz maizago egingo dira, eta presio bera iristen ari da PKI pribatu eta gailuetakoetara. Kalkulu-orriek eta oroigarriek askoz lehenago uzten diote funtzionatzeari.',
            source: 'CA/Browser Forum · Ballot SC-081 (2025)',
          },
          {
            value: '2027 abe.',
            label: 'Zibererresilientzia Erregelamendua (CRA) guztiz aplikatzen da',
            body: 'EBn saltzen den elementu digitalak dituen produktu orok diseinutik segurua izan beharko du: identitate bakarrak, komunikazio babestuak, eguneratze seguruak. Ahultasunak jakinarazteko betebeharrak 2026ko irailetik aplikatzen dira jada.',
            source: '(EB) 2024/2847 Erregelamendua',
          },
          {
            value: '2030',
            label: 'RSA eta ECC erretiratzen hasiko dira',
            body: 'Atlantikoaren bi aldeetako trantsizio-planek 2030ean hasiko dira konputazio kuantikoaren aurrean ahulak diren algoritmoak baztertzen, eta 2035erako erretiratuko dituzte. Aurten bidaltzen duzun gailua eremuan egongo da oraindik hori gertatzen denean.',
            source: 'NIST IR 8547 · EBren PQC ibilbide-orri koordinatua (2025)',
          },
        ],
        closing:
          'Irtenbide iraunkor bakarra ziurtagiriaren bizi-ziklo osoa kudeatzen duen eta bere kriptografia flotaz flota alda dezakeen PKIa da. Horretarako eraiki da Lamassu.',
      },
      ops: {
        label: 'Eragiketa eta gobernantza',
        title: 'Kudeatzen duenarentzat eta auditatzen duenarentzat',
        lead: 'Segurtasunak arauak zehazten ditu, eragiketek aplikatzen dituzte eta auditoriak urrats bakoitza jarrai dezake, plataforma beretik.',
        tiles: [
          {
            title: 'Kontsola bakarra PKI osorako',
            body: 'CAak taulan, hierarkian edo gako-grafoan; ziurtagiriak, gailuak eta flotak, beren egoerarekin, ikuspegi bakarrean.',
          },
          {
            title: 'Diseinuz irekia',
            body: 'Kode irekia, IETFren estandarrak eta OpenAPI bidez dokumentatutako REST API bat. Agente jabedunik ez zure gailuetan.',
          },
          {
            title: 'Sarbidea politiken bidez',
            body: 'Zure OIDC hornitzaileko erabiltzaileak edo X.509 ziurtagiriak, lehenespenez ukatzen duten politikak eta nork galdetzen duen araberako zerrenda iragaziak.',
          },
          {
            title: 'Auditoria eta alertak',
            body: 'CA, ziurtagiri, gako eta gailuetako aldaketa orok gertaera bat sortzen du: nork, zer eta zein emaitzarekin. Abisuak emailez, Microsoft Teams bidez edo webhook bidez.',
          },
          {
            title: 'AWS IoT Core, integratua',
            body: 'Erregistratu zure CAak AWS IoTn, sortu Thing-ak eta politikak alta ematean, eta itxi gailu baten MQTT saioa ezeztatu bezain laster.',
          },
        ],
      },
      deployment: {
        label: 'Hedapena',
        title: 'Zure PKIa, zure politikak dioen lekuan',
        lead: 'Zerbitzu kudeatu gisa, zure AWS kontuan edo zure Kubernetesen. Produktu bera hiru ereduetan; zuk aukeratzen duzu zenbat kontrolatzen duzun.',
        operatedByLabel: 'Nork kudeatzen du',
        bestForLabel: 'Egokiena',
        options: [
          {
            tag: 'SaaS',
            title: 'Lamassu SaaS',
            body: 'Guk kudeatzen dugu, babeskopiak eta eguneratzeak barne. Ebaluaziotik ekoizpenera bide laburrena.',
            chips: [],
            operatedBy: 'Guk, hasieratik bukaeraraino',
            bestFor: 'PKI bat kudeatu gabe ekoizpenera iritsi nahi duten taldeak',
            cta: 'Ikusi planak',
            href: 'https://www.lamassu.io/docs/deployment/saas',
          },
          {
            tag: 'AWS Marketplace',
            title: 'Lamassu AWSn',
            body: 'Zure kontu eta eskualdean abiarazten duzun EC2 irudia, zure lan-kargen ondoan eta zure cloud gobernupean.',
            chips: ['Amazon EC2', 't3.large edo handiagoa'],
            operatedBy: 'Zuk, zure AWS kontuan',
            bestFor: 'Datuak beren kontuan nahi dituzten cloud-first erakundeak',
            cta: 'AWS gida',
            href: 'https://aws.amazon.com/marketplace/pp/prodview-fyfailowg3ewc',
          },
          {
            tag: 'Kubernetes · Helm',
            title: 'Norberak ostatatua',
            body: 'Helm chart ofizialak zure klusterrerako: zure datu-zentroan, hodei pribatu batean edo zure mirror propioa duten ingurune deskonektatuetan.',
            chips: ['Kubernetes 1.24+', 'Helm 3'],
            operatedBy: 'Zuk, zure azpiegituran',
            bestFor: 'Subiranotasun-eskakizunak dituzten ingurune arautu eta industrialak',
            cta: 'Helm gida',
            href: 'https://www.lamassu.io/docs/deployment/self-hosted/helm',
          },
        ],
        keys: 'Hiru ereduetan zuk aukeratzen duzu non bizi diren zure CAen gakoak: HSMa PKCS#11 bidez, AWS KMS, Azure Key Vault, HashiCorp Vault edo AWS Secrets Manager.',
      },
      compare: {
        label: 'Konparazioa',
        title: 'Zergatik pasatzen diren taldeak Lamassura',
        lead: 'Erakunde gehienak scriptekin eta kalkulu-orri batekin hasten dira, edo ordenagailu eramangarri eta web zerbitzarietarako pentsatutako PKI korporatibo bat luzatuz. Biak hausten dira gailuen eskalan.',
        headers: ['', 'Scriptak eta kalkulu-orriak', 'PKI korporatibo tradizionala', 'Lamassu'],
        rows: [
          ['Gailuen alta', 'Eskuzko urratsak edo proiektu bakoitzeko script neurrira eginak', 'Erabiltzaile eta zerbitzarietarako pentsatua; gailu-protokolo gutxi', 'Estandarren bidez: EST, eta CMP aurretiazko sarbidean'],
          ['Berritzea', 'Egutegiko oroigarriak; etenak bat ahazten denean', 'Askotan eskuzkoa edo agenteetan oinarritua', 'Berritze-leihoak flotako; gailua bere kabuz erroldatzen da berriro'],
          ['Prestaketa post-kuantikoa', 'Landu gabe', 'Hornitzailearen ibilbide-orrian', 'Ziurtagiri puru eta hibridoak aurretiazko sarbidean'],
          ['Gakoen babesa', 'Gakoak diskoan, askotan partekatuak', 'HSMa, kostu handiarekin', 'HSMa, AWS KMS, Azure Key Vault edo Vault'],
          ['Hedapena', 'Scriptak exekutatzen diren lekuan', 'On-premise, kudeatzeko astuna', 'SaaS, zure AWS kontua edo Kubernetes'],
          ['Menpekotasuna', 'Idatzi zituenari lotua', 'Lizentzia eta agente jabedunak', 'Kode irekia, estandar irekiak, OpenAPI'],
        ],
      },
      references: {
        label: 'Azterketa kasuak',
        title: 'Energiako eta industria konektatuko azterketa kasuak',
        lead: 'Lamassuk OT eta IoT inguruneetan frikzio operatiboa murriztu eta segurtasun-jarrera hobetu duen erreferentzia errealak.',
        tabsAria: 'Sektoreak',
        sectorLabel: 'Sektorea',
        cta: 'Ikusi kasua',
        stepsTitle: 'Nola funtzionatzen duen',
        steps: ['Gailuen identitatea', 'Eragiketa konektatua', 'Bizi-zikloaren kudeaketa'],
        close: 'Itxi',
        approach: 'Gure ikuspegia',
        contact: 'Hitz egin gure taldearekin',
        details: ['Trenen, seinaleztapenaren eta geltokietako sistemen ziurtagiriak jaulkipen, berritze eta baliogabetze politika komunen bidez kudea daitezke, eremu operatibo bakoitzera egokituta.', 'Kudeatu hainbat lokaletako ekipoen identitateak, gailu eta zerbitzu konektatuentzako ziurtagiri politika komunekin.', 'Definitu kontrolagailu, gateway eta zerbitzuentzako ziurtagiri politikak energia instalazio banatuetan, eta kudeatu haien bizi-zikloa.', 'Esleitu identitateak kontrolagailuei eta telemetria moduluei, flota industrialen urruneko mantentze segurua errazteko.', 'Kudeatu eraikinetako irakurgailu, kontrolagailu eta sarrailen ziurtagiriak bizi-zikloaren politika zentralizatuekin.'],
        cards: [
          {
            sector: 'Ferroviarioa',
            title: 'Material mugikorra eta seinaleztapena.',
            highlight: '24x7 eragiketan jarraitutasun operatiboa.',
            body: 'Gailuen segurtasuna trenetarako, geltokietarako eta bide-sistemetarako, linea, operadore edo eskualdeka segmentatuta.',
          },
          {
            sector: 'Ostalaritza konektatua',
            title: 'Ostalaritza eta jatetxe kate multi-siteak.',
            highlight: 'Lokaleko gailuentzako onboarding segurua.',
            body: 'Identitate-kontrola sarraila adimendunentzat, TPVentzat, kioskoentzat eta sentsoreentzat, eragiketa sinplifikatuarekin.',
          },
          {
            sector: 'Energia · Bateriak',
            title: 'BESS, inbertsoreak eta kudeaketa energetikoa.',
            highlight: 'Arrisku operatibo txikiagoa aktibo banatuetan.',
            body: 'Identitate sendoa kontrolagailu eta gatewayentzat biltegiratze-plantetan eta energia-sare konektatuetan.',
          },
          {
            sector: 'Garabiak',
            title: 'Flota industrialak eta urruneko eragiketa.',
            highlight: 'Kontrol handiagoa konektibitate aldakorreko aktiboetan.',
            body: 'Segurtasuna telemetriarako, kontrolerako eta urruneko mantentzerako logistika, portu eta obra inguruneetan.',
          },
          {
            sector: 'Sarbide ate konektatuak',
            title: 'Kontrol fisiko adimenduna eskalan.',
            highlight: 'Ezeztapen azkarra eta gobernantza zentralizatua.',
            body: 'Ziurtagirien kudeaketa kontrolagailu, irakurgailu eta sarrailetarako eraikin eta campus hedapenetan.',
          },
        ],
      },
      faq: {
        label: 'Ohiko galderak',
        title: 'CISO eta CTOek egiten dizkiguten galderak',
        lead: 'Ez duzu zure galdera aurkitu? Hitz egin zuzenean Lamassu eraikitzen duen taldearekin.',
        cta: 'Hitz egin aditu batekin',
        items: [
          {
            q: 'Gure egungo PKIa ordeztu behar al dugu?',
            a: 'Ez. Lamassuk gailuetarako PKI dedikatu gisa funtziona dezake zure PKI korporatiboaren ondoan, edo dagoeneko dituzun ziurtapen-agintariak inporta ditzake. Erakunde gehienak produktu-lerro edo planta batekin hasten dira eta hortik hazten dira.',
          },
          {
            q: 'Gure gailuek agente jabedun bat behar al dute?',
            a: 'Ez. Lamassuk EST (RFC 7030) erabiltzen du, gailu, gateway eta sistema eragile askok onartzen duten protokolo irekia, eta CMP aurretiazko sarbidean dago. Kontsolak alta bat probatzeko openssl eta curl komandoak ere sortzen ditu.',
          },
          {
            q: 'Ziurtagiri post-kuantikoak ekoizpenerako prest al daude?',
            a: 'Oraindik ez, eta argi esaten dugu. Lamassuren euskarri post-kuantikoa esperimentala da: NISTen ML-DSA eta SLH-DSA estandarrak eta oraindik ixten ari den IETF estandar batean oinarritutako ziurtagiri hibridoak inplementatzen ditu, gakoak oraingoz software bidez babestuta. Aurretiazko sarbide gisa eskaintzen da, zure migrazioa orain probatu, neurtu eta planifikatu ahal izateko, eta estandarrak eta gailuak heldu ahala ekoizpenera pasatzeko.',
          },
          {
            q: 'Non gordetzen dira gure gako pribatuak?',
            a: 'Zure segurtasun-politikak eskatzen duen lekuan: HSMak PKCS#11 bidez, AWS KMS, Azure Key Vault, HashiCorp Vault, AWS Secrets Manager edo probetarako fitxategi-motor bat. HSMekin, AWS KMSekin edo Azure Key Vault Keys-ekin, CAren gakoak ez du modulutik atera beharrik sinatzeko.',
          },
          {
            q: 'Zenbat denbora behar dugu hasteko?',
            a: 'SaaSarekin edo AWS irudiarekin, pilotu bat egun gutxitan egon daiteke ziurtagiriak jaulkitzen. Talde gehienak ziurtapen-agintari batekin, flota batekin eta EST bidez alta ematen duten gailu gutxi batzuekin hasten dira; hortik aurrera, eskalatzea politika kontua da, ez berringeniaritza.',
          },
          {
            q: 'Lamassuk CRA edo NIS2 betetzea bermatzen al digu?',
            a: 'Produktu batek ere ez du hori berez egiten. Lamassuk funtsezko eskakizun teknikoak betetzen ditu —gailuen identitate bakarrak, komunikazio babestuak, kudeatutako kredentzialen bizi-zikloa eta ebidentzia trazagarriak— eta zure betebehar zehatzetan non kokatzen den zehazten laguntzen dizugu.',
          },
        ],
      },
      cta: {
        left: {
          label: 'Eman lehen urratsa',
          heading: 'Diseina ditzagun elkarrekin zure PKIa eta zure ibilbide-orri post-kuantikoa.',
          btn: 'Hitz egin aditu batekin',
        },
        right: {
          label: 'Newsletter',
          heading: 'PKI, post-kuantiko eta araudiari buruzko berriak, eta produktuaren albisteak. Hilean behin, betegarririk gabe.',
          inputPlaceholder: 'zure@email.com',
          submitLabel: 'Harpidetu',
        },
      },
    },
  },
} as const;
