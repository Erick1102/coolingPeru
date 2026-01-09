import { Link } from 'react-router-dom'
import { Section } from '../ui/Section'
import { FiPhone, FiMail } from 'react-icons/fi'
import { COMPANY_INFO } from '@/constants'

export function CTASection() {
  return (
    <Section background="gradient" className="text-white">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
          ¿Listo para mejorar tu ambiente?
        </h2>
        <p className="text-xl text-primary-100 mb-8">
          Contáctanos hoy y recibe una cotización gratuita sin compromiso
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
          <a
            href={`tel:${COMPANY_INFO.phone}`}
            className="inline-flex items-center justify-center space-x-2 bg-white text-primary-600 px-6 py-3 rounded-lg font-semibold hover:bg-teal-50 hover:text-teal-600 transition-colors shadow-lg hover:shadow-xl"
          >
            <FiPhone className="w-5 h-5" />
            <span>Llamar Ahora</span>
          </a>
          <a
            href={`mailto:${COMPANY_INFO.email}`}
            className="inline-flex items-center justify-center space-x-2 bg-white/10 text-white border-2 border-white px-6 py-3 rounded-lg font-semibold hover:bg-white/20 transition-colors"
          >
            <FiMail className="w-5 h-5" />
            <span>Enviar Email</span>
          </a>
        </div>
        
        <Link to="/contacto">
          <button 
            className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold rounded-lg bg-accent-500 text-white hover:bg-accent-600 shadow-xl hover:shadow-2xl transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-accent-300 focus:ring-offset-2 focus:ring-offset-primary-600"
          >
            Solicitar Cotización Gratuita
          </button>
        </Link>
      </div>
    </Section>
  )
}

