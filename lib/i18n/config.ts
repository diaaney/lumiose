export type Language = 'en' | 'es';
export type Region = 'us' | 'mx';
export type Locale = 'en-us' | 'es-mx';

export const LOCALES: readonly Locale[] = ['en-us', 'es-mx'] as const;

export const DEFAULT_LOCALE: Locale = 'en-us';

export const LOCALE_LABELS: Record<Locale, string> = {
  'en-us': 'United States',
  'es-mx': 'México',
};

export function isLocale(value: string): value is Locale {
  return (LOCALES as readonly string[]).includes(value);
}

export function parseLocale(locale: Locale): { lang: Language; region: Region } {
  const [lang, region] = locale.split('-') as [Language, Region];
  return { lang, region };
}
