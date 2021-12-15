import { createContext, useState, useEffect } from "react"

const AuthContext = createContext()

function AuthProviderWrapper(props) {

    const [isLoggedIn, setIsLoggedIn] = useState(false)
    const [user, setUser] = useState(null)
    const [loading, isLoading] = useState(true)


    useEffect(() => {

        setUser({ username: 'Germantastico', avatar_url: 'https://www.alucoildesign.com/assets/pages/media/profile/photo3.jpg' })
        setIsLoggedIn(true)
        isLoading(false)

    }, [])



    return (
        <AuthContext.Provider value={{ isLoggedIn, loading, user }}>
            {props.children}
        </AuthContext.Provider>
    )
}

export { AuthProviderWrapper, AuthContext }