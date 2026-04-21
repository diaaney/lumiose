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
};

const en: Messages = {
  switcher: {
    language: 'Language',
    region: 'Country',
    close: 'Close',
  },
  banner: {
    detected: (region) => `Viewing pricing for ${region} — change region`,
    change: 'Change',
    dismiss: 'Dismiss',
  },
  metadata: {
    title: 'Lumiose — Web Development Studio · San Diego',
    description:
      'A web development studio for the restaurants, contractors, realtors and clinics that keep San Diego running.',
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
};

const es: Messages = {
  switcher: {
    language: 'Idioma',
    region: 'País',
    close: 'Cerrar',
  },
  banner: {
    detected: (region) => `Mostrando precios para ${region} — cambiar región`,
    change: 'Cambiar',
    dismiss: 'Cerrar',
  },
  metadata: {
    title: 'Lumiose — Estudio de Desarrollo Web · San Diego',
    description:
      'Un estudio de desarrollo web para restaurantes, contratistas, inmobiliarias y clínicas que mantienen viva a San Diego.',
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
};

const MESSAGES: Record<Language, Messages> = { en, es };

export function getMessages(lang: Language): Messages {
  return MESSAGES[lang];
}
