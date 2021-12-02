import {combineReducers} from 'redux';
import { persistReducer } from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';

import Mreducer from './productDetails/reducer';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  blacklist: ["isLoading","movies"]
}

const Reducers = combineReducers({
  movies: Mreducer
});

const persistedReducer = persistReducer(persistConfig,Reducers)

export default persistedReducer;
