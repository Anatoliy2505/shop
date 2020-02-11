import React from 'react'

import { Header, Sidebar, Footer } from './components'
import { Home } from './pages'

function App() {
	return (
		<div className="App">
			<Header />
			<div className={'container content-wrapper'}>
				<Sidebar />
				<main className={'main-content'}>
					<Home />
				</main>
			</div>
			<Footer />
		</div>
	)
}

export default App
