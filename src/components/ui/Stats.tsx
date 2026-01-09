import { ReactNode } from 'react'

interface StatProps {
  value: string
  label: string
  icon?: ReactNode
  color?: 'primary' | 'teal' | 'accent' | 'coral'
}

export function Stat({ value, label, icon, color = 'primary' }: StatProps) {
  const colorClasses = {
    primary: 'bg-primary-100 text-primary-600',
    teal: 'bg-teal-100 text-teal-600',
    accent: 'bg-accent-100 text-accent-600',
    coral: 'bg-coral-100 text-coral-600',
  }
  
  return (
    <div className="text-center">
      <div className={`w-16 h-16 ${colorClasses[color]} rounded-full flex items-center justify-center mx-auto mb-4`}>
        {icon && <div className="w-8 h-8">{icon}</div>}
      </div>
      <div className="text-4xl md:text-5xl font-display font-bold text-secondary-900 mb-2">
        {value}
      </div>
      <div className="text-lg text-secondary-600">
        {label}
      </div>
    </div>
  )
}

