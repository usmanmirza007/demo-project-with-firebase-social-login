import {createStore, applyMiddleware} from 'redux';
import {persistStore} from 'redux-persist';
import createSagaMiddleware from '@redux-saga/core';
import persistedReducer from '.';
import root from './sagas';

const sagaMiddleware = createSagaMiddleware();

export const store = createStore(persistedReducer, applyMiddleware(sagaMiddleware));
sagaMiddleware.run(root)

export const persistor = persistStore(store);
