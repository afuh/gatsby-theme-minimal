import React, { useState, createContext, useContext } from "react"

import { themeUtils } from "../themeUtils"

const Context = createContext()
export const useSwitchTheme = () => useContext(Context)

const SwitchThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(themeUtils)

  const switchTheme = () => {
    setTheme({
      ...themeUtils,
      secondary: theme.primary,
      primary: theme.secondary
    })
  }

  return (
    <Context.Provider value={{
      theme,
      switchTheme
    }}>
      {children}
    </Context.Provider>
  )
}

export default SwitchThemeProvider
