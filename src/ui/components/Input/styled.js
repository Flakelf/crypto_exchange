import styled from 'styled-components'

export const Wrapper = styled.div``

export const Control = styled.input`
  width: 100%;
  height: 100%;
  min-height: 46px;
  padding: 2px 0 4px 8px;
  border-radius: 6px;
  border: 1px solid ${p => p.theme.colors.darkGray};

  ::placeholder {
    ${p => p.theme.typography.h2}
  }

  ${p => p.isSmoothAngles && smoothAnglesInput}

  ${p => p.theme.typography.h2}
`

export const Label = styled.h1`
  font-size: 16px;
  font-weight: 500;
  color: ${p => p.theme.colors.darkGray};

  ${p => p.theme.typography.mainFont}
`
