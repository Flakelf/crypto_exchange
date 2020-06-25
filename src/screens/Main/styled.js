import styled from 'styled-components'

import { CoinInput as _CoinInput, Input as _Input, Button as _Button } from 'ui/components'

export const Wrapper = styled.div`
  width: 960px;
  height: 540px;
  display: flex;
  border: 1px solid #fff;
  padding: 14px 40px 6px 40px;
  background: ${p => p.theme.colors.white};
  display: flex;
  flex-direction: column;
`

export const Top = styled.div``

export const Title = styled.h1`
  color: ${p => p.theme.colors.brandColor};

  ${p => p.theme.typography.mainFont};
`

export const SubTitle = styled.h2`
  ${p => p.theme.typography.h2};
`

export const Inputs = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 0 0 40px 0;
`

export const Swap = styled.button`
  align-self: center;
  height: 26px;
  svg {
    width: 16px;
    height: 16px;
    fill: ${p => p.theme.colors.brandColor};
  }
`

export const CoinInput = styled(_CoinInput)`
  width: 380px;
  height: 60px;
`

export const Footer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const Wallet = styled(_Input)`
  width: 650px;
  height: 60px;
`

export const Submit = styled(_Button)`
  width: 200px;
  height: 60px;
  align-self: flex-end;
`
