import { useState } from 'react'
import { Section } from '@/components/ui/Section'
import { Card } from '@/components/ui/Card'
import { Button } from '@/components/ui/Button'
import { Link } from 'react-router-dom'
import { PRODUCT_CATEGORIES } from '@/constants'
import { FiCheck } from 'react-icons/fi'

type Category = 'residential' | 'commercial' | 'industrial' | 'all'

const products = [
  {
    id: '1',
    name: 'Split Wall Residencial',
    category: 'residential' as const,
    description: 'Ideal para habitaciones y espacios pequeños. Eficiencia energética clase A.',
    features: ['12,000 - 18,000 BTU', 'Control remoto', 'Modo silencioso', 'Filtro de aire'],
  },
  {
    id: '2',
    name: 'Multi Split Residencial',
    category: 'residential' as const,
    description: 'Sistema multi-zona para climatizar varias habitaciones desde una unidad exterior.',
    features: ['Hasta 4 unidades interiores', 'Ahorro energético', 'Control independiente', 'Instalación flexible'],
  },
  {
    id: '3',
    name: 'Split Cassette Comercial',
    category: 'commercial' as const,
    description: 'Perfecto para oficinas y locales comerciales. Distribución uniforme de aire.',
    features: ['24,000 - 48,000 BTU', 'Instalación en techo', '4 direcciones de flujo', 'Bajo nivel sonoro'],
  },
  {
    id: '4',
    name: 'Sistema VRF Comercial',
    category: 'commercial' as const,
    description: 'Solución avanzada para edificios comerciales con múltiples zonas.',
    features: ['Alta eficiencia', 'Control centralizado', 'Escalable', 'Ahorro energético'],
  },
  {
    id: '5',
    name: 'Chiller Industrial',
    category: 'industrial' as const,
    description: 'Sistema de enfriamiento de agua para grandes instalaciones industriales.',
    features: ['Alta capacidad', 'Enfriamiento por agua', 'Control avanzado', 'Durabilidad'],
  },
  {
    id: '6',
    name: 'Rooftop Industrial',
    category: 'industrial' as const,
    description: 'Unidad completa en techo para grandes espacios industriales y comerciales.',
    features: ['50,000+ BTU', 'Instalación en techo', 'Alta eficiencia', 'Bajo mantenimiento'],
  },
]

export function Products() {
  const [selectedCategory, setSelectedCategory] = useState<Category>('all')
  
  const filteredProducts = selectedCategory === 'all'
    ? products
    : products.filter(p => p.category === selectedCategory)
  
  return (
    <>
      <Section background="primary" className="text-white">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-5xl font-display font-bold mb-6">
            Nuestros Productos
          </h1>
          <p className="text-xl text-primary-100">
            Equipos de las mejores marcas con garantía y servicio técnico especializado.
          </p>
        </div>
      </Section>
      
      <Section background="white">
        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          <button
            onClick={() => setSelectedCategory('all')}
            className={`px-6 py-2 rounded-lg font-semibold transition-colors ${
              selectedCategory === 'all'
                ? 'bg-primary-600 text-white'
                : 'bg-secondary-100 text-secondary-700 hover:bg-secondary-200'
            }`}
          >
            Todos
          </button>
          {Object.entries(PRODUCT_CATEGORIES).map(([key, category]) => (
            <button
              key={key}
              onClick={() => setSelectedCategory(key as Category)}
              className={`px-6 py-2 rounded-lg font-semibold transition-colors ${
                selectedCategory === key
                  ? 'bg-primary-600 text-white'
                  : 'bg-secondary-100 text-secondary-700 hover:bg-secondary-200'
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>
        
        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProducts.map((product) => (
            <Card key={product.id} hover>
              <div className="aspect-video bg-gradient-to-br from-primary-100 to-primary-200 rounded-lg mb-4 flex items-center justify-center">
                <span className="text-primary-600 font-semibold text-lg">
                  {product.name}
                </span>
              </div>
              <h3 className="text-xl font-display font-semibold text-secondary-900 mb-2">
                {product.name}
              </h3>
              <p className="text-secondary-600 mb-4">
                {product.description}
              </p>
              <ul className="space-y-2 mb-6">
                {product.features.map((feature, index) => (
                  <li key={index} className="flex items-start text-sm text-secondary-700">
                    <FiCheck className="w-5 h-5 text-primary-600 mr-2 flex-shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>
              <Link to="/contacto" className="block">
                <Button variant="primary" fullWidth>
                  Solicitar Información
                </Button>
              </Link>
            </Card>
          ))}
        </div>
        
        {filteredProducts.length === 0 && (
          <div className="text-center py-12">
            <p className="text-lg text-secondary-600">
              No hay productos disponibles en esta categoría.
            </p>
          </div>
        )}
      </Section>
      
      <Section background="gray">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-display font-bold text-secondary-900 mb-4">
            ¿No encuentras lo que buscas?
          </h2>
          <p className="text-lg text-secondary-600 mb-8">
            Contáctanos y te ayudaremos a encontrar el equipo perfecto para tus necesidades.
          </p>
          <Link to="/contacto">
            <Button size="lg" variant="primary">
              Consultar Disponibilidad
            </Button>
          </Link>
        </div>
      </Section>
    </>
  )
}

