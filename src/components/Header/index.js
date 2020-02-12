import React from 'react'
import { Link } from 'react-router-dom'

import { SearchForm, HeaderCart } from '../'
import './Header.scss'
import logo from './img/logo.png'

export const Header = () => {
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
					<Link
						to={'/login'}
						className={'header__login'}
						title={'Вход в кабинет'}
					>
						<i className={'fas fa-fw fa-sign-in-alt'} />
						<span className={'header__login-text'}>Вход</span>
					</Link>
					<HeaderCart />
				</div>
			</div>
		</header>
	)
}
