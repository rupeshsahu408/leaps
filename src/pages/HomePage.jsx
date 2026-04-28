import Hero from '../components/Hero'
import VideoSection from '../components/VideoSection'
import Tracks from '../components/Tracks'
import Curriculum from '../components/Curriculum'
import InstitutionsProblem from '../components/InstitutionsProblem'
import FounderQuote from '../components/FounderQuote'
import Locations from '../components/Locations'
import HowItWorks from '../components/HowItWorks'
import SpotlightLab from '../components/SpotlightLab'
import Mentors from '../components/Mentors'
import FounderSocial from '../components/FounderSocial'
import BuilderCTA from '../components/BuilderCTA'

export default function HomePage() {
  return (
    <>
      <Hero />
      <VideoSection />
      <Tracks />
      <Curriculum />
      <InstitutionsProblem />
      <FounderQuote />
      <Locations />
      <HowItWorks />
      <SpotlightLab />
      <Mentors />
      <FounderSocial />
      <BuilderCTA />
    </>
  )
}
