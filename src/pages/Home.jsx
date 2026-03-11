import Hero from '../components/Hero.jsx'
import ServiceGrid from '../components/ServiceGrid.jsx'
import TrustedBy from '../components/TrustedBy.jsx'
import Testimonials from '../components/Testimonials.jsx'
import WhyChooseUs from '../components/WhyChooseUs.jsx'
import WhoWeAre from '../components/WhoWeAre.jsx'
import Industries from '../components/Industries.jsx'
import TechnologyInnovation from '../components/TechnologyInnovation.jsx'
import Experience from '../components/Experience.jsx'
import Stats from '../components/Stats.jsx'
import CallToAction from '../components/CallToAction.jsx'


export default function Home({ onOpenQuote }) {
  return (
    <>
      <Hero onCTAClick={onOpenQuote} />
      {/* <ServiceGrid onCTAClick={onOpenQuote} /> */}
      <WhoWeAre />
      <WhyChooseUs />
      <Industries />
      <TechnologyInnovation />
     {/* ADD: testimonials for social proof */}
     {/* <Testimonials /> */}
     <TrustedBy />
      <Experience />
      <Stats />
      <CallToAction onOpenQuote={onOpenQuote} />
    </>
  )
}