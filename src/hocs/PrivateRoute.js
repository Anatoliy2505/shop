import React from 'react'
import { Route, Redirect, useLocation } from 'react-router-dom'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import { isAuthSelector, userSelector } from '../pages/Auth/redux/selectors'

const PrivateRoure = ({
	component: Component,
	owner,
	isAuth,
	user,
	...rest
}) => {
	const location = useLocation()

	return (
		<Route
			{...rest}
			render={props =>
				isAuth ? (
					owner === user.role ? (
						<Component {...props} user={user} />
					) : (
						<Redirect to={'/'} />
					)
				) : (
					<Redirect
						to={{
							pathname: '/login',
							state: { prevLocation: location.pathname },
						}}
					/>
				)
			}
		/>
	)
}

export default connect(state => ({
	isAuth: isAuthSelector(state),
	user: userSelector(state),
}))(PrivateRoure)

PrivateRoure.propTypes = {
	component: PropTypes.oneOfType([
		PropTypes.func.isRequired,
		PropTypes.object.isRequired,
	]),
	user: PropTypes.object,
	isAuth: PropTypes.bool.isRequired,
}
