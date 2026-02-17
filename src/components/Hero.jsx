import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function Hero({ onCTAClick }) {
  // Slider images (security-themed)
  const slides = [
    'https://images.unsplash.com/photo-1483058712412-4245e9b90334?auto=format&fit=crop&w=1600&q=80',
    'https://images.unsplash.com/photo-1482192596544-9eb780fc7f66?auto=format&fit=crop&w=1600&q=80',
    'https://images.unsplash.com/photo-1483058712412-4245e9b90334?auto=format&fit=crop&w=1600&q=80',
    'https://images.unsplash.com/photo-1483058712412-4245e9b90334?auto=format&fit=crop&w=1600&q=80',
    'https://images.unsplash.com/photo-1521791055366-0d553872125f?auto=format&fit=crop&w=1600&q=80',
  ]
  const [index, setIndex] = useState(0)
  const [paused, setPaused] = useState(false)
  useEffect(() => {
    if (paused) return
    const t = setInterval(() => setIndex((i) => (i + 1) % slides.length), 4500)
    return () => clearInterval(t)
  }, [paused, slides.length])

  return (
    <section className="relative overflow-hidden">
      {/* Animated accent background */}
      <div className="absolute inset-0 hero-accent" aria-hidden />
      {/* Floating orange orb */}
      <motion.div
        aria-hidden
        className="absolute h-72 w-72 rounded-full bg-brand/20 blur-3xl -right-20 -top-20"
        animate={{ y: [0, -18, 0], x: [0, 6, 0], opacity: [0.6, 0.8, 0.6] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
      />
      {/* Subtle dark orb for contrast */}
      <motion.div
        aria-hidden
        className="absolute h-60 w-60 rounded-full bg-black/5 blur-3xl left-10 bottom-0"
        animate={{ y: [0, 14, 0], opacity: [0.4, 0.6, 0.4] }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
      />

      <div className="relative container py-20 md:py-28">
        <motion.span
          className="inline-flex items-center rounded-full border border-neutral-200 dark:border-neutral-800 px-3 py-1.5 text-xs uppercase tracking-wider text-neutral-600 dark:text-neutral-300 bg-white/80 dark:bg-neutral-900/60 backdrop-blur"
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
        >
          Intelligence-led security
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.05 }}
          className="mt-4 text-4xl md:text-5xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-brand to-amber-500"
        >
          Security Solutions that Exceed Expectation using People, Technology and Response
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.12 }}
          className="mt-4 max-w-2xl text-neutral-700 dark:text-neutral-300"
        >
          Fort Knox Guards is a security risk management solutions company established and licensed to render professional security solutions, tailored to meet every segment of the market (Enterprise, Government, NGOs, HNIs) in Nigeria.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-8 flex gap-3"
        >
          <a href="/about" className="btn-primary rounded-xl">
            Learn More
          </a>
          <a href="#services" className="btn-outline rounded-xl">
            Explore Services
          </a>
        </motion.div>

        {/* Hero visual: animated slider of 5 photos */}
        <div
          className="mt-10 relative overflow-hidden rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-white/70 dark:bg-neutral-900/50 backdrop-blur"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          <div className="relative h-56 md:h-80 w-full">
            <AnimatePresence mode="wait">
              <motion.img
                key={slides[index]}
                src={slides[index]}
                alt="Security operations visual"
                loading="eager"
                className="absolute inset-0 h-full w-full object-cover"
                initial={{ opacity: 0, scale: 1.02, y: 8 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0.0, scale: 1.01 }}
                transition={{ duration: 0.7, ease: 'easeOut' }}
              />
            </AnimatePresence>
          </div>
          {/* Dots navigation */}
          <div className="absolute bottom-3 left-0 right-0 z-10 flex justify-center gap-2">
            {slides.map((_, i) => (
              <button
                key={i}
                aria-label={`Go to slide ${i + 1}`}
                onClick={() => setIndex(i)}
                className={`h-2.5 w-2.5 rounded-full border border-white/70 dark:border-neutral-700 transition ${
                  index === i ? 'bg-white/90 dark:bg-neutral-200' : 'bg-white/50 dark:bg-neutral-800'
                }`}
              />
            ))}
          </div>
          {/* Overlay for readability */}
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-transparent" />
        </div>
      </div>
    </section>
  )
}