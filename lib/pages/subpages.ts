import type { Locale } from '@/lib/i18n/config';

export type PageType = 'city' | 'service' | 'industry';

export type SubpageContent = {
  slug: string;
  type: PageType;
  title: string;
  description: string;
  hero: {
    eyebrow: string;
    h1Pre: string;
    h1Em: string;
    lead: string;
  };
  sections: Array<{
    eyebrow?: string;
    heading: string;
    bodyHtml: string;
  }>;
  finalCta: {
    heading: string;
    sub: string;
    button: string;
  };
  relatedSlugs?: string[];
  schemaArea?: {
    addressLocality?: string;
    addressRegion?: string;
    addressCountry?: string;
  };
  faqs?: Array<{ q: string; a: string }>;
  faqHeading?: string;
};

const ES: Record<string, SubpageContent> = {
  // ========== CITIES ==========
  mexicali: {
    slug: 'mexicali',
    type: 'city',
    title: 'Diseño Web en Mexicali · Estudio Bilingüe — Lumiose',
    description:
      'Estudio de diseño web en Mexicali, BC. Sitios programados a mano para negocios locales: rápidos, bilingües, listos para SEO. Cotización gratis en 1 día hábil.',
    hero: {
      eyebrow: '● MEXICALI · BAJA CALIFORNIA',
      h1Pre: 'Sitios web hechos en Mexicali,',
      h1Em: 'para negocios de Mexicali.',
      lead: 'Somos un estudio local que entiende el mercado fronterizo. Construimos sitios bilingües, listos para SEO, que convierten visitas en clientes en ambos lados de la línea — sin templates de Wix ni excusas de "más o menos".',
    },
    sections: [
      {
        eyebrow: 'POR QUÉ LOCAL',
        heading: 'Un sitio hecho aquí entiende a tu cliente.',
        bodyHtml:
          '<p>Cuando trabajas con un estudio en Guadalajara o Tijuana, tu sitio sale en español genérico, sin contexto del Valle Imperial. Nosotros vivimos esto: sabemos que tu cliente busca en español pero quiere precios en pesos, que cruza por Calexico, que pregunta por WhatsApp antes de llamar.</p><p>Cada decisión — desde qué ciudad mostrar primero hasta cómo formatear los teléfonos — la tomamos con tu cliente fronterizo en mente.</p>',
      },
      {
        eyebrow: 'QUÉ INCLUYE',
        heading: 'Lo que entregamos en Mexicali.',
        bodyHtml:
          '<ul><li><strong>Sitio bilingüe</strong> con switch ES/EN automático según la geolocalización</li><li><strong>SEO local</strong>: schema LocalBusiness, optimización para Google Maps, citaciones en directorios mexicanos</li><li><strong>Integración con WhatsApp Business</strong> — cada CTA puede abrir un chat directo</li><li><strong>Hosting global</strong> con CDN edge en San José y Querétaro: carga sub-segundo en cualquier lado de la frontera</li><li><strong>Soporte en español</strong> directo con quien diseña tu sitio. Sin tickets ni intermediarios.</li></ul>',
      },
      {
        eyebrow: 'NEGOCIOS QUE ATENDEMOS',
        heading: 'Para quién funciona mejor.',
        bodyHtml:
          '<p>Restaurantes con sucursal en ambos lados. Abogados de inmigración. Inmobiliarias del corredor Mexicali–Calexico. Médicos especialistas atendiendo pacientes de ambos países. Estudios y agencias chicas que quieren verse como las grandes sin pagar como las grandes.</p>',
      },
    ],
    finalCta: {
      heading: 'Cuéntanos sobre tu negocio en Mexicali.',
      sub: 'Cotización gratis en 1 día hábil. Sin presión, sin trucos de venta.',
      button: 'Iniciar un proyecto →',
    },
    relatedSlugs: ['calexico', 'diseno-web', 'restaurantes'],
    schemaArea: { addressLocality: 'Mexicali', addressRegion: 'BC', addressCountry: 'MX' },
  },

  calexico: {
    slug: 'calexico',
    type: 'city',
    title: 'Diseño Web en Calexico, CA · Estudio Bilingüe — Lumiose',
    description:
      'Estudio bilingüe sirviendo a Calexico y el Valle Imperial. Sitios web programados a mano, optimizados para SEO local en inglés y español. Cotización gratis.',
    hero: {
      eyebrow: '● CALEXICO · IMPERIAL VALLEY',
      h1Pre: 'Sitios bilingües para',
      h1Em: 'el Valle Imperial.',
      lead: 'Calexico, El Centro, Brawley, Imperial. Un mercado donde la mitad de tus clientes buscan en inglés y la otra mitad en español. Construimos sitios que rankean en los dos idiomas y entienden el contexto fronterizo.',
    },
    sections: [
      {
        eyebrow: 'PORQUÉ NOSOTROS',
        heading: 'Estudio bilingüe, sin traductor de Google.',
        bodyHtml:
          '<p>La mayoría de los sitios "bilingües" del Valle son traducciones automáticas con errores que ahuyentan al cliente en su idioma nativo. Nosotros escribimos cada lado con voz propia: el inglés suena como inglés, el español suena como español. Mismo sitio, dos cabezas trabajándolo.</p>',
      },
      {
        eyebrow: 'QUÉ INCLUYE',
        heading: 'Lo que entregamos en Calexico.',
        bodyHtml:
          '<ul><li>Sitio bilingüe con SEO en inglés <em>y</em> español, hreflang correcto, sitemap por idioma</li><li>Optimización para Google Business Profile en Calexico — para que aparezcas en el map pack local</li><li>Integración con sistemas en USD y MXN si vendes en ambos lados</li><li>Hosting con CDN edge en San José: latencia mínima desde el Valle</li><li>Atención bilingüe directa — escríbenos en el idioma que prefieras</li></ul>',
      },
      {
        eyebrow: 'INDUSTRIAS',
        heading: 'Para quién funciona.',
        bodyHtml:
          '<p>Restaurantes con clientela cross-border. Inmobiliarias vendiendo en USD y MXN. Lawyers especializados en inmigración. Médicos con pacientes de ambos países. Tiendas y agricultores que envían productos a ambos lados.</p>',
      },
    ],
    finalCta: {
      heading: 'Tell us about your Calexico business.',
      sub: 'Free quote within one business day. Hablamos español también.',
      button: 'Start a project →',
    },
    relatedSlugs: ['mexicali', 'web-design', 'restaurants'],
    schemaArea: { addressLocality: 'Calexico', addressRegion: 'CA', addressCountry: 'US' },
  },

  // ========== SERVICES ==========
  'diseno-web': {
    slug: 'diseno-web',
    type: 'service',
    title: 'Diseño y Desarrollo Web a Medida — Lumiose',
    description:
      'Diseño y desarrollo web hecho a mano con Next.js. Sitios obsesivamente rápidos, optimizados para conversión, con CMS si lo necesitas. Cotización gratis.',
    hero: {
      eyebrow: '● DISEÑO · DESARROLLO',
      h1Pre: 'Sitios programados a mano,',
      h1Em: 'obsesivamente rápidos.',
      lead: 'Nada de Wix, Squarespace, ni templates de WordPress. Cada línea de código la escribimos nosotros, con Next.js en Vercel, optimizada para Core Web Vitals reales y para que tu cliente convierta.',
    },
    sections: [
      {
        eyebrow: 'EL PROCESO',
        heading: 'Cómo trabajamos.',
        bodyHtml:
          '<ul><li><strong>Día 1–3:</strong> Brief + auditoría de tu sitio actual y de tus 3 competidores principales</li><li><strong>Semana 1:</strong> Wireframes y arquitectura de la información. Aprobamos juntos antes de tocar pixel</li><li><strong>Semanas 2–3:</strong> Diseño visual completo en Figma. Iteramos hasta que esté</li><li><strong>Semanas 4–5:</strong> Build en Next.js + Vercel. Animaciones, responsive, contenido</li><li><strong>Semana 6:</strong> QA, SEO técnico, integración de analytics, lanzamiento</li></ul>',
      },
      {
        eyebrow: 'QUÉ INCLUYE',
        heading: 'Sin sorpresas en la factura.',
        bodyHtml:
          '<ul><li>Diseño visual original (no templates)</li><li>Código a medida en Next.js, deployado en Vercel</li><li>Optimización Core Web Vitals (LCP &lt; 2s, INP &lt; 200ms)</li><li>SEO técnico: schema, sitemap, robots, meta, hreflang</li><li>Mobile-first responsive en todos los breakpoints</li><li>Accesibilidad WCAG AA</li><li>3 rondas de revisión incluidas</li><li>30 días de soporte post-lanzamiento</li></ul>',
      },
    ],
    finalCta: {
      heading: 'Cuéntanos qué quieres construir.',
      sub: 'Cotización gratis en 1 día hábil.',
      button: 'Pedir cotización →',
    },
    relatedSlugs: ['seo', 'infraestructura', 'mexicali'],
  },

  seo: {
    slug: 'seo',
    type: 'service',
    title: 'SEO Técnico y Local — Lumiose',
    description:
      'SEO técnico, local y para AI Search (ChatGPT, Perplexity). Auditorías profundas, schema, Core Web Vitals, contenido. Para negocios que quieren rankear de verdad.',
    hero: {
      eyebrow: '● SEO · GEO',
      h1Pre: 'SEO técnico hecho bien,',
      h1Em: 'sin humo de agencia.',
      lead: 'Auditamos tu sitio con datos reales (CrUX, GSC, Lighthouse), arreglamos lo que importa, y escribimos contenido que tu cliente busca de verdad. Reporte mensual transparente, sin "estamos trabajando en backlinks".',
    },
    sections: [
      {
        eyebrow: 'QUÉ INCLUYE',
        heading: 'SEO técnico + on-page + local + GEO.',
        bodyHtml:
          '<ul><li><strong>Auditoría inicial</strong> de 80+ puntos: indexabilidad, schema, Core Web Vitals, hreflang, contenido, backlinks</li><li><strong>Implementación</strong> de schema.org (LocalBusiness, Service, FAQ, Review)</li><li><strong>Optimización Core Web Vitals</strong> hasta verde en CrUX field data</li><li><strong>Local SEO</strong>: GBP, NAP, citaciones, schema con areaServed</li><li><strong>GEO (AI Search)</strong>: llms.txt, contenido citable para ChatGPT/Perplexity/AI Overviews</li><li><strong>Contenido</strong>: páginas de servicio, ciudad, industria con keywords reales</li></ul>',
      },
      {
        eyebrow: 'CÓMO REPORTAMOS',
        heading: 'Reporte mensual con números reales.',
        bodyHtml:
          '<p>Cada mes recibes un reporte con: posiciones de Search Console (no Ahrefs), tráfico orgánico de GA4, Core Web Vitals de CrUX, lista de qué hicimos y qué viene. Sin métricas de vanidad, sin "DA aumentó".</p>',
      },
    ],
    finalCta: {
      heading: '¿Quieres una auditoría gratis?',
      sub: 'Te damos un reporte de 5 puntos críticos sin compromiso.',
      button: 'Pedir auditoría →',
    },
    relatedSlugs: ['diseno-web', 'consultoria', 'publicidad-digital'],
  },

  'publicidad-digital': {
    slug: 'publicidad-digital',
    type: 'service',
    title: 'Google Ads y Performance Max — Lumiose',
    description:
      'Campañas de Google Ads y Performance Max manejadas con reporte transparente. Sin fees ocultos, sin audiencias misteriosas. Solo clicks que convierten.',
    hero: {
      eyebrow: '● ADS · PERFORMANCE',
      h1Pre: 'Ads sin humo,',
      h1Em: 'reportes que sí se leen.',
      lead: 'Búsqueda, Performance Max, remarketing, Display. Optimizados mes a mes con tu CAC y LTV reales. Cero "está corriendo bien", solo números.',
    },
    sections: [
      {
        eyebrow: 'QUÉ INCLUYE',
        heading: 'Setup, optimización y reporte.',
        bodyHtml:
          '<ul><li>Auditoría de tu cuenta actual (si la tienes) o setup desde cero</li><li>Investigación de keywords + análisis de competencia</li><li>Estructura de campañas: Search, P-Max, Display, Remarketing</li><li>Conversion tracking server-side (no se cae con iOS 17)</li><li>Optimización semanal: pujas, negativas, audiencias</li><li>Reporte mensual con CAC, LTV, ROAS — no impresiones</li></ul>',
      },
      {
        eyebrow: 'SIN FEES OCULTOS',
        heading: 'Cobramos por trabajo, no por % de ad spend.',
        bodyHtml:
          '<p>La industria cobra 15–20% del ad spend. Nosotros cobramos un fee fijo mensual por las horas que metimos. Si gastas más en ads, no nos beneficia más. Solo trabajamos para que conviertas mejor.</p>',
      },
    ],
    finalCta: {
      heading: 'Cuéntanos tu CAC actual.',
      sub: 'Te decimos si podemos bajarlo antes de cobrar nada.',
      button: 'Análisis gratis →',
    },
    relatedSlugs: ['seo', 'diseno-web', 'consultoria'],
  },

  infraestructura: {
    slug: 'infraestructura',
    type: 'service',
    title: 'Infraestructura Web: Dominio, DNS, SSL, Email — Lumiose',
    description:
      'Gestión completa de tu infraestructura web: dominio, DNS, SSL, correo profesional, redirecciones, monitoreo. Tú duermes, nosotros nos encargamos.',
    hero: {
      eyebrow: '● DNS · SSL · EMAIL',
      h1Pre: 'La plomería web,',
      h1Em: 'monitoreada.',
      lead: 'Dominio, DNS, SSL, correo profesional, redirecciones, renovaciones, hosting. Todo lo que se rompe a las 11pm de un viernes — nosotros lo agarramos antes que tú te enteres.',
    },
    sections: [
      {
        eyebrow: 'QUÉ INCLUYE',
        heading: 'Setup + monitoreo continuo.',
        bodyHtml:
          '<ul><li><strong>Dominio</strong>: registro, transferencia, configuración, renovación automática</li><li><strong>DNS</strong>: configuración con Cloudflare, registros A/CNAME/MX/TXT, propagación</li><li><strong>SSL</strong>: certificados Let\'s Encrypt o Cloudflare, renovación automática</li><li><strong>Correo</strong>: setup de Google Workspace, Proton Mail, o Resend para transaccionales</li><li><strong>Redirects</strong>: 301s desde URLs viejas, manejo de migraciones</li><li><strong>Monitoreo</strong>: alertas si tu sitio cae, expira algo, o cambia DNS</li></ul>',
      },
    ],
    finalCta: {
      heading: '¿Algo a punto de expirar?',
      sub: 'Auditamos tu setup gratis. Si encontramos algo crítico, te avisamos.',
      button: 'Auditar mi setup →',
    },
    relatedSlugs: ['diseno-web', 'consultoria'],
  },

  consultoria: {
    slug: 'consultoria',
    type: 'service',
    title: 'Consultoría Web y SEO — Lumiose',
    description:
      'Sesiones de consultoría: auditoría técnica, segunda opinión, plan de SEO, estrategia digital. Sin compromiso de retainer, paga por sesión.',
    hero: {
      eyebrow: '● CONSULTORÍA · ESTRATEGIA',
      h1Pre: 'Segunda opinión,',
      h1Em: 'sin retainer.',
      lead: 'Si ya tienes equipo o agencia y solo necesitas una segunda opinión, una auditoría profunda, o un plan de 6 meses — te ayudamos en sesiones puntuales. Sin compromiso largo, sin contratos.',
    },
    sections: [
      {
        eyebrow: 'TIPOS DE SESIÓN',
        heading: 'Cómo trabajamos.',
        bodyHtml:
          '<ul><li><strong>Auditoría técnica</strong> (4h): revisión profunda con reporte priorizado</li><li><strong>Segunda opinión</strong> (1h): te traemos a una llamada con tu equipo o agencia para validar/cuestionar</li><li><strong>Plan de SEO</strong> (8h): estrategia de 6–12 meses con roadmap y entregables</li><li><strong>Office hours</strong> (mensual): 2h al mes, lo que necesites — ads, SEO, dev, infraestructura</li></ul>',
      },
    ],
    finalCta: {
      heading: '¿Qué decisión quieres validar?',
      sub: 'Cuéntanos el contexto y te decimos si podemos ayudar.',
      button: 'Agendar sesión →',
    },
    relatedSlugs: ['seo', 'diseno-web', 'publicidad-digital'],
  },

  // ========== INDUSTRIES ==========
  restaurantes: {
    slug: 'restaurantes',
    type: 'industry',
    title: 'Sitios Web para Restaurantes — Lumiose',
    description:
      'Diseño web para restaurantes: menú dinámico, reservaciones, fotos que dan hambre, integración con Toast/Square. Bilingüe ES/EN. Cotización gratis.',
    hero: {
      eyebrow: '● RESTAURANTES · F&B',
      h1Pre: 'Sitios para restaurantes',
      h1Em: 'que sí dan hambre.',
      lead: 'Menú actualizable sin tocar código, fotos optimizadas que cargan instantáneo, reservaciones integradas con OpenTable o Resy, integración con Toast / Square / Shopify para órdenes online. Todo en un sitio que carga en 1 segundo.',
    },
    sections: [
      {
        eyebrow: 'QUÉ INCLUYE',
        heading: 'Lo que un restaurante necesita.',
        bodyHtml:
          '<ul><li>Menú dinámico con CMS — actualizas precios sin llamarnos</li><li>Galería de fotos optimizada (WebP, lazy loading, sin caída de velocidad)</li><li>Reservaciones integradas con OpenTable, Resy, o tu propio sistema</li><li>Órdenes online con Toast, Square, o Shopify</li><li>Schema.org Restaurant + Menu para que aparezcas con menú en Google</li><li>Click-to-call y WhatsApp prominentes</li><li>Bilingüe ES/EN si tu clientela lo necesita</li></ul>',
      },
      {
        eyebrow: 'SEO LOCAL',
        heading: 'Para que te encuentren cuando buscan "restaurantes cerca".',
        bodyHtml:
          '<p>Optimizamos tu Google Business Profile, agregamos schema LocalBusiness con coordenadas y horarios, sincronizamos NAP en directorios, y construimos páginas dedicadas para keywords como "restaurante italiano Mexicali" o "best tacos Calexico".</p>',
      },
    ],
    finalCta: {
      heading: 'Cuéntanos sobre tu restaurante.',
      sub: 'Cotización gratis en 1 día hábil.',
      button: 'Pedir cotización →',
    },
    relatedSlugs: ['mexicali', 'calexico', 'diseno-web'],
  },

  abogados: {
    slug: 'abogados',
    type: 'industry',
    title: 'Sitios Web para Abogados y Despachos — Lumiose',
    description:
      'Diseño web para abogados y despachos: trust signals, áreas de práctica, formularios de intake seguros, bilingüe. Optimizado para SEO legal.',
    hero: {
      eyebrow: '● LEGAL · INTAKE',
      h1Pre: 'Sitios para abogados',
      h1Em: 'que generan intake real.',
      lead: 'Áreas de práctica claras, casos representativos (con consentimiento), credenciales prominentes, formularios de intake con encriptación. Diseñados para que el cliente potencial sienta confianza antes de levantar el teléfono.',
    },
    sections: [
      {
        eyebrow: 'QUÉ INCLUYE',
        heading: 'Lo que un despacho necesita.',
        bodyHtml:
          '<ul><li>Páginas individuales por área de práctica con SEO local (ej. "abogado de inmigración Mexicali")</li><li>Bios de abogados con educación, barras, idiomas, áreas</li><li>Casos representativos / testimonios (cuando hay consentimiento)</li><li>Formulario de intake con encriptación TLS y captura segura de info confidencial</li><li>Schema Attorney + LegalService para SEO legal</li><li>Bilingüe ES/EN (crítico para clientes hispanos)</li><li>Cumplimiento ABA + bar advertising rules de tu estado</li></ul>',
      },
    ],
    finalCta: {
      heading: 'Cuéntanos sobre tu despacho.',
      sub: 'Auditamos tu sitio actual gratis. Te decimos qué pierdes en intake.',
      button: 'Auditoría legal gratis →',
    },
    relatedSlugs: ['mexicali', 'calexico', 'seo'],
  },

  inmobiliarias: {
    slug: 'inmobiliarias',
    type: 'industry',
    title: 'Sitios Web para Inmobiliarias — Lumiose',
    description:
      'Sitios para inmobiliarias y agentes: catálogo de propiedades, IDX/MLS, captura de leads, búsqueda por mapa. Bilingüe USD/MXN para mercado fronterizo.',
    hero: {
      eyebrow: '● REAL ESTATE · IDX',
      h1Pre: 'Sitios para inmobiliarias',
      h1Em: 'del mercado fronterizo.',
      lead: 'Catálogo de propiedades en USD y MXN, búsqueda por mapa, integración con MLS/IDX, captura de leads optimizada, fotos que cargan instantáneo. Para agentes que venden en ambos lados de la frontera.',
    },
    sections: [
      {
        eyebrow: 'QUÉ INCLUYE',
        heading: 'Lo que una inmobiliaria necesita.',
        bodyHtml:
          '<ul><li>Catálogo de propiedades con CMS o integración MLS/IDX</li><li>Búsqueda por mapa, filtros de precio, recámaras, m²/sqft</li><li>Precios en USD y MXN con tipo de cambio dinámico</li><li>Schema RealEstateListing para Google Real Estate</li><li>Captura de leads con formularios cortos + WhatsApp</li><li>Páginas dedicadas por colonia / city / neighborhood (clave para SEO local)</li><li>Bilingüe ES/EN — fundamental para corredor binacional</li></ul>',
      },
    ],
    finalCta: {
      heading: 'Cuéntanos sobre tu cartera.',
      sub: 'Cotización gratis en 1 día hábil.',
      button: 'Pedir cotización →',
    },
    relatedSlugs: ['mexicali', 'calexico', 'diseno-web'],
  },
};

