import React from 'react'
import { Route, Switch } from 'react-router-dom'
import { connect } from 'react-redux'
import { Header, Sidebar, Footer, ContextToast, UserPanel } from './components'
import { NotFound } from './pages'
import PrivateRoute from './hocs/PrivateRoute'
import { routes } from './routes'
import { isAuthSelector } from './pages/Auth/redux/selectors'

const App = ({ isAuth }) => {
	const routersSwitch = () => (
		<Switch>
			{routes.map(({ key, path, isExact, isPrivate, component, owner }) =>
				isPrivate ? (
					<PrivateRoute
						key={key}
						exact={isExact}
						path={path}
						component={component}
						owner={owner}
					/>
				) : (
					<Route key={key} exact={isExact} path={path} component={component} />
				)
			)}
			<Route component={NotFound} />
		</Switch>
	)

	return (
		<ContextToast>
			<div className={'App'}>
				<h1 className={'hidden'}>Комания ООО "Сибирский Лов"</h1>
				{isAuth && <UserPanel />}
				<Header />
				<div className={'container content-wrapper'}>
					<Sidebar />
					<main className={'main-content'}>{routersSwitch()}</main>
				</div>
				<Footer />
			</div>
		</ContextToast>
	)
}

export default connect(
	state => ({
		isAuth: isAuthSelector(state),
	}),
	null
)(App)
