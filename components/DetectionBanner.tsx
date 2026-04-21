'use client';

import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import { type Locale } from '@/lib/i18n/config';

type Props = {
  currentLocale: Locale;
  wasDetected: boolean;
  labels: { change: string; dismiss: string; message: string };
};

const DETECTED_FLAG_COOKIE = 'lumiose-detected';

function clearCookie(name: string) {
  document.cookie = `${name}=; max-age=0; path=/; SameSite=Lax`;
}

export default function DetectionBanner({ wasDetected, labels }: Props) {
  const [mounted, setMounted] = useState(false);
  const [target, setTarget] = useState<HTMLElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setMounted(true);
    setTarget(document.getElementById('detection-banner-mount'));
    setVisible(wasDetected);
  }, [wasDetected]);

  if (!mounted || !target || !visible) return null;

  const onChange = () => {
    const switcher = document.querySelector<HTMLButtonElement>('.ls-btn');
    switcher?.click();
    switcher?.scrollIntoView({ block: 'center', behavior: 'smooth' });
  };

  const onDismiss = () => {
    clearCookie(DETECTED_FLAG_COOKIE);
    setVisible(false);
  };

  const node = (
    <div className="db-root" role="status">
      <span className="db-msg">{labels.message}</span>
      <button type="button" className="db-link" onClick={onChange}>
        {labels.change}
      </button>
      <button type="button" className="db-close" onClick={onDismiss} aria-label={labels.dismiss}>
        ✕
      </button>
      <style>{`
        .db-root{
          background:#f3efe1;color:#1a1f2b;
          display:flex;align-items:center;justify-content:center;gap:14px;
          padding:8px 18px;font-family:'Inter',sans-serif;font-size:13px;
          border-bottom:1px solid rgba(20,30,50,.06);
        }
        .db-msg{opacity:.82}
        .db-link{
          background:#111318;color:#fafafa;border:none;cursor:pointer;
          font-family:'Inter',sans-serif;font-size:12.5px;font-weight:500;
          padding:5px 12px;border-radius:999px;
        }
        .db-close{
          background:transparent;border:none;cursor:pointer;color:#1a1f2b;
          opacity:.5;font-size:14px;line-height:1;padding:4px 6px;
        }
        .db-close:hover{opacity:.9}
      `}</style>
    </div>
  );

  return createPortal(node, target);
}
