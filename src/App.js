import React from 'react'
import { Route, Switch } from 'react-router-dom'
import { connect } from 'react-redux'

import { Header, Sidebar, Footer } from './components'
import { NotFound } from './pages'
import PrivateRoute from './hocs/PrivateRoute'
import { routes } from './routes'

function App() {
	const routersSwitch = () => (
		<Switch>
			{routes.map(({ key, path, isExact, isPrivate, component }) =>
				isPrivate ? (
					<PrivateRoute
						key={key}
						exact={isExact}
						path={path}
						component={component}
					/>
				) : (
					<Route key={key} exact={isExact} path={path} component={component} />
				)
			)}
			<Route component={NotFound} />
		</Switch>
	)

	return (
		<div className={'App'}>
			<h1 className={'hidden'}>Комания ООО "Сибирский Лов"</h1>
			<Header />
			<div className={'container content-wrapper'}>
				<Sidebar />
				<main className={'main-content'}>{routersSwitch()}</main>
			</div>
			<Footer />
		</div>
	)
}

export default connect(null, null)(App)
