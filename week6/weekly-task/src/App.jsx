import UserAuthProvider from "./Context"
import LoginPage from "./LoginPage"
function App() {


  return (
    <UserAuthProvider>
      <LoginPage />
    </UserAuthProvider>
  )
}

export default App
