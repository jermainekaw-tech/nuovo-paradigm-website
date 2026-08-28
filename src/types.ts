export type PageId =
  | 'home'
  | 'about-us'
  | 'services'
  | 'other-services'
  | 'elite-wealth-coach'
  | 'elite-wealth-manager'
  | 'milestone'
  | 'contact'
  | 'cdc2'
  | 'psp'
  | 'clsc'
  | 'clse'
  | 'eventregistration'
  | 'agent-feedback'
  | '404';

export interface NavItem {
  id: PageId;
  label: string;
  href: string;
  isExternal?: boolean;
}

export interface Testimonial {
  id: string;
  name: string;
  role?: string;
  image: string;
  fallbackImage?: string;
  avatarBg: string;
  quote: string;
}

export interface CoreValue {
  letter: string;
  title: string;
  description: string;
  iconName: string;
}

export interface ServiceDetail {
  id: string;
  title: string;
  tagline: string;
  description: string[];
  features: string[];
  icon: string;
  iconImage?: string;
  sectionImage?: string;
  bgTheme?: string;
}

export interface OtherServiceItem {
  id: string;
  title: string;
  shortDesc: string;
  iconImg?: string;
  iconWhite?: string;
  iconColor?: string;
  category: string;
  details: {
    heading: string;
    subheading?: string;
    body: string[];
    taxBenefit?: string;
    highlights?: string[];
    actionUrl?: string;
    actionLabel?: string;
  };
}

export interface MilestoneItem {
  year: string;
  title: string;
  subtitle: string;
  description: string;
  icon: string;
  image?: string;
  secondImage?: string;
  stats?: string;
  highlight?: boolean;
}

export interface CDCPackage {
  id: string;
  name: string;
  annualMYR: number;
  weeklyMYR: number;
  description: string;
  popular?: boolean;
}
