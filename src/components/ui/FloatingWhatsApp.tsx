import { FaWhatsapp } from 'react-icons/fa'

export function FloatingWhatsApp() {
  const phoneNumber = '51952051133' // +51 952 051 133 sin espacios ni caracteres especiales
  const message = encodeURIComponent('Hola, me gustaría realizar una consulta sobre sus servicios de climatización.')
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-green-500 text-white p-4 rounded-full shadow-2xl hover:bg-green-600 transition-all duration-300 hover:scale-110 animate-pulse hover:animate-none"
      aria-label="Chatea con nosotros por WhatsApp"
    >
      <FaWhatsapp className="w-6 h-6" />
      <span className="absolute -top-2 -right-2 bg-accent-500 text-white text-xs font-bold rounded-full w-6 h-6 flex items-center justify-center">
        1
      </span>
    </a>
  )
}

