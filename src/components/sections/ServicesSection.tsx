import { Link } from 'react-router-dom'
import { Section } from '../ui/Section'
import { Card } from '../ui/Card'
import { Button } from '../ui/Button'
import { SERVICES } from '@/constants'
import { 
  FaTools, 
  FaWrench, 
  FaCog, 
  FaLightbulb 
} from 'react-icons/fa'

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  FaTools,
  FaWrench,
  FaCog,
  FaLightbulb,
}

export function ServicesSection() {
  return (
    <Section id="servicios" background="white">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-display font-bold text-secondary-900 mb-4">
          Nuestros Servicios
        </h2>
        <p className="text-lg text-secondary-600 max-w-2xl mx-auto">
          Soluciones completas de climatización con el mejor servicio y garantía
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {SERVICES.map((service) => {
          const IconComponent = iconMap[service.icon] || FaTools
          
          return (
            <Card key={service.id} hover className="text-center">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <IconComponent className="w-8 h-8 text-primary-600" />
              </div>
              <h3 className="text-xl font-display font-semibold text-secondary-900 mb-3">
                {service.title}
              </h3>
              <p className="text-secondary-600 mb-4">
                {service.description}
              </p>
              <ul className="text-sm text-secondary-500 space-y-2 mb-6 text-left">
                {service.features.map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-primary-600 mr-2">✓</span>
                    {feature}
                  </li>
                ))}
              </ul>
            </Card>
          )
        })}
      </div>
      
      <div className="text-center mt-12">
        <Link to="/servicios">
          <Button variant="outline" size="lg">
            Ver Todos los Servicios
          </Button>
        </Link>
      </div>
    </Section>
  )
}

