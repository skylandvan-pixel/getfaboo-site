// Edit this file to re-label the entire site. Header, Footer, the homepage
// and SEO defaults all read from here instead of hardcoding copy.
export const SITE = {
  name: 'GetFaboo',
  tagline: 'Creative content powered by AI.',
  subline: 'AI Video · Social Media · Digital Experiences',
  email: 'Skylandvan@gmail.com', // ← placeholder: replace with the real contact email
  description:
    'GetFaboo — an AI creative studio and social media portfolio. AI video, social content, and digital products, designed and built with AI.',
  aboutShort:
    'GetFaboo combines design, visual storytelling, social media and AI technology to create digital content and products.',
  background: [
    'Interior Design',
    'Architecture & Home Building',
    'Visual Content',
    'Social Media',
    'AI',
  ],
  social: [
    { label: 'YouTube', href: 'https://www.youtube.com/@skylandvan', icon: 'youtube' },
    { label: 'Instagram', href: '#', icon: 'instagram' },
    { label: 'Xiaohongshu', href: '#', icon: 'xiaohongshu' },
    // No direct WeChat link yet — points to /contact for now.
    // To open a WeChat QR-code popup later: keep this entry and attach a
    // click handler to [data-social="wechat"] that opens the modal instead.
    { label: 'WeChat', href: '/contact', icon: 'wechat' },
  ],
  locale: 'en',
} as const;

export const NAV_LINKS = [
  { label: 'Work', href: '/work' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
] as const;

export const CATEGORIES = ['AI VIDEO', 'SOCIAL MEDIA', 'AI PRODUCTS'] as const;
