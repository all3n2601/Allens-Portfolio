export type ExperienceLogo = {
  src: string;
  alt: string;
};

export type Experience = {
  role: string;
  org: string;
  location?: string;
  period: string;
  current?: boolean;
  logo?: string;
  logoAlt?: string;
  logos?: ExperienceLogo[];
  bullets: string[];
};

export type Education = {
  type: 'Graduate' | 'Undergraduate';
  degree: string;
  school: string;
  location?: string;
  period: string;
  gpaBadge?: string;
  courses: string;
  logo?: string;
  logoAlt?: string;
};

export type Honor = {
  icon: string;
  category: 'Hackathon' | 'Publication' | 'Patent';
  title: string;
  subtitle: string;
  venue: string;
};

export const experiences: Experience[] = [
  {
    role: 'Applied AI & Analytics Intern',
    org: 'SharkNinja · Needham, MA',
    period: 'Jun 2026 — Aug 2026',
    logo: '/images/logos/sharkninja.svg',
    logoAlt: 'SharkNinja',
    bullets: [
      'Built Snowflake/dbt transformations to parse, standardize, and validate 12+ survey formats. Added incremental loads, change-data capture, and soft-delete handling for reliable refreshes.',
      'Engineered a multi-pass Snowflake Cortex thematic-analysis pipeline across 256M consumer-feedback rows and diagnosed a deduplication defect that silently dropped survey responses, restoring data completeness.',
      'Automated cross-system Salesforce localization across 12 markets and OCR tagging for 10,000+ Cloudinary assets, reducing turnaround 60% and achieving 95% tagging accuracy.'
    ]
  },
  {
    role: 'Graduate Research Assistant',
    org: 'Northeastern University · FoodALERT Project · Boston, MA',
    period: 'Jan 2026 — Present',
    current: true,
    logos: [
      { src: '/images/logos/damore-mckim.svg', alt: "D'Amore-McKim School of Business" }
    ],
    bullets: [
      'Owned Food ALERT’s full stack for a five-stage donation lifecycle, designing 15+ normalized PostgreSQL tables and stored procedures and building FastAPI services and Next.js workflows.',
      'Built asynchronous risk scoring on six organization and donation signals, auto-flagging high-risk accounts and cutting manual review 60%.',
      'Led the Hetzner-to-AWS migration, deploying FastAPI on ECS Fargate and designing the RDS PostgreSQL/PostGIS, ElastiCache, and S3/Glue data layer with backups and CloudWatch monitoring.'
    ]
  },
  {
    role: 'Software Engineer, Part-Time',
    org: 'Siga Infotech · Trivandrum, India',
    period: 'Apr 2024 — Jul 2025',
    bullets: [
      'Managed multi-tenant data for 4 UK retail chains on a shared SQL Server backend, isolating orders, menus, and payments by tenant key across 1,000+ daily transactions and tenant-level reporting.',
      'Built pipelines moving order and payment data from the customer-facing (B2C) system into the backend. Rewrote slow T-SQL procedures and indexes, raising throughput from 150 to 250 orders/hour and cutting processing time 40%.',
      'Built offline-first SQLite capture with conflict resolution on reconnect, preventing lost or duplicate orders through 4+ hour network outages while keeping 85% test coverage across 500+ tests.'
    ]
  }
];

export const education: Education[] = [
  {
    type: 'Graduate',
    degree: 'M.S. Computer Science',
    school: 'Northeastern University · Boston, MA',
    period: 'Aug. 2025 — Dec. 2027',
    gpaBadge: 'GPA 3.66 / 4.0',
    courses: 'Database Management Systems · Program Design Paradigms · Object-Oriented Software Design',
    logo: '/images/logos/damore-mckim.svg',
    logoAlt: "D'Amore-McKim School of Business"
  },
  {
    type: 'Undergraduate',
    degree: 'B.Tech Computer Science',
    school: 'VIT-AP University · Andhra Pradesh, India',
    period: 'Aug. 2021 — Jul. 2025',
    gpaBadge: 'GPA 8.93 / 10',
    courses: 'Data Structures & Algorithms · Object-Oriented Design · Computer Networks · Operating Systems'
  }
];

export const honors: Honor[] = [
  {
    icon: '🏆',
    category: 'Hackathon',
    title: '1st Place — CollabCore',
    subtitle: 'Student Collaboration Platform',
    venue: 'Northeastern University'
  },
  {
    icon: '🥈',
    category: 'Hackathon',
    title: '2nd Place (out of 72 teams) — NavX',
    subtitle: '24-hour Hackathon Competition',
    venue: 'Open Competition'
  },
  {
    icon: '🏆',
    category: 'Hackathon',
    title: '3rd Place — SharkNinja JailBreak Edu',
    subtitle: 'HiFive (VoC Intelligence)',
    venue: 'SharkNinja'
  },
  {
    icon: '📄',
    category: 'Publication',
    title: 'Natural Disaster Management System',
    subtitle: 'Co-author',
    venue: "IEEE ICCCSMD'24"
  },
  {
    icon: '🔬',
    category: 'Patent',
    title: 'Safety Device for Real-Time Environmental Alert System',
    subtitle: 'Co-filed · App. No: 202441052914',
    venue: 'India'
  }
];
