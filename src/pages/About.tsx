import { Section } from '@/components/ui/Section'
import { Card } from '@/components/ui/Card'
import { Stat } from '@/components/ui/Stats'
import { BENEFITS, COMPANY_VALUES, CLIENTS } from '@/constants'
import { 
  FaAward, 
  FaShieldAlt, 
  FaDollarSign, 
  FaClock,
  FaUsers,
  FaStar,
  FaBuilding,
  FaClock as FaClock24,
  FaHandshake,
  FaUserTie,
  FaLock,
  FaChartLine
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
        
        {/* Misión, Visión y Valores */}
        <div className="space-y-12 mb-16">
          <div className="bg-primary-50 rounded-xl p-8 md:p-12">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-display font-bold text-secondary-900 mb-4">
                Nuestra Misión
              </h2>
              <p className="text-lg text-secondary-700">
                {COMPANY_VALUES.mission}
              </p>
            </div>
          </div>
          
          <div className="bg-teal-50 rounded-xl p-8 md:p-12">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-display font-bold text-secondary-900 mb-4">
                Nuestra Visión
              </h2>
              <p className="text-lg text-secondary-700">
                {COMPANY_VALUES.vision}
              </p>
            </div>
          </div>
        </div>
        
        {/* Valores */}
        <div className="mb-16">
          <h2 className="text-3xl font-display font-bold text-secondary-900 mb-8 text-center">
            Nuestros Valores
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {COMPANY_VALUES.values.map((value, index) => {
              const colorClasses = [
                { bg: 'bg-primary-100', text: 'text-primary-600' },
                { bg: 'bg-teal-100', text: 'text-teal-600' },
                { bg: 'bg-accent-100', text: 'text-accent-600' },
                { bg: 'bg-coral-100', text: 'text-coral-600' },
                { bg: 'bg-success-100', text: 'text-success-600' },
                { bg: 'bg-primary-200', text: 'text-primary-700' },
              ]
              const colors = colorClasses[index % colorClasses.length]
              
              // Mapa de iconos para cada valor
              const valueIconMap: Record<string, React.ComponentType<{ className?: string }>> = {
                FaHandshake,
                FaUserTie,
                FaShieldAlt,
                FaAward,
                FaLock,
                FaChartLine,
              }
              
              const IconComponent = valueIconMap[value.icon] || FaHandshake
              
              return (
                <Card key={index} hover className="text-center">
                  <div className={`w-16 h-16 ${colors.bg} rounded-full flex items-center justify-center mx-auto mb-4`}>
                    <IconComponent className={`w-8 h-8 ${colors.text}`} />
                  </div>
                  <h3 className="text-xl font-display font-semibold text-secondary-900 mb-2">
                    {value.title}
                  </h3>
                  <p className="text-secondary-600">
                    {value.description}
                  </p>
                </Card>
              )
            })}
          </div>
        </div>
        
        {/* Clientes */}
        <div className="mb-16">
          <h2 className="text-3xl font-display font-bold text-secondary-900 mb-8 text-center">
            Algunos de Nuestros Clientes
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {CLIENTS.map((client, index) => (
              <Card key={index} className="text-center p-4 hover:shadow-lg transition-shadow flex flex-col items-center justify-center min-h-[150px]">
                {client.image ? (
                  <div className="mb-3 flex items-center justify-center h-24">
                    <img 
                      src={client.image} 
                      alt={client.name}
                      className="max-h-full max-w-full object-contain"
                      loading="lazy"
                    />
                  </div>
                ) : (
                  <div className="flex items-center justify-center mb-3 h-24">
                    <FaBuilding className="w-8 h-8 text-primary-600" />
                  </div>
                )}
                <p className="text-sm text-secondary-700 font-semibold">{client.name}</p>
              </Card>
            ))}
          </div>
        </div>
      </Section>
    </>
  )
}

