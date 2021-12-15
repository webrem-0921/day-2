import './App.css'
import AboutPage from './pages/AboutPage/AboutPage'
import HomePage from './pages/HomePage/HomePage'
import ProjectsPage from './pages/ProjectsPage/ProjectsPage'
import ErrorPage from './pages/ErrorPage/ErrorPage'
import ProfilePage from './pages/ProfilePage/ProfilePage'
import Navbar from './components/Navbar/Navbar'

import { Routes, Route } from 'react-router-dom'


function App() {
  return (
    <div className="App">

      <Navbar />


      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/proyectos" element={<ProjectsPage />} />
        <Route path="/sobre-mi" element={<AboutPage />} />
        <Route path="/perfil" element={<ProfilePage />} />


        <Route path="*" element={<ErrorPage />} />
      </Routes>

    </div>
  )
}
export default App