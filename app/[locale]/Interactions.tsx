'use client';

import { useEffect } from 'react';

type SiteCard = { thumb: string; title: string; body: string; tag: string };
type Site = {
  url: string;
  brand: string;
  nav: string[];
  hero: {
    eyebrow: string;
    h1: string;
    body: string;
    primary: string;
    secondary: string;
  };
  rowTitle: string;
  cards: SiteCard[];
};

const SITES: Site[] = [
  {
    url: 'barriocoastal.com',
    brand: 'Barrio Coastal',
    nav: ['Menu', 'Reserve', 'Order', 'About', 'Contact'],
    hero: {
      eyebrow: 'OCEAN BEACH · RESTAURANT',
      h1: 'Coastal <em>comfort</em>,<br/>made in Ocean Beach.',
      body:
        'A small beach-front kitchen serving seasonal Baja-Cal fare, craft cocktails, and ocean-view brunch. Walk-ins welcome, but a reservation never hurts.',
      primary: 'Reserve a table',
      secondary: 'View menu',
    },
    rowTitle: 'What the kitchen is <em>cooking</em> this week.',
    cards: [
      { thumb: '#f0c7c2', title: 'Morning Menu', body: 'Huevos rancheros, agua de jamaica, house churros.', tag: 'SERVED 8 TO 11am' },
      { thumb: '#e9a59f', title: 'Dinner Menu', body: 'Baja fish of the day, mole short-rib, bone-marrow tortillas.', tag: 'SERVED 5 TO 10pm' },
      { thumb: '#f6efde', title: 'Bar & Cocktails', body: 'Tepache spritz, mezcal negroni, low-ABV coolers.', tag: 'ALL DAY' },
    ],
  },
  {
    url: 'pacificironworks.fit',
    brand: 'Pacific Ironworks',
    nav: ['Classes', 'Memberships', 'Coaches', 'Schedule', 'Book'],
    hero: {
      eyebrow: 'NORTH PARK · STRENGTH GYM',
      h1: 'Get <em>stronger</em>.<br/>Train with us.',
      body:
        'Boutique strength-and-conditioning in the heart of North Park. Small classes, real coaches, 365 days a year.',
      primary: 'Start 7-day trial',
      secondary: 'See schedule',
    },
    rowTitle: 'Classes built for <em>real</em> progress.',
    cards: [
      { thumb: '#2b2f3b', title: 'Barbell 101', body: 'Squat, bench, deadlift. Four weeks, every fundamental.', tag: 'BEGINNER · 45 MIN' },
      { thumb: '#3a414f', title: 'Metcon', body: 'Engine-building conditioning. Work, rest, repeat.', tag: 'ALL LEVELS · 55 MIN' },
      { thumb: '#1a1f2b', title: 'Open Gym', body: 'Unstructured. Your plan, our platforms, our coaches.', tag: 'MEMBERS · 90 MIN' },
    ],
  },
  {
    url: 'lajollarealty.co',
    brand: 'La Jolla Realty Co.',
    nav: ['Listings', 'Agents', 'Journal', 'Sell', 'Contact'],
    hero: {
      eyebrow: 'LA JOLLA · REAL ESTATE',
      h1: 'Homes on <em>the coast</em>.<br/>A quieter way to buy.',
      body:
        'A boutique brokerage covering La Jolla, Del Mar, and the coastal neighborhoods of San Diego. No billboards. No bus benches. Just a very good address book.',
      primary: 'Browse listings',
      secondary: 'Meet our agents',
    },
    rowTitle: 'Recent <em>listings</em> on the coast.',
    cards: [
      { thumb: '#f3e29a', title: '1728 Coast Blvd', body: '3 bd · 3 ba · 2,400 sqft · ocean view', tag: '$3.45M · LA JOLLA' },
      { thumb: '#e9c565', title: '404 Marine St', body: '4 bd · 3 ba · 2,800 sqft · walk to beach', tag: '$2.95M · LA JOLLA' },
      { thumb: '#f6efde', title: '60 Camino Real', body: '5 bd · 5 ba · 4,100 sqft · private pool', tag: '$5.2M · DEL MAR' },
    ],
  },
  {
    url: 'sandovallaw.com',
    brand: 'Sandoval Law',
    nav: ['Practice', 'Attorneys', 'Resources', 'EN / ES', 'Contact'],
    hero: {
      eyebrow: 'CHULA VISTA · INMIGRACIÓN · EN / ES',
      h1: 'Immigration law,<br/>done with <em>care</em>.',
      body:
        'Sandoval Law is a bilingual immigration practice serving families in South Bay and greater San Diego. Primera consulta gratis. Hablamos español.',
      primary: 'Consulta gratis',
      secondary: 'Our practice areas',
    },
    rowTitle: 'Where we <em>help</em>.',
    cards: [
      { thumb: '#cfe3cf', title: 'Family petitions', body: 'Green cards, fiancé visas, adjustment of status.', tag: 'PRACTICE AREA' },
      { thumb: '#9cc69c', title: 'DACA & TPS', body: 'Renewals, appeals, and first-time applications.', tag: 'PRACTICE AREA' },
      { thumb: '#eef6ee', title: 'Citizenship', body: 'Naturalization interviews, test prep, appeals.', tag: 'PRACTICE AREA' },
    ],
  },
  {
    url: 'costamarcontractors.com',
    brand: 'Costa Mar Contractors',
    nav: ['Residential', 'Commercial', 'Projects', 'Team', 'Estimate'],
    hero: {
      eyebrow: 'ENCINITAS · LICENSED BUILDER',
      h1: 'Built <em>coastal</em>.<br/>Built to last.',
      body:
        'A family-run general contractor serving North County San Diego since 2004. Remodels, ADUs, custom homes, and commercial tenant improvements.',
      primary: 'Request an estimate',
      secondary: 'See past projects',
    },
    rowTitle: 'A few recent <em>builds</em>.',
    cards: [
      { thumb: '#c8d8ec', title: 'Leucadia ADU', body: '860 sqft detached unit · designed for rental.', tag: 'RESIDENTIAL · 2025' },
      { thumb: '#8ec4e8', title: 'Cardiff Remodel', body: 'Full-home reno for a growing family of five.', tag: 'RESIDENTIAL · 2025' },
      { thumb: '#eaf2fb', title: 'Downtown Studio', body: '3,400 sqft tenant improvement for a design firm.', tag: 'COMMERCIAL · 2024' },
    ],
  },
  {
    url: 'alvaradodental.com',
    brand: 'Alvarado Family Dental',
    nav: ['Services', 'Our team', 'New patients', 'EN / ES', 'Book'],
    hero: {
      eyebrow: 'CITY HEIGHTS · FAMILY DENTISTRY',
      h1: 'Gentle, <em>thoughtful</em><br/>family dentistry.',
      body:
        'Three generations of San Diego dentists in one modern clinic. We treat kids, adults, and everyone in between. Se habla español.',
      primary: 'Book a visit',
      secondary: 'Meet the doctors',
    },
    rowTitle: 'The <em>care</em> we provide.',
    cards: [
      { thumb: '#f6efde', title: 'Cleanings & Exams', body: 'Every six months. Insurance welcome, cash plans available.', tag: 'PREVENTIVE' },
      { thumb: '#e9dcba', title: 'Family dentistry', body: 'From the first tooth to the last. All ages, all needs.', tag: 'FAMILY' },
      { thumb: '#fbf3e7', title: 'Cosmetic & restorative', body: 'Whitening, veneers, crowns. Done in-house.', tag: 'COSMETIC' },
    ],
  },
];

