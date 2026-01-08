export interface Service {
  id: string
  title: string
  description: string
  icon: string
  features: string[]
}

export interface Product {
  id: string
  name: string
  category: 'residential' | 'commercial' | 'industrial'
  description: string
  features: string[]
  image?: string
}

export interface Testimonial {
  id: string
  name: string
  role: string
  company?: string
  content: string
  rating: number
  image?: string
}

export interface ContactFormData {
  name: string
  email: string
  phone: string
  service: string
  message: string
}

