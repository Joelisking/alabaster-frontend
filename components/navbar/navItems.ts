export interface NavItem {
  text: string;
  url?: string;
}

export const navItems: NavItem[] = [
  { text: 'Home', url: '/' },
  {
    text: 'About Us',
    url: '/about',
  },
  {
    text: 'Tour Ghana 🇬🇭',
    url: '/tour',
  },
  { text: 'FAQs', url: '/faqs' },
  // { text: 'Gallery', url: '/gallery' },
  // { text: 'Contact Us', url: '/contact' },
];
