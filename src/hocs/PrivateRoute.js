import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
// import PropTypes from './node_modules/prop-types'

import { isAuthSelector } from '../pages/Login/redux/selectors'

const PrivateRoure = ({ component: Component, isAuth, ...rest }) => {
	return (
		<Route
			{...rest}
			render={props =>
				isAuth ? <Component {...props} /> : <Redirect to={'/login'} />
			}
		/>
	)
}

export default connect(
	state => ({
		isAuth: isAuthSelector,
	}),
	{}
)(PrivateRoure)

// PrivateRoure.propTypes = {
// 	component: PropTypes.object.isRequired,
// 	isAuth: PropTypes.bool.isRequired,
// }
