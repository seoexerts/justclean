/**
 * ╔══════════════════════════════════════════════════════════════╗
 * ║  CONTENIDO DEL SITIO — src/config/content.ts                ║
 * ║                                                              ║
 * ║  Todos los textos editables de la web están aquí.           ║
 * ║  Usa {{city}} donde quieras que aparezca la ciudad principal ║
 * ║  (se reemplaza automáticamente en tiempo de build).         ║
 * ╚══════════════════════════════════════════════════════════════╝
 */

export const content = {

  // ── Hero ──────────────────────────────────────────────────────
  hero: {
    eyebrow:     'Empresa especializada en limpieza por defunción en {{city}}',
    h1main:      'Limpiezas por Defunción Profesionales',
    h1accent:    'en Barcelona y alrededores',
    description: 'JustClean ofrece servicios de limpieza por defunción discretos, profesionales y con el máximo respeto en Barcelona, Baix Llobregat, Maresme y toda la provincia. Nos encargamos de la desinfección completa del espacio, eliminando restos biológicos y olores para facilitar un momento tan delicado.',
    badge1:      'Presupuesto en 30 minutos',
    badge2:      'Disponibilidad 24/7',
    badge3:      'Certificados de desinfección',
    badge4:      'Cobertura: Barcelona, Sant Cugat, Mataró',
    cardStat:    '+300',
    cardLabel:   'hogares atendidos en {{city}}',
  },

  // ── Beneficios (6 tarjetas) ────────────────────────────────────
  benefits: [
    {
      icon: 'shield',
      title:       '',
      description: '',
    },
    {
      icon: 'clock',
      title:       '',
      description: '',
    },
    {
      icon: 'check',
      title:       '',
      description: '',
    },
    {
      icon: 'box',
      title:       '',
      description: '',
    },
    {
      icon: 'heart',
      title:       '',
      description: '',
    },
    {
      icon: 'users',
      title:       '',
      description: '',
    }
  ],

  // ── Servicios (tarjetas del inicio) ───────────────────────────
  serviceSummaries: [
    {
      slug:        'limpieza-por-defuncion',
      nombre:      'Limpieza por defunción',
      description: '',
      features:    [],
      featured:    false,
      ctaPage:     true,
    },
    {
      slug:        'retirada-de-restos-biologicos',
      nombre:      'Retirada de restos biológicos',
      description: '',
      features:    [],
      featured:    false,
      ctaPage:     true,
    },
    {
      slug:        'vaciado-de-muebles-y-enseres-afectados',
      nombre:      'Vaciado de muebles y enseres afectados',
      description: '',
      features:    [],
      featured:    false,
      ctaPage:     true,
    },
    {
      slug:        'limpieza-y-desinfeccion-de-zonas-afectadas',
      nombre:      'Limpieza y desinfección de zonas afectadas',
      description: '',
      features:    [],
      featured:    false,
      ctaPage:     true,
    },
    {
      slug:        'tratamiento-de-ozono-para-eliminar-olores',
      nombre:      'Tratamiento de ozono para eliminar olores',
      description: '',
      features:    [],
      featured:    false,
      ctaPage:     true,
    }
  ],

  // ── Textos de secciones ───────────────────────────────────────
  sections: {
    beneficiosSub:  'Más de 10 años de experiencia. Equipo propio, sin subcontratas y con gestión de residuos certificada.',
    serviciosSub:   'Todo lo que necesitas para dejar el inmueble listo.',
    testimoniosSub: 'Más de 500 familias y empresas han confiado en nosotros.',
    zonaComarca:    'de la comarca',
    zonaBarrios:    'También en los barrios de {{city}}:',
    preciosSub:     'Presupuesto final gratuito y sin compromiso. Estos precios son orientativos — el coste real depende del volumen y accesibilidad.',
    preciosNota:    'Precios orientativos para {{city}}. El presupuesto definitivo se calcula según el volumen real, accesibilidad y distancia al punto limpio. Siempre gratuito y sin compromiso.',
    faqSub:         'Resolvemos las dudas más habituales antes de contratar el servicio.',
  },

  // ── Testimonios (4) ───────────────────────────────────────────
  testimonials: [
    {
      initials: '',
      name:     '',
      location: '{{city}}',
      service:  '',
      quote:    '',
    },
    {
      initials: '',
      name:     '',
      location: '{{city}}',
      service:  '',
      quote:    '',
    },
    {
      initials: '',
      name:     '',
      location: '{{city}}',
      service:  '',
      quote:    '',
    },
    {
      initials: '',
      name:     '',
      location: '{{city}}',
      service:  '',
      quote:    '',
    }
  ],

  // ── Precios (3 tramos) ────────────────────────────────────────
  pricing: [
    {
      tipo:      '',
      precio:    '',
      highlight: false,
      features:  [],
    },
    {
      tipo:      '',
      precio:    '',
      highlight: true,
      badge:     'Más popular',
      features:  [],
    },
    {
      tipo:      '',
      precio:    '',
      highlight: false,
      features:  [],
    }
  ],

  // ── Preguntas frecuentes (6) ──────────────────────────────────
  faqs: [
    {
      pregunta:  '',
      respuesta: '',
    },
    {
      pregunta:  '',
      respuesta: '',
    },
    {
      pregunta:  '',
      respuesta: '',
    },
    {
      pregunta:  '',
      respuesta: '',
    },
    {
      pregunta:  '',
      respuesta: '',
    },
    {
      pregunta:  '',
      respuesta: '',
    }
  ],

  // ── Proceso de trabajo (4 pasos) ──────────────────────────────
  proceso: [
    {
      titulo:      '',
      descripcion: '',
    },
    {
      titulo:      '',
      descripcion: '',
    },
    {
      titulo:      '',
      descripcion: '',
    },
    {
      titulo:      '',
      descripcion: '',
    }
  ],

} as const;

export type Content = typeof content;
