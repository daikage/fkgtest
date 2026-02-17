export default function Contact() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-10">
      <h1 className="text-3xl font-bold">Contact Us</h1>
      <p className="mt-2 text-neutral-600 dark:text-neutral-400">
        Get in touch with Fort Knox Guards for tailored security solutions.
      </p>
      <div className="mt-6 grid gap-6 sm:grid-cols-2">
        <div className="rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-white/80 dark:bg-neutral-900/50 backdrop-blur p-5">
          <h3 className="font-semibold">Contact Information</h3>
          <ul className="mt-2 space-y-2 text-sm text-neutral-700 dark:text-neutral-300">
            <li>Phone: +234 902 000 0222</li>
            <li>Email: info@fortknoxguards.com</li>
            <li>
              Address: Plot 302, Cadastral Zone B02, Behind American International School, Durumi, Abuja, Federal Capital
              Territory, Nigeria.
            </li>
          </ul>
        </div>
        <div className="rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-white/80 dark:bg-neutral-900/50 backdrop-blur p-5">
          <h3 className="font-semibold">Request a Quick Quote</h3>
          <p className="mt-2 text-sm text-neutral-700 dark:text-neutral-300">
            Prefer a quick estimate? Use the Quick Quote button below to open the quote form.
          </p>
          <a href="/" className="mt-3 inline-block btn-primary rounded-xl">
            Open Quick Quote
          </a>
        </div>
      </div>
    </div>
  )
}
