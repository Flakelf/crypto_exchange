import React from 'react'
import PropTypes from 'prop-types'

import { Wrapper, Control } from './styled'

const Button = ({ className, children, ...rest }) => (
  <Wrapper className={className}>
    <Control {...rest}>{children}</Control>
  </Wrapper>
)

Button.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
}

export { Button }
