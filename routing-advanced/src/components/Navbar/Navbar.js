import { NavLink } from "react-router-dom";

function Navbar() {

    const activeStyle = { color: 'red' }

    return (
        <nav className="Navbar">
            <ul>
                <li><NavLink to="/" style={({ isActive }) => isActive ? activeStyle : undefined}>Inicio</NavLink></li>
                <li><NavLink to="/proyectos" style={({ isActive }) => isActive ? activeStyle : undefined}>Proyectos</NavLink></li>

                <li><NavLink to="/servicios/vuelos/iberia" style={({ isActive }) => isActive ? activeStyle : undefined}>Route Params raw</NavLink></li>
                <li><NavLink to="/resultados?prenda=pantalon&temporada=verano&color=rojo" style={({ isActive }) => isActive ? activeStyle : undefined}>Route Params raw</NavLink></li>

            </ul>
        </nav>
    )
}

export default Navbar