import React from 'react'
import { connect } from 'react-redux'

import { AdminActions } from '../../components'
import { UpdateProduct, DeleteProduct, CreateProduct } from './components'

import { sidebarSelector } from '../../../../redux/selectors'
import { getProductsSelector } from './redux/selectors'
import {
	deleteProduct,
	changeProduct,
	setNewProduct,
	getProducts,
	resetProducts,
} from './redux/actions'

import './Products.scss'

const Products = ({
	groups: { data, rawData },
	setNewProduct,
	changeProduct,
	deleteProduct,
	getProducts,
	productsState,
	resetProducts,
}) => {
	return (
		<>
			<h1 className={'page-title'}>Товары</h1>
			<AdminActions
				create={{
					component: CreateProduct,
					rawData,
					setNewProduct,
				}}
				update={{
					component: UpdateProduct,
					rawData,
					groups: data,
					changeProduct,
					getProducts,
					productsState,
					resetProducts,
				}}
				delete={{
					component: DeleteProduct,
					rawData,
					deleteProduct,
					getProducts,
					productsState,
					resetProducts,
				}}
			/>
		</>
	)
}

export default connect(
	state => ({
		groups: sidebarSelector(state),
		productsState: getProductsSelector(state),
	}),
	{ setNewProduct, getProducts, resetProducts, deleteProduct, changeProduct }
)(Products)
