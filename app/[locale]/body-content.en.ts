// Derived from "Lumiose v2 (1).html". Price tokens like {{PRICE_CORNER_SHOP}}
// are substituted at render time by lib/pricing/prices.ts. Mount points
// #detection-banner-mount and #locale-switcher-mount are hydrated by
// client components (DetectionBanner, LocaleSwitcher).
export const BODY_HTML = `<div id="detection-banner-mount"></div>

<!-- Top banner -->
<div class="banner">
  <a href="#contact">
    <span class="serif" style="font-style:italic">Spring launch offer · 20% off your first site, available for May bookings</span>
    <span class="arrow">→</span>
  </a>
</div>

<!-- ===================== HERO ===================== -->
<header class="hero">
  <!-- Clouds -->
  <div class="cloud" style="top:80px;left:6%;width:130px;opacity:.9">
    <svg viewBox="0 0 130 60"><ellipse cx="40" cy="38" rx="36" ry="18" fill="#fff"/><ellipse cx="74" cy="30" rx="40" ry="22" fill="#fff"/><ellipse cx="104" cy="40" rx="22" ry="14" fill="#fff"/></svg>
  </div>
  <div class="cloud" style="top:130px;right:8%;width:190px;opacity:.95">
    <svg viewBox="0 0 200 50"><ellipse cx="48" cy="32" rx="44" ry="14" fill="#fff"/><ellipse cx="110" cy="24" rx="54" ry="18" fill="#fff"/><ellipse cx="168" cy="30" rx="32" ry="14" fill="#fff"/></svg>
  </div>
  <div class="cloud" style="top:12px;left:42%;width:55px;opacity:.85">
    <svg viewBox="0 0 50 24"><ellipse cx="15" cy="16" rx="14" ry="8" fill="#fff"/><ellipse cx="34" cy="12" rx="15" ry="10" fill="#fff"/></svg>
  </div>
  <div class="cloud" style="top:250px;left:3%;width:120px;opacity:.75">
    <svg viewBox="0 0 120 80"><ellipse cx="36" cy="55" rx="32" ry="18" fill="#fff"/><ellipse cx="72" cy="38" rx="38" ry="24" fill="#fff"/><ellipse cx="98" cy="56" rx="22" ry="16" fill="#fff"/><ellipse cx="56" cy="22" rx="20" ry="12" fill="#fff"/></svg>
  </div>
  <div class="cloud" style="top:22px;right:22%;width:60px;opacity:.6">
    <svg viewBox="0 0 50 24"><ellipse cx="15" cy="16" rx="14" ry="8" fill="#fff"/><ellipse cx="34" cy="12" rx="15" ry="10" fill="#fff"/></svg>
  </div>
  <div class="cloud" style="top:180px;left:26%;width:160px;opacity:.82">
    <svg viewBox="0 0 200 50"><ellipse cx="48" cy="32" rx="44" ry="14" fill="#fff"/><ellipse cx="110" cy="24" rx="54" ry="18" fill="#fff"/><ellipse cx="168" cy="30" rx="32" ry="14" fill="#fff"/></svg>
  </div>
  <div class="cloud" style="top:305px;right:16%;width:150px;opacity:.78">
    <svg viewBox="0 0 160 70"><ellipse cx="46" cy="44" rx="44" ry="20" fill="#fff"/><ellipse cx="92" cy="32" rx="50" ry="26" fill="#fff"/><ellipse cx="130" cy="46" rx="26" ry="16" fill="#fff"/></svg>
  </div>
  <div class="cloud" style="top:148px;left:72%;width:85px;opacity:.7">
    <svg viewBox="0 0 120 80"><ellipse cx="36" cy="55" rx="32" ry="18" fill="#fff"/><ellipse cx="72" cy="38" rx="38" ry="24" fill="#fff"/><ellipse cx="98" cy="56" rx="22" ry="16" fill="#fff"/><ellipse cx="56" cy="22" rx="20" ry="12" fill="#fff"/></svg>
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
      <details class="nav-mobile">
        <summary class="nav-burger" aria-label="Menu"><span></span><span></span><span></span></summary>
        <div class="nav-mobile-menu">
          <a href="#services">Services</a>
          <a href="#work">Work</a>
          <a href="#pricing">Pricing</a>
          <a href="#contact">Contact</a>
          <a href="#contact" class="btn nav-mobile-cta">Book a call</a>
        </div>
      </details>
    </div>
  </nav>

  <!-- Headline -->
  <div class="hero-inner">
    <span class="eyebrow"><span class="dot"></span> Now booking · May 2026</span>
    <h1 class="display">Better websites.<br/><em>Built to sell</em>. Period.</h1>
    <p class="sub">Custom-coded, obsessively fast, and designed to turn visitors into customers. For small businesses that are done settling for "good enough."</p>
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
            <div class="prev-sub">Family recipes, Pacific fish, a long patio sunset. Open 11–10, every day.</div>
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
    <span>Small businesses <span class="star">✦</span></span>
    <span>Startups <span class="star">✦</span></span>
    <!-- duplicate for seamless loop -->
    <span>Restaurants <span class="star">✦</span></span>
    <span>Contractors <span class="star">✦</span></span>
    <span>Real estate <span class="star">✦</span></span>
    <span>Clinics &amp; law <span class="star">✦</span></span>
    <span>Retail &amp; Shopify <span class="star">✦</span></span>
    <span>Gyms &amp; studios <span class="star">✦</span></span>
    <span>Small businesses <span class="star">✦</span></span>
    <span>Startups <span class="star">✦</span></span>
  </div>
</div>

<!-- ===================== PORTFOLIO (hover list) ===================== -->
<section class="portfolio" id="work">
  <div style="max-width:1240px;margin:0 auto">
    <div class="portfolio-head">
      <div>
        <span class="kicker">02 · Recent work</span>
        <h2 class="section-title">A few <em>clients</em> we've<br/>built for lately.</h2>
      </div>
      <p>Hover over a project to see a preview. Every site below was hand-designed and coded from scratch. No page builders, no shared templates, no shortcuts.</p>
    </div>

    <div class="cases" id="cases">
      <a href="#" class="case" data-preview="0">
        <span class="num">→ 01</span>
        <span class="name">Barrio Coastal Café <em>↗</em></span>
        <span class="desc">Full redesign with online ordering and reservations for a coastal restaurant.</span>
        <span class="tags"><span class="case-tag">Restaurant</span><span class="case-tag">Ordering</span><span class="case-tag">Next.js</span></span>
        <span class="yr">2026</span>
      </a>
      <a href="#" class="case" data-preview="1">
        <span class="num">→ 02</span>
        <span class="name">Pacific Ironworks <em>↗</em></span>
        <span class="desc">Membership site and class booking platform for a boutique gym.</span>
        <span class="tags"><span class="case-tag">Fitness</span><span class="case-tag">Booking</span><span class="case-tag">Stripe</span></span>
        <span class="yr">2026</span>
      </a>
      <a href="#" class="case" data-preview="2">
        <span class="num">→ 03</span>
        <span class="name">La Jolla Realty Co. <em>↗</em></span>
        <span class="desc">Listings CMS with lead capture and CRM sync for a real estate firm.</span>
        <span class="tags"><span class="case-tag">Real estate</span><span class="case-tag">CMS</span><span class="case-tag">CRM</span></span>
        <span class="yr">2026</span>
      </a>
      <a href="#" class="case" data-preview="3">
        <span class="num">→ 04</span>
        <span class="name">Sandoval Law <em>↗</em></span>
        <span class="desc">Practice site with consultation intake for an immigration law firm.</span>
        <span class="tags"><span class="case-tag">Legal</span><span class="case-tag">Immigration</span><span class="case-tag">SEO</span></span>
        <span class="yr">2025</span>
      </a>
      <a href="#" class="case" data-preview="4">
        <span class="num">→ 05</span>
        <span class="name">Costa Mar Contractors <em>↗</em></span>
        <span class="desc">Marketing site and lead engine for a residential and commercial contractor.</span>
        <span class="tags"><span class="case-tag">Construction</span><span class="case-tag">Leads</span></span>
        <span class="yr">2025</span>
      </a>
      <a href="#" class="case" data-preview="5">
        <span class="num">→ 06</span>
        <span class="name">Alvarado Family Dental <em>↗</em></span>
        <span class="desc">Clinic site with online booking for a family dental practice.</span>
        <span class="tags"><span class="case-tag">Healthcare</span><span class="case-tag">Booking</span></span>
        <span class="yr">2025</span>
      </a>
    </div>

    <div class="cases-footer">
      <span>6 of 40+ projects</span>
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
        <div><div class="plabel">IMMIGRATION LAW</div><div class="ptitle">Sandoval <em>Law</em></div></div>
        <span class="pcta">Free consult →</span>
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
        <div><div class="plabel">FAMILY DENTISTRY</div><div class="ptitle">Alvarado <em>Family</em></div></div>
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
      <span class="kicker">03 · What we do</span>
      <h2 class="section-title">Five services,<br/>one <em>relentless</em> studio.</h2>
    </div>
    <p>We're a small team of designers and developers, building websites and marketing systems that pull their weight for the businesses who hire us. Click any row to expand.</p>
  </div>

  <div class="svc-index" id="svc-index">
    <div class="svc-row open" data-idx="0">
      <div class="svc-num">i.</div>
      <div class="svc-title">Web <em>development</em> <span class="svc-sub">Custom-coded sites on Next.js, Astro, or WordPress.</span></div>
      <div class="svc-toggle" aria-label="Toggle"></div>
      <div class="svc-expand">
        <div class="svc-expand-inner">
          <div>
            <p>Hand-coded sites on modern stacks. Fast, accessible, easy to update, and ownership stays with you, always. The foundation everything else sits on.</p>
            <div class="svc-tags"><span>Next.js</span><span>Astro</span><span>WordPress</span><span>Headless CMS</span><span>Core Web Vitals</span></div>
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
      <div class="svc-title">SEO &amp; <em>GEO</em> <span class="svc-sub">Rank on Google. And inside ChatGPT.</span></div>
      <div class="svc-toggle"></div>
      <div class="svc-expand">
        <div class="svc-expand-inner">
          <div>
            <p>Classic SEO (schema, technical plumbing, content strategy) plus Generative Engine Optimization, so you show up when people search on Google and when they ask ChatGPT, Perplexity, or Google AI Overviews. Two rankings, one playbook.</p>
            <div class="svc-tags"><span>Technical SEO</span><span>Schema.org</span><span>AI Overviews</span><span>Content</span><span>Perplexity</span></div>
          </div>
          <div class="svc-visual svc-v4">
            <span class="label">◈ rank / ai</span>
            <span>Found <em>twice</em></span>
          </div>
        </div>
      </div>
    </div>

    <div class="svc-row" data-idx="2">
      <div class="svc-num">iii.</div>
      <div class="svc-title">Google <em>Ads</em> <span class="svc-sub">Paid traffic that converts, not budget that burns.</span></div>
      <div class="svc-toggle"></div>
      <div class="svc-expand">
        <div class="svc-expand-inner">
          <div>
            <p>Search, Performance Max, and remarketing campaigns managed with transparent monthly reporting. No hidden fees, no mystery audiences. Just clicks that turn into customers and numbers you can actually read.</p>
            <div class="svc-tags"><span>Google Ads</span><span>Performance Max</span><span>GA4</span><span>Reporting</span></div>
          </div>
          <div class="svc-visual svc-v8">
            <span class="label">⌘ ads.ROI</span>
            <span>Pipeline, <em>on tap</em></span>
          </div>
        </div>
      </div>
    </div>

    <div class="svc-row" data-idx="3">
      <div class="svc-num">iv.</div>
      <div class="svc-title">Domain <em>management</em> <span class="svc-sub">DNS, email, SSL. The plumbing, handled.</span></div>
      <div class="svc-toggle"></div>
      <div class="svc-expand">
        <div class="svc-expand-inner">
          <div>
            <p>Full domain and infrastructure management: DNS records, SSL certificates, professional email, redirects, and renewals tracked so nothing expires on a Friday night. You sleep through the night, we handle the plumbing.</p>
            <div class="svc-tags"><span>DNS</span><span>SSL</span><span>Email</span><span>Cloudflare</span><span>Renewals</span></div>
          </div>
          <div class="svc-visual svc-v7">
            <span class="label">◉ dns.ok</span>
            <span>Always <em>up</em></span>
          </div>
        </div>
      </div>
    </div>

    <div class="svc-row" data-idx="4">
      <div class="svc-num">v.</div>
      <div class="svc-title">Google <em>Business</em> <span class="svc-sub">Monthly audit and management of your map profile, working 24/7.</span></div>
      <div class="svc-toggle"></div>
      <div class="svc-expand">
        <div class="svc-expand-inner">
          <div>
            <p>Monthly audit and hands-on management of your Google Business Profile: photos, reviews, posts, categories, Q&amp;A, service areas. The difference between "showing up on the map" and "showing up first."</p>
            <div class="svc-tags"><span>GBP</span><span>Reviews</span><span>Google Maps</span><span>Local SEO</span></div>
          </div>
          <div class="svc-visual svc-v3">
            <span class="label">◎ gmb.live</span>
            <span>Top of the <em>map</em></span>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div class="svc-footer">
    <span>5 services · 1 studio</span>
    <a href="#contact" style="color:#111318">Start a project ↗</a>
  </div>
</section>

<!-- ===================== PRICING ===================== -->
<section class="block" id="pricing">
  <div style="display:flex;justify-content:space-between;align-items:end;gap:40px;flex-wrap:wrap">
    <div>
      <span class="kicker">Pricing</span>
      <h2 class="section-title">Three ways to <em>start</em>.<br/>No hidden retainers.</h2>
    </div>
    <p style="max-width:420px;color:#3a414f;font-size:16px;line-height:1.55;margin:0">Setup + monthly. Setup billed 50% up front, 50% on launch. Monthly covers hosting, care and updates. Cancel anytime.</p>
  </div>

  <div class="pricing-grid">
    <div class="plan">
      <div class="pname">Corner Shop</div>
      <div class="psub">Marquee site for a single-location business.</div>
      <div class="price"><span class="cur">$</span>{{PRICE_CORNER_SHOP}}<span class="cur-suffix">{{CURRENCY_SUFFIX}}</span></div>
      <div class="price-mo">+ \${{PRICE_CORNER_SHOP_MO}}{{CURRENCY_SUFFIX}}/mo</div>
      <ul>
        <li class="check">Up to 5 pages, custom-designed</li>
        <li class="check">Mobile-perfect &amp; accessible</li>
        <li class="check">Bilingual setup (EN / ES)</li>
        <li class="check">Google Business Audit + local SEO</li>
        <li class="check">Launches in 1 week</li>
        <li class="upsell"><a href="#pricing">→ Need bookings? See Main Street</a></li>
      </ul>
      <div class="plan-cta"><a class="btn ghost" href="#contact" style="border-color:#111318">Start a Corner Shop →</a></div>
    </div>

    <div class="plan featured">
      <div class="pname">Main Street <span class="badge">Most chosen</span></div>
      <div class="psub">Our most popular. A growing business, online.</div>
      <div class="price"><span class="cur">$</span>{{PRICE_MAIN_STREET}}<span class="cur-suffix">{{CURRENCY_SUFFIX}}</span></div>
      <div class="price-mo">+ \${{PRICE_MAIN_STREET_MO}}{{CURRENCY_SUFFIX}}/mo</div>
      <ul>
        <li class="check">Up to 12 pages + CMS for blog / menu / services</li>
        <li class="check">Bookings, forms, Stripe / Square integration</li>
        <li class="check">Bilingual setup + content polishing</li>
        <li class="check">Full local SEO + GEO (ChatGPT, AI)</li>
        <li class="check">2 weeks, 2 rounds of revisions</li>
        <li class="check">Monthly GBP management included</li>
      </ul>
      <div class="plan-cta"><a class="btn" href="#contact">Book Main Street →</a></div>
    </div>

    <div class="plan">
      <div class="pname">Enterprise</div>
      <div class="psub">Multi-location, e-commerce, or custom integrations.</div>
      <div class="price-from">From</div>
      <div class="price"><span class="cur">$</span>{{PRICE_ENTERPRISE}}<span class="cur-suffix">{{CURRENCY_SUFFIX}}</span></div>
      <div class="price-mo">+ \${{PRICE_ENTERPRISE_MO}}{{CURRENCY_SUFFIX}}/mo</div>
      <ul>
        <li class="check">Custom design, unlimited locations</li>
        <li class="check">Native bookings with calendar + payments</li>
        <li class="check">POS &amp; external system integrations</li>
        <li class="check">Corporate email + advanced dashboard</li>
        <li class="check">Dedicated PM + 1:1 onboarding</li>
        <li class="check">4–6 week build</li>
      </ul>
      <div class="plan-cta"><a class="btn ghost" href="#contact" style="border-color:#111318">Talk to us →</a></div>
    </div>
  </div>

  <p class="mono" style="text-align:center;margin-top:40px;font-size:12px;color:#6a7080;letter-spacing:.06em">
    MAINTENANCE PLANS · FROM \${{PRICE_MAINTENANCE}}{{CURRENCY_SUFFIX}}/MO  &nbsp;·&nbsp;  ADS MANAGEMENT · FROM \${{PRICE_ADS}}{{CURRENCY_SUFFIX}}/MO  &nbsp;·&nbsp;  NONPROFIT DISCOUNT · 15%
  </p>
</section>

<!-- ===================== CONTACT ===================== -->
<section class="contact" id="contact">
  <!-- Clouds -->
  <div class="cloud" style="top:40px;left:5%;width:110px;opacity:.8">
    <svg viewBox="0 0 130 60"><ellipse cx="40" cy="38" rx="36" ry="18" fill="#fff"/><ellipse cx="74" cy="30" rx="40" ry="22" fill="#fff"/><ellipse cx="104" cy="40" rx="22" ry="14" fill="#fff"/></svg>
  </div>
  <div class="cloud" style="top:80px;right:12%;width:170px;opacity:.9">
    <svg viewBox="0 0 200 50"><ellipse cx="48" cy="32" rx="44" ry="14" fill="#fff"/><ellipse cx="110" cy="24" rx="54" ry="18" fill="#fff"/><ellipse cx="168" cy="30" rx="32" ry="14" fill="#fff"/></svg>
  </div>
  <div class="cloud" style="top:170px;left:2%;width:95px;opacity:.68">
    <svg viewBox="0 0 120 80"><ellipse cx="36" cy="55" rx="32" ry="18" fill="#fff"/><ellipse cx="72" cy="38" rx="38" ry="24" fill="#fff"/><ellipse cx="98" cy="56" rx="22" ry="16" fill="#fff"/><ellipse cx="56" cy="22" rx="20" ry="12" fill="#fff"/></svg>
  </div>
  <div class="cloud" style="top:230px;right:6%;width:65px;opacity:.6">
    <svg viewBox="0 0 50 24"><ellipse cx="15" cy="16" rx="14" ry="8" fill="#fff"/><ellipse cx="34" cy="12" rx="15" ry="10" fill="#fff"/></svg>
  </div>
  <div class="cloud" style="top:280px;left:68%;width:105px;opacity:.62">
    <svg viewBox="0 0 120 80"><ellipse cx="36" cy="55" rx="32" ry="18" fill="#fff"/><ellipse cx="72" cy="38" rx="38" ry="24" fill="#fff"/><ellipse cx="98" cy="56" rx="22" ry="16" fill="#fff"/><ellipse cx="56" cy="22" rx="20" ry="12" fill="#fff"/></svg>
  </div>

  <div class="contact-inner">
    <div>
      <span class="kicker">Say hi</span>
      <h2 class="section-title">Let's build <em>something</em><br/>worth shipping.</h2>
      <p class="lead">Tell us a little about your business and we'll get back within one working day. Free quote. No pressure. No sales tricks.</p>
      <div class="meta-list">
        <div class="row"><span class="label">Email</span> <a href="mailto:hola@lumiose.studio">hola@lumiose.studio</a></div>
        <div class="row"><span class="label">Phone</span> (619) 555-0148</div>
        <div class="row"><span class="label">Studio</span> Calexico, CA, United States</div>
        <div class="row"><span class="label">Hours</span> Mon–Fri · 9–6 PT</div>
      </div>
    </div>
    <form class="cform" onsubmit="event.preventDefault(); this.querySelector('.submit-row .note').textContent='Thanks! We\\\\'ll be in touch within a day.';">
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
          <option>Something bigger (Enterprise)</option>
          <option>Just SEO / Ads help</option>
          <option>Not sure yet, let's talk</option>
        </select>
      </div>
      <div class="field">
        <label>Tell us a bit more</label>
        <textarea placeholder="A few lines about your business and what you're hoping for..."></textarea>
      </div>
      <div class="submit-row">
        <span class="note mono">Replies within 1 business day</span>
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
      <p>A studio in California, building websites, stores, and marketing systems for the businesses we live next door to.</p>
    </div>
    <div>
      <h5>Services</h5>
      <ul>
        <li><a href="#services">Web development</a></li>
        <li><a href="#services">SEO &amp; GEO</a></li>
        <li><a href="#services">Google Ads</a></li>
        <li><a href="#services">Domain management</a></li>
        <li><a href="#services">Google Business</a></li>
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
    <span>© 2026 LUMIOSE STUDIO · CALIFORNIA</span>
    <span>MADE WITH ☀ + ☕</span>
  </div>
</footer>



`;
