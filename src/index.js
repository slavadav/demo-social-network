import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import MainApp from './App'
import * as serviceWorker from './serviceWorker'

ReactDOM.render(<MainApp />, document.getElementById('root'))

//renderEntirePage(store.getState())

//store.subscribe(() => renderEntirePage(store.getState()))

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
