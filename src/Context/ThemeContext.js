"use client";

import { createContext, useState } from "react"
//Creating the context, do not forget to call the function createContext()
export const ThemeContext = createContext()
// this function will wrap the entire app to call it from any where
export const ThemeProvider = ({ children }) => {

    const [mode, setMode] = useState("dark")

    const toggle = () => {
        setMode((prev) => (prev === "dark" ? "light" : "dark"))
    }
    return (
    <ThemeContext.Provider value={{ toggle, mode }}>
        <div className={`theme ${mode}`}>{children}</div>

    </ThemeContext.Provider>
    )
}
