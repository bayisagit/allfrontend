import React, { createContext, useState } from 'react'

export const ThemeContext=createContext();

function Themeprovider({children}) {
  const [theme,setTheme] = useState("light")

  const toggleTheme =()=>{
    setTheme((prevtheme) =>(prevtheme === "light" ? "dark" : "light"));
  };
  return (
    <ThemeContext.Provider value={{theme,toggleTheme}}>
      {children}
    </ThemeContext.Provider>
  );
}

export default Themeprovider
