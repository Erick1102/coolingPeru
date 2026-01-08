import { Section } from '@/components/ui/Section'
import { Card } from '@/components/ui/Card'
import { Button } from '@/components/ui/Button'
import { Link } from 'react-router-dom'
import { BENEFITS } from '@/constants'
import { 
  FaAward, 
  FaShieldAlt, 
  FaDollarSign, 
  FaClock 
} from 'react-icons/fa'

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  FaAward,
  FaShieldAlt,
  FaDollarSign,
  FaClock,
}

export function About() {
  return (
    <>
      <Section background="primary" className="text-white">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-5xl font-display font-bold mb-6">
            Sobre Nosotros
          </h1>
          <p className="text-xl text-primary-100">
            Especialistas en climatización con años de experiencia 
            brindando soluciones de calidad en todo el Perú.
          </p>
        </div>
      </Section>
      
      <Section background="white">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h2 className="text-3xl font-display font-bold text-secondary-900 mb-6">
              Nuestra Historia
            </h2>
            <div className="space-y-4 text-secondary-700">
              <p>
                CoolingPerú nació con la visión de proporcionar soluciones de climatización 
                de alta calidad para hogares, negocios e industrias en todo el Perú. 
                Desde nuestros inicios, nos hemos comprometido con la excelencia en cada proyecto.
              </p>
              <p>
                Nuestro equipo está formado por técnicos certificados y especialistas en 
                climatización que se mantienen actualizados con las últimas tecnologías 
                y mejores prácticas del sector.
              </p>
              <p>
                Trabajamos con las mejores marcas del mercado y ofrecemos garantías 
                completas en todos nuestros servicios, asegurando la satisfacción y 
                tranquilidad de nuestros clientes.
              </p>
            </div>
          </div>
          <div>
            <Card className="p-0 overflow-hidden">
              <div className="aspect-video bg-gradient-to-br from-primary-100 to-primary-200 flex items-center justify-center">
                <span className="text-primary-600 font-semibold text-lg">
                  Imagen de la Empresa
                </span>
              </div>
            </Card>
          </div>
        </div>
        
        <div className="mb-16">
          <h2 className="text-3xl font-display font-bold text-secondary-900 mb-8 text-center">
            Nuestros Valores
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {BENEFITS.map((benefit, index) => {
              const IconComponent = iconMap[benefit.icon] || FaAward
              
              return (
                <Card key={index} hover className="text-center">
                  <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <IconComponent className="w-8 h-8 text-primary-600" />
                  </div>
                  <h3 className="text-xl font-display font-semibold text-secondary-900 mb-2">
                    {benefit.title}
                  </h3>
                  <p className="text-secondary-600">
                    {benefit.description}
                  </p>
                </Card>
              )
            })}
          </div>
        </div>
        
        <div className="bg-secondary-50 rounded-xl p-8 md:p-12">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-display font-bold text-secondary-900 mb-4">
              Nuestra Misión
            </h2>
            <p className="text-lg text-secondary-700 mb-6">
              Proporcionar soluciones de climatización de la más alta calidad, 
              combinando experiencia técnica, productos de primera línea y un servicio 
              al cliente excepcional, para crear ambientes cómodos y eficientes.
            </p>
            <h2 className="text-3xl font-display font-bold text-secondary-900 mb-4 mt-8">
              Nuestra Visión
            </h2>
            <p className="text-lg text-secondary-700">
              Ser la empresa líder en climatización en el Perú, reconocida por nuestra 
              excelencia, innovación y compromiso con la satisfacción del cliente.
            </p>
          </div>
        </div>
      </Section>
      
      <Section background="gray">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-display font-bold text-secondary-900 mb-4">
            ¿Quieres trabajar con nosotros?
          </h2>
          <p className="text-lg text-secondary-600 mb-8">
            Estamos siempre buscando talento. Contáctanos para conocer las oportunidades disponibles.
          </p>
          <Link to="/contacto">
            <Button size="lg" variant="primary">
              Contáctanos
            </Button>
          </Link>
        </div>
      </Section>
    </>
  )
}

