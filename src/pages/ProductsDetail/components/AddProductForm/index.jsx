import React, { useState, useEffect } from 'react'
import { useSetToast } from '../../../../hooks'

export const AddProductForm = ({
	title,
	id,
	price,
	addProduct,
	productId,
	properties,
	isset,
}) => {
	const [productCount, setProductCount] = useState(1)
	const { setToast } = useSetToast()

	useEffect(() => {
		if (productId !== id) {
			setProductCount(1)
		}
	}, [productId, id])

	const addProductToCart = e => {
		e.preventDefault()
		addProduct(
			{ _id: id, price, count: Number(productCount), properties },
			setToast
		)
		setProductCount(1)
	}

	return (
		<form className={'products-actions'} onSubmit={addProductToCart}>
			<h3 className="products-title">{title}</h3>
			{isset ? (
				<>
					<div className="products-actions__container">
						<input
							type={'number'}
							className={'products-actions__count'}
							min={'1'}
							onChange={e => setProductCount(e.currentTarget.value)}
							value={productCount}
						/>
						<button type={'submit'} className={'products-actions__add'}>
							Добавить в корзину
						</button>
					</div>
					<span className="products-actions__summ">
						Сумма: {productCount * price} руб
					</span>
				</>
			) : (
				<div className={'product-empty'}>Товар временно отсутствет</div>
			)}
		</form>
	)
}
