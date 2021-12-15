import { NavLink } from "react-router-dom";

function Navbar() {

    const activeStyle = { color: 'red' }

    const isLoggedIn = false        // <= play here!
    const user = { username: 'Germantástico', email: 'whatever@msn.es' }

    return (
        <nav className="Navbar">
            <ul>
                <li><NavLink to="/" style={({ isActive }) => isActive ? activeStyle : undefined}>Inicio</NavLink></li>
                <li><NavLink to="/proyectos" style={({ isActive }) => isActive ? activeStyle : undefined}>Proyectos</NavLink></li>
                <li><NavLink to="/sobre-mi" style={({ isActive }) => isActive ? activeStyle : undefined}>Sobre mi</NavLink></li>
                {
                    isLoggedIn && <li><NavLink to="/perfil" style={({ isActive }) => isActive ? activeStyle : undefined}>Perfil</NavLink></li>
                }
            </ul>
        </nav>
    )
}

export default Navbar