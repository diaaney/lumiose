export type Language = 'en' | 'es';
export type Region = 'us' | 'mx';
export type Locale = `${Language}-${Region}`;

export const LANGUAGES: readonly Language[] = ['en', 'es'] as const;
export const REGIONS: readonly Region[] = ['us', 'mx'] as const;

export const LOCALES: readonly Locale[] = ['en-us', 'es-us', 'en-mx', 'es-mx'] as const;

export const DEFAULT_LOCALE: Locale = 'en-us';

export const LANGUAGE_LABELS: Record<Language, string> = {
  en: 'English',
  es: 'Español',
};

export const REGION_LABELS: Record<Region, string> = {
  us: 'United States',
  mx: 'México',
};

export function isLocale(value: string): value is Locale {
  return (LOCALES as readonly string[]).includes(value);
}

export function parseLocale(locale: Locale): { lang: Language; region: Region } {
  const [lang, region] = locale.split('-') as [Language, Region];
  return { lang, region };
}

export function buildLocale(lang: Language, region: Region): Locale {
  return `${lang}-${region}` as Locale;
}
