import Hero from '../components/Hero.jsx'
import ServiceGrid from '../components/ServiceGrid.jsx'
import TrustedBy from '../components/TrustedBy.jsx'
import Testimonials from '../components/Testimonials.jsx'

export default function Home({ onOpenQuote }) {
  return (
    <>
      <Hero onCTAClick={onOpenQuote} />
      <ServiceGrid onCTAClick={onOpenQuote} />
      {/* ADD: testimonials for social proof */}
      <Testimonials />
      <TrustedBy />
    </>
  )
}