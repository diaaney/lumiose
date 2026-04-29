import type { Metadata, Viewport } from 'next';
import { Fraunces, Inter, JetBrains_Mono } from 'next/font/google';
import { notFound } from 'next/navigation';
import { Analytics } from '@vercel/analytics/next';
import { SpeedInsights } from '@vercel/speed-insights/next';
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

const HOME_FAQS_ES: Array<{ q: string; a: string }> = [
  { q: '¿Cuánto cuesta un sitio web con Lumiose?', a: 'Tres planes: Corner Shop $5,999 MXN + $499/mes (sitio vitrina, 1 semana). Main Street $14,999 MXN + $1,199/mes (12 páginas con CMS, reservas, integraciones). Enterprise desde $34,999 MXN + $2,999/mes (multi-ubicación, e-commerce, integraciones custom). Setup se factura 50% al inicio y 50% al lanzar.' },
  { q: '¿Cuánto tarda construir mi sitio?', a: 'Corner Shop lanza en 1 semana. Main Street en 2 semanas con 2 rondas de revisiones. Enterprise entre 4 y 6 semanas. La fecha exacta queda confirmada en la cotización.' },
  { q: '¿Trabajan en español e inglés?', a: 'Sí. Somos un estudio bilingüe en la frontera Mexicali–Calexico. Construimos sitios en español, en inglés, o bilingües con SEO localizado en ambos idiomas. Cada idioma se escribe con voz propia, no con Google Translate.' },
  { q: '¿Necesito pagar mantenimiento mensual?', a: 'La mensualidad de cada plan ya incluye hosting, cuidado y actualizaciones — desde $499 MXN al mes con Corner Shop. Si solo quieres mantenimiento sobre un sitio existente, ofrecemos retainer desde $499 MXN al mes. Cancelas cuando quieras, sin lock-in.' },
  { q: '¿Puedo editar el sitio yo mismo?', a: 'Sí. Construimos un panel custom hecho a la medida de tu sitio donde editas textos, imágenes, precios o productos sin tocar código. Para cambios estructurales nos escribes y los hacemos por hora o como proyecto chico.' },
  { q: '¿Atienden negocios fuera de Mexicali y Calexico?', a: 'Sí. Aunque nuestra especialidad es el corredor fronterizo, trabajamos remoto con clientes en cualquier lado de México y Estados Unidos. Hemos hecho proyectos para San Diego, Tijuana, CDMX y el Valle Imperial.' },
];

const HOME_FAQS_EN: Array<{ q: string; a: string }> = [
  { q: 'How much does a Lumiose website cost?', a: 'Three plans: Corner Shop $1,800 USD + $59/mo (showcase site, 1 week). Main Street $4,500 USD + $129/mo (12 pages with CMS, reservations, integrations). Enterprise from $9,500 USD + $299/mo (multi-location, e-commerce, custom integrations). Setup billed 50% upfront, 50% on launch.' },
  { q: 'How long does it take to build my site?', a: 'Corner Shop launches in 1 week. Main Street in 2 weeks with 2 review rounds. Enterprise in 4–6 weeks. Exact timeline locked in your quote.' },
  { q: 'Do you work in both English and Spanish?', a: 'Yes. We are a bilingual studio on the Mexicali–Calexico border. We build in English, Spanish, or bilingual with localized SEO in both languages. Each language gets its own voice — never Google Translate.' },
  { q: 'Do I have to pay monthly maintenance?', a: 'Each plan\'s monthly fee already covers hosting, care, and updates — starting at $59 USD/mo with Corner Shop. If you only want maintenance on an existing site, our retainer starts at $39 USD/mo. Cancel anytime, no lock-in.' },
  { q: 'Can I edit the site myself?', a: 'Yes. We build a custom admin panel tailored to your site so you can edit text, images, prices, or products without touching code. Structural changes you message us about — billed hourly or as small projects.' },
  { q: 'Do you serve businesses outside Mexicali and Calexico?', a: 'Yes. While our specialty is the border corridor, we work remote with clients across Mexico and the US. We have shipped projects for San Diego, Tijuana, Mexico City, and Imperial Valley businesses.' },
];

function buildJsonLd(locale: Locale): unknown {
  const isEs = locale === 'es-mx';
  const url = SITE_URL;
  const homeFaqs = isEs ? HOME_FAQS_ES : HOME_FAQS_EN;

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
          telephone: '+52-686-306-9134',
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
        telephone: '+52-686-306-9134',
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
      {
        '@type': 'FAQPage',
        '@id': `${url}/${locale}#faq`,
        mainEntity: homeFaqs.map((f) => ({
          '@type': 'Question',
          name: f.q,
          acceptedAnswer: { '@type': 'Answer', text: f.a },
        })),
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
      <body>
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
