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

const HOME_FAQS_ES: Array<{ q: string; a: string }> = [
  { q: '¿Cuánto cuesta un sitio web con Lumiose?', a: 'Tres rangos: Corner Shop desde $15,000 MXN / $900 USD para sitios pequeños, Main Street $40,000–$60,000 MXN / $2,500–$4,000 USD para builds completos, y Enterprise para operaciones más grandes. Cotización exacta gratis en 1 día hábil.' },
  { q: '¿Cuánto tarda construir mi sitio?', a: 'Entre 2 y 6 semanas según el plan. Corner Shop: 2–3 semanas. Main Street (con CMS, blog, integraciones): 4–6 semanas. Te damos fecha exacta en la cotización.' },
  { q: '¿Trabajan en español e inglés?', a: 'Sí. Somos un estudio bilingüe en la frontera Mexicali–Calexico. Construimos sitios en español, en inglés, o bilingües con SEO localizado en ambos idiomas. Cada idioma se escribe con voz propia, no con Google Translate.' },
  { q: '¿Necesito pagar mantenimiento mensual?', a: 'No es obligatorio. Te entregamos el sitio funcionando sin lock-in. Si quieres mantenimiento, ofrecemos retainer desde $2,000 MXN / $120 USD al mes con monitoreo, backups y horas de cambios incluidas.' },
  { q: '¿Puedo editar el sitio yo mismo?', a: 'Sí. Conectamos un CMS sencillo (Sanity / Notion) donde editas texto, imágenes y precios sin tocar código. Para cambios estructurales nos escribes y te cobramos por hora o por proyecto chico.' },
  { q: '¿Atienden negocios fuera de Mexicali y Calexico?', a: 'Sí. Aunque nuestra especialidad es el corredor fronterizo, trabajamos remoto con clientes en cualquier lado de México y Estados Unidos. Hemos hecho proyectos para San Diego, Tijuana, CDMX y el Valle Imperial.' },
];

const HOME_FAQS_EN: Array<{ q: string; a: string }> = [
  { q: 'How much does a Lumiose website cost?', a: 'Three tiers: Corner Shop from $900 USD / $15,000 MXN for small sites, Main Street $2,500–$4,000 USD / $40,000–$60,000 MXN for full builds, and Enterprise for larger operations. Free exact quote within one business day.' },
  { q: 'How long does it take to build my site?', a: '2–6 weeks depending on scope. Corner Shop: 2–3 weeks. Main Street (with CMS, blog, integrations): 4–6 weeks. Exact timeline in your quote.' },
  { q: 'Do you work in both English and Spanish?', a: 'Yes. We are a bilingual studio on the Mexicali–Calexico border. We build in English, Spanish, or bilingual with localized SEO in both languages. Each language gets its own voice — never Google Translate.' },
  { q: 'Do I have to pay monthly maintenance?', a: 'Not required. You get the site working with zero lock-in. If you want maintenance, we offer a retainer from $120 USD / $2,000 MXN per month with monitoring, backups, and included change hours.' },
  { q: 'Can I edit the site myself?', a: 'Yes. We connect a simple CMS (Sanity / Notion) where you edit text, images, and prices without touching code. For structural changes, message us — billed hourly or as a small project.' },
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
      <body>{children}</body>
    </html>
  );
}
