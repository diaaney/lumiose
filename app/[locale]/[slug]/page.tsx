import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { LOCALES, isLocale, parseLocale, type Locale } from '@/lib/i18n/config';
import { getSubpage, listAllSubpages, type SubpageContent } from '@/lib/pages/subpages';
import NavScrollHide from '@/components/NavScrollHide';

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
      { '@type': 'ListItem', position: 1, name: 'Lumiose', item: `${SITE_URL}/${locale}` },
      { '@type': 'ListItem', position: 2, name: page.hero.h1Pre.replace(/[,.]$/, ''), item: url },
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

  const graph: unknown[] = [main, breadcrumb];

  if (page.faqs && page.faqs.length > 0) {
    graph.push({
      '@type': 'FAQPage',
      '@id': `${url}#faq`,
      mainEntity: page.faqs.map((f) => ({
        '@type': 'Question',
        name: f.q,
        acceptedAnswer: { '@type': 'Answer', text: f.a },
      })),
    });
  }

  return {
    '@context': 'https://schema.org',
    '@graph': graph,
  };
}

type Strings = {
  navServices: string;
  navWork: string;
  navPricing: string;
  navCta: string;
  ctaShort: string;
  related: string;
  footerTagline: string;
  footerColServices: string;
  footerColStudio: string;
  footerColOther: string;
  footerCopy: string;
  footerSign: string;
  fServices: { web: string; seo: string; ads: string; infra: string; consult: string };
  fStudio: { work: string; pricing: string; contact: string; jobs: string };
};

const STRINGS: Record<Locale, Strings> = {
  'es-mx': {
    navServices: 'Servicios',
    navWork: 'Proyectos',
    navPricing: 'Precios',
    navCta: 'Agendar llamada',
    ctaShort: 'Cotización gratis',
    related: 'Otras páginas del estudio',
    footerTagline:
      'Un estudio en Baja California, construyendo sitios, tiendas y sistemas de marketing para los negocios que tenemos al lado.',
    footerColServices: 'Servicios',
    footerColStudio: 'Estudio',
    footerColOther: 'Otros',
    footerCopy: '© 2026 LUMIOSE STUDIO · BAJA CALIFORNIA',
    footerSign: 'HECHO CON ☀ + ☕',
    fServices: {
      web: 'Diseño web',
      seo: 'SEO y GEO',
      ads: 'Publicidad digital',
      infra: 'Infraestructura',
      consult: 'Consultoría',
    },
    fStudio: {
      work: 'Trabajo reciente',
      pricing: 'Precios',
      contact: 'Contacto',
      jobs: 'Trabaja con nosotros',
    },
  },
  'en-us': {
    navServices: 'Services',
    navWork: 'Work',
    navPricing: 'Pricing',
    navCta: 'Book a call',
    ctaShort: 'Free quote',
    related: 'More from the studio',
    footerTagline:
      'A studio in Baja California, building sites, stores, and marketing systems for the businesses next door.',
    footerColServices: 'Services',
    footerColStudio: 'Studio',
    footerColOther: 'Other',
    footerCopy: '© 2026 LUMIOSE STUDIO · BAJA CALIFORNIA',
    footerSign: 'MADE WITH ☀ + ☕',
    fServices: {
      web: 'Web design',
      seo: 'SEO & GEO',
      ads: 'Digital ads',
      infra: 'Infrastructure',
      consult: 'Consulting',
    },
    fStudio: {
      work: 'Recent work',
      pricing: 'Pricing',
      contact: 'Contact',
      jobs: 'Work with us',
    },
  },
};

const FOOTER_SERVICE_SLUGS: Record<Locale, { web: string; seo: string; ads: string; infra: string; consult: string }> = {
  'es-mx': {
    web: 'diseno-web',
    seo: 'seo',
    ads: 'publicidad-digital',
    infra: 'infraestructura',
    consult: 'consultoria',
  },
  'en-us': {
    web: 'web-design',
    seo: 'seo',
    ads: 'digital-ads',
    infra: 'infrastructure',
    consult: 'consulting',
  },
};

