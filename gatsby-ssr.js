import React from "react"
import { ThemeProvider } from "styled-components"
import { globalStyles } from "./src/styles/globalStyles"
import { theme } from "./src/styles/theme"

export const wrapRootElement = ({ element }) => (
  <ThemeProvider theme={theme}>
    <globalStyles />
    {element}
  </ThemeProvider>
)
