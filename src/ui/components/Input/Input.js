import React from 'react'
import PropTypes from 'prop-types'

import { Wrapper, Control, Label } from './styled'

const Input = ({ className, label, ...rest }) => (
  <Wrapper>
    <Label>{label}</Label>
    <Control className={className} {...rest} />
  </Wrapper>
)

Input.propTypes = {
  className: PropTypes.string,
  label: PropTypes.string,
}

export { Input }
