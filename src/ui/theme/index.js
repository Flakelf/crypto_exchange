import React from 'react'
import PropTypes from 'prop-types'

import { ThemeProvider } from 'styled-components'

import variables from './variables'

const theme = {
  ...variables,
}

const CustomThemeProvider = ({ children }) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
)

CustomThemeProvider.propTypes = {
  children: PropTypes.node.isRequired,
}

export { CustomThemeProvider }
export { GlobalStyles } from './globalStyles'
