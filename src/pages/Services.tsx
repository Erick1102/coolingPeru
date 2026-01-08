import { Section } from '@/components/ui/Section'
import { Card } from '@/components/ui/Card'
import { Button } from '@/components/ui/Button'
import { Link } from 'react-router-dom'
import { SERVICES } from '@/constants'
import { 
  FaTools, 
  FaWrench, 
  FaCog, 
  FaLightbulb 
} from 'react-icons/fa'
import { FiCheck } from 'react-icons/fi'

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  FaTools,
  FaWrench,
  FaCog,
  FaLightbulb,
}

export function Services() {
  return (
    <>
      <Section background="primary" className="text-white">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-5xl font-display font-bold mb-6">
            Nuestros Servicios
          </h1>
          <p className="text-xl text-primary-100">
            Ofrecemos soluciones completas de climatización con el mejor servicio, 
            garantía y atención personalizada para cada necesidad.
          </p>
        </div>
      </Section>
      
      <Section background="white">
        <div className="space-y-16">
          {SERVICES.map((service) => {
            const IconComponent = iconMap[service.icon] || FaTools
            const isEven = parseInt(service.id) % 2 === 0
            
            return (
              <div
                key={service.id}
                className={`flex flex-col ${isEven ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-center gap-8`}
              >
                <div className="flex-1">
                  <div className="w-20 h-20 bg-primary-100 rounded-full flex items-center justify-center mb-6">
                    <IconComponent className="w-10 h-10 text-primary-600" />
                  </div>
                  <h2 className="text-3xl font-display font-bold text-secondary-900 mb-4">
                    {service.title}
                  </h2>
                  <p className="text-lg text-secondary-600 mb-6">
                    {service.description}
                  </p>
                  <ul className="space-y-3 mb-8">
                    {service.features.map((feature, index) => (
                      <li key={index} className="flex items-start">
                        <FiCheck className="w-6 h-6 text-primary-600 mr-3 flex-shrink-0 mt-0.5" />
                        <span className="text-secondary-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Link to="/contacto">
                    <Button variant="primary">
                      Solicitar Servicio
                    </Button>
                  </Link>
                </div>
                <div className="flex-1">
                  <Card className="p-0 overflow-hidden">
                    <div className="aspect-video bg-gradient-to-br from-primary-100 to-primary-200 flex items-center justify-center">
                      <IconComponent className="w-24 h-24 text-primary-600 opacity-50" />
                    </div>
                  </Card>
                </div>
              </div>
            )
          })}
        </div>
      </Section>
      
      <Section background="gray">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-display font-bold text-secondary-900 mb-4">
            ¿Necesitas más información?
          </h2>
          <p className="text-lg text-secondary-600 mb-8">
            Nuestro equipo está listo para ayudarte a encontrar la mejor solución 
            para tus necesidades de climatización.
          </p>
          <Link to="/contacto">
            <Button size="lg" variant="primary">
              Contactar Ahora
            </Button>
          </Link>
        </div>
      </Section>
    </>
  )
}

