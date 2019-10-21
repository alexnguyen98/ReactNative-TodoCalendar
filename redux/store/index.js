import { createStore, applyMiddleware } from 'redux'
import { persistStore, persistReducer } from 'redux-persist'
// remake t0 https://github.com/Cretezy/redux-persist-expo-securestore
import { AsyncStorage } from 'react-native'
import rootReducer from '../reducers'
import { createLogger } from 'redux-logger'

const logger = createLogger()
const persistedReducer = persistReducer({
  key: "root",
  storage: AsyncStorage
}, rootReducer)

export default () => {
  const store = createStore(persistedReducer, applyMiddleware(logger))
  const persistor = persistStore(store)
  return { store,persistor }
}