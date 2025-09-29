// content/config.ts
/**
 * Centralized configuration and data for navigation, footer and page content.
 * Keeping these values outside of the components makes it easy to update
 * information without touching the presentation layer.
 */

export const navItems = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Speaking', href: '/speaking' },
  { label: 'Engagements', href: '/engagements' },
  { label: 'Case Studies', href: '/case-studies' },
  { label: 'Blog', href: '/blog' },
  { label: 'Events', href: '/events' },
  { label: 'Contact', href: '/contact' },
];

export const footerLinks = [
  {
    title: 'Explore',
    links: [
      { label: 'Home', href: '/' },
      { label: 'About', href: '/about' },
      { label: 'Speaking', href: '/speaking' },
      { label: 'Case Studies', href: '/case-studies' },
      { label: 'Engagements', href: '/engagements' },
    ],
  },
  {
    title: 'Resources',
    links: [
      { label: 'Blog', href: '/blog' },
      { label: 'Events', href: '/events' },
      { label: 'Contact', href: '/contact' },
    ],
  },
  {
    title: 'Legal',
    links: [
      { label: 'Privacy Policy', href: '/legal/privacy' },
      { label: 'Terms of Use', href: '/legal/terms' },
    ],
  },
];

export const socialLinks = [
  {
    label: 'Twitter',
    href: 'https://twitter.com',
    icon: 'twitter',
  },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com',
    icon: 'linkedin',
  },
  {
    label: 'Instagram',
    href: 'https://www.instagram.com',
    icon: 'instagram',
  },
];

/**
 * Data for speaking topics. Each entry corresponds to a service offered.
 */
export const speakingTopics = [
  {
    title: 'Building Bridges Through Dialogue',
    audience: 'Community leaders, educators, corporate teams',
    outcome: 'Improved communication and conflict resolution skills',
    description:
      'Turning differences into opportunities for understanding. Learn how to facilitate conversations that lead to meaningful connections.',
  },
  {
    title: 'The Power of Your Personal Story',
    audience: 'Students, activists, creatives',
    outcome: 'Confidence in storytelling as a tool for influence',
    description:
      'How to share your truth and inspire change. This talk equips attendees with techniques to craft authentic narratives that move people to action.',
  },
  {
    title: 'From Awareness to Action',
    audience: 'Nonprofits, grassroots organizations, civic groups',
    outcome: 'Clear action plans for turning passion into measurable impact',
    description:
      'Mobilizing communities to make measurable impact. Participants will walk away with strategies to transform ideas into sustainable initiatives.',
  },
];

/**
 * Past engagements with event details. Each entry will be rendered on the
 * engagements page with an accompanying logo from the public/images/logos
 * directory.
 */
export const pastEngagements = [
  {
    name: 'TEDx Peachtree',
    title: 'Stories that Spark Movements',
    location: 'Atlanta, GA',
    year: 2023,
    logo: '/images/logos/tedx.png',
    description:
      'Explored how personal narratives have the power to ignite collective action and inspire social movements.',
  },
  {
    name: 'Georgia State University Leadership Forum',
    title: 'Leadership Starts With Listening',
    location: 'Atlanta, GA',
    year: 2022,
    logo: '/images/logos/gsu.png',
    description:
      'Discussed active listening as the foundation of effective leadership, drawing on experiences from campus and community projects.',
  },
  {
    name: 'Urban Impact Conference',
    title: 'Turning Grassroots Ideas into Policy Influence',
    location: 'Birmingham, AL',
    year: 2021,
    logo: '/images/logos/urbanimpact.png',
    description:
      'Shared tools for transforming local initiatives into policy proposals that drive systemic change.',
  },
];

/**
 * Case studies highlighting impactful collaborations.
 */
export const caseStudies = [
  {
    name: 'Project Bright Future',
    description:
      'A collaboration that trained 200 youth leaders in civic engagement, resulting in a 25% increase in local volunteerism.',
  },
  {
    name: 'Voices Uniting',
    description:
      'A storytelling workshop series that led to a successful campaign for community health funding.',
  },
];

/**
 * Upcoming events with date, location and description. Used on the events page.
 */
export const upcomingEvents = [
  {
    name: 'Community Catalyst Summit',
    date: '2025-03-15',
    location: 'Charlotte, NC',
    description:
      'Join leaders, activists and community members for a day of inspiration and action planning.',
    logo: '/images/logos/communitycatalyst.png',
  },
];

/**
 * Impact story preview for the home page.
 */
export const impactStoryPreview = {
  quote:
    'After one of my talks, a local high school launched a student‑led volunteer initiative that fed over 300 families in need.',
  author: 'Community Organizer',
};