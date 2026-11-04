export type AppPlatform = 'Web' | 'iOS' | 'Android' | 'macOS';
export type AppDeployStatus = 'Live' | 'Beta' | 'Coming Soon';

export type ShippedApp = {
  slug: string;
  name: string;
  tagline: string;
  icon: string;
  /** Real app mark / icon when available */
  logo?: string;
  status: AppDeployStatus;
  platforms: AppPlatform[];
  /** Internal route for a portfolio detail page */
  detailHref?: string;
  /** Public URL when live; omit for coming-soon entries */
  url?: string;
  /** Planned subdomain shown for coming-soon apps */
  plannedUrl?: string;
  /** Public GitHub repository */
  githubUrl?: string;
  /** Anchor in #projects for case-study context */
  projectSlug?: string;
};

export const shippedApps: ShippedApp[] = [
  {
    slug: 'food-alert',
    name: 'Food ALERT',
    tagline: 'Donation lifecycle platform with fraud detection — in production at Northeastern.',
    icon: 'fa-solid fa-hand-holding-heart',
    status: 'Live',
    platforms: ['Web'],
    url: 'https://foodalertgo.com',
    projectSlug: 'food-alert'
  },
  {
    slug: 'fasttime',
    name: 'FastTime',
    tagline:
      'Intermittent fasting platform — Flutter mobile app, Node/Express API, and React dashboards with offline-first sync.',
    icon: 'fa-solid fa-heart-pulse',
    logo: '/images/apps/fasttime.png',
    status: 'Live',
    platforms: ['Web', 'iOS', 'Android'],
    detailHref: '/apps/fasttime',
    url: 'https://fasttime.shippedbyallen.com',
    githubUrl: 'https://github.com/all3n2601/FastTime',
    projectSlug: 'fasttime'
  },
  {
    slug: 'devbar',
    name: 'DevBar',
    tagline:
      'macOS menu bar, CLI, and MCP tools for iOS simulators and Android emulators — boot, install, screenshot, GPS routes.',
    icon: 'fa-solid fa-terminal',
    logo: '/images/apps/devbar.svg',
    status: 'Beta',
    platforms: ['macOS'],
    detailHref: '/apps/devbar',
    githubUrl: 'https://github.com/all3n2601/DevBar'
  },
  {
    slug: 'narratify',
    name: 'Narratify',
    tagline:
      'Offline-first ebook reader and listening companion for Android and iOS — Readium, local audiobooks, on-device narration.',
    icon: 'fa-solid fa-book-open',
    logo: '/images/apps/narratify.png',
    status: 'Live',
    platforms: ['iOS', 'Android'],
    detailHref: '/apps/narratify',
    githubUrl: 'https://github.com/all3n2601/Narratify'
  },
  {
    slug: 'drivelink',
    name: 'DriveLink',
    tagline: 'Mount MTP devices directly in Finder.',
    icon: 'fa-solid fa-folder-open',
    status: 'Coming Soon',
    platforms: ['macOS'],
    detailHref: '/apps/drivelink',
    plannedUrl: 'https://drivelink.shippedbyallen.com'
  }
];
