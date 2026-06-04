export type SocialLink = {
  label: string;
  href: string;
  icon: string;
};

export const site = {
  domain: 'https://shippedbyallen.com',
  brandName: 'Shipped by Allen',
  brandShort: 'Shipped',
  brandByline: 'by Allen',
  monogram: 'MA',
  monogramHint: 'Mariaantony Alphonsa',
  fullName: 'Allen Febi Mariaantony Alphonsa',
  firstName: 'Allen',
  lastName: 'Febi',
  role: 'Full-Stack Engineer',
  tagline:
    'Graduate student at Northeastern University building production systems across backend infrastructure, AI pipelines, and mobile experiences.',
  location: 'Boston, MA',
  email: 'mariaantonyalphons.a@northeastern.edu',
  phoneDisplay: '(617) 606-8268',
  phoneE164: '+16176068268',
  resumePath: '/documents/resume.pdf',
  socials: [
    {
      label: 'GitHub',
      href: 'https://github.com/all3n2601',
      icon: 'fa-brands fa-github'
    },
    {
      label: 'LinkedIn',
      href: 'https://www.linkedin.com/in/allen-febi/',
      icon: 'fa-brands fa-linkedin'
    },
    {
      label: 'Email',
      href: 'mailto:mariaantonyalphons.a@northeastern.edu',
      icon: 'fa-solid fa-envelope'
    }
  ] satisfies SocialLink[]
} as const;
