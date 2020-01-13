import React from 'react'

import { SearchForm, HeaderCart } from '../'
import './Header.scss'
import logo from './img/logo.png'

export const Header = () => {
	return (
		<header className={'header'}>
			<div className={'container'}>
				<a href={'/'} className={'header__wrapper-logo'}>
					<img className={'header__logo'} src={logo} alt={'logo'} />
				</a>

				<div className={'header__wrapper-search'}>
					<SearchForm />
				</div>

				<div className={'header__wrapper-interaction'}>
					<a href={'/'} className={'header__login'}>
						<i className={'fas fa-fw fa-sign-in-alt'} />
						<span className={'header__login-text'}>Вход</span>
					</a>
					<HeaderCart />
				</div>
			</div>
		</header>
	)
}