const EN: Record<string, SubpageContent> = {
  // ========== CITIES ==========
  mexicali: {
    slug: 'mexicali',
    type: 'city',
    title: 'Web Design in Mexicali, BC · Bilingual Studio — Lumiose',
    description:
      'Web design studio in Mexicali, BC. Hand-coded sites for local businesses: fast, bilingual, SEO-ready. Free quote within one business day.',
    hero: {
      eyebrow: '● MEXICALI · BAJA CALIFORNIA',
      h1Pre: 'Sites built in Mexicali,',
      h1Em: 'for Mexicali businesses.',
      lead: "We're a local studio that gets the border market. We build bilingual, SEO-ready sites that convert visitors into customers on both sides of the line — no Wix templates, no \"good enough\" excuses.",
    },
    sections: [
      {
        eyebrow: 'WHY LOCAL',
        heading: 'A site built here understands your customer.',
        bodyHtml:
          '<p>When you hire a studio in Guadalajara or Tijuana, your site comes back in generic Spanish without context. We live this market: we know your customer searches in Spanish but wants USD prices, crosses through Calexico, and prefers WhatsApp before calling.</p><p>Every decision — from which city to feature first to how phone numbers are formatted — is made with your border customer in mind.</p>',
      },
      {
        eyebrow: 'WHAT WE DELIVER',
        heading: 'What we ship in Mexicali.',
        bodyHtml:
          '<ul><li><strong>Bilingual site</strong> with automatic ES/EN switching by geo</li><li><strong>Local SEO</strong>: LocalBusiness schema, Maps optimization, Mexican directory citations</li><li><strong>WhatsApp Business integration</strong> — every CTA can open a direct chat</li><li><strong>Global hosting</strong> with edge CDN in San Jose and Querétaro: sub-second load on either side of the border</li><li><strong>Spanish-language support</strong> directly with the people who built your site. No tickets, no middlemen.</li></ul>',
      },
      {
        eyebrow: 'WHO WE WORK WITH',
        heading: 'Who this fits.',
        bodyHtml:
          '<p>Restaurants with locations on both sides. Immigration lawyers. Real estate brokerages along the Mexicali–Calexico corridor. Specialty doctors serving patients from both countries. Small studios and agencies that want to look like the big ones without paying like them.</p>',
      },
    ],
    finalCta: {
      heading: 'Tell us about your Mexicali business.',
      sub: 'Free quote within one business day. No pressure, no sales tricks.',
      button: 'Start a project →',
    },
    relatedSlugs: ['calexico', 'web-design', 'restaurants'],
    schemaArea: { addressLocality: 'Mexicali', addressRegion: 'BC', addressCountry: 'MX' },
  },

  calexico: {
    slug: 'calexico',
    type: 'city',
    title: 'Web Design in Calexico, CA · Bilingual Studio — Lumiose',
    description:
      'Bilingual studio serving Calexico and the Imperial Valley. Hand-coded websites optimized for local SEO in English and Spanish. Free quote.',
    hero: {
      eyebrow: '● CALEXICO · IMPERIAL VALLEY',
      h1Pre: 'Bilingual sites for the',
      h1Em: 'Imperial Valley.',
      lead: 'Calexico, El Centro, Brawley, Imperial. A market where half your customers search in English and half in Spanish. We build sites that rank in both languages and understand the cross-border context.',
    },
    sections: [
      {
        eyebrow: 'WHY US',
        heading: 'Bilingual studio, no Google Translate.',
        bodyHtml:
          '<p>Most "bilingual" sites in the Valley are auto-translations with errors that scare away customers in their native language. We write each side with its own voice: English sounds like English, Spanish sounds like Spanish. Same site, two heads working it.</p>',
      },
      {
        eyebrow: 'WHAT WE DELIVER',
        heading: 'What we ship in Calexico.',
        bodyHtml:
          "<ul><li>Bilingual site with SEO in English <em>and</em> Spanish, correct hreflang, per-language sitemap</li><li>Google Business Profile optimization for Calexico — show up in the local map pack</li><li>USD and MXN price integration if you sell on both sides</li><li>Edge CDN hosting in San Jose: minimum latency from anywhere in the Valley</li><li>Bilingual support — write to us in whichever language you prefer</li></ul>",
      },
      {
        eyebrow: 'INDUSTRIES',
        heading: 'Who this fits.',
        bodyHtml:
          '<p>Restaurants with cross-border clientele. Brokerages selling in USD and MXN. Lawyers specialized in immigration. Doctors with patients from both countries. Stores and farms shipping to both sides.</p>',
      },
    ],
    finalCta: {
      heading: 'Tell us about your Calexico business.',
      sub: 'Free quote within one business day. Hablamos español también.',
      button: 'Start a project →',
    },
    relatedSlugs: ['mexicali', 'web-design', 'restaurants'],
    schemaArea: { addressLocality: 'Calexico', addressRegion: 'CA', addressCountry: 'US' },
  },

  // ========== SERVICES ==========
  'web-design': {
    slug: 'web-design',
    type: 'service',
    title: 'Custom Web Design and Development — Lumiose',
    description:
      'Hand-coded web design and development with Next.js. Obsessively fast websites optimized for conversion, with CMS if needed. Free quote.',
    hero: {
      eyebrow: '● DESIGN · DEVELOPMENT',
      h1Pre: 'Hand-coded websites,',
      h1Em: 'obsessively fast.',
      lead: "No Wix, no Squarespace, no WordPress templates. Every line of code we write ourselves with Next.js on Vercel, optimized for real Core Web Vitals and for your customer to convert.",
    },
    sections: [
      {
        eyebrow: 'THE PROCESS',
        heading: 'How we work.',
        bodyHtml:
          '<ul><li><strong>Days 1–3:</strong> Brief + audit of your current site and three main competitors</li><li><strong>Week 1:</strong> Wireframes and information architecture. We approve together before touching pixels</li><li><strong>Weeks 2–3:</strong> Full visual design in Figma. We iterate until it lands</li><li><strong>Weeks 4–5:</strong> Build in Next.js + Vercel. Animations, responsive, content</li><li><strong>Week 6:</strong> QA, technical SEO, analytics integration, launch</li></ul>',
      },
      {
        eyebrow: 'WHAT WE DELIVER',
        heading: 'No surprises on the invoice.',
        bodyHtml:
          '<ul><li>Original visual design (no templates)</li><li>Custom Next.js code, deployed on Vercel</li><li>Core Web Vitals optimization (LCP &lt; 2s, INP &lt; 200ms)</li><li>Technical SEO: schema, sitemap, robots, meta, hreflang</li><li>Mobile-first responsive across all breakpoints</li><li>WCAG AA accessibility</li><li>3 rounds of revisions included</li><li>30 days of post-launch support</li></ul>',
      },
    ],
    finalCta: {
      heading: 'Tell us what you want to build.',
      sub: 'Free quote within one business day.',
      button: 'Get a quote →',
    },
    relatedSlugs: ['seo', 'infrastructure', 'calexico'],
  },

  seo: {
    slug: 'seo',
    type: 'service',
    title: 'Technical and Local SEO — Lumiose',
    description:
      'Technical, local, and AI-search SEO (ChatGPT, Perplexity). Deep audits, schema, Core Web Vitals, content. For businesses serious about ranking.',
    hero: {
      eyebrow: '● SEO · GEO',
      h1Pre: 'Technical SEO done right,',
      h1Em: 'no agency smoke.',
      lead: "We audit your site with real data (CrUX, GSC, Lighthouse), fix what matters, and write content your customer actually searches for. Transparent monthly report, no \"working on backlinks\" updates.",
    },
    sections: [
      {
        eyebrow: 'WHAT WE DELIVER',
        heading: 'Technical + on-page + local + GEO.',
        bodyHtml:
          '<ul><li><strong>Initial audit</strong> across 80+ checkpoints: indexability, schema, Core Web Vitals, hreflang, content, backlinks</li><li><strong>Schema.org implementation</strong> (LocalBusiness, Service, FAQ, Review)</li><li><strong>Core Web Vitals optimization</strong> until green in CrUX field data</li><li><strong>Local SEO</strong>: GBP, NAP, citations, schema with areaServed</li><li><strong>GEO (AI search)</strong>: llms.txt, citable content for ChatGPT/Perplexity/AI Overviews</li><li><strong>Content</strong>: service, city, and industry pages targeting real keywords</li></ul>',
      },
      {
        eyebrow: 'HOW WE REPORT',
        heading: 'Monthly report with real numbers.',
        bodyHtml:
          '<p>Each month you get a report with: Search Console positions (not Ahrefs), GA4 organic traffic, CrUX Core Web Vitals, list of what we did and what\'s next. No vanity metrics, no "DA increased."</p>',
      },
    ],
    finalCta: {
      heading: 'Want a free audit?',
      sub: "We'll send a 5-point critical findings report, no commitment.",
      button: 'Request audit →',
    },
    relatedSlugs: ['web-design', 'consulting', 'digital-ads'],
  },

  'digital-ads': {
    slug: 'digital-ads',
    type: 'service',
    title: 'Google Ads and Performance Max — Lumiose',
    description:
      'Google Ads and Performance Max campaigns managed with transparent reporting. No hidden fees, no mystery audiences. Just clicks that convert.',
    hero: {
      eyebrow: '● ADS · PERFORMANCE',
      h1Pre: 'Ads without smoke,',
      h1Em: 'reports you can actually read.',
      lead: 'Search, Performance Max, remarketing, Display. Optimized monthly with your real CAC and LTV. Zero "running well" — just numbers.',
    },
    sections: [
      {
        eyebrow: 'WHAT WE DELIVER',
        heading: 'Setup, optimization, and reporting.',
        bodyHtml:
          '<ul><li>Audit of your current account (if you have one) or setup from scratch</li><li>Keyword research + competitive analysis</li><li>Campaign structure: Search, P-Max, Display, Remarketing</li><li>Server-side conversion tracking (doesn\'t break with iOS 17)</li><li>Weekly optimization: bids, negatives, audiences</li><li>Monthly report with CAC, LTV, ROAS — not impressions</li></ul>',
      },
      {
        eyebrow: 'NO HIDDEN FEES',
        heading: 'We charge for work, not % of ad spend.',
        bodyHtml:
          "<p>The industry charges 15–20% of ad spend. We charge a flat monthly fee for the hours we put in. If you spend more on ads, we don't benefit more. We only work to make you convert better.</p>",
      },
    ],
    finalCta: {
      heading: 'Tell us your current CAC.',
      sub: "We'll tell you if we can lower it before charging anything.",
      button: 'Free analysis →',
    },
    relatedSlugs: ['seo', 'web-design', 'consulting'],
  },

  infrastructure: {
    slug: 'infrastructure',
    type: 'service',
    title: 'Web Infrastructure: Domain, DNS, SSL, Email — Lumiose',
    description:
      'Full management of your web infrastructure: domain, DNS, SSL, professional email, redirects, monitoring. You sleep, we handle the plumbing.',
    hero: {
      eyebrow: '● DNS · SSL · EMAIL',
      h1Pre: 'The web plumbing,',
      h1Em: 'monitored.',
      lead: 'Domain, DNS, SSL, professional email, redirects, renewals, hosting. Everything that breaks at 11pm on a Friday — we catch it before you find out.',
    },
    sections: [
      {
        eyebrow: 'WHAT WE DELIVER',
        heading: 'Setup + ongoing monitoring.',
        bodyHtml:
          '<ul><li><strong>Domain</strong>: registration, transfer, configuration, auto-renewal</li><li><strong>DNS</strong>: Cloudflare setup, A/CNAME/MX/TXT records, propagation</li><li><strong>SSL</strong>: Let\'s Encrypt or Cloudflare certs, auto-renewal</li><li><strong>Email</strong>: Google Workspace, Proton Mail, or Resend for transactional</li><li><strong>Redirects</strong>: 301s from old URLs, migration handling</li><li><strong>Monitoring</strong>: alerts when your site goes down, something expires, or DNS changes</li></ul>',
      },
    ],
    finalCta: {
      heading: 'Anything about to expire?',
      sub: "We'll audit your setup for free. If we find something critical, we'll let you know.",
      button: 'Audit my setup →',
    },
    relatedSlugs: ['web-design', 'consulting'],
  },

  consulting: {
    slug: 'consulting',
    type: 'service',
    title: 'Web and SEO Consulting — Lumiose',
    description:
      'Consulting sessions: technical audit, second opinion, SEO plan, digital strategy. No retainer commitment, pay per session.',
    hero: {
      eyebrow: '● CONSULTING · STRATEGY',
      h1Pre: 'Second opinion,',
      h1Em: 'no retainer.',
      lead: 'If you already have a team or agency and just need a second opinion, a deep audit, or a 6-month plan — we help in one-off sessions. No long commitment, no contracts.',
    },
    sections: [
      {
        eyebrow: 'SESSION TYPES',
        heading: 'How we work.',
        bodyHtml:
          '<ul><li><strong>Technical audit</strong> (4h): deep review with prioritized report</li><li><strong>Second opinion</strong> (1h): we join a call with your team or agency to validate / push back</li><li><strong>SEO plan</strong> (8h): 6–12 month strategy with roadmap and deliverables</li><li><strong>Office hours</strong> (monthly): 2h per month, whatever you need — ads, SEO, dev, infrastructure</li></ul>',
      },
    ],
    finalCta: {
      heading: 'What decision are you trying to validate?',
      sub: "Tell us the context and we'll say if we can help.",
      button: 'Book a session →',
    },
    relatedSlugs: ['seo', 'web-design', 'digital-ads'],
  },

  // ========== INDUSTRIES ==========
  restaurants: {
    slug: 'restaurants',
    type: 'industry',
    title: 'Websites for Restaurants — Lumiose',
    description:
      'Web design for restaurants: dynamic menu, reservations, hunger-inducing photos, Toast/Square integration. Bilingual ES/EN. Free quote.',
    hero: {
      eyebrow: '● RESTAURANTS · F&B',
      h1Pre: 'Restaurant sites that',
      h1Em: 'actually make you hungry.',
      lead: 'Updatable menu without touching code, optimized photos that load instantly, reservations integrated with OpenTable or Resy, Toast / Square / Shopify for online ordering. All in a site that loads in one second.',
    },
    sections: [
      {
        eyebrow: 'WHAT WE DELIVER',
        heading: 'What a restaurant needs.',
        bodyHtml:
          '<ul><li>Dynamic menu with CMS — update prices without calling us</li><li>Optimized photo gallery (WebP, lazy loading, no speed hit)</li><li>Reservations integrated with OpenTable, Resy, or your own system</li><li>Online ordering with Toast, Square, or Shopify</li><li>Schema.org Restaurant + Menu so you appear with your menu in Google</li><li>Click-to-call and WhatsApp prominent</li><li>Bilingual ES/EN if your clientele needs it</li></ul>',
      },
      {
        eyebrow: 'LOCAL SEO',
        heading: 'So they find you when searching "restaurants near me".',
        bodyHtml:
          '<p>We optimize your Google Business Profile, add LocalBusiness schema with coordinates and hours, sync NAP across directories, and build dedicated pages for keywords like "italian restaurant Calexico" or "best tacos Mexicali".</p>',
      },
    ],
    finalCta: {
      heading: 'Tell us about your restaurant.',
      sub: 'Free quote within one business day.',
      button: 'Get a quote →',
    },
    relatedSlugs: ['mexicali', 'calexico', 'web-design'],
  },

  lawyers: {
    slug: 'lawyers',
    type: 'industry',
    title: 'Websites for Lawyers and Law Firms — Lumiose',
    description:
      'Web design for lawyers and law firms: trust signals, practice areas, secure intake forms, bilingual. Optimized for legal SEO.',
    hero: {
      eyebrow: '● LEGAL · INTAKE',
      h1Pre: 'Lawyer sites that',
      h1Em: 'actually generate intake.',
      lead: "Clear practice areas, representative cases (with consent), prominent credentials, intake forms with encryption. Designed so the prospective client trusts you before picking up the phone.",
    },
    sections: [
      {
        eyebrow: 'WHAT WE DELIVER',
        heading: 'What a firm needs.',
        bodyHtml:
          '<ul><li>Individual pages per practice area with local SEO (e.g. "immigration lawyer Calexico")</li><li>Attorney bios with education, bars, languages, areas</li><li>Representative cases / testimonials (where consent is given)</li><li>Intake form with TLS encryption and secure capture of confidential info</li><li>Schema Attorney + LegalService for legal SEO</li><li>Bilingual ES/EN (critical for Hispanic clients)</li><li>Compliance with ABA + your state\'s bar advertising rules</li></ul>',
      },
    ],
    finalCta: {
      heading: 'Tell us about your firm.',
      sub: "We'll audit your current site for free. We'll tell you what you're losing in intake.",
      button: 'Free legal audit →',
    },
    relatedSlugs: ['mexicali', 'calexico', 'seo'],
  },

  'real-estate': {
    slug: 'real-estate',
    type: 'industry',
    title: 'Websites for Real Estate Brokerages — Lumiose',
    description:
      'Sites for brokerages and agents: property catalog, IDX/MLS, lead capture, map search. Bilingual USD/MXN for the border market.',
    hero: {
      eyebrow: '● REAL ESTATE · IDX',
      h1Pre: 'Real estate sites for',
      h1Em: 'the border market.',
      lead: 'Property catalog in USD and MXN, map search, MLS/IDX integration, optimized lead capture, photos that load instantly. For agents selling on both sides of the border.',
    },
    sections: [
      {
        eyebrow: 'WHAT WE DELIVER',
        heading: 'What a brokerage needs.',
        bodyHtml:
          '<ul><li>Property catalog with CMS or MLS/IDX integration</li><li>Map search, filters by price, bedrooms, m²/sqft</li><li>USD and MXN pricing with dynamic exchange rate</li><li>Schema RealEstateListing for Google Real Estate</li><li>Lead capture with short forms + WhatsApp</li><li>Dedicated pages per neighborhood / colonia / city (key for local SEO)</li><li>Bilingual ES/EN — fundamental for the binational corridor</li></ul>',
      },
    ],
    finalCta: {
      heading: 'Tell us about your portfolio.',
      sub: 'Free quote within one business day.',
      button: 'Get a quote →',
    },
    relatedSlugs: ['mexicali', 'calexico', 'web-design'],
  },
};

