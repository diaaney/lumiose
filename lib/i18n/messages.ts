import type { Language } from './config';

export type Messages = {
  switcher: {
    title: string;
    help: string;
  };
  banner: {
    detected: (country: string) => string;
    change: string;
    dismiss: string;
  };
  metadata: {
    title: string;
    description: string;
  };
};

const en: Messages = {
  switcher: {
    title: 'Country',
    help: 'Changes language and pricing',
  },
  banner: {
    detected: (country) => `Viewing pricing for ${country} · change region`,
    change: 'Change',
    dismiss: 'Dismiss',
  },
  metadata: {
    title: 'Lumiose · Custom Web Development Studio · Calexico & Mexicali',
    description:
      'Bilingual studio in Calexico and Mexicali hand-coding obsessively fast websites for small businesses. SEO-ready, free quote, response within one business day.',
  },
};

const es: Messages = {
  switcher: {
    title: 'País',
    help: 'Cambia idioma y precios',
  },
  banner: {
    detected: (country) => `Mostrando precios para ${country} · cambiar región`,
    change: 'Cambiar',
    dismiss: 'Cerrar',
  },
  metadata: {
    title: 'Lumiose · Estudio de Desarrollo Web · Mexicali y Calexico',
    description:
      'Estudio bilingüe en Mexicali y Calexico que programa sitios web a mano, obsesivamente rápidos y optimizados para SEO. Cotización gratis, respuesta en 1 día hábil.',
  },
};

const MESSAGES: Record<Language, Messages> = { en, es };

export function getMessages(lang: Language): Messages {
  return MESSAGES[lang];
}
