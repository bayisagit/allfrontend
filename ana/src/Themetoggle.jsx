import React, { useContext } from 'react';
import { ThemeContext } from "./Themeprovider";

function Themetoggle() {
    const {theme,toggleTheme } = useContext(ThemeContext);
  return (
    <div className={`h-screen ${theme==="light"?"":"bg-black text-white"}`}>
        <button onClick={toggleTheme}>
            {theme === "light" ? "dark" : "light"}
        </button>
    </div>
  );
}

export default Themetoggle
