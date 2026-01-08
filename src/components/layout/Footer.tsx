import { Link } from 'react-router-dom'
import { FiMail, FiPhone, FiMapPin } from 'react-icons/fi'
import { FaFacebook, FaInstagram, FaLinkedin, FaWhatsapp } from 'react-icons/fa'
import { COMPANY_INFO, NAVIGATION } from '@/constants'

export function Footer() {
  const currentYear = new Date().getFullYear()
  
  return (
    <footer className="bg-secondary-900 text-white">
      <div className="container-custom py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
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
            <ul className="space-y-2 text-secondary-400">
              <li>Instalación Profesional</li>
              <li>Mantenimiento Preventivo</li>
              <li>Reparación y Servicio Técnico</li>
              <li>Consultoría Técnica</li>
            </ul>
          </div>
          
          {/* Contact Info */}
          <div>
            <h3 className="font-display font-semibold text-lg mb-4">Contacto</h3>
            <ul className="space-y-3">
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
            </ul>
          </div>
        </div>
        
        {/* Copyright */}
        <div className="border-t border-secondary-800 mt-8 pt-8 text-center text-secondary-400">
          <p>&copy; {currentYear} {COMPANY_INFO.name}. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  )
}

