import React from 'react'

const deployments = [
  'High profile manufacturing sectors',
  'Government institutions',
  'Major public and corporate events',
  'Commercial establishments',
]

export default function Experience() {
  return (
    <section className="px-2 md:px-4 py-10">
      <div className="mb-6">
        <h2 className="text-2xl font-bold">Delivering Security Where It Matters Most</h2>
        <p className="text-sm text-neutral-700 dark:text-neutral-400">
          Client trust & operational experience
        </p>
      </div>
      {/* Section visual */}
      <div className="relative overflow-hidden rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-white/70 dark:bg-neutral-900/50 backdrop-blur mb-6">
        <img
          src="https://images.unsplash.com/photo-1520872020165-6a281f8c56b0?auto=format&fit=crop&w=1600&q=80"
          alt="On-ground deployments and incident response"
          loading="lazy"
          decoding="async"
          className="h-48 md:h-56 w-full object-cover object-center"
          onError={(e) => (e.currentTarget.style.display = 'none')}
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/15 via-transparent to-transparent" />
      </div>
      <div className="grid gap-4 sm:grid-cols-2">
        {deployments.map((d) => (
          <div
            key={d}
            className="rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-white/80 dark:bg-neutral-900/50 backdrop-blur p-4 text-sm text-neutral-800 dark:text-neutral-300"
          >
            {d}
          </div>
        ))}
      </div>
    </section>
  )
}
