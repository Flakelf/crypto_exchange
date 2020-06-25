import React, { useState, useRef, useMemo } from 'react'
import PropTypes from 'prop-types'

import {
  Wrapper,
  Control,
  Button,
  Currency,
  Dropdown,
  DropdownItem,
  CoinIcon,
  CoinName,
  CoinFullName,
  Error,
} from './styled'

const CoinInput = ({
  className,
  type,
  onChange,
  value,
  name: inputName,
  onCoinChange,
  currencyType,
  iconsByType,
  coinsTickers,
  coinsNames,
  error,
  disabled,
  ...rest
}) => {
  const [isOpened, setIsOpened] = useState(false)
  const [search, setSearch] = useState('')

  const inputRef = useRef(false)

  const handleOpenDropdown = () => {
    setIsOpened(prevState => !prevState)
    setSearch('')

    if (inputRef.current) {
      inputRef.current.focus()
    }
  }

  const handleChangeCurrency = e => {
    onCoinChange(e)
    handleOpenDropdown()
  }

  const handleControlChange = e => (isOpened ? setSearch(e.target.value) : onChange(e))

  const dropdownItems = coinsTickers.filter(currency =>
    currency.toLowerCase().includes(search.toLowerCase()),
  )

  const controlValue = useMemo(() => {
    if (isOpened) return search

    if (error) return '-'

    return value
  }, [error, isOpened, search, value])

  return (
    <Wrapper className={className}>
      <Control
        isSmoothAngles={isOpened}
        type={isOpened || !!error ? 'string' : type}
        value={controlValue}
        onChange={handleControlChange}
        placeholder={isOpened ? 'Search' : null}
        name={inputName}
        ref={inputRef}
        disabled={disabled}
        {...rest}
      />
      <Button onClick={handleOpenDropdown} isSmoothAngles={isOpened}>
        <CoinIcon src={iconsByType[currencyType]} /> <Currency>{currencyType}</Currency>
      </Button>
      {isOpened && (
        <Dropdown>
          {dropdownItems.length > 0 ? (
            dropdownItems.map((dropdownItem, index) => (
              <DropdownItem
                data-inputname={inputName}
                name={dropdownItem}
                key={dropdownItem}
                onClick={handleChangeCurrency}
              >
                <CoinIcon src={iconsByType[dropdownItem]} />
                <CoinName>{dropdownItem}</CoinName>
                <CoinFullName>{coinsNames[index]}</CoinFullName>
              </DropdownItem>
            ))
          ) : (
            <DropdownItem>No items</DropdownItem>
          )}
        </Dropdown>
      )}
      {error && <Error>{error}</Error>}
    </Wrapper>
  )
}

CoinInput.propTypes = {
  className: PropTypes.string,
  type: PropTypes.string,
  name: PropTypes.string,
  currencyType: PropTypes.string,
  error: PropTypes.string,

  disabled: PropTypes.bool,

  onChange: PropTypes.func,
  onCoinChange: PropTypes.func,

  iconsByType: PropTypes.object,

  coinsTickers: PropTypes.array,
  coinsNames: PropTypes.array,

  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
}

export { CoinInput }
