import projectsData from './../../projects-data.json';
import { Link, useParams } from 'react-router-dom'

function ProjectDetailsPage() {

    const { project_id } = useParams()

    const foundProject = projectsData.find(eachProject => eachProject._id === project_id)

    console.log('Estamos mostrando la info para el proyecto', project_id)

    return (
        <div>
            {
                !foundProject
                    ?
                    <h1>Proyecto no encontrado</h1>
                    :
                    (
                        <>
                            <h2>{foundProject.name}</h2>
                            <h3>Tech Stack: {foundProject.technologies}</h3>
                            <p>{foundProject.description}</p>
                        </>
                    )
            }

            <Link to="/proyectos">Back</Link>
        </div>
    )
}

export default ProjectDetailsPage;
