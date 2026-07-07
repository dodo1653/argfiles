import { Routes, Route } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import Layout from './components/layout/Layout'
import HomePage from './pages/HomePage'
import EvidencePage from './pages/EvidencePage'
import TokenPage from './pages/TokenPage'
import TwitterPage from './pages/TwitterPage'
import DossierPage from './pages/DossierPage'

export default function App() {
  return (
    <>
      <div className="noise-overlay" />
      <div className="scanline" />
      <AnimatePresence mode="wait">
        <Routes>
          <Route element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route path="evidence" element={<EvidencePage />} />
            <Route path="token" element={<TokenPage />} />
            <Route path="twitter" element={<TwitterPage />} />
            <Route path="dossier" element={<DossierPage />} />
          </Route>
        </Routes>
      </AnimatePresence>
    </>
  )
}
