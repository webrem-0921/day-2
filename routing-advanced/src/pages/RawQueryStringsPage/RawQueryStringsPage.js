import { Link, useSearchParams } from 'react-router-dom'

function RawQueryStringsPage() {

    const [searchParams] = useSearchParams()

    const clothe = searchParams.get('prenda')
    const season = searchParams.get('temporada')
    const color = searchParams.get('color')

    return (
        <>
            <p>Tienes que enviar a la API una solicitud para la prenda {clothe} de la temporada {season} y el color {color}</p>
            <Link to="/">Volver</Link>
        </>
    )

}

export default RawQueryStringsPage