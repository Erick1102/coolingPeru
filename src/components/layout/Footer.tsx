import { useState, FormEvent } from 'react'
import { Link } from 'react-router-dom'
import { FiMail, FiPhone, FiMapPin, FiClock, FiCheck, FiSend } from 'react-icons/fi'
import { FaFacebook, FaInstagram, FaLinkedin, FaWhatsapp, FaAward, FaShieldAlt, FaCreditCard, FaCcVisa, FaCcMastercard, FaCcPaypal } from 'react-icons/fa'
import { COMPANY_INFO, NAVIGATION, SERVICES } from '@/constants'

export function Footer() {
  const currentYear = new Date().getFullYear()
  const [email, setEmail] = useState('')
  const [subscribed, setSubscribed] = useState(false)
  
  const handleNewsletterSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    // Aquí iría la lógica de suscripción
    console.log('Newsletter subscription:', email)
    setSubscribed(true)
    setEmail('')
    setTimeout(() => setSubscribed(false), 3000)
  }
  
  const isBusinessHours = () => {
    const now = new Date()
    const day = now.getDay()
    const hour = now.getHours()
    return day >= 1 && day <= 5 && hour >= 8 && hour < 18
  }
  
  return (
    <footer className="bg-secondary-900 text-white">
      <div className="container-custom py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <img 
                src="/images/logoCP.png" 
                alt={`${COMPANY_INFO.name} Logo`}
                className="h-10 w-auto object-contain"
              />
              <span className="text-xl font-display font-bold">
                {COMPANY_INFO.name}
              </span>
            </div>
            <p className="text-secondary-400 mb-4">
              {COMPANY_INFO.tagline}
            </p>
            <div className="flex space-x-4">
              <a
                href={COMPANY_INFO.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="text-secondary-400 hover:text-primary-400 transition-colors"
                aria-label="Facebook"
              >
                <FaFacebook className="w-5 h-5" />
              </a>
              <a
                href={COMPANY_INFO.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="text-secondary-400 hover:text-primary-400 transition-colors"
                aria-label="Instagram"
              >
                <FaInstagram className="w-5 h-5" />
              </a>
              <a
                href={COMPANY_INFO.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-secondary-400 hover:text-primary-400 transition-colors"
                aria-label="LinkedIn"
              >
                <FaLinkedin className="w-5 h-5" />
              </a>
              <a
                href={COMPANY_INFO.social.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="text-secondary-400 hover:text-green-400 transition-colors"
                aria-label="WhatsApp"
              >
                <FaWhatsapp className="w-5 h-5" />
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="font-display font-semibold text-lg mb-4">Enlaces Rápidos</h3>
            <ul className="space-y-2">
              {NAVIGATION.map((item) => (
                <li key={item.path}>
                  <Link
                    to={item.path}
                    className="text-secondary-400 hover:text-primary-400 transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Services */}
          <div>
            <h3 className="font-display font-semibold text-lg mb-4">Servicios</h3>
            <ul className="space-y-2">
              {SERVICES.map((service) => (
                <li key={service.id}>
                  <Link
                    to="/servicios"
                    className="text-secondary-400 hover:text-primary-400 transition-colors flex items-center gap-2"
                  >
                    <FiCheck className="w-3 h-3" />
                    {service.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Contact Info Mejorado */}
          <div>
            <h3 className="font-display font-semibold text-lg mb-4">Contacto</h3>
            <ul className="space-y-3 mb-4">
              <li className="flex items-start space-x-3">
                <FiPhone className="w-5 h-5 text-primary-400 mt-1 flex-shrink-0" />
                <a
                  href={`tel:${COMPANY_INFO.phone}`}
                  className="text-secondary-400 hover:text-primary-400 transition-colors"
                >
                  {COMPANY_INFO.phone}
                </a>
              </li>
              <li className="flex items-start space-x-3">
                <FiMail className="w-5 h-5 text-primary-400 mt-1 flex-shrink-0" />
                <a
                  href={`mailto:${COMPANY_INFO.email}`}
                  className="text-secondary-400 hover:text-primary-400 transition-colors break-all"
                >
                  {COMPANY_INFO.email}
                </a>
              </li>
              <li className="flex items-start space-x-3">
                <FiMapPin className="w-5 h-5 text-primary-400 mt-1 flex-shrink-0" />
                <span className="text-secondary-400">{COMPANY_INFO.address}</span>
              </li>
              <li className="flex items-start space-x-3">
                <FiClock className="w-5 h-5 text-primary-400 mt-1 flex-shrink-0" />
                <div>
                  <div className="text-secondary-400">Lun - Vie: 8:00 AM - 6:00 PM</div>
                  <div className="text-secondary-400">Sáb: 9:00 AM - 2:00 PM</div>
                  <div className={`text-sm mt-1 flex items-center gap-1 ${
                    isBusinessHours() ? 'text-success-400' : 'text-secondary-500'
                  }`}>
                    <span className={`w-2 h-2 rounded-full ${
                      isBusinessHours() ? 'bg-success-400 animate-pulse' : 'bg-secondary-500'
                    }`}></span>
                    {isBusinessHours() ? 'Abierto ahora' : 'Cerrado'}
                  </div>
                </div>
              </li>
            </ul>
            
            {/* Botón WhatsApp Prominente */}
            <a
              href={COMPANY_INFO.social.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 w-full bg-green-500 hover:bg-green-600 text-white px-4 py-3 rounded-lg font-semibold transition-all duration-200 shadow-lg hover:shadow-xl mt-4"
            >
              <FaWhatsapp className="w-5 h-5" />
              Chatea con nosotros
            </a>
          </div>
        </div>
        
        {/* Newsletter Section */}
        <div className="border-t border-secondary-800 mt-12 pt-8">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-6">
              <h3 className="text-2xl font-display font-bold mb-2">Mantente Informado</h3>
              <p className="text-secondary-400">
                Suscríbete a nuestro newsletter y recibe ofertas exclusivas y consejos de mantenimiento
              </p>
            </div>
            <form onSubmit={handleNewsletterSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Tu email"
                required
                className="flex-1 px-4 py-3 rounded-lg bg-secondary-800 border border-secondary-700 text-white placeholder-secondary-500 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
              />
              <button
                type="submit"
                className="bg-primary-600 hover:bg-primary-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors flex items-center justify-center gap-2"
              >
                <FiSend className="w-4 h-4" />
                Suscribirse
              </button>
            </form>
            {subscribed && (
              <p className="text-center text-success-400 mt-2 text-sm">
                ¡Gracias por suscribirte! Revisa tu email.
              </p>
            )}
          </div>
        </div>
        
        {/* Certificaciones e Insignias */}
        <div className="border-t border-secondary-800 mt-8 pt-8">
          <div className="text-center mb-6">
            <h3 className="text-xl font-display font-semibold mb-4">Certificaciones y Reconocimientos</h3>
            <div className="flex flex-wrap items-center justify-center gap-6">
              <div className="flex items-center gap-2 text-secondary-400">
                <FaAward className="w-6 h-6 text-accent-400" />
                <span className="text-sm">Certificados Internacionalmente</span>
              </div>
              <div className="flex items-center gap-2 text-secondary-400">
                <FaShieldAlt className="w-6 h-6 text-teal-400" />
                <span className="text-sm">Garantía Total</span>
              </div>
              <div className="flex items-center gap-2 text-secondary-400">
                <FiCheck className="w-6 h-6 text-success-400" />
                <span className="text-sm">Más de 10 años de experiencia</span>
              </div>
            </div>
          </div>
        </div>
        
        {/* Métodos de Pago */}
        <div className="border-t border-secondary-800 mt-8 pt-8">
          <div className="text-center mb-4">
            <h3 className="text-lg font-display font-semibold mb-3">Aceptamos</h3>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <div className="flex items-center gap-2 text-secondary-400 hover:text-primary-400 transition-colors">
                <FaCcVisa className="w-8 h-8" />
              </div>
              <div className="flex items-center gap-2 text-secondary-400 hover:text-primary-400 transition-colors">
                <FaCcMastercard className="w-8 h-8" />
              </div>
              <div className="flex items-center gap-2 text-secondary-400 hover:text-primary-400 transition-colors">
                <FaCcPaypal className="w-8 h-8" />
              </div>
              <div className="flex items-center gap-2 text-secondary-400">
                <FaCreditCard className="w-6 h-6" />
                <span className="text-sm">Y más métodos</span>
              </div>
            </div>
          </div>
        </div>
        
        {/* Enlaces Legales y Copyright */}
        <div className="border-t border-secondary-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-secondary-400 text-sm text-center md:text-left">
              <p>&copy; {currentYear} {COMPANY_INFO.name}. Todos los derechos reservados.</p>
            </div>
            <div className="flex flex-wrap items-center justify-center gap-4 text-sm">
              <Link to="/terminos" className="text-secondary-400 hover:text-primary-400 transition-colors">
                Términos y Condiciones
              </Link>
              <span className="text-secondary-600">|</span>
              <Link to="/privacidad" className="text-secondary-400 hover:text-primary-400 transition-colors">
                Política de Privacidad
              </Link>
              <span className="text-secondary-600">|</span>
              <Link to="/legal" className="text-secondary-400 hover:text-primary-400 transition-colors">
                Aviso Legal
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