function buildSite(s: Site, studioCity: string): string {
  return `
    <div class="fullsite">
      <div class="fs-chrome">
        <span class="dd" style="background:#ff6058"></span>
        <span class="dd" style="background:#ffbd2e"></span>
        <span class="dd" style="background:#29ca42"></span>
        <span class="fs-url">🔒 ${s.url}</span>
        <span style="width:48px"></span>
      </div>
      <div class="fs-nav">
        <div class="brand">${s.brand}</div>
        <ul>${s.nav.map((n) => `<li>${n}</li>`).join('')}</ul>
        <a class="btn-sm">${s.hero.primary} →</a>
      </div>
      <div class="fs-hero">
        <div style="font-family:'JetBrains Mono',monospace;font-size:11px;letter-spacing:.1em;color:#6a7080;margin-bottom:20px">✦ ${s.hero.eyebrow}</div>
        <h1>${s.hero.h1}</h1>
        <p>${s.hero.body}</p>
        <div class="hero-ctas">
          <a class="primary">${s.hero.primary} →</a>
          <a class="secondary">${s.hero.secondary}</a>
        </div>
      </div>
      <div class="fs-row">
        <h2>${s.rowTitle}</h2>
        <div class="fs-grid-3">
          ${s.cards
            .map(
              (c) => `
            <div class="fs-card">
              <div class="fs-thumb" style="background:${c.thumb}">${c.title}</div>
              <div>
                <h3>${c.title}</h3>
                <p>${c.body}</p>
                <div class="tag">${c.tag}</div>
              </div>
            </div>
          `
            )
            .join('')}
        </div>
      </div>
      <div class="fs-footer">
        <span>© 2026 ${s.brand}</span>
        <span>Built by Lumiose · ${studioCity}</span>
      </div>
    </div>
  `;
}

export default function Interactions({ studioCity }: { studioCity: string }) {
  useEffect(() => {
    const cleanups: Array<() => void> = [];

    // Force instant scroll behavior so our RAF easing isn't double-smoothed by the browser.
    const prevScrollBehavior = document.documentElement.style.scrollBehavior;
    document.documentElement.style.scrollBehavior = 'auto';
    cleanups.push(() => {
      document.documentElement.style.scrollBehavior = prevScrollBehavior;
    });

    // Smooth scroll for anchor links (single RAF-driven easing, no native smooth on top)
    let scrollRaf: number | null = null;
    document.querySelectorAll<HTMLAnchorElement>('a[href^="#"]').forEach((a) => {
      const handler = (e: Event) => {
        const href = a.getAttribute('href');
        if (!href || href.length < 2) return;
        const target = document.querySelector(href);
        if (!target) return;
        e.preventDefault();

        // Close mobile burger menu on nav click.
        const details = a.closest<HTMLDetailsElement>('details.nav-mobile');
        if (details) details.open = false;

        if (scrollRaf !== null) cancelAnimationFrame(scrollRaf);

        const startY = window.scrollY;
        const endY = (target as HTMLElement).getBoundingClientRect().top + window.scrollY - 12;
        const distance = endY - startY;
        if (distance === 0) return;
        const duration = Math.min(1100, Math.max(600, Math.abs(distance) * 0.45));
        const startT = performance.now();
        const ease = (t: number) => (t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2);
        const step = (now: number) => {
          const t = Math.min(1, (now - startT) / duration);
          window.scrollTo(0, startY + distance * ease(t));
          if (t < 1) {
            scrollRaf = requestAnimationFrame(step);
          } else {
            scrollRaf = null;
          }
        };
        scrollRaf = requestAnimationFrame(step);
      };
      a.addEventListener('click', handler);
      cleanups.push(() => a.removeEventListener('click', handler));
    });
    cleanups.push(() => {
      if (scrollRaf !== null) cancelAnimationFrame(scrollRaf);
    });

    // Services accordion
    document.querySelectorAll<HTMLElement>('#svc-index .svc-row').forEach((row) => {
      const handler = (e: Event) => {
        if ((e.target as HTMLElement).closest('a')) return;
        const wasOpen = row.classList.contains('open');
        document
          .querySelectorAll<HTMLElement>('#svc-index .svc-row.open')
          .forEach((r) => r.classList.remove('open'));
        if (!wasOpen) row.classList.add('open');
      };
      row.addEventListener('click', handler);
      cleanups.push(() => row.removeEventListener('click', handler));
    });

    // Hover preview + click-to-immersive transition
    const preview = document.getElementById('preview');
    const backdrop = document.getElementById('immersive-backdrop');
    const immersive = document.getElementById('immersive');
    const closeBtn = document.getElementById('immersive-close');
    const cases = document.querySelectorAll<HTMLElement>('#cases .case');

    if (preview && cases.length && immersive && backdrop && closeBtn) {
      const slides = preview.querySelectorAll<HTMLElement>('.pslide');

      let targetX = 0;
      let targetY = 0;
      let curX = 0;
      let curY = 0;
      let raf: number | null = null;

      function animate() {
        curX += (targetX - curX) * 0.18;
        curY += (targetY - curY) * 0.18;
        preview!.style.left = curX + 'px';
        preview!.style.top = curY + 'px';
        if (Math.abs(targetX - curX) > 0.5 || Math.abs(targetY - curY) > 0.5) {
          raf = requestAnimationFrame(animate);
        } else {
          raf = null;
        }
      }

      let isOpen = false;
      let lastCase: HTMLElement | null = null;

      function openImmersive(idx: number) {
        if (isOpen) return;
        isOpen = true;
        const site = SITES[idx];

        const rect = preview!.getBoundingClientRect();
        const slide = slides[idx];
        const bg = slide ? slide.style.background || slide.style.backgroundImage || '' : '';

        preview!.classList.remove('on');

        immersive!.setAttribute('data-site', String(idx));
        immersive!.style.background = bg || '#f7f4ec';
        immersive!.style.transition = 'none';
        immersive!.style.left = rect.left + 'px';
        immersive!.style.top = rect.top + 'px';
        immersive!.style.width = rect.width + 'px';
        immersive!.style.height = rect.height + 'px';
        immersive!.style.borderRadius = '10px';
        immersive!.innerHTML = '';
        immersive!.classList.add('active');
        immersive!.setAttribute('aria-hidden', 'false');

        void immersive!.offsetWidth;

        backdrop!.classList.add('on');
        immersive!.style.transition = '';
        requestAnimationFrame(() => {
          immersive!.style.left = '0px';
          immersive!.style.top = '0px';
          immersive!.style.width = window.innerWidth + 'px';
          immersive!.style.height = window.innerHeight + 'px';
          immersive!.style.borderRadius = '0px';

          setTimeout(() => {
            immersive!.innerHTML = buildSite(site, studioCity);
            immersive!.classList.add('reveal');
            closeBtn!.classList.add('on');
            document.body.style.overflow = 'hidden';
          }, 420);
        });
      }

      function closeImmersive() {
        if (!isOpen) return;
        isOpen = false;

        immersive!.classList.remove('reveal');
        closeBtn!.classList.remove('on');
        document.body.style.overflow = '';

        const shrinkW = 340;
        const shrinkH = 230;
        let tx: number;
        let ty: number;
        if (lastCase) {
          const r = lastCase.getBoundingClientRect();
          tx = r.left + r.width / 2 - shrinkW / 2;
          ty = r.top + r.height / 2 - shrinkH / 2;
        } else {
          tx = (window.innerWidth - shrinkW) / 2;
          ty = (window.innerHeight - shrinkH) / 2 - 40;
        }

        immersive!.style.left = tx + 'px';
        immersive!.style.top = ty + 'px';
        immersive!.style.width = shrinkW + 'px';
        immersive!.style.height = shrinkH + 'px';
        immersive!.style.borderRadius = '10px';
        immersive!.style.opacity = '0';

        backdrop!.classList.remove('on');

        setTimeout(() => {
          immersive!.classList.remove('active');
          immersive!.setAttribute('aria-hidden', 'true');
          immersive!.innerHTML = '';
          immersive!.style.opacity = '';
          immersive!.style.left = '-9999px';
          immersive!.style.top = '-9999px';
          immersive!.style.width = '0px';
          immersive!.style.height = '0px';
        }, 520);
      }

      cases.forEach((c) => {
        const onEnter = () => {
          const idx = parseInt(c.dataset.preview || '0', 10);
          slides.forEach((s, i) => s.classList.toggle('on', i === idx));
          preview!.classList.add('on');
        };
        const onLeave = () => {
          if (!isOpen) preview!.classList.remove('on');
        };
        const onMove = (e: MouseEvent) => {
          targetX = e.clientX + 180;
          targetY = e.clientY;
          if (!raf) {
            curX = targetX;
            curY = targetY;
            preview!.style.left = curX + 'px';
            preview!.style.top = curY + 'px';
            raf = requestAnimationFrame(animate);
          }
        };
        const onClick = (e: Event) => {
          e.preventDefault();
          lastCase = c;
          const idx = parseInt(c.dataset.preview || '0', 10);
          openImmersive(idx);
        };

        c.addEventListener('mouseenter', onEnter);
        c.addEventListener('mouseleave', onLeave);
        c.addEventListener('mousemove', onMove);
        c.addEventListener('click', onClick);

        cleanups.push(() => {
          c.removeEventListener('mouseenter', onEnter);
          c.removeEventListener('mouseleave', onLeave);
          c.removeEventListener('mousemove', onMove);
          c.removeEventListener('click', onClick);
        });
      });

      const onCloseClick = () => closeImmersive();
      const onBackdropClick = () => closeImmersive();
      const onKey = (e: KeyboardEvent) => {
        if (e.key === 'Escape' && isOpen) closeImmersive();
      };
      closeBtn.addEventListener('click', onCloseClick);
      backdrop.addEventListener('click', onBackdropClick);
      document.addEventListener('keydown', onKey);
      cleanups.push(() => closeBtn.removeEventListener('click', onCloseClick));
      cleanups.push(() => backdrop.removeEventListener('click', onBackdropClick));
      cleanups.push(() => document.removeEventListener('keydown', onKey));
    }

    // Count-up animation for [data-count-to] — triggers once on first viewport entry
    const statsBlock = document.querySelector<HTMLElement>('.work-stats');
    if (statsBlock) {
      const easeOutCubic = (t: number) => 1 - Math.pow(1 - t, 3);
      const runCounters = (root: HTMLElement) => {
        const els = root.querySelectorAll<HTMLElement>('[data-count-to]');
        els.forEach((el) => {
          const target = parseFloat(el.dataset.countTo || '0');
          const decimals = parseInt(el.dataset.countDecimals || '0', 10);
          const prefix = el.dataset.countPrefix || '';
          const start = performance.now();
          const duration = 1500;
          const step = (now: number) => {
            const t = Math.min(1, (now - start) / duration);
            const v = target * easeOutCubic(t);
            el.textContent = prefix + v.toFixed(decimals);
            if (t < 1) requestAnimationFrame(step);
          };
          requestAnimationFrame(step);
        });
      };
      const io = new IntersectionObserver(
        (entries, observer) => {
          for (const entry of entries) {
            if (!entry.isIntersecting) continue;
            observer.unobserve(entry.target);
            runCounters(entry.target as HTMLElement);
          }
        },
        { threshold: 0.35 }
      );
      io.observe(statsBlock);
      cleanups.push(() => io.disconnect());
    }

    return () => {
      cleanups.forEach((fn) => fn());
    };
  }, []);

  return null;
}
