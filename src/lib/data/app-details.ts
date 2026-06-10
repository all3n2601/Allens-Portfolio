import { error } from '@sveltejs/kit';
import { projects } from '$lib/data/projects';
import { shippedApps } from '$lib/data/shipped-apps';

type DetailMetric = {
  label: string;
  value: string;
};

type DetailBlock = {
  title: string;
  body: string;
};

type DetailList = {
  title: string;
  items: string[];
};

export type AppDetail = {
  slug: string;
  eyebrow: string;
  headline: string;
  lede: string;
  statusNote: string;
  metrics: DetailMetric[];
  pillars: DetailBlock[];
  surfaces: DetailList[];
  stackLabel: string;
  stack: string[];
  narrative: string[];
  nextSteps: string[];
};

const fastTimeProject = projects.find((project) => project.slug === 'fasttime');

const appDetails: Record<string, AppDetail> = {
  fasttime: {
    slug: 'fasttime',
    eyebrow: 'Health Platform',
    headline: 'FastTime brings fasting workflows across mobile, backend, and operator surfaces.',
    lede:
      'Built as a single product system: a Flutter client for end users, a Node API for commerce and sync, and a React dashboard for the web surface around the app.',
    statusNote:
      'This product is mapped to a dedicated shippedbyallen deployment and already has linked project context in the portfolio.',
    metrics: [
      { label: 'Platforms', value: 'Web, iOS, Android' },
      { label: 'Product Shape', value: 'Flutter app, Node API, React dashboard' },
      { label: 'Status', value: 'Coming Soon' },
      { label: 'Portfolio Linkage', value: 'Project-backed case study' }
    ],
    pillars: [
      {
        title: 'Consumer app',
        body:
          'FastTime is framed as a user-facing fasting product first, with the mobile experience carrying daily routine, health context, and core engagement loops.'
      },
      {
        title: 'Backend and sync',
        body:
          'The supporting API handles product logic behind the app while the portfolio project data calls out receipt webhooks and offline-first synchronization.'
      },
      {
        title: 'Operational dashboard',
        body:
          'A companion React dashboard rounds out the system so the product is not just a mobile shell but a managed platform with a web surface.'
      }
    ],
    surfaces: [
      {
        title: 'What ships with it',
        items: [
          'Native-first mobile experience built in Flutter',
          'Node.js service layer connecting product workflows',
          'React dashboard for the web-facing companion surface'
        ]
      },
      {
        title: 'Why it matters',
        items: [
          'Shows Allen shipping a product family instead of a single UI',
          'Connects consumer experience, backend systems, and admin operations',
          'Extends the shipped apps section beyond brochure-style cards'
        ]
      }
    ],
    stackLabel: 'Core stack',
    stack: fastTimeProject?.tags ?? ['Flutter', 'Node.js', 'MongoDB', 'React'],
    narrative: [
      'The existing project record describes FastTime as a health and fasting platform monorepo. That makes it a strong candidate for a dedicated detail page because the work spans more than one client and more than one runtime.',
      'Rather than repeating the home-card summary, this page clarifies the actual product shape: mobile app in Flutter, backend services in Node, and a React dashboard that gives the app an operational surface on the web.'
    ],
    nextSteps: [
      'Launch the dedicated subdomain at fasttime.shippedbyallen.com',
      'Expand with production screenshots once the current UI is ready to publish',
      'Link the detail page back into future FastTime case-study updates'
    ]
  },
  devbar: {
    slug: 'devbar',
    eyebrow: 'Developer Utility',
    headline: 'DevBar is a desktop command surface for day-to-day simulator and emulator workflows.',
    lede:
      'Positioned as a macOS menu bar tool, DevBar turns repetitive environment actions into a compact desktop utility instead of another full-window app.',
    statusNote:
      'The shipped apps data already places DevBar under its own future subdomain, so this page gives it a concrete portfolio destination before the public release is live.',
    metrics: [
      { label: 'Platform', value: 'macOS' },
      { label: 'Product Type', value: 'Menu bar command deck' },
      { label: 'Audience', value: 'Developers working across mobile runtimes' },
      { label: 'Status', value: 'Coming Soon' }
    ],
    pillars: [
      {
        title: 'Low-friction access',
        body:
          'DevBar is centered on reducing context switching by putting common simulator and emulator workflows in the menu bar where they stay one click away.'
      },
      {
        title: 'Tooling-first UX',
        body:
          'The product framing is intentionally utilitarian: fast access, predictable actions, and a desktop surface that supports engineering flow rather than competing with it.'
      },
      {
        title: 'Portfolio fit',
        body:
          'It broadens the shipped apps section beyond client products and shows Allen building internal-style utilities with the same attention to product clarity.'
      }
    ],
    surfaces: [
      {
        title: 'Product framing',
        items: [
          'Lives in the macOS menu bar instead of a traditional dashboard',
          'Targets simulator and emulator-heavy workflows',
          'Designed as a compact command deck rather than a general IDE plugin'
        ]
      },
      {
        title: 'Release shape',
        items: [
          'Standalone shippedbyallen app destination',
          'Mac-first positioning in the portfolio',
          'Ready to evolve into a fuller developer tooling story later'
        ]
      }
    ],
    stackLabel: 'Product focus',
    stack: ['macOS', 'Menu Bar Utility', 'Developer Workflow', 'Simulator Tooling'],
    narrative: [
      'DevBar arrives in the portfolio as a product with a sharply defined job: tighten the loop around simulator and emulator control. Even with a concise data record, the product direction is already specific enough to deserve its own destination.',
      'This page keeps the language concrete and restrained, staying close to the existing shipped-app tagline while giving the app a stronger identity than a simple “coming soon” card can provide.'
    ],
    nextSteps: [
      'Publish the first public DevBar release notes on the app subdomain',
      'Add visual captures of the menu bar interaction model',
      'Connect future project notes if the app grows into a larger tooling suite'
    ]
  },
  drivelink: {
    slug: 'drivelink',
    eyebrow: 'Desktop Utility',
    headline: 'DriveLink is a Finder-facing bridge for working with MTP devices on macOS.',
    lede:
      'The app is framed around a clear desktop promise: make MTP hardware feel native enough in Finder that file access stops being the painful part of the workflow.',
    statusNote:
      'DriveLink already has a reserved shippedbyallen destination, and this detail page turns that future release slot into a tangible portfolio entry today.',
    metrics: [
      { label: 'Platform', value: 'macOS' },
      { label: 'Core Job', value: 'Mount MTP devices in Finder' },
      { label: 'Category', value: 'Desktop file workflow utility' },
      { label: 'Status', value: 'Coming Soon' }
    ],
    pillars: [
      {
        title: 'Finder integration',
        body:
          'DriveLink is anchored in a familiar macOS surface so the product proposition is instantly legible: connect the device, access files, and stay inside Finder.'
      },
      {
        title: 'Workflow cleanup',
        body:
          'By focusing on direct mounting for MTP devices, the app targets a specific pain point rather than trying to be a generic sync platform.'
      },
      {
        title: 'Shipped-app credibility',
        body:
          'As part of the shipped apps lineup, DriveLink helps the portfolio show practical utility software alongside larger platform work.'
      }
    ],
    surfaces: [
      {
        title: 'What the page makes clear',
        items: [
          'This is a real Mac product concept with a concrete file-system job',
          'The integration surface is Finder, not a custom transfer dashboard',
          'The portfolio now gives the app somewhere meaningful to land'
        ]
      },
      {
        title: 'Why it belongs here',
        items: [
          'Represents systems thinking applied to everyday device workflows',
          'Adds a second desktop-native utility next to DevBar',
          'Supports the “shipped by Allen” framing with practical software categories'
        ]
      }
    ],
    stackLabel: 'Product focus',
    stack: ['macOS', 'Finder Workflow', 'MTP Devices', 'Desktop Utility'],
    narrative: [
      'DriveLink is intentionally specific. The existing shipped-app data already says enough to position it as a credible desktop utility: it mounts MTP devices directly in Finder.',
      'This page leans into that clarity. Instead of inventing a broader platform story, it treats the app as a focused tool for removing friction from a familiar file-access problem on macOS.'
    ],
    nextSteps: [
      'Ship the first public binary and attach download details to the subdomain',
      'Add workflow screenshots showing Finder-based device access',
      'Document the exact device scenarios the first release supports'
    ]
  }
};

export const appDetailSlugs = Object.keys(appDetails);

export function getAppDetail(slug: string) {
  const app = shippedApps.find((entry) => entry.slug === slug);
  const detail = appDetails[slug];

  if (!app || !detail) {
    throw error(404, 'App detail page not found');
  }

  return {
    app,
    detail,
    project: app.projectSlug ? projects.find((project) => project.slug === app.projectSlug) ?? null : null
  };
}
