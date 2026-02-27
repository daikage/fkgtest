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
  // UPDATED: services per provided content (5 items)
  const cards = [
    {
      title: 'Corporate Security',
      description:
        'Our operatives are carefully selected, de-risked and trained to fit into international best practices for the protection of assets, information and people.',
      imageUrl:
        'https://i.ibb.co/cKSBPCMt/DSC1477.jpg'
    },
    {
      title: 'Event Security',
      description:
        'We add glamour to the event space with our Event Guards look-and-feel and deploy technology to secure the environment with steady response teams for distress and emergencies.',
      imageUrl:
        'https://i.ibb.co/VWMyJKnY/DSC1443.jpg'
    },
    {
      title: 'Electronic Security',
      description:
        'We leverage global partners to deliver e-security solutions that deter, detect, delay, and enable response: Access Control, Biometric, M-Scope, CCTV, electronic gates, and more.',
      imageUrl:
        'https://i.ibb.co/bgmfD219/DSC1468.jpg'
    },
    {
      title: 'Armed Security Support',
      description:
        'Robust, long-term relationships with the Nigeria Police Force and NSCDC facilitate quick response and armed guarding when required.',
      imageUrl:
        'https://i.ibb.co/21YgRg4N/hgyuj.png'
    },
    {
      title: 'Journey Management',
      description:
        'Our trained corporate close protection team safeguards assets in motion. With robust technology, we maintain clear sight and control of mobile assets with continuous tracking and response enablement.',
      imageUrl:
        'https://i.ibb.co/99P2RYbZ/1000030634.png'
    }
  ]

  return (
    <section id="services" className="px-2 md:px-4 py-12 md:py-14">
      <div className="mb-6">
        <h2 className="text-2xl font-bold">Our Services</h2>
        <p className="text-sm text-neutral-700 dark:text-neutral-400">
          Security programs tailored to Nigeria’s market segments — Enterprise, Government, NGOs, and HNIs.
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
              imageUrl={c.imageUrl}
              imageHeight="h-48 md:h-56"
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