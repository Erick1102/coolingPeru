import { Section } from '../ui/Section'
import { Card } from '../ui/Card'
import { FaStar } from 'react-icons/fa'

const testimonials = [
  {
    id: '1',
    name: 'ROCA SAC',
    role: 'Empresa Cliente',
    company: 'ROCA SAC',
    content: 'Excelente servicio de instalación y mantenimiento. El equipo técnico de CoolingPerú es muy profesional y siempre están disponibles cuando los necesitamos. Recomendamos sus servicios.',
    rating: 5,
    image: '/images/roca.jpg',
  },
  {
    id: '2',
    name: 'ARAMSA CONT GRL S.A.C.',
    role: 'Empresa Cliente',
    company: 'ARAMSA CONT GRL S.A.C.',
    content: 'Hemos trabajado con CoolingPerú en varios proyectos y siempre superan nuestras expectativas. Su atención al detalle y profesionalismo son excepcionales.',
    rating: 5,
    image: '/images/aramsa.jpg',
  },
  {
    id: '3',
    name: 'Clínica La Luz',
    role: 'Institución de Salud',
    company: 'Consultorios de Clínica La Luz',
    content: 'El servicio de climatización instalado en nuestros consultorios ha mejorado significativamente el confort de nuestros pacientes y personal. Muy satisfechos con el trabajo realizado.',
    rating: 5,
    image: '/images/clinica_la_luz.png',
  },
  {
    id: '4',
    name: 'Consulado de Colombia',
    role: 'Institución Gubernamental',
    company: 'Consulado de Colombia',
    content: 'Profesionales altamente capacitados. La instalación se realizó con el mínimo de interrupciones y el sistema funciona perfectamente. Excelente servicio post-venta.',
    rating: 5,
    image: '/images/cancilleria.png',
  },
  {
    id: '5',
    name: 'FS Certificaciones S.A.C',
    role: 'Empresa Cliente',
    company: 'FS Certificaciones S.A.C',
    content: 'El mantenimiento preventivo que realizan mantiene nuestros equipos en óptimas condiciones. Servicio técnico eficiente y confiable.',
    rating: 5,
    image: '/images/fsc_certificaciones.jpg',
  },
  {
    id: '6',
    name: 'Terminales Portuarios Peruanos',
    role: 'Empresa Cliente',
    company: 'Terminales Portuarios Peruanos',
    content: 'Proyecto de gran envergadura ejecutado con excelencia. El equipo de CoolingPerú demostró gran capacidad técnica y cumplimiento de plazos.',
    rating: 5,
    image: '/images/terminales_portuarios_peruanos.png',
  },
]

export function TestimonialsSection() {
  return (
    <Section background="white">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-display font-bold text-secondary-900 mb-4">
          Lo que dicen nuestros clientes
        </h2>
        <p className="text-lg text-secondary-600 max-w-2xl mx-auto">
          La satisfacción de nuestros clientes es nuestra prioridad
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {testimonials.map((testimonial) => (
          <Card key={testimonial.id} hover>
            {testimonial.image && (
              <div className="mb-4 flex items-center justify-center h-20">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.company || testimonial.name}
                  className="max-h-full max-w-full object-contain"
                  loading="lazy"
                />
              </div>
            )}
            <div className="flex items-center mb-4">
              {[...Array(testimonial.rating)].map((_, i) => (
                <FaStar key={i} className="w-5 h-5 text-accent-500" />
              ))}
            </div>
            <p className="text-secondary-700 mb-6 italic">
              "{testimonial.content}"
            </p>
            <div>
              <p className="font-semibold text-secondary-900">
                {testimonial.name}
              </p>
              <p className="text-sm text-secondary-600">
                {testimonial.role}
                {testimonial.company && testimonial.company !== testimonial.name && ` - ${testimonial.company}`}
              </p>
            </div>
          </Card>
        ))}
      </div>
    </Section>
  )
}

