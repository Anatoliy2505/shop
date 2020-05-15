import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import { isAuthSelector, userSelector } from '../pages/Auth/redux/selectors'

const PrivateRoure = ({ component: Component, isAuth, user, ...rest }) => {
	return (
		<Route
			{...rest}
			render={props =>
				isAuth ? (
					<Component {...props} user={user} />
				) : (
					<Redirect to={'/login'} />
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
	component: PropTypes.object.isRequired,
	user: PropTypes.object,
	isAuth: PropTypes.bool.isRequired,
}
