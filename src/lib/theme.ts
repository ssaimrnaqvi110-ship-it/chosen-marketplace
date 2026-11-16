import type { ThemeConfig } from '../types';

export const defaultTheme: ThemeConfig = {
  palette: {
    primary: '#5B4032',
    secondary: '#38271F',
    accent: '#D7C2A5',
    background: '#F5F0E8',
    secondaryBackground: '#E8DED0',
    text: '#29231F',
    mutedText: '#6B5C52',
    headerBackground: '#F7F1E9',
    headerText: '#2D2019',
    footerBackground: '#38271F',
    footerText: '#F5F0E8',
    buttonBackground: '#5B4032',
    buttonText: '#FFFFFF',
    buttonHover: '#7A5644',
    cardBackground: '#FFFFFF',
    cardBorder: '#E7D7C3',
    announcementBar: '#38271F',
    discountBadge: '#C25745',
    navBackground: '#F8F3EC',
    navText: '#2A201C',
  },
  fonts: {
    heading: 'Playfair Display, Georgia, serif',
    body: 'Inter, Segoe UI, sans-serif',
    nav: 'Inter, Segoe UI, sans-serif',
  },
  layout: {
    containerWidth: 1280,
    sectionSpacing: 64,
    buttonRadius: 12,
    cardRadius: 18,
    borderThickness: 1,
    productGridColumns: 4,
    aspectRatio: '1 / 1',
  },
  brand: {
    storeName: 'CHOSEN',
    tagline: 'Upgrade Your Everyday.',
  },
};

export function applyTheme(theme: ThemeConfig) {
  const root = document.documentElement;
  const { palette } = theme;

  root.style.setProperty('--primary', palette.primary);
  root.style.setProperty('--secondary', palette.secondary);
  root.style.setProperty('--accent', palette.accent);
  root.style.setProperty('--background', palette.background);
  root.style.setProperty('--secondary-background', palette.secondaryBackground);
  root.style.setProperty('--text', palette.text);
  root.style.setProperty('--muted-text', palette.mutedText);
  root.style.setProperty('--header-bg', palette.headerBackground);
  root.style.setProperty('--header-text', palette.headerText);
  root.style.setProperty('--footer-bg', palette.footerBackground);
  root.style.setProperty('--footer-text', palette.footerText);
  root.style.setProperty('--button-bg', palette.buttonBackground);
  root.style.setProperty('--button-text', palette.buttonText);
  root.style.setProperty('--button-hover', palette.buttonHover);
  root.style.setProperty('--card-bg', palette.cardBackground);
  root.style.setProperty('--card-border', palette.cardBorder);
  root.style.setProperty('--announcement-bar', palette.announcementBar);
  root.style.setProperty('--discount-badge', palette.discountBadge);
  root.style.setProperty('--nav-bg', palette.navBackground);
  root.style.setProperty('--nav-text', palette.navText);

  root.style.setProperty('--heading-font', theme.fonts.heading);
  root.style.setProperty('--body-font', theme.fonts.body);
  root.style.setProperty('--nav-font', theme.fonts.nav);
}
