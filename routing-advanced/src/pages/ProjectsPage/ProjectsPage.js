import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import projectsData from "./../../projects-data.json"

function ProjectsPage() {
    const [projects, setProjects] = useState([])

    useEffect(() => setProjects(projectsData), [])

    return (
        <div>
            <h2>Projects</h2>
            {projects.map((project) => {
                return (
                    <div key={project.id} className="project">
                        <Link to={`/proyectos/${project._id}`}>
                            <h3>{project.name}</h3>
                        </Link>
                        <p>{project.technologies}</p>
                    </div>
                )
            })}

            <Link to="/">
                <button>Ir a inicio</button>
            </Link>
        </div>
    )
}

export default ProjectsPage
