'use client';

import { useEffect, useMemo, useState } from 'react';
import { createPortal } from 'react-dom';
import { useRouter } from 'next/navigation';
import {
  LANGUAGES,
  REGIONS,
  LOCALES,
  LANGUAGE_LABELS,
  REGION_LABELS,
  buildLocale,
  isLocale,
  parseLocale,
  type Language,
  type Locale,
  type Region,
} from '@/lib/i18n/config';

type Props = {
  currentLocale: Locale;
  labels: { language: string; region: string; close: string };
};

const LOCALE_COOKIE = 'lumiose-locale';
const ONE_YEAR = 60 * 60 * 24 * 365;

const REGION_FLAG_CODES: Record<Region, string> = {
  us: 'US',
  mx: 'MX',
};

// Twemoji = Twitter's cartoonish/illustrated flag emojis as SVGs via jsdelivr CDN.
// Each country code becomes two regional-indicator codepoints joined with a hyphen.
function twemojiCode(countryCode: string): string {
  return countryCode
    .toUpperCase()
    .split('')
    .map((l) => (0x1f1e6 + l.charCodeAt(0) - 65).toString(16))
    .join('-');
}

const FLAG_URL = (code: string) =>
  `https://cdn.jsdelivr.net/gh/jdecked/twemoji@latest/assets/svg/${twemojiCode(code)}.svg`;

function setCookie(name: string, value: string) {
  document.cookie = `${name}=${value}; max-age=${ONE_YEAR}; path=/; SameSite=Lax`;
}

export default function LocaleSwitcher({ currentLocale, labels }: Props) {
  const [mounted, setMounted] = useState(false);
  const [target, setTarget] = useState<HTMLElement | null>(null);
  const [open, setOpen] = useState(false);
  const router = useRouter();

  const { lang, region } = useMemo(() => parseLocale(currentLocale), [currentLocale]);

  useEffect(() => {
    setMounted(true);
    setTarget(document.getElementById('locale-switcher-mount'));
  }, []);

  useEffect(() => {
    if (!open) return;
    const onDoc = (e: MouseEvent) => {
      const el = e.target as HTMLElement;
      if (!el.closest('.ls-pop') && !el.closest('.ls-flag')) setOpen(false);
    };
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false);
    };
    document.addEventListener('click', onDoc);
    document.addEventListener('keydown', onKey);
    return () => {
      document.removeEventListener('click', onDoc);
      document.removeEventListener('keydown', onKey);
    };
  }, [open]);

  const go = (next: Locale) => {
    if (!isLocale(next)) return;
    setCookie(LOCALE_COOKIE, next);
    router.push(`/${next}`);
    setOpen(false);
  };

  const pickLang = (newLang: Language) => {
    const candidate = buildLocale(newLang, region);
    if (LOCALES.includes(candidate)) go(candidate);
    else go(buildLocale(newLang, 'us'));
  };

  const pickRegion = (newRegion: Region) => {
    const candidate = buildLocale(lang, newRegion);
    if (LOCALES.includes(candidate)) go(candidate);
    else go(buildLocale('en', newRegion));
  };

  if (!mounted || !target) return null;

  const node = (
    <div className="ls-root">
      <button
        type="button"
        className="ls-flag"
        aria-label="Change language and region"
        aria-haspopup="true"
        aria-expanded={open}
        onClick={(e) => {
          e.stopPropagation();
          setOpen((v) => !v);
        }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          className="ls-flag-img"
          src={FLAG_URL(REGION_FLAG_CODES[region])}
          alt=""
          width={40}
          height={40}
          loading="eager"
        />
      </button>
      {open && (
        <div className="ls-pop" role="menu">
          <div className="ls-group">
            <div className="ls-group-label">{labels.language}</div>
            {LANGUAGES.map((l) => (
              <button
                key={l}
                type="button"
                className={`ls-opt${l === lang ? ' is-active' : ''}`}
                onClick={() => pickLang(l)}
              >
                <span className="ls-opt-label">{LANGUAGE_LABELS[l]}</span>
                {l === lang && <span className="ls-check" aria-hidden>✓</span>}
              </button>
            ))}
          </div>
          <div className="ls-group">
            <div className="ls-group-label">{labels.region}</div>
            {REGIONS.map((r) => (
              <button
                key={r}
                type="button"
                className={`ls-opt${r === region ? ' is-active' : ''}`}
                onClick={() => pickRegion(r)}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  className="ls-opt-flag"
                  src={FLAG_URL(REGION_FLAG_CODES[r])}
                  alt=""
                  width={20}
                  height={20}
                  loading="lazy"
                />
                <span className="ls-opt-label">{REGION_LABELS[r]}</span>
                {r === region && <span className="ls-check" aria-hidden>✓</span>}
              </button>
            ))}
          </div>
        </div>
      )}
      <style>{`
        .ls-root{
          position:absolute;top:22px;right:22px;z-index:6;
          display:inline-flex;align-items:center;
        }
        .ls-flag{
          width:44px;height:44px;border-radius:50%;
          background:#fff;border:none;cursor:pointer;padding:2px;
          display:inline-flex;align-items:center;justify-content:center;
          box-shadow:0 12px 30px -18px rgba(20,30,50,.35), 0 2px 0 rgba(255,255,255,.8) inset, 0 0 0 1px rgba(20,30,50,.06);
          transition:transform .18s ease, box-shadow .18s ease;
        }
        .ls-flag:hover{transform:translateY(-1px);box-shadow:0 16px 32px -16px rgba(20,30,50,.45), 0 2px 0 rgba(255,255,255,.8) inset, 0 0 0 1px rgba(20,30,50,.08)}
        .ls-flag:active{transform:translateY(0)}
        .ls-flag-img{
          width:30px;height:30px;display:block;
          object-fit:contain;
        }
        .ls-pop{
          position:absolute;top:calc(100% + 10px);right:0;z-index:121;
          background:#fff;border-radius:14px;padding:10px;min-width:220px;
          box-shadow:0 22px 50px -18px rgba(20,30,50,.4), 0 0 0 1px rgba(20,30,50,.06);
          display:flex;flex-direction:column;gap:8px;
          animation:ls-fade .18s ease-out;
        }
        @keyframes ls-fade{from{opacity:0;transform:translateY(-4px)}to{opacity:1;transform:translateY(0)}}
        .ls-group{display:flex;flex-direction:column;gap:2px}
        .ls-group-label{
          font-family:'JetBrains Mono',monospace;font-size:10.5px;letter-spacing:.1em;
          text-transform:uppercase;color:#6a7080;padding:6px 10px 2px;
        }
        .ls-opt{
          display:flex;align-items:center;gap:10px;
          text-align:left;background:transparent;border:none;cursor:pointer;
          font-family:'Inter',sans-serif;font-size:14px;color:#1a1f2b;
          padding:8px 10px;border-radius:8px;width:100%;
        }
        .ls-opt:hover{background:#f3efe1}
        .ls-opt.is-active{background:#111318;color:#fafafa}
        .ls-opt-flag{
          width:22px;height:22px;display:block;
          object-fit:contain;flex-shrink:0;
        }
        .ls-opt-label{flex:1}
        .ls-check{font-size:12px;opacity:.85}
      `}</style>
    </div>
  );

  return createPortal(node, target);
}
