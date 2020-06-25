import React from 'react'
import PropTypes from 'prop-types'

import { Wrapper } from './styled'

const Layout = ({ children }) => <Wrapper>{children}</Wrapper>

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export { Layout }
