import { Hero } from '@/components/sections/Hero'
import { ServicesSection } from '@/components/sections/ServicesSection'
import { BrandsSection } from '@/components/sections/BrandsSection'
import { BenefitsSection } from '@/components/sections/BenefitsSection'
import { TestimonialsSection } from '@/components/sections/TestimonialsSection'
import { CTASection } from '@/components/sections/CTASection'

export function Home() {
  return (
    <>
      <Hero />
      <ServicesSection />
      <BrandsSection />
      <BenefitsSection />
      <TestimonialsSection />
      <CTASection />
    </>
  )
}

