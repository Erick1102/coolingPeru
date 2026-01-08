import { Link } from 'react-router-dom'
import { Section } from '../ui/Section'
import { Button } from '../ui/Button'
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
            className="inline-flex items-center justify-center space-x-2 bg-white text-primary-600 px-6 py-3 rounded-lg font-semibold hover:bg-primary-50 transition-colors"
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
          <Button size="lg" variant="secondary" className="bg-white text-primary-600 hover:bg-primary-50">
            Solicitar Cotización Gratuita
          </Button>
        </Link>
      </div>
    </Section>
  )
}

