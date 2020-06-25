import {
  GET_ALL_CURRENCIES_SUCCESS,
  GET_EXCHANGE_AMOUNT_SUCCESS,
  GET_ESTIMATED_EXCHANGE_AMOUNT_SUCCESS,
  GET_EXCHANGE_AMOUNT_FAILURE,
} from './constants'

const initialState = {
  currencies: [],
  currentMinimalExchange: 0,
  estimatedAmount: 0,
  errorMessage: '',
}

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_CURRENCIES_SUCCESS:
      return { ...state, currencies: action.payload }

    case GET_EXCHANGE_AMOUNT_SUCCESS:
      return { ...state, currentMinimalExchange: action.payload, errorMessage: '' }

    case GET_ESTIMATED_EXCHANGE_AMOUNT_SUCCESS:
      return { ...state, estimatedAmount: action.payload }

    case GET_EXCHANGE_AMOUNT_FAILURE:
      return { ...state, errorMessage: action.payload }

    default:
      return { ...state }
  }
}
