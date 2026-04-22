// Spanish translation derived from body-content.en.ts. Price tokens and
// mount points are identical so the renderer can swap bodies by locale.
export const BODY_HTML = `<div id="detection-banner-mount"></div>

<!-- Top banner -->
<div class="banner">
  <a href="#contact">
    <span class="serif" style="font-style:italic">Oferta de primavera · 20% off en tu primer sitio, disponible para reservas de mayo</span>
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
    <span class="eyebrow"><span class="dot"></span> Reservando ahora · Mayo 2026</span>
    <h1 class="display">Mejores sitios web.<br/><em>Hechos para vender</em>. Punto.</h1>
    <p class="sub">Programados a mano, obsesivamente rápidos, diseñados para convertir visitas en clientes. Para negocios pequeños que ya no se conforman con "más o menos".</p>
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
        <span class="kicker">02 · Trabajo reciente</span>
        <h2 class="section-title">Algunos <em>clientes</em> para<br/>los que construimos recién.</h2>
      </div>
      <p>Pasa el mouse sobre un proyecto para ver una vista previa. Cada sitio fue diseñado y programado desde cero. Sin page builders, sin plantillas compartidas, sin atajos.</p>
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
        <span class="desc">Sitio con intake de consultas para despacho de inmigración.</span>
        <span class="tags"><span class="case-tag">Legal</span><span class="case-tag">Inmigración</span><span class="case-tag">SEO</span></span>
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
        <span class="desc">Sitio clínico con reservas online para consultorio dental familiar.</span>
        <span class="tags"><span class="case-tag">Healthcare</span><span class="case-tag">Booking</span></span>
        <span class="yr">2025</span>
      </a>
    </div>

    <div class="cases-footer">
      <span>6 de 40+ proyectos</span>
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
        <div><div class="plabel">INMIGRACIÓN</div><div class="ptitle">Sandoval <em>Law</em></div></div>
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
        <div><div class="plabel">DENTISTA FAMILIAR</div><div class="ptitle">Alvarado <em>Family</em></div></div>
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
      <span class="kicker">03 · Lo que hacemos</span>
      <h2 class="section-title">Cinco servicios,<br/>un estudio <em>implacable</em>.</h2>
    </div>
    <p>Somos un equipo pequeño de diseñadores y desarrolladores, construyendo sitios web y sistemas de marketing que trabajan duro para los negocios que nos contratan. Haz clic en cualquier fila para expandir.</p>
  </div>

  <div class="svc-index" id="svc-index">
    <div class="svc-row open" data-idx="0">
      <div class="svc-num">i.</div>
      <div class="svc-title">Desarrollo <em>web</em> <span class="svc-sub">Sitios a medida en Next.js, Astro o WordPress.</span></div>
      <div class="svc-toggle" aria-label="Toggle"></div>
      <div class="svc-expand">
        <div class="svc-expand-inner">
          <div>
            <p>Sitios programados a mano sobre stacks modernos. Rápidos, accesibles, fáciles de actualizar, y la propiedad siempre es tuya. La base sobre la que se monta todo lo demás.</p>
            <div class="svc-tags"><span>Next.js</span><span>Astro</span><span>WordPress</span><span>Headless CMS</span><span>Core Web Vitals</span></div>
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
      <div class="svc-title">SEO y <em>GEO</em> <span class="svc-sub">Rankea en Google. Y dentro de ChatGPT.</span></div>
      <div class="svc-toggle"></div>
      <div class="svc-expand">
        <div class="svc-expand-inner">
          <div>
            <p>SEO clásico (schema, plomería técnica, estrategia de contenido) más Generative Engine Optimization, para que aparezcas cuando la gente busca en Google y cuando le pregunta a ChatGPT, Perplexity o a las AI Overviews. Dos rankings, un solo playbook.</p>
            <div class="svc-tags"><span>SEO Técnico</span><span>Schema.org</span><span>AI Overviews</span><span>Contenido</span><span>Perplexity</span></div>
          </div>
          <div class="svc-visual svc-v4">
            <span class="label">◈ rank / ai</span>
            <span>Encontrado <em>dos veces</em></span>
          </div>
        </div>
      </div>
    </div>

    <div class="svc-row" data-idx="2">
      <div class="svc-num">iii.</div>
      <div class="svc-title">Google <em>Ads</em> <span class="svc-sub">Tráfico pago que convierte, no presupuesto que se quema.</span></div>
      <div class="svc-toggle"></div>
      <div class="svc-expand">
        <div class="svc-expand-inner">
          <div>
            <p>Campañas de búsqueda, Performance Max y remarketing manejadas con reporte mensual transparente. Sin fees ocultos, sin audiencias misteriosas. Solo clicks que se convierten en clientes y números que sí se pueden leer.</p>
            <div class="svc-tags"><span>Google Ads</span><span>Performance Max</span><span>GA4</span><span>Reporting</span></div>
          </div>
          <div class="svc-visual svc-v8">
            <span class="label">⌘ ads.ROI</span>
            <span>Pipeline, <em>a demanda</em></span>
          </div>
        </div>
      </div>
    </div>

    <div class="svc-row" data-idx="3">
      <div class="svc-num">iv.</div>
      <div class="svc-title">Gestión de <em>dominio</em> <span class="svc-sub">DNS, correo, SSL. La plomería, resuelta.</span></div>
      <div class="svc-toggle"></div>
      <div class="svc-expand">
        <div class="svc-expand-inner">
          <div>
            <p>Gestión completa de dominio e infraestructura: registros DNS, certificados SSL, correo profesional, redirecciones y renovaciones monitoreadas para que nada expire un viernes a las 11 de la noche. Tú duermes tranquilo, nosotros nos encargamos.</p>
            <div class="svc-tags"><span>DNS</span><span>SSL</span><span>Correo</span><span>Cloudflare</span><span>Renovaciones</span></div>
          </div>
          <div class="svc-visual svc-v7">
            <span class="label">◉ dns.ok</span>
            <span>Siempre <em>arriba</em></span>
          </div>
        </div>
      </div>
    </div>

    <div class="svc-row" data-idx="4">
      <div class="svc-num">v.</div>
      <div class="svc-title">Google <em>Business</em> <span class="svc-sub">Auditoría y gestión mensual de tu ficha del mapa, trabajando 24/7.</span></div>
      <div class="svc-toggle"></div>
      <div class="svc-expand">
        <div class="svc-expand-inner">
          <div>
            <p>Auditoría y gestión mensual de tu Google Business Profile: fotos, reseñas, publicaciones, categorías, preguntas frecuentes, áreas de servicio. La diferencia entre "aparecer en el mapa" y "aparecer primero".</p>
            <div class="svc-tags"><span>GBP</span><span>Reseñas</span><span>Google Maps</span><span>SEO Local</span></div>
          </div>
          <div class="svc-visual svc-v3">
            <span class="label">◎ gmb.live</span>
            <span>Top del <em>mapa</em></span>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div class="svc-footer">
    <span>5 servicios · 1 estudio</span>
    <a href="#contact" style="color:#111318">Iniciar un proyecto ↗</a>
  </div>
</section>

<!-- ===================== PRICING ===================== -->
<section class="block" id="pricing">
  <div style="display:flex;justify-content:space-between;align-items:end;gap:40px;flex-wrap:wrap">
    <div>
      <span class="kicker">Precios</span>
      <h2 class="section-title">Tres formas de <em>empezar</em>.<br/>Sin retainers ocultos.</h2>
    </div>
    <p style="max-width:420px;color:#3a414f;font-size:16px;line-height:1.55;margin:0">Setup + mensualidad. El setup se factura 50% al inicio, 50% al lanzar. La mensualidad cubre hosting, cuidado y actualizaciones. Cancela cuando quieras.</p>
  </div>

  <div id="region-toggle-mount"></div>

  <div class="pricing-grid">
    <div class="plan">
      <div class="pname">Corner Shop</div>
      <div class="psub">Sitio vitrina para un negocio de una sola ubicación.</div>
      <div class="price"><span class="cur">$</span>{{PRICE_CORNER_SHOP}}{{CURRENCY_SUFFIX}}</div>
      <div class="price-mo">+ \${{PRICE_CORNER_SHOP_MO}}{{CURRENCY_SUFFIX}}/mes</div>
      <ul>
        <li class="check">Hasta 5 páginas, diseñadas a medida</li>
        <li class="check">Mobile-perfect y accesible</li>
        <li class="check">Setup bilingüe (EN / ES)</li>
        <li class="check">Google Business Audit + SEO local</li>
        <li class="check">Lanza en 1 semana</li>
        <li class="upsell"><a href="#pricing">→ ¿Necesitas reservas? Ver Main Street</a></li>
      </ul>
      <div class="plan-cta"><a class="btn ghost" href="#contact" style="border-color:#111318">Empezar Corner Shop →</a></div>
    </div>

    <div class="plan featured">
      <div class="pname">Main Street <span class="badge">El más elegido</span></div>
      <div class="psub">Nuestro más popular. Un negocio creciendo, online.</div>
      <div class="price"><span class="cur">$</span>{{PRICE_MAIN_STREET}}{{CURRENCY_SUFFIX}}</div>
      <div class="price-mo">+ \${{PRICE_MAIN_STREET_MO}}{{CURRENCY_SUFFIX}}/mes</div>
      <ul>
        <li class="check">Hasta 12 páginas + CMS para blog / menú / servicios</li>
        <li class="check">Reservas, formularios, integración Stripe / Conekta</li>
        <li class="check">Setup bilingüe + pulido de contenido</li>
        <li class="check">SEO local completo + GEO (ChatGPT, AI)</li>
        <li class="check">2 semanas, 2 rondas de revisiones</li>
        <li class="check">Gestión mensual de Google Business incluida</li>
      </ul>
      <div class="plan-cta"><a class="btn" href="#contact">Reservar Main Street →</a></div>
    </div>

    <div class="plan">
      <div class="pname">Enterprise</div>
      <div class="psub">Multi-ubicación, e-commerce o integraciones custom.</div>
      <div class="price"><span class="from">Desde </span><span class="cur">$</span>{{PRICE_ENTERPRISE}}{{CURRENCY_SUFFIX}}</div>
      <div class="price-mo">+ \${{PRICE_ENTERPRISE_MO}}{{CURRENCY_SUFFIX}}/mes</div>
      <ul>
        <li class="check">Diseño custom y sucursales ilimitadas</li>
        <li class="check">Reservas nativas con calendario + pagos</li>
        <li class="check">Integraciones POS y sistemas externos</li>
        <li class="check">Correos corporativos + dashboard avanzado</li>
        <li class="check">PM dedicado + onboarding 1:1</li>
        <li class="check">Construcción de 4–6 semanas</li>
      </ul>
      <div class="plan-cta"><a class="btn ghost" href="#contact" style="border-color:#111318">Hablemos →</a></div>
    </div>
  </div>

  <p class="mono" style="text-align:center;margin-top:40px;font-size:12px;color:#6a7080;letter-spacing:.06em">
    PLANES DE MANTENIMIENTO · DESDE \${{PRICE_MAINTENANCE}}{{CURRENCY_SUFFIX}}/MES  &nbsp;·&nbsp;  GESTIÓN DE ADS · DESDE \${{PRICE_ADS}}{{CURRENCY_SUFFIX}}/MES  &nbsp;·&nbsp;  DESCUENTO ONG · 15%
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
      <span class="kicker">Escríbenos</span>
      <h2 class="section-title">Construyamos <em>algo</em><br/>que valga la pena.</h2>
      <p class="lead">Cuéntanos un poco sobre tu negocio y te respondemos en un día hábil. Cotización gratis. Sin presión. Sin trucos de venta.</p>
      <div class="meta-list">
        <div class="row"><span class="label">Correo</span> <a href="mailto:hola@lumiose.studio">hola@lumiose.studio</a></div>
        <div class="row"><span class="label">Teléfono</span> (619) 555-0148</div>
        <div class="row"><span class="label">Estudio</span> North Park, San Diego, CA 92104</div>
        <div class="row"><span class="label">Horario</span> Lun–Vie · 9–6 PT</div>
      </div>
    </div>
    <form class="cform" onsubmit="event.preventDefault(); this.querySelector('.submit-row .note').textContent='Thanks! We\\\\'ll be in touch within a day.';">
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
        <label>¿Qué necesitas?</label>
        <select>
          <option>Un sitio nuevo (Corner Shop)</option>
          <option selected>Un build completo (Main Street)</option>
          <option>Algo más grande (Enterprise)</option>
          <option>Solo ayuda con SEO / Ads</option>
          <option>No estoy seguro aún, hablemos</option>
        </select>
      </div>
      <div class="field">
        <label>Cuéntanos un poco más</label>
        <textarea placeholder="Unas líneas sobre tu negocio y qué estás buscando..."></textarea>
      </div>
      <div class="submit-row">
        <span class="note mono">Respuesta en 1 día hábil</span>
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
      <p>Un pequeño estudio web en North Park, San Diego, construyendo sitios, tiendas y sistemas de marketing para los negocios que tenemos al lado.</p>
    </div>
    <div>
      <h5>Servicios</h5>
      <ul>
        <li><a href="#services">Desarrollo web</a></li>
        <li><a href="#services">SEO y GEO</a></li>
        <li><a href="#services">Google Ads</a></li>
        <li><a href="#services">Gestión de dominio</a></li>
        <li><a href="#services">Google Business</a></li>
      </ul>
    </div>
    <div>
      <h5>Estudio</h5>
      <ul>
        <li><a href="#work">Trabajo reciente</a></li>
        <li><a href="#pricing">Precios</a></li>
        <li><a href="#contact">Contacto</a></li>
        <li><a href="#contact">Trabaja con nosotros</a></li>
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
    <span>HECHO CON ☀ + ☕</span>
  </div>
</footer>



`;
