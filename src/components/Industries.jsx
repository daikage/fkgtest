import React from 'react'

const industries = [
  'Corporate & Commercial Facilities',
  'Oil & Gas Infrastructure',
  'Government Institutions',
  'Financial Institutions',
  'Residential Estates',
  'Event & Entertainment Venues',
  'Logistics & Transportation',
]

export default function Industries() {
  return (
    <section className="px-2 md:px-4 py-10">
      <div className="mb-6">
        <h2 className="text-2xl font-bold">Security Solutions Across Key Sectors</h2>
        <p className="text-sm text-neutral-700 dark:text-neutral-400">
          Our tailored approach aligns protection to each sector’s unique risk profile.
        </p>
      </div>
      {/* Section visual */}
      <div className="relative overflow-hidden rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-white/70 dark:bg-neutral-900/50 backdrop-blur mb-6">
        <img
          src="https://i.ibb.co/spMJJdHj/DSC-8860.jpg?auto=format&fit=crop&w=1600&q=80"
          alt="Diverse industries and infrastructure"
          loading="lazy"
          decoding="async"
          className="h-200 md:h-190 w-full object-cover object-center"
          onError={(e) => (e.currentTarget.style.display = 'none')}
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/15 via-transparent to-transparent" />
      </div>
      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {industries.map((i) => (
          <div
            key={i}
            className="rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-white/80 dark:bg-neutral-900/50 backdrop-blur p-4 text-sm text-neutral-800 dark:text-neutral-300"
          >
            {i}
          </div>
        ))}
      </div>
    </section>
  )
}
