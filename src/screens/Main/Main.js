import React, { useState, useCallback, useMemo, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import {
  getAllCurrencies,
  getMinimalExchangeAmount,
  getEstimatedExchangeAmount,
} from 'modules/exchange/actions'
import {
  selectIconsByType,
  selectAllCoinsTickers,
  selectAllCoinsNames,
  selectCoinsNamesByTickers,
  selectMinimalExchange,
  selectEstimatedAmount,
  selectErrorMessage,
} from 'modules/exchange/selectors'

import { Exchange as ExchangeIcon } from 'ui/icons'

import {
  Wrapper,
  Title,
  SubTitle,
  Top,
  Inputs,
  CoinInput,
  Swap,
  Footer,
  Wallet,
  Submit,
} from './styled'

const Main = () => {
  const dispatch = useDispatch()

  const iconsByType = useSelector(selectIconsByType)
  const coinsTickers = useSelector(selectAllCoinsTickers)
  const coinsNames = useSelector(selectAllCoinsNames)
  const coinsNamesByTickers = useSelector(selectCoinsNamesByTickers)
  const minimalExchange = useSelector(selectMinimalExchange)
  const exchangeAmount = useSelector(selectEstimatedAmount)
  const errorMessage = useSelector(selectErrorMessage)

  const [wallet, setWallet] = useState('')
  const [state, setState] = useState({
    firstInput: {
      value: '',
      coin: 'btc',
    },
    secondInput: {
      value: '',
      coin: 'eth',
    },
  })

  const handleChangeCurrency = useCallback(
    ({ target: { value, name } }) =>
      setState(prevState => ({
        ...prevState,
        [name]: {
          ...prevState[name],
          value,
        },
      })),
    [],
  )

  const handeChangeCoin = useCallback(
    ({ currentTarget }) =>
      setState(prevState => ({
        ...prevState,
        [currentTarget.dataset.inputname]: {
          ...prevState[currentTarget.dataset.inputname],
          coin: currentTarget.name,
        },
      })),
    [],
  )

  const onSwap = useCallback(
    () =>
      setState({
        firstInput: { ...state.secondInput },
        secondInput: { ...state.firstInput },
      }),
    [state.firstInput, state.secondInput],
  )

  const walletLabel = useMemo(() => `Your ${coinsNamesByTickers[state.secondInput.coin]} address`, [
    coinsNamesByTickers,
    state.secondInput.coin,
  ])

  useEffect(() => {
    const request = async () => {
      await dispatch(getAllCurrencies())
    }

    request()
  }, [dispatch])

  useEffect(() => {
    const request = async () => {
      await dispatch(
        getMinimalExchangeAmount({
          firstCoin: state.firstInput.coin,
          secondCoin: state.secondInput.coin,
        }),
      )
    }

    request()
  }, [dispatch, state.firstInput.coin, state.firstInput.value, state.secondInput.coin])

  useEffect(() => {
    const request = async () => {
      await dispatch(
        getEstimatedExchangeAmount({
          firstCoin: state.firstInput.coin,
          secondCoin: state.secondInput.coin,
          sendAmount: state.firstInput.value,
        }),
      )
    }

    request()
  }, [dispatch, state.firstInput.coin, state.firstInput.value, state.secondInput.coin])

  useEffect(() => {
    setState(prevState => ({
      ...prevState,
      firstInput: {
        ...prevState.firstInput,
        value: minimalExchange,
      },
    }))
  }, [minimalExchange])

  useEffect(() => {
    setState(prevState => ({
      ...prevState,
      secondInput: {
        ...prevState.secondInput,
        value: exchangeAmount,
      },
    }))
  }, [exchangeAmount])

  return (
    <Wrapper>
      <Top>
        <Title>Crypto Exchange</Title>
        <SubTitle>Exchange fast and easy</SubTitle>
      </Top>

      <Inputs>
        <CoinInput
          type='number'
          name='firstInput'
          value={state.firstInput.value}
          onChange={handleChangeCurrency}
          onCoinChange={handeChangeCoin}
          currencyType={state.firstInput.coin}
          iconsByType={iconsByType}
          coinsTickers={coinsTickers}
          coinsNames={coinsNames}
        />
        <Swap onClick={onSwap}>
          <ExchangeIcon />
        </Swap>
        <CoinInput
          type='number'
          name='secondInput'
          value={state.secondInput.value}
          onChange={handleChangeCurrency}
          onCoinChange={handeChangeCoin}
          currencyType={state.secondInput.coin}
          iconsByType={iconsByType}
          coinsTickers={coinsTickers}
          coinsNames={coinsNames}
          error={errorMessage}
          disabled
        />
      </Inputs>
      <Footer>
        <Wallet value={wallet} onChange={e => setWallet(e.target.value)} label={walletLabel} />
        <Submit type='submit' onClick={() => console.log('Submitted')}>
          Exchange
        </Submit>
      </Footer>
    </Wrapper>
  )
}

export { Main }
