import React from 'react';

import './HeaderCart.scss';

const HeaderCart = () => {
	const empty = false;
	return (
		<a href={'/'} className={'cart'}>
			<i className={'fas fa-shopping-cart fa-lg'} />
			{empty ? (
				<span className={'cart__text'}>Корзина</span>
			) : (
				<div className="cart__wrapper">
					<span className={'cart__count'}>10 шт.</span>
					<span className={'cart__summ'}>10000 руб.</span>
				</div>
			)}
		</a>
	);
};

export { HeaderCart };
