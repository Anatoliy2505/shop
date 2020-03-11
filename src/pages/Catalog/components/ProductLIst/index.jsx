import React from 'react'

import { ProductCard } from '../../../../components'

import './ProductList.scss'

const ProductList = ({ products, page }) => {
	const poductsList = products.map(product => (
		<ProductCard key={product.id} {...product} page={page} />
	))
	return <div className="product__list">{poductsList}</div>
}

export { ProductList }
