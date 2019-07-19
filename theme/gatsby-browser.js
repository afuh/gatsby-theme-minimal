/* eslint react/prop-types: 0  */
import React from "react"

import ViewdProjectProvider from './src/utils/hooks/useViewedProject'
import SwitchThemeProvider from './src/utils/hooks/useSwitchTheme'

export const wrapRootElement = ({ element }) => (
  <ViewdProjectProvider>
    <SwitchThemeProvider>
      {element}
    </SwitchThemeProvider>
  </ViewdProjectProvider>
)
