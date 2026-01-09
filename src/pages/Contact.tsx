import { useState, FormEvent, ChangeEvent } from 'react'
import { Section } from '@/components/ui/Section'
import { Card } from '@/components/ui/Card'
import { Button } from '@/components/ui/Button'
import { COMPANY_INFO, SERVICES } from '@/constants'
import { FiPhone, FiMail, FiMapPin, FiClock, FiCheck, FiX } from 'react-icons/fi'
import { FaWhatsapp } from 'react-icons/fa'

interface FormErrors {
  name?: string
  email?: string
  phone?: string
  message?: string
}

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: '',
  })
  
  const [errors, setErrors] = useState<FormErrors>({})
  const [touched, setTouched] = useState<Record<string, boolean>>({})
  const [submitted, setSubmitted] = useState(false)
  
  const validateField = (name: string, value: string): string | undefined => {
    switch (name) {
      case 'name':
        if (!value.trim()) return 'El nombre es requerido'
        if (value.trim().length < 2) return 'El nombre debe tener al menos 2 caracteres'
        break
      case 'email':
        if (!value.trim()) return 'El email es requerido'
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
        if (!emailRegex.test(value)) return 'Email inválido'
        break
      case 'phone':
        if (!value.trim()) return 'El teléfono es requerido'
        const phoneRegex = /^[+]?[(]?[0-9]{1,4}[)]?[-\s.]?[(]?[0-9]{1,4}[)]?[-\s.]?[0-9]{1,9}$/
        if (!phoneRegex.test(value)) return 'Teléfono inválido'
        break
      case 'message':
        if (!value.trim()) return 'El mensaje es requerido'
        if (value.trim().length < 10) return 'El mensaje debe tener al menos 10 caracteres'
        break
    }
    return undefined
  }
  
  const handleBlur = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setTouched({ ...touched, [name]: true })
    const error = validateField(name, value)
    setErrors({ ...errors, [name]: error })
  }
  
  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData({
      ...formData,
      [name]: value,
    })
    
    // Validar en tiempo real si el campo ya fue tocado
    if (touched[name]) {
      const error = validateField(name, value)
      setErrors({ ...errors, [name]: error })
    }
  }
  
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    
    // Validar todos los campos
    const newErrors: FormErrors = {}
    Object.keys(formData).forEach((key) => {
      if (key !== 'service') {
        const error = validateField(key, formData[key as keyof typeof formData])
        if (error) newErrors[key as keyof FormErrors] = error
      }
    })
    
    setErrors(newErrors)
    setTouched({
      name: true,
      email: true,
      phone: true,
      message: true,
    })
    
    if (Object.keys(newErrors).length === 0) {
      // Aquí iría la lógica de envío del formulario
      console.log('Form submitted:', formData)
      setSubmitted(true)
      setTimeout(() => {
        setSubmitted(false)
        setFormData({ name: '', email: '', phone: '', service: '', message: '' })
        setTouched({})
        setErrors({})
      }, 5000)
    }
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
        {/* Información de respuesta */}
        <div className="mb-8 p-4 bg-primary-50 rounded-lg border border-primary-200">
          <div className="flex items-center justify-center gap-6 flex-wrap">
            <div className="flex items-center gap-2">
              <FiClock className="w-5 h-5 text-primary-600" />
              <span className="text-secondary-700 font-semibold">Respondemos en menos de 24 horas</span>
            </div>
            <div className="flex items-center gap-2">
              <FiCheck className="w-5 h-5 text-success-600" />
              <span className="text-secondary-700 font-semibold">Consulta sin compromiso</span>
            </div>
          </div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contact Info */}
          <div className="lg:col-span-1 space-y-6">
            <Card>
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-teal-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <FiPhone className="w-6 h-6 text-teal-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-secondary-900 mb-1">Teléfono</h3>
                  <a
                    href={`tel:${COMPANY_INFO.phone}`}
                    className="text-teal-600 hover:text-teal-700"
                  >
                    {COMPANY_INFO.phone}
                  </a>
                </div>
              </div>
            </Card>
            
            <Card>
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-coral-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <FiMail className="w-6 h-6 text-coral-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-secondary-900 mb-1">Email</h3>
                  <a
                    href={`mailto:${COMPANY_INFO.email}`}
                    className="text-coral-600 hover:text-coral-700 break-all"
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
                <div className="w-12 h-12 bg-accent-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <FiClock className="w-6 h-6 text-accent-600" />
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
                <div className="bg-success-50 border border-success-200 rounded-lg p-4 mb-6">
                  <div className="flex items-center gap-2">
                    <FiCheck className="w-5 h-5 text-success-600" />
                    <p className="text-success-800 font-semibold">
                      ¡Mensaje enviado con éxito! Te contactaremos en menos de 24 horas.
                    </p>
                  </div>
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
                      onBlur={handleBlur}
                      className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:outline-none transition-colors ${
                        errors.name && touched.name
                          ? 'border-error-500 focus:ring-error-500 focus:border-error-500'
                          : 'border-secondary-300 focus:ring-primary-500 focus:border-primary-500'
                      }`}
                      placeholder="Tu nombre completo"
                    />
                    {errors.name && touched.name && (
                      <p className="mt-1 text-sm text-error-600 flex items-center gap-1">
                        <FiX className="w-4 h-4" />
                        {errors.name}
                      </p>
                    )}
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
                      onBlur={handleBlur}
                      className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:outline-none transition-colors ${
                        errors.phone && touched.phone
                          ? 'border-error-500 focus:ring-error-500 focus:border-error-500'
                          : 'border-secondary-300 focus:ring-primary-500 focus:border-primary-500'
                      }`}
                      placeholder="+51 999 999 999"
                    />
                    {errors.phone && touched.phone && (
                      <p className="mt-1 text-sm text-error-600 flex items-center gap-1">
                        <FiX className="w-4 h-4" />
                        {errors.phone}
                      </p>
                    )}
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
                    onBlur={handleBlur}
                    className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:outline-none transition-colors ${
                      errors.email && touched.email
                        ? 'border-error-500 focus:ring-error-500 focus:border-error-500'
                        : 'border-secondary-300 focus:ring-primary-500 focus:border-primary-500'
                    }`}
                    placeholder="tu@email.com"
                  />
                  {errors.email && touched.email && (
                    <p className="mt-1 text-sm text-error-600 flex items-center gap-1">
                      <FiX className="w-4 h-4" />
                      {errors.email}
                    </p>
                  )}
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
                    onBlur={handleBlur}
                    className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:outline-none transition-colors resize-none ${
                      errors.message && touched.message
                        ? 'border-error-500 focus:ring-error-500 focus:border-error-500'
                        : 'border-secondary-300 focus:ring-primary-500 focus:border-primary-500'
                    }`}
                    placeholder="Cuéntanos sobre tu proyecto o consulta..."
                  />
                  {errors.message && touched.message && (
                    <p className="mt-1 text-sm text-error-600 flex items-center gap-1">
                      <FiX className="w-4 h-4" />
                      {errors.message}
                    </p>
                  )}
                  <p className="mt-1 text-xs text-secondary-500">
                    Mínimo 10 caracteres
                  </p>
                </div>
                
                <Button type="submit" variant="primary" size="lg" fullWidth className="bg-accent-500 hover:bg-accent-600">
                  Enviar Mensaje
                </Button>
              </form>
            </Card>
          </div>
        </div>
        
        {/* Mapa placeholder */}
        <div className="mt-12">
          <h2 className="text-2xl font-display font-bold text-secondary-900 mb-4 text-center">
            Nuestra Ubicación
          </h2>
          <Card className="p-0 overflow-hidden">
            <div className="aspect-video bg-gradient-to-br from-secondary-100 to-secondary-200 flex items-center justify-center">
              <div className="text-center">
                <FiMapPin className="w-16 h-16 text-secondary-400 mx-auto mb-4" />
                <p className="text-secondary-600 font-semibold">{COMPANY_INFO.address}</p>
                <p className="text-sm text-secondary-500 mt-2">Mapa interactivo próximamente</p>
              </div>
            </div>
          </Card>
        </div>
      </Section>
    </>
  )
}

