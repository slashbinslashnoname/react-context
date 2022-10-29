import React from 'react'
import { createRoot } from 'react-dom/client'
import CssBaseline from '@mui/material/CssBaseline'
import { ThemeProvider } from '@mui/material/styles'
import { StylesProvider } from '@mui/styles'

import App from './App'
import theme from './theme'

import './css/index.css'

const container = document.getElementById('root')
const root = createRoot(container)

root.render(
  <ThemeProvider theme={theme}>
    <StylesProvider injectFirst>
      <CssBaseline enableColorScheme />
      <App />
    </StylesProvider>
  </ThemeProvider>
)
