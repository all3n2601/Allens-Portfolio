export type ProjectLink = {
  label: string;
  href: string;
  icon: string;
};

export type StackIcon = {
  name: string;
  src: string;
  /** Visual role — data sources get a small caption under the name */
  role?: 'stack' | 'data-source';
};

export type Project = {
  slug: string;
  title: string;
  icon: string;
  image?: string;
  imageAlt?: string;
  imageFit?: 'cover' | 'contain';
  logo?: string;
  logoAlt?: string;
  visualLabel?: string;
  visualNote?: string;
  summary: string;
  highlights?: string[];
  tags: string[];
  /** Brand icons shown at the end of a featured data-work card */
  stackIcons?: StackIcon[];
  caseStudy?: {
    problem: string;
    sources: string;
    architecture: string[];
    quality: string;
    result: string;
    next?: string;
  };
  githubRepo?: string; // "owner/repo" for OG previews
  category:
    | 'Data Engineering'
    | 'Mobile'
    | 'Web'
    | 'IoT'
    | 'AI/ML'
    | 'Systems'
    | 'Research'
    | 'Other';
  status: 'In Production' | 'Completed' | 'In Progress';
  featured?: boolean;
  year?: number;
  links?: ProjectLink[];
};

export const projects: Project[] = [
  {
    slug: 'sharkninja-analytics',
    title: 'Consumer Feedback at Scale',
    icon: 'fa-solid fa-database',
    logo: '/images/logos/sharkninja.svg',
    logoAlt: 'SharkNinja',
    summary: 'At SharkNinja, built Snowflake/dbt transformations to standardize 12+ survey formats and a multi-pass Cortex thematic-analysis pipeline across 256M consumer-feedback rows. Diagnosed a deduplication defect that silently dropped survey responses, restoring data completeness.',
    highlights: ['256M consumer-feedback rows', '12+ survey formats standardized'],
    tags: ['SQL', 'Snowflake', 'dbt', 'Snowflake Cortex', 'CDC', 'Data Quality'],
    category: 'Data Engineering',
    status: 'Completed',
    featured: true,
    caseStudy: {
      problem: 'Make heterogeneous survey responses consistent and complete enough for consumer-intelligence analysis.',
      sources: '12+ internal survey formats and a 256M-row consumer-feedback corpus at SharkNinja.',
      architecture: ['Survey responses', 'Snowflake + dbt transformations', 'Incremental loads + CDC', 'Multi-pass Cortex analysis'],
      quality: 'Parsed, standardized, and validated survey formats with soft-delete handling. Investigated a deduplication defect that silently discarded valid responses.',
      result: 'Restored survey-data completeness and delivered transformations and thematic analysis during the Applied AI & Analytics internship (June–August 2026). Internal data and interfaces are not published.'
    },
    stackIcons: [
      { name: 'Snowflake', src: '/images/logos/stack/snowflake.svg', role: 'stack' },
      { name: 'dbt Cloud', src: '/images/logos/stack/dbt.svg', role: 'stack' },
      { name: 'Oracle', src: '/images/logos/stack/oracle.svg', role: 'data-source' },
      { name: 'Palantir', src: '/images/logos/stack/palantir.svg', role: 'data-source' },
      { name: 'Salesforce', src: '/images/logos/stack/salesforce.svg', role: 'data-source' }
    ],
    links: [{ label: 'Experience details', href: '#experience', icon: 'fa-solid fa-arrow-down' }]
  },
  {
    slug: 'hifive',
    title: 'HiFive',
    icon: 'fa-solid fa-chart-line',
    visualLabel: 'NDA-protected work',
    visualNote: 'Product interface withheld. The verified scope and shipped system details remain available below.',
    summary:
      'VoC intelligence platform ingesting multi‑retailer reviews with launch star prediction + LLM rationale, part‑contagion graph, real‑time SSE dashboards, and Jira auto‑ticketing.',
    highlights: ['🏆 Winner — SharkNinja JailBreak Edu', 'NDA (portfolio reference only)'],
    tags: ['Next.js', 'FastAPI', 'PostgreSQL', 'Claude API', 'Redis', 'Docker', 'SSE'],
    category: 'Web',
    status: 'Completed',
    featured: true
  },
  {
    slug: 'respulse',
    title: 'ResPulse',
    icon: 'fa-solid fa-tower-broadcast',
    image: '/images/projects/respulse-product.webp',
    imageAlt: 'ResPulse mobile app screens showing SOS beacon, map, mesh relay, and offline guides',
    visualLabel: 'Product UI · light & dark modes',
    summary:
      'Offline-first disaster-response platform with BLE distress relays, resilient field workflows, a FastAPI coordination service, and a live operator command center.',
    highlights: ['Offline-first emergency prototype', 'Public command dashboard'],
    tags: ['Flutter', 'FastAPI', 'BLE', 'React', 'PostgreSQL', 'WebSocket'],
    githubRepo: 'all3n2601/ResPulse',
    category: 'Systems',
    status: 'In Progress',
    featured: true,
    links: [
      {
        label: 'Live',
        href: 'https://respulse-dashboard.allsurej.chatgpt.site',
        icon: 'fa-solid fa-arrow-up-right-from-square'
      },
      {
        label: 'Code',
        href: 'https://github.com/all3n2601/ResPulse',
        icon: 'fa-brands fa-github'
      }
    ]
  },
  {
    slug: 'arrival',
    title: 'Arrival',
    icon: 'fa-solid fa-compass',
    image: '/images/projects/arrival-product.webp',
    imageAlt: 'Arrival app screens: arrival compass, Ask AI, document vault, and budget',
    visualLabel: 'Real mobile app · product screens',
    summary:
      'Privacy-first arrival companion for international students across 14 destinations, combining an encrypted document vault, deadlines, budgeting, and source-grounded guidance.',
    highlights: ['14 destination countries', 'AES-256-GCM on-device vault'],
    tags: ['Flutter', 'Next.js', 'FastAPI', 'PostgreSQL', 'pgvector', 'Redis'],
    githubRepo: 'all3n2601/international-students',
    category: 'Mobile',
    status: 'In Progress',
    featured: true,
    links: [
      {
        label: 'Code',
        href: 'https://github.com/all3n2601/international-students',
        icon: 'fa-brands fa-github'
      }
    ]
  },
  {
    slug: 'transitforge',
    title: 'TransitForge',
    icon: 'fa-solid fa-train-subway',
    image: '/images/projects/transitforge-product.webp',
    imageAlt: 'TransitForge lakehouse architecture from live feeds through Airflow and PySpark to Iceberg',
    visualLabel: 'Pipeline architecture · source repository',
    summary:
      'Airflow/PySpark lakehouse ingesting six live MBTA and NWS feeds every five minutes. A verified run processed 2,722 records into 138 explainable station-route resilience scores in 5.6 seconds, with replayable snapshots and data-quality quarantine.',
    highlights: ['2,722 records → 138 station-route scores', '18 automated tests'],
    tags: ['Python', 'PySpark', 'Airflow', 'Iceberg', 'Parquet', 'MinIO'],
    githubRepo: 'all3n2601/transitforge',
    category: 'Data Engineering',
    caseStudy: {
      problem: 'Turn changing transit and weather conditions into explainable Boston station-route resilience scores.',
      sources: 'Six live MBTA and National Weather Service feeds, captured every five minutes as complete paginated snapshots with checksums.',
      architecture: ['MBTA + NWS feeds', 'Airflow snapshot capture', 'PySpark validation + scoring', 'Iceberg / Parquet on MinIO'],
      quality: 'Capture-level partitioning supports replayable outputs; data-quality quarantine separates invalid records from scoring. Eighteen automated tests cover the pipeline.',
      result: 'A verified Boston run produced 138 scores from 2,722 records in 5.6 seconds. A separate architecture validation used 3.48M NYC trips at up to 95K rows/second with atomic overwrites and time travel; this is not the Boston feed volume.',
      next: 'Next: measure score stability over longer capture windows and add freshness alerts and documented quarantine-recovery workflows.'
    },
    status: 'In Progress',
    featured: true,
    links: [
      {
        label: 'Code',
        href: 'https://github.com/all3n2601/transitforge',
        icon: 'fa-brands fa-github'
      }
    ]
  },
  {
    slug: 'secure-reliable-file-transfer',
    title: 'Secure Reliable File Transfer',
    icon: 'fa-solid fa-shield-halved',
    image: '/images/projects/secure-file-transfer-product.webp',
    imageAlt: 'Client report for a successful encrypted one-gigabyte file transfer',
    visualLabel: 'Real test output · 1 GB transfer',
    summary:
      'Secure file transfer built on raw UDP sockets with hand-crafted headers, sliding-window reliability, authenticated encryption, key derivation, and adversarial network tests.',
    highlights: ['Verified transfers up to 1 GB', 'Replay, tamper, and injection testing'],
    tags: ['Python', 'Raw Sockets', 'UDP', 'AES-GCM', 'HKDF', 'Security'],
    githubRepo: 'all3n2601/CS5700_Group_Project',
    category: 'Systems',
    status: 'Completed',
    featured: false,
    links: [
      {
        label: 'Code',
        href: 'https://github.com/all3n2601/CS5700_Group_Project',
        icon: 'fa-brands fa-github'
      }
    ]
  },
  {
    slug: 'collabcore',
    title: 'CollabCore',
    icon: 'fa-solid fa-people-group',
    image: '/images/projects/collabcore-product.webp',
    imageAlt: 'CollabCore Discover Projects dashboard with match scores and recruiting listings',
    visualLabel: 'Product UI · discover & match',
    summary:
      'Student collaboration platform with vector similarity team matching and a normalized backend model; shipped with Docker and AWS CI/CD.',
    highlights: ['🏆 Hackathon winner'],
    tags: ['React', 'FastAPI', 'PostgreSQL', 'Pinecone', 'Docker', 'AWS'],
    category: 'Web',
    status: 'Completed',
    featured: true,
    links: [
      {
        label: 'Code',
        href: 'https://github.com/all3n2601/collabcore',
        icon: 'fa-brands fa-github'
      }
    ]
  },
  {
    slug: 'navx',
    title: 'NavX',
    icon: 'fa-solid fa-car-side',
    image: '/images/projects/navx-product.webp',
    imageAlt: 'NavX ride-sharing landing page with car and bike pool options',
    visualLabel: 'Project UI · running application',
    summary:
      'Real-time ride sharing with WebSocket geo-matching, JWT REST API, and an on-device harassment model (TF Lite) for sub-100ms inference.',
    highlights: ['🥈 2nd place (72 teams)'],
    tags: ['Node.js', 'MongoDB', 'Socket.io', 'TF Lite', 'JWT'],
    githubRepo: 'all3n2601/NavX-CodeHunt',
    category: 'Web',
    status: 'Completed',
    featured: true,
    links: [
      {
        label: 'Code',
        href: 'https://github.com/all3n2601/NavX-CodeHunt',
        icon: 'fa-brands fa-github'
      }
    ]
  },
  {
    slug: 'fasttime',
    title: 'FastTime',
    icon: 'fa-solid fa-heart-pulse',
    image: '/images/projects/fasttime-product.webp',
    imageAlt: 'FastTime landing page with fasting timer preview on phone',
    visualLabel: 'Live product · redesigned landing',
    summary:
      'Health & fasting platform monorepo: Flutter app + Node API + React dashboard, receipt webhooks, and offline-first sync.',
    tags: ['Flutter', 'Node.js', 'MongoDB', 'React'],
    githubRepo: 'all3n2601/FastTime',
    category: 'Mobile',
    status: 'Completed',
    featured: false,
    links: [
      {
        label: 'Live',
        href: 'https://fasttime.shippedbyallen.com',
        icon: 'fa-solid fa-arrow-up-right-from-square'
      },
      {
        label: 'Code',
        href: 'https://github.com/all3n2601/FastTime',
        icon: 'fa-brands fa-github'
      }
    ]
  },
  {
    slug: 'food-alert',
    title: 'Food ALERT',
    icon: 'fa-solid fa-hand-holding-heart',
    image: '/images/projects/food-alert-product.webp',
    imageAlt: 'Food ALERT live site hero connecting surplus food with communities',
    visualLabel: 'Live product · foodalertgo.com',
    summary:
      'Production donation lifecycle system with PostgreSQL state machine, FastAPI microservices, Next.js UI, and 6-signal fraud detection.',
    tags: ['Next.js', 'FastAPI', 'PostgreSQL', 'CI/CD'],
    category: 'Web',
    status: 'Completed',
    featured: true,
    links: [
      { label: 'Live', href: 'https://foodalertgo.com', icon: 'fa-solid fa-arrow-up-right-from-square' }
    ]
  },
  {
    slug: 'applyos',
    title: 'ApplyOS',
    icon: 'fa-solid fa-briefcase',
    visualLabel: 'Private build',
    visualNote: 'A real product capture has not been published yet. No generated stand-in is shown.',
    summary:
      'AI career platform with job tracking (Kanban), ATS scoring, cover-letter generation, mock interviews, and automated job scraping pipelines.',
    tags: ['Next.js', 'TypeScript', 'PostgreSQL', 'Claude API', 'Redis'],
    category: 'Web',
    status: 'Completed',
    featured: false
  },
  {
    slug: 'restaurant-pos',
    title: 'Restaurant POS System',
    icon: 'fa-solid fa-cash-register',
    image: '/images/projects/restaurant-pos-product.webp',
    imageAlt: 'SIGA POS product page with phone mockup showing weekly revenue and transactions',
    visualLabel: 'Production product · SIGA',
    summary:
      'Production POS shipped for UK restaurant chains with WebSocket order sync, offline-first caching, and T-SQL performance tuning.',
    highlights: ['99.9% uptime (reported)', '40% faster order processing, 35% faster APIs'],
    tags: ['Flutter', 'T-SQL', 'WebSocket', 'SQLite', 'Testing'],
    category: 'Mobile',
    status: 'Completed',
    featured: false,
    links: [
      {
        label: 'Live',
        href: 'https://sigainfotech.com/products/siga-pos',
        icon: 'fa-solid fa-arrow-up-right-from-square'
      }
    ]
  },
  {
    slug: 'energyp2p',
    title: 'EnergyP2P',
    icon: 'fa-solid fa-solar-panel',
    image: '/images/projects/energyp2p-product.webp',
    imageAlt: 'EnergyP2P brand over a solar energy landscape from the project assets',
    visualLabel: 'App identity · source repository',
    summary:
      'P2P solar energy trading platform with 3 role-based Flutter clients and an optimized matchmaking algorithm (800ms → 320ms).',
    tags: ['Flutter', 'Firebase', 'Algorithms', 'Encryption'],
    githubRepo: 'all3n2601/EnergyP2P-User-App',
    category: 'Mobile',
    status: 'Completed',
    featured: false,
    links: [
      {
        label: 'Code',
        href: 'https://github.com/all3n2601/EnergyP2P-User-App',
        icon: 'fa-brands fa-github'
      }
    ]
  },
  {
    slug: 'emergency-communication-system',
    title: 'Emergency Communication System',
    icon: 'fa-solid fa-house-tsunami',
    image: '/images/projects/emergency-system-product.webp',
    imageAlt: 'Emergency communication system disaster management interface',
    visualLabel: 'Project UI · running application',
    summary:
      'LoRaWAN-based emergency communication system with sensors + responder dashboard for resilient disaster scenarios.',
    highlights: ["📄 IEEE ICCCSMD'24", '📜 Patent filed (App No. 202441052914)'],
    tags: ['React', 'Arduino', 'LoRaWAN', 'Sensors'],
    githubRepo: 'all3n2601/Natural-Disaster-Escalation-and-Administration-Framework',
    category: 'IoT',
    status: 'Completed',
    featured: false,
    links: [
      {
        label: 'Code',
        href: 'https://github.com/all3n2601/Natural-Disaster-Escalation-and-Administration-Framework',
        icon: 'fa-brands fa-github'
      }
    ]
  }
];
