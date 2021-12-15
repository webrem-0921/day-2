import './App.css';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar/Navbar';
import HomePage from './components/pages/HomePage/HomePage';
import ProjectsPage from './components/pages/ProjectsPage/ProjectsPage';

function App() {
    return (
        <div className="App">
            <Navbar />

            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/projects" element={<ProjectsPage />} />
            </Routes>
        </div>
    );
}

export default App