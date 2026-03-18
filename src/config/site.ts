/**
 * ╔═══════════════════════════════════════════════════════╗
 * ║  CONFIGURACIÓN CENTRAL DEL SITIO — src/config/site.ts ║
 * ║  Generado automáticamente · 18/3/2026             ║
 * ╚═══════════════════════════════════════════════════════╝
 */

export const siteConfig = {

  // ── Identidad del negocio ──────────────────────────────
  businessName:      'JustClean',
  businessNameLegal: 'JustClean',
  cif:   'B12345678',
  logo:  '/logo.png',

  // ── Servicio y área ────────────────────────────────────
  serviceType:  'Limpiezas por defunción',
  area:         'Barcelona, municipios cercanos y todo Catalunya',
  mainCity:     'Barcelona',
  comarca:      'Barcelonés, Baix Llobregat, Maresme,',
  foundingYear: '2018',

  // ── Contacto ──────────────────────────────────────────
  phone:    '602365996',
  email:    'info@justclean.es',
  whatsapp: '602365996',
  web:      'https://justclean.netlify.app/',

  // ── Horario ───────────────────────────────────────────
  horario:      'Mo-Sa 09:00-20:00',
  horarioTexto: 'Lunes a Sábado, 9:00–20:00',
  horarioDias:  ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'] as string[],
  horarioAbre:  '09:00',
  horarioCierra:'20:00',

  // ── SEO ───────────────────────────────────────────────
  description: 'Especialistas en servicios profesionales de limpieza por defunción en todo Barcelona y provincia. Presupuesto gratuito y garantía por escrito.',
  priceRange:  '€€',
  aggregateRating: {
    ratingValue:  4.9,
    reviewCount:  29,
    bestRating:   5,
    worstRating:  1,
  },

  // ── Colores corporativos ──────────────────────────────
  colorPrimary: '#16a34a',
  colorText:    '#0f172a',

  // ── Diseño visual ─────────────────────────────────────
  fontFamily:  'Outfit',
  designStyle: 'sharp',
  brandIcon:   '✦',
  mapZoom:     15,

  // ── SEO avanzado ──────────────────────────────────────
  titleFormula: 3,
  schemaType:  'CleaningService',
  // sectionOrder: orden y visibilidad de secciones en la home
  sectionOrder: ["servicios","beneficios","proceso","zona","precios","testimonios","faq"] as string[],

  // ── Navegación ────────────────────────────────────────
  navAbout:    'Equipo',
  navFaq:      'Preguntas frecuentes',
  navCta:      'LLAMAR AHORA',
  navCtaShort: 'LLAMAR',
  navCtaEmoji: '📞',

  // ── Enlaces externos ──────────────────────────────────
  externalLink1: { url: 'https://maps.app.goo.gl/9u5tMrCJgCBKFeMU8', anchor: 'Empresa especializada en limpieza por defunción', rel: 'follow' },
  externalLink2: { url: 'https://www.justclean.es/', anchor: '© 2026 JustClean Barcelona ', rel: 'nofollow' },

  // ── Redes sociales ────────────────────────────────────
  social: {
    facebook:  '',
    instagram: '',
    linkedin:  '',
  },

  // ── Verificación de sitio ─────────────────────────────
  googleVerification: '"VecKxVtQt7zzzW_RNZbxeAsYQ66Ih20xCXJu00z2fAA" />',
  bingVerification:   '',

} as const;

export type SiteConfig = typeof siteConfig;
