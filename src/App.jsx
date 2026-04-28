import './index.css'
import Ticker from './components/Ticker'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import VideoSection from './components/VideoSection'
import Tracks from './components/Tracks'
import Curriculum from './components/Curriculum'
import InstitutionsProblem from './components/InstitutionsProblem'
import FounderQuote from './components/FounderQuote'
import Locations from './components/Locations'
import HowItWorks from './components/HowItWorks'
import SpotlightLab from './components/SpotlightLab'
import Mentors from './components/Mentors'
import BuilderCTA from './components/BuilderCTA'
import InstitutionsContact from './components/InstitutionsContact'
import Footer from './components/Footer'

export default function App() {
  return (
    <div style={{ background: '#38000A', minHeight: '100vh', width: '100%' }}>
      <Ticker />
      <Navbar />
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
      <BuilderCTA />
      <InstitutionsContact />
      <Footer />
    </div>
  )
}
