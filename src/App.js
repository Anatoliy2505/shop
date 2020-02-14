import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { categoriesGetAll } from './redux/selectors'
import { getCategories } from './redux/actions'

import { Header, Sidebar, Footer } from './components'
import { Home } from './pages'

function App({ categories, getCategories }) {
	useEffect(() => {
		if (!categories.data) {
			getCategories()
		}
	}, [categories.data, getCategories])

	return (
		<div className="App">
			<Header />
			<div className={'container content-wrapper'}>
				<Sidebar {...categories} />
				<main className={'main-content'}>
					<Home />
				</main>
			</div>
			<Footer />
		</div>
	)
}

export default connect(
	state => ({
		categories: categoriesGetAll(state),
	}),
	{ getCategories }
)(App)
