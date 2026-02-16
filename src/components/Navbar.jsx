import { NavLink } from 'react-router-dom'
import { ShieldCheck, PhoneCall, Moon, Sun, Menu, X } from 'lucide-react'
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
    <header className="fixed inset-x-0 top-0 z-50">
      <div className="container">
        <div
          className={`mt-3 glass rounded-2xl px-4 py-3 md:px-6 md:py-3.5 flex items-center justify-between transition-all
            ${scrolled ? 'bg-white/80 dark:bg-neutral-900/70 shadow-soft backdrop-saturate-150' : ''}`}
        >
          <div className="flex items-center gap-3">
            <ShieldCheck className="text-brand" size={26} />
            <NavLink to="/" className="font-semibold tracking-wide">
              Fort Knox Guards
            </NavLink>
          </div>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-6">
            {[
              { to: '/', label: 'Home' },
              { to: '/services', label: 'Services' },
              { to: '/about', label: 'About' }
            ].map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                className={({ isActive }) =>
                  `text-sm hover:text-brand transition ${
                    isActive ? 'text-brand font-medium' : 'text-neutral-600 dark:text-neutral-300'
                  }`
                }
                onClick={() => setMobileOpen(false)}
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
              className="btn-ghost rounded-xl"
            >
              {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
            </button>
            <button onClick={onOpenQuote} className="btn-primary rounded-xl inline-flex items-center gap-2">
              <PhoneCall size={16} />
              Request Quote
            </button>

            {/* Mobile menu button */}
            <button
              aria-label="Open menu"
              className="md:hidden btn-ghost rounded-xl"
              onClick={() => setMobileOpen((o) => !o)}
            >
              {mobileOpen ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile overlay + menu panel */}
      {mobileOpen && (
        <>
          <div
            className="fixed inset-0 z-40 bg-black/40"
            onClick={() => setMobileOpen(false)}
          />
          <div className="fixed z-50 left-4 right-4 top-[72px] md:hidden">
            <div className="glass rounded-2xl p-4 shadow-soft">
              <nav className="grid gap-2">
                {[
                  { to: '/', label: 'Home' },
                  { to: '/services', label: 'Services' },
                  { to: '/about', label: 'About' }
                ].map((item) => (
                  <NavLink
                    key={item.to}
                    to={item.to}
                    className={({ isActive }) =>
                      `rounded-lg px-3 py-2 text-sm transition ${
                        isActive ? 'bg-neutral-100 dark:bg-neutral-800 text-brand font-medium' : 'hover:bg-neutral-100 dark:hover:bg-neutral-800'
                      }`
                    }
                    onClick={() => setMobileOpen(false)}
                  >
                    {item.label}
                  </NavLink>
                ))}
              </nav>
              <div className="mt-3 grid grid-cols-2 gap-2">
                <button
                  onClick={() => { toggle(); setMobileOpen(false) }}
                  className="btn-outline rounded-xl"
                >
                  {theme === 'dark' ? 'Light Mode' : 'Dark Mode'}
                </button>
                <button
                  onClick={() => { onOpenQuote(); setMobileOpen(false) }}
                  className="btn-primary rounded-xl"
                >
                  Quick Quote
                </button>
              </div>
            </div>
          </div>
        </>
      )}
    </header>
  )
}