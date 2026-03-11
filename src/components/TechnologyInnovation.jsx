import React from 'react'

const items = [
  'High-definition CCTV surveillance systems',
  'Access control and biometric entry systems',
  'Alarm and intrusion detection systems',
  'M‑Scope Walk‑Through Metal Detector for rapid threat detection',
  'Electronic guard tour monitoring systems',
]

export default function TechnologyInnovation() {
  return (
    <section className="px-2 md:px-4 py-10">
      <div className="mb-6">
        <h2 className="text-2xl font-bold">Security Powered by Modern Technology</h2>
        <p className="text-sm text-neutral-700 dark:text-neutral-400">
          Greater visibility, faster response times, improved operational accountability.
        </p>
      </div>
      <div className="grid gap-4 md:grid-cols-2">
        {/* List */}
        <div className="grid gap-4">
          {items.map((t) => (
            <div
              key={t}
              className="flex items-start gap-3 rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-white/80 dark:bg-neutral-900/50 backdrop-blur p-4"
            >
              <span className="mt-1 h-2 w-2 rounded-full bg-brand" />
              <span className="text-sm text-neutral-800 dark:text-neutral-300">{t}</span>
            </div>
          ))}
        </div>
        {/* Illustration */}
        <div className="rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-white/60 dark:bg-neutral-900/40 overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1600&q=80"
            alt="CCTV and access control infrastructure"
            loading="lazy"
            decoding="async"
            className="h-64 md:h-full w-full object-cover object-center"
            onError={(e) => (e.currentTarget.style.display = 'none')}
          />
        </div>
      </div>
    </section>
  )
}
