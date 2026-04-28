import type { MetadataRoute } from 'next';
import { LOCALES, type Locale } from '@/lib/i18n/config';
import { getSubpage, listSubpageSlugs } from '@/lib/pages/subpages';

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://lumiose.studio';

// Bump only when the public content meaningfully changes — not on every deploy.
// Otherwise crawlers get told the page changed each time CI runs.
const CONTENT_LAST_MODIFIED = '2026-04-27';

export default function sitemap(): MetadataRoute.Sitemap {
  const entries: MetadataRoute.Sitemap = [];

  // Landing pages (one per locale)
  for (const locale of LOCALES) {
    entries.push({
      url: `${BASE_URL}/${locale}`,
      lastModified: CONTENT_LAST_MODIFIED,
      changeFrequency: 'monthly' as const,
      priority: locale === 'en-us' ? 1 : 0.9,
      alternates: {
        languages: Object.fromEntries(LOCALES.map((l) => [l, `${BASE_URL}/${l}`])),
      },
    });
  }

  // Subpages (city / service / industry)
  for (const locale of LOCALES) {
    for (const slug of listSubpageSlugs(locale)) {
      const languages: Record<string, string> = {};
      for (const l of LOCALES) {
        const sibling = getSubpage(l as Locale, slug);
        languages[l] = sibling ? `${BASE_URL}/${l}/${slug}` : `${BASE_URL}/${l}`;
      }
      entries.push({
        url: `${BASE_URL}/${locale}/${slug}`,
        lastModified: CONTENT_LAST_MODIFIED,
        changeFrequency: 'monthly' as const,
        priority: 0.7,
        alternates: { languages },
      });
    }
  }

  return entries;
}
