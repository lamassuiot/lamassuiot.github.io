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
        pqc: 'Post-cuántica',
        automation: 'Automatización',
        deployment: 'Despliegue',
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
        pqc: 'Post-kuantikoa',
        automation: 'Automatizazioa',
        deployment: 'Hedapena',
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
      title: 'Lamassu | Open PKI for device identity — automated with EST & CMP, post-quantum ready',
    },
    home: {
      hero: {
        kicker: 'Open PKI · Device identity · Post-quantum ready',
        title: 'Trusted identity for every',
        titleAccent: 'connected device',
        announce: 'New · Post-quantum certificates in early access',
        toasts: ['Certificate renewed automatically', 'New device enrolled via EST', 'Hybrid post-quantum certificate issued'],
        lead:
          'Lamassu is an open, enterprise-grade PKI that issues, renews and revokes certificates on its own — through open standards like EST and CMP, with your keys in the HSM or cloud KMS you choose, and with post-quantum certificates you can start testing today.',
        ctaPrimary: 'Talk to an expert',
        ctaSecondary: 'See deployment options',
        proofAria: 'Key facts about Lamassu',
        proof: [
          'Complete PKI: CAs, keys, CRL & OCSP',
          'Automated with EST & CMP',
          'Experimental pure & hybrid PQC certificates',
          'SaaS, AWS or on-premises',
          'Open source',
        ],
      },
      logos: {
        aria: 'Companies working with Lamassu',
        title: 'Industrial companies working with Lamassu',
      },
      whyNow: {
        eyebrow: 'Why now',
        today: 'Today',
        title: 'Three clocks are running on your certificates',
        lead:
          'Certificates are getting shorter lives, regulation is turning device security into a condition of sale, and the cryptography inside today’s certificates has an expiry date of its own. Any one of these makes manual PKI untenable. Together, they make it a board-level risk.',
        items: [
          {
            value: '47 days',
            label: 'Maximum public TLS certificate lifetime by 2029',
            body:
              'The industry has voted to cut public certificate validity from 398 days to 47. Renewals become eight times more frequent — and the same pressure is reaching private and device PKI. Spreadsheets and calendar reminders stop working long before that.',
            source: 'CA/Browser Forum · Ballot SC-081 (2025)',
          },
          {
            value: 'Dec 2027',
            label: 'The EU Cyber Resilience Act fully applies',
            body:
              'Every product with digital elements sold in the EU must be secure by design: unique identities, protected communications, secure updates. Vulnerability-reporting obligations already apply since September 2026.',
            source: 'Regulation (EU) 2024/2847',
          },
          {
            value: '2030',
            label: 'RSA and ECC start being phased out',
            body:
              'Transition plans on both sides of the Atlantic begin deprecating quantum-vulnerable algorithms in 2030 and retire them by 2035. A device you ship this year will still be in the field when that happens.',
            source: 'NIST IR 8547 · EU coordinated PQC roadmap (2025)',
          },
        ],
        closing:
          'The only sustainable answer is a PKI that automates the whole certificate lifecycle and can change its cryptography without touching every device by hand. That is what Lamassu is built for.',
      },
      pillars: {
        eyebrow: 'The platform',
        title: 'Three pillars, one platform',
        lead:
          'Lamassu combines a complete certificate authority, standards-based automation and crypto-agility — so security keeps control and operations stop firefighting.',
        items: [
          {
            tag: 'PKI first',
            title: 'A complete PKI, not a certificate add-on',
            body:
              'Root and subordinate certificate authorities, issuance profiles, registration and validation authorities, CRL and OCSP — everything a production PKI needs, in one platform your team can govern.',
            points: [
              'Multi-level CA hierarchies, created or imported',
              'CA keys in HSM, cloud KMS or Vault',
              'Revocation published over CRL and OCSP',
            ],
            link: 'What’s inside →',
          },
          {
            tag: 'Automation by standards',
            title: 'Enrolment and renewal without human hands',
            body:
              'Devices and servers obtain, renew and replace their own certificates using EST and CMP — open IETF standards already built into industrial hardware and software. No proprietary agent, no scripts, no lock-in.',
            points: [
              'EST and CMP enrolment out of the box',
              'Automatic re-enrolment before expiry',
              'Policies per product line, site or customer',
            ],
            link: 'How automation works →',
          },
          {
            tag: 'Post-quantum ready',
            title: 'Crypto-agility you can test today',
            body:
              'Issue pure post-quantum and hybrid certificates next to your classical ones. Validate the migration in your own lab now, and roll it out by policy when your devices are ready.',
            points: [
              'NIST-standardised post-quantum algorithms',
              'Hybrid certificates: classical + post-quantum',
              'Same CA, same workflows, same API',
            ],
            link: 'Explore post-quantum →',
          },
        ],
      },
      overview: {
        eyebrow: 'The console',
        title: 'One console for every authority, certificate and device',
        body:
          'Security and operations teams share a single, real-time view of the PKI: who issued what, what is about to expire, what was revoked and why — from a lab prototype to a full production fleet.',
        imageAlt: 'Lamassu console showing the managed device inventory',
        blocks: [
          {
            title: 'Risk you can see before it happens.',
            body1:
              'Active, expiring and revoked certificates across every authority and environment, in one view. Deviations are visible before they affect availability.',
          },
          {
            title: 'Every device, its identity and its status.',
            body1:
              'Each device shows whether it is active, revoked, decommissioned or still waiting for an identity — and the team can act on it directly from the console.',
          },
          {
            title: 'Organised the way your business is.',
            body1:
              'Groups, tags and registration authorities map the PKI to product lines, plants and customers, with access control and traceability to match.',
          },
        ],
      },
      pqc: {
        badge: 'Experimental · Early access',
        title: 'Start your post-quantum migration before it becomes urgent',
        lead:
          'Quantum computers able to break RSA and ECC are not here yet — but the devices you deploy this year will still be running when they arrive. Lamassu lets you issue post-quantum certificates today, so your teams can measure the impact, validate compatibility and plan the migration with real data instead of assumptions.',
        certs: [
          {
            tag: 'Today',
            name: 'Classical',
            body: 'RSA and ECDSA certificates for everything you run in production now. Fully supported, fully automated.',
          },
          {
            tag: 'Transition',
            name: 'Hybrid',
            body:
              'One certificate, two signatures — classical and post-quantum — bound together following the emerging IETF standard. It stays secure as long as either algorithm holds.',
          },
          {
            tag: 'Target',
            name: 'Pure post-quantum',
            body:
              'ML-DSA or SLH-DSA only, as standardised by NIST. For new ecosystems where you control both ends — and for proving your stack is ready.',
          },
        ],
        points: [
          {
            title: 'Harvest now, decrypt later',
            body: 'Adversaries can record traffic today and break it tomorrow. Long-lived assets and long-lived secrets are already exposed.',
          },
          {
            title: 'Migration by policy, not by site visit',
            body: 'Because renewal is automated, moving a product line to post-quantum certificates is a configuration change, not a field campaign. Devices that support it pick it up on their next renewal.',
          },
          {
            title: 'No surprises in 2030',
            body: 'Post-quantum keys and signatures are larger. Testing now reveals which devices, links and firmware need attention while there is still time to plan.',
          },
        ],
        note:
          'Post-quantum support is experimental and offered as early access for pilots. It follows NIST standards and IETF drafts that are still being finalised. For now, post-quantum keys are protected in software, until HSM and cloud KMS vendors support these algorithms.',
        ctaPrimary: 'Request a PQC pilot',
        ctaSecondary: 'Learn more about PQC',
      },
      automation: {
        eyebrow: 'Automation by standards',
        title: 'Certificates that renew themselves. Devices that onboard themselves.',
        lead:
          'Most certificate outages are not attacks — they are expired certificates nobody renewed. Lamassu takes people out of the loop with open enrolment protocols your devices, gateways and servers already speak.',
        steps: [
          {
            title: 'Enrol',
            body: 'A new device proves its factory identity and receives its operational certificate automatically — on the production line or on first connection in the field.',
          },
          {
            title: 'Monitor',
            body: 'Every certificate is tracked against its expiry, its issuing authority and its device. Your team is alerted well before anything becomes an incident.',
          },
          {
            title: 'Renew',
            body: 'Devices re-enrol on their own before expiry, following the policy set for their product line. No tickets, no maintenance windows.',
          },
          {
            title: 'Revoke',
            body: 'A compromised or retired device loses its trust in seconds, and every system that checks CRL or OCSP knows it.',
          },
        ],
        protocols: [
          {
            name: 'EST',
            spec: 'RFC 7030',
            status: 'Available',
            body:
              'The lightweight enrolment standard already built into a wide range of IoT and industrial devices. If your device speaks EST, it already speaks Lamassu.',
          },
          {
            name: 'CMP',
            spec: 'RFC 9483',
            status: 'Early access',
            body:
              'The standard of choice in industrial automation, designed for controllers, PLCs and plant networks that need the full certificate lifecycle.',
          },
        ],
        closing:
          'Open standards mean no proprietary agents on your devices and no lock-in: your devices keep speaking the same protocols whatever you decide tomorrow.',
      },
      capabilities: {
        eyebrow: 'Capabilities',
        title: 'What’s inside',
        lead: 'Everything a production PKI needs, delivered as one platform with a web console, single sign-on and a complete API.',
        items: [
          {
            title: 'Certificate authorities',
            body: 'Build and govern your hierarchy, from offline root to issuing CAs, or import the authorities you already run.',
            points: ['Root, intermediate and issuing CAs', 'Import existing CAs, with or without their keys', 'CA renewal without losing traceability'],
          },
          {
            title: 'Key custody',
            body: 'Pluggable crypto engines keep private keys exactly where your security policy says — in hardware or in the cloud.',
            points: ['PKCS#11 hardware security modules', 'AWS KMS, AWS Secrets Manager, HashiCorp Vault', 'Several engines side by side'],
          },
          {
            title: 'Issuance policies',
            body: 'Issuance profiles define what a certificate may contain and how long it lives, per product line or use case.',
            points: ['Reusable profiles per product line', 'What each certificate may contain, and for how long', 'Only approved cryptography gets issued'],
          },
          {
            title: 'Registration & device identity',
            body: 'Registration authorities decide who may enrol and how. A live inventory tracks every device, its identity history and its certificates, from provisioning to decommission.',
            points: ['Enrolment and renewal policies per product line', 'Dynamic device groups, tags and metadata', 'Full identity history per device'],
          },
          {
            title: 'Validation & revocation',
            body: 'Validation authorities publish revocation status so every relying system knows, in seconds, which identities to stop trusting.',
            points: ['CRL distribution', 'OCSP responder', 'Revocation status available to every system'],
          },
          {
            title: 'Alerts & integrations',
            body: 'Proactive alerts and ready-made connectors plug Lamassu into the tools and platforms your teams already use.',
            points: ['Expiry alerts by email or webhook', 'Connects to your existing security tools', 'Native AWS IoT Core integration'],
          },
        ],
      },
      deployment: {
        eyebrow: 'Deployment',
        title: 'Your PKI, where your policy says it should run',
        lead:
          'Start in minutes as a managed service, run it inside your own AWS account, or operate it on-premises — including isolated networks. Same product, same capabilities, your choice of control.',
        operatedByLabel: 'Operated by',
        bestForLabel: 'Best for',
        options: [
          {
            tag: 'SaaS',
            title: 'Lamassu Cloud',
            body: 'Fully managed by our team. The fastest path from evaluation to production, with no infrastructure to run.',
            operatedBy: 'Us — fully managed',
            bestFor: 'Teams that want to move fast without dedicated PKI operations staff',
          },
          {
            tag: 'AWS Marketplace · EC2',
            title: 'Lamassu on AWS',
            body: 'A ready-to-run machine image for Amazon EC2. Launch it in your own AWS account and region, next to your workloads and under your cloud governance.',
            operatedBy: 'You, in your AWS account',
            bestFor: 'Cloud-first organisations that need data to stay in their own account',
          },
          {
            tag: 'Kubernetes · Helm',
            title: 'On-premises & private cloud',
            body: 'Official Helm charts for any Kubernetes cluster — in your data centre, a private cloud or an isolated network.',
            operatedBy: 'You, on your infrastructure',
            bestFor: 'Regulated, critical and industrial environments with strict sovereignty requirements',
          },
        ],
        keys:
          'In every model you choose where CA keys live. With PKCS#11 HSMs or AWS KMS they never leave the hardware; AWS Secrets Manager, HashiCorp Vault or a software engine cover environments where software custody is acceptable.',
      },
      compare: {
        eyebrow: 'Comparison',
        title: 'Why teams move to Lamassu',
        lead:
          'Most organisations start with scripts and a spreadsheet, or stretch a corporate PKI built for laptops and web servers. Both break at device scale.',
        headers: ['', 'Scripts & spreadsheets', 'Traditional enterprise PKI', 'Lamassu'],
        rows: [
          ['Device enrolment', 'Manual steps or custom scripts per project', 'Built for users and servers; limited device protocols', 'Zero-touch, via EST and CMP'],
          ['Certificate renewal', 'Calendar reminders; outages when one is missed', 'Often manual or agent-based', 'Automatic and policy-driven, before expiry'],
          ['Post-quantum readiness', 'Not addressed', 'On the vendor roadmap', 'Experimental pure and hybrid certificates to pilot today'],
          ['Key protection', 'Keys on disk, often shared', 'HSM, at significant cost', 'HSM, cloud KMS or Vault — your choice'],
          ['Deployment', 'Wherever the scripts happen to run', 'On-premises, heavy to operate', 'SaaS, your AWS account or on-prem Kubernetes'],
          ['Lock-in', 'Tied to the people who wrote it', 'Proprietary licences and agents', 'Open source, open standards, open API'],
        ],
      },
      trust: {
        eyebrow: 'Trust',
        title: 'Built to be trusted',
        items: [
          {
            title: 'Open source',
            body: 'The code is public and auditable. Your security team can review exactly what protects your devices, and you are never locked in.',
          },
          {
            title: 'Standards, not inventions',
            body: 'Built on the open standards your hardware and software already speak — and on NIST’s post-quantum algorithms. No proprietary formats, no surprises.',
          },
          {
            title: 'Evidence for auditors',
            body: 'Every issuance, renewal and revocation leaves a trace your security team and your auditors can follow, supporting audits under NIS2, the Cyber Resilience Act and IEC 62443.',
          },
          {
            title: 'European, built for the long run',
            body: 'Developed in the Basque Country, one of Europe’s industrial heartlands. Open code, open standards and self-hosting mean your trust anchor never depends on a single vendor’s future.',
          },
        ],
      },
      cta: {
        left: {
          eyebrow: 'Take the first step',
          heading: 'Let’s design your PKI — and your post-quantum roadmap — together.',
          btn: 'Talk to an expert',
        },
        right: {
          eyebrow: 'Newsletter',
          heading: 'PKI, post-quantum and regulation insights, plus product news. Monthly, no filler.',
          inputPlaceholder: 'your@email.com',
          submitLabel: 'Subscribe',
        },
      },
      faq: {
        eyebrow: 'FAQ',
        lead: 'Didn’t find your question? Talk directly to the team that builds Lamassu.',
        cta: 'Talk to an expert',
        title: 'Questions CISOs and CTOs ask us',
        items: [
          {
            q: 'Do we have to replace our existing PKI?',
            a: 'No. Lamassu can run as a dedicated device PKI next to your corporate PKI, or import the certificate authorities you already operate. Most organisations start with one product line or site and expand from there.',
          },
          {
            q: 'Do our devices need a proprietary agent?',
            a: 'No. Lamassu uses open protocols — EST and CMP — that many industrial devices, gateways and operating systems already support. Where they do not, open-source clients are available.',
          },
          {
            q: 'Are the post-quantum certificates ready for production?',
            a: 'Not yet, and we say so openly. Post-quantum support in Lamassu is experimental: it implements NIST’s ML-DSA and SLH-DSA standards and hybrid certificates based on an IETF standard that is still being finalised, with keys protected in software for now. It is available as early access so you can test, measure and plan your migration now, and move to production as standards and devices mature.',
          },
          {
            q: 'Where are our private keys stored?',
            a: 'Wherever your security policy requires: hardware security modules through PKCS#11, AWS KMS, HashiCorp Vault, or a software engine for development and testing. With HSMs and AWS KMS, CA keys never leave the hardware.',
          },
          {
            q: 'How quickly can we get started?',
            a: 'With the SaaS or the AWS image, a pilot can be issuing certificates in days, not months. Most teams start with one certificate authority, one product line and a handful of devices enrolling automatically — from there, scaling is a matter of policy, not re-engineering.',
          },
          {
            q: 'Does Lamassu make us compliant with the CRA or NIS2?',
            a: 'No single product does. Lamassu covers key technical requirements — unique device identities, protected communications, a managed credential lifecycle and traceable evidence. We help you map where it fits in your specific obligations.',
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
      title: 'Lamassu | PKI abierta para identidad de dispositivos — automatizada con EST y CMP, preparada para la era post-cuántica',
    },
    home: {
      hero: {
        kicker: 'PKI abierta · Identidad de dispositivos · Preparada para post-cuántica',
        title: 'Identidad de confianza para cada',
        titleAccent: 'dispositivo conectado',
        announce: 'Novedad · Certificados post-cuánticos en acceso anticipado',
        toasts: ['Certificado renovado automáticamente', 'Nuevo dispositivo dado de alta vía EST', 'Certificado híbrido post-cuántico emitido'],
        lead:
          'Lamassu es una PKI abierta de nivel empresarial que emite, renueva y revoca certificados por sí sola — mediante estándares abiertos como EST y CMP, con tus claves en el HSM o KMS cloud que elijas, y con certificados post-cuánticos que puedes empezar a probar hoy.',
        ctaPrimary: 'Habla con un experto',
        ctaSecondary: 'Ver opciones de despliegue',
        proofAria: 'Datos clave sobre Lamassu',
        proof: [
          'PKI completa: CAs, claves, CRL y OCSP',
          'Automatizada con EST y CMP',
          'Certificados PQC puros e híbridos (experimental)',
          'SaaS, AWS u on-premise',
          'Código abierto',
        ],
      },
      logos: {
        aria: 'Empresas que trabajan con Lamassu',
        title: 'Empresas industriales que trabajan con Lamassu',
      },
      whyNow: {
        eyebrow: 'Por qué ahora',
        today: 'Hoy',
        title: 'Tus certificados corren contra tres relojes',
        lead:
          'Los certificados viven cada vez menos, la regulación convierte la seguridad del dispositivo en condición de venta y la criptografía de los certificados actuales tiene su propia fecha de caducidad. Cualquiera de las tres hace insostenible una PKI manual. Juntas, la convierten en un riesgo de consejo de dirección.',
        items: [
          {
            value: '47 días',
            label: 'Vida máxima de un certificado TLS público en 2029',
            body:
              'La industria ha votado reducir la validez de los certificados públicos de 398 a 47 días. Las renovaciones se multiplican por ocho, y la misma presión llega ya a las PKI privadas y de dispositivos. Las hojas de cálculo y los recordatorios dejan de funcionar mucho antes.',
            source: 'CA/Browser Forum · Ballot SC-081 (2025)',
          },
          {
            value: 'Dic 2027',
            label: 'Aplicación plena del Reglamento de Ciberresiliencia (CRA)',
            body:
              'Todo producto con elementos digitales vendido en la UE deberá ser seguro desde el diseño: identidades únicas, comunicaciones protegidas, actualizaciones seguras. Las obligaciones de notificación de vulnerabilidades ya se aplican desde septiembre de 2026.',
            source: 'Reglamento (UE) 2024/2847',
          },
          {
            value: '2030',
            label: 'RSA y ECC empiezan a retirarse',
            body:
              'Los planes de transición a ambos lados del Atlántico empiezan a desaconsejar los algoritmos vulnerables a la computación cuántica en 2030 y los retiran en 2035. Un dispositivo que envíes este año seguirá en campo cuando ocurra.',
            source: 'NIST IR 8547 · Hoja de ruta PQC coordinada de la UE (2025)',
          },
        ],
        closing:
          'La única respuesta sostenible es una PKI que automatice todo el ciclo de vida del certificado y pueda cambiar su criptografía sin tocar cada dispositivo a mano. Para eso está construido Lamassu.',
      },
      pillars: {
        eyebrow: 'La plataforma',
        title: 'Tres pilares, una sola plataforma',
        lead:
          'Lamassu combina una autoridad de certificación completa, automatización basada en estándares y agilidad criptográfica — para que seguridad mantenga el control y operaciones deje de apagar fuegos.',
        items: [
          {
            tag: 'PKI primero',
            title: 'Una PKI completa, no un complemento de certificados',
            body:
              'Autoridades de certificación raíz y subordinadas, perfiles de emisión, autoridades de registro y de validación, CRL y OCSP: todo lo que necesita una PKI en producción, en una plataforma que tu equipo puede gobernar.',
            points: [
              'Jerarquías de CA multinivel, creadas o importadas',
              'Claves de CA en HSM, KMS cloud o Vault',
              'Revocación publicada por CRL y OCSP',
            ],
            link: 'Qué incluye →',
          },
          {
            tag: 'Automatización con estándares',
            title: 'Alta y renovación sin intervención humana',
            body:
              'Dispositivos y servidores obtienen, renuevan y sustituyen sus propios certificados mediante EST y CMP, estándares abiertos del IETF que ya incorporan el hardware y el software industrial. Sin agentes propietarios, sin scripts, sin dependencia de proveedor.',
            points: [
              'Enrolamiento EST y CMP de serie',
              'Re-enrolamiento automático antes de la caducidad',
              'Políticas por línea de producto, planta o cliente',
            ],
            link: 'Cómo funciona la automatización →',
          },
          {
            tag: 'Preparada para post-cuántica',
            title: 'Agilidad criptográfica que puedes probar hoy',
            body:
              'Emite certificados post-cuánticos puros e híbridos junto a los clásicos. Valida la migración hoy en tu propio laboratorio y despliégala por política cuando tus dispositivos estén listos.',
            points: [
              'Algoritmos post-cuánticos estandarizados por el NIST',
              'Certificados híbridos: clásico + post-cuántico',
              'Misma CA, mismos flujos, misma API',
            ],
            link: 'Explorar post-cuántica →',
          },
        ],
      },
      overview: {
        eyebrow: 'La consola',
        title: 'Una consola para todas tus autoridades, certificados y dispositivos',
        body:
          'Los equipos de seguridad y de operación comparten una visión única y en tiempo real de la PKI: quién emitió qué, qué está a punto de caducar, qué se revocó y por qué — desde un prototipo de laboratorio hasta una flota completa en producción.',
        imageAlt: 'Consola de Lamassu con el inventario de dispositivos gestionados',
        blocks: [
          {
            title: 'El riesgo, visible antes de que ocurra.',
            body1:
              'Certificados activos, a punto de caducar y revocados de todas las autoridades y entornos, en una sola vista. Las desviaciones se ven antes de que afecten a la disponibilidad.',
          },
          {
            title: 'Cada dispositivo, su identidad y su estado.',
            body1:
              'Cada dispositivo muestra si está activo, revocado, dado de baja o pendiente de identidad, y el equipo puede actuar directamente desde la consola.',
          },
          {
            title: 'Organizada como tu negocio.',
            body1:
              'Grupos, etiquetas y autoridades de registro trasladan la PKI a tus líneas de producto, plantas y clientes, con control de acceso y trazabilidad a la altura.',
          },
        ],
      },
      pqc: {
        badge: 'Experimental · Acceso anticipado',
        title: 'Empieza tu migración post-cuántica antes de que sea urgente',
        lead:
          'Los ordenadores cuánticos capaces de romper RSA y ECC aún no existen, pero los dispositivos que despliegues este año seguirán funcionando cuando lleguen. Lamassu te permite emitir certificados post-cuánticos hoy, para que tus equipos midan el impacto, validen la compatibilidad y planifiquen la migración con datos reales y no con suposiciones.',
        certs: [
          {
            tag: 'Hoy',
            name: 'Clásico',
            body: 'Certificados RSA y ECDSA para todo lo que ya tienes en producción. Plenamente soportados y automatizados.',
          },
          {
            tag: 'Transición',
            name: 'Híbrido',
            body:
              'Un certificado, dos firmas — clásica y post-cuántica — unidas según el estándar emergente del IETF. Sigue siendo seguro mientras cualquiera de los dos algoritmos resista.',
          },
          {
            tag: 'Destino',
            name: 'Post-cuántico puro',
            body:
              'Solo ML-DSA o SLH-DSA, tal y como los ha estandarizado el NIST. Para ecosistemas nuevos en los que controlas ambos extremos, y para demostrar que tu stack está preparado.',
          },
        ],
        points: [
          {
            title: 'Captura hoy, descifra mañana',
            body: 'Un atacante puede grabar hoy el tráfico y romperlo mañana. Los activos y secretos de larga vida ya están expuestos.',
          },
          {
            title: 'Migración por política, no por desplazamiento',
            body: 'Como la renovación está automatizada, pasar una línea de producto a certificados post-cuánticos es un cambio de configuración, no una campaña en campo. Los dispositivos que lo soportan lo adoptan en su siguiente renovación.',
          },
          {
            title: 'Sin sorpresas en 2030',
            body: 'Las claves y firmas post-cuánticas son más grandes. Probar ahora revela qué dispositivos, enlaces y firmwares necesitan atención mientras aún hay tiempo para planificar.',
          },
        ],
        note:
          'El soporte post-cuántico es experimental y se ofrece en acceso anticipado para pilotos. Sigue estándares del NIST y borradores del IETF que aún se están cerrando. Por ahora, las claves post-cuánticas se protegen por software, hasta que los fabricantes de HSM y KMS cloud soporten estos algoritmos.',
        ctaPrimary: 'Solicitar un piloto PQC',
        ctaSecondary: 'Saber más sobre PQC',
      },
      automation: {
        eyebrow: 'Automatización con estándares',
        title: 'Certificados que se renuevan solos. Dispositivos que se dan de alta solos.',
        lead:
          'La mayoría de las caídas por certificados no son ataques: son certificados caducados que nadie renovó. Lamassu saca a las personas del bucle con protocolos de enrolamiento abiertos que tus dispositivos, gateways y servidores ya hablan.',
        steps: [
          {
            title: 'Alta',
            body: 'Un dispositivo nuevo demuestra su identidad de fábrica y recibe automáticamente su certificado operativo, en la línea de producción o en su primera conexión en campo.',
          },
          {
            title: 'Supervisión',
            body: 'Cada certificado se sigue según su caducidad, su autoridad emisora y su dispositivo. Tu equipo recibe el aviso mucho antes de que algo se convierta en incidente.',
          },
          {
            title: 'Renovación',
            body: 'Los dispositivos se re-enrolan solos antes de caducar, según la política definida para su línea de producto. Sin tickets, sin ventanas de mantenimiento.',
          },
          {
            title: 'Revocación',
            body: 'Un dispositivo comprometido o retirado pierde la confianza en segundos, y todos los sistemas que consultan CRL u OCSP lo saben.',
          },
        ],
        protocols: [
          {
            name: 'EST',
            spec: 'RFC 7030',
            status: 'Disponible',
            body:
              'El estándar ligero de alta de certificados que ya incorporan multitud de dispositivos IoT e industriales. Si tu dispositivo habla EST, ya habla con Lamassu.',
          },
          {
            name: 'CMP',
            spec: 'RFC 9483',
            status: 'Acceso anticipado',
            body:
              'El estándar de referencia en automatización industrial, pensado para controladores, PLCs y redes de planta que necesitan el ciclo de vida completo del certificado.',
          },
        ],
        closing:
          'Estándares abiertos significa ningún agente propietario en tus dispositivos y ninguna dependencia: tus dispositivos seguirán hablando los mismos protocolos decidas lo que decidas mañana.',
      },
      capabilities: {
        eyebrow: 'Capacidades',
        title: 'Qué incluye',
        lead: 'Todo lo que necesita una PKI en producción, en una única plataforma con consola web, inicio de sesión único y una API completa.',
        items: [
          {
            title: 'Autoridades de certificación',
            body: 'Construye y gobierna tu jerarquía, desde la raíz offline hasta las CAs emisoras, o importa las autoridades que ya operas.',
            points: ['CAs raíz, intermedias y emisoras', 'Importación de CAs existentes, con o sin su clave', 'Renovación de CAs sin perder trazabilidad'],
          },
          {
            title: 'Custodia de claves',
            body: 'Motores criptográficos conectables que guardan las claves privadas justo donde lo exige tu política de seguridad, en hardware o en la nube.',
            points: ['HSMs hardware vía PKCS#11', 'AWS KMS, AWS Secrets Manager, HashiCorp Vault', 'Varios motores en paralelo'],
          },
          {
            title: 'Políticas de emisión',
            body: 'Los perfiles de emisión definen qué puede contener un certificado y cuánto vive, por línea de producto o caso de uso.',
            points: ['Perfiles reutilizables por línea de producto', 'Qué puede contener cada certificado y cuánto dura', 'Solo se emite criptografía aprobada'],
          },
          {
            title: 'Registro e identidad de dispositivos',
            body: 'Las autoridades de registro deciden quién puede darse de alta y cómo. Un inventario vivo sigue cada dispositivo, su historial de identidad y sus certificados, desde el aprovisionamiento hasta la baja.',
            points: ['Políticas de alta y renovación por línea de producto', 'Grupos dinámicos de dispositivos, etiquetas y metadatos', 'Historial de identidad completo por dispositivo'],
          },
          {
            title: 'Validación y revocación',
            body: 'Las autoridades de validación publican el estado de revocación para que cada sistema sepa, en segundos, en qué identidades dejar de confiar.',
            points: ['Distribución de CRL', 'Respondedor OCSP', 'Estado de revocación disponible para todos los sistemas'],
          },
          {
            title: 'Alertas e integraciones',
            body: 'Alertas proactivas y conectores listos para usar integran Lamassu con las herramientas y plataformas que tus equipos ya usan.',
            points: ['Alertas de caducidad por email o webhook', 'Se conecta con tus herramientas de seguridad', 'Integración nativa con AWS IoT Core'],
          },
        ],
      },
      deployment: {
        eyebrow: 'Despliegue',
        title: 'Tu PKI, donde tu política dice que debe estar',
        lead:
          'Empieza en minutos como servicio gestionado, ejecútala dentro de tu propia cuenta de AWS u opérala on-premise, incluso en redes aisladas. Mismo producto, mismas capacidades, tú eliges el nivel de control.',
        operatedByLabel: 'Operado por',
        bestForLabel: 'Ideal para',
        options: [
          {
            tag: 'SaaS',
            title: 'Lamassu Cloud',
            body: 'Totalmente gestionado por nuestro equipo. El camino más rápido de la evaluación a producción, sin infraestructura que operar.',
            operatedBy: 'Nosotros — totalmente gestionado',
            bestFor: 'Equipos que quieren avanzar rápido sin personal dedicado a operar una PKI',
          },
          {
            tag: 'AWS Marketplace · EC2',
            title: 'Lamassu en AWS',
            body: 'Una imagen lista para Amazon EC2. Lánzala en tu propia cuenta y región de AWS, junto a tus cargas de trabajo y bajo tu gobierno cloud.',
            operatedBy: 'Tú, en tu cuenta de AWS',
            bestFor: 'Organizaciones cloud-first que necesitan que los datos permanezcan en su propia cuenta',
          },
          {
            tag: 'Kubernetes · Helm',
            title: 'On-premise y nube privada',
            body: 'Charts de Helm oficiales para cualquier clúster de Kubernetes: en tu centro de datos, en una nube privada o en una red aislada.',
            operatedBy: 'Tú, en tu infraestructura',
            bestFor: 'Entornos regulados, críticos e industriales con requisitos estrictos de soberanía',
          },
        ],
        keys:
          'En todos los modelos eliges dónde viven las claves de tus CAs. Con HSMs PKCS#11 o AWS KMS nunca salen del hardware; AWS Secrets Manager, HashiCorp Vault o un motor software cubren los entornos donde la custodia software es aceptable.',
      },
      compare: {
        eyebrow: 'Comparativa',
        title: 'Por qué los equipos se pasan a Lamassu',
        lead:
          'La mayoría de las organizaciones empiezan con scripts y una hoja de cálculo, o estirando una PKI corporativa pensada para portátiles y servidores web. Ambas cosas se rompen a escala de dispositivos.',
        headers: ['', 'Scripts y hojas de cálculo', 'PKI corporativa tradicional', 'Lamassu'],
        rows: [
          ['Alta de dispositivos', 'Pasos manuales o scripts a medida por proyecto', 'Pensada para usuarios y servidores; pocos protocolos de dispositivo', 'Sin intervención, vía EST y CMP'],
          ['Renovación', 'Recordatorios en el calendario; caídas cuando se olvida uno', 'A menudo manual o basada en agentes', 'Automática y por política, antes de caducar'],
          ['Preparación post-cuántica', 'Sin abordar', 'En la hoja de ruta del proveedor', 'Certificados puros e híbridos experimentales para pilotar hoy'],
          ['Protección de claves', 'Claves en disco, a menudo compartidas', 'HSM, con un coste considerable', 'HSM, KMS cloud o Vault, a tu elección'],
          ['Despliegue', 'Donde se ejecuten los scripts', 'On-premise, pesada de operar', 'SaaS, tu cuenta de AWS o Kubernetes on-premise'],
          ['Dependencia', 'Atada a quien los escribió', 'Licencias y agentes propietarios', 'Código abierto, estándares abiertos, API abierta'],
        ],
      },
      trust: {
        eyebrow: 'Confianza',
        title: 'Construida para inspirar confianza',
        items: [
          {
            title: 'Código abierto',
            body: 'El código es público y auditable. Tu equipo de seguridad puede revisar exactamente qué protege tus dispositivos, y nunca quedas atado a un proveedor.',
          },
          {
            title: 'Estándares, no inventos',
            body: 'Basada en los estándares abiertos que ya hablan tu hardware y tu software, y en los algoritmos post-cuánticos del NIST. Sin formatos propietarios, sin sorpresas.',
          },
          {
            title: 'Evidencias para auditoría',
            body: 'Cada emisión, renovación y revocación deja un rastro que tu equipo de seguridad y tus auditores pueden seguir, lo que respalda tus auditorías de NIS2, del Reglamento de Ciberresiliencia e IEC 62443.',
          },
          {
            title: 'Europea y pensada para durar',
            body: 'Desarrollada en Euskadi, uno de los polos industriales de Europa. Código abierto, estándares abiertos y autoalojamiento: tu ancla de confianza nunca depende del futuro de un único proveedor.',
          },
        ],
      },
      cta: {
        left: {
          eyebrow: 'Da el primer paso',
          heading: 'Diseñemos juntos tu PKI y tu hoja de ruta post-cuántica.',
          btn: 'Habla con un experto',
        },
        right: {
          eyebrow: 'Newsletter',
          heading: 'Novedades de PKI, post-cuántica y regulación, y noticias del producto. Una vez al mes, sin relleno.',
          inputPlaceholder: 'tu@email.com',
          submitLabel: 'Suscribirse',
        },
      },
      faq: {
        eyebrow: 'Preguntas frecuentes',
        lead: '¿No encuentras tu pregunta? Habla directamente con el equipo que construye Lamassu.',
        cta: 'Habla con un experto',
        title: 'Lo que nos preguntan CISOs y CTOs',
        items: [
          {
            q: '¿Tenemos que sustituir nuestra PKI actual?',
            a: 'No. Lamassu puede funcionar como PKI dedicada a dispositivos junto a tu PKI corporativa, o importar las autoridades de certificación que ya operas. La mayoría de las organizaciones empiezan con una línea de producto o una planta y crecen desde ahí.',
          },
          {
            q: '¿Nuestros dispositivos necesitan un agente propietario?',
            a: 'No. Lamassu usa protocolos abiertos — EST y CMP — que muchos dispositivos industriales, gateways y sistemas operativos ya soportan. Donde no es así, existen clientes de código abierto.',
          },
          {
            q: '¿Los certificados post-cuánticos están listos para producción?',
            a: 'Todavía no, y lo decimos abiertamente. El soporte post-cuántico de Lamassu es experimental: implementa los estándares ML-DSA y SLH-DSA del NIST y certificados híbridos basados en un estándar del IETF que aún se está cerrando, con las claves protegidas por software por ahora. Se ofrece en acceso anticipado para que puedas probar, medir y planificar tu migración ahora, y pasar a producción a medida que maduren los estándares y los dispositivos.',
          },
          {
            q: '¿Dónde se guardan nuestras claves privadas?',
            a: 'Donde lo exija tu política de seguridad: módulos HSM mediante PKCS#11, AWS KMS, HashiCorp Vault o un motor software para desarrollo y pruebas. Con HSMs y AWS KMS, las claves de CA nunca salen del hardware.',
          },
          {
            q: '¿Cuánto tardamos en empezar?',
            a: 'Con el SaaS o la imagen de AWS, un piloto puede estar emitiendo certificados en días, no en meses. La mayoría de los equipos empiezan con una autoridad de certificación, una línea de producto y unos cuantos dispositivos dándose de alta solos; a partir de ahí, escalar es cuestión de política, no de reingeniería.',
          },
          {
            q: '¿Lamassu nos hace cumplir el CRA o NIS2?',
            a: 'Ningún producto lo hace por sí solo. Lamassu cubre requisitos técnicos clave — identidades únicas de dispositivo, comunicaciones protegidas, un ciclo de vida de credenciales gestionado y evidencias trazables — y te ayudamos a situarlo dentro de tus obligaciones concretas.',
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
      title: 'Lamassu | Gailuen identitaterako PKI irekia — EST eta CMPrekin automatizatua, post-kuantikorako prest',
    },
    home: {
      hero: {
        kicker: 'PKI irekia · Gailuen identitatea · Post-kuantikorako prest',
        title: 'Konfiantzazko identitatea',
        titleAccent: 'konektatutako gailu bakoitzarentzat',
        announce: 'Berria · Ziurtagiri post-kuantikoak aurretiazko sarbidean',
        toasts: ['Ziurtagiria automatikoki berritua', 'Gailu berria EST bidez alta emanda', 'Ziurtagiri hibrido post-kuantikoa jaulkia'],
        lead:
          'Lamassu enpresa-mailako PKI irekia da, ziurtagiriak berez jaulki, berritu eta ezeztatzen dituena — EST eta CMP bezalako estandar irekien bidez, zuk aukeratutako HSM edo cloud KMSan gordetako gakoekin, eta gaur bertan probatzen has zaitezkeen ziurtagiri post-kuantikoekin.',
        ctaPrimary: 'Hitz egin aditu batekin',
        ctaSecondary: 'Ikusi hedapen-aukerak',
        proofAria: 'Lamassuri buruzko datu nagusiak',
        proof: [
          'PKI osoa: CAak, gakoak, CRL eta OCSP',
          'EST eta CMPrekin automatizatua',
          'PQC ziurtagiri puru eta hibrido esperimentalak',
          'SaaS, AWS edo on-premise',
          'Kode irekia',
        ],
      },
      logos: {
        aria: 'Lamassurekin lan egiten duten enpresak',
        title: 'Lamassurekin lan egiten duten enpresa industrialak',
      },
      whyNow: {
        eyebrow: 'Zergatik orain',
        today: 'Gaur',
        title: 'Hiru erlojuk egiten dute lasterka zure ziurtagirien aurka',
        lead:
          'Ziurtagiriek gero eta bizitza laburragoa dute, araudiak gailuaren segurtasuna salmenta-baldintza bihurtzen du, eta gaur egungo ziurtagirien kriptografiak ere badu iraungitze-data. Horietako edozeinek eskuzko PKIa jasanezin bihurtzen du. Hirurek batera, zuzendaritza-kontseiluko arrisku bihurtzen dute.',
        items: [
          {
            value: '47 egun',
            label: 'TLS ziurtagiri publiko baten gehieneko iraupena 2029an',
            body:
              'Industriak ziurtagiri publikoen baliozkotasuna 398 egunetik 47ra murriztea bozkatu du. Berritzeak zortzi aldiz maizago egingo dira, eta presio bera iristen ari da PKI pribatu eta gailuetakoetara. Kalkulu-orriek eta oroigarriek askoz lehenago uzten diote funtzionatzeari.',
            source: 'CA/Browser Forum · Ballot SC-081 (2025)',
          },
          {
            value: '2027 abe.',
            label: 'Zibererresilientzia Erregelamendua (CRA) guztiz aplikatzen da',
            body:
              'EBn saltzen den elementu digitalak dituen produktu orok diseinutik segurua izan beharko du: identitate bakarrak, komunikazio babestuak, eguneratze seguruak. Ahultasunak jakinarazteko betebeharrak 2026ko irailetik aplikatzen dira jada.',
            source: '(EB) 2024/2847 Erregelamendua',
          },
          {
            value: '2030',
            label: 'RSA eta ECC erretiratzen hasiko dira',
            body:
              'Atlantikoaren bi aldeetako trantsizio-planek 2030ean hasiko dira konputazio kuantikoaren aurrean ahulak diren algoritmoak baztertzen, eta 2035erako erretiratuko dituzte. Aurten bidaltzen duzun gailua eremuan egongo da oraindik hori gertatzen denean.',
            source: 'NIST IR 8547 · EBren PQC ibilbide-orri koordinatua (2025)',
          },
        ],
        closing:
          'Irtenbide iraunkor bakarra ziurtagiriaren bizi-ziklo osoa automatizatzen duen eta gailu bakoitza eskuz ukitu gabe bere kriptografia alda dezakeen PKIa da. Horretarako eraiki da Lamassu.',
      },
      pillars: {
        eyebrow: 'Plataforma',
        title: 'Hiru zutabe, plataforma bakarra',
        lead:
          'Lamassuk ziurtapen-agintari osoa, estandarretan oinarritutako automatizazioa eta arintasun kriptografikoa uztartzen ditu — segurtasunak kontrola mantendu dezan eta eragiketek suteak itzaltzeari utz diezaioten.',
        items: [
          {
            tag: 'PKIa lehenik',
            title: 'PKI osoa, ez ziurtagirien osagarri bat',
            body:
              'Erro- eta menpeko ziurtapen-agintariak, jaulkipen-profilak, erregistro- eta balidazio-agintariak, CRL eta OCSP: ekoizpeneko PKI batek behar duen guztia, zure taldeak gobernatu dezakeen plataforma bakarrean.',
            points: [
              'Maila anitzeko CA hierarkiak, sortuak edo inportatuak',
              'CA gakoak HSMan, cloud KMSan edo Vaulten',
              'Ezeztapena CRL eta OCSP bidez argitaratua',
            ],
            link: 'Zer dakar →',
          },
          {
            tag: 'Estandarren bidezko automatizazioa',
            title: 'Alta eta berritzea giza esku-hartzerik gabe',
            body:
              'Gailuek eta zerbitzariek beren ziurtagiriak lortu, berritu eta ordezkatzen dituzte EST eta CMP erabiliz — hardware eta software industrialak dagoeneko dakartzan IETFko estandar irekiak. Agente jabedunik gabe, scriptik gabe, hornitzailearekiko menpekotasunik gabe.',
            points: [
              'EST eta CMP bidezko erroldatzea berez',
              'Berriro erroldatze automatikoa iraungi aurretik',
              'Politikak produktu-lerro, planta edo bezeroko',
            ],
            link: 'Nola funtzionatzen du automatizazioak →',
          },
          {
            tag: 'Post-kuantikorako prest',
            title: 'Gaur proba dezakezun arintasun kriptografikoa',
            body:
              'Jaulki ziurtagiri post-kuantiko puruak eta hibridoak klasikoen ondoan. Balidatu migrazioa zure laborategian orain, eta zabaldu politika bidez zure gailuak prest daudenean.',
            points: [
              'NISTek estandarizatutako algoritmo post-kuantikoak',
              'Ziurtagiri hibridoak: klasikoa + post-kuantikoa',
              'CA bera, fluxu berak, API bera',
            ],
            link: 'Esploratu post-kuantikoa →',
          },
        ],
      },
      overview: {
        eyebrow: 'Kontsola',
        title: 'Kontsola bakarra agintari, ziurtagiri eta gailu guztietarako',
        body:
          'Segurtasun- eta eragiketa-taldeek PKIaren ikuspegi bakarra eta denbora errealekoa partekatzen dute: nork zer jaulki duen, zer dagoen iraungitzeko zorian, zer ezeztatu den eta zergatik — laborategiko prototipo batetik ekoizpeneko flota oso bateraino.',
        imageAlt: 'Kudeatutako gailuen inbentarioa erakusten duen Lamassu kontsola',
        blocks: [
          {
            title: 'Arriskua, gertatu aurretik ikusgai.',
            body1:
              'Agintari eta ingurune guztietako ziurtagiri aktiboak, iraungitzear daudenak eta ezeztatuak, ikuspegi bakarrean. Desbideratzeak erabilgarritasunean eragin aurretik ikusten dira.',
          },
          {
            title: 'Gailu bakoitza, bere identitatea eta egoera.',
            body1:
              'Gailu bakoitzak erakusten du aktibo, ezeztatuta, bajan edo identitatearen zain dagoen, eta taldeak kontsolatik bertatik jardun dezake.',
          },
          {
            title: 'Zure negozioa bezala antolatua.',
            body1:
              'Taldeek, etiketek eta erregistro-agintariek PKIa zure produktu-lerro, planta eta bezeroetara eramaten dute, sarbide-kontrol eta trazabilitate egokiarekin.',
          },
        ],
      },
      pqc: {
        badge: 'Esperimentala · Aurretiazko sarbidea',
        title: 'Hasi zure migrazio post-kuantikoa premiazko bihurtu aurretik',
        lead:
          'RSA eta ECC hausteko gai diren ordenagailu kuantikoak ez daude oraindik, baina aurten hedatzen dituzun gailuek funtzionatzen jarraituko dute iristen direnean. Lamassurekin gaur jaulki ditzakezu ziurtagiri post-kuantikoak, zure taldeek eragina neur dezaten, bateragarritasuna balida dezaten eta migrazioa datu errealekin planifika dezaten, ez suposizioekin.',
        certs: [
          {
            tag: 'Gaur',
            name: 'Klasikoa',
            body: 'RSA eta ECDSA ziurtagiriak dagoeneko ekoizpenean duzun guztirako. Guztiz onartuak eta automatizatuak.',
          },
          {
            tag: 'Trantsizioa',
            name: 'Hibridoa',
            body:
              'Ziurtagiri bat, bi sinadura — klasikoa eta post-kuantikoa — IETFren estandar berriaren arabera lotuak. Segurua izaten jarraitzen du bi algoritmoetako edozeinek eusten dion bitartean.',
          },
          {
            tag: 'Helmuga',
            name: 'Post-kuantiko purua',
            body:
              'ML-DSA edo SLH-DSA bakarrik, NISTek estandarizatu bezala. Bi muturrak zuk kontrolatzen dituzun ekosistema berrietarako, eta zure stacka prest dagoela frogatzeko.',
          },
        ],
        points: [
          {
            title: 'Harrapatu orain, deszifratu gero',
            body: 'Erasotzaile batek gaur graba dezake trafikoa eta bihar hautsi. Bizitza luzeko aktiboak eta sekretuak agerian daude jada.',
          },
          {
            title: 'Migrazioa politika bidez, ez joan-etorri bidez',
            body: 'Berritzea automatizatuta dagoenez, produktu-lerro bat ziurtagiri post-kuantikoetara pasatzea konfigurazio-aldaketa bat da, ez eremuko kanpaina bat. Onartzen duten gailuek hurrengo berritzean hartzen dute.',
          },
          {
            title: 'Ezustekorik ez 2030ean',
            body: 'Gako eta sinadura post-kuantikoak handiagoak dira. Orain probatzeak erakusten du zein gailuk, loturak eta firmwarek behar duten arreta, planifikatzeko denbora dagoen bitartean.',
          },
        ],
        note:
          'Euskarri post-kuantikoa esperimentala da eta pilotuetarako aurretiazko sarbide gisa eskaintzen da. Oraindik ixten ari diren NIST estandarrei eta IETF zirriborroei jarraitzen die. Oraingoz, gako post-kuantikoak software bidez babesten dira, HSM eta cloud KMS hornitzaileek algoritmo hauek onartu arte.',
        ctaPrimary: 'Eskatu PQC pilotu bat',
        ctaSecondary: 'Gehiago PQCri buruz',
      },
      automation: {
        eyebrow: 'Estandarren bidezko automatizazioa',
        title: 'Beren kabuz berritzen diren ziurtagiriak. Beren kabuz alta ematen duten gailuak.',
        lead:
          'Ziurtagiriek eragindako eten gehienak ez dira erasoak: inork berritu ez dituen ziurtagiri iraungiak dira. Lamassuk pertsonak begiztatik ateratzen ditu, zure gailuek, gatewayek eta zerbitzariek dagoeneko hitz egiten dituzten erroldatze-protokolo irekiekin.',
        steps: [
          {
            title: 'Alta',
            body: 'Gailu berri batek bere fabrikako identitatea frogatzen du eta bere ziurtagiri operatiboa automatikoki jasotzen du, ekoizpen-lerroan edo eremuko lehen konexioan.',
          },
          {
            title: 'Jarraipena',
            body: 'Ziurtagiri bakoitzaren iraungitzea, agintari jaulkitzailea eta gailua jarraitzen dira. Zure taldeak abisua jasotzen du ezer gorabehera bihurtu baino askoz lehenago.',
          },
          {
            title: 'Berritzea',
            body: 'Gailuak beren kabuz erroldatzen dira berriro iraungi aurretik, beren produktu-lerrorako definitutako politikaren arabera. Txartelik gabe, mantentze-leihorik gabe.',
          },
          {
            title: 'Ezeztapena',
            body: 'Gailu arriskatu edo erretiratu batek segundotan galtzen du konfiantza, eta CRL edo OCSP kontsultatzen duten sistema guztiek dakite.',
          },
        ],
        protocols: [
          {
            name: 'EST',
            spec: 'RFC 7030',
            status: 'Eskuragarri',
            body:
              'IoT eta industria-gailu askok dagoeneko dakarten ziurtagiri-altarako estandar arina. Zure gailuak EST hitz egiten badu, dagoeneko Lamassurekin hitz egiten du.',
          },
          {
            name: 'CMP',
            spec: 'RFC 9483',
            status: 'Aurretiazko sarbidea',
            body:
              'Automatizazio industrialeko erreferentziazko estandarra, ziurtagiriaren bizi-ziklo osoa behar duten kontrolagailu, PLC eta planta-sareetarako pentsatua.',
          },
        ],
        closing:
          'Estandar irekiek esan nahi dute ez dagoela agente jabedunik zure gailuetan eta ez dagoela menpekotasunik: zure gailuek protokolo berak hitz egiten jarraituko dute bihar edozer erabakita ere.',
      },
      capabilities: {
        eyebrow: 'Gaitasunak',
        title: 'Zer dakar',
        lead: 'Ekoizpeneko PKI batek behar duen guztia, plataforma bakarrean, web kontsolarekin, saio-hasiera bakarrarekin eta API osoarekin.',
        items: [
          {
            title: 'Ziurtapen-agintariak',
            body: 'Eraiki eta gobernatu zure hierarkia, lineaz kanpoko errotik CA jaulkitzaileetaraino, edo inportatu dagoeneko dituzun agintariak.',
            points: ['Erro-, tarteko eta CA jaulkitzaileak', 'Dauden CAak inportatzea, gakoarekin edo gabe', 'CAen berritzea, trazabilitatea galdu gabe'],
          },
          {
            title: 'Gakoen zaintza',
            body: 'Motor kriptografiko konektagarriek gako pribatuak zure segurtasun-politikak eskatzen duen lekuan gordetzen dituzte, hardwarean edo hodeian.',
            points: ['Hardware HSMak PKCS#11 bidez', 'AWS KMS, AWS Secrets Manager, HashiCorp Vault', 'Hainbat motor aldi berean'],
          },
          {
            title: 'Jaulkipen-politikak',
            body: 'Jaulkipen-profilek zehazten dute ziurtagiri batek zer izan dezakeen eta zenbat iraungo duen, produktu-lerro edo erabilera-kasu bakoitzeko.',
            points: ['Profil berrerabilgarriak produktu-lerroko', 'Ziurtagiri bakoitzak zer izan dezakeen eta zenbat iraungo duen', 'Onartutako kriptografia bakarrik jaulkitzen da'],
          },
          {
            title: 'Erregistroa eta gailuen identitatea',
            body: 'Erregistro-agintariek erabakitzen dute nork eman dezakeen alta eta nola. Inbentario bizi batek gailu bakoitza, bere identitate-historia eta ziurtagiriak jarraitzen ditu, horniduratik bajara arte.',
            points: ['Alta- eta berritze-politikak produktu-lerroko', 'Gailu-talde dinamikoak, etiketak eta metadatuak', 'Identitate-historia osoa gailu bakoitzeko'],
          },
          {
            title: 'Balidazioa eta ezeztapena',
            body: 'Balidazio-agintariek ezeztapen-egoera argitaratzen dute, sistema bakoitzak segundotan jakin dezan zein identitatetan utzi behar dion konfiantza izateari.',
            points: ['CRL banaketa', 'OCSP erantzulea', 'Ezeztapen-egoera sistema guztien eskura'],
          },
          {
            title: 'Alertak eta integrazioak',
            body: 'Alerta proaktiboek eta erabiltzeko prest dauden konektoreek Lamassu zure taldeek dagoeneko erabiltzen dituzten tresna eta plataformekin integratzen dute.',
            points: ['Iraungitze-alertak emailez edo webhook bidez', 'Zure segurtasun-tresnekin konektatzen da', 'AWS IoT Corerekin integrazio natiboa'],
          },
        ],
      },
      deployment: {
        eyebrow: 'Hedapena',
        title: 'Zure PKIa, zure politikak dioen lekuan',
        lead:
          'Hasi minututan zerbitzu kudeatu gisa, exekutatu zure AWS kontuaren barruan, edo erabili on-premise — sare isolatuetan ere bai. Produktu bera, gaitasun berak, zuk aukeratzen duzu kontrol-maila.',
        operatedByLabel: 'Nork kudeatzen du',
        bestForLabel: 'Egokiena',
        options: [
          {
            tag: 'SaaS',
            title: 'Lamassu Cloud',
            body: 'Gure taldeak guztiz kudeatua. Ebaluaziotik ekoizpenera bide azkarrena, kudeatu beharreko azpiegiturarik gabe.',
            operatedBy: 'Guk — guztiz kudeatua',
            bestFor: 'PKI eragiketetarako langile espezifikorik gabe azkar aurrera egin nahi duten taldeak',
          },
          {
            tag: 'AWS Marketplace · EC2',
            title: 'Lamassu AWSn',
            body: 'Amazon EC2rako prest dagoen irudia. Abiarazi zure AWS kontu eta eskualdean, zure lan-kargen ondoan eta zure cloud gobernupean.',
            operatedBy: 'Zuk, zure AWS kontuan',
            bestFor: 'Datuak beren kontuan mantendu behar dituzten cloud-first erakundeak',
          },
          {
            tag: 'Kubernetes · Helm',
            title: 'On-premise eta hodei pribatua',
            body: 'Helm chart ofizialak edozein Kubernetes klusterrerako: zure datu-zentroan, hodei pribatu batean edo sare isolatu batean.',
            operatedBy: 'Zuk, zure azpiegituran',
            bestFor: 'Subiranotasun-eskakizun zorrotzak dituzten ingurune arautu, kritiko eta industrialak',
          },
        ],
        keys:
          'Eredu guztietan zuk aukeratzen duzu non bizi diren zure CAen gakoak. PKCS#11 HSMekin edo AWS KMSekin ez dira inoiz hardwaretik ateratzen; AWS Secrets Manager, HashiCorp Vault edo software-motor batek software bidezko zaintza onargarria den inguruneak estaltzen dituzte.',
      },
      compare: {
        eyebrow: 'Konparazioa',
        title: 'Zergatik pasatzen diren taldeak Lamassura',
        lead:
          'Erakunde gehienak scriptekin eta kalkulu-orri batekin hasten dira, edo ordenagailu eramangarri eta web zerbitzarietarako pentsatutako PKI korporatibo bat luzatuz. Biak hausten dira gailuen eskalan.',
        headers: ['', 'Scriptak eta kalkulu-orriak', 'PKI korporatibo tradizionala', 'Lamassu'],
        rows: [
          ['Gailuen alta', 'Eskuzko urratsak edo proiektu bakoitzeko script neurrira eginak', 'Erabiltzaile eta zerbitzarietarako pentsatua; gailu-protokolo gutxi', 'Esku-hartzerik gabe, EST eta CMP bidez'],
          ['Berritzea', 'Egutegiko oroigarriak; etenak bat ahazten denean', 'Askotan eskuzkoa edo agenteetan oinarritua', 'Automatikoa eta politika bidezkoa, iraungi aurretik'],
          ['Prestaketa post-kuantikoa', 'Landu gabe', 'Hornitzailearen ibilbide-orrian', 'Ziurtagiri puru eta hibrido esperimentalak gaur pilotatzeko'],
          ['Gakoen babesa', 'Gakoak diskoan, askotan partekatuak', 'HSMa, kostu handiarekin', 'HSMa, cloud KMSa edo Vault, zuk aukeratuta'],
          ['Hedapena', 'Scriptak exekutatzen diren lekuan', 'On-premise, kudeatzeko astuna', 'SaaS, zure AWS kontua edo on-premise Kubernetes'],
          ['Menpekotasuna', 'Idatzi zituenari lotua', 'Lizentzia eta agente jabedunak', 'Kode irekia, estandar irekiak, API irekia'],
        ],
      },
      trust: {
        eyebrow: 'Konfiantza',
        title: 'Konfiantza emateko eraikia',
        items: [
          {
            title: 'Kode irekia',
            body: 'Kodea publikoa eta auditagarria da. Zure segurtasun-taldeak zehatz berrikus dezake zerk babesten dituen zure gailuak, eta ez zara inoiz hornitzaile bati lotuta geratzen.',
          },
          {
            title: 'Estandarrak, ez asmakizunak',
            body: 'Zure hardwareak eta softwareak dagoeneko hitz egiten dituzten estandar irekietan eta NISTen algoritmo post-kuantikoetan oinarritua. Formatu jabedunik gabe, ezustekorik gabe.',
          },
          {
            title: 'Auditoriarako ebidentziak',
            body: 'Jaulkipen, berritze eta ezeztapen orok zure segurtasun-taldeak eta auditoreek jarrai dezaketen arrastoa uzten du, eta NIS2, Zibererresilientzia Erregelamendua eta IEC 62443 auditoriak babesten ditu.',
          },
          {
            title: 'Europarra eta iraunkorra',
            body: 'Euskal Herrian garatua, Europako gune industrialetako batean. Kode irekia, estandar irekiak eta norberak ostatatzeko aukera: zure konfiantza-aingura ez da inoiz hornitzaile bakar baten etorkizunaren menpe egongo.',
          },
        ],
      },
      cta: {
        left: {
          eyebrow: 'Eman lehen urratsa',
          heading: 'Diseina ditzagun elkarrekin zure PKIa eta zure ibilbide-orri post-kuantikoa.',
          btn: 'Hitz egin aditu batekin',
        },
        right: {
          eyebrow: 'Newsletter',
          heading: 'PKI, post-kuantiko eta araudiari buruzko berriak, eta produktuaren albisteak. Hilean behin, betegarririk gabe.',
          inputPlaceholder: 'zure@email.com',
          submitLabel: 'Harpidetu',
        },
      },
      faq: {
        eyebrow: 'Ohiko galderak',
        lead: 'Ez duzu zure galdera aurkitu? Hitz egin zuzenean Lamassu eraikitzen duen taldearekin.',
        cta: 'Hitz egin aditu batekin',
        title: 'CISO eta CTOek egiten dizkiguten galderak',
        items: [
          {
            q: 'Gure egungo PKIa ordeztu behar al dugu?',
            a: 'Ez. Lamassuk gailuetarako PKI dedikatu gisa funtziona dezake zure PKI korporatiboaren ondoan, edo dagoeneko dituzun ziurtapen-agintariak inporta ditzake. Erakunde gehienak produktu-lerro edo planta batekin hasten dira eta hortik hazten dira.',
          },
          {
            q: 'Gure gailuek agente jabedun bat behar al dute?',
            a: 'Ez. Lamassuk protokolo irekiak erabiltzen ditu — EST eta CMP —, industria-gailu, gateway eta sistema eragile askok dagoeneko onartzen dituztenak. Hala ez denean, kode irekiko bezeroak daude.',
          },
          {
            q: 'Ziurtagiri post-kuantikoak ekoizpenerako prest al daude?',
            a: 'Oraindik ez, eta argi esaten dugu. Lamassuren euskarri post-kuantikoa esperimentala da: NISTen ML-DSA eta SLH-DSA estandarrak eta oraindik ixten ari den IETF estandar batean oinarritutako ziurtagiri hibridoak inplementatzen ditu, gakoak oraingoz software bidez babestuta. Aurretiazko sarbide gisa eskaintzen da zure migrazioa orain probatu, neurtu eta planifikatu ahal izateko dago, eta ekoizpenera pasatzeko estandarrak eta gailuak heldu ahala.',
          },
          {
            q: 'Non gordetzen dira gure gako pribatuak?',
            a: 'Zure segurtasun-politikak eskatzen duen lekuan: HSM moduluak PKCS#11 bidez, AWS KMS, HashiCorp Vault, edo garapen eta probetarako software-motor bat. HSMekin eta AWS KMSekin, CA gakoak ez dira inoiz hardwaretik ateratzen.',
          },
          {
            q: 'Zenbat denbora behar dugu hasteko?',
            a: 'SaaSarekin edo AWS irudiarekin, pilotu bat egunetan egon daiteke ziurtagiriak jaulkitzen, ez hilabeteetan. Talde gehienak ziurtapen-agintari batekin, produktu-lerro batekin eta beren kabuz alta ematen duten gailu gutxi batzuekin hasten dira; hortik aurrera, eskalatzea politika kontua da, ez berringeniaritza.',
          },
          {
            q: 'Lamassuk CRA edo NIS2 betetzea bermatzen al digu?',
            a: 'Produktu batek ere ez du hori berez egiten. Lamassuk funtsezko eskakizun teknikoak betetzen ditu — gailuen identitate bakarrak, komunikazio babestuak, kudeatutako kredentzialen bizi-zikloa eta ebidentzia trazagarriak — eta zure betebehar zehatzetan non kokatzen den zehazten laguntzen dizugu.',
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
