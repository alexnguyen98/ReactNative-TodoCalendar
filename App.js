import React from 'react';
import { SafeAreaView } from 'react-native';
import Navigation from './navigation';
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import configureStore from './redux/store'
import StatusBar from './components/StatusBar'
const { store, persistor } = configureStore()
 
export default function App() {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor} >
        <StatusBar/>
        <SafeAreaView style={{
          flex: 1,
          backgroundColor: '#1c2027',
        }}>
          <Navigation/>
        </SafeAreaView>
      </PersistGate>
    </Provider>
  )
}
