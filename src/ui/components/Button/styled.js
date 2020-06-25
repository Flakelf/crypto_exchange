import styled from 'styled-components'

export const Wrapper = styled.div``

export const Control = styled.button`
  width: 100%;
  height: 100%;
  background: ${p => p.theme.colors.brandColor};
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
  border-radius: 4px;

  ${p => p.theme.typography.h2}
`
