import React from 'react'

export default function CallToAction({ onOpenQuote }) {
  return (
    <section className="px-2 md:px-4 py-12">
      <div className="relative rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-white/80 dark:bg-neutral-900/50 backdrop-blur p-6 md:p-8 text-center overflow-hidden">
        {/* Subtle background image */}
        <img
          src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=1600&q=60"
          alt="Operations team coordination"
          loading="lazy"
          decoding="async"
          className="absolute inset-0 h-full w-full object-cover opacity-15"
          onError={(e) => (e.currentTarget.style.display = 'none')}
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/70 to-white/85 dark:from-neutral-900/70 dark:to-neutral-900/85" />
        <div className="relative">
          <h2 className="text-2xl font-bold">Let’s Secure Your Organization</h2>
          <p className="mt-2 text-sm text-neutral-700 dark:text-neutral-400">
            Every organization faces unique security challenges. Our team is ready to assess your needs and design a tailored solution that protects your people, assets, and operations.
          </p>
          <div className="mt-5 flex flex-col sm:flex-row items-center justify-center gap-3">
            <button onClick={onOpenQuote} className="btn-primary rounded-xl">
              Request a Security Assessment
            </button>
            <button onClick={onOpenQuote} className="btn-outline rounded-xl">
              Speak to a Security Consultant
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
