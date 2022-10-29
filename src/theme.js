import { createTheme } from '@mui/material/styles'

// A custom theme for this app
const theme = createTheme({
  palette: {
    primary: {
      main: '#2f3c7c',
    },
    secondary: {
      main: '#19857b',
    },
  },
  components: {
    MuiToolbar: {
      styleOverrides: {
        root: {
          a: {
            color: 'white',
          },
        },
      },
    },
  },
})

export default theme
