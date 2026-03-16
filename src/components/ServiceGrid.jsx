import { motion } from 'framer-motion'
import ServiceCard from './ServiceCard.jsx'
import { Link, useNavigate } from 'react-router-dom'

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
  const navigate = useNavigate()
  // UPDATED: services to include slug for detail pages
  const cards = [
    {
      title: 'Manned Guarding',
      description:
        'Professional, vetted security personnel for access control, patrols, and incident response, providing a visible and proactive line of defence.',
      imageUrl:
        'https://i.ibb.co/yn2jQPP0/DSC1358.jpg',
      slug: 'manned-guarding'
    },
    {
      title: 'Event Security Management',
      description:
        'Comprehensive security for corporate functions, concerts, and public gatherings, including crowd management and emergency readiness.',
      imageUrl:
        'https://i.ibb.co/VWMyJKnY/DSC1443.jpg',
      slug: 'event-security-management'
    },
    {
      title: 'Executive Protection',
      description:
        'Discreet, strategic personal security for senior executives and high-net-worth individuals, including close protection and secure travel planning.',
      imageUrl:
        'https://i.ibb.co/cKSBPCMt/DSC1477.jpg',
      slug: 'executive-protection'
    },
    {
      title: 'Risk & Advisory Services',
      description:
        'Expert risk assessments, background verification, and compliance audits that identify vulnerabilities and strengthen operational security.',
      imageUrl:
        'https://i.ibb.co/Q76mTSVG/Whats-App-Image-2026-03-13-at-14-39-27.jpg',
      slug: 'risk-and-advisory-services'
    },
    {
      title: 'Security Technology Solutions',
      description:
        'Deployment of CCTV, access control, intrusion detection, and advanced screening for modern threat detection.',
      imageUrl:
        'https://i.ibb.co/39qPhLtq/Gemini-Generated-Image-wbe1h7wbe1h7wbe1.png',
      slug: 'security-technology-solutions'
    },
    {
      title: 'Journey Management',
      description:
        'Structured secure movement planning and monitoring to ensure the safety of personnel and assets during travel operations.',
      imageUrl:
        'https://i.ibb.co/99P2RYbZ/1000030634.png',
        slug: 'journey-management'
    }
  ]

  return (
    <section id="services" className="px-2 md:px-4 py-12 md:py-14">
      <div className="mb-6">
        <h2 className="text-2xl font-bold">Comprehensive Security Services</h2>
        <p className="text-sm text-neutral-700 dark:text-neutral-400">
          Fortknox Guards offers a full spectrum of security services designed to address the evolving needs of modern organizations.
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
          <motion.div
            key={c.title}
            variants={itemVariants}
            onClick={() => navigate(`/services/${c.slug}`)}
            className="cursor-pointer"
            role="button"
            tabIndex={0}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault()
                navigate(`/services/${c.slug}`)
              }
            }}
          >
            <ServiceCard
              title={c.title}
              description={c.description}
              imageUrl={c.imageUrl}
              imageHeight="h-48 md:h-56"
              cta={
                <div className="mt-3 flex gap-2">
                  <button
                    onClick={(e) => {
                      e.stopPropagation()
                      onCTAClick()
                    }}
                    className="btn-outline rounded-lg"
                  >
                     Request Quote
                   </button>
                  <Link
                    to={`/services/${c.slug}`}
                    onClick={(e) => e.stopPropagation()}
                    className="btn-primary rounded-lg"
                  >
                    Learn More
                  </Link>
                </div>
              }
            />
          </motion.div>
        ))}
      </motion.div>
    </section>
  )
}