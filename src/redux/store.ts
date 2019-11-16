import { createStore, combineReducers, applyMiddleware, Store } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { composeWithDevTools } from 'redux-devtools-extension';
import { dogReducer } from './dogReducer'

export const rootReducer = combineReducers({
  dogReducer
})

export type AppState = ReturnType<typeof rootReducer>

export const sagaMiddleware = createSagaMiddleware()
export const store: Store<AppState> = createStore(rootReducer, composeWithDevTools(applyMiddleware(sagaMiddleware)))