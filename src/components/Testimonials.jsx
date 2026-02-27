import { motion } from 'framer-motion'

const testimonials = [
  {
    quote: 'Their rapid response and disciplined posture reduced our incidents within weeks.',
    name: 'T. Adeyemi',
    role: 'Facilities Director, Commercial Estate',
    avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=200&h=200&fit=crop'
  },
  {
    quote: 'Professional, proactive, and data-driven. We trust them with our highest-risk sites.',
    name: 'L. Okafor',
    role: 'Security Manager, Industrial Plant',
    avatar: 'https://images.unsplash.com/photo-1502685104226-ee32379fefbe?q=80&w=200&h=200&fit=crop'
  },
  {
    quote: 'Clear SOPs and reporting. The team integrates seamlessly with our operations.',
    name: 'M. Ojo',
    role: 'Operations Lead, Residential Community',
    avatar: 'https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?q=80&w=200&h=200&fit=crop'
  }
]

export default function Testimonials() {
  return (
    <section className="px-2 md:px-4 py-10">
      <div className="mb-6">
        <h2 className="text-2xl font-bold">What Clients Say</h2>
        <p className="text-sm text-neutral-700 dark:text-neutral-400">
          Real outcomes from partners who demand zero-compromise security.
        </p>
      </div>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {testimonials.map((t, i) => (
          <motion.div
            key={t.name}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.45, delay: i * 0.08 }}
            className="rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-white/80 dark:bg-neutral-900/50 backdrop-blur p-5"
          >
            <div className="flex items-center gap-3">
              <img
                src={t.avatar}
                alt={`${t.name} avatar`}
                className="h-12 w-12 rounded-full object-cover border border-neutral-200 dark:border-neutral-800"
                loading="lazy"
              />
              <div>
                <div className="font-semibold">{t.name}</div>
                <div className="text-xs text-neutral-600 dark:text-neutral-400">{t.role}</div>
              </div>
            </div>
            <p className="mt-3 text-sm text-neutral-700 dark:text-neutral-300">“{t.quote}”</p>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
