import { useState } from 'react'
import { Section } from '@/components/ui/Section'
import { Card } from '@/components/ui/Card'
import { Button } from '@/components/ui/Button'
import { Badge } from '@/components/ui/Badge'
import { BTUSCalculator } from '@/components/ui/BTUSCalculator'
import { Link } from 'react-router-dom'
import { PRODUCT_CATEGORIES, EQUIPMENT_TYPES } from '@/constants'
import { FiCheck, FiDollarSign } from 'react-icons/fi'

type Category = 'residential' | 'commercial' | 'industrial' | 'all'

const products = [
  {
    id: '1',
    name: 'Split Wall Residencial',
    category: 'residential' as const,
    description: 'Ideal para habitaciones y espacios pequeños. Eficiencia energética clase A.',
    features: ['12,000 - 18,000 BTU', 'Control remoto', 'Modo silencioso', 'Filtro de aire'],
    badge: 'Más Vendido',
    efficiency: 'A++',
  },
  {
    id: '2',
    name: 'Multi Split Residencial',
    category: 'residential' as const,
    description: 'Sistema multi-zona para climatizar varias habitaciones desde una unidad exterior.',
    features: ['Hasta 4 unidades interiores', 'Ahorro energético', 'Control independiente', 'Instalación flexible'],
    badge: 'Nuevo',
    efficiency: 'A+',
  },
  {
    id: '3',
    name: 'Split Cassette Comercial',
    category: 'commercial' as const,
    description: 'Perfecto para oficinas y locales comerciales. Distribución uniforme de aire.',
    features: ['24,000 - 48,000 BTU', 'Instalación en techo', '4 direcciones de flujo', 'Bajo nivel sonoro'],
    efficiency: 'A++',
  },
  {
    id: '4',
    name: 'Sistema VRF Comercial',
    category: 'commercial' as const,
    description: 'Solución avanzada para edificios comerciales con múltiples zonas.',
    features: ['Alta eficiencia', 'Control centralizado', 'Escalable', 'Ahorro energético'],
    badge: 'Recomendado',
    efficiency: 'A++',
  },
  {
    id: '5',
    name: 'Chiller Industrial',
    category: 'industrial' as const,
    description: 'Sistema de enfriamiento de agua para grandes instalaciones industriales.',
    features: ['Alta capacidad', 'Enfriamiento por agua', 'Control avanzado', 'Durabilidad'],
    efficiency: 'A+',
  },
  {
    id: '6',
    name: 'Rooftop Industrial',
    category: 'industrial' as const,
    description: 'Unidad completa en techo para grandes espacios industriales y comerciales.',
    features: ['50,000+ BTU', 'Instalación en techo', 'Alta eficiencia', 'Bajo mantenimiento'],
    efficiency: 'A++',
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
        {/* Tipos de Equipos */}
        <div className="mb-12">
          <h2 className="text-2xl font-display font-bold text-secondary-900 mb-6 text-center">
            Trabajamos con Todas las Marcas
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <Card className="p-6">
              <h3 className="text-xl font-display font-semibold text-secondary-900 mb-4">
                {EQUIPMENT_TYPES.airConditioning.title}
              </h3>
              <ul className="space-y-2">
                {EQUIPMENT_TYPES.airConditioning.types.map((type, index) => (
                  <li key={index} className="flex items-start text-secondary-700">
                    <FiCheck className="w-5 h-5 text-primary-600 mr-2 flex-shrink-0 mt-0.5" />
                    <span>{type}</span>
                  </li>
                ))}
              </ul>
            </Card>
            <Card className="p-6">
              <h3 className="text-xl font-display font-semibold text-secondary-900 mb-4">
                {EQUIPMENT_TYPES.refrigeration.title}
              </h3>
              <ul className="space-y-2">
                {EQUIPMENT_TYPES.refrigeration.types.map((type, index) => (
                  <li key={index} className="flex items-start text-secondary-700">
                    <FiCheck className="w-5 h-5 text-teal-600 mr-2 flex-shrink-0 mt-0.5" />
                    <span>{type}</span>
                  </li>
                ))}
              </ul>
            </Card>
          </div>
        </div>
        
        {/* Category Filter Mejorado */}
        <div className="mb-8">
          <div className="flex flex-wrap justify-center gap-4 mb-4">
            <button
              onClick={() => setSelectedCategory('all')}
              className={`px-6 py-3 rounded-lg font-semibold transition-all duration-200 ${
                selectedCategory === 'all'
                  ? 'bg-primary-600 text-white shadow-lg scale-105'
                  : 'bg-secondary-100 text-secondary-700 hover:bg-secondary-200 hover:scale-105'
              }`}
            >
              Todos
            </button>
            {Object.entries(PRODUCT_CATEGORIES).map(([key, category]) => (
              <button
                key={key}
                onClick={() => setSelectedCategory(key as Category)}
                className={`px-6 py-3 rounded-lg font-semibold transition-all duration-200 ${
                  selectedCategory === key
                    ? 'bg-primary-600 text-white shadow-lg scale-105'
                    : 'bg-secondary-100 text-secondary-700 hover:bg-secondary-200 hover:scale-105'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
          <p className="text-center text-secondary-600">
            Mostrando {filteredProducts.length} {filteredProducts.length === 1 ? 'producto' : 'productos'}
          </p>
        </div>
        
        {/* Calculadora de BTU */}
        <div className="mb-12">
          <BTUSCalculator />
        </div>
        
        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProducts.map((product, index) => {
            const colorClasses = [
              { gradient: 'from-primary-100 to-primary-200', text: 'text-primary-600', check: 'text-primary-600' },
              { gradient: 'from-teal-100 to-teal-200', text: 'text-teal-600', check: 'text-teal-600' },
              { gradient: 'from-accent-100 to-accent-200', text: 'text-accent-600', check: 'text-accent-600' },
              { gradient: 'from-coral-100 to-coral-200', text: 'text-coral-600', check: 'text-coral-600' },
              { gradient: 'from-primary-200 to-primary-300', text: 'text-primary-700', check: 'text-primary-600' },
              { gradient: 'from-teal-200 to-teal-300', text: 'text-teal-700', check: 'text-teal-600' },
            ]
            const colors = colorClasses[index % colorClasses.length]
            
            return (
              <Card key={product.id} hover className="relative">
                <div className="absolute top-4 right-4 flex gap-2 z-10">
                  {product.badge && (
                    <Badge variant={product.badge === 'Más Vendido' ? 'accent' : 'teal'}>
                      {product.badge}
                    </Badge>
                  )}
                  {product.efficiency && (
                    <Badge variant="success">
                      Eficiencia {product.efficiency}
                    </Badge>
                  )}
                </div>
                <div className={`aspect-video bg-gradient-to-br ${colors.gradient} rounded-lg mb-4 flex items-center justify-center relative overflow-hidden`}>
                  <span className={`${colors.text} font-semibold text-lg z-10`}>
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
                  {product.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start text-sm text-secondary-700">
                      <FiCheck className={`w-5 h-5 ${colors.check} mr-2 flex-shrink-0`} />
                      {feature}
                    </li>
                  ))}
                </ul>
                <div className="mb-4 p-3 bg-secondary-50 rounded-lg">
                  <p className="text-sm text-secondary-600 text-center flex items-center justify-center gap-2">
                    <FiDollarSign className="w-4 h-4 text-accent-600" />
                    <span className="font-semibold text-secondary-900">Precios accesibles</span> - Consulta sin compromiso
                  </p>
                </div>
                <Link to="/contacto" className="block">
                  <Button variant="primary" fullWidth className="bg-accent-500 hover:bg-accent-600">
                    Solicitar Información
                  </Button>
                </Link>
              </Card>
            )
          })}
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

