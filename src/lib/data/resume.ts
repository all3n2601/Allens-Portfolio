export type Experience = {
  role: string;
  org: string;
  location?: string;
  period: string;
  current?: boolean;
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
    period: 'Summer 2026',
    current: true,
    bullets: [
      "Won the SharkNinja JailBreak Edu hackathon and was selected for the Summer 2026 internship based on that win."
    ]
  },
  {
    role: 'Graduate Research Assistant',
    org: 'Northeastern University · Food ALERT Project',
    period: 'Jan 2026 — Present',
    bullets: [
      'Designed normalized PostgreSQL schema with stored procedures for a 5-stage donation state machine; built RESTful FastAPI microservices deployed via CI/CD.',
      'Built responsive Next.js interfaces across the donation lifecycle; achieved 80%+ test coverage with Jest and pytest across API and data layers.',
      'Engineered rule-based fraud-detection scoring across 6 risk signals, reducing manual review queue size.'
    ]
  },
  {
    role: 'Software Engineer',
    org: 'Siga Infotech · Trivandrum, India',
    period: 'Sep 2024 — Jul 2025',
    bullets: [
      'Delivered production POS system at 99.9% uptime across 2 UK chains; reduced order processing time by 40% and API response by 35% via T‑SQL optimization.',
      'Built WebSocket order sync between front-of-house and kitchen displays; architected offline-first SQLite caching with 85% automated test coverage.'
    ]
  },
  {
    role: 'Application Developer Intern',
    org: 'IIT Guwahati · Assam, India',
    period: 'Jan 2023 — Apr 2023',
    bullets: [
      'Built EnergyP2P, a P2P solar energy trading app with 3 role-based Flutter clients; added AES-256 encryption on transactions.',
      'Profiled across multiple devices and redesigned matchmaking cutting page load by 60% (800ms → 320ms).'
    ]
  }
];

export const education: Education[] = [
  {
    type: 'Graduate',
    degree: 'M.S. Computer Science',
    school: 'Northeastern University · Boston, MA',
    period: 'Aug. 2025 — Dec. 2027',
    gpaBadge: 'GPA 3.58 / 4.0',
    courses: 'Database Management Systems · Program Design Paradigms · Object-Oriented Software Design'
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
    venue: 'Summer 2026'
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
