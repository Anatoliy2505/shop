import React, { useEffect } from 'react'
import { connect } from 'react-redux'

import { saleSelector } from '../../../Sale/redux/selectors'
import { getSaleCategories } from '../../../Sale/redux/actions'
import { ProductSlider } from '../ProductSlider'

const SaleSlider = ({ saleCategories: { data }, getSaleCategories }) => {
	useEffect(() => {
		if (!data) getSaleCategories()
	}, [data, getSaleCategories])

	return (
		<>
			{data ? (
				<ProductSlider
					page={'sale'}
					title={'Клёвые скидки'}
					href={'/sale'}
					products={data}
				/>
			) : null}
		</>
	)
}

export default connect(
	state => ({
		saleCategories: saleSelector(state),
	}),
	{ getSaleCategories }
)(SaleSlider)
