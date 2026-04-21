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
          width={46}
          height={32}
          loading="eager"
        />
      </button>
      {open && (
        <div className="ls-pop" role="menu">
          <div className="ls-pop-tab" aria-hidden />
          <div className="ls-group">
            <div className="ls-group-label">{labels.language}</div>
            {LANGUAGES.map((l) => (
              <button
                key={l}
                type="button"
                role="menuitemradio"
                aria-checked={l === lang}
                className={`ls-opt${l === lang ? ' is-active' : ''}`}
                onClick={() => pickLang(l)}
              >
                <span className="ls-opt-glyph" aria-hidden>
                  {l === 'en' ? 'En' : 'Es'}
                </span>
                <span className="ls-opt-label">{LANGUAGE_LABELS[l]}</span>
                {l === lang && <span className="ls-check" aria-hidden>✓</span>}
              </button>
            ))}
          </div>
          <div className="ls-divider" aria-hidden />
          <div className="ls-group">
            <div className="ls-group-label">{labels.region}</div>
            {REGIONS.map((r) => (
              <button
                key={r}
                type="button"
                role="menuitemradio"
                aria-checked={r === region}
                className={`ls-opt${r === region ? ' is-active' : ''}`}
                onClick={() => pickRegion(r)}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  className="ls-opt-flag"
                  src={FLAG_URL(REGION_FLAG_CODES[r])}
                  alt=""
                  width={26}
                  height={18}
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
          position:absolute;top:22px;right:28px;z-index:6;
          height:42px;
          display:inline-flex;align-items:center;
        }
        .ls-flag{
          width:auto;height:auto;
          background:transparent;border:none;cursor:pointer;padding:0;
          display:inline-flex;align-items:center;justify-content:center;
          filter:drop-shadow(0 8px 14px rgba(20,30,50,.22));
          transition:transform .2s cubic-bezier(.2,.8,.2,1), filter .2s ease;
        }
        .ls-flag:hover{
          transform:translateY(-1px) rotate(-2deg) scale(1.06);
          filter:drop-shadow(0 12px 18px rgba(20,30,50,.28));
        }
        .ls-flag:active{transform:translateY(0) rotate(0) scale(1)}
        .ls-flag-img{
          width:46px;height:32px;display:block;
          object-fit:contain;
          border-radius:4px;
        }

        .ls-pop{
          position:absolute;top:calc(100% + 14px);right:-6px;z-index:121;
          min-width:252px;padding:14px 12px 16px;
          background:linear-gradient(180deg, #ffffff 0%, #fafaf7 100%);
          border-radius:18px;
          box-shadow:
            0 28px 60px -24px rgba(20,30,50,.25),
            0 6px 14px -10px rgba(20,30,50,.12),
            inset 0 1px 0 rgba(255,255,255,1),
            0 0 0 1px rgba(20,30,50,.06);
          display:flex;flex-direction:column;gap:10px;
          animation:ls-pop-in .24s cubic-bezier(.2,.8,.2,1);
          transform-origin:top right;
        }
        @keyframes ls-pop-in{
          from{opacity:0;transform:translateY(-6px) scale(.97)}
          to{opacity:1;transform:translateY(0) scale(1)}
        }
        /* little paper tab pointing up to the flag */
        .ls-pop-tab{
          position:absolute;top:-7px;right:22px;
          width:14px;height:14px;
          background:#ffffff;
          transform:rotate(45deg);
          box-shadow:-1px -1px 0 rgba(20,30,50,.06);
          border-top-left-radius:3px;
        }

        .ls-group{display:flex;flex-direction:column;gap:2px}
        .ls-group-label{
          font-family:'Fraunces',Georgia,serif;
          font-style:italic;font-weight:400;
          font-size:13.5px;color:#6a7080;
          padding:4px 12px 6px;
          letter-spacing:.005em;
        }

        .ls-divider{
          height:1px;margin:2px 14px;
          background:linear-gradient(90deg, transparent, rgba(20,30,50,.1), transparent);
        }

        .ls-opt{
          position:relative;
          display:flex;align-items:center;gap:12px;
          text-align:left;background:transparent;border:none;cursor:pointer;
          font-family:'Inter',sans-serif;font-size:14px;color:#1a1f2b;
          padding:9px 12px;border-radius:12px;width:100%;
          transition:background .18s ease, color .18s ease, transform .18s ease, letter-spacing .18s ease;
        }
        .ls-opt:hover{
          background:rgba(20,30,50,.055);
          transform:translateX(2px);
        }
        .ls-opt:focus-visible{
          outline:none;
          box-shadow:0 0 0 2px rgba(106,112,128,.4);
        }
        .ls-opt.is-active{
          background:#1a1f2b;color:#ffffff;
          box-shadow:inset 0 0 0 1px rgba(255,255,255,.06),
                     0 8px 18px -12px rgba(20,30,50,.55);
        }
        .ls-opt.is-active:hover{
          background:#1a1f2b;transform:translateX(2px);
        }

        .ls-opt-glyph{
          display:inline-flex;align-items:center;justify-content:center;
          width:24px;height:24px;border-radius:50%;
          background:#ffffff;color:#3a414f;
          font-family:'Fraunces',serif;font-style:italic;font-weight:500;
          font-size:12px;line-height:1;
          flex-shrink:0;
          box-shadow:inset 0 0 0 1px rgba(20,30,50,.08),
                     inset 0 -1px 0 rgba(20,30,50,.05);
        }
        .ls-opt.is-active .ls-opt-glyph{
          background:rgba(255,255,255,.12);color:#ffffff;
          box-shadow:inset 0 0 0 1px rgba(255,255,255,.18);
        }

        .ls-opt-flag{
          width:26px;height:18px;display:block;
          object-fit:contain;flex-shrink:0;border-radius:3px;
          box-shadow:0 1px 0 rgba(20,30,50,.08);
        }
        .ls-opt-label{
          flex:1;
          font-family:'Fraunces',Georgia,serif;font-weight:400;font-size:15px;
          letter-spacing:-.005em;
        }
        .ls-opt.is-active .ls-opt-label{font-weight:500}
        .ls-check{
          font-family:'Fraunces',serif;font-size:13px;
          opacity:.7;color:#ffffff;line-height:1;
        }
        .ls-opt:not(.is-active) .ls-check{color:#6a7080;opacity:.65}

        @media (max-width:480px){
          .ls-pop{min-width:232px;right:-4px}
          .ls-root{right:20px}
        }
      `}</style>
    </div>
  );

  return createPortal(node, target);
}
