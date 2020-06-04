import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router } from 'react-router-dom'
import { Provider } from 'react-redux'
import { store } from './redux/store'

import App from './App'

import './index.scss'

import * as serviceWorker from './serviceWorker'
// import ScrollToTop from './components/ScrollToTop'

ReactDOM.render(
	<Provider store={store}>
		<Router>
			{/* <ScrollToTop /> */}
			<App />
		</Router>
	</Provider>,
	document.getElementById('root')
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
