import { ImageResponse } from 'next/og';

export const runtime = 'nodejs';
export const alt = 'Lumiose Studio';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

type Params = Promise<{ locale: string }>;

export default async function OgImage({ params }: { params: Params }) {
  const { locale } = await params;
  const isEs = locale === 'es-mx';

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
          fontFamily: 'Georgia, serif',
        }}
      >
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            background: '#fffdf5',
            padding: '80px 110px',
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
              marginBottom: 32,
              fontFamily: 'system-ui',
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
            Lumiose Studio
          </div>
          <div
            style={{
              display: 'flex',
              fontSize: 144,
              fontWeight: 400,
              lineHeight: 1,
              letterSpacing: -4,
              color: '#1a1f2b',
              marginBottom: 28,
            }}
          >
            Lumiose
          </div>
          <div
            style={{
              display: 'flex',
              fontSize: 32,
              fontStyle: 'italic',
              color: '#3a414f',
              textAlign: 'center',
              maxWidth: 760,
              lineHeight: 1.25,
            }}
          >
            {isEs
              ? 'Sitios programados a mano, obsesivamente rápidos.'
              : 'Custom-coded sites, obsessively fast.'}
          </div>
        </div>
      </div>
    ),
    { ...size },
  );
}
