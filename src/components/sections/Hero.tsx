import { Link } from 'react-router-dom'
import { FiArrowRight } from 'react-icons/fi'
import { Button } from '../ui/Button'

export function Hero() {
  return (
    <section className="relative bg-gradient-to-br from-primary-600 via-primary-700 to-primary-800 text-white overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
          backgroundSize: '40px 40px'
        }}></div>
      </div>
      
      <div className="container-custom relative z-10 py-24 md:py-32 lg:py-40">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6 leading-tight">
            Climatización Profesional
            <span className="block text-primary-200">para tu Hogar y Negocio</span>
          </h1>
          <p className="text-xl md:text-2xl text-primary-100 mb-8 leading-relaxed">
            Especialistas en venta e instalación de aire acondicionado. 
            Soluciones de calidad para hogares, negocios e industrias.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link to="/contacto">
              <Button size="lg" variant="secondary" className="group">
                Solicitar Cotización
                <FiArrowRight className="inline-block ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
            <Link to="/servicios">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary-600">
                Ver Servicios
              </Button>
            </Link>
          </div>
        </div>
      </div>
      
      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent"></div>
    </section>
  )
}

