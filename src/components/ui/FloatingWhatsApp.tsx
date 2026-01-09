import { FaWhatsapp } from 'react-icons/fa'
import { COMPANY_INFO } from '@/constants'

export function FloatingWhatsApp() {
  return (
    <a
      href={COMPANY_INFO.social.whatsapp}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 md:hidden bg-green-500 text-white p-4 rounded-full shadow-2xl hover:bg-green-600 transition-all duration-300 hover:scale-110 animate-pulse hover:animate-none"
      aria-label="Chatea con nosotros por WhatsApp"
    >
      <FaWhatsapp className="w-6 h-6" />
      <span className="absolute -top-2 -right-2 bg-accent-500 text-white text-xs font-bold rounded-full w-6 h-6 flex items-center justify-center">
        1
      </span>
    </a>
  )
}

