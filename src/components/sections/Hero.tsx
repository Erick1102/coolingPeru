import { Link } from 'react-router-dom'
import { FiArrowRight, FiZap, FiShield, FiDollarSign, FiStar } from 'react-icons/fi'
import { Button } from '../ui/Button'
import { TextCarousel } from '../ui/TextCarousel'

const rotatingTexts = [
  'para tu Hogar y Negocio',
  'con Garantía Total',
  'Instalación en 24 horas',
  'Ahorro Energético Certificado',
  'Técnicos Certificados',
]

export function Hero() {
  return (
    <section className="relative overflow-hidden pb-20 md:pb-28">
      {/* Mejorado degradado más suave y difuminado - se extiende completamente incluyendo el padding */}
      <div className="absolute top-0 left-0 right-0 bottom-0 bg-gradient-to-br from-primary-500 via-primary-600 to-primary-700">
        <div className="absolute inset-0 bg-gradient-to-tr from-primary-400/30 via-transparent to-primary-800/40"></div>
        <div className="absolute inset-0 bg-gradient-to-bl from-transparent via-primary-600/50 to-primary-700"></div>
      </div>
      
      {/* Background Pattern sutil */}
      <div className="absolute top-0 left-0 right-0 bottom-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
          backgroundSize: '60px 60px'
        }}></div>
      </div>
      
      {/* Elementos decorativos de fondo - dentro del degradado */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-accent-500/10 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl pointer-events-none"></div>
      
      {/* Contenedor principal con padding optimizado */}
      <div className="container-custom relative z-10 py-8 md:py-12 lg:py-16 text-white">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Contenido principal */}
          <div>
            <div className="mb-3">
              <span className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-sm font-semibold text-white border border-white/20">
                <FiStar className="w-4 h-4 text-accent-400" />
                Más de 10 años de experiencia
              </span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-4 leading-tight">
              Climatización Profesional
              <br />
              <span className="block mt-2">
                <TextCarousel 
                  texts={rotatingTexts}
                  interval={3500}
                  className="text-accent-400 font-extrabold"
                />
              </span>
            </h1>
            
            <div className="space-y-2 mb-6">
              <p className="text-lg md:text-xl text-primary-50 leading-relaxed">
                Especialistas en venta e instalación de aire acondicionado con certificación internacional.
              </p>
              <p className="text-base md:text-lg text-primary-100 leading-relaxed">
                Soluciones de calidad certificada para hogares, negocios e industrias.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-3 mb-6">
              <Link to="/contacto">
                <Button size="lg" variant="primary" className="group bg-accent-500 hover:bg-accent-600 text-white border-0 shadow-2xl hover:shadow-accent-500/50 transition-all">
                  Solicitar Cotización Gratuita
                  <FiArrowRight className="inline-block ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Link to="/servicios">
                <Button size="lg" variant="outline" className="border-2 border-white/30 text-white hover:bg-white/10 hover:border-white/50 backdrop-blur-sm">
                  Ver Servicios
                </Button>
              </Link>
            </div>
            
            {/* Puntos destacados - dentro del contenedor */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-4 border-t border-white/20">
              <div className="flex items-center space-x-2">
                <div className="w-10 h-10 bg-accent-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <FiZap className="w-5 h-5 text-accent-400" />
                </div>
                <div>
                  <div className="text-xs text-primary-200">Instalación</div>
                  <div className="text-sm text-white font-semibold">24 horas</div>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-10 h-10 bg-teal-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <FiShield className="w-5 h-5 text-teal-400" />
                </div>
                <div>
                  <div className="text-xs text-primary-200">Garantía</div>
                  <div className="text-sm text-white font-semibold">Extendida</div>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-10 h-10 bg-coral-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <FiDollarSign className="w-5 h-5 text-coral-400" />
                </div>
                <div>
                  <div className="text-xs text-primary-200">Precios</div>
                  <div className="text-sm text-white font-semibold">Accesibles</div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Imagen del Home */}
          <div className="hidden lg:block">
            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white/20">
                <img
                  src="/images/img_home.png"
                  alt="Sistemas de climatización profesional"
                  className="w-full h-auto object-cover"
                  loading="eager"
                />
                {/* Overlay sutil para mejor integración con el fondo */}
                <div className="absolute inset-0 bg-gradient-to-t from-primary-700/20 to-transparent pointer-events-none"></div>
              </div>
              {/* Elementos decorativos flotantes - dentro del contenedor */}
              <div className="absolute -top-2 -right-2 w-20 h-20 bg-accent-500/20 rounded-full blur-xl pointer-events-none"></div>
              <div className="absolute -bottom-2 -left-2 w-24 h-24 bg-teal-500/20 rounded-full blur-xl pointer-events-none"></div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Decorative Elements mejorado - transición suave al siguiente contenido, empieza después de todo el contenido */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white via-white/90 to-transparent pointer-events-none"></div>
    </section>
  )
}

