'use client';

import { useEffect, useMemo, useState } from 'react';
import { createPortal } from 'react-dom';
import { useRouter } from 'next/navigation';
import {
  LOCALES,
  LOCALE_LABELS,
  parseLocale,
  type Locale,
  type Region,
} from '@/lib/i18n/config';

type Props = {
  currentLocale: Locale;
  labels: { title: string; help: string };
};

const LOCALE_COOKIE = 'lumiose-locale';
const ONE_YEAR = 60 * 60 * 24 * 365;

const REGION_FLAG: Record<Region, string> = { us: 'US', mx: 'MX' };

// Twemoji = Twitter's cartoonish/illustrated flag emojis as SVGs via jsdelivr CDN.
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

  const { region } = useMemo(() => parseLocale(currentLocale), [currentLocale]);

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
    setCookie(LOCALE_COOKIE, next);
    router.push(`/${next}`);
    setOpen(false);
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
          src={FLAG_URL(REGION_FLAG[region])}
          alt=""
          width={46}
          height={32}
          loading="eager"
        />
      </button>
      {open && (
        <div className="ls-pop" role="menu">
          <div className="ls-pop-tab" aria-hidden />
          <div className="ls-group-label">{labels.title}</div>
          <div className="ls-group">
            {LOCALES.map((l) => {
              const { region: r } = parseLocale(l);
              const active = l === currentLocale;
              return (
                <button
                  key={l}
                  type="button"
                  role="menuitemradio"
                  aria-checked={active}
                  className={`ls-opt${active ? ' is-active' : ''}`}
                  onClick={() => go(l)}
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    className="ls-opt-flag"
                    src={FLAG_URL(REGION_FLAG[r])}
                    alt=""
                    width={34}
                    height={24}
                    loading="lazy"
                  />
                  <span className="ls-opt-label">{LOCALE_LABELS[l]}</span>
                  {active && <span className="ls-check" aria-hidden>✓</span>}
                </button>
              );
            })}
          </div>
          <div className="ls-help">{labels.help}</div>
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
          min-width:240px;padding:14px;
          background:#fdfbf5;
          border:1px solid rgba(14,16,20,.08);
          border-radius:22px;
          box-shadow:
            inset 0 1px 0 rgba(255,255,255,.95),
            0 1px 0 rgba(14,16,20,.05),
            0 22px 44px -20px rgba(20,30,50,.32),
            0 40px 70px -28px rgba(227,100,100,.26);
          display:flex;flex-direction:column;gap:6px;
          animation:ls-pop-in .28s cubic-bezier(.2,.8,.2,1);
          transform-origin:top right;
        }
        @keyframes ls-pop-in{
          from{opacity:0;transform:translateY(-6px) scale(.96)}
          to{opacity:1;transform:translateY(0) scale(1)}
        }
        .ls-pop-tab{
          position:absolute;top:-7px;right:22px;
          width:14px;height:14px;
          background:#fdfbf5;
          transform:rotate(45deg);
          box-shadow:-1px -1px 0 rgba(14,16,20,.08);
          border-top-left-radius:3px;
        }

        .ls-group-label{
          font-family:'JetBrains Mono',monospace;font-weight:500;
          font-size:10px;color:#6a7080;
          padding:2px 14px 6px;
          letter-spacing:.2em;text-transform:uppercase;
        }
        .ls-group{display:flex;flex-direction:column;gap:4px}

        .ls-opt{
          position:relative;
          display:flex;align-items:center;gap:11px;
          text-align:left;background:transparent;border:none;cursor:pointer;
          font-family:'Inter',sans-serif;font-size:13.5px;color:#3a414f;font-weight:500;
          padding:10px 14px;border-radius:999px;width:100%;letter-spacing:-0.005em;
          transition:
            background .28s cubic-bezier(.2,.7,.2,1.2),
            color .28s ease,
            box-shadow .28s ease;
        }
        .ls-opt:hover{
          color:#111318;
          background:rgba(20,30,50,.045);
        }
        .ls-opt:focus-visible{
          outline:none;
          box-shadow:0 0 0 2px rgba(106,112,128,.35);
        }
        .ls-opt.is-active{
          background:linear-gradient(180deg,#1f242f 0%,#0d0f14 100%);
          color:#fdfbf5;font-weight:600;
          box-shadow:
            inset 0 1px 0 rgba(255,255,255,.2),
            inset 0 -1px 0 rgba(0,0,0,.32),
            0 1.5px 0 #0a0c10,
            0 6px 14px -6px rgba(20,16,12,.4);
        }
        .ls-opt.is-active:hover{
          background:linear-gradient(180deg,#1f242f 0%,#0d0f14 100%);
          color:#fdfbf5;
        }

        .ls-opt-flag{
          width:34px;height:24px;display:block;
          object-fit:contain;flex-shrink:0;
        }
        .ls-opt-label{
          flex:1;
          font-family:'Inter',sans-serif;font-weight:500;font-size:13.5px;
          letter-spacing:-.005em;
        }
        .ls-opt.is-active .ls-opt-label{font-weight:600}
        .ls-check{
          font-family:'Fraunces',serif;font-size:13px;font-style:italic;
          line-height:1;color:#fdfbf5;
        }
        .ls-opt:not(.is-active) .ls-check{display:none}

        .ls-help{
          font-family:'Fraunces',serif;font-style:italic;font-weight:400;
          font-size:13px;letter-spacing:-0.005em;color:#6a7080;
          padding:8px 14px 2px;text-align:center;
        }

        @media (max-width:480px){
          .ls-pop{min-width:220px;right:-4px}
          .ls-root{right:20px}
        }
      `}</style>
    </div>
  );

  return createPortal(node, target);
}
