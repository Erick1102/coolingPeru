import { Section } from '@/components/ui/Section'
import { Card } from '@/components/ui/Card'
import { Button } from '@/components/ui/Button'
import { Badge } from '@/components/ui/Badge'
import { Link } from 'react-router-dom'
import { SERVICES } from '@/constants'
import { 
  FaTools, 
  FaWrench, 
  FaCog, 
  FaLightbulb 
} from 'react-icons/fa'
import { FiCheck, FiArrowRight } from 'react-icons/fi'

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
          {SERVICES.map((service, index) => {
            const IconComponent = iconMap[service.icon] || FaTools
            const isEven = parseInt(service.id) % 2 === 0
            const colorClasses = [
              { bg: 'bg-primary-100', text: 'text-primary-600', check: 'text-primary-600', gradient: 'from-primary-100 to-primary-200' },
              { bg: 'bg-teal-100', text: 'text-teal-600', check: 'text-teal-600', gradient: 'from-teal-100 to-teal-200' },
              { bg: 'bg-accent-100', text: 'text-accent-600', check: 'text-accent-600', gradient: 'from-accent-100 to-accent-200' },
              { bg: 'bg-coral-100', text: 'text-coral-600', check: 'text-coral-600', gradient: 'from-coral-100 to-coral-200' },
            ]
            const colors = colorClasses[index % colorClasses.length]
            
            return (
              <div
                key={service.id}
                className={`flex flex-col ${isEven ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-center gap-8`}
              >
                <div className="flex-1">
                  <div className="flex items-center gap-4 mb-4">
                    <div className={`w-20 h-20 ${colors.bg} rounded-full flex items-center justify-center`}>
                      <IconComponent className={`w-10 h-10 ${colors.text}`} />
                    </div>
                    {service.badge && (
                      <Badge variant={service.badgeVariant || 'primary'}>
                        {service.badge}
                      </Badge>
                    )}
                  </div>
                  <h2 className="text-3xl font-display font-bold text-secondary-900 mb-4">
                    {service.title}
                  </h2>
                  <p className="text-lg text-secondary-600 mb-6">
                    {service.description}
                  </p>
                  
                  <div className="mb-6">
                    <h3 className="text-lg font-semibold text-secondary-900 mb-3">Características:</h3>
                    <ul className="space-y-3">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start">
                          <FiCheck className={`w-6 h-6 ${colors.check} mr-3 flex-shrink-0 mt-0.5`} />
                          <span className="text-secondary-700">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  {service.process && (
                    <div className="mb-6 p-4 bg-secondary-50 rounded-lg">
                      <h3 className="text-lg font-semibold text-secondary-900 mb-3">Proceso:</h3>
                      <div className="space-y-2">
                        {service.process.map((step, idx) => (
                          <div key={idx} className="flex items-center text-secondary-700">
                            <span className="w-6 h-6 bg-primary-600 text-white rounded-full flex items-center justify-center text-xs font-bold mr-3 flex-shrink-0">
                              {idx + 1}
                            </span>
                            <span>{step}</span>
                            {idx < service.process.length - 1 && (
                              <FiArrowRight className="ml-auto text-secondary-400" />
                            )}
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                  
                  <Link to="/contacto">
                    <Button variant="primary" className="bg-accent-500 hover:bg-accent-600">
                      Solicitar Servicio
                    </Button>
                  </Link>
                </div>
                <div className="flex-1">
                  <Card className="p-0 overflow-hidden">
                    <div className={`aspect-video bg-gradient-to-br ${colors.gradient} flex items-center justify-center`}>
                      <IconComponent className={`w-24 h-24 ${colors.text} opacity-50`} />
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
            <Button size="lg" variant="primary" className="bg-accent-500 hover:bg-accent-600">
              Contactar Ahora
            </Button>
          </Link>
        </div>
      </Section>
    </>
  )
}

