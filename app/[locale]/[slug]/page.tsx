import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { LOCALES, isLocale, parseLocale, type Locale } from '@/lib/i18n/config';
import { getSubpage, listAllSubpages, type SubpageContent } from '@/lib/pages/subpages';

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://lumiose.studio';

type Params = Promise<{ locale: string; slug: string }>;

export const dynamic = 'force-static';
export const dynamicParams = false;

export function generateStaticParams() {
  return listAllSubpages();
}

export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
  const { locale, slug } = await params;
  if (!isLocale(locale)) return {};
  const page = getSubpage(locale as Locale, slug);
  if (!page) return {};

  const url = `${SITE_URL}/${locale}/${slug}`;
  const { lang } = parseLocale(locale as Locale);

  // Build hreflang map: include sibling-locale page only if it exists
  const languages: Record<string, string> = {};
  for (const l of LOCALES) {
    const sibling = getSubpage(l, slug);
    languages[l] = sibling ? `${SITE_URL}/${l}/${slug}` : `${SITE_URL}/${l}`;
  }
  languages['x-default'] = languages['en-us'];

  return {
    title: page.title,
    description: page.description,
    alternates: {
      canonical: url,
      languages,
    },
    openGraph: {
      type: 'website',
      url,
      siteName: 'Lumiose Studio',
      title: page.title,
      description: page.description,
      locale: lang === 'es' ? 'es_MX' : 'en_US',
    },
    twitter: {
      card: 'summary_large_image',
      title: page.title,
      description: page.description,
    },
    robots: { index: true, follow: true },
  };
}

function buildJsonLd(locale: Locale, page: SubpageContent) {
  const url = `${SITE_URL}/${locale}/${page.slug}`;
  const orgRef = `${SITE_URL}/#organization`;

  const breadcrumb = {
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Lumiose',
        item: `${SITE_URL}/${locale}`,
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: page.hero.h1Pre.replace(/[,.]$/, ''),
        item: url,
      },
    ],
  };

  const main =
    page.type === 'service'
      ? {
          '@type': 'Service',
          '@id': `${url}#service`,
          name: page.title.split('—')[0].trim(),
          description: page.description,
          provider: { '@id': orgRef },
          areaServed: [
            { '@type': 'AdministrativeArea', name: 'Mexicali, Baja California, Mexico' },
            { '@type': 'AdministrativeArea', name: 'Calexico, California, United States' },
          ],
          url,
        }
      : page.type === 'industry'
        ? {
            '@type': 'Service',
            '@id': `${url}#service`,
            name: page.title.split('—')[0].trim(),
            description: page.description,
            provider: { '@id': orgRef },
            audience: { '@type': 'Audience', audienceType: page.hero.h1Em },
            url,
          }
        : {
            '@type': 'LocalBusiness',
            '@id': `${url}#localbusiness`,
            name: 'Lumiose Studio',
            description: page.description,
            url,
            telephone: '+1-619-555-0148',
            address: page.schemaArea
              ? {
                  '@type': 'PostalAddress',
                  addressLocality: page.schemaArea.addressLocality,
                  addressRegion: page.schemaArea.addressRegion,
                  addressCountry: page.schemaArea.addressCountry,
                }
              : undefined,
          };

  return {
    '@context': 'https://schema.org',
    '@graph': [main, breadcrumb],
  };
}

