import './index.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import HomePage from './pages/HomePage'
import PlatformPage from './pages/PlatformPage'
import LocationsPage from './pages/LocationsPage'
import InstitutionsPage from './pages/InstitutionsPage'
import CommunityPage from './pages/CommunityPage'
import ContactPage from './pages/ContactPage'
import JoinPage from './pages/JoinPage'
import NotFoundPage from './pages/NotFoundPage'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/platform" element={<PlatformPage />} />
          <Route path="/locations" element={<LocationsPage />} />
          <Route path="/institutions" element={<InstitutionsPage />} />
          <Route path="/community" element={<CommunityPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/join" element={<JoinPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
