import React from 'react'
import { connect } from 'react-redux'
import { getCartSelector } from '../../pages/Cart/redux/selectors'

import './HeaderCart.scss'
import { NavLink } from 'react-router-dom'

const HeaderCart = ({ cartData: { totalCount, totalPrice } }) => {
	let empty = false
	if (!totalCount) empty = true

	return (
		<NavLink to={'/cart'} className={'cart'}>
			<i className={'fas fa-shopping-cart fa-lg'} />
			{empty ? (
				<span className={'cart__text'}>Корзина</span>
			) : (
				<div className="cart__wrapper">
					<span className={'cart__count'}>{totalCount} шт.</span>
					<span className={'cart__summ'}>{totalPrice} руб.</span>
				</div>
			)}
		</NavLink>
	)
}

export default connect(
	state => ({
		cartData: getCartSelector(state),
	}),
	{}
)(HeaderCart)
