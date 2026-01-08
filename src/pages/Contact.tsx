import { useState, FormEvent } from 'react'
import { Section } from '@/components/ui/Section'
import { Card } from '@/components/ui/Card'
import { Button } from '@/components/ui/Button'
import { COMPANY_INFO, SERVICES } from '@/constants'
import { FiPhone, FiMail, FiMapPin, FiClock } from 'react-icons/fi'
import { FaWhatsapp } from 'react-icons/fa'

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: '',
  })
  
  const [submitted, setSubmitted] = useState(false)
  
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    // Aquí iría la lógica de envío del formulario
    console.log('Form submitted:', formData)
    setSubmitted(true)
    setTimeout(() => {
      setSubmitted(false)
      setFormData({ name: '', email: '', phone: '', service: '', message: '' })
    }, 3000)
  }
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }
  
  return (
    <>
      <Section background="primary" className="text-white">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-5xl font-display font-bold mb-6">
            Contáctanos
          </h1>
          <p className="text-xl text-primary-100">
            Estamos aquí para ayudarte. Envíanos un mensaje y te responderemos lo antes posible.
          </p>
        </div>
      </Section>
      
      <Section background="white">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contact Info */}
          <div className="lg:col-span-1 space-y-6">
            <Card>
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <FiPhone className="w-6 h-6 text-primary-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-secondary-900 mb-1">Teléfono</h3>
                  <a
                    href={`tel:${COMPANY_INFO.phone}`}
                    className="text-primary-600 hover:text-primary-700"
                  >
                    {COMPANY_INFO.phone}
                  </a>
                </div>
              </div>
            </Card>
            
            <Card>
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <FiMail className="w-6 h-6 text-primary-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-secondary-900 mb-1">Email</h3>
                  <a
                    href={`mailto:${COMPANY_INFO.email}`}
                    className="text-primary-600 hover:text-primary-700 break-all"
                  >
                    {COMPANY_INFO.email}
                  </a>
                </div>
              </div>
            </Card>
            
            <Card>
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <FiMapPin className="w-6 h-6 text-primary-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-secondary-900 mb-1">Ubicación</h3>
                  <p className="text-secondary-600">{COMPANY_INFO.address}</p>
                </div>
              </div>
            </Card>
            
            <Card>
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <FiClock className="w-6 h-6 text-primary-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-secondary-900 mb-1">Horario</h3>
                  <p className="text-secondary-600">Lun - Vie: 8:00 AM - 6:00 PM</p>
                  <p className="text-secondary-600">Sáb: 9:00 AM - 2:00 PM</p>
                </div>
              </div>
            </Card>
            
            <a
              href={COMPANY_INFO.social.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="block"
            >
              <Button variant="primary" fullWidth className="bg-green-600 hover:bg-green-700">
                <FaWhatsapp className="w-5 h-5 mr-2" />
                WhatsApp
              </Button>
            </a>
          </div>
          
          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card>
              <h2 className="text-2xl font-display font-bold text-secondary-900 mb-6">
                Envíanos un Mensaje
              </h2>
              
              {submitted ? (
                <div className="bg-green-50 border border-green-200 rounded-lg p-4 mb-6">
                  <p className="text-green-800 font-semibold">
                    ¡Mensaje enviado con éxito! Te contactaremos pronto.
                  </p>
                </div>
              ) : null}
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-semibold text-secondary-900 mb-2">
                      Nombre Completo *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-secondary-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition-colors"
                      placeholder="Tu nombre"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="phone" className="block text-sm font-semibold text-secondary-900 mb-2">
                      Teléfono *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-secondary-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition-colors"
                      placeholder="+51 999 999 999"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-secondary-900 mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-secondary-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition-colors"
                    placeholder="tu@email.com"
                  />
                </div>
                
                <div>
                  <label htmlFor="service" className="block text-sm font-semibold text-secondary-900 mb-2">
                    Servicio de Interés
                  </label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-secondary-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition-colors"
                  >
                    <option value="">Selecciona un servicio</option>
                    {SERVICES.map((service) => (
                      <option key={service.id} value={service.id}>
                        {service.title}
                      </option>
                    ))}
                  </select>
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-secondary-900 mb-2">
                    Mensaje *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={6}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-secondary-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition-colors resize-none"
                    placeholder="Cuéntanos sobre tu proyecto o consulta..."
                  />
                </div>
                
                <Button type="submit" variant="primary" size="lg" fullWidth>
                  Enviar Mensaje
                </Button>
              </form>
            </Card>
          </div>
        </div>
      </Section>
    </>
  )
}

