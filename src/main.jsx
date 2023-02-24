import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { reducers } from './reducers'
import { Provider } from 'react-redux'
import { applyMiddleware, compose, legacy_createStore as createStore } from 'redux';
import { logger } from './middlewears'
import thunk from 'redux-thunk'
import './index.css'

const composedEnhacers = compose(applyMiddleware(thunk, logger))

const store = createStore(reducers, composedEnhacers);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider> 
  </React.StrictMode>,
)
