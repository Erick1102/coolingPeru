export const COMPANY_INFO = {
  name: 'CoolingPerú',
  tagline: 'Especialistas en Climatización',
  email: 'ventasyservicios@coolingperu.com',
  phone: '+51 942 045 055',
  address: 'Lima, Perú',
  social: {
    facebook: '#',
    instagram: '#',
    linkedin: '#',
    whatsapp: '#',
  },
}

export const SERVICES = [
  {
    id: 'instalacion',
    title: 'Instalación de Equipos de Aire Acondicionado',
    description: 'Personal técnico altamente capacitado para la instalación profesional de sistemas de climatización. Trabajamos con todas las marcas y tipos de equipos, brindando atención dedicada y garantía de calidad.',
    icon: 'FaTools',
    badge: 'Más Popular',
    badgeVariant: 'accent' as const,
    features: [
      'Personal técnico altamente capacitado',
      'Trabajamos con todas las marcas',
      'Atención dedicada y personalizada',
      'Garantía de instalación',
    ],
    process: [
      'Evaluación del espacio y necesidades',
      'Presupuesto detallado y transparente',
      'Instalación profesional certificada',
      'Pruebas y garantía extendida',
    ],
  },
  {
    id: 'mantenimiento',
    title: 'Mantenimiento de Equipos',
    description: 'Mantenimiento preventivo y correctivo para optimizar el rendimiento y prolongar la vida útil de tus equipos de climatización. Servicio especializado para todos los tipos de sistemas.',
    icon: 'FaWrench',
    badge: 'Recomendado',
    badgeVariant: 'teal' as const,
    features: [
      'Mantenimiento preventivo programado',
      'Limpieza profunda de componentes',
      'Revisión y calibración técnica',
      'Reporte detallado del estado del equipo',
    ],
    process: [
      'Inspección técnica completa',
      'Limpieza y mantenimiento',
      'Ajustes y calibración',
      'Reporte y recomendaciones',
    ],
  },
  {
    id: 'reparacion',
    title: 'Reparación y Servicio Técnico',
    description: 'Servicio técnico especializado para resolver cualquier problema con tus equipos. Diagnóstico preciso y reparación eficiente con repuestos originales y garantía de trabajo.',
    icon: 'FaCog',
    badge: '24/7',
    badgeVariant: 'coral' as const,
    features: [
      'Diagnóstico técnico gratuito',
      'Reparación rápida y eficiente',
      'Repuestos originales disponibles',
      'Servicio de emergencia disponible',
    ],
    process: [
      'Diagnóstico del problema',
      'Cotización de reparación',
      'Reparación profesional',
      'Pruebas y garantía de trabajo',
    ],
  },
  {
    id: 'consultoria',
    title: 'Consultoría Técnica',
    description: 'Asesoramiento profesional para elegir el mejor sistema de climatización según tus necesidades específicas. Análisis técnico y recomendaciones personalizadas.',
    icon: 'FaLightbulb',
    badge: 'Sin Costo',
    badgeVariant: 'success' as const,
    features: [
      'Análisis de necesidades y espacio',
      'Cálculo de carga térmica profesional',
      'Recomendaciones personalizadas',
      'Presupuesto sin compromiso',
    ],
    process: [
      'Evaluación del espacio',
      'Cálculo técnico de BTU',
      'Recomendación de equipos',
      'Presupuesto personalizado',
    ],
  },
]

export const PRODUCT_CATEGORIES = {
  residential: {
    name: 'Residencial',
    description: 'Sistemas ideales para hogares y apartamentos',
  },
  commercial: {
    name: 'Comercial',
    description: 'Soluciones para pequeños negocios y oficinas',
  },
  industrial: {
    name: 'Industrial',
    description: 'Sistemas de alta capacidad para grandes espacios',
  },
}

export const BENEFITS = [
  {
    title: 'Experiencia Comprobada',
    description: 'Años de experiencia en el mercado peruano',
    icon: 'FaAward',
  },
  {
    title: 'Garantía Total',
    description: 'Garantía en instalación y equipos',
    icon: 'FaShieldAlt',
  },
  {
    title: 'Precios Competitivos',
    description: 'Las mejores ofertas del mercado',
    icon: 'FaDollarSign',
  },
  {
    title: 'Atención 24/7',
    description: 'Servicio de emergencia disponible',
    icon: 'FaClock',
  },
]

export const NAVIGATION = [
  { name: 'Inicio', path: '/' },
  { name: 'Servicios', path: '/servicios' },
  { name: 'Productos', path: '/productos' },
  { name: 'Nosotros', path: '/nosotros' },
  { name: 'Contacto', path: '/contacto' },
]

export const EQUIPMENT_TYPES = {
  airConditioning: {
    title: 'Aire Acondicionado',
    types: [
      'Ventana',
      'Splits: Pared, Ducto y Piso Techo',
      'Fan Coil',
      'VRF',
      'Chiller',
    ],
  },
  refrigeration: {
    title: 'Refrigeración y Ventilación',
    types: [
      'Doméstica',
      'Industrial',
      'Inyección y Extracción de Aire',
      'Cortinas de Aire',
    ],
  },
}

export const CLIENTS = [
  {
    name: 'ARAMSA CONT GRL S.A.C.',
    image: '/images/aramsa.jpg',
  },
  {
    name: 'Notaría BECERRA SOSAYA MARCO ANTONIO',
    image: '/images/notaria.jpg',
  },
  {
    name: 'Consultorios de Clínica San Juan Bautista',
    image: '/images/clinica_san_juan_butista.jpg',
  },
  {
    name: 'Consultorios de Clínica La Luz',
    image: '/images/clinica_la_luz.png',
  },
  {
    name: 'Corporación Educa SAC',
    image: '/images/columbia.png',
  },
  {
    name: 'ROCA SAC',
    image: '/images/roca.jpg',
  },
  {
    name: 'FS Certificaciones S.A.C',
    image: '/images/fsc_certificaciones.jpg',
  },
  {
    name: 'Consulado de Colombia',
    image: '/images/cancilleria.png',
  },
  {
    name: 'Terminales Portuarios Peruanos',
    image: '/images/terminales_portuarios_peruanos.png',
  },
]

export const COMPANY_VALUES = {
  mission: 'Contribuir con el éxito de nuestros clientes, entregando productos y servicios de calidad, desarrollando relaciones a largo plazo.',
  vision: 'Llegar a ser número uno en todos los mercados que participemos, basado en el trabajo en equipo y crecimiento sostenido, logrando alcanzar la fortaleza de una gran empresa, manteniendo la agilidad y adaptabilidad de una pequeña empresa.',
  values: [
    {
      title: 'Compromiso',
      description: 'Comprometidos con la excelencia en cada proyecto y servicio que brindamos.',
      icon: 'FaHandshake',
    },
    {
      title: 'Profesionalismo',
      description: 'Personal altamente capacitado y actualizado con las mejores prácticas del sector.',
      icon: 'FaUserTie',
    },
    {
      title: 'Honestidad',
      description: 'Transparencia en nuestros procesos, precios y comunicación con los clientes.',
      icon: 'FaShieldAlt',
    },
    {
      title: 'Calidad',
      description: 'Garantizamos productos y servicios de la más alta calidad en cada entrega.',
      icon: 'FaAward',
    },
    {
      title: 'Confianza',
      description: 'Construimos relaciones duraderas basadas en la confianza y el cumplimiento de nuestras obligaciones.',
      icon: 'FaLock',
    },
    {
      title: 'Mejora Continua',
      description: 'Buscamos constantemente mejorar nuestros procesos y servicios para superar las expectativas.',
      icon: 'FaChartLine',
    },
  ],
}