export default async function SubpagePage({ params }: { params: Params }) {
  const { locale, slug } = await params;
  if (!isLocale(locale)) notFound();
  const page = getSubpage(locale as Locale, slug);
  if (!page) notFound();

  const homeHref = `/${locale}`;
  const contactHref = `${homeHref}#contact`;
  const jsonLd = buildJsonLd(locale as Locale, page);

  const navLabels =
    locale === 'es-mx'
      ? {
          services: 'Servicios',
          work: 'Proyectos',
          pricing: 'Precios',
          contact: 'Contacto',
          ctaShort: 'Cotización gratis',
          backHome: '← Volver al inicio',
          related: 'Otras páginas',
          footerNote: 'Estudio bilingüe · Mexicali · Calexico',
        }
      : {
          services: 'Services',
          work: 'Work',
          pricing: 'Pricing',
          contact: 'Contact',
          ctaShort: 'Free quote',
          backHome: '← Back to home',
          related: 'Other pages',
          footerNote: 'Bilingual studio · Calexico · Mexicali',
        };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <header className="sp-nav">
        <a href={homeHref} className="sp-brand">
          <span className="sp-mark" aria-hidden="true" />
          <span className="sp-brand-name">Lumiose</span>
          <span className="sp-brand-tag" aria-hidden="true">studio</span>
        </a>
        <nav className="sp-nav-links">
          <a href={`${homeHref}#services`}>{navLabels.services}</a>
          <a href={`${homeHref}#work`}>{navLabels.work}</a>
          <a href={`${homeHref}#pricing`}>{navLabels.pricing}</a>
          <a href={contactHref} className="sp-cta-pill">
            <span>{navLabels.ctaShort}</span>
            <span className="sp-cta-arrow" aria-hidden="true">→</span>
          </a>
        </nav>
      </header>

      <main className="sp-main">
        <section className="sp-hero">
          <div className="sp-hero-cloud sp-hero-cloud-1" aria-hidden="true">
            <svg viewBox="0 0 130 60">
              <ellipse cx="40" cy="38" rx="36" ry="18" fill="#fff" />
              <ellipse cx="74" cy="30" rx="40" ry="22" fill="#fff" />
              <ellipse cx="104" cy="40" rx="22" ry="14" fill="#fff" />
            </svg>
          </div>
          <div className="sp-hero-cloud sp-hero-cloud-2" aria-hidden="true">
            <svg viewBox="0 0 100 40">
              <ellipse cx="38" cy="24" rx="34" ry="14" fill="#fff" />
              <ellipse cx="68" cy="20" rx="26" ry="14" fill="#fff" />
            </svg>
          </div>
          <div className="sp-hero-cloud sp-hero-cloud-3" aria-hidden="true">
            <svg viewBox="0 0 60 28">
              <ellipse cx="30" cy="14" rx="28" ry="12" fill="#fff" />
            </svg>
          </div>

          <div className="sp-hero-inner">
            <p className="sp-eyebrow">{page.hero.eyebrow}</p>
            <h1 className="sp-h1">
              {page.hero.h1Pre}
              <br />
              <em>{page.hero.h1Em}</em>
            </h1>
            <p className="sp-lead">{page.hero.lead}</p>
            <div className="sp-hero-ctas">
              <a href={contactHref} className="btn sp-btn-fix">
                {navLabels.ctaShort} →
              </a>
              <a href={homeHref} className="btn ghost sp-btn-fix">
                {navLabels.backHome}
              </a>
            </div>
          </div>
        </section>

        {page.sections.map((section, i) => (
          <section key={i} className="sp-section">
            <div className="sp-section-inner">
              {section.eyebrow && <p className="sp-eyebrow sp-eyebrow-dark">{section.eyebrow}</p>}
              <h2 className="sp-h2">{section.heading}</h2>
              <div className="sp-body" dangerouslySetInnerHTML={{ __html: section.bodyHtml }} />
            </div>
          </section>
        ))}

        {page.relatedSlugs && page.relatedSlugs.length > 0 && (
          <section className="sp-related">
            <div className="sp-related-inner">
              <p className="sp-eyebrow sp-eyebrow-dark">{navLabels.related}</p>
              <div className="sp-related-grid">
                {page.relatedSlugs.map((relSlug) => {
                  const rel = getSubpage(locale as Locale, relSlug);
                  if (!rel) return null;
                  return (
                    <Link key={relSlug} href={`${homeHref}/${relSlug}`} className="sp-related-card">
                      <span className="sp-related-eye">{rel.hero.eyebrow}</span>
                      <span className="sp-related-title">{rel.hero.h1Em}</span>
                      <span className="sp-related-arrow" aria-hidden="true">
                        →
                      </span>
                    </Link>
                  );
                })}
              </div>
            </div>
          </section>
        )}

        <section className="sp-final-cta">
          <div className="sp-final-cta-inner">
            <h2 className="sp-h2">{page.finalCta.heading}</h2>
            <p className="sp-final-cta-sub">{page.finalCta.sub}</p>
            <a href={contactHref} className="btn pill-lg sp-btn-fix">
              {page.finalCta.button}
            </a>
          </div>
        </section>
      </main>

      <footer className="sp-footer">
        <div className="sp-footer-inner">
          <a href={homeHref} className="sp-brand">
            <span className="sp-mark" aria-hidden="true" />
            Lumiose
          </a>
          <span className="sp-footer-note">{navLabels.footerNote}</span>
          <span className="sp-footer-copy">© 2026 Lumiose Studio</span>
        </div>
      </footer>
    </>
  );
}
