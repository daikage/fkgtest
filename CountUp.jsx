import { useEffect, useRef, useState } from 'react'

export default function CountUp({
  end,
  start = 0,
  duration = 1500,
  prefix = '',
  suffix = '',
  className = '',
}) {
  const [value, setValue] = useState(start)
  const [hasRun, setHasRun] = useState(false)
  const ref = useRef(null)
  const rafRef = useRef(0)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasRun) {
            setHasRun(true)
            const startTime = performance.now()

            const animate = (now) => {
              const elapsed = now - startTime
              const progress = Math.min(elapsed / duration, 1)
              // easeOutCubic
              const eased = 1 - Math.pow(1 - progress, 3)
              const current = Math.round(start + (end - start) * eased)
              setValue(current)
              if (progress < 1) {
                rafRef.current = requestAnimationFrame(animate)
              } else {
                setValue(end)
              }
            }

            rafRef.current = requestAnimationFrame(animate)
          }
        })
      },
      { threshold: 0.4 }
    )

    io.observe(el)
    return () => {
      io.disconnect()
      if (rafRef.current) cancelAnimationFrame(rafRef.current)
    }
  }, [end, start, duration, hasRun])

  const formatted = Number.isFinite(value) ? value.toLocaleString() : value

  return (
    <span ref={ref} className={className}>
      {prefix}{formatted}{suffix}
    </span>
  )
}
