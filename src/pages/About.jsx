export default function About() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-10">
      <h1 className="text-3xl font-bold">About Fort Knox Guards</h1>
      <p className="mt-2 text-neutral-600 dark:text-neutral-400">
        We mitigate risk through intelligence-led operations. Our teams leverage SOPs, site audits,
        and continuous improvement to deliver measurable outcomes — not just presence.
      </p>
      <ul className="mt-4 list-disc pl-6 text-neutral-600 dark:text-neutral-400">
        <li>Licensed, vetted personnel</li>
        <li>24/7 mobile patrol and escalation protocols</li>
        <li>Comprehensive fire watch and asset conservation</li>
      </ul>

      {/* About page visual */}
      <div className="mt-8 relative overflow-hidden rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-white/70 dark:bg-neutral-900/50 backdrop-blur">
        <img
          src="https://images.unsplash.com/photo-1483058712412-4245e9b90334?auto=format&fit=crop&w=1600&q=80"
          alt="Operations desk with monitoring and incident logging"
          loading="lazy"
          className="h-56 md:h-80 w-full object-cover"
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
      </div>
    </div>
  )
}
