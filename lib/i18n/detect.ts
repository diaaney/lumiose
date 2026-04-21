import { DEFAULT_LOCALE, LANGUAGES, REGIONS, type Language, type Locale, type Region, buildLocale } from './config';

const LATAM_COUNTRIES = new Set([
  'MX', 'AR', 'CL', 'CO', 'PE', 'UY', 'PA', 'CR', 'EC', 'DO', 'GT',
  'BO', 'VE', 'HN', 'NI', 'SV', 'PY', 'ES',
]);

export function pickLanguage(acceptLanguage: string | null | undefined, country: string | null | undefined): Language {
  if (acceptLanguage) {
    const tags = acceptLanguage.split(',').map((t) => t.trim().toLowerCase());
    for (const tag of tags) {
      if (tag.startsWith('es')) return 'es';
      if (tag.startsWith('en')) return 'en';
    }
  }
  if (country && LATAM_COUNTRIES.has(country.toUpperCase())) return 'es';
  return 'en';
}

export function pickRegion(country: string | null | undefined): Region {
  if (!country) return 'us';
  return country.toUpperCase() === 'MX' ? 'mx' : 'us';
}

export function detectLocale(opts: {
  acceptLanguage: string | null | undefined;
  country: string | null | undefined;
}): Locale {
  try {
    const lang = pickLanguage(opts.acceptLanguage, opts.country);
    const region = pickRegion(opts.country);
    return buildLocale(lang, region);
  } catch {
    return DEFAULT_LOCALE;
  }
}

export function isLanguageTag(tag: string): tag is Language {
  return (LANGUAGES as readonly string[]).includes(tag);
}

export function isRegionTag(tag: string): tag is Region {
  return (REGIONS as readonly string[]).includes(tag);
}
