import { motion } from 'framer-motion'
import ServiceCard from './ServiceCard.jsx'

function ShieldIllustration({ className }) {
  return (
    <svg className={className} viewBox="0 0 64 64" fill="none">
      <path d="M32 4L8 12v18c0 11.6 8.6 22.2 24 30 15.4-7.8 24-18.4 24-30V12L32 4z" stroke="currentColor" strokeWidth="3" fill="currentColor" opacity="0.15"/>
      <path d="M32 12l-16 6v12c0 8.6 6.2 16.5 16 22 9.8-5.5 16-13.4 16-22V18l-16-6z" stroke="currentColor" strokeWidth="2"/>
    </svg>
  )
}
function BoltIllustration({ className }) {
  return (
    <svg className={className} viewBox="0 0 64 64" fill="none">
      <path d="M38 4L10 36h16l-8 24 36-36H38l8-20z" stroke="currentColor" strokeWidth="3" fill="currentColor" opacity="0.15"/>
    </svg>
  )
}
function EyeIllustration({ className }) {
  return (
    <svg className={className} viewBox="0 0 64 64" fill="none">
      <path d="M4 32s10-16 28-16 28 16 28 16-10 16-28 16S4 32 4 32z" stroke="currentColor" strokeWidth="3" fill="currentColor" opacity="0.15"/>
      <circle cx="32" cy="32" r="8" stroke="currentColor" strokeWidth="3"/>
    </svg>
  )
}

const containerVariants = {
  hidden: { opacity: 0, y: 12 },
  show: {
    opacity: 1, y: 0,
    transition: { staggerChildren: 0.08, duration: 0.4 }
  }
}
const itemVariants = {
  hidden: { opacity: 0, y: 10 },
  show: { opacity: 1, y: 0, transition: { duration: 0.4 } }
}

export default function ServiceGrid({ onCTAClick }) {
  const cards = [
    {
      title: 'Tactical Presence',
      description: 'Armed and unarmed guarding with military-grade discipline.',
      Illustration: ShieldIllustration,
      imageUrl: 'https://images.pexels.com/photos/7718127/pexels-photo-7718127.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1'
    },
    {
      title: 'Rapid Response',
      description: 'Mobile patrol units equipped with real-time GPS tracking.',
      Illustration: BoltIllustration,
      imageUrl: 'https://images.unsplash.com/photo-1482192596544-9eb780fc7f66?auto=format&fit=crop&w=800&q=80'
    },
    {
      title: 'Risk Mitigation',
      description: 'Comprehensive fire watch and asset protection protocols.',
      Illustration: EyeIllustration,
      imageUrl: 'https://images.unsplash.com/photo-1520872020165-6a281f8c56b0?auto=format&fit=crop&w=800&q=80'
    }
  ]

  return (
    <section id="services" className="container py-12 md:py-14">
      <div className="mb-6">
        <h2 className="text-2xl font-bold">Core Capabilities</h2>
        <p className="text-sm text-neutral-700 dark:text-neutral-400">
          Purpose-built security frameworks that reduce risk, not just observe it.
        </p>
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
      >
        {cards.map((c) => (
          <motion.div key={c.title} variants={itemVariants}>
            <ServiceCard
              title={c.title}
              description={c.description}
              Illustration={c.Illustration}
              imageUrl={c.imageUrl}
              cta={
                <button onClick={onCTAClick} className="mt-3 btn-outline rounded-lg">
                  Request Quote
                </button>
              }
            />
          </motion.div>
        ))}
      </motion.div>
    </section>
  )
}