'use client';

import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import { useRouter } from 'next/navigation';
import { buildLocale, parseLocale, type Locale, type Region } from '@/lib/i18n/config';

type Props = {
  currentLocale: Locale;
  labels: { us: string; mx: string; help: string };
};

const LOCALE_COOKIE = 'lumiose-locale';
const ONE_YEAR = 60 * 60 * 24 * 365;

function twemojiCode(countryCode: string): string {
  return countryCode
    .toUpperCase()
    .split('')
    .map((l) => (0x1f1e6 + l.charCodeAt(0) - 65).toString(16))
    .join('-');
}

function twemojiUrl(countryCode: string): string {
  return `https://cdn.jsdelivr.net/gh/twitter/twemoji@14.0.2/assets/svg/${twemojiCode(countryCode)}.svg`;
}

export default function RegionToggle({ currentLocale, labels }: Props) {
  const [mountEl, setMountEl] = useState<HTMLElement | null>(null);
  const router = useRouter();
  const { lang, region } = parseLocale(currentLocale);

  useEffect(() => {
    const el = document.getElementById('region-toggle-mount');
    if (el) setMountEl(el);
  }, []);

  if (!mountEl) return null;

  function selectRegion(next: Region) {
    if (next === region) return;
    const nextLocale = buildLocale(lang, next);
    document.cookie = `${LOCALE_COOKIE}=${nextLocale}; path=/; max-age=${ONE_YEAR}; SameSite=Lax`;
    const path = window.location.pathname.replace(`/${currentLocale}`, `/${nextLocale}`);
    router.push(path + window.location.hash);
  }

  return createPortal(
    <div className="region-toggle-wrap">
      <div className="region-toggle">
        <button
          type="button"
          className={`region-opt${region === 'us' ? ' is-active' : ''}`}
          onClick={() => selectRegion('us')}
          aria-pressed={region === 'us'}
        >
          <img src={twemojiUrl('US')} alt="" className="region-flag" />
          <span>{labels.us}</span>
        </button>
        <button
          type="button"
          className={`region-opt${region === 'mx' ? ' is-active' : ''}`}
          onClick={() => selectRegion('mx')}
          aria-pressed={region === 'mx'}
        >
          <img src={twemojiUrl('MX')} alt="" className="region-flag" />
          <span>{labels.mx}</span>
        </button>
      </div>
      <span className="region-help">{labels.help}</span>
    </div>,
    mountEl
  );
}
