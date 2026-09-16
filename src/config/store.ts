export interface StoreConfig {
  id: string;
  name: string;
  legalName: string;
  shortName: string;
  tagline: string;
  taglineSub: string;
  badge: string;
  description: string;
  about: string;
  siteUrl: string;
  phone: string;
  rawPhone: string;
  intlPhone: string;
  email: string;
  logo: string;
  address: {
    street: string;
    city: string;
    state: string;
    zip: string;
    country: string;
    formatted: string;
  };
  geo: {
    latitude: number;
    longitude: number;
  };
  googleMapsUrl: string;
  googleMapsEmbedUrl: string;
  googleReviewUrl: string;
  hours: {
    display: Array<{
      label: string;
      time: string;
      highlight?: boolean;
    }>;
    schema: Array<{
      dayOfWeek: string[];
      opens: string;
      closes: string;
    }>;
    shortNotice: string;
  };
  stats: Array<{
    value: string;
    label: string;
    color: string;
    isIcon?: boolean;
    icon?: string;
  }>;
  trustBanner: Array<{
    text: string;
    highlight?: boolean;
  }>;
  landmarks: Array<{
    name: string;
    subtitle: string;
    icon: string;
    color: string;
  }>;
  social: {
    instagram?: string;
    yelp?: string;
    google?: string;
    twitter?: string;
    facebook?: string;
  };
  vipOffer: {
    discount: string;
    title: string;
    subtitle: string;
    formspreeEndpoint?: string;
  };
  vendorOffer: {
    formspreeEndpoint?: string;
  };
  careersOffer: {
    formspreeEndpoint?: string;
  };
  theme: 'neon-cyberpunk' | 'luxury-gold' | 'herbal-emerald' | string;
  features: {
    hasGlassGallery: boolean;
    hasVapes: boolean;
    hasCigars: boolean;
    hasHookah: boolean;
    hasEventsCalendar: boolean;
    hasBlog: boolean;
    hasVendorProgram: boolean;
    hasCareersCta: boolean;
    hasOnlineOrdering: boolean;
    hasHumidor: boolean;
    hasDelivery: boolean;
  };
  ageGate: {
    id: string;
    title: string;
    notice: string;
    minAge: number;
    cookieDays: number;
  };
}

import goodVibesConfig from '../clients/good-vibes-loveland/config';

// Eagerly glob client configs
const clientConfigs = import.meta.glob('../clients/*/config.ts', { eager: true }) as Record<string, { default: StoreConfig }>;

const activeSiteId = (typeof process !== 'undefined' && process.env?.SITE_ID) || import.meta.env?.SITE_ID || 'good-vibes-loveland';
const targetPath = `../clients/${activeSiteId}/config.ts`;

export const STORE_CONFIG: StoreConfig = clientConfigs[targetPath]?.default || goodVibesConfig;
export const SITE_ID: string = activeSiteId;

