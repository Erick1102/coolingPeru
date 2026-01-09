import { Section } from '../ui/Section'
import { BENEFITS } from '@/constants'
import { 
  FaAward, 
  FaShieldAlt, 
  FaDollarSign, 
  FaClock 
} from 'react-icons/fa'

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  FaAward,
  FaShieldAlt,
  FaDollarSign,
  FaClock,
}

export function BenefitsSection() {
  return (
    <Section background="gray">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-display font-bold text-secondary-900 mb-4">
          ¿Por qué elegirnos?
        </h2>
        <p className="text-lg text-secondary-600 max-w-2xl mx-auto">
          Comprometidos con la excelencia y la satisfacción de nuestros clientes
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {BENEFITS.map((benefit, index) => {
          const IconComponent = iconMap[benefit.icon] || FaAward
          const colorClasses = [
            'bg-primary-600',
            'bg-teal-500',
            'bg-accent-500',
            'bg-coral-500',
          ]
          const bgColor = colorClasses[index % colorClasses.length]
          
          return (
            <div key={index} className="text-center">
              <div className={`w-20 h-20 ${bgColor} rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg hover:scale-110 transition-transform duration-300`}>
                <IconComponent className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-xl font-display font-semibold text-secondary-900 mb-2">
                {benefit.title}
              </h3>
              <p className="text-secondary-600">
                {benefit.description}
              </p>
            </div>
          )
        })}
      </div>
    </Section>
  )
}

