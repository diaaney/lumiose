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
    title: 'Lumiose · Web Development Studio',
    description:
      'Custom-coded, obsessively fast websites for small businesses that are done settling for "good enough."',
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
    title: 'Lumiose · Estudio de Desarrollo Web',
    description:
      'Sitios web programados a mano, obsesivamente rápidos, para negocios pequeños que ya no se conforman con "más o menos".',
  },
};

const MESSAGES: Record<Language, Messages> = { en, es };

export function getMessages(lang: Language): Messages {
  return MESSAGES[lang];
}
