// src/pages/ProjectsPage.js

import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import projectsData from "./../../projects-data.json";

function ProjectsPage() {
    const [projects, setProjects] = useState([]);

    // This effect will run only once on initial render.
    // To do it we set the dependency array empty [].
    useEffect(() => {
        setProjects(projectsData);
    }, []);

    return (
        <div>
            <h2>Projects</h2>
            {projects.map((project) => {
                return (
                    <div key={project.id} className="project">
                        <h3>{project.name}</h3>
                        <p>{project.technologies}</p>
                    </div>
                );
            })}
            <Link to="/">
                <button>Ir a inicio</button>
            </Link>
        </div>
    );
}

export default ProjectsPage;
