import styled, { css } from 'styled-components'

const smoothAnglesInput = css`
  border-radius: 6px 0 0 0;
`

const smoothAnglesButton = css`
  border-radius: 0 6px 0 0;
`

const activeButton = css`
  background: ${p => p.theme.colors.background};
`

export const Wrapper = styled.div`
  display: flex;
  position: relative;
  width: 100%:
`

export const Control = styled.input`
  width: 100%;
  height: 100%;
  min-height: 46px;
  padding: 2px 0 4px 8px;
  border-radius: 6px 0 0 6px;
  border: 1px solid ${p => p.theme.colors.darkGray};
  border-right: none;

  ::placeholder {
    ${p => p.theme.typography.h2}
  }

  ${p => p.isSmoothAngles && smoothAnglesInput}

  ${p => p.theme.typography.h2}
`

export const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 16px 0 8px;
  border-radius: 0 6px 6px 0;
  border: 1px solid ${p => p.theme.colors.darkGray};
  border-left: none;
  background: ${p => p.theme.colors.white};
  cursor: pointer;
  width: 186px;

  :hover {
    background: ${p => p.theme.colors.background};
  }

  svg {
    margin: 0 4px 4px 0;
    width: 26px;
    height: 26px;

    path {
      fill: ${p => p.theme.colors.brandColor};
    }
  }


  ${p => p.isSmoothAngles && smoothAnglesButton}
  ${p => p.isSmoothAngles && activeButton}
  ${p => p.theme.typography.h2}
`

export const Currency = styled.p`
  margin: 0;
  text-transform: uppercase;
  ${p => p.theme.typography.h2}
`

export const Dropdown = styled.div`
  position: absolute;
  width: 100%;
  max-height: 300px;
  z-index: 20;
  top: 58px;
  border-radius: 0 0 3px 3px;
  border: 1px solid ${p => p.theme.colors.darkGray};

  overflow-y: auto;
`

export const DropdownItem = styled.button`
  display: flex;
  align-items: center;
  width: 100%;
  padding: 6px 0 6px 18px;
  background: ${p => p.theme.colors.white};

  :hover {
    ${activeButton}
  }

  ${p => p.theme.typography.h2}
`

export const CoinIcon = styled.img`
  width: 20px;
  height: 20px;
  margin: 0 20px 0 0;
`

export const CoinName = styled.h1`
  text-transform: uppercase;
  margin: 0;

  ${p => p.theme.typography.h2};
`

export const CoinFullName = styled.h1`
  margin: 0 0 0 20px;
  font-weight: 100;

  color: ${p => p.theme.colors.lightGray};

  ${p => p.theme.typography.h2};

  font-size: 14px;
`

export const Error = styled.h2`
  color: red;
  position: absolute;
  top: 54px;
  left: 2px;
  z-index: 10;
  font-size: 12px;

  ${p => p.theme.typography.mainFont}
`
