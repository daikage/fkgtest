import { Instagram, Facebook, Linkedin, Twitter } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function Footer({ onOpenQuote }) {
  return (
    <footer className="mt-16 border-t border-neutral-200 dark:border-neutral-800">
      <div className="container py-10 grid gap-8 sm:grid-cols-3">
        <div>
          <h3 className="font-semibold mb-2">Fort Knox Guards</h3>
          <p className="text-sm text-neutral-700 dark:text-neutral-400">
            Security Solutions that Exceed Expectation using People, Technology and Response.
          </p>
        </div>
        <div>
          <h4 className="font-semibold mb-2">Services</h4>
          <ul className="text-sm space-y-1 text-neutral-700 dark:text-neutral-400">
            <li>Corporate Security</li>
            <li>Event Security</li>
            <li>Electronic Security</li>
            <li>Armed Security Support</li>
            <li>Journey Management</li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold mb-2">Contact</h4>
          <p className="text-sm text-neutral-700 dark:text-neutral-400">
            Email: ops@fortknoxguards.com
          </p>
          <button onClick={onOpenQuote} className="mt-3 btn-primary rounded-xl">
            Quick Quote
          </button>

          <div className="mt-4">
            <h5 className="font-semibold mb-2 text-sm">Follow Us</h5>
            <div className="flex items-center gap-2">
              <a
                href="https://instagram.com/fortknoxguards"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-neutral-300 dark:border-neutral-700 hover:bg-neutral-100 dark:hover:bg-neutral-800 transition"
              >
                <Instagram size={18} />
              </a>
              <a
                href="https://facebook.com/fortknoxguards"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-neutral-300 dark:border-neutral-700 hover:bg-neutral-100 dark:hover:bg-neutral-800 transition"
              >
                <Facebook size={18} />
              </a>
              <a
                href="https://www.linkedin.com/company/fort-knox-guards"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-neutral-300 dark:border-neutral-700 hover:bg-neutral-100 dark:hover:bg-neutral-800 transition"
              >
                <Linkedin size={18} />
              </a>
              <a
                href="https://x.com/fortknoxguards"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="X (formerly Twitter)"
                className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-neutral-300 dark:border-neutral-700 hover:bg-neutral-100 dark:hover:bg-neutral-800 transition"
              >
                <Twitter size={18} />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="py-4 text-center text-xs text-neutral-500 dark:text-neutral-500">
        © {new Date().getFullYear()} Fort Knox Guards. All rights reserved.
        {' '}·{' '}
        <Link to="/privacy-policy" className="underline hover:text-neutral-700 dark:hover:text-neutral-300">
          Privacy Policy
        </Link>
      </div>
    </footer>
  )
}