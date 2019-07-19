import React, { useState, createContext, useContext } from 'react'

import { theme as defaultTheme } from '../theme'

const Context = createContext()
export const useSwitchTheme = () => useContext(Context)

const SwitchThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(defaultTheme)

  const switchTheme = () => {
    setTheme({
      ...defaultTheme,
      white: theme.black,
      black: theme.white
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
