import { Outlet } from 'react-router-dom'
import Ticker from './Ticker'
import Navbar from './Navbar'
import Footer from './Footer'
import ScrollToTop from './ScrollToTop'

export default function Layout() {
  return (
    <div style={{ background: '#38000A', minHeight: '100vh', width: '100%' }}>
      <ScrollToTop />
      <Ticker />
      <Navbar />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}
