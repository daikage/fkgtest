export default function Careers() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-10">
      <h1 className="text-3xl font-bold">Careers</h1>
      <p className="mt-2 text-neutral-600 dark:text-neutral-400">
        Are You Interested In Working With Us? Join our team & start your career as a Security Operative Officer.
        It’s our mission to recruit the best, and we are always recruiting professionals, highly motivated & well-presented
        Security Officers to join our team!
      </p>
      {/* Visual */}
      <div className="mt-8 relative overflow-hidden rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-white/70 dark:bg-neutral-900/50 backdrop-blur">
        <img
          src="https://i.ibb.co/wNmXc53X/DSC1369.jpg"
          alt="Security operations and monitoring"
          loading="lazy"
          className="h-56 md:h-80 w-full object-cover"
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
      </div>
      <div className="mt-6 rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-white/80 dark:bg-neutral-900/50 backdrop-blur p-5">
        <p className="text-sm text-neutral-700 dark:text-neutral-300">
          Send your CV and cover letter to <strong>info@fortknoxguards.com</strong> or call <strong>+234 902 000 0222</strong>.
        </p>
      </div>
      
    </div>
  )
}
