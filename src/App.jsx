import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar.jsx'
import Footer from './components/Footer.jsx'
import Home from './pages/Home.jsx'
import Services from './pages/Services.jsx'
import About from './pages/About.jsx'
import QuoteModal from './components/QuoteModal.jsx'
import BackToTop from './components/BackToTop.jsx'
import MobileCTA from './components/MobileCTA.jsx'

function App() {
  const [quoteOpen, setQuoteOpen] = useState(false)

  return (
    <div className="min-h-screen bg-white text-black dark:bg-neutral-950 dark:text-neutral-100 transition-colors">
      <Navbar onOpenQuote={() => setQuoteOpen(true)} />
      <main className="pt-20">
        <Routes>
          <Route path="/" element={<Home onOpenQuote={() => setQuoteOpen(true)} />} />
          <Route path="/services" element={<Services />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </main>
      <Footer onOpenQuote={() => setQuoteOpen(true)} />
      {/* ADD: global helpers */}
      <BackToTop />
      <MobileCTA onOpenQuote={() => setQuoteOpen(true)} />
      <QuoteModal open={quoteOpen} onClose={() => setQuoteOpen(false)} />
    </div>
  )
}

export default App