import './index.css'
import Ticker from './components/Ticker'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Tracks from './components/Tracks'
import Curriculum from './components/Curriculum'
import Stats from './components/Stats'
import JoinCTA from './components/JoinCTA'
import Footer from './components/Footer'

export default function App() {
  return (
    <div style={{ background: '#38000A', minHeight: '100vh', width: '100%' }}>
      <Ticker />
      <Navbar />
      <Hero />
      <Tracks />
      <Curriculum />
      <Stats />
      <JoinCTA />
      <Footer />
    </div>
  )
}
