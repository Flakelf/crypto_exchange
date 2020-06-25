import { createStore, combineReducers, compose, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'
import { all } from 'redux-saga/effects'
import { composeWithDevTools } from 'redux-devtools-extension'
import { middleware as thunkMiddleware } from 'redux-saga-thunk'

import { REDUCER_NAME as EXCHANGE } from './exchange/constants'
import { exchangeSaga } from './exchange/sagas'
import exchangeReducer from './exchange/reducer'

const sagaMiddleware = createSagaMiddleware()
const middlewareEnhancer = composeWithDevTools(applyMiddleware(thunkMiddleware, sagaMiddleware))

const reducers = {
  [EXCHANGE]: exchangeReducer,
}

const store = createStore(combineReducers(reducers), compose(middlewareEnhancer))

sagaMiddleware.run(function* () {
  yield all([exchangeSaga()])
})

export { store }
