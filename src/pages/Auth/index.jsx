import React, { useEffect } from 'react'
import { Route } from 'react-router-dom'
import { withRouter } from 'react-router'
import { connect } from 'react-redux'
import { isAuthSelector, userSelector } from './redux/selectors'

import { LoginForm, SignupForm } from './components'

import './Auth.scss'

const Auth = ({ isAuth, user: { role }, history }) => {
	console.log(history)
	useEffect(() => {
		if (isAuth) {
			role === 'admin' ? history.push('/admin') : history.push('/user')
		}
	}, [isAuth, role, history])

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
