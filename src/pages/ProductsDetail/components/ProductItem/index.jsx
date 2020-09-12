import React from 'react'

export const ProductItem = ({
	productId,
	id,
	number,
	image,
	title,
	mainParameter,
	selectProduct,
}) => {
	return (
		<div
			className={id === productId ? 'products-item active' : 'products-item'}
			data-id={id}
			data-number={number}
			onClick={selectProduct}
		>
			<img
				className={'products-item__img'}
				src={process.env.PUBLIC_URL + image}
				alt={title}
			/>
			<span className={'products-item__name'}>{mainParameter}</span>
		</div>
	)
}
