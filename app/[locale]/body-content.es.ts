// Spanish translation derived from body-content.en.ts. Price tokens and
// mount points are identical so the renderer can swap bodies by locale.
export const BODY_HTML = `<div id="detection-banner-mount"></div>

<!-- Top banner -->
<div class="banner">
  <a href="#contact">
    <span class="serif" style="font-style:italic">Oferta de primavera · 20% off en tu primer sitio — disponible para reservas de mayo</span>
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
        <li><a href="#services">Servicios</a></li>
        <li><a href="#work">Proyectos</a></li>
        <li><a href="#pricing">Precios</a></li>
        <li><a href="#contact">Contacto</a></li>
      </ul>
      <div class="nav-cta">
        <a class="btn" href="#contact">Agendar llamada</a>
      </div>
    </div>
  </nav>

  <!-- Headline -->
  <div class="hero-inner">
    <span class="eyebrow"><span class="dot"></span> Reservando ahora · Mayo 2026 · San Diego, CA</span>
    <h1 class="display">Sitios web que hacen <em>brillar</em><br/>a los negocios de <em>San Diego</em>.</h1>
    <p class="sub">Un estudio de desarrollo web para restaurantes, contratistas, inmobiliarias y clínicas que mantienen viva esta ciudad. Hechos a medida, rápidos como el Pacífico, en inglés y español.</p>
    <div class="hero-ctas">
      <a class="btn pill-lg" href="#contact">Cotización gratis</a>
      <a class="btn pill-lg ghost" href="#work">Ver proyectos →</a>
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
        <div class="ide-row"><span class="ide-ln">3</span><span class="ide-tx">  <span class="tag">&lt;span</span> <span class="attr">class</span>=<span class="str">"eyebrow"</span><span class="tag">&gt;</span><span class="txt">Ocean Beach · desde 2019</span><span class="tag">&lt;/span&gt;</span></span></div>
        <div class="ide-row"><span class="ide-ln">4</span><span class="ide-tx">  <span class="tag">&lt;h1&gt;</span><span class="txt">Coastal Mexican,</span></span></div>
        <div class="ide-row"><span class="ide-ln">5</span><span class="ide-tx">    <span class="tag">&lt;em&gt;</span><span class="txt">cooked slow.</span><span class="tag">&lt;/em&gt;&lt;/h1&gt;</span></span></div>
        <div class="ide-row"><span class="ide-ln">6</span><span class="ide-tx">  <span class="tag">&lt;p&gt;</span><span class="txt">Family recipes, Pacific fish,</span></span></div>
        <div class="ide-row"><span class="ide-ln">7</span><span class="ide-tx">    <span class="txt">a long patio sunset.</span><span class="tag">&lt;/p&gt;</span></span></div>
        <div class="ide-row"><span class="ide-ln">8</span><span class="ide-tx">  <span class="tag">&lt;a</span> <span class="attr">href</span>=<span class="str">"/reserve"</span> <span class="attr">class</span>=<span class="str">"btn"</span><span class="tag">&gt;</span></span></div>
        <div class="ide-row"><span class="ide-ln">9</span><span class="ide-tx">    <span class="txt">Reservar mesa →</span><span class="tag">&lt;/a&gt;</span><span class="cursor-blink"></span></span></div>
        <div class="ide-row"><span class="ide-ln">10</span><span class="ide-tx">  <span class="tag">&lt;Menu</span> <span class="attr">today</span>=<span class="kw">{seasonal}</span> <span class="tag">/&gt;</span></span></div>
        <div class="ide-row"><span class="ide-ln">11</span><span class="ide-tx"><span class="tag">&lt;/section&gt;</span></span></div>
        <div class="ide-row"><span class="ide-ln">12</span><span class="ide-tx"></span></div>
        <div class="ide-row"><span class="ide-ln">13</span><span class="ide-tx"><span class="com">// 98 PageSpeed · 0.8s FCP · a11y AA</span></span></div>
      </div>

      <div class="ide-preview">
        <div class="prev-label"><span class="live"></span>VISTA EN VIVO</div>
        <div class="prev-site">
          <div class="prev-nav">
            <span>Barrio Coastal</span>
            <span class="prev-links"><span>Menu</span><span>Reserve</span><span>Order</span></span>
          </div>
          <div class="prev-hero">
            <span class="prev-eyebrow">✦ Ocean Beach · desde 2019</span>
            <div class="prev-h1">Mexicano costero, <em>a fuego lento.</em></div>
            <div class="prev-sub">Recetas de familia, pescado del Pacífico, atardeceres largos en el patio. Abierto de 11 a 10 todos los días.</div>
            <div class="prev-ctas">
              <span class="prev-btn">Reservar mesa →</span>
              <span class="prev-btn ghost">Ver menú</span>
            </div>
          </div>
          <div class="prev-metrics">
            <div class="pm"><span class="v">98</span><span class="l">PageSpeed</span></div>
            <div class="pm"><span class="v">0.8<span style="font-size:.55em">s</span></span><span class="l">Primer render</span></div>
            <div class="pm"><span class="v">AA</span><span class="l">Accesibilidad</span></div>
            <div class="pm"><span class="v">+34<span style="font-size:.55em">%</span></span><span class="l">Reservas</span></div>
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
    <span>Restaurantes <span class="star">✦</span></span>
    <span>Contratistas <span class="star">✦</span></span>
    <span>Inmobiliarias <span class="star">✦</span></span>
    <span>Clínicas y despachos <span class="star">✦</span></span>
    <span>Retail y Shopify <span class="star">✦</span></span>
    <span>Gimnasios y estudios <span class="star">✦</span></span>
    <span>PyMEs locales <span class="star">✦</span></span>
    <span>Startups <span class="star">✦</span></span>
    <!-- duplicate for seamless loop -->
    <span>Restaurantes <span class="star">✦</span></span>
    <span>Contratistas <span class="star">✦</span></span>
    <span>Inmobiliarias <span class="star">✦</span></span>
    <span>Clínicas y despachos <span class="star">✦</span></span>
    <span>Retail y Shopify <span class="star">✦</span></span>
    <span>Gimnasios y estudios <span class="star">✦</span></span>
    <span>PyMEs locales <span class="star">✦</span></span>
    <span>Startups <span class="star">✦</span></span>
  </div>
</div>

<!-- ===================== PORTFOLIO (hover list) ===================== -->
<section class="portfolio" id="work">
  <div style="max-width:1240px;margin:0 auto">
    <div class="portfolio-head">
      <div>
        <span class="kicker">02 · Trabajo reciente · Recent work</span>
        <h2 class="section-title">Algunos <em>vecinos</em> para<br/>los que construimos recién.</h2>
      </div>
      <p>Pasá el mouse sobre un proyecto para ver una vista previa. Cada sitio fue diseñado y construido a mano en San Diego, para San Diego — sin page builders, sin plantillas compartidas.</p>
    </div>

    <div class="cases" id="cases">
      <a href="#" class="case" data-preview="0">
        <span class="num">→ 01</span>
        <span class="name">Barrio Coastal Café <em>↗</em></span>
        <span class="desc">Rediseño + pedidos online y reservas para restaurante de Ocean Beach.</span>
        <span class="tags"><span class="case-tag">Restaurant</span><span class="case-tag">Ordering</span><span class="case-tag">Next.js</span></span>
        <span class="yr">2026</span>
      </a>
      <a href="#" class="case" data-preview="1">
        <span class="num">→ 02</span>
        <span class="name">Pacific Ironworks <em>↗</em></span>
        <span class="desc">Sitio de membresías y reserva de clases para gimnasio boutique en North Park.</span>
        <span class="tags"><span class="case-tag">Fitness</span><span class="case-tag">Booking</span><span class="case-tag">Stripe</span></span>
        <span class="yr">2026</span>
      </a>
      <a href="#" class="case" data-preview="2">
        <span class="num">→ 03</span>
        <span class="name">La Jolla Realty Co. <em>↗</em></span>
        <span class="desc">CMS de propiedades + captura de leads para inmobiliaria de La Jolla.</span>
        <span class="tags"><span class="case-tag">Real estate</span><span class="case-tag">CMS</span><span class="case-tag">CRM</span></span>
        <span class="yr">2026</span>
      </a>
      <a href="#" class="case" data-preview="3">
        <span class="num">→ 04</span>
        <span class="name">Sandoval Law <em>↗</em></span>
        <span class="desc">Sitio bilingüe (EN/ES) para despacho de inmigración en Chula Vista.</span>
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
        <span class="desc">Sitio clínico + reservas online para consultorio dental bilingüe.</span>
        <span class="tags"><span class="case-tag">Healthcare</span><span class="case-tag">Booking</span></span>
        <span class="yr">2025</span>
      </a>
    </div>

    <div class="cases-footer">
      <span>— 6 de 40+ proyectos locales</span>
      <a href="#contact">Ver el archivo completo ↗</a>
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
      <span class="kicker">03 · Lo que hacemos · What we do</span>
      <h2 class="section-title">Ocho servicios,<br/>un estudio <em>meticuloso</em>.</h2>
    </div>
    <p>Somos un equipo pequeño de San Diego — diseñadores y desarrolladores — construyendo sitios web y sistemas de marketing que trabajan duro para los negocios locales. Hacé click en cualquier fila para expandir.</p>
  </div>

  <div class="svc-index" id="svc-index">
    <div class="svc-row open" data-idx="0">
      <div class="svc-num">i.</div>
      <div class="svc-title">Desarrollo <em>web</em> <span class="svc-sub">Código a medida en Next.js, Astro o WordPress.</span></div>
      <div class="svc-toggle" aria-label="Toggle"></div>
      <div class="svc-expand">
        <div class="svc-expand-inner">
          <div>
            <p>Sitios programados a mano sobre stacks modernos. Rápidos, accesibles, fáciles de actualizar — y la propiedad siempre queda en tus manos. Es nuestro servicio principal y donde aterrizan la mayoría de nuestros proyectos.</p>
            <div class="svc-tags"><span>Next.js</span><span>Astro</span><span>Headless CMS</span><span>A11y AA</span><span>Core Web Vitals</span></div>
          </div>
          <div class="svc-visual svc-v1">
            <span class="label">&lt;/&gt; index.tsx</span>
            <span>Hechos <em>a medida</em></span>
          </div>
        </div>
      </div>
    </div>

    <div class="svc-row" data-idx="1">
      <div class="svc-num">ii.</div>
      <div class="svc-title">Diseño <em>web</em> <span class="svc-sub">UI guiada por marca, wireframes, design systems.</span></div>
      <div class="svc-toggle"></div>
      <div class="svc-expand">
        <div class="svc-expand-inner">
          <div>
            <p>Diseño de sitio guiado por marca que refleja tu negocio. Wireframes, mocks en alta fidelidad y un design system que vas a seguir usando mucho después de que lanzemos.</p>
            <div class="svc-tags"><span>UX</span><span>UI</span><span>Figma</span><span>Prototyping</span><span>Design Systems</span></div>
          </div>
          <div class="svc-visual svc-v2">
            <span class="label">◐ figma/mock</span>
            <span>Dirección <em>de arte</em></span>
          </div>
        </div>
      </div>
    </div>

    <div class="svc-row" data-idx="2">
      <div class="svc-num">iii.</div>
      <div class="svc-title">Shopify y <em>e-commerce</em> <span class="svc-sub">Desde el primer SKU al checkout — y más allá.</span></div>
      <div class="svc-toggle"></div>
      <div class="svc-expand">
        <div class="svc-expand-inner">
          <div>
            <p>Temas de Shopify a medida, suscripciones y merchandising que saca el producto del estante. Headless cuando tiene sentido.</p>
            <div class="svc-tags"><span>Shopify 2.0</span><span>Stripe</span><span>Klaviyo</span><span>Headless</span></div>
          </div>
          <div class="svc-visual svc-v3">
            <span class="label">◎ checkout.v2</span>
            <span>Tiendas que <em>venden</em></span>
          </div>
        </div>
      </div>
    </div>

    <div class="svc-row" data-idx="3">
      <div class="svc-num">iv.</div>
      <div class="svc-title">SEO <em>local</em> <span class="svc-sub">Aparecé cuando tus vecinos buscan.</span></div>
      <div class="svc-toggle"></div>
      <div class="svc-expand">
        <div class="svc-expand-inner">
          <div>
            <p>Schema, Google Business Profile, citaciones locales y la plomería técnica para rankear por "mejor [cosa] en San Diego". Reporte mensual, sin jerga.</p>
            <div class="svc-tags"><span>Google Business</span><span>Schema.org</span><span>Citations</span><span>Content</span></div>
          </div>
          <div class="svc-visual svc-v4">
            <span class="label">◈ rank / sd</span>
            <span>Encontrado <em>localmente</em></span>
          </div>
        </div>
      </div>
    </div>

    <div class="svc-row" data-idx="4">
      <div class="svc-num">v.</div>
      <div class="svc-title">Landing <em>pages</em> <span class="svc-sub">Entrega en 5 días para campañas y lanzamientos.</span></div>
      <div class="svc-toggle"></div>
      <div class="svc-expand">
        <div class="svc-expand-inner">
          <div>
            <p>Sitios de una página para lanzamientos, anuncios o promos de temporada. Diseñadas, construidas y en vivo en una semana. Setup de A/B testing opcional.</p>
            <div class="svc-tags"><span>Framer</span><span>A/B testing</span><span>Analytics</span></div>
          </div>
          <div class="svc-visual svc-v5">
            <span class="label">▸ campaign.fast</span>
            <span>Listas en una <em>semana</em></span>
          </div>
        </div>
      </div>
    </div>

    <div class="svc-row" data-idx="5">
      <div class="svc-num">vi.</div>
      <div class="svc-title"><em>Branding</em> y logo <span class="svc-sub">Wordmarks, paletas, guidelines.</span></div>
      <div class="svc-toggle"></div>
      <div class="svc-expand">
        <div class="svc-expand-inner">
          <div>
            <p>Trabajo de identidad que sobrevive a las tendencias. Paquetes pequeños y enfocados para equipos pequeños y enfocados — logo, paleta, tipografía y un brand book que podés pasar a alguien más.</p>
            <div class="svc-tags"><span>Identity</span><span>Wordmarks</span><span>Guidelines</span></div>
          </div>
          <div class="svc-visual svc-v6">
            <span class="label">✦ brand.book</span>
            <span>Marcas que <em>duran</em></span>
          </div>
        </div>
      </div>
    </div>

    <div class="svc-row" data-idx="6">
      <div class="svc-num">vii.</div>
      <div class="svc-title"><em>Mantenimiento</em> y cuidado <span class="svc-sub">Updates, backups, las llamadas de las 11 pm.</span></div>
      <div class="svc-toggle"></div>
      <div class="svc-expand">
        <div class="svc-expand-inner">
          <div>
            <p>Planes mensuales para updates, backups, chequeos de velocidad y esas emergencias nocturnas de "el sitio está caído". Cancelás cuando quieras.</p>
            <div class="svc-tags"><span>Uptime</span><span>Backups</span><span>Support</span><span>Security</span></div>
          </div>
          <div class="svc-visual svc-v7">
            <span class="label">◉ status.ok</span>
            <span>Siempre <em>de guardia</em></span>
          </div>
        </div>
      </div>
    </div>

    <div class="svc-row" data-idx="7">
      <div class="svc-num">viii.</div>
      <div class="svc-title"><em>Google</em> y Meta Ads <span class="svc-sub">Búsqueda paga y social que alimenta el pipeline.</span></div>
      <div class="svc-toggle"></div>
      <div class="svc-expand">
        <div class="svc-expand-inner">
          <div>
            <p>Búsqueda paga y social paga manejadas con reporte mensual transparente. Sin fees ocultos, sin audiencias misteriosas — solo campañas que traen leads tibios a tu puerta.</p>
            <div class="svc-tags"><span>Google Ads</span><span>Meta Ads</span><span>GA4</span><span>Reporting</span></div>
          </div>
          <div class="svc-visual svc-v8">
            <span class="label">⌘ ads.ROI</span>
            <span>Pipeline, <em>al grifo</em></span>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div class="svc-footer">
    <span>— 8 servicios · 1 estudio · North Park, SD</span>
    <a href="#contact" style="color:#111318">Iniciar un proyecto ↗</a>
  </div>
</section>

<!-- ===================== PRICING ===================== -->
<section class="block" id="pricing">
  <div style="display:flex;justify-content:space-between;align-items:end;gap:40px;flex-wrap:wrap">
    <div>
      <span class="kicker">Precios · Paquetes</span>
      <h2 class="section-title">Tres formas de <em>empezar</em>.<br/>Sin retainers ocultos.</h2>
    </div>
    <p style="max-width:420px;color:#3a414f;font-size:16px;line-height:1.55;margin:0">Precio fijo, timelines fijos. Todo se factura 50% al inicio, 50% al lanzar. Planes de cuidado opcionales después — cancelás cuando quieras.</p>
  </div>

  <div class="pricing-grid">
    <div class="plan">
      <div class="pname">Corner Shop</div>
      <div class="psub">Sitio vitrina para un negocio de una sola ubicación.</div>
      <div class="price"><span class="cur">$</span>{{PRICE_CORNER_SHOP}}<span class="per">flat</span></div>
      <ul>
        <li class="check">Hasta 5 páginas, diseñadas a medida</li>
        <li class="check">Mobile-perfect y accesible</li>
        <li class="check">Setup bilingüe (EN / ES)</li>
        <li class="check">Google Business + básicos de SEO local</li>
        <li class="check">Lanza en 3 semanas</li>
        <li>E-commerce y reservas</li>
      </ul>
      <div class="plan-cta"><a class="btn ghost" href="#contact" style="border-color:#111318">Empezar Corner Shop →</a></div>
    </div>

    <div class="plan featured">
      <div class="pname">Main Street</div>
      <div class="psub">Nuestro más popular — un negocio creciendo, online.</div>
      <div class="price"><span class="cur">$</span>{{PRICE_MAIN_STREET}}<span class="per">flat</span></div>
      <ul>
        <li class="check">Hasta 12 páginas + CMS para blog / menú / listados</li>
        <li class="check">Reservas, formularios, integración Stripe / Square</li>
        <li class="check">Setup bilingüe + pulido de contenido</li>
        <li class="check">SEO local completo + schema + GA4</li>
        <li class="check">6 semanas, 2 rondas de revisiones</li>
        <li class="check">90 días de cuidado gratis post-lanzamiento</li>
      </ul>
      <div class="plan-cta"><a class="btn" href="#contact">Reservar Main Street →</a></div>
    </div>

    <div class="plan">
      <div class="pname">Harbor</div>
      <div class="psub">Multi-ubicación, e-commerce o trabajo de app custom.</div>
      <div class="price"><span class="cur">$</span>{{PRICE_HARBOR}}<span class="per">from</span></div>
      <ul>
        <li class="check">Shopify completo / commerce headless</li>
        <li class="check">Multi-ubicación y multi-idioma</li>
        <li class="check">Integraciones y dashboards a medida</li>
        <li class="check">PM dedicado + check-ins semanales</li>
        <li class="check">Retainer de Ads y SEO opcional</li>
        <li class="check">Construcción de 8–14 semanas</li>
      </ul>
      <div class="plan-cta"><a class="btn ghost" href="#contact" style="border-color:#111318">Hablemos →</a></div>
    </div>
  </div>

  <p class="mono" style="text-align:center;margin-top:40px;font-size:12px;color:#6a7080;letter-spacing:.06em">
    PLANES DE MANTENIMIENTO · DESDE \${{PRICE_MAINTENANCE}}/MO  &nbsp;·&nbsp;  GESTIÓN DE ADS · DESDE \${{PRICE_ADS}}/MO  &nbsp;·&nbsp;  DESCUENTO ONG · 15%
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
      <span class="kicker">Escríbenos · Say hi</span>
      <h2 class="section-title">Construyamos <em>algo</em><br/>bueno juntos.</h2>
      <p class="lead">Contanos un poco sobre tu negocio y respondemos en un día hábil. Cotización gratis, sin presión — hablamos español.</p>
      <div class="meta-list">
        <div class="row"><span class="label">Correo</span> <a href="mailto:hola@lumiose.studio">hola@lumiose.studio</a></div>
        <div class="row"><span class="label">Teléfono</span> (619) 555-0148</div>
        <div class="row"><span class="label">Estudio</span> North Park, San Diego, CA 92104</div>
        <div class="row"><span class="label">Horario</span> Lun–Vie · 9–6 PT</div>
      </div>
    </div>
    <form class="cform" onsubmit="event.preventDefault(); this.querySelector('.submit-row .note').textContent='Thanks — we\\\\'ll be in touch within a day.';">
      <div class="row2">
        <div class="field">
          <label>Tu nombre</label>
          <input type="text" placeholder="Jane Rivera" required />
        </div>
        <div class="field">
          <label>Negocio</label>
          <input type="text" placeholder="Barrio Coastal Café" />
        </div>
      </div>
      <div class="row2">
        <div class="field">
          <label>Correo</label>
          <input type="email" placeholder="jane@bcc.com" required />
        </div>
        <div class="field">
          <label>Teléfono</label>
          <input type="tel" placeholder="(619) 555-0128" />
        </div>
      </div>
      <div class="field">
        <label>¿Qué necesitás?</label>
        <select>
          <option>Un sitio nuevo (Corner Shop)</option>
          <option selected>Un build completo (Main Street)</option>
          <option>Algo más grande (Harbor)</option>
          <option>Solo ayuda con SEO / Ads</option>
          <option>No estoy seguro aún — hablemos</option>
        </select>
      </div>
      <div class="field">
        <label>Contanos un poco más</label>
        <textarea placeholder="Unas líneas sobre tu negocio y qué estás buscando..."></textarea>
      </div>
      <div class="submit-row">
        <span class="note mono">Respuesta en 1 día hábil · Replies within 1 business day</span>
        <button class="btn" type="submit">Enviar →</button>
      </div>
    </form>
  </div>
</section>

<!-- ===================== FOOTER ===================== -->
<footer>
  <div class="foot-inner">
    <div class="foot-brand">
      <div class="logo"><span class="mark"></span> Lumiose</div>
      <p>Un pequeño estudio web en North Park, San Diego — construyendo sitios, tiendas y sistemas de marketing para los negocios que tenemos al lado.</p>
    </div>
    <div>
      <h5>Servicios</h5>
      <ul>
        <li><a href="#services">Desarrollo web</a></li>
        <li><a href="#services">Diseño web</a></li>
        <li><a href="#services">Shopify y e-commerce</a></li>
        <li><a href="#services">SEO local</a></li>
        <li><a href="#services">Google y Meta Ads</a></li>
      </ul>
    </div>
    <div>
      <h5>Estudio</h5>
      <ul>
        <li><a href="#work">Trabajo reciente</a></li>
        <li><a href="#pricing">Precios</a></li>
        <li><a href="#contact">Contacto</a></li>
        <li><a href="#contact">Trabajá con nosotros</a></li>
      </ul>
    </div>
    <div>
      <h5>Otros</h5>
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
