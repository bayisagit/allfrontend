import { UserAuthContext } from "./Context"
import { useContext } from "react"
export default function LoginPage() {
    const { isLoggedIn, toggleLogin } = useContext(UserAuthContext)
    return (
        <div className="container">
            
            <p>{isLoggedIn ? 'welcome you are logged in':'please login'}</p>
            <button onClick={toggleLogin} >{isLoggedIn ? 'Logout':'Login'}</button>
        </div>
    )
}