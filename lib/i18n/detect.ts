import { DEFAULT_LOCALE, type Locale } from './config';

export function detectLocale(country: string | null | undefined): Locale {
  if (country && country.toUpperCase() === 'MX') return 'es-mx';
  return DEFAULT_LOCALE;
}
