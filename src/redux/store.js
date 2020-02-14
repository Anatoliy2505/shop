import { applyMiddleware, createStore, compose } from 'redux'
import thunk from 'redux-thunk'

import rootCombineReducer from './rootCombineReducer'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const middleware = [thunk]

export const store = createStore(
	rootCombineReducer,
	composeEnhancers(applyMiddleware(...middleware))
)
