# CoolingPerú - Sitio Web

Sitio web profesional para CoolingPerú, empresa especializada en venta e instalación de aire acondicionado.

## 🚀 Tecnologías

- **React 18** - Biblioteca de UI
- **TypeScript** - Tipado estático
- **Vite** - Build tool y dev server
- **Tailwind CSS** - Framework de estilos
- **React Router** - Navegación
- **React Icons** - Iconografía

## 📁 Estructura del Proyecto

```
coolingPeru/
├── public/
│   └── images/          # Imágenes del sitio
├── src/
│   ├── components/      # Componentes reutilizables
│   │   ├── ui/         # Componentes base
│   │   ├── layout/     # Header, Footer
│   │   └── sections/   # Secciones de páginas
│   ├── pages/          # Páginas principales
│   ├── constants/      # Constantes y configuraciones
│   ├── types/          # TypeScript types
│   └── styles/         # Estilos globales
```

## 🛠️ Instalación

### Requisitos previos

Asegúrate de tener **pnpm** instalado. Si no lo tienes:

```bash
npm install -g pnpm
```

### Pasos de instalación

1. Instalar dependencias:
```bash
pnpm install
```

2. Ejecutar en desarrollo:
```bash
pnpm dev
```

3. Build para producción:
```bash
pnpm build
```

Los archivos generados estarán en la carpeta `dist/` listos para subir a cPanel.

## 📝 Configuración para cPanel

1. Después de ejecutar `pnpm build`, sube el contenido de la carpeta `dist/` a tu hosting
2. Asegúrate de que el archivo `.htaccess` esté configurado para SPA (si es necesario)
3. Las imágenes deben ir en `public/images/` y se referenciarán desde `/images/`

## 🎨 Personalización

- **Colores**: Edita `tailwind.config.js` para cambiar la paleta de colores
- **Contenido**: Modifica `src/constants/index.ts` para actualizar información de la empresa
- **Imágenes**: Agrega imágenes en `public/images/` y actualiza las referencias en los componentes

## 📱 Páginas

- **Home** (`/`) - Página principal con hero, servicios, beneficios y testimonios
- **Servicios** (`/servicios`) - Detalle de todos los servicios
- **Productos** (`/productos`) - Catálogo de productos por categoría
- **Nosotros** (`/nosotros`) - Información sobre la empresa
- **Contacto** (`/contacto`) - Formulario de contacto e información

## 🔧 Próximos Pasos

1. Agregar imágenes reales en `public/images/`
2. Configurar el backend para el formulario de contacto
3. Agregar más productos según el catálogo real
4. Optimizar imágenes y agregar lazy loading
5. Configurar analytics y SEO
