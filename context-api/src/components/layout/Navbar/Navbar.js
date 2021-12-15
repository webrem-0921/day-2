
import { NavLink } from 'react-router-dom'

import { useContext } from 'react';
import { ThemeContext } from './../../../context/theme.context'
import { AuthContext } from './../../../context/auth.context'

function Navbar() {

    const activeStyle = { color: 'red' }
    const { theme, toggleTheme } = useContext(ThemeContext)
    const { isLoggedIn, user } = useContext(AuthContext)

    return (
        <nav className={`Navbar ${theme}`}>
            <div>
                <NavLink to="/" style={({ isActive }) => isActive ? activeStyle : undefined}>Inicio</NavLink>
                <NavLink to="/projects" style={({ isActive }) => isActive ? activeStyle : undefined}>Proyectos</NavLink>
                {
                    isLoggedIn && <NavLink to="/profile" style={({ isActive }) => isActive ? activeStyle : undefined}>¡Hola, {user.username}!</NavLink>
                }
            </div>
            <button className="theme-btn" onClick={toggleTheme}>
                {theme === 'light' ? 'dark ' : 'light '}
            </button>
        </nav>
    )
}

export default Navbar;
