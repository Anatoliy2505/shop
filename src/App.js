import React, { useEffect } from 'react'
import { Route, Switch } from 'react-router-dom'
import { connect } from 'react-redux'
import { categoriesGetAll } from './redux/selectors'
import { getCategories } from './redux/actions'

import { Header, Sidebar, Footer } from './components'
import { Home, News } from './pages'

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
					<Switch>
						<Route exact path={['/', '/home']} component={Home} />
						<Route path={['/news/:news', '/news']} component={News} />
					</Switch>
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
