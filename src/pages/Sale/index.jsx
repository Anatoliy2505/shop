import React, { useEffect } from 'react'
import { connect } from 'react-redux'

import { saleSelector } from './redux/selectors'
import { getSaleCategories } from './redux/actions'
import { ProductList } from '../Catalog/components/ProductLIst'

const Sale = ({
	saleCategories: { data, errorMsg, isLoading },
	getSaleCategories,
}) => {
	useEffect(() => {
		if (!data) getSaleCategories()
	}, [data, getSaleCategories])

	return (
		<section className={'sale page'}>
			{isLoading ? (
				<h1 className={'page-title'}>Loading...</h1>
			) : errorMsg ? (
				<h1 className={'page-title'}>{errorMsg}</h1>
			) : data ? (
				<>
					<h1 className={'page-title'}>Товары с клёвыми скидками</h1>
					<ProductList products={data} page={'sale'} />
				</>
			) : null}
		</section>
	)
}

export default connect(state => ({ saleCategories: saleSelector(state) }), {
	getSaleCategories,
})(Sale)
