import React from 'react'

import { Header, Sidebar } from './components'

function App() {
	return (
		<div className="App">
			<Header />
			<div className={'container content-wrapper'}>
				<Sidebar />
				<main className={'main-content'}>
					<h1 className={'title'}>Основной контент</h1>
				</main>
			</div>
		</div>
	)
}

export default App
