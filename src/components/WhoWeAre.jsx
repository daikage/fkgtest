import React from 'react'

export default function WhoWeAre() {
  return (
    <section className="px-2 md:px-4 py-10">
      <div className="mb-6">
        <h2 className="text-2xl font-bold">A Trusted Security Partner</h2>
        <p className="text-sm text-neutral-700 dark:text-neutral-400">
          Who we are
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        {/* Text card */}
         <div className="rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-white/80 dark:bg-neutral-900/50 backdrop-blur p-6">
           <div className="text-sm md:text-base leading-relaxed text-neutral-700 dark:text-neutral-300 space-y-3">
             <p>
               Fortknox Guards is a professional security services provider delivering integrated protection solutions across Nigeria. Our mission is to help organizations mitigate risks, protect valuable assets, and ensure operational continuity through a combination of trained personnel, advanced security technology, and strategic intelligence‑driven advisory services.
             </p>
             <p>
               With a strong reputation for reliability and professionalism, we support clients across multiple sectors including corporate organizations, government institutions, and critical infrastructure environments. Our approach focuses on proactive risk management, operational discipline, and modern security innovation.
             </p>
           </div>
         </div>
        {/* Illustrative image */}
        <div className="rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-white/60 dark:bg-neutral-900/40 overflow-hidden">
          <img
            src="https://i.ibb.co/ksY8G1vd/DSC-8827.jpg?auto=format&fit=crop&w=1600&q=80"
            alt="Security operations and monitoring center"
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
