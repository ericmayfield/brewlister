import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import './index.css'
import App from './App'
import rootReducer from './reducers/index.js'
import * as serviceWorker from './serviceWorker'

const enhancers = [applyMiddleware(thunk)]
const composedEnhancers = composeWithDevTools(...enhancers)

const store = createStore(rootReducer, undefined, composedEnhancers)

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>
    , document.getElementById('root')
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
