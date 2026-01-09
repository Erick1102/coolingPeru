import { useState, useEffect } from 'react'

interface TextCarouselProps {
  texts: string[]
  interval?: number
  className?: string
}

export function TextCarousel({ texts, interval = 3000, className = '' }: TextCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0)
  
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % texts.length)
    }, interval)
    
    return () => clearInterval(timer)
  }, [texts.length, interval])
  
  return (
    <span className={`inline-block ${className}`}>
      <span 
        key={currentIndex}
        className="inline-block animate-fade-in"
      >
        {texts[currentIndex]}
      </span>
    </span>
  )
}

