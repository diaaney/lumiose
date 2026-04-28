const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://lumiose.studio';

export const dynamic = 'force-static';

export function GET() {
  const body = `# Lumiose Studio

> Web development studio building obsessively-fast, custom-coded websites for small businesses in Mexicali, Baja California (Mexico) and Calexico, California (United States). Founded by David Cintora and Diane Cintora. Bilingual delivery in English and Spanish.

## Pages

- [Home (English)](${SITE_URL}/en-us): Web development studio for small businesses
- [Home (Spanish)](${SITE_URL}/es-mx): Estudio de desarrollo web para negocios pequeños

## Services

- Custom website design and development, hand-coded with Next.js
- SEO and Core Web Vitals performance optimization
- Domain, DNS, SSL, and professional email infrastructure
- Google Search and Performance Max advertising with monthly reporting
- Bilingual websites (English and Spanish) for cross-border businesses

## Pricing

- Corner Shop tier: starting around 900 USD / 15,000 MXN — single landing page builds
- Main Street tier: full custom site with multiple pages, SEO, and analytics
- Enterprise tier: complex multi-page sites with POS integrations and dedicated PM

Quote is free, no commitment, response within one business day.

## Contact

- Email: david.cintora@lumiose.studio, diane.cintora@lumiose.studio
- WhatsApp: +1 (619) 555-0148
- Hours: Monday to Friday, 9am to 6pm Pacific Time

## Resources

- [XML sitemap](${SITE_URL}/sitemap.xml)
- [robots.txt](${SITE_URL}/robots.txt)
`;

  return new Response(body, {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
      'Cache-Control': 'public, max-age=3600, s-maxage=86400',
    },
  });
}
