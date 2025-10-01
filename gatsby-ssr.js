import React from "react"
import { ThemeProvider } from "styled-components"
import { GlobalStyles } from "./src/styles/GlobalStyles"
import { theme } from "./src/styles/theme"

export const wrapRootElement = ({ element }) => (
  <ThemeProvider theme={theme}>
    <GlobalStyles />
    {element}
  </ThemeProvider>
)
