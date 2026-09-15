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
  ageGate: {
    id: string;
    title: string;
    notice: string;
    minAge: number;
    cookieDays: number;
  };
}

export const STORE_CONFIG: StoreConfig = {
  id: 'good_vibes_v1',
  name: 'Good Vibes Glass Art',
  legalName: 'Good Vibes Glass Art LLC',
  shortName: 'Good Vibes',
  tagline: 'EXCLUSIVE GLASS.',
  taglineSub: 'KEEP IT LOCAL.',
  badge: '📍 100% Loveland Owned & Operated',
  description: "Loveland's premier, locally owned smoke shop featuring exclusive bongs, pipes, and soil amendments. Support local, not out-of-town corporate chains.",
  about: "Loveland's premier locally owned smoke shop. Keep your dollars in the community, not in the pockets of out-of-town corporate chains. We specialize in exclusive bongs, pipes, and soil amendments.",
  siteUrl: 'https://goodvibesglassart.com',
  phone: '(970) 619-8002',
  rawPhone: '9706198002',
  intlPhone: '+1-970-619-8002',
  email: 'info@goodvibesglassart.com',
  logo: '/ll.webp',
  address: {
    street: '1421 N Cleveland Ave',
    city: 'Loveland',
    state: 'CO',
    zip: '80538',
    country: 'US',
    formatted: '1421 N Cleveland Ave, Loveland, CO 80538',
  },
  geo: {
    latitude: 40.407835,
    longitude: -105.074929,
  },
  googleMapsUrl: 'https://www.google.com/maps/place/Good+Vibes+Glass+Art/@40.4078391,-105.0775039,611m/data=!3m2!1e3!4b1!4m6!3m5!1s0x87695301dc4c9c57:0xb35633c43517c9c3!8m2!3d40.407835!4d-105.074929!16s%2Fg%2F1hm4n5lpk',
  googleMapsEmbedUrl: 'https://maps.google.com/maps?width=100%25&height=600&hl=en&q=1421%20N%20Cleveland%20Ave,%20Loveland,%20CO%2080538+(Good%20Vibes%20Glass%20Art)&t=&z=17&ie=UTF8&iwloc=B&output=embed',
  googleReviewUrl: 'https://share.google/QgzkOAJbDqxMPG9Rp',
  hours: {
    display: [
      { label: 'Mon - Sat', time: '09:00 AM - 9:00 PM' },
      { label: 'Sunday', time: '10:00 AM - 8:00 PM', highlight: true }
    ],
    schema: [
      { dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'], opens: '09:00', closes: '21:00' },
      { dayOfWeek: ['Sunday'], opens: '10:00', closes: '20:00' }
    ],
    shortNotice: 'Open until 9PM (8PM Sundays)'
  },
  stats: [
    { value: '5.0', label: 'Google Rating', color: 'text-bright-cyan' },
    { value: '9PM', label: 'Mon-Sat Close', color: 'text-teal-glow' },
    { value: '100%', label: 'Locally Owned', color: 'text-electric-blue' },
    { value: 'bolt', label: 'Fast Checkout', color: 'text-white', isIcon: true, icon: 'fa-solid fa-bolt' }
  ],
  trustBanner: [
    { text: '🚗 FREE RETAIL PARKING', highlight: true },
    { text: '🔞 STRICTLY 21+ ONLY' },
    { text: 'VALID ID REQUIRED' },
    { text: 'OPEN MON-SAT UNTIL 9PM' }
  ],
  landmarks: [
    { name: 'Lake Loveland', subtitle: 'Local favorite', icon: 'fa-solid fa-water', color: 'text-gv-blue' },
    { name: 'Rialto Theater', subtitle: 'Downtown', icon: 'fa-solid fa-masks-theater', color: 'text-gv-red' },
    { name: 'Benson Garden', subtitle: 'Sculpture Park', icon: 'fa-solid fa-tree', color: 'text-gv-green' },
    { name: 'Sweetheart City', subtitle: 'Loveland, CO', icon: 'fa-solid fa-heart', color: 'text-gv-yellow' }
  ],
  social: {
    instagram: '#',
    yelp: '#',
    google: 'https://share.google/QgzkOAJbDqxMPG9Rp'
  },
  vipOffer: {
    discount: '15% Off',
    title: 'Unlock',
    subtitle: 'Join the Good Vibes VIP list. Get instant access to exclusive drops, secret sales, and a 15% discount code sent straight to your phone right now.',
    formspreeEndpoint: ''
  },
  vendorOffer: {
    formspreeEndpoint: ''
  },
  careersOffer: {
    formspreeEndpoint: ''
  },
  ageGate: {
    id: 'good_vibes_v1',
    title: 'Identity Check',
    notice: 'You must be at least 21 years old to enter. Good Vibes Glass Art strictly verifies IDs in-store.',
    minAge: 21,
    cookieDays: 30
  }
};
