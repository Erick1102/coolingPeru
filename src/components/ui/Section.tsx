import { ReactNode } from 'react'

interface SectionProps {
  children: ReactNode
  className?: string
  background?: 'white' | 'gray' | 'primary' | 'gradient'
  id?: string
}

export function Section({ 
  children, 
  className = '', 
  background = 'white',
  id 
}: SectionProps) {
  const backgrounds = {
    white: 'bg-white',
    gray: 'bg-secondary-50',
    primary: 'bg-primary-600',
    gradient: 'gradient-primary',
  }
  
  return (
    <section id={id} className={`section-padding ${backgrounds[background]} ${className}`}>
      <div className="container-custom">
        {children}
      </div>
    </section>
  )
}

