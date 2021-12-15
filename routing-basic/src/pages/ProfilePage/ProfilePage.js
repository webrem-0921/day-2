import { Navigate } from 'react-router-dom'

function ProfilePage() {

    const isLoggedIn = false        // <= play here!
    const user = { username: 'Germantástico', email: 'whatever@msn.es' }

    if (!isLoggedIn) {
        return <Navigate to="/" />
    }

    return (
        <div>
            <h1>Perfil</h1>
            <p>¡HOLA, {user.username}!</p>
            <p>Tu email es {user.email}!</p>
        </div>
    )
}

export default ProfilePage;
