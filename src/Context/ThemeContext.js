import { createContext, useContext, useState } from "react";

const ThemeContext = createContext()
const ThemeContextProvider = ({children})=>{
    const [theme, setTheme] = useState("dark_mode");

const modifyTheme = ()=>{
    setTheme(theme==="dark_mode" ? "" : "dark_mode")
}

    return (
        <ThemeContext.Provider value={{theme, modifyTheme}}>
            {children}
        </ThemeContext.Provider>
    )
}
const useTheme = ()=> useContext(ThemeContext);
export {useTheme, ThemeContextProvider}