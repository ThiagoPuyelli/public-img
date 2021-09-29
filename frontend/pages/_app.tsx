import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { PersistGate } from 'redux-persist/integration/react'
import { Provider } from 'react-redux'
import storeConfig from '../redux/store'
import Header from '../components/Header'
import Footer from '../components/Footer'

function MyApp({ Component, pageProps }: AppProps) {
  const { store, persist } = storeConfig()
  
  return (
    <Provider store={store}>
      <PersistGate persistor={persist}>
        <Header />
        <Component {...pageProps} />
        <Footer />
      </PersistGate>
    </Provider>
  )
}
export default MyApp
