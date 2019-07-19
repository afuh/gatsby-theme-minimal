/* eslint react/prop-types: 0  */
import React from "react"

import ViewdPostProvider from './src/utils/hooks/useViewedPost'
import SwitchThemeProvider from './src/utils/hooks/useSwitchTheme'

export const wrapRootElement = ({ element }) => (
  <ViewdPostProvider>
    <SwitchThemeProvider>
      {element}
    </SwitchThemeProvider>
  </ViewdPostProvider>
)