export default async function SubpagePage({ params }: { params: Params }) {
  const { locale, slug } = await params;
  if (!isLocale(locale)) notFound();
  const page = getSubpage(locale as Locale, slug);
  if (!page) notFound();

  const homeHref = `/${locale}`;
  const contactHref = `${homeHref}#contact`;
  const jsonLd = buildJsonLd(locale as Locale, page);
  const t = STRINGS[locale as Locale];
  const fSlugs = FOOTER_SERVICE_SLUGS[locale as Locale];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <header className="sp-nav">
        <a href={homeHref} className="logo sp-logo-link">
          <span className="mark" aria-hidden="true" />
          <span>Lumiose</span>
        </a>
        <nav className="sp-nav-links">
          <a href={`${homeHref}#services`}>{t.navServices}</a>
          <a href={`${homeHref}#work`}>{t.navWork}</a>
          <a href={`${homeHref}#pricing`}>{t.navPricing}</a>
          <a href={contactHref} className="btn sp-nav-cta">
            {t.navCta}
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
              <a href={contactHref} className="btn pill-lg sp-btn-fix">
                {t.ctaShort} →
              </a>
              <a href={homeHref} className="btn pill-lg ghost sp-btn-fix">
                Lumiose ←
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

        {page.faqs && page.faqs.length > 0 && (
          <section className="sp-faq">
            <div className="sp-faq-inner">
              <p className="sp-eyebrow sp-eyebrow-dark">{page.faqHeading ?? 'FAQ'}</p>
              <div className="sp-faq-list">
                {page.faqs.map((f, i) => (
                  <details key={i} className="sp-faq-item">
                    <summary className="sp-faq-q">
                      <span className="sp-faq-num">
                        {String(i + 1).padStart(2, '0')}.
                      </span>
                      <span className="sp-faq-text">{f.q}</span>
                      <svg
                        className="sp-faq-arrow"
                        viewBox="0 0 14 14"
                        aria-hidden="true"
                      >
                        <line x1="2" y1="7" x2="12" y2="7" />
                        <line className="vbar" x1="7" y1="2" x2="7" y2="12" />
                      </svg>
                    </summary>
                    <div className="sp-faq-a">{f.a}</div>
                  </details>
                ))}
              </div>
            </div>
          </section>
        )}

        {page.relatedSlugs && page.relatedSlugs.length > 0 && (
          <section className="sp-related">
            <div className="sp-related-inner">
              <p className="sp-eyebrow sp-eyebrow-dark">{t.related}</p>
              <div className="sp-related-grid">
                {page.relatedSlugs.map((relSlug) => {
                  const rel = getSubpage(locale as Locale, relSlug);
                  if (!rel) return null;
                  return (
                    <Link key={relSlug} href={`${homeHref}/${relSlug}`} className="sp-related-card">
                      <span className="sp-related-eye">{rel.hero.eyebrow}</span>
                      <span className="sp-related-title">{rel.hero.h1Em}</span>
                      <span className="sp-related-arrow" aria-hidden="true">→</span>
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

      <footer>
        <div className="foot-inner">
          <div className="foot-brand">
            <div className="logo">
              <span className="mark" aria-hidden="true" /> Lumiose
            </div>
            <p>{t.footerTagline}</p>
          </div>
          <div>
            <h5>{t.footerColServices}</h5>
            <ul>
              <li><Link href={`${homeHref}/${fSlugs.web}`}>{t.fServices.web}</Link></li>
              <li><Link href={`${homeHref}/${fSlugs.seo}`}>{t.fServices.seo}</Link></li>
              <li><Link href={`${homeHref}/${fSlugs.ads}`}>{t.fServices.ads}</Link></li>
              <li><Link href={`${homeHref}/${fSlugs.infra}`}>{t.fServices.infra}</Link></li>
              <li><Link href={`${homeHref}/${fSlugs.consult}`}>{t.fServices.consult}</Link></li>
            </ul>
          </div>
          <div>
            <h5>{t.footerColStudio}</h5>
            <ul>
              <li><a href={`${homeHref}#work`}>{t.fStudio.work}</a></li>
              <li><a href={`${homeHref}#pricing`}>{t.fStudio.pricing}</a></li>
              <li><a href={contactHref}>{t.fStudio.contact}</a></li>
              <li><a href={contactHref}>{t.fStudio.jobs}</a></li>
            </ul>
          </div>
          <div>
            <h5>{t.footerColOther}</h5>
            <ul>
              <li><a>Instagram</a></li>
              <li><a>LinkedIn</a></li>
              <li><a>Dribbble</a></li>
              <li><a>GitHub</a></li>
            </ul>
          </div>
        </div>
        <div className="foot-bottom">
          <span>{t.footerCopy}</span>
          <span>{t.footerSign}</span>
        </div>
      </footer>
      <NavScrollHide />
    </>
  );
}