const REGISTRY: Record<Locale, Record<string, SubpageContent>> = {
  'es-mx': ES,
  'en-us': EN,
};

const FAQ_HEADING: Record<Locale, string> = {
  'es-mx': 'Preguntas frecuentes',
  'en-us': 'Frequently asked questions',
};

type FaqMap = Record<string, Array<{ q: string; a: string }>>;

const FAQS_ES: FaqMap = {
  mexicali: [
    { q: '¿Cuánto cuesta un sitio web en Mexicali?', a: 'Tres planes: Corner Shop $5,999 MXN + $499/mes (sitio vitrina, 1 semana). Main Street $14,999 MXN + $1,199/mes (12 páginas con CMS, integraciones). Enterprise desde $34,999 MXN + $2,999/mes (multi-ubicación, e-commerce). Cotización gratis en 1 día hábil.' },
    { q: '¿Atienden presencialmente o todo es remoto?', a: 'Trabajamos 100% remoto y eso nos permite cobrar menos. Coordinamos por WhatsApp, correo y video llamadas. Si tu proyecto lo justifica, agendamos un café en Mexicali centro o El Centenario.' },
    { q: '¿Aceptan pagos en pesos mexicanos?', a: 'Sí. Facturamos con CFDI en MXN para negocios mexicanos. Si vendes a ambos lados de la frontera, dejamos el sitio listo para cobrar en MXN y USD.' },
    { q: '¿Trabajan con negocios chicos o solo con empresas grandes?', a: 'La mayoría de nuestros clientes son negocios chicos de Mexicali y Calexico — restaurantes, despachos, inmobiliarias. El plan Corner Shop se diseñó precisamente para arrancar barato sin que el sitio se vea barato.' },
  ],
  calexico: [
    { q: '¿Atienden a clientes en Calexico desde Mexicali?', a: 'Sí. Muchos de nuestros clientes operan en ambos lados de la frontera. Coordinamos remoto por WhatsApp y video llamadas, y si tu negocio está en el Valle Imperial te apoyamos con SEO local en inglés.' },
    { q: '¿Manejan facturación en USD para negocios en California?', a: 'Sí, facturamos en USD para clientes con negocio registrado en Estados Unidos. Si tu negocio opera en ambos lados, podemos dividir la facturación entre tu entidad MX y US.' },
    { q: '¿Cuánto tarda un sitio web bilingüe?', a: 'Corner Shop sale en 1 semana. Main Street en 2 semanas con 2 rondas de revisiones. Enterprise entre 4 y 6 semanas. Empezamos por el copy en inglés y español al mismo tiempo, no como traducción al final.' },
    { q: '¿Funciona su SEO en inglés y español al mismo tiempo?', a: 'Sí. Configuramos hreflang correcto, sitemap por idioma y schema localizado para que rankees en ambos mercados. Cada idioma se escribe con voz propia, no con Google Translate.' },
  ],
  'diseno-web': [
    { q: '¿Qué incluye un sitio web hecho por Lumiose?', a: 'Diseño a medida, código a mano (sin templates de Wix), copy en español e inglés si lo necesitas, SEO técnico (sitemap, schema, Open Graph), hosting en CDN edge, y un panel custom hecho a la medida de tu sitio para que edites contenido sin tocar código.' },
    { q: '¿Cuánto tarda construir mi sitio?', a: 'Corner Shop: 1 semana. Main Street: 2 semanas con 2 rondas de revisiones. Enterprise: 4–6 semanas. Te damos fecha exacta en la cotización.' },
    { q: '¿Usan WordPress o algo así?', a: 'No. Programamos a mano con Next.js y React. Por mucho más rápido que WordPress y no necesita actualizaciones de seguridad cada semana. El panel para editar contenido lo construimos nosotros — custom para tu negocio.' },
    { q: '¿Puedo editar el sitio yo mismo después?', a: 'Sí. Construimos un panel custom hecho a la medida del sitio donde editas textos, imágenes, precios o productos sin tocar código. Para cambios estructurales nos escribes y los hacemos por hora o como proyecto chico.' },
  ],
  seo: [
    { q: '¿Cuánto tarda en verse resultados de SEO?', a: 'Entre 3 y 6 meses para ver primeros resultados, 6–12 meses para resultados sostenidos. SEO no es publicidad pagada — es inversión de mediano plazo. Si necesitas tráfico ya, combínalo con Google Ads.' },
    { q: '¿Garantizan posición #1 en Google?', a: 'No. Nadie puede garantizar posición — y quien lo hace está mintiendo. Lo que garantizamos es trabajo técnico correcto: schema, velocidad, hreflang, contenido relevante, y reportes transparentes para que veas qué funciona.' },
    { q: '¿Qué incluye su servicio de SEO?', a: 'Auditoría técnica completa, optimización on-page, schema markup (LocalBusiness, FAQPage, Service), Core Web Vitals, sitemap, robots.txt, contenido SEO bilingüe, y reportes mensuales con datos reales de Search Console.' },
    { q: '¿Hacen SEO local para Google Maps?', a: 'Sí. Si tu negocio sirve a Mexicali, Calexico o cualquier ciudad específica, optimizamos tu Google Business Profile, citaciones (NAP) en directorios y schema local para que aparezcas en el map pack.' },
  ],
  'publicidad-digital': [
    { q: '¿Manejan ustedes el presupuesto de publicidad?', a: 'Sí. Configuramos las campañas, optimizamos diariamente y reportamos cada semana. El presupuesto va directo de tu tarjeta a Google/Meta — nosotros nunca tocamos el dinero.' },
    { q: '¿Cuánto debo invertir en Google Ads o Meta Ads?', a: 'Mínimo $4,000 MXN / $200 USD al mes en gasto publicitario para que el algoritmo tenga datos suficientes. Recomendamos arrancar con $10,000–$20,000 MXN / $500–$1,000 USD al mes para un negocio local que busca leads.' },
    { q: '¿Solo Google Ads o también Meta (Facebook/Instagram)?', a: 'Ambos. Google funciona mejor para captar a quien YA está buscando ("abogado Mexicali"), Meta funciona mejor para descubrimiento ("dueños de restaurantes en Mexicali"). En la mayoría de casos hace falta una combinación.' },
    { q: '¿Cuál es el costo del servicio de gestión de Ads?', a: 'Fee fijo mensual desde $4,999 MXN / $299 USD. Sin porcentajes del gasto publicitario. Si crece tu inversión, no crece nuestro fee — a menos que crezca el alcance del trabajo.' },
  ],
  infraestructura: [
    { q: '¿Quién hostea el sitio que me hagan?', a: 'Por defecto Vercel: hosting global con CDN edge, sub-segundo de carga, sin downtime. Pagas tú directo a Vercel (~$20 USD/mes para sitios chicos). Si prefieres otro hosting, lo configuramos.' },
    { q: '¿Manejan el dominio y los correos del negocio?', a: 'Sí. Te ayudamos a comprar el dominio (te queda a tu nombre) y a configurar correos profesionales con Google Workspace o iCloud Custom Domain. Cero plataformas raras tipo Zoho gratis.' },
    { q: '¿Qué pasa si quiero migrar a otro estudio después?', a: 'Te entregamos todo: código en tu GitHub, dominio a tu nombre, hosting a tu cuenta. Sin lock-in, sin "templates propietarios". Cualquier dev de Next.js puede continuar.' },
    { q: '¿Hacen mantenimiento del sitio una vez entregado?', a: 'Sí. La mensualidad de cada plan ya incluye hosting, cuidado y actualizaciones — desde $499 MXN / $39 USD al mes con Corner Shop. Si solo quieres mantenimiento sobre un sitio existente, ofrecemos retainer desde $499 MXN / $39 USD al mes. También cobramos por hora sin retainer.' },
  ],
  consultoria: [
    { q: '¿Qué tipo de consultoría ofrecen?', a: 'Auditorías de sitios existentes (qué arreglar, qué priorizar), estrategia de SEO/Ads para 6–12 meses, revisión de stack técnico, y consultoría de marca para nuevos lanzamientos. Sesiones de 1 hora a engagements de varias semanas.' },
    { q: '¿Cuánto cuesta una consultoría?', a: 'Sesión de 1 hora con reporte: desde $2,400 MXN / $150 USD. Auditoría completa de sitio (10+ páginas, reporte y plan): desde $12,000 MXN / $750 USD. Engagement mensual a partir de $20,000 MXN / $1,200 USD según alcance.' },
    { q: '¿Dan consultoría sin construir el sitio?', a: 'Sí. Muchos clientes nos contratan solo para revisar lo que ya tienen, escribir el brief para otro estudio, o tomar decisiones técnicas (¿WordPress o Webflow? ¿necesito CMS?). No es requisito que después construyamos.' },
  ],
  restaurantes: [
    { q: '¿Manejan menús digitales?', a: 'Sí. Construimos menús editables desde un panel custom (cambias precios y platillos sin tocar código), QR para mesa, y versión bilingüe para clientela cross-border. Optimizado para mobile primero.' },
    { q: '¿Integran reservas o pedidos online?', a: 'Sí. Conectamos OpenTable, Resy o un sistema más simple si prefieres no pagar mensualidad. Para pedidos online integramos Stripe, Mercado Pago, o un WhatsApp directo a la cocina.' },
    { q: '¿Cuánto cuesta un sitio para un restaurante?', a: 'Corner Shop $5,999 MXN + $499/mes para una sola sucursal con menú simple. Main Street $14,999 MXN + $1,199/mes con CMS, reservas y pedidos online. Enterprise desde $34,999 MXN + $2,999/mes para multi-sucursal con POS integrado. Cotización exacta en 1 día hábil.' },
  ],
  abogados: [
    { q: '¿Trabajan con despachos chicos o solo con firmas grandes?', a: 'Sobre todo con despachos chicos y abogados solos: 1–10 personas. Es donde más impacto tiene un sitio bien hecho — sin presupuesto de marketing tradicional, el SEO local y un sitio profesional son lo que mueve la aguja.' },
    { q: '¿Manejan formularios de contacto seguros?', a: 'Sí. Encriptación TLS, formularios sin almacenar datos sensibles del lado del cliente, y opción de subir documentos a un drop-box encriptado. Cumplimos con prácticas básicas de privacidad de información de cliente.' },
    { q: '¿Tienen experiencia con sitios bilingües de inmigración?', a: 'Sí. Hemos trabajado con abogados de inmigración del corredor Mexicali–Calexico. Sitios en inglés y español con SEO en ambos idiomas, formularios de consulta inicial, y schema LegalService para Google.' },
  ],
  inmobiliarias: [
    { q: '¿Integran listings o IDX en el sitio?', a: 'Sí para California (MLS). Para México, donde no hay MLS estándar, construimos un panel custom para que subas tus propiedades manualmente. Filtros, mapas, fotos, tours virtuales.' },
    { q: '¿Pueden mostrar precios en USD y MXN?', a: 'Sí. Si vendes propiedades en ambos países, mostramos precio en moneda local con conversión actualizada. También dividimos las búsquedas por mercado.' },
    { q: '¿Cuánto cuesta un sitio para una inmobiliaria?', a: 'Main Street $14,999 MXN + $1,199/mes con panel de propiedades, mapas y filtros. Si necesitas integración MLS / IDX o multi-mercado, vamos por Enterprise desde $34,999 MXN + $2,999/mes. Cotización exacta en 1 día hábil.' },
  ],
};

