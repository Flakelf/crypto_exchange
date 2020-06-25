import { REDUCER_NAME as NAME } from './constants'

export const selectAllCurrencies = state => state[NAME].currencies

export const selectAllCurrenciesNames = state =>
  state[NAME].currencies.map(currency => currency.name)

export const selectIconsByType = state => {
  const iconsByType = {}

  state[NAME].currencies.forEach(item => {
    iconsByType[item.ticker] = item.image
  })

  return iconsByType
}

export const selectAllCoinsNames = state => state[NAME].currencies.map(currency => currency.name)
export const selectAllCoinsTickers = state =>
  state[NAME].currencies.map(currency => currency.ticker)

export const selectCoinsNamesByTickers = state => {
  const coinsNamesByTicker = {}

  state[NAME].currencies.forEach(currency => {
    coinsNamesByTicker[currency.ticker] = currency.name
  })

  return coinsNamesByTicker
}

export const selectMinimalExchange = state => state[NAME].currentMinimalExchange

export const selectEstimatedAmount = state => state[NAME].estimatedAmount

export const selectErrorMessage = state => state[NAME].errorMessage
