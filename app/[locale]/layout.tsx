import type { Metadata, Viewport } from 'next';
import { Fraunces, Inter, JetBrains_Mono } from 'next/font/google';
import { notFound } from 'next/navigation';
import '../globals.css';
import { LOCALES, isLocale, parseLocale, type Locale } from '@/lib/i18n/config';
import { getMessages } from '@/lib/i18n/messages';

const fraunces = Fraunces({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
  style: ['normal', 'italic'],
  variable: '--font-fraunces',
  display: 'swap',
});

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--font-inter',
  display: 'swap',
});

const jbMono = JetBrains_Mono({
  subsets: ['latin'],
  weight: ['400', '500'],
  variable: '--font-jbmono',
  display: 'swap',
});

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://lumiose.studio';

type Params = Promise<{ locale: string }>;

export function generateStaticParams() {
  return LOCALES.map((locale) => ({ locale }));
}

export const viewport: Viewport = {
  themeColor: '#a7d2ee',
};

export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return {};
  const { lang } = parseLocale(locale as Locale);
  const messages = getMessages(lang);

  const languages: Record<string, string> = {};
  for (const l of LOCALES) languages[l] = `${SITE_URL}/${l}`;
  languages['x-default'] = `${SITE_URL}/en-us`;

  const url = `${SITE_URL}/${locale}`;
  const title = messages.metadata.title;
  const description = messages.metadata.description;

  return {
    metadataBase: new URL(SITE_URL),
    title,
    description,
    applicationName: 'Lumiose Studio',
    alternates: {
      canonical: url,
      languages,
    },
    openGraph: {
      type: 'website',
      url,
      siteName: 'Lumiose Studio',
      title,
      description,
      locale: lang === 'es' ? 'es_MX' : 'en_US',
      alternateLocale: lang === 'es' ? ['en_US'] : ['es_MX'],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
    },
    robots: { index: true, follow: true },
  };
}

function buildJsonLd(locale: Locale): unknown {
  const isEs = locale === 'es-mx';
  const url = SITE_URL;

  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Organization',
        '@id': `${url}/#organization`,
        name: 'Lumiose Studio',
        alternateName: 'Lumiose',
        url,
        logo: `${url}/icon.svg`,
        description: isEs
          ? 'Estudio de desarrollo web. Sitios programados a mano, obsesivamente rápidos, para negocios pequeños.'
          : 'Web development studio. Custom-coded, obsessively fast websites for small businesses.',
        founder: [
          { '@type': 'Person', name: 'David Cintora' },
          { '@type': 'Person', name: 'Diane Cintora' },
        ],
        contactPoint: {
          '@type': 'ContactPoint',
          contactType: 'sales',
          email: 'david.cintora@lumiose.studio',
          telephone: '+1-619-555-0148',
          availableLanguage: ['English', 'Spanish'],
        },
        areaServed: [
          { '@type': 'AdministrativeArea', name: 'Mexicali, Baja California, Mexico' },
          { '@type': 'AdministrativeArea', name: 'Calexico, California, United States' },
        ],
      },
      {
        '@type': 'LocalBusiness',
        '@id': `${url}/#localbusiness`,
        name: 'Lumiose Studio',
        url,
        image: `${url}/icon.svg`,
        priceRange: '$$',
        telephone: '+1-619-555-0148',
        address: isEs
          ? {
              '@type': 'PostalAddress',
              addressLocality: 'Mexicali',
              addressRegion: 'BC',
              addressCountry: 'MX',
            }
          : {
              '@type': 'PostalAddress',
              addressLocality: 'Calexico',
              addressRegion: 'CA',
              addressCountry: 'US',
            },
        openingHoursSpecification: [
          {
            '@type': 'OpeningHoursSpecification',
            dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
            opens: '09:00',
            closes: '18:00',
          },
        ],
      },
      {
        '@type': 'WebSite',
        '@id': `${url}/#website`,
        url,
        name: 'Lumiose Studio',
        publisher: { '@id': `${url}/#organization` },
        inLanguage: isEs ? 'es-MX' : 'en-US',
      },
      {
        '@type': 'Service',
        '@id': `${url}/#service`,
        provider: { '@id': `${url}/#organization` },
        serviceType: isEs ? 'Diseño y desarrollo web' : 'Web design and development',
        areaServed: [
          { '@type': 'Country', name: 'Mexico' },
          { '@type': 'Country', name: 'United States' },
        ],
        offers: {
          '@type': 'AggregateOffer',
          priceCurrency: isEs ? 'MXN' : 'USD',
          lowPrice: isEs ? '15000' : '900',
          highPrice: isEs ? '120000' : '7500',
        },
      },
    ],
  };
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Params;
}) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const { lang } = parseLocale(locale as Locale);
  const jsonLd = buildJsonLd(locale as Locale);

  return (
    <html lang={lang} className={`${fraunces.variable} ${inter.variable} ${jbMono.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
