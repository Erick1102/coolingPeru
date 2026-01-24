import { Section } from '../ui/Section'

interface Brand {
  name: string
  description: string
  logo?: string // Ruta a la imagen del logo (ej: '/images/brands/daikin.svg')
  logoAlt?: string // Texto alternativo para el logo
}

const BRANDS: Brand[] = [
  { 
    name: 'Daikin', 
    description: 'Tecnología japonesa de vanguardia',
    logo: '/images/brands/daikin.svg', // Añade el logo aquí cuando lo tengas
    logoAlt: 'Daikin Logo'
  },
  { 
    name: 'Mitsubishi Electric', 
    description: 'Eficiencia y confiabilidad',
    logo: '/images/brands/mitsubishi.svg',
    logoAlt: 'Mitsubishi Electric Logo'
  },
  { 
    name: 'LG', 
    description: 'Innovación y diseño',
    logo: '/images/brands/lg.svg',
    logoAlt: 'LG Logo'
  },
  { 
    name: 'Samsung', 
    description: 'Calidad premium',
    logo: '/images/brands/samsung.svg',
    logoAlt: 'Samsung Logo'
  },
  { 
    name: 'Carrier', 
    description: 'Líder mundial en climatización',
    logo: '/images/brands/carrier.svg',
    logoAlt: 'Carrier Logo'
  },
  { 
    name: 'York', 
    description: 'Soluciones comerciales e industriales',
    logo: '/images/brands/york.svg',
    logoAlt: 'York Logo'
  },
  { 
    name: 'Trane', 
    description: 'Excelencia en climatización',
    logo: '/images/brands/trane.svg',
    logoAlt: 'Trane Logo'
  },
  { 
    name: 'Fujitsu', 
    description: 'Tecnología japonesa avanzada',
    logo: '/images/brands/fujitsu.svg',
    logoAlt: 'Fujitsu Logo'
  },
  { 
    name: 'Panasonic', 
    description: 'Eficiencia energética',
    logo: '/images/brands/panasonic.svg',
    logoAlt: 'Panasonic Logo'
  },
  { 
    name: 'Midea', 
    description: 'Calidad y precio competitivo',
    logo: '/images/brands/midea.svg',
    logoAlt: 'Midea Logo'
  },
  { 
    name: 'Gree', 
    description: 'Innovación constante',
    logo: '/images/brands/gree.svg',
    logoAlt: 'Gree Logo'
  },
  { 
    name: 'Hitachi', 
    description: 'Confiabilidad probada',
    logo: '/images/brands/hitachi.svg',
    logoAlt: 'Hitachi Logo'
  },
]

export function BrandsSection() {
  return (
    <Section background="white" className="py-12 md:py-16">
      <div className="container-custom">
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-secondary-900 mb-3">
            Marcas de Confianza
          </h2>
          <p className="text-lg text-secondary-600 max-w-2xl mx-auto">
            Trabajamos con las marcas más reconocidas y confiables del mercado mundial de climatización
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
          {BRANDS.map((brand, index) => (
            <div
              key={brand.name}
              className="group relative bg-white rounded-xl p-6 border-2 border-secondary-200 hover:border-primary-500 transition-all duration-300 hover:shadow-lg flex flex-col items-center justify-center min-h-[140px]"
              style={{
                animationDelay: `${index * 50}ms`,
              }}
            >
              {/* Logo de la marca si está disponible */}
              {brand.logo ? (
                <div className="mb-4 flex items-center justify-center w-full h-20 px-4">
                  <div className="relative w-full h-full flex items-center justify-center">
                    <img
                      src={brand.logo}
                      alt={brand.logoAlt || `${brand.name} Logo`}
                      className="w-full h-full object-contain object-center opacity-80 group-hover:opacity-100 transition-opacity"
                      style={{
                        maxHeight: '80px',
                        maxWidth: '140px',
                        width: 'auto',
                        height: 'auto',
                      }}
                      onError={(e) => {
                        // Si el logo no existe, ocultar la imagen y mostrar solo el nombre
                        const target = e.target as HTMLImageElement
                        target.style.display = 'none'
                      }}
                    />
                  </div>
                </div>
              ) : null}
              
              <div className="text-center">
                <h3 className={`font-display font-semibold text-secondary-900 mb-2 group-hover:text-primary-600 transition-colors ${
                  brand.logo ? 'text-base' : 'text-lg'
                }`}>
                  {brand.name}
                </h3>
                <p className="text-sm text-secondary-500">
                  {brand.description}
                </p>
              </div>
              
              {/* Efecto hover sutil */}
              <div className="absolute inset-0 rounded-xl bg-primary-500/0 group-hover:bg-primary-500/5 transition-colors duration-300 pointer-events-none"></div>
            </div>
          ))}
        </div>
        
        <div className="mt-8 text-center">
          <p className="text-secondary-600 text-sm">
            Y muchas más marcas líderes en el mercado
          </p>
        </div>
      </div>
    </Section>
  )
}

