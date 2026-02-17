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
          {/* UPDATED: phone, email, address */}
          <p className="text-sm text-neutral-700 dark:text-neutral-400">Phone: +234 902 000 0222</p>
          <p className="text-sm text-neutral-700 dark:text-neutral-400">Email: info@fortknoxguards.com</p>
          <p className="mt-2 text-xs text-neutral-600 dark:text-neutral-500">
            Plot 302, Cadastral Zone B02, Behind American International School, Durumi, Abuja, FCT, Nigeria.
          </p>
          <button onClick={onOpenQuote} className="mt-3 btn-primary rounded-xl">
            Quick Quote
          </button>
        </div>
      </div>
      <div className="py-4 text-center text-xs text-neutral-500 dark:text-neutral-500">
        © {new Date().getFullYear()} Fort Knox Guards. All rights reserved.
      </div>
    </footer>
  )
}