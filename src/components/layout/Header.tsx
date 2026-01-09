import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { FiMenu, FiX } from 'react-icons/fi'
import { NAVIGATION, COMPANY_INFO } from '@/constants'

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [showPromo, setShowPromo] = useState(true)
  const location = useLocation()
  
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])
  
  const isActive = (path: string) => location.pathname === path
  
  // Cerrar menú móvil al hacer clic fuera
  useEffect(() => {
    if (mobileMenuOpen) {
      const handleClickOutside = (e: MouseEvent) => {
        const target = e.target as HTMLElement
        if (!target.closest('nav')) {
          setMobileMenuOpen(false)
        }
      }
      document.addEventListener('click', handleClickOutside)
      return () => document.removeEventListener('click', handleClickOutside)
    }
  }, [mobileMenuOpen])
  
  return (
    <>
      {/* Badge de Promoción */}
      {showPromo && (
        <div className="bg-gradient-to-r from-primary-600 to-primary-700 text-white text-center py-2 px-4 relative">
          <div className="container-custom flex items-center justify-center gap-2">
            <span className="text-sm font-medium">
              🎉 Oferta Especial: Instalación con 20% de descuento este mes
            </span>
            <button
              onClick={() => setShowPromo(false)}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-white hover:text-secondary-200 transition-colors"
              aria-label="Cerrar promoción"
            >
              <FiX className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}
      
      <header className={`bg-white sticky top-0 z-50 transition-all duration-300 ${
        scrolled ? 'shadow-lg' : 'shadow-md'
      }`}>
        <nav className="container-custom">
        <div className={`flex items-center justify-between transition-all duration-300 ${
          scrolled ? 'h-16' : 'h-20'
        }`}>
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3">
            <img 
              src="/images/logoCP.png" 
              alt={`${COMPANY_INFO.name} Logo`}
              className="h-12 w-auto object-contain"
            />
            <span className="text-xl font-display font-bold">
              <span className="text-primary-600">Cooling</span>
              <span className="text-black">Perú</span>
            </span>
          </Link>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {NAVIGATION.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`font-medium transition-all duration-200 relative ${
                  isActive(item.path)
                    ? 'text-primary-600'
                    : 'text-secondary-700 hover:text-primary-600'
                }`}
              >
                {item.name}
                {isActive(item.path) && (
                  <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary-600 rounded-full"></span>
                )}
              </Link>
            ))}
            <Link
              to="/contacto"
              className="bg-primary-600 text-white px-6 py-2 rounded-lg hover:bg-primary-700 transition-colors duration-200 font-semibold"
            >
              Cotizar
            </Link>
          </div>
          
          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-secondary-700 hover:text-primary-600 transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <FiX className="w-6 h-6" />
            ) : (
              <FiMenu className="w-6 h-6" />
            )}
          </button>
        </div>
        
        {/* Mobile Navigation con animación */}
        <div 
          className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
            mobileMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          <div className="py-4 border-t border-secondary-200">
            <div className="flex flex-col space-y-4">
              {NAVIGATION.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`font-medium transition-all duration-200 transform ${
                    isActive(item.path)
                      ? 'text-primary-600 font-semibold translate-x-2'
                      : 'text-secondary-700 hover:text-primary-600 hover:translate-x-1'
                  }`}
                >
                  {item.name}
                </Link>
              ))}
              <Link
                to="/contacto"
                onClick={() => setMobileMenuOpen(false)}
                className="bg-primary-600 text-white px-6 py-3 rounded-lg hover:bg-primary-700 transition-colors duration-200 font-semibold text-center shadow-lg hover:shadow-xl"
              >
                Cotizar
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </header>
    </>
  )
}

