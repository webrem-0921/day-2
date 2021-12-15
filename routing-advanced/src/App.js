import './App.css'
import HomePage from './pages/HomePage/HomePage'
import ProjectsPage from './pages/ProjectsPage/ProjectsPage'
import ErrorPage from './pages/ErrorPage/ErrorPage'
import Navbar from './components/Navbar/Navbar'
import ProjectDetailsPage from './pages/ProjectDetailsPage/ProjectDetailsPage'

import RawParamsPage from './pages/RawParamsPage/RawParamsPage.js'
import RawQueryStringsPage from './pages/RawQueryStringsPage/RawQueryStringsPage'

import { Routes, Route } from 'react-router-dom'


function App() {
  return (
    <div className="App">

      <Navbar />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/proyectos" element={<ProjectsPage />} />
        <Route path="/proyectos/:project_id" element={<ProjectDetailsPage />} />

        <Route path="/servicios/:service/:company" element={<RawParamsPage />} />
        <Route path="/resultados" element={<RawQueryStringsPage />} />

        <Route path="*" element={<ErrorPage />} />
      </Routes>

    </div>
  )
}
export default App