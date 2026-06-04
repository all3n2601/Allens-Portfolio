export type AppPlatform = 'Web' | 'iOS' | 'Android' | 'macOS';
export type AppDeployStatus = 'Live' | 'Beta' | 'Coming Soon';

export type ShippedApp = {
  slug: string;
  name: string;
  tagline: string;
  icon: string;
  status: AppDeployStatus;
  platforms: AppPlatform[];
  /** Public URL when live; omit for coming-soon entries */
  url?: string;
  /** Planned subdomain shown for coming-soon apps */
  plannedUrl?: string;
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
    tagline: 'Health & fasting — Flutter app, Node API, and React dashboard.',
    icon: 'fa-solid fa-heart-pulse',
    status: 'Coming Soon',
    platforms: ['Web', 'iOS', 'Android'],
    plannedUrl: 'https://fasttime.shippedbyallen.com',
    projectSlug: 'fasttime'
  },
  {
    slug: 'devbar',
    name: 'DevBar',
    tagline: 'Menu bar command deck for simulators and emulators.',
    icon: 'fa-solid fa-terminal',
    status: 'Coming Soon',
    platforms: ['macOS'],
    plannedUrl: 'https://devbar.shippedbyallen.com'
  },
  {
    slug: 'drivelink',
    name: 'DriveLink',
    tagline: 'Mount MTP devices directly in Finder.',
    icon: 'fa-solid fa-folder-open',
    status: 'Coming Soon',
    platforms: ['macOS'],
    plannedUrl: 'https://drivelink.shippedbyallen.com'
  }
];
