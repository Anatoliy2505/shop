import React, { useEffect } from 'react'
import { Route, Switch } from 'react-router-dom'
import { connect } from 'react-redux'
import { sidebarSelector } from './redux/selectors'
import { getAllMainCategories } from './redux/actions'

import { Header, Sidebar, Footer } from './components'
import { Home, News, Catalog } from './pages'

function App({ categories, getAllMainCategories }) {
	useEffect(() => {
		if (!categories.data) {
			getAllMainCategories()
		}
	}, [categories.data, getAllMainCategories])

	return (
		<div className="App">
			<Header />
			<div className={'container content-wrapper'}>
				<Sidebar {...categories} />
				<main className={'main-content'}>
					<Switch>
						<Route exact path={['/', '/home']} component={Home} />
						<Route path={['/news/:news', '/news']} component={News} />
						<Route
							path={'/:mainCategory/:parentCategory'}
							component={Catalog}
						/>
						<Route path={'/:mainCategory'} component={Catalog} />
					</Switch>
				</main>
			</div>
			<Footer />
		</div>
	)
}

export default connect(
	state => ({
		categories: sidebarSelector(state),
	}),
	{ getAllMainCategories }
)(App)
