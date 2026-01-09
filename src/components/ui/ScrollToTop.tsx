import { useState, useEffect } from 'react'
import { FiArrowUp } from 'react-icons/fi'

export function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false)
  
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }
    }
    
    window.addEventListener('scroll', toggleVisibility)
    return () => window.removeEventListener('scroll', toggleVisibility)
  }, [])
  
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }
  
  if (!isVisible) return null
  
  return (
    <button
      onClick={scrollToTop}
      className="fixed bottom-8 right-8 z-50 bg-primary-600 text-white p-3 rounded-full shadow-lg hover:bg-primary-700 transition-all duration-300 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2"
      aria-label="Volver arriba"
    >
      <FiArrowUp className="w-5 h-5" />
    </button>
  )
}

