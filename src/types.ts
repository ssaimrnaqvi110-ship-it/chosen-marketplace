export type ThemeConfig = {
  palette: {
    primary: string;
    secondary: string;
    accent: string;
    background: string;
    secondaryBackground: string;
    text: string;
    mutedText: string;
    headerBackground: string;
    headerText: string;
    footerBackground: string;
    footerText: string;
    buttonBackground: string;
    buttonText: string;
    buttonHover: string;
    cardBackground: string;
    cardBorder: string;
    announcementBar: string;
    discountBadge: string;
    navBackground: string;
    navText: string;
  };
  fonts: {
    heading: string;
    body: string;
    nav: string;
  };
  layout: {
    containerWidth: number;
    sectionSpacing: number;
    buttonRadius: number;
    cardRadius: number;
    borderThickness: number;
    productGridColumns: number;
    aspectRatio: string;
  };
  brand: {
    storeName: string;
    tagline: string;
  };
};

export type NavItem = {
  label: string;
  to: string;
};

export type Product = {
  id: number;
  name: string;
  category: string;
  price: number;
  originalPrice: number;
  discount: number;
  image: string;
  description: string;
  featured?: boolean;
  bestSeller?: boolean;
  stock: number;
};

export type OrderMetric = {
  label: string;
  value: string;
  change: string;
};
