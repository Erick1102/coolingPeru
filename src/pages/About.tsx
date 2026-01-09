import { Section } from '@/components/ui/Section'
import { Card } from '@/components/ui/Card'
import { Stat } from '@/components/ui/Stats'
import { Timeline } from '@/components/ui/Timeline'
import { BENEFITS } from '@/constants'
import { 
  FaAward, 
  FaShieldAlt, 
  FaDollarSign, 
  FaClock,
  FaUsers,
  FaStar,
  FaBuilding,
  FaClock as FaClock24
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
        {/* Estadísticas Destacadas */}
        <div className="mb-16">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <Stat value="500+" label="Clientes Satisfechos" icon={<FaUsers className="w-8 h-8" />} color="primary" />
            <Stat value="10+" label="Años de Experiencia" icon={<FaStar className="w-8 h-8" />} color="teal" />
            <Stat value="1000+" label="Instalaciones Realizadas" icon={<FaBuilding className="w-8 h-8" />} color="accent" />
            <Stat value="24/7" label="Atención Disponible" icon={<FaClock24 className="w-8 h-8" />} color="coral" />
          </div>
        </div>
        
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
        
        {/* Timeline */}
        <div className="mb-16">
          <h2 className="text-3xl font-display font-bold text-secondary-900 mb-8 text-center">
            Nuestra Trayectoria
          </h2>
          <Timeline
            items={[
              {
                year: '2014',
                title: 'Fundación',
                description: 'CoolingPerú inicia operaciones con un equipo pequeño pero comprometido con la excelencia.',
              },
              {
                year: '2017',
                title: 'Expansión',
                description: 'Ampliamos nuestros servicios a nivel nacional y certificamos a nuestro equipo técnico.',
              },
              {
                year: '2020',
                title: 'Reconocimiento',
                description: 'Alcanzamos más de 500 clientes satisfechos y recibimos certificaciones internacionales.',
              },
              {
                year: '2024',
                title: 'Liderazgo',
                description: 'Nos consolidamos como líderes en climatización en el Perú con más de 1000 instalaciones.',
              },
            ]}
          />
        </div>
        
        <div className="mb-16">
          <h2 className="text-3xl font-display font-bold text-secondary-900 mb-8 text-center">
            Nuestros Valores
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {BENEFITS.map((benefit, index) => {
              const IconComponent = iconMap[benefit.icon] || FaAward
              const colorClasses = [
                { bg: 'bg-primary-100', text: 'text-primary-600' },
                { bg: 'bg-teal-100', text: 'text-teal-600' },
                { bg: 'bg-accent-100', text: 'text-accent-600' },
                { bg: 'bg-coral-100', text: 'text-coral-600' },
              ]
              const colors = colorClasses[index % colorClasses.length]
              
              return (
                <Card key={index} hover className="text-center">
                  <div className={`w-16 h-16 ${colors.bg} rounded-full flex items-center justify-center mx-auto mb-4`}>
                    <IconComponent className={`w-8 h-8 ${colors.text}`} />
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
    </>
  )
}

