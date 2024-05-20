export const metadata = {
  title: 'Roopass',
  description: 'Roopass',
}

import Hero from '@/components/hero'
import CaseStudies from '@/components/case-studies'
import OurSolution from '@/components/our-solution'
import Testimonials from '@/components/testimonials'
import AboutUs from '@/components/about-us'
import OurTeam from '@/components/our-team'

export default function Home() {
  return (
    <>
      <Hero />
      <OurSolution />
      <AboutUs />
      {/* <CaseStudies/> */}
      {/* <OurTeam /> */}
      <Testimonials />
    </>
  )
}
