// Derived from "Lumiose v2 (1).html". Price tokens like {{PRICE_CORNER_SHOP}}
// are substituted at render time by lib/pricing/prices.ts. Mount points
// #detection-banner-mount and #locale-switcher-mount are hydrated by
// client components (DetectionBanner, LocaleSwitcher).
export const BODY_HTML = `<div id="detection-banner-mount"></div>

<!-- Top banner -->
<div class="banner">
  <a href="#contact">
    <span class="serif" style="font-style:italic">Spring launch offer · 20% off your first site — available for May bookings</span>
    <span class="arrow">→</span>
  </a>
</div>

<!-- ===================== HERO ===================== -->
<header class="hero">
  <!-- Clouds -->
  <div class="cloud" style="top:80px;left:6%;width:130px;opacity:.9">
    <svg viewBox="0 0 130 60"><ellipse cx="40" cy="38" rx="36" ry="18" fill="#fff"/><ellipse cx="74" cy="30" rx="40" ry="22" fill="#fff"/><ellipse cx="104" cy="40" rx="22" ry="14" fill="#fff"/></svg>
  </div>
  <div class="cloud" style="top:130px;right:8%;width:160px;opacity:.95">
    <svg viewBox="0 0 160 70"><ellipse cx="46" cy="44" rx="44" ry="20" fill="#fff"/><ellipse cx="92" cy="32" rx="50" ry="26" fill="#fff"/><ellipse cx="130" cy="46" rx="26" ry="16" fill="#fff"/></svg>
  </div>
  <div class="cloud" style="top:40px;left:44%;width:90px;opacity:.85">
    <svg viewBox="0 0 100 40"><ellipse cx="30" cy="26" rx="26" ry="12" fill="#fff"/><ellipse cx="60" cy="20" rx="30" ry="14" fill="#fff"/><ellipse cx="82" cy="28" rx="16" ry="10" fill="#fff"/></svg>
  </div>
  <div class="cloud" style="top:260px;left:3%;width:90px;opacity:.7">
    <svg viewBox="0 0 100 40"><ellipse cx="30" cy="26" rx="26" ry="12" fill="#fff"/><ellipse cx="60" cy="20" rx="30" ry="14" fill="#fff"/><ellipse cx="82" cy="28" rx="16" ry="10" fill="#fff"/></svg>
  </div>

  <!-- Navigation -->
  <nav class="top">
    <div id="locale-switcher-mount"></div>
    <div class="navbar">
      <div class="logo"><span class="mark"></span> Lumiose</div>
      <ul>
        <li><a href="#services">Services</a></li>
        <li><a href="#work">Work</a></li>
        <li><a href="#pricing">Pricing</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
      <div class="nav-cta">
        <a class="btn" href="#contact">Book a call</a>
      </div>
    </div>
  </nav>

  <!-- Headline -->
  <div class="hero-inner">
    <span class="eyebrow"><span class="dot"></span> Now booking · Mayo 2026 · San Diego, CA</span>
    <h1 class="display">Websites that make <em>San Diego</em><br/>small businesses <em>shine</em>.</h1>
    <p class="sub">A web development studio for the restaurants, contractors, realtors and clinics that keep this city running. Custom-built, fast as the Pacific, made in English &amp; Spanish.</p>
    <div class="hero-ctas">
      <a class="btn pill-lg" href="#contact">Get a free quote</a>
      <a class="btn pill-lg ghost" href="#work">See our work →</a>
    </div>
  </div>

  <!-- Torn paper shapes (SVG) -->
  <svg class="paper blue" viewBox="0 0 400 260" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <path d="M10,60 C20,40 60,30 90,40 C130,20 180,50 220,30 C270,10 320,40 370,30 L385,230 C340,250 290,230 240,245 C200,255 160,240 110,250 C70,258 30,245 15,230 Z" fill="#c8d8ec"/>
    <path d="M20,65 C35,50 65,42 92,52" stroke="#a8bdd6" stroke-width="1" fill="none" opacity=".5"/>
  </svg>

  <svg class="paper yellow" viewBox="0 0 520 300" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <defs>
      <pattern id="lines" width="100%" height="28" patternUnits="userSpaceOnUse">
        <line x1="0" y1="14" x2="520" y2="14" stroke="#d6b94a" stroke-width="1" opacity=".45"/>
      </pattern>
    </defs>
    <path d="M20,20 C40,6 90,14 130,8 C180,0 230,22 280,12 C330,2 390,28 440,18 C470,12 500,22 510,34 L505,280 C470,290 420,278 370,286 C310,296 260,278 210,284 C160,290 100,276 50,282 C30,284 15,270 15,258 Z" fill="#f3e29a"/>
    <rect x="25" y="35" width="470" height="240" fill="url(#lines)" opacity=".6"/>
    <line x1="75" y1="20" x2="78" y2="280" stroke="#e36464" stroke-width="1.5" opacity=".5"/>
  </svg>

  <svg class="paper dark" viewBox="0 0 180 120" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <path d="M8,30 C20,10 50,22 80,14 C110,6 150,20 172,30 L168,100 C140,115 100,100 70,108 C40,116 15,104 10,92 Z" fill="#1a1f2b"/>
  </svg>

  <svg class="paper pink" viewBox="0 0 120 90" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <path d="M10,24 C20,8 50,18 70,12 C90,6 110,20 114,30 L108,74 C90,84 60,74 40,80 C20,86 8,74 8,64 Z" fill="#f0c7c2"/>
  </svg>

  <!-- Code editor + live preview mockup -->
  <div class="sd-art" role="img" aria-label="Lumiose code editor with live preview of a client site">
    <div class="ide-bar">
      <div class="ide-dots"><span class="r"></span><span class="y"></span><span class="g"></span></div>
      <div class="ide-tabs">
        <span class="ide-tab active"><span class="ide-dot-mod"></span>index.html</span>
        <span class="ide-tab">styles.css</span>
        <span class="ide-tab">menu.ts</span>
      </div>
      <div class="ide-url"><span class="ide-lock"></span>barriocoastal.com · localhost:3000</div>
    </div>

    <div class="ide-body">
      <aside class="ide-side">
        <h6>Project</h6>
        <div class="ide-file"><span class="ide-ficon folder"></span>barrio-coastal</div>
        <div class="ide-file" style="padding-left:22px"><span class="ide-ficon folder"></span>components</div>
        <div class="ide-file" style="padding-left:22px"><span class="ide-ficon folder"></span>styles</div>
        <div class="ide-file active" style="padding-left:22px"><span class="ide-ficon html"></span>index.html</div>
        <div class="ide-file" style="padding-left:22px"><span class="ide-ficon css"></span>globals.css</div>
        <div class="ide-file" style="padding-left:22px"><span class="ide-ficon js"></span>menu.ts</div>
        <h6>Deployments</h6>
        <div class="ide-file" style="color:#c5ccd9"><span class="ide-ficon" style="background:#2db073"></span>prod · live</div>
        <div class="ide-file"><span class="ide-ficon" style="background:#f3e29a"></span>preview #42</div>
      </aside>

      <div class="ide-code">
        <div class="ide-row"><span class="ide-ln">1</span><span class="ide-tx"><span class="com">&lt;!-- Lumiose · Barrio Coastal Café --&gt;</span></span></div>
        <div class="ide-row"><span class="ide-ln">2</span><span class="ide-tx"><span class="tag">&lt;section</span> <span class="attr">class</span>=<span class="str">"hero"</span><span class="tag">&gt;</span></span></div>
        <div class="ide-row"><span class="ide-ln">3</span><span class="ide-tx">  <span class="tag">&lt;span</span> <span class="attr">class</span>=<span class="str">"eyebrow"</span><span class="tag">&gt;</span><span class="txt">Ocean Beach · est. 2019</span><span class="tag">&lt;/span&gt;</span></span></div>
        <div class="ide-row"><span class="ide-ln">4</span><span class="ide-tx">  <span class="tag">&lt;h1&gt;</span><span class="txt">Coastal Mexican,</span></span></div>
        <div class="ide-row"><span class="ide-ln">5</span><span class="ide-tx">    <span class="tag">&lt;em&gt;</span><span class="txt">cooked slow.</span><span class="tag">&lt;/em&gt;&lt;/h1&gt;</span></span></div>
        <div class="ide-row"><span class="ide-ln">6</span><span class="ide-tx">  <span class="tag">&lt;p&gt;</span><span class="txt">Family recipes, Pacific fish,</span></span></div>
        <div class="ide-row"><span class="ide-ln">7</span><span class="ide-tx">    <span class="txt">a long patio sunset.</span><span class="tag">&lt;/p&gt;</span></span></div>
        <div class="ide-row"><span class="ide-ln">8</span><span class="ide-tx">  <span class="tag">&lt;a</span> <span class="attr">href</span>=<span class="str">"/reserve"</span> <span class="attr">class</span>=<span class="str">"btn"</span><span class="tag">&gt;</span></span></div>
        <div class="ide-row"><span class="ide-ln">9</span><span class="ide-tx">    <span class="txt">Reserve a table →</span><span class="tag">&lt;/a&gt;</span><span class="cursor-blink"></span></span></div>
        <div class="ide-row"><span class="ide-ln">10</span><span class="ide-tx">  <span class="tag">&lt;Menu</span> <span class="attr">today</span>=<span class="kw">{seasonal}</span> <span class="tag">/&gt;</span></span></div>
        <div class="ide-row"><span class="ide-ln">11</span><span class="ide-tx"><span class="tag">&lt;/section&gt;</span></span></div>
        <div class="ide-row"><span class="ide-ln">12</span><span class="ide-tx"></span></div>
        <div class="ide-row"><span class="ide-ln">13</span><span class="ide-tx"><span class="com">// 98 PageSpeed · 0.8s FCP · a11y AA</span></span></div>
      </div>

      <div class="ide-preview">
        <div class="prev-label"><span class="live"></span>LIVE PREVIEW</div>
        <div class="prev-site">
          <div class="prev-nav">
            <span>Barrio Coastal</span>
            <span class="prev-links"><span>Menu</span><span>Reserve</span><span>Order</span></span>
          </div>
          <div class="prev-hero">
            <span class="prev-eyebrow">✦ Ocean Beach · est. 2019</span>
            <div class="prev-h1">Coastal Mexican, <em>cooked slow.</em></div>
            <div class="prev-sub">Family recipes, Pacific fish, a long patio sunset. Abierto de 11 a 10 todos los días.</div>
            <div class="prev-ctas">
              <span class="prev-btn">Reserve a table →</span>
              <span class="prev-btn ghost">See menu</span>
            </div>
          </div>
          <div class="prev-metrics">
            <div class="pm"><span class="v">98</span><span class="l">PageSpeed</span></div>
            <div class="pm"><span class="v">0.8<span style="font-size:.55em">s</span></span><span class="l">First paint</span></div>
            <div class="pm"><span class="v">AA</span><span class="l">A11y score</span></div>
            <div class="pm"><span class="v">+34<span style="font-size:.55em">%</span></span><span class="l">Bookings</span></div>
          </div>
        </div>
      </div>
    </div>

    <div class="ide-status">
      <div class="ide-st-l">
        <span><span class="ide-st-dot"></span> main</span>
        <span>⎇ 0 conflicts</span>
        <span>● saved</span>
      </div>
      <div class="ide-st-r">
        <span>Next.js 15.1</span>
        <span>Ln 9, Col 42</span>
        <span>UTF-8</span>
        <span style="color:#2db073">✓ deployed · 2m ago</span>
      </div>
    </div>
  </div>
</header>

<!-- ===================== MARQUEE ===================== -->
<div class="marquee">
  <div class="marquee-track">
    <span>Restaurants <span class="star">✦</span></span>
    <span>Contractors <span class="star">✦</span></span>
    <span>Real estate <span class="star">✦</span></span>
    <span>Clinics &amp; law <span class="star">✦</span></span>
    <span>Retail &amp; Shopify <span class="star">✦</span></span>
    <span>Gyms &amp; studios <span class="star">✦</span></span>
    <span>Local PyMEs <span class="star">✦</span></span>
    <span>Startups <span class="star">✦</span></span>
    <!-- duplicate for seamless loop -->
    <span>Restaurants <span class="star">✦</span></span>
    <span>Contractors <span class="star">✦</span></span>
    <span>Real estate <span class="star">✦</span></span>
    <span>Clinics &amp; law <span class="star">✦</span></span>
    <span>Retail &amp; Shopify <span class="star">✦</span></span>
    <span>Gyms &amp; studios <span class="star">✦</span></span>
    <span>Local PyMEs <span class="star">✦</span></span>
    <span>Startups <span class="star">✦</span></span>
  </div>
</div>

<!-- ===================== PORTFOLIO (hover list) ===================== -->
<section class="portfolio" id="work">
  <div style="max-width:1240px;margin:0 auto">
    <div class="portfolio-head">
      <div>
        <span class="kicker">02 · Recent work · Trabajo reciente</span>
        <h2 class="section-title">A few <em>neighbors</em> we've<br/>built for lately.</h2>
      </div>
      <p>Hover over a project to see a preview. Every site below was hand-designed &amp; built in San Diego, for San Diego — no page builders, no shared templates.</p>
    </div>

    <div class="cases" id="cases">
      <a href="#" class="case" data-preview="0">
        <span class="num">→ 01</span>
        <span class="name">Barrio Coastal Café <em>↗</em></span>
        <span class="desc">Rediseño + online ordering &amp; reservations para restaurante de Ocean Beach.</span>
        <span class="tags"><span class="case-tag">Restaurant</span><span class="case-tag">Ordering</span><span class="case-tag">Next.js</span></span>
        <span class="yr">2026</span>
      </a>
      <a href="#" class="case" data-preview="1">
        <span class="num">→ 02</span>
        <span class="name">Pacific Ironworks <em>↗</em></span>
        <span class="desc">Membership site &amp; class booking para gym boutique en North Park.</span>
        <span class="tags"><span class="case-tag">Fitness</span><span class="case-tag">Booking</span><span class="case-tag">Stripe</span></span>
        <span class="yr">2026</span>
      </a>
      <a href="#" class="case" data-preview="2">
        <span class="num">→ 03</span>
        <span class="name">La Jolla Realty Co. <em>↗</em></span>
        <span class="desc">Listings CMS + lead capture para inmobiliaria de La Jolla.</span>
        <span class="tags"><span class="case-tag">Real estate</span><span class="case-tag">CMS</span><span class="case-tag">CRM</span></span>
        <span class="yr">2026</span>
      </a>
      <a href="#" class="case" data-preview="3">
        <span class="num">→ 04</span>
        <span class="name">Sandoval Law <em>↗</em></span>
        <span class="desc">Bilingual (EN/ES) practice site para despacho de inmigración en Chula Vista.</span>
        <span class="tags"><span class="case-tag">Legal</span><span class="case-tag">EN/ES</span><span class="case-tag">SEO</span></span>
        <span class="yr">2025</span>
      </a>
      <a href="#" class="case" data-preview="4">
        <span class="num">→ 05</span>
        <span class="name">Costa Mar Contractors <em>↗</em></span>
        <span class="desc">Sitio + generación de leads para constructora residencial y comercial.</span>
        <span class="tags"><span class="case-tag">Construction</span><span class="case-tag">Leads</span></span>
        <span class="yr">2025</span>
      </a>
      <a href="#" class="case" data-preview="5">
        <span class="num">→ 06</span>
        <span class="name">Alvarado Family Dental <em>↗</em></span>
        <span class="desc">Clinic site + online booking para consultorio dental bilingüe.</span>
        <span class="tags"><span class="case-tag">Healthcare</span><span class="case-tag">Booking</span></span>
        <span class="yr">2025</span>
      </a>
    </div>

    <div class="cases-footer">
      <span>— 6 of 40+ local projects</span>
      <a href="#contact">See the full archive ↗</a>
    </div>
  </div>

  <!-- Floating preview (fixed, cursor-follow) -->
  <div class="preview" id="preview">
    <div class="pslide on" style="background:linear-gradient(180deg,#f0c7c2 0%,#e9a59f 100%)">
      <div class="pchrome"><span class="pd"></span><span class="pd"></span><span class="pd"></span><span style="margin-left:auto">barriocoastal.com</span></div>
      <div class="pcontent" style="color:#5a1b17">
        <div><div class="plabel">MENU · ORDER · RESERVE</div><div class="ptitle">Barrio <em>Coastal</em></div></div>
        <span class="pcta">Reserve →</span>
      </div>
    </div>
    <div class="pslide" style="background:linear-gradient(180deg,#111318 0%,#1a1f2b 100%)">
      <div class="pchrome" style="background:rgba(255,255,255,.12);color:#fff"><span class="pd" style="background:#3a414f"></span><span class="pd" style="background:#3a414f"></span><span class="pd" style="background:#3a414f"></span><span style="margin-left:auto">pacificironworks.fit</span></div>
      <div class="pcontent" style="color:#fff">
        <div><div class="plabel">MEMBERSHIPS · CLASSES</div><div class="ptitle">Pacific <em>Ironworks</em></div></div>
        <span class="pcta" style="background:#fff;color:#111318">7-day trial</span>
      </div>
    </div>
    <div class="pslide" style="background:linear-gradient(180deg,#f3e29a 0%,#e9c565 100%)">
      <div class="pchrome"><span class="pd"></span><span class="pd"></span><span class="pd"></span><span style="margin-left:auto">lajollarealty.co</span></div>
      <div class="pcontent">
        <div><div class="plabel">LISTINGS · AGENTS</div><div class="ptitle">La Jolla <em>Realty</em></div></div>
        <span class="pcta">See homes →</span>
      </div>
    </div>
    <div class="pslide" style="background:linear-gradient(180deg,#cfe3cf 0%,#9cc69c 100%)">
      <div class="pchrome"><span class="pd"></span><span class="pd"></span><span class="pd"></span><span style="margin-left:auto">sandovallaw.com</span></div>
      <div class="pcontent" style="color:#1e3a1e">
        <div><div class="plabel">EN / ES · IMMIGRATION</div><div class="ptitle">Sandoval <em>Law</em></div></div>
        <span class="pcta">Consulta gratis →</span>
      </div>
    </div>
    <div class="pslide" style="background:linear-gradient(180deg,#c8d8ec 0%,#8ec4e8 100%)">
      <div class="pchrome"><span class="pd"></span><span class="pd"></span><span class="pd"></span><span style="margin-left:auto">costamarcontractors.com</span></div>
      <div class="pcontent" style="color:#0c2a47">
        <div><div class="plabel">RESIDENTIAL · COMMERCIAL</div><div class="ptitle">Costa Mar <em>Contractors</em></div></div>
        <span class="pcta">Estimate →</span>
      </div>
    </div>
    <div class="pslide" style="background:linear-gradient(180deg,#f6efde 0%,#e9dcba 100%)">
      <div class="pchrome"><span class="pd"></span><span class="pd"></span><span class="pd"></span><span style="margin-left:auto">alvaradodental.com</span></div>
      <div class="pcontent">
        <div><div class="plabel">FAMILY DENTISTRY · EN/ES</div><div class="ptitle">Alvarado <em>Family</em></div></div>
        <span class="pcta">Book →</span>
      </div>
    </div>
  </div>
</section>

<!-- ===================== IMMERSIVE OVERLAY ===================== -->
<div class="immersive-backdrop" id="immersive-backdrop"></div>
<div class="immersive" id="immersive" aria-hidden="true">
  <!-- Content is injected by JS based on selected site -->
</div>
<button class="immersive-close" id="immersive-close" aria-label="Close preview">✕</button>

<!-- ===================== SERVICES (editorial index) ===================== -->
<section class="services-section" id="services">
  <div class="services-head">
    <div>
      <span class="kicker">03 · What we do · Lo que hacemos</span>
      <h2 class="section-title">Eight services,<br/>one <em>thoughtful</em> studio.</h2>
    </div>
    <p>We're a small San Diego team — designers and developers — building websites and marketing systems that pull their weight for local businesses. Click any row to expand.</p>
  </div>

  <div class="svc-index" id="svc-index">
    <div class="svc-row open" data-idx="0">
      <div class="svc-num">i.</div>
      <div class="svc-title">Web <em>development</em> <span class="svc-sub">Custom-coded on Next.js, Astro, or WordPress.</span></div>
      <div class="svc-toggle" aria-label="Toggle"></div>
      <div class="svc-expand">
        <div class="svc-expand-inner">
          <div>
            <p>Hand-coded sites on modern stacks. Fast, accessible, easy for you to update — and ownership stays with you, always. This is our flagship offering and where most of our projects land.</p>
            <div class="svc-tags"><span>Next.js</span><span>Astro</span><span>Headless CMS</span><span>A11y AA</span><span>Core Web Vitals</span></div>
          </div>
          <div class="svc-visual svc-v1">
            <span class="label">&lt;/&gt; index.tsx</span>
            <span>Custom <em>builds</em></span>
          </div>
        </div>
      </div>
    </div>

    <div class="svc-row" data-idx="1">
      <div class="svc-num">ii.</div>
      <div class="svc-title">Web <em>design</em> <span class="svc-sub">Brand-driven UI, wireframes, design systems.</span></div>
      <div class="svc-toggle"></div>
      <div class="svc-expand">
        <div class="svc-expand-inner">
          <div>
            <p>Brand-driven site design that actually reflects your business. Wireframes, high-fi mocks, and a design system you'll use long after we ship.</p>
            <div class="svc-tags"><span>UX</span><span>UI</span><span>Figma</span><span>Prototyping</span><span>Design Systems</span></div>
          </div>
          <div class="svc-visual svc-v2">
            <span class="label">◐ figma/mock</span>
            <span>Art <em>direction</em></span>
          </div>
        </div>
      </div>
    </div>

    <div class="svc-row" data-idx="2">
      <div class="svc-num">iii.</div>
      <div class="svc-title">Shopify &amp; <em>e-commerce</em> <span class="svc-sub">From first SKU to checkout — and beyond.</span></div>
      <div class="svc-toggle"></div>
      <div class="svc-expand">
        <div class="svc-expand-inner">
          <div>
            <p>Custom Shopify themes, subscriptions, and merchandising that moves product off the shelf. Headless when it makes sense.</p>
            <div class="svc-tags"><span>Shopify 2.0</span><span>Stripe</span><span>Klaviyo</span><span>Headless</span></div>
          </div>
          <div class="svc-visual svc-v3">
            <span class="label">◎ checkout.v2</span>
            <span>Stores that <em>sell</em></span>
          </div>
        </div>
      </div>
    </div>

    <div class="svc-row" data-idx="3">
      <div class="svc-num">iv.</div>
      <div class="svc-title">Local <em>SEO</em> <span class="svc-sub">Show up when your neighbors search.</span></div>
      <div class="svc-toggle"></div>
      <div class="svc-expand">
        <div class="svc-expand-inner">
          <div>
            <p>Schema, Google Business Profile, local citations, and the technical plumbing to rank for "best [thing] in San Diego." Monthly reporting, no jargon.</p>
            <div class="svc-tags"><span>Google Business</span><span>Schema.org</span><span>Citations</span><span>Content</span></div>
          </div>
          <div class="svc-visual svc-v4">
            <span class="label">◈ rank / sd</span>
            <span>Found <em>locally</em></span>
          </div>
        </div>
      </div>
    </div>

    <div class="svc-row" data-idx="4">
      <div class="svc-num">v.</div>
      <div class="svc-title">Landing <em>pages</em> <span class="svc-sub">5-day turnaround for campaigns and launches.</span></div>
      <div class="svc-toggle"></div>
      <div class="svc-expand">
        <div class="svc-expand-inner">
          <div>
            <p>One-page campaign sites for launches, ads, or seasonal promos. Designed, built, and live in a week. Optional A/B testing setup.</p>
            <div class="svc-tags"><span>Framer</span><span>A/B testing</span><span>Analytics</span></div>
          </div>
          <div class="svc-visual svc-v5">
            <span class="label">▸ campaign.fast</span>
            <span>Ship in a <em>week</em></span>
          </div>
        </div>
      </div>
    </div>

    <div class="svc-row" data-idx="5">
      <div class="svc-num">vi.</div>
      <div class="svc-title"><em>Branding</em> &amp; logo <span class="svc-sub">Wordmarks, palettes, guidelines.</span></div>
      <div class="svc-toggle"></div>
      <div class="svc-expand">
        <div class="svc-expand-inner">
          <div>
            <p>Identity work that outlives trends. Small, focused packages for small, focused teams — logo, palette, type, and a brand book you can actually hand off.</p>
            <div class="svc-tags"><span>Identity</span><span>Wordmarks</span><span>Guidelines</span></div>
          </div>
          <div class="svc-visual svc-v6">
            <span class="label">✦ brand.book</span>
            <span>Marks that <em>last</em></span>
          </div>
        </div>
      </div>
    </div>

    <div class="svc-row" data-idx="6">
      <div class="svc-num">vii.</div>
      <div class="svc-title"><em>Maintenance</em> &amp; care <span class="svc-sub">Updates, backups, the 11pm phone calls.</span></div>
      <div class="svc-toggle"></div>
      <div class="svc-expand">
        <div class="svc-expand-inner">
          <div>
            <p>Monthly plans for updates, backups, speed checks, and those late-night "the site is down" emergencies. Cancel anytime.</p>
            <div class="svc-tags"><span>Uptime</span><span>Backups</span><span>Support</span><span>Security</span></div>
          </div>
          <div class="svc-visual svc-v7">
            <span class="label">◉ status.ok</span>
            <span>We stay <em>on-call</em></span>
          </div>
        </div>
      </div>
    </div>

    <div class="svc-row" data-idx="7">
      <div class="svc-num">viii.</div>
      <div class="svc-title"><em>Google</em> &amp; Meta Ads <span class="svc-sub">Paid search &amp; social that feeds pipeline.</span></div>
      <div class="svc-toggle"></div>
      <div class="svc-expand">
        <div class="svc-expand-inner">
          <div>
            <p>Paid search and paid social managed with transparent monthly reporting. No hidden fees, no mystery audiences — just campaigns that bring warm leads to your door.</p>
            <div class="svc-tags"><span>Google Ads</span><span>Meta Ads</span><span>GA4</span><span>Reporting</span></div>
          </div>
          <div class="svc-visual svc-v8">
            <span class="label">⌘ ads.ROI</span>
            <span>Pipeline, <em>on tap</em></span>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div class="svc-footer">
    <span>— 8 services · 1 studio · North Park, SD</span>
    <a href="#contact" style="color:#111318">Start a project ↗</a>
  </div>
</section>

<!-- ===================== PRICING ===================== -->
<section class="block" id="pricing">
  <div style="display:flex;justify-content:space-between;align-items:end;gap:40px;flex-wrap:wrap">
    <div>
      <span class="kicker">Pricing · Paquetes</span>
      <h2 class="section-title">Three ways to <em>start</em>.<br/>No hidden retainers.</h2>
    </div>
    <p style="max-width:420px;color:#3a414f;font-size:16px;line-height:1.55;margin:0">Flat pricing, fixed timelines. Everything billed 50% up front, 50% on launch. Optional care plans after that — cancel anytime.</p>
  </div>

  <div class="pricing-grid">
    <div class="plan">
      <div class="pname">Corner Shop</div>
      <div class="psub">Marquee site for a single-location business.</div>
      <div class="price"><span class="cur">$</span>{{PRICE_CORNER_SHOP}}<span class="per">flat</span></div>
      <ul>
        <li class="check">Up to 5 pages, custom-designed</li>
        <li class="check">Mobile-perfect &amp; accessible</li>
        <li class="check">Bilingual setup (EN / ES)</li>
        <li class="check">Google Business + local SEO basics</li>
        <li class="check">Launches in 3 weeks</li>
        <li>E-commerce &amp; booking</li>
      </ul>
      <div class="plan-cta"><a class="btn ghost" href="#contact" style="border-color:#111318">Start a Corner Shop →</a></div>
    </div>

    <div class="plan featured">
      <div class="pname">Main Street</div>
      <div class="psub">Our most popular — a growing business, online.</div>
      <div class="price"><span class="cur">$</span>{{PRICE_MAIN_STREET}}<span class="per">flat</span></div>
      <ul>
        <li class="check">Up to 12 pages + CMS for blog / menu / listings</li>
        <li class="check">Booking, forms, Stripe / Square integration</li>
        <li class="check">Bilingual setup + content polishing</li>
        <li class="check">Full local SEO + schema + GA4</li>
        <li class="check">6 weeks, 2 rounds of revisions</li>
        <li class="check">90 days of free care after launch</li>
      </ul>
      <div class="plan-cta"><a class="btn" href="#contact">Book Main Street →</a></div>
    </div>

    <div class="plan">
      <div class="pname">Harbor</div>
      <div class="psub">Multi-location, e-commerce, or custom app work.</div>
      <div class="price"><span class="cur">$</span>{{PRICE_HARBOR}}<span class="per">from</span></div>
      <ul>
        <li class="check">Full Shopify / headless commerce</li>
        <li class="check">Multi-location &amp; multi-language</li>
        <li class="check">Custom integrations &amp; dashboards</li>
        <li class="check">Dedicated PM + weekly check-ins</li>
        <li class="check">Ads &amp; SEO retainer optional</li>
        <li class="check">8–14 week build</li>
      </ul>
      <div class="plan-cta"><a class="btn ghost" href="#contact" style="border-color:#111318">Talk to us →</a></div>
    </div>
  </div>

  <p class="mono" style="text-align:center;margin-top:40px;font-size:12px;color:#6a7080;letter-spacing:.06em">
    MAINTENANCE PLANS · FROM \${{PRICE_MAINTENANCE}}/MO  &nbsp;·&nbsp;  ADS MANAGEMENT · FROM \${{PRICE_ADS}}/MO  &nbsp;·&nbsp;  NONPROFIT DISCOUNT · 15%
  </p>
</section>

<!-- ===================== CONTACT ===================== -->
<section class="contact" id="contact">
  <!-- Clouds -->
  <div class="cloud" style="top:40px;left:5%;width:110px;opacity:.8">
    <svg viewBox="0 0 130 60"><ellipse cx="40" cy="38" rx="36" ry="18" fill="#fff"/><ellipse cx="74" cy="30" rx="40" ry="22" fill="#fff"/><ellipse cx="104" cy="40" rx="22" ry="14" fill="#fff"/></svg>
  </div>
  <div class="cloud" style="top:80px;right:12%;width:140px;opacity:.9">
    <svg viewBox="0 0 130 60"><ellipse cx="40" cy="38" rx="36" ry="18" fill="#fff"/><ellipse cx="74" cy="30" rx="40" ry="22" fill="#fff"/><ellipse cx="104" cy="40" rx="22" ry="14" fill="#fff"/></svg>
  </div>

  <div class="contact-inner">
    <div>
      <span class="kicker">Say hi · Escríbenos</span>
      <h2 class="section-title">Let's build <em>something</em><br/>good together.</h2>
      <p class="lead">Tell us a little about your business and we'll get back within one working day. Free quote, no pressure — hablamos español.</p>
      <div class="meta-list">
        <div class="row"><span class="label">Email</span> <a href="mailto:hola@lumiose.studio">hola@lumiose.studio</a></div>
        <div class="row"><span class="label">Phone</span> (619) 555-0148</div>
        <div class="row"><span class="label">Studio</span> North Park, San Diego, CA 92104</div>
        <div class="row"><span class="label">Hours</span> Mon–Fri · 9–6 PT</div>
      </div>
    </div>
    <form class="cform" onsubmit="event.preventDefault(); this.querySelector('.submit-row .note').textContent='Thanks — we\\\\'ll be in touch within a day.';">
      <div class="row2">
        <div class="field">
          <label>Your name</label>
          <input type="text" placeholder="Jane Rivera" required />
        </div>
        <div class="field">
          <label>Business</label>
          <input type="text" placeholder="Barrio Coastal Café" />
        </div>
      </div>
      <div class="row2">
        <div class="field">
          <label>Email</label>
          <input type="email" placeholder="jane@bcc.com" required />
        </div>
        <div class="field">
          <label>Phone</label>
          <input type="tel" placeholder="(619) 555-0128" />
        </div>
      </div>
      <div class="field">
        <label>What do you need?</label>
        <select>
          <option>A new website (Corner Shop)</option>
          <option selected>A full build (Main Street)</option>
          <option>Something bigger (Harbor)</option>
          <option>Just SEO / Ads help</option>
          <option>Not sure yet — let's talk</option>
        </select>
      </div>
      <div class="field">
        <label>Tell us a bit more</label>
        <textarea placeholder="A few lines about your business and what you're hoping for..."></textarea>
      </div>
      <div class="submit-row">
        <span class="note mono">Replies within 1 business day · Respuesta en 1 día</span>
        <button class="btn" type="submit">Send →</button>
      </div>
    </form>
  </div>
</section>

<!-- ===================== FOOTER ===================== -->
<footer>
  <div class="foot-inner">
    <div class="foot-brand">
      <div class="logo"><span class="mark"></span> Lumiose</div>
      <p>A small web studio in North Park, San Diego — building websites, stores, and marketing systems for the businesses we live next door to.</p>
    </div>
    <div>
      <h5>Services</h5>
      <ul>
        <li><a href="#services">Web development</a></li>
        <li><a href="#services">Web design</a></li>
        <li><a href="#services">Shopify &amp; e-commerce</a></li>
        <li><a href="#services">Local SEO</a></li>
        <li><a href="#services">Google &amp; Meta Ads</a></li>
      </ul>
    </div>
    <div>
      <h5>Studio</h5>
      <ul>
        <li><a href="#work">Recent work</a></li>
        <li><a href="#pricing">Pricing</a></li>
        <li><a href="#contact">Contact</a></li>
        <li><a href="#contact">Careers</a></li>
      </ul>
    </div>
    <div>
      <h5>Elsewhere</h5>
      <ul>
        <li><a>Instagram</a></li>
        <li><a>LinkedIn</a></li>
        <li><a>Dribbble</a></li>
        <li><a>GitHub</a></li>
      </ul>
    </div>
  </div>
  <div class="foot-bottom">
    <span>© 2026 LUMIOSE STUDIO · NORTH PARK, SAN DIEGO, CA</span>
    <span>HECHO CON ☀ + ☕ EN SAN DIEGO</span>
  </div>
</footer>



`;
