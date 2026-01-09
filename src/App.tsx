import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { Breadcrumbs } from '@/components/ui/Breadcrumbs'
import { ScrollToTop } from '@/components/ui/ScrollToTop'
import { FloatingWhatsApp } from '@/components/ui/FloatingWhatsApp'
import { Home } from '@/pages/Home'
import { Services } from '@/pages/Services'
import { Products } from '@/pages/Products'
import { About } from '@/pages/About'
import { Contact } from '@/pages/Contact'

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Header />
        <Breadcrumbs />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/servicios" element={<Services />} />
            <Route path="/productos" element={<Products />} />
            <Route path="/nosotros" element={<About />} />
            <Route path="/contacto" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
        <ScrollToTop />
        <FloatingWhatsApp />
      </div>
    </Router>
  )
}

export default App

