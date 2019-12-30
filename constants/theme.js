// https://colorpalettes.net/color-palette-4103/
import { createMuiTheme } from '@material-ui/core/styles'

const primary = '#05828e'
const secondary = '#9ba8b8'
const text = '#080b11'
const textHeader = '#162229'
const light = '#e7eaef'
const doubleLight = '#f3f4f7'

export default createMuiTheme({
  common: {
    borderRadius: 4,
  },
  palette: {
    primary: {
      main: primary,
      contrastText: '#fff',
    },
    secondary: {
      main: secondary,
      contrastText: '#fff',
    },
    text: {
      primary: text,
      disabled: '#a9a3a1',
      grey: '#88817F',
    },
    light: light,
    doubleLight: doubleLight,
    white: '#fff'
  },
  typography: {
    fontFamily: '"Merriweather", serif',
    h5: {
      fontSize: '16px',
      fontWeight: 600,
      color: textHeader,
    },
  }
})