const FAQS_EN: FaqMap = {
  mexicali: [
    { q: 'Do you serve Mexicali clients in English?', a: 'Yes. Half of our work is in English — clients from Imperial Valley, San Diego, and US-based businesses with operations in Baja California. Same studio, both languages, same quality.' },
    { q: 'How much does a website cost for a Mexicali business?', a: 'Three plans: Corner Shop $1,800 USD + $59/mo (showcase site, 1 week). Main Street $4,500 USD + $129/mo (12 pages with CMS, integrations). Enterprise from $9,500 USD + $299/mo (multi-location, e-commerce). Free quote within one business day.' },
    { q: 'Can you handle billing in USD?', a: 'Yes. We invoice in USD for US-based clients and in MXN for Mexico-based businesses. If your business operates on both sides, we can split billing across both entities.' },
    { q: 'Do you offer in-person meetings?', a: 'We work 100% remote, which lets us keep prices low. Communication is over WhatsApp, email, and video calls. If your project warrants it, we can meet in Mexicali or Calexico.' },
  ],
  calexico: [
    { q: 'Do you work with Calexico businesses?', a: 'Yes. Many of our clients operate in the Imperial Valley — Calexico, El Centro, Brawley. We coordinate fully remote and your site is optimized for local SEO in both English and Spanish.' },
    { q: 'How much does a bilingual website cost?', a: 'Corner Shop $1,800 USD + $59/mo for a fully bilingual showcase site. Main Street $4,500 USD + $129/mo adds CMS, integrations, and reservations. Enterprise from $9,500 USD + $299/mo for multi-location or e-commerce. We invoice in USD for US-based businesses.' },
    { q: 'How long does a bilingual website take?', a: 'Corner Shop launches in 1 week. Main Street in 2 weeks with 2 review rounds. Enterprise in 4–6 weeks. We write English and Spanish copy in parallel — never an afterthought translation.' },
    { q: 'Do you handle SEO in both English and Spanish?', a: 'Yes. Correct hreflang setup, per-language sitemaps, localized schema. Both languages get their own voice, never a Google Translate copy. We track rankings in both markets.' },
  ],
  'web-design': [
    { q: 'What does a Lumiose website include?', a: 'Custom design, hand-coded (no Wix templates), bilingual copy if needed, technical SEO (sitemap, schema, Open Graph), edge-deployed hosting, and a custom admin panel built for your site so you can edit content without touching code.' },
    { q: 'How long does it take to build my site?', a: 'Corner Shop: 1 week. Main Street: 2 weeks with 2 review rounds. Enterprise: 4–6 weeks. Exact timeline in your quote.' },
    { q: 'Do you use WordPress?', a: 'No. We build with Next.js and React. Faster than WordPress, no weekly security patches, smaller attack surface. The admin panel for editing content is custom — built by us for your site.' },
    { q: 'Can I edit the site myself afterward?', a: 'Yes. We build a custom admin panel tailored to your site so you change text, images, prices, or products without code. Structural changes you message us about — billed by the hour or as a small project.' },
  ],
  seo: [
    { q: 'How long until I see SEO results?', a: '3–6 months for first results, 6–12 months for sustained traffic. SEO is a medium-term investment. If you need traffic now, pair it with Google Ads.' },
    { q: 'Do you guarantee a #1 ranking on Google?', a: 'No. Nobody can guarantee rankings — and anyone who does is lying. What we guarantee is correct technical work: schema, speed, hreflang, relevant content, and transparent reporting.' },
    { q: 'What does your SEO service include?', a: 'Full technical audit, on-page optimization, schema markup (LocalBusiness, FAQPage, Service), Core Web Vitals, sitemap, robots.txt, bilingual SEO content, and monthly reports with real Search Console data.' },
    { q: 'Do you do local SEO for Google Maps?', a: 'Yes. If your business serves a specific city, we optimize your Google Business Profile, NAP citations across directories, and local schema so you appear in the map pack.' },
  ],
  'digital-ads': [
    { q: 'Do you manage the ad budget?', a: 'Yes. We set up campaigns, optimize daily, and report weekly. Ad spend goes directly from your card to Google/Meta — we never touch the money.' },
    { q: 'How much should I spend on Google or Meta Ads?', a: 'Minimum $200 USD per month in ad spend so the algorithm has enough data. We recommend $500–$1,000 USD per month for a local business chasing leads. Below that, you are essentially testing.' },
    { q: 'Google Ads only, or Meta (Facebook/Instagram) too?', a: 'Both. Google captures intent ("immigration lawyer Calexico"), Meta drives discovery ("restaurant owners in Imperial Valley"). Most clients need a mix.' },
    { q: 'What is your management fee?', a: 'Flat monthly fee starting at $299 USD. No percentage of ad spend. If your spend grows, our fee does not — unless the scope of work also grows.' },
  ],
  infrastructure: [
    { q: 'Who hosts the site you build?', a: 'By default, Vercel: global CDN with edge nodes, sub-second loads, zero downtime. You pay Vercel directly (~$20/mo for small sites). If you prefer another host, we configure it.' },
    { q: 'Do you handle the domain and email?', a: 'Yes. We help you buy the domain (in your name) and set up professional email with Google Workspace or iCloud Custom Domain. No weird free Zoho-type platforms.' },
    { q: 'What if I want to switch studios later?', a: 'You get everything: code in your GitHub, domain in your name, hosting in your account. No lock-in, no proprietary templates. Any Next.js dev can pick it up.' },
    { q: 'Do you do post-launch maintenance?', a: 'Yes. Each plan\'s monthly fee already covers hosting, care, and updates — starting at $59/mo with Corner Shop. If you only want maintenance on an existing site, retainer starts at $39/mo. Hourly without a retainer also available.' },
  ],
  consulting: [
    { q: 'What kind of consulting do you offer?', a: 'Audits of existing sites (what to fix, in what order), 6–12 month SEO/Ads strategy, technical stack reviews, and brand consulting for new launches. From 1-hour calls to multi-week engagements.' },
    { q: 'How much does consulting cost?', a: '1-hour session with report: from $150 USD. Full site audit (10+ pages, report, and plan): from $750 USD. Monthly engagement starts at $1,200 USD depending on scope.' },
    { q: 'Do you consult without building the site?', a: 'Yes. Many clients hire us just to review what they have, write the brief for another studio, or make a technical call (WordPress or Webflow? Do I need a CMS?). No obligation to build with us afterward.' },
  ],
  restaurants: [
    { q: 'Do you build digital menus?', a: 'Yes. Editable menus through a custom admin panel (change prices and dishes without code), table QR codes, bilingual versions for cross-border clientele. Mobile-first design.' },
    { q: 'Can you integrate reservations or online ordering?', a: 'Yes. We connect OpenTable, Resy, or a simpler system if you prefer no monthly fees. Online ordering via Stripe, with WhatsApp direct-to-kitchen as a low-tech option.' },
    { q: 'How much does a restaurant website cost?', a: 'Corner Shop $1,800 USD + $59/mo for a single location with simple menu. Main Street $4,500 USD + $129/mo with CMS, reservations, and online ordering. Enterprise from $9,500 USD + $299/mo for multi-location with POS integration. Free quote in one business day.' },
  ],
  lawyers: [
    { q: 'Do you work with small firms?', a: 'Yes. Most of our legal clients are small firms or solo practitioners (1–10 people). That is where a well-built site has the biggest impact — without traditional marketing budgets, local SEO and a professional site move the needle.' },
    { q: 'Do you handle secure intake forms?', a: 'Yes. TLS encryption, no client-side storage of sensitive data, optional encrypted document uploads. We follow basic privacy practices for legal intake.' },
    { q: 'Do you have experience with bilingual immigration sites?', a: 'Yes. We have worked with immigration attorneys along the Mexicali–Calexico corridor. Sites in English and Spanish with parallel SEO, intake forms, and LegalService schema.' },
  ],
  'real-estate': [
    { q: 'Do you integrate IDX or MLS feeds?', a: 'Yes for California (MLS). For Mexico, where there is no standard MLS, we build a custom admin panel so you upload listings manually. Filters, maps, photos, virtual tours.' },
    { q: 'Can you show prices in USD and MXN?', a: 'Yes. If you sell on both sides of the border, we display prices in local currency with live conversion. Searches can be split by market.' },
    { q: 'How much does a real estate website cost?', a: 'Main Street $4,500 USD + $129/mo with custom property panel, maps, and filters. If you need MLS / IDX integration or multi-market, Enterprise from $9,500 USD + $299/mo. Free quote in one business day.' },
  ],
};

const FAQS: Record<Locale, FaqMap> = {
  'es-mx': FAQS_ES,
  'en-us': FAQS_EN,
};

export function getSubpage(locale: Locale, slug: string): SubpageContent | null {
  const page = REGISTRY[locale]?.[slug];
  if (!page) return null;
  const faqs = FAQS[locale]?.[slug];
  if (!faqs) return page;
  return { ...page, faqs, faqHeading: FAQ_HEADING[locale] };
}

export function listSubpageSlugs(locale: Locale): string[] {
  return Object.keys(REGISTRY[locale] ?? {});
}

export function listAllSubpages(): Array<{ locale: Locale; slug: string }> {
  const entries: Array<{ locale: Locale; slug: string }> = [];
  for (const locale of Object.keys(REGISTRY) as Locale[]) {
    for (const slug of Object.keys(REGISTRY[locale])) {
      entries.push({ locale, slug });
    }
  }
  return entries;
}
