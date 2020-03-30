import React from 'react'

export const AddProductForm = ({
	title,
	productCount,
	productPrice,
	changeProductCount,
}) => {
	return (
		<form className={'products-actions'}>
			<h3 className="products-title">{title}</h3>
			<div className="products-actions__container">
				<input
					type={'number'}
					className={'products-actions__count'}
					min={'1'}
					onChange={changeProductCount}
					value={productCount}
				/>
				<button type={'submit'} className={'products-actions__add'}>
					Добавить в корзину
				</button>
			</div>
			<span className="products-actions__summ">
				Сумма: {productCount * productPrice} руб
			</span>
		</form>
	)
}
