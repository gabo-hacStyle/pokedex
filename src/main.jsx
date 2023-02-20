import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { pokemonsReducer } from './reducers/pokemons'
import { Provider } from 'react-redux'
import { applyMiddleware, compose, legacy_createStore as createStore } from 'redux';
import { logger } from './middlewears'
import './index.css'

const composedEnhacers = compose(applyMiddleware(logger))

const store = createStore(pokemonsReducer, composedEnhacers);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider> 
  </React.StrictMode>,
)
