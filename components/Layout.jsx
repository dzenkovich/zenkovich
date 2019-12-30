import React from 'react'
import PropTypes from 'prop-types'
import { ThemeProvider } from '@material-ui/core'
import theme from '../constants/theme'
import Menu from './Menu'
import '../i18next'

const Layout = ({ children, noHero }) => (
  <ThemeProvider theme={theme}>
    <Menu dark={noHero}/>
    {children}
  </ThemeProvider>
)

Layout.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
  noHero: PropTypes.bool
}

Layout.defaultProps = {
  noHero: false
}

export default React.memo(Layout)
