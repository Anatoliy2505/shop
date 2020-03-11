import React from 'react'
import { Route, Switch } from 'react-router-dom'
import { connect } from 'react-redux'

import { Header, Sidebar, Footer } from './components'
import { Home, News, Catalog, ProductsDetail, Hits, Sale } from './pages'

function App() {
	return (
		<div className="App">
			<Header />
			<div className={'container content-wrapper'}>
				<Sidebar />
				<main className={'main-content'}>
					<Switch>
						<Route exact path={['/', '/home']} component={Home} />
						<Route path={['/news/:news', '/news']} component={News} />
						<Route
							path={[
								'/sale/:products',
								'/hits/:products',
								'/:mainCategory/:parentCategory/:products',
							]}
							component={ProductsDetail}
						/>
						<Route path={'/hits'} component={Hits} />
						<Route path={'/sale'} component={Sale} />
						<Route
							path={['/:mainCategory/:parentCategory', '/:mainCategory']}
							component={Catalog}
						/>
					</Switch>
				</main>
			</div>
			<Footer />
		</div>
	)
}

export default connect(null, null)(App)
