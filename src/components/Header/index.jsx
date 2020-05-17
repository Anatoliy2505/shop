import React, { useContext } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

import { Context } from '../../context'
import { isAuthSelector } from '../../pages/Auth/redux/selectors'
import { logoutAction } from '../../pages/Auth/redux/actions'

import { SearchForm, HeaderCart } from '..'
import './Header.scss'
import logo from './img/logo.png'

const Header = ({ isAuth, logoutAction }) => {
	const { setToast } = useContext(Context)
	const loginOrLogout = () => {
		return !isAuth ? (
			<Link to={'/login'} className={'header__login'} title={'Вход в кабинет'}>
				<i className={'fas fa-fw fa-sign-in-alt'} />
				<span className={'header__login-text'}>Вход</span>
			</Link>
		) : (
			<span
				className={'header__logout'}
				title={'Выход из кабинета'}
				onClick={logoutAction.bind(null, setToast)}
			>
				<i className={'fas fa-sign-out-alt'} />
				<span className={'header__login-text'}>Выход</span>
			</span>
		)
	}
	return (
		<header className={'header'}>
			<div className={'container'}>
				<Link to={'/'} className={'header__wrapper-logo'} title={'На главную'}>
					<img className={'header__logo'} src={logo} alt={'logo'} />
				</Link>

				<div className={'header__wrapper-search'}>
					<SearchForm />
				</div>

				<div className={'header__wrapper-interaction'}>
					{loginOrLogout()}
					<HeaderCart />
				</div>
			</div>
		</header>
	)
}

export default connect(
	state => ({
		isAuth: isAuthSelector(state),
	}),
	{ logoutAction }
)(Header)

Header.propTypes = {
	isAuth: PropTypes.bool.isRequired,
	logoutAction: PropTypes.func.isRequired,
}
