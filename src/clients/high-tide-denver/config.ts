import type { StoreConfig } from '../../config/store';

const config: StoreConfig = {
  id: 'high-tide-denver',
  name: 'High Tide Smoke & Glass',
  legalName: 'High Tide Smoke Shop LLC',
  shortName: 'High Tide',
  tagline: 'DENVER PREMIER GLASS.',
  taglineSub: 'MILE HIGH VIBES.',
  badge: '📍 100% Denver Owned & Operated',
  description: 'Denver premier smoke shop featuring luxury glass, top-shelf vapes, and herbal accessories.',
  about: 'High Tide Smoke & Glass is Denver premier locally owned smoke destination.',
  siteUrl: 'https://hightidedenver.com',
  phone: '(303) 555-0199',
  rawPhone: '3035550199',
  intlPhone: '+1-303-555-0199',
  email: 'info@hightidedenver.com',
  logo: '/ll.webp',
  address: {
    street: '100 Colfax Ave',
    city: 'Denver',
    state: 'CO',
    zip: '80202',
    country: 'US',
    formatted: '100 Colfax Ave, Denver, CO 80202',
  },
  geo: {
    latitude: 39.7392,
    longitude: -104.9903,
  },
  googleMapsUrl: 'https://maps.google.com/?q=100+Colfax+Ave+Denver+CO',
  googleMapsEmbedUrl: 'https://maps.google.com/maps?width=100%25&height=600&hl=en&q=100%20Colfax%20Ave,%20Denver,%20CO&t=&z=17&ie=UTF8&iwloc=B&output=embed',
  googleReviewUrl: '#',
  hours: {
    display: [
      { label: 'Mon - Sat', time: '09:00 AM - 10:00 PM' },
      { label: 'Sunday', time: '10:00 AM - 8:00 PM', highlight: true }
    ],
    schema: [
      { dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'], opens: '09:00', closes: '22:00' },
      { dayOfWeek: ['Sunday'], opens: '10:00', closes: '20:00' }
    ],
    shortNotice: 'Open until 10PM'
  },
  stats: [
    { value: '4.9', label: 'Google Rating', color: 'text-bright-cyan' },
    { value: '10PM', label: 'Daily Close', color: 'text-teal-glow' },
    { value: '100%', label: 'Denver Owned', color: 'text-electric-blue' },
    { value: 'bolt', label: 'Fast Checkout', color: 'text-white', isIcon: true, icon: 'fa-solid fa-bolt' }
  ],
  trustBanner: [
    { text: '🚗 FREE DOWNTOWN PARKING', highlight: true },
    { text: '🔞 STRICTLY 21+ ONLY' },
    { text: 'VALID ID REQUIRED' },
    { text: 'OPEN DAILY UNTIL 10PM' }
  ],
  landmarks: [
    { name: 'State Capitol', subtitle: 'Downtown Denver', icon: 'fa-solid fa-landmark', color: 'text-gv-blue' }
  ],
  social: {
    instagram: '#',
    yelp: '#',
    google: '#'
  },
  vipOffer: {
    discount: '20% Off',
    title: 'Unlock',
    subtitle: 'Join the High Tide VIP Club for exclusive member perks.',
    formspreeEndpoint: ''
  },
  vendorOffer: {
    formspreeEndpoint: ''
  },
  careersOffer: {
    formspreeEndpoint: '',
    interviewBookingUrl: 'https://calendly.com'
  },
  theme: 'luxury-gold',
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
    id: 'high_tide_v1',
    title: 'Identity Check',
    notice: 'You must be at least 21 years old to enter. High Tide verifies IDs in-store.',
    minAge: 21,
    cookieDays: 30
  }
};

export default config;
