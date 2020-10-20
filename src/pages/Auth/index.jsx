import React, { useEffect } from 'react'
import { Route, useLocation } from 'react-router-dom'
import { withRouter } from 'react-router'
import { connect } from 'react-redux'
import { isAuthSelector, userSelector } from './redux/selectors'

import { LoginForm, SignupForm } from './components'

import './Auth.scss'

const Auth = ({ isAuth, user: { role }, history }) => {
	const location = useLocation()

	useEffect(() => {
		if (isAuth) {
			if (location && location.state && location.state.prevLocation) {
				history.push(location.state.prevLocation)
			} else {
				role === 'admin' ? history.push('/admin') : history.push('/user')
			}
		}
	}, [isAuth, role, history, location])

	return (
		<section className="auth">
			<div className="auth-page">
				<Route exact path={'/login'} component={LoginForm} />
				<Route exact path={'/registration'} component={SignupForm} />
			</div>
		</section>
	)
}

export default withRouter(
	connect(
		state => ({
			isAuth: isAuthSelector(state),
			user: userSelector(state),
		}),
		{}
	)(Auth)
)
