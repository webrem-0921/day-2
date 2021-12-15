import { useParams, Link } from 'react-router-dom'

function RawParamsPage() {

    const { service, company } = useParams()

    return (
        <>
            <p>Tienes que enviar a la API una solicitud para el servicio {service} con la empresa {company}</p>

            <Link to="/">Volver</Link>
        </>
    )

}

export default RawParamsPage