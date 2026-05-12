import { ImageResponse } from 'next/og';

export const runtime = 'nodejs';
export const alt = 'Lumiose Studio';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

type Params = Promise<{ locale: string }>;

async function loadGoogleFont(
  family: string,
  weight: number,
  text: string,
  italic = false,
): Promise<ArrayBuffer> {
  const styleAxis = italic ? 'ital,wght@1,' : 'wght@';
  const url = `https://fonts.googleapis.com/css2?family=${family.replace(/ /g, '+')}:${styleAxis}${weight}&text=${encodeURIComponent(text)}`;
  const css = await fetch(url).then((r) => r.text());
  const match = css.match(/src:\s*url\((https:\/\/fonts\.gstatic\.com\/[^)]+)\)\s*format\('(truetype|opentype)'\)/);
  if (!match) throw new Error(`Failed to resolve ${family} ${weight}${italic ? ' italic' : ''}`);
  return fetch(match[1]).then((r) => r.arrayBuffer());
}

export default async function OgImage({ params }: { params: Params }) {
  const { locale } = await params;
  const isEs = locale === 'es-mx';

  const eyebrow = 'LUMIOSE STUDIO';
  const headline = 'Lumiose';
  const tagline = isEs
    ? 'Sitios Web diseñados para convertir visitas en clientes.'
    : 'Websites designed to turn visitors into customers.';
  const cta = isEs ? 'Cotización gratis →' : 'Free quote →';
  const footer = 'lumiose.studio';

  const sansText = `${eyebrow}${cta}${footer}`;
  const serifText = headline;
  const italicText = tagline;

  const [interSemibold, fraunces, frauncesItalic] = await Promise.all([
    loadGoogleFont('Inter', 600, sansText),
    loadGoogleFont('Fraunces', 400, serifText),
    loadGoogleFont('Fraunces', 400, italicText, true),
  ]);

  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          background: '#a7d2ee',
          backgroundImage: 'linear-gradient(180deg, #bfdcf3 0%, #a7d2ee 55%, #8ec4e8 100%)',
          padding: 80,
        }}
      >
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            background: '#fffdf5',
            padding: '76px 110px 64px',
            borderRadius: 32,
            boxShadow: '0 24px 60px rgba(26,31,43,0.18)',
          }}
        >
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              fontSize: 18,
              letterSpacing: 4,
              textTransform: 'uppercase',
              color: '#6a7080',
              marginBottom: 30,
              fontFamily: 'Inter',
              fontWeight: 600,
            }}
          >
            <div
              style={{
                width: 10,
                height: 10,
                background: '#d94f3a',
                borderRadius: 999,
                marginRight: 14,
              }}
            />
            {eyebrow}
          </div>

          <div
            style={{
              display: 'flex',
              fontSize: 152,
              fontWeight: 400,
              lineHeight: 1,
              letterSpacing: -5,
              color: '#1a1f2b',
              marginBottom: 28,
              fontFamily: 'Fraunces',
            }}
          >
            {headline}
          </div>

          <div
            style={{
              display: 'flex',
              fontSize: 32,
              fontStyle: 'italic',
              color: '#3a414f',
              textAlign: 'center',
              maxWidth: 760,
              lineHeight: 1.3,
              marginBottom: 36,
              fontFamily: 'Fraunces',
            }}
          >
            {tagline}
          </div>

          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              fontSize: 22,
              fontFamily: 'Inter',
              fontWeight: 600,
              color: '#fafafa',
              background: '#111318',
              padding: '14px 26px',
              borderRadius: 999,
            }}
          >
            {cta}
          </div>
        </div>

        <div
          style={{
            display: 'flex',
            marginTop: 36,
            fontSize: 20,
            color: '#1a1f2b',
            opacity: 0.75,
            fontFamily: 'Inter',
            fontWeight: 600,
            letterSpacing: 1.4,
          }}
        >
          {footer}
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [
        { name: 'Inter', data: interSemibold, style: 'normal', weight: 600 },
        { name: 'Fraunces', data: fraunces, style: 'normal', weight: 400 },
        { name: 'Fraunces', data: frauncesItalic, style: 'italic', weight: 400 },
      ],
    },
  );
}
