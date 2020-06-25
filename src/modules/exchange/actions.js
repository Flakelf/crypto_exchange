import {
  GET_ALL_CURRENCIES_START,
  GET_ALL_CURRENCIES_SUCCESS,
  GET_ALL_CURRENCIES_FAILURE,
  GET_EXCHANGE_AMOUNT_START,
  GET_EXCHANGE_AMOUNT_SUCCESS,
  GET_EXCHANGE_AMOUNT_FAILURE,
  GET_ESTIMATED_EXCHANGE_AMOUNT_START,
  GET_ESTIMATED_EXCHANGE_AMOUNT_SUCCESS,
  GET_ESTIMATED_EXCHANGE_AMOUNT_FAILURE,
} from './constants'

// All currencies

export const getAllCurrencies = () => ({
  type: GET_ALL_CURRENCIES_START,
  meta: { thunk: true },
})

export const getAllCurrenciesSuccess = (payload, meta) => ({
  type: GET_ALL_CURRENCIES_SUCCESS,
  payload,
  meta,
})

export const getAllCurrenciesFailure = ({ error, meta }) => ({
  type: GET_ALL_CURRENCIES_FAILURE,
  error,
  meta,
})

// Minimal exchange amount

export const getMinimalExchangeAmount = ({ firstCoin, secondCoin }) => ({
  type: GET_EXCHANGE_AMOUNT_START,
  payload: {
    firstCoin,
    secondCoin,
  },
  meta: { thunk: true },
})

export const getMinimalExchangeAmountSuccess = (payload, meta) => ({
  type: GET_EXCHANGE_AMOUNT_SUCCESS,
  payload,
  meta,
})

export const getMinimalExchangeAmountFailure = ({ error, meta, errorMessage }) => ({
  type: GET_EXCHANGE_AMOUNT_FAILURE,
  error,
  payload: errorMessage,
  meta,
})

// Estimated exchange

export const getEstimatedExchangeAmount = ({ sendAmount, firstCoin, secondCoin }) => ({
  type: GET_ESTIMATED_EXCHANGE_AMOUNT_START,
  payload: {
    sendAmount,
    firstCoin,
    secondCoin,
  },
  meta: { thunk: true },
})

export const getEstimatedExchangeAmountSuccess = (payload, meta) => ({
  type: GET_ESTIMATED_EXCHANGE_AMOUNT_SUCCESS,
  payload,
  meta,
})

export const getEstimatedExchangeAmountFailure = ({ error, meta, errorMessage }) => ({
  type: GET_ESTIMATED_EXCHANGE_AMOUNT_FAILURE,
  error,
  meta,
  errorMessage,
})
