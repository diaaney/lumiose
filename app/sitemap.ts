import type { MetadataRoute } from 'next';
import { LOCALES } from '@/lib/i18n/config';

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://lumiose.studio';

// Bump only when the public content meaningfully changes — not on every deploy.
// Otherwise crawlers get told the page changed each time CI runs.
const CONTENT_LAST_MODIFIED = '2026-04-27';

export default function sitemap(): MetadataRoute.Sitemap {
  return LOCALES.map((locale) => ({
    url: `${BASE_URL}/${locale}`,
    lastModified: CONTENT_LAST_MODIFIED,
    changeFrequency: 'monthly' as const,
    priority: locale === 'en-us' ? 1 : 0.9,
    alternates: {
      languages: Object.fromEntries(LOCALES.map((l) => [l, `${BASE_URL}/${l}`])),
    },
  }));
}
