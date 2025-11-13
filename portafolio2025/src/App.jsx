import { BrowserRouter } from 'react-router-dom'
import { Routes, Route } from 'react-router-dom'
import HomePage from "./module/Home/Pages/HomePage"
import SiteLayout from '@/layout/SiteLayout'
import PageContact from './module/Contact/pages/PageContact'
import WorksPage from './module/Works/Pages/WorksPage'
import AbuotPage from './module/About/pages/AboutPage';
import PageServices from './module/Services/pages/PageServices'
import ProjectDetailPage from './module/Works/Components/pages/ProjectDetailPage'


export default function App() {
  return (
    <BrowserRouter>
    
    <Routes>
          <Route element={<SiteLayout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/contacto" element={<PageContact />} />
          <Route path="/works" element={<WorksPage />} />
           <Route path="/works/:projectId" element={<ProjectDetailPage />} />
          <Route path="/servicios" element={<PageServices />} />
          <Route path="/about" element={<AbuotPage />} />
          </Route>
    </Routes>
    
    </BrowserRouter>
  )
}
