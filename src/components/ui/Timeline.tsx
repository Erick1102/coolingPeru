interface TimelineItem {
  year: string
  title: string
  description: string
}

interface TimelineProps {
  items: TimelineItem[]
}

export function Timeline({ items }: TimelineProps) {
  return (
    <div className="relative">
      {/* Línea vertical - más sutil */}
      <div className="absolute left-8 top-0 bottom-0 w-px bg-primary-200/50 hidden md:block"></div>
      
      <div className="space-y-8">
        {items.map((item, index) => (
          <div key={index} className="relative flex items-start">
            {/* Punto en la línea */}
            <div className="absolute left-6 w-4 h-4 bg-primary-600 rounded-full border-4 border-white shadow-lg hidden md:block"></div>
            
            <div className="ml-0 md:ml-16 flex-1">
              <div className="flex items-center gap-4 mb-2">
                <span className="text-2xl font-display font-bold text-primary-600">
                  {item.year}
                </span>
                <h3 className="text-xl font-display font-semibold text-secondary-900">
                  {item.title}
                </h3>
              </div>
              <p className="text-secondary-600">
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

