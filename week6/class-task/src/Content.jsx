import { useContext } from "react"
import { ThemeContext } from "./Context";
export default function Content() {
    
    const { theme,toggleTheme } = useContext(ThemeContext)
    return (
      <div style={{
        height:'100vh',
        background: theme === 'light' ? '#fff' : '#444',
        color: theme === 'light' ? '#000' : '#fff',
        padding: '1rem'
      }}>
        <h2>welcome</h2>
        <p>this is the body content</p>
        <button onClick={toggleTheme}>
          Switch to {theme === 'light' ? 'Dark' : 'Light'} Theme
        </button>
      </div>
    )
  }