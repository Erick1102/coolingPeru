export const COMPANY_INFO = {
  name: 'CoolingPerú',
  tagline: 'Especialistas en Climatización',
  email: 'contacto@coolingperu.com',
  phone: '+51 999 999 999',
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
    title: 'Instalación Profesional',
    description: 'Instalación certificada de sistemas de aire acondicionado con garantía de calidad.',
    icon: 'FaTools',
    badge: 'Más Popular',
    badgeVariant: 'accent' as const,
    features: [
      'Instalación certificada',
      'Garantía de trabajo',
      'Técnicos especializados',
      'Limpieza post-instalación',
    ],
    process: [
      'Consulta y evaluación',
      'Presupuesto detallado',
      'Instalación profesional',
      'Garantía extendida',
    ],
  },
  {
    id: 'mantenimiento',
    title: 'Mantenimiento Preventivo',
    description: 'Mantenimiento regular para optimizar el rendimiento y prolongar la vida útil de tu equipo.',
    icon: 'FaWrench',
    badge: 'Recomendado',
    badgeVariant: 'teal' as const,
    features: [
      'Limpieza profunda',
      'Revisión de componentes',
      'Optimización de rendimiento',
      'Reporte detallado',
    ],
    process: [
      'Inspección inicial',
      'Limpieza completa',
      'Ajustes y calibración',
      'Reporte de estado',
    ],
  },
  {
    id: 'reparacion',
    title: 'Reparación y Servicio Técnico',
    description: 'Servicio técnico especializado para resolver cualquier problema con tu equipo.',
    icon: 'FaCog',
    badge: '24/7',
    badgeVariant: 'coral' as const,
    features: [
      'Diagnóstico gratuito',
      'Reparación rápida',
      'Repuestos originales',
      'Servicio de emergencia',
    ],
    process: [
      'Diagnóstico gratuito',
      'Cotización de reparación',
      'Reparación profesional',
      'Prueba y garantía',
    ],
  },
  {
    id: 'consultoria',
    title: 'Consultoría Técnica',
    description: 'Asesoramiento profesional para elegir el mejor sistema según tus necesidades.',
    icon: 'FaLightbulb',
    badge: 'Sin Costo',
    badgeVariant: 'success' as const,
    features: [
      'Análisis de necesidades',
      'Cálculo de carga térmica',
      'Recomendaciones personalizadas',
      'Presupuesto sin compromiso',
    ],
    process: [
      'Análisis de espacio',
      'Cálculo de BTU',
      'Recomendación técnica',
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

