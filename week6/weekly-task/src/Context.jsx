import { createContext, useState } from "react";
export const UserAuthContext = createContext()

export default function UserAuthProvider({ children }) {

    const [isLoggedIn, setIsLoggedIn] = useState(false)
    const toggleLogin = () => {
        setIsLoggedIn(prev => !prev)
    }

    return (
        <UserAuthContext.Provider value={{ isLoggedIn, toggleLogin }}>
            {children}
        </UserAuthContext.Provider>
    )
}