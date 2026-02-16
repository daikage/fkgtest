import { useEffect, useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'

function CountUp({ to, duration = 1.6, prefix = '', suffix = '' }) {
  const [val, setVal] = useState(0)
  const rafRef = useRef()
  useEffect(() => {
    let start
    const step = (t) => {
      if (start === undefined) start = t
      const p = Math.min(1, (t - start) / (duration * 1000))
      setVal(Math.floor(p * to))
      if (p < 1) rafRef.current = requestAnimationFrame(step)
    }
    rafRef.current = requestAnimationFrame(step)
    return () => cancelAnimationFrame(rafRef.current)
  }, [to, duration])
  return (
    <span>
      {prefix}
      {val.toLocaleString()}
      {suffix}
    </span>
  )
}

export default function Metrics() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, amount: 0.3 })

  const items = [
    { label: 'Average Response', value: 7, suffix: 'min' },
    { label: 'Sites Protected', value: 120 },
    { label: 'Incident Reduction', value: 43, suffix: '%' },
  ]

  return (
    <section ref={ref} className="container mt-8">
      <div className="grid gap-4 sm:grid-cols-3">
        {items.map((it, i) => (
          <motion.div
            key={it.label}
            initial={{ opacity: 0, y: 12, scale: 0.98 }}
            animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
            transition={{ duration: 0.45, delay: 0.08 * i }}
            className="rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-white/80 dark:bg-neutral-900/50 backdrop-blur p-5"
          >
            <div className="text-3xl font-extrabold tracking-tight">
              {inView ? (
                <CountUp to={it.value} suffix={it.suffix ?? ''} />
              ) : (
                <span>0{it.suffix ?? ''}</span>
              )}
            </div>
            <div className="mt-1 text-sm text-neutral-600 dark:text-neutral-400">{it.label}</div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
