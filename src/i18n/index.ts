import en from './translations/en.json';
import es from './translations/es.json';

const translations = { en, es };

export function getDictionary(locale: 'en' | 'es') {
  return translations[locale];
}
