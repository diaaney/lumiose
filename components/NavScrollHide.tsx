'use client';

import { useEffect } from 'react';

export default function NavScrollHide() {
  useEffect(() => {
    const SHOW_THRESHOLD = 80;
    const DELTA = 6;
    let lastY = window.scrollY;
    let ticking = false;

    function update() {
      const y = window.scrollY;
      const diff = y - lastY;

      if (y < SHOW_THRESHOLD) {
        document.body.classList.remove('nav-hidden');
      } else if (diff > DELTA) {
        document.body.classList.add('nav-hidden');
      } else if (diff < -DELTA) {
        document.body.classList.remove('nav-hidden');
      }

      lastY = y;
      ticking = false;
    }

    function onScroll() {
      if (!ticking) {
        requestAnimationFrame(update);
        ticking = true;
      }
    }

    window.addEventListener('scroll', onScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', onScroll);
      document.body.classList.remove('nav-hidden');
    };
  }, []);

  return null;
}
