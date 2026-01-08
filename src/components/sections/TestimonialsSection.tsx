import { Section } from '../ui/Section'
import { Card } from '../ui/Card'
import { FaStar } from 'react-icons/fa'

const testimonials = [
  {
    id: '1',
    name: 'María González',
    role: 'Propietaria',
    company: 'Restaurante El Buen Sabor',
    content: 'Excelente servicio. Instalaron el aire acondicionado en nuestro restaurante y el ambiente mejoró muchísimo. Muy profesionales y puntuales.',
    rating: 5,
  },
  {
    id: '2',
    name: 'Carlos Ramírez',
    role: 'Gerente',
    company: 'Oficinas TechCorp',
    content: 'El mantenimiento preventivo que realizan es impecable. Nuestros equipos funcionan perfectamente y el servicio técnico es muy eficiente.',
    rating: 5,
  },
  {
    id: '3',
    name: 'Ana Martínez',
    role: 'Dueña de Casa',
    content: 'Instalaron el sistema en mi hogar y quedé muy satisfecha. El proceso fue rápido, limpio y el equipo funciona perfectamente. Los recomiendo.',
    rating: 5,
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
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {testimonials.map((testimonial) => (
          <Card key={testimonial.id} hover>
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
                {testimonial.company && ` - ${testimonial.company}`}
              </p>
            </div>
          </Card>
        ))}
      </div>
    </Section>
  )
}

