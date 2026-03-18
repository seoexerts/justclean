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
    h1main:      'Limpiezas por Defunción',
    h1accent:    'Profesionales y Discretas en {{city}}',
    description: 'JustClean gestiona la limpieza y desinfección del inmueble tras un fallecimiento con total discreción, rapidez y respeto. Certificados oficiales, equipo propio y presupuesto gratuito en menos de 30 minutos. Cubrimos {{city}}, Baix Llobregat, Maresme y toda la provincia.',
    badge1:      'Presupuesto gratuito en 30 min',
    badge2:      'Disponibilidad 24 h · 7 días',
    badge3:      'Certificado oficial de desinfección',
    badge4:      'Cobertura: {{city}}, comarca y provincia',
    cardStat:    '+500',
    cardLabel:   'intervenciones realizadas en {{city}}',
  },

  // ── Beneficios (6 tarjetas) ────────────────────────────────────
  benefits: [
    {
      icon: 'shield',
      title:       'Empresa certificada',
      description: 'Contamos con todas las certificaciones legales para la gestión de residuos biológicos y desinfección de espacios tras fallecimiento.',
    },
    {
      icon: 'clock',
      title:       'Respuesta en menos de 2 horas',
      description: 'Disponibles las 24 horas del día, los 7 días de la semana. Atendemos emergencias en {{city}} y provincia con la máxima rapidez.',
    },
    {
      icon: 'check',
      title:       'Presupuesto sin compromiso',
      description: 'Valoramos el trabajo in situ y entregamos un presupuesto cerrado y gratuito. Sin sorpresas ni costes ocultos.',
    },
    {
      icon: 'box',
      title:       'Gestión integral de residuos',
      description: 'Nos encargamos de la retirada, transporte y eliminación de todos los residuos biológicos conforme a la normativa vigente.',
    },
    {
      icon: 'heart',
      title:       'Máxima discreción y respeto',
      description: 'Trabajamos con la sensibilidad que exige cada situación. Nuestro equipo está formado para actuar con empatía y total confidencialidad.',
    },
    {
      icon: 'users',
      title:       'Equipo propio, sin subcontratas',
      description: 'Todo el personal es de plantilla propia, formado específicamente en limpieza por defunción. Garantizamos calidad y control en cada intervención.',
    }
  ],

  // ── Servicios (tarjetas del inicio) ───────────────────────────
  serviceSummaries: [
    {
      slug:        'limpieza-por-defuncion',
      nombre:      'Limpieza por defunción',
      description: 'Desinfección y limpieza completa del inmueble tras un fallecimiento. Eliminamos restos biológicos, gérmenes y olores con productos certificados.',
      features:    ['Desinfección total del espacio', 'Eliminación de olores', 'Certificado oficial incluido'],
      featured:    true,
      ctaPage:     true,
    },
    {
      slug:        'retirada-de-restos-biologicos',
      nombre:      'Retirada de restos biológicos',
      description: 'Recogida, envasado y transporte de residuos biológicos conforme a la normativa sanitaria. Gestión segura y documentada.',
      features:    ['Gestión homologada', 'Documentación acreditativa', 'Transporte especializado'],
      featured:    false,
      ctaPage:     true,
    },
    {
      slug:        'vaciado-de-muebles-y-enseres-afectados',
      nombre:      'Vaciado de muebles y enseres afectados',
      description: 'Retiramos y gestionamos el mobiliario, ropa y objetos personales contaminados de forma segura, discreta y respetuosa.',
      features:    ['Retirada íntegra de enseres', 'Gestión de residuos incluida', 'Discreción garantizada'],
      featured:    false,
      ctaPage:     true,
    },
    {
      slug:        'limpieza-y-desinfeccion-de-zonas-afectadas',
      nombre:      'Limpieza y desinfección de zonas afectadas',
      description: 'Tratamiento específico de suelos, paredes y superficies afectadas. Productos biocidas autorizados y técnicas profesionales.',
      features:    ['Biocidas de uso profesional', 'Eliminación de manchas orgánicas', 'Informe de intervención'],
      featured:    false,
      ctaPage:     true,
    },
    {
      slug:        'tratamiento-de-ozono-para-eliminar-olores',
      nombre:      'Tratamiento de ozono',
      description: 'Eliminación definitiva de olores mediante generadores de ozono profesionales. Acaba con los malos olores en profundidad, sin enmascarar.',
      features:    ['Ozono profesional de alta concentración', 'Sin residuos químicos', 'Resultado garantizado'],
      featured:    false,
      ctaPage:     true,
    }
  ],

  // ── Textos de secciones ───────────────────────────────────────
  sections: {
    beneficiosSub:  'Más de 10 años de experiencia. Equipo propio, sin subcontratas y con gestión de residuos certificada.',
    serviciosSub:   'Gestionamos cada caso de forma integral para que la familia no tenga que preocuparse de nada.',
    testimoniosSub: 'Más de 500 familias y empresas han confiado en JustClean en los momentos más difíciles.',
    zonaComarca:    'de la comarca',
    zonaBarrios:    'También en los barrios de {{city}}:',
    preciosSub:     'Presupuesto definitivo gratuito y sin compromiso. Los precios indicados son orientativos — el coste real depende del estado del inmueble, volumen y accesibilidad.',
    preciosNota:    'Precios orientativos para {{city}}. El presupuesto definitivo se calcula tras la valoración in situ. Siempre gratuito y sin compromiso.',
    faqSub:         'Resolvemos las dudas más habituales antes de contratar el servicio.',
  },

  // ── Testimonios (4) ───────────────────────────────────────────
  testimonials: [
    {
      initials: 'M.P.',
      name:     'Marta P.',
      location: '{{city}}',
      service:  'Limpieza por defunción',
      quote:    'En un momento tan difícil, JustClean nos trató con una delicadeza y profesionalidad increíbles. Vinieron en pocas horas y dejaron el piso impecable. No puedo pedir más.',
    },
    {
      initials: 'J.R.',
      name:     'Jordi R.',
      location: 'Hospitalet de Llobregat',
      service:  'Retirada de restos biológicos',
      quote:    'Llamé sin saber muy bien qué esperar y me sorprendió lo rápido y discreto que fue todo. El equipo fue muy respetuoso en todo momento. Totalmente recomendable.',
    },
    {
      initials: 'A.G.',
      name:     'Ana G.',
      location: 'Badalona',
      service:  'Limpieza y desinfección',
      quote:    'Gestionaron todo desde el principio: presupuesto en media hora, intervención al día siguiente. El certificado de desinfección llegó por email esa misma tarde. Muy profesionales.',
    },
    {
      initials: 'C.M.',
      name:     'Carlos M.',
      location: 'Mataró',
      service:  'Tratamiento de ozono',
      quote:    'El olor era insoportable y con el tratamiento de ozono desapareció por completo. Llevábamos semanas buscando solución y en un día quedó resuelto. Excelente servicio.',
    }
  ],

  // ── Precios (3 tramos) ────────────────────────────────────────
  pricing: [
    {
      tipo:      'Intervención básica',
      precio:    'Desde 350 €',
      highlight: false,
      features:  [
        'Habitación o zona localizada',
        'Limpieza y desinfección básica',
        'Retirada de residuos incluida',
        'Presupuesto gratuito previo',
      ],
    },
    {
      tipo:      'Piso o vivienda completa',
      precio:    'Desde 650 €',
      highlight: true,
      badge:     'Más solicitado',
      features:  [
        'Hasta 90 m² de superficie',
        'Limpieza, desinfección y desodorización',
        'Retirada completa de residuos',
        'Tratamiento de ozono incluido',
        'Certificado oficial de desinfección',
      ],
    },
    {
      tipo:      'Local o caso especial',
      precio:    'Presupuesto a medida',
      highlight: false,
      features:  [
        'Locales comerciales o industriales',
        'Casos de larga data o alta complejidad',
        'Coordinación con seguros y administraciones',
        'Equipo reforzado disponible',
      ],
    }
  ],

  // ── Preguntas frecuentes (6) ──────────────────────────────────
  faqs: [
    {
      pregunta:  '¿Cuánto tiempo tarda en realizarse una limpieza por defunción?',
      respuesta: 'Depende del estado y tamaño del inmueble. Una intervención estándar en un piso de tamaño medio suele durar entre 4 y 8 horas. En casos complejos puede extenderse a dos jornadas. Siempre lo indicamos en el presupuesto previo.',
    },
    {
      pregunta:  '¿Es necesario estar presente durante la limpieza?',
      respuesta: 'No es obligatorio. Muchas familias prefieren no estarlo, y lo entendemos perfectamente. Podemos gestionar el acceso con el administrador de finca o el portero del edificio. Al finalizar enviamos un informe fotográfico y el certificado de desinfección.',
    },
    {
      pregunta:  '¿Qué incluye el certificado de desinfección?',
      respuesta: 'El certificado oficial acredita que la vivienda ha sido tratada con biocidas autorizados y cumple los estándares sanitarios vigentes. Es necesario para gestiones con la propiedad, seguros o comunidades de vecinos.',
    },
    {
      pregunta:  '¿Trabajáis fuera de Barcelona ciudad?',
      respuesta: 'Sí, cubrimos toda la provincia de Barcelona: Baix Llobregat, Maresme, Vallès Occidental, Vallès Oriental, Barcelonès y Garraf. Para zonas más alejadas consultadnos disponibilidad.',
    },
    {
      pregunta:  '¿Qué ocurre con los muebles y objetos personales del fallecido?',
      respuesta: 'A petición de la familia, podemos retirar y gestionar los enseres afectados. Los objetos de valor o documentación importante se apartan y se entregan a los familiares antes de comenzar el trabajo.',
    },
    {
      pregunta:  '¿Cuánto cuesta una limpieza por defunción en {{city}}?',
      respuesta: 'El precio depende del estado del inmueble, la superficie y el tipo de intervención necesaria. Una intervención básica parte desde 350 € y una vivienda completa desde 650 €. El presupuesto es siempre gratuito, sin compromiso y se entrega en menos de 30 minutos.',
    }
  ],

  // ── Proceso de trabajo (4 pasos) ──────────────────────────────
  proceso: [
    {
      titulo:      'Contacto y valoración inicial',
      descripcion: 'Llámanos o escríbenos en cualquier momento. En menos de 30 minutos te damos una primera orientación de precio y disponibilidad para {{city}} y la comarca.',
    },
    {
      titulo:      'Visita y presupuesto cerrado',
      descripcion: 'Un técnico se desplaza al inmueble para valorar el estado real. Entregamos un presupuesto detallado, cerrado y gratuito. Sin sorpresas posteriores.',
    },
    {
      titulo:      'Intervención profesional',
      descripcion: 'Nuestro equipo ejecuta la limpieza, desinfección y retirada de residuos con productos certificados. Trabajamos con discreción y respeto absoluto al entorno.',
    },
    {
      titulo:      'Entrega y certificación',
      descripcion: 'Al finalizar realizamos una inspección de calidad y entregamos el certificado oficial de desinfección. El inmueble queda listo para su uso o gestión.',
    }
  ],

} as const;

export type Content = typeof content;
