import React from 'react'
import CountUp from './CountUp.jsx'

const stats = [
  { value: 15, suffix: '+ Years', label: 'Security Experience' },
  { value: 5000, suffix: '+', label: 'Trained Security Personnel' },
  { value: 200, suffix: '+', label: 'Client Locations Protected' },
]

export default function Stats() {
  return (
    <section className="px-2 md:px-4 py-10">
      <div className="rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-white/80 dark:bg-neutral-900/50 backdrop-blur p-6">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
          {stats.map((s) => (
            <div key={s.label}>
              <CountUp 
                end={s.value} 
                suffix={s.suffix} 
                className="text-3xl font-extrabold" 
              />
              <div className="mt-1 text-sm text-neutral-600 dark:text-neutral-400">
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}