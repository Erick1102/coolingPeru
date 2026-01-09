import { Link, useLocation } from 'react-router-dom'
import { FiChevronRight, FiHome } from 'react-icons/fi'

const routeNames: Record<string, string> = {
  '/': 'Inicio',
  '/servicios': 'Servicios',
  '/productos': 'Productos',
  '/nosotros': 'Nosotros',
  '/contacto': 'Contacto',
}

export function Breadcrumbs() {
  const location = useLocation()
  const pathnames = location.pathname.split('/').filter((x) => x)
  
  if (pathnames.length === 0) return null
  
  return (
    <nav className="bg-secondary-50 py-4" aria-label="Breadcrumb">
      <div className="container-custom">
        <ol className="flex items-center space-x-2 text-sm">
          <li>
            <Link to="/" className="text-secondary-600 hover:text-primary-600 transition-colors">
              <FiHome className="w-4 h-4" />
            </Link>
          </li>
          {pathnames.map((name, index) => {
            const routeTo = `/${pathnames.slice(0, index + 1).join('/')}`
            const isLast = index === pathnames.length - 1
            
            return (
              <li key={routeTo} className="flex items-center">
                <FiChevronRight className="w-4 h-4 text-secondary-400 mx-2" />
                {isLast ? (
                  <span className="text-secondary-900 font-medium">
                    {routeNames[routeTo] || name}
                  </span>
                ) : (
                  <Link
                    to={routeTo}
                    className="text-secondary-600 hover:text-primary-600 transition-colors"
                  >
                    {routeNames[routeTo] || name}
                  </Link>
                )}
              </li>
            )
          })}
        </ol>
      </div>
    </nav>
  )
}

