import type { StoreConfig } from '../../config/store';

const config: StoreConfig = {
  id: '%%CLIENT_ID%%',
  name: '%%STORE_NAME%%',
  legalName: '%%LEGAL_NAME%%',
  shortName: '%%SHORT_NAME%%',
  tagline: '%%TAGLINE%%',
  taglineSub: '%%TAGLINE_SUB%%',
  badge: '📍 100% Locally Owned & Operated',
  description: '%%STORE_NAME%% - Premier local smoke, glass, and vape destination.',
  about: '%%STORE_NAME%% is your premier locally owned smoke shop bringing high-quality products and top-notch local service.',
  siteUrl: '%%SITE_URL%%',
  phone: '%%PHONE%%',
  rawPhone: '%%RAW_PHONE%%',
  intlPhone: '%%INTL_PHONE%%',
  email: '%%EMAIL%%',
  logo: '/ll.webp',
  address: {
    street: '%%STREET%%',
    city: '%%CITY%%',
    state: '%%STATE%%',
    zip: '%%ZIP%%',
    country: 'US',
    formatted: '%%STREET%%, %%CITY%%, %%STATE%% %%ZIP%%',
  },
  geo: {
    latitude: 40.0,
    longitude: -105.0,
  },
  googleMapsUrl: '%%MAPS_URL%%',
  googleMapsEmbedUrl: 'https://maps.google.com/maps?width=100%25&height=600&hl=en&q=%%STREET%%,%%CITY%%,%%STATE%%+(%%STORE_NAME%%)&t=&z=17&ie=UTF8&iwloc=B&output=embed',
  googleReviewUrl: '#',
  hours: {
    display: [
      { label: 'Mon - Sat', time: '09:00 AM - 9:00 PM' },
      { label: 'Sunday', time: '10:00 AM - 8:00 PM', highlight: true }
    ],
    schema: [
      { dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'], opens: '09:00', closes: '21:00' },
      { dayOfWeek: ['Sunday'], opens: '10:00', closes: '20:00' }
    ],
    shortNotice: 'Open Daily'
  },
  stats: [
    { value: '5.0', label: 'Google Rating', color: 'text-bright-cyan' },
    { value: '9PM', label: 'Daily Close', color: 'text-teal-glow' },
    { value: '100%', label: 'Locally Owned', color: 'text-electric-blue' },
    { value: 'bolt', label: 'Fast Checkout', color: 'text-white', isIcon: true, icon: 'fa-solid fa-bolt' }
  ],
  trustBanner: [
    { text: '🚗 FREE RETAIL PARKING', highlight: true },
    { text: '🔞 STRICTLY 21+ ONLY' },
    { text: 'VALID ID REQUIRED' },
    { text: 'OPEN DAILY' }
  ],
  landmarks: [
    { name: 'Downtown', subtitle: 'Main Strip', icon: 'fa-solid fa-city', color: 'text-gv-blue' }
  ],
  social: {
    instagram: '#',
    yelp: '#',
    google: '#'
  },
  vipOffer: {
    discount: '15% Off',
    title: 'Unlock',
    subtitle: 'Join the VIP list. Get instant access to exclusive drops and secret sales sent straight to your phone.',
    formspreeEndpoint: ''
  },
  vendorOffer: {
    formspreeEndpoint: ''
  },
  careersOffer: {
    formspreeEndpoint: ''
  },
  theme: '%%THEME%%',
  features: {
    hasGlassGallery: true,
    hasVapes: true,
    hasCigars: false,
    hasHookah: false,
    hasEventsCalendar: true,
    hasBlog: true,
    hasVendorProgram: false,
    hasCareersCta: false,
    hasOnlineOrdering: false,
    hasHumidor: false,
    hasDelivery: false,
  },
  ageGate: {
    id: '%%CLIENT_ID%%_v1',
    title: 'Identity Check',
    notice: 'You must be at least 21 years old to enter. We strictly verify IDs in-store.',
    minAge: 21,
    cookieDays: 30
  }
};

export default config;
