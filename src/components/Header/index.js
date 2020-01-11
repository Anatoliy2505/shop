import React from 'react'

import './Header.scss'
import logo from './img/logo.png'

export const Header = () => {
	return (
		<header className={'header'}>
			<div className={'container'}>
				<div className={'header__logo-wrapper'}>
					<img className={'header__logo'} src={logo} alt={'logo'} />
				</div>

				<div className={'header__search'}>
					<input className={'header__serch'} />
				</div>

				<div className={'header__login-wrapper'}>
					<a href={'/'} className={'header__login'}>
						Вход
					</a>
				</div>

				<div className={'header__cart-wrapper'}>
					<a href={'/'} className={'header__cart'}>
						Корзина
					</a>
				</div>
			</div>
		</header>
	)
}
