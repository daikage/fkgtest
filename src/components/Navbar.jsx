import { NavLink } from 'react-router-dom'
import { PhoneCall, Moon, Sun, Menu, X } from 'lucide-react'
import { useTheme } from '../hooks/useTheme.js'
import { useEffect, useState } from 'react'

export default function Navbar({ onOpenQuote }) {
  const { theme, toggle } = useTheme()
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10)
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const [mobileOpen, setMobileOpen] = useState(false)
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [mobileOpen])

  return (
    // 1. "fixed top-0" ensures it stays pinned. 
    // 2. We add a transition for the background color/blur.
    <header 
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-white/80 dark:bg-neutral-900/80 backdrop-blur-md border-b border-neutral-200 dark:border-neutral-800' 
          : 'bg-transparent'
      }`}
    >
      {/* Centered container for the content */}
      <div className="mx-auto w-full max-w-[1600px] px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          
          {/* Brand */}
          <div className="flex items-center gap-3">
            <img
              src="/logo.png"
              alt="Fort Knox Guards logo"
              className="h-8 w-auto"
            />
            <NavLink
              to="/"
              className="font-semibold tracking-wide hidden md:inline text-neutral-900 dark:text-white"
            >
              Fort Knox Guards
            </NavLink>
          </div>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-8">
            {[
              { to: '/', label: 'Home' },
              { to: '/services', label: 'Services' },
              { to: '/about', label: 'About' },
              { to: '/management', label: 'Leadership' },
              { to: '/careers', label: 'Careers' },
              { to: '/contact', label: 'Contact' },
            ].map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                className={({ isActive }) =>
                  `text-sm transition-colors hover:text-brand ${
                    isActive ? 'text-brand font-semibold' : 'text-neutral-600 dark:text-neutral-300'
                  }`
                }
              >
                {item.label}
              </NavLink>
            ))}
          </nav>

          {/* Right actions */}
          <div className="flex items-center gap-2">
            <button
              aria-label="Toggle dark mode"
              onClick={toggle}
              className="p-2 text-neutral-600 dark:text-neutral-300 hover:bg-neutral-100 dark:hover:bg-neutral-800 rounded-lg transition"
            >
              {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
            </button>
            
            <button
              onClick={onOpenQuote}
              className="hidden md:inline-flex btn-primary px-5 py-2 rounded-lg items-center gap-2 text-sm font-medium"
            >
              <PhoneCall size={16} />
              Request Quote
            </button>

            {/* Mobile menu toggle */}
            <button
              aria-label="Open menu"
              className="md:hidden p-2 text-neutral-600 dark:text-neutral-300"
              onClick={() => setMobileOpen((o) => !o)}
            >
              {mobileOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Panel */}
      {mobileOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white dark:bg-neutral-900 border-b border-neutral-200 dark:border-neutral-800 shadow-xl">
          <nav className="flex flex-col p-4">
            {[
              { to: '/', label: 'Home' },
              { to: '/services', label: 'Services' },
              { to: '/about', label: 'About' },
              { to: '/management', label: 'Leadership' },
              { to: '/careers', label: 'Careers' },
              { to: '/contact', label: 'Contact' },
            ].map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                className="px-4 py-3 text-base border-b border-neutral-50 dark:border-neutral-800 last:border-none"
                onClick={() => setMobileOpen(false)}
              >
                {item.label}
              </NavLink>
            ))}
            <div className="mt-4 grid grid-cols-2 gap-3 p-2">
               <button onClick={onOpenQuote} className="btn-primary py-3 rounded-lg">Quick Quote</button>
               <button onClick={toggle} className="btn-outline py-3 rounded-lg">
                 {theme === 'dark' ? 'Light' : 'Dark'} Mode
               </button>
            </div>
          </nav>
        </div>
      )}
    </header>
  )
}