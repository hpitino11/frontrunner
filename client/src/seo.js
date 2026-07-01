import { getService, serviceData } from './data/serviceData';

export const SITE_URL = 'https://frontrunnerrestoration.com';
const BASE_TITLE = 'Front Runner Restoration';

export function getMeta(path) {
  if (path.startsWith('/services/')) {
    const slug = path.split('/').pop();
    const service = getService(slug) || serviceData[0];
    return { title: `${service.title} | ${BASE_TITLE}`, description: service.short };
  }
  switch (path) {
    case '/before-after':
      return {
        title: `Before & After | ${BASE_TITLE}`,
        description: 'See real before-and-after results from Front Runner Restoration’s water damage and dry ice blasting projects across Florida.',
      };
    case '/about':
      return {
        title: `About | ${BASE_TITLE}`,
        description: 'Learn about Front Runner Restoration, a Florida water, fire, and storm damage restoration company available 24/7, with mold prevention services.',
      };
    case '/contact':
      return {
        title: `Contact | ${BASE_TITLE}`,
        description: 'Contact Front Runner Restoration for 24/7 water, fire, and storm damage help across Florida. Call 1-888-DRYOUT-2.',
      };
    case '/privacy-policy':
      return {
        title: `Privacy Policy | ${BASE_TITLE}`,
        description: 'Read Front Runner Restoration’s privacy policy covering how we collect, use, and protect your information.',
      };
    default:
      return {
        title: `${BASE_TITLE} | Florida`,
        description: 'Call 1-888-DRYOUT-2 for fast water, fire, and damage restoration across Florida.',
      };
  }
}
