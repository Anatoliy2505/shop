import React from 'react'
import { Route } from 'react-router-dom'

import { LoginForm, SignupForm } from './components'

import './Auth.scss'

const Auth = () => {
	return (
		<section className="auth">
			<div className="auth-page">
				<Route exact path={'/login'} component={LoginForm} />
				<Route exact path={'/registration'} component={SignupForm} />
			</div>
		</section>
	)
}

export default Auth
