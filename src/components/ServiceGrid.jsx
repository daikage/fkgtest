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
      title: 'Corporate Security',
      description:
        'Our operatives are carefully selected, de-risked and trained to fit into international best practices for the protection of assets, information and people.',
      imageUrl:
        'https://i.ibb.co/cKSBPCMt/DSC1477.jpg',
      slug: 'corporate-security'
    },
    {
      title: 'Event Security',
      description:
        'We add glamour to the event space with our Event Guards look-and-feel and deploy technology to secure the environment with steady response teams for distress and emergencies.',
      imageUrl:
        'https://i.ibb.co/VWMyJKnY/DSC1443.jpg',
      slug: 'event-security'
    },
    {
      title: 'Security Technology Solutions',
      description:
        'Deployment of CCTV surveillance, access control and biometric entry systems, intrusion detection, and the M‑Scope Walk‑Through Metal Detector for advanced threat detection.',
      imageUrl:
        'https://i.ibb.co/bgmfD219/DSC1468.jpg',
      slug: 'security-technology-solutions'
    },
    {
      title: 'Risk & Advisory Services',
      description:
        'Expert risk assessments, background verification, and compliance audits that identify vulnerabilities and strengthen operational security.',
      imageUrl:
        'https://images.unsplash.com/photo-1551281044-8a9f509a0ee8?auto=format&fit=crop&w=1200&q=80',
      slug: 'risk-and-advisory-services'
    },
    {
      title: 'Armed Security Support',
      description:
        'Robust, long-term relationships with the Nigeria Police Force and NSCDC facilitate quick response and armed guarding when required.',
      imageUrl:
        'https://i.ibb.co/21YgRg4N/hgyuj.png',
      slug: 'armed-security-support'
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