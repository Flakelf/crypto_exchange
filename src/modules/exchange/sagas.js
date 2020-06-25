import { takeLatest, call, put, all } from 'redux-saga/effects'

import { API, token } from 'core/api'

import {
  getAllCurrenciesSuccess,
  getAllCurrenciesFailure,
  getMinimalExchangeAmountSuccess,
  getMinimalExchangeAmountFailure,
  getEstimatedExchangeAmountSuccess,
  getEstimatedExchangeAmountFailure,
} from './actions'
import {
  GET_ALL_CURRENCIES_START,
  GET_EXCHANGE_AMOUNT_START,
  GET_ESTIMATED_EXCHANGE_AMOUNT_START,
} from './constants'

function* getCurrencies(action) {
  try {
    const { data } = yield call(API.get, 'currencies?active=true&fixedRate=true')

    yield put(getAllCurrenciesSuccess(data, action.meta))
  } catch (e) {
    yield put(
      getAllCurrenciesFailure({
        error: true,
        meta: action.meta,
      }),
    )
  }
}

function* getMinimalExchange(action) {
  const { firstCoin, secondCoin } = action.payload

  try {
    const {
      data: { minAmount },
    } = yield call(API.get, `min-amount/${firstCoin}_${secondCoin}`)

    yield put(getMinimalExchangeAmountSuccess(minAmount, action.meta))
  } catch (e) {
    yield put(
      getMinimalExchangeAmountFailure({
        error: true,
        meta: action.meta,
        errorMessage: e.response.data.message,
      }),
    )
  }
}

function* getEstimatedExchangeAmount(action) {
  const { firstCoin, secondCoin, sendAmount } = action.payload

  try {
    const {
      data: { estimatedAmount },
    } = yield call(
      API.get,
      `exchange-amount/${sendAmount}/${firstCoin}_${secondCoin}?api_key=${token}`,
    )

    yield put(getEstimatedExchangeAmountSuccess(estimatedAmount, action.meta))
  } catch (e) {
    yield put(
      getEstimatedExchangeAmountFailure({
        error: true,
        meta: action.meta,
        errorMessage: e.response.data.message,
      }),
    )
  }
}

export function* exchangeSaga() {
  yield all([
    takeLatest(GET_ALL_CURRENCIES_START, getCurrencies),
    takeLatest(GET_EXCHANGE_AMOUNT_START, getMinimalExchange),
    takeLatest(GET_ESTIMATED_EXCHANGE_AMOUNT_START, getEstimatedExchangeAmount),
  ])
}
