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
      'Live at fasttime.shippedbyallen.com. Source lives at github.com/all3n2601/FastTime (mobile) with a companion backend/web monorepo.',
    metrics: [
      { label: 'Platforms', value: 'Web, iOS, Android' },
      { label: 'Product Shape', value: 'Flutter app, Node API, React dashboard' },
      { label: 'Status', value: 'Live' },
      { label: 'Site', value: 'fasttime.shippedbyallen.com' }
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
      'Keep fasttime.shippedbyallen.com aligned with the latest mobile/web releases',
      'Expand with more production screenshots as the UI ships',
      'Open-source or document the monorepo structure when the FastTime GitHub repos go public'
    ]
  },
  devbar: {
    slug: 'devbar',
    eyebrow: 'Developer Utility',
    headline: 'DevBar puts simulators and emulators in the macOS menu bar — plus CLI and MCP for agents.',
    lede:
      'Boot a simulator, install your latest build, capture a screenshot, or replay a GPS route without switching development tools. The same device operations are available from the terminal or an AI agent through MCP.',
    statusNote:
      'Public beta on GitHub (macOS 14+, Apple Silicon and Intel, Swift). Releases ship the menu-bar app ZIP, a standalone CLI archive, and checksums.',
    metrics: [
      { label: 'Platform', value: 'macOS 14+' },
      { label: 'Product Type', value: 'Menu bar + CLI + MCP' },
      { label: 'Audience', value: 'Mobile developers' },
      { label: 'Status', value: 'Public beta' }
    ],
    pillars: [
      {
        title: 'Menu bar command deck',
        body:
          'DevBar keeps iOS Simulator and Android emulator controls one click away — boot, install, screenshot, and GPS routes without leaving your flow.'
      },
      {
        title: 'CLI and MCP',
        body:
          'The same operations work from a standalone CLI and through MCP so AI agents can drive device workflows alongside the GUI.'
      },
      {
        title: 'Native Swift tooling',
        body:
          'Built in Swift with no third-party runtime dependencies, targeting both Apple Silicon and Intel under macOS 14+.'
      }
    ],
    surfaces: [
      {
        title: 'What ships with it',
        items: [
          'Universal macOS menu-bar app from GitHub Releases',
          'Standalone CLI archive for PATH installs',
          'MCP bridge for agent-driven device operations'
        ]
      },
      {
        title: 'Why it matters',
        items: [
          'Cuts context switching across simulator/emulator tooling',
          'Shows shipping of developer utilities with release hygiene (checksums, CI)',
          'Extends the portfolio beyond consumer apps into engineering tooling'
        ]
      }
    ],
    stackLabel: 'Core stack',
    stack: ['Swift', 'SwiftUI', 'macOS', 'CLI', 'MCP', 'iOS Simulator', 'Android Emulator'],
    narrative: [
      'DevBar is framed around a sharp job: tighten the loop around simulator and emulator control. The public README positions it as a menu-bar companion with matching CLI and MCP surfaces.',
      'Beta downloads are ad-hoc signed; the project documents Gatekeeper steps and ships SHA256 checksums with each release.'
    ],
    nextSteps: [
      'Notarize / Developer ID sign production builds',
      'Keep GitHub Releases current with changelog + checksums',
      'Add more visual captures of the live menu-bar interaction model'
    ]
  },
  narratify: {
    slug: 'narratify',
    eyebrow: 'Reading Platform',
    headline: 'Narratify is an offline-first ebook reader and listening companion for Android and iOS.',
    lede:
      'Import your own books, pick up where you left off, or search open catalogs. Readium rendering, local audiobooks, and on-device narration keep reading and listening private — without sending book text to a cloud speech service.',
    statusNote:
      'Released on GitHub (v0.1.0). Download builds from Releases; Android and iOS feature coverage still differs by platform.',
    metrics: [
      { label: 'Platforms', value: 'Android 8.0+, iOS 17+' },
      { label: 'Product Type', value: 'Native ebook + audio companion' },
      { label: 'Privacy', value: 'Offline voices, private app storage' },
      { label: 'Status', value: 'Released · v0.1.0' }
    ],
    pillars: [
      {
        title: 'Bring your own library',
        body:
          'Import unencrypted EPUB, TXT, and Markdown files with reading positions saved across launches. Files stay in private app storage.'
      },
      {
        title: 'Read and listen',
        body:
          'Native Readium EPUB rendering, chapter navigation, offline system text-to-speech with highlight-as-you-go narration, plus local MP3/M4A/M4B audiobook playback on Android.'
      },
      {
        title: 'Discover open catalogs',
        body:
          'One search across Project Gutenberg, Open Library, Google Books, Internet Archive, and LibriVox — merged and ranked by title and author relevance.'
      }
    ],
    surfaces: [
      {
        title: 'What ships with it',
        items: [
          'Kotlin Android client and SwiftUI iOS client',
          'Readium-based EPUB reading with offline TTS',
          'Multi-catalog discovery with local import workflows'
        ]
      },
      {
        title: 'Why it matters',
        items: [
          'Shows offline-first product thinking with real privacy constraints',
          'Spans two native mobile stacks with shared product intent',
          'Connects reading, listening, and open-library discovery in one companion'
        ]
      }
    ],
    stackLabel: 'Core stack',
    stack: ['Kotlin', 'SwiftUI', 'Readium', 'TTS', 'Android', 'iOS', 'Offline-first'],
    narrative: [
      'Narratify’s public README frames a clear promise: your books, your voice, your pace — without cloud speech for narration.',
      'The v0.1.0 GitHub release packages the native clients so people can try the product while platform feature parity continues to tighten.'
    ],
    nextSteps: [
      'Close platform feature parity between Android and iOS',
      'Publish TestFlight / Play tracks when store-ready',
      'Keep GitHub Releases current with screenshots and install notes'
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
