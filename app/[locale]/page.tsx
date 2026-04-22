import { cookies } from 'next/headers';
import { notFound } from 'next/navigation';
import { BODY_HTML as BODY_EN } from './body-content.en';
import { BODY_HTML as BODY_ES } from './body-content.es';
import Interactions from './Interactions';
import LocaleSwitcher from '@/components/LocaleSwitcher';
import DetectionBanner from '@/components/DetectionBanner';
import { LOCALE_LABELS, isLocale, parseLocale, type Locale } from '@/lib/i18n/config';
import { getMessages } from '@/lib/i18n/messages';
import { buildPriceSet, injectPrices } from '@/lib/pricing/prices';

type Params = Promise<{ locale: string }>;

const BODIES: Record<'en' | 'es', string> = {
  en: BODY_EN,
  es: BODY_ES,
};

export default async function Page({ params }: { params: Params }) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const { lang, region } = parseLocale(locale as Locale);

  const cookieStore = await cookies();
  const wasDetected = cookieStore.get('lumiose-detected')?.value === '1';

  const prices = buildPriceSet(region);
  const body = injectPrices(BODIES[lang], prices);
  const messages = getMessages(lang);
  const studioCity = region === 'mx' ? 'Mexicali' : 'Calexico';

  return (
    <>
      <div dangerouslySetInnerHTML={{ __html: body }} />
      <LocaleSwitcher
        currentLocale={locale as Locale}
        labels={{
          title: messages.switcher.title,
          help: messages.switcher.help,
        }}
      />
      <DetectionBanner
        currentLocale={locale as Locale}
        wasDetected={wasDetected}
        labels={{
          change: messages.banner.change,
          dismiss: messages.banner.dismiss,
          message: messages.banner.detected(LOCALE_LABELS[locale as Locale]),
        }}
      />
      <Interactions studioCity={studioCity} />
    </>
  );
}
