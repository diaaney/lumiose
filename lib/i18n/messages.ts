import type { Language } from './config';

export type Messages = {
  switcher: {
    language: string;
    region: string;
    close: string;
  };
  banner: {
    detected: (region: string) => string;
    change: string;
    dismiss: string;
  };
  metadata: {
    title: string;
    description: string;
  };
  pricing: {
    shownFor: (country: string) => string;
    tier: {
      premium: string;
      standard: string;
      'latam-high': string;
      'latam-sea': string;
      emerging: string;
    };
  };
  regionToggle: {
    us: string;
    mx: string;
    help: string;
  };
};

const en: Messages = {
  switcher: {
    language: 'Language',
    region: 'Country',
    close: 'Close',
  },
  banner: {
    detected: (region) => `Viewing pricing for ${region} · change region`,
    change: 'Change',
    dismiss: 'Dismiss',
  },
  metadata: {
    title: 'Lumiose · Web Development Studio',
    description:
      'Custom-coded, obsessively fast websites for small businesses that are done settling for "good enough."',
  },
  pricing: {
    shownFor: (country) => `Prices shown for ${country}`,
    tier: {
      premium: 'Premium',
      standard: 'Standard',
      'latam-high': 'LATAM',
      'latam-sea': 'LATAM / SEA',
      emerging: 'Emerging markets',
    },
  },
  regionToggle: {
    us: 'US (USD)',
    mx: 'MX (MXN)',
    help: 'Prices auto-detected. Click to switch.',
  },
};

const es: Messages = {
  switcher: {
    language: 'Idioma',
    region: 'País',
    close: 'Cerrar',
  },
  banner: {
    detected: (region) => `Mostrando precios para ${region} · cambiar región`,
    change: 'Cambiar',
    dismiss: 'Cerrar',
  },
  metadata: {
    title: 'Lumiose · Estudio de Desarrollo Web',
    description:
      'Sitios web programados a mano, obsesivamente rápidos, para negocios pequeños que ya no se conforman con "más o menos".',
  },
  pricing: {
    shownFor: (country) => `Precios mostrados para ${country}`,
    tier: {
      premium: 'Premium',
      standard: 'Estándar',
      'latam-high': 'LATAM',
      'latam-sea': 'LATAM / SEA',
      emerging: 'Mercados emergentes',
    },
  },
  regionToggle: {
    us: 'US (USD)',
    mx: 'MX (MXN)',
    help: 'Precios auto-detectados. Haz clic para cambiar.',
  },
};

const MESSAGES: Record<Language, Messages> = { en, es };

export function getMessages(lang: Language): Messages {
  return MESSAGES[lang];
}
