export type ProjectLink = {
  label: string;
  href: string;
  icon: string;
};

export type Project = {
  slug: string;
  title: string;
  icon: string;
  image?: string;
  imageAlt?: string;
  summary: string;
  highlights?: string[];
  tags: string[];
  githubRepo?: string; // "owner/repo" for OG previews
  category:
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
    slug: 'hifive',
    title: 'HiFive',
    icon: 'fa-solid fa-chart-line',
    image: '/images/projects/hifive-placeholder.png',
    imageAlt: 'HiFive analytics workspace placeholder artwork',
    summary:
      'VoC intelligence platform ingesting multi‑retailer reviews with launch star prediction + LLM rationale, part‑contagion graph, real‑time SSE dashboards, and Jira auto‑ticketing.',
    highlights: ['🏆 Winner — SharkNinja JailBreak Edu', 'NDA (portfolio reference only)'],
    tags: ['Next.js', 'FastAPI', 'PostgreSQL', 'Claude API', 'Redis', 'Docker', 'SSE'],
    category: 'Web',
    status: 'Completed',
    featured: true
  },
  {
    slug: 'collabcore',
    title: 'CollabCore',
    icon: 'fa-solid fa-people-group',
    image: '/images/projects/collabcore-placeholder.png',
    imageAlt: 'CollabCore collaboration network placeholder artwork',
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
        href: 'https://github.com/all3n2601',
        icon: 'fa-brands fa-github'
      }
    ]
  },
  {
    slug: 'navx',
    title: 'NavX',
    icon: 'fa-solid fa-car-side',
    image: '/images/projects/navx-placeholder.png',
    imageAlt: 'NavX ride-sharing platform placeholder artwork',
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
    image: '/images/projects/fasttime-placeholder.png',
    imageAlt: 'FastTime health platform placeholder artwork',
    summary:
      'Health & fasting platform monorepo: Flutter app + Node API + React dashboard, receipt webhooks, and offline-first sync.',
    tags: ['Flutter', 'Node.js', 'MongoDB', 'React'],
    category: 'Mobile',
    status: 'Completed',
    featured: false
  },
  {
    slug: 'food-alert',
    title: 'Food ALERT',
    icon: 'fa-solid fa-hand-holding-heart',
    image: '/images/projects/food-alert-placeholder.png',
    imageAlt: 'Food ALERT logistics platform placeholder artwork',
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
    image: '/images/projects/applyos-placeholder.png',
    imageAlt: 'ApplyOS career platform placeholder artwork',
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
    image: '/images/projects/restaurant-pos-placeholder.png',
    imageAlt: 'Restaurant POS system placeholder artwork',
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
    image: '/images/projects/energyp2p-placeholder.png',
    imageAlt: 'EnergyP2P clean energy trading placeholder artwork',
    summary:
      'P2P solar energy trading platform with 3 role-based Flutter clients and an optimized matchmaking algorithm (800ms → 320ms).',
    tags: ['Flutter', 'Firebase', 'Algorithms', 'Encryption'],
    githubRepo: 'all3n2601/EnergyP2P',
    category: 'Mobile',
    status: 'Completed',
    featured: false,
    links: [
      {
        label: 'Code',
        href: 'https://github.com/all3n2601/EnergyP2P',
        icon: 'fa-brands fa-github'
      }
    ]
  },
  {
    slug: 'emergency-communication-system',
    title: 'Emergency Communication System',
    icon: 'fa-solid fa-house-tsunami',
    image: '/images/projects/emergency-communication-system-placeholder.png',
    imageAlt: 'Emergency communication system disaster-response placeholder artwork',
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
