import React, { useEffect } from 'react'
import { connect } from 'react-redux'

import { saleSelector } from '../../../Sale/redux/selectors'
import { getSaleCategories } from '../../../Sale/redux/actions'
import { CategoriesSlider } from '../CategoriesSlider'

const SaleSlider = ({ saleCategories: { data }, getSaleCategories }) => {
	useEffect(() => {
		if (!data) getSaleCategories()
	}, [data, getSaleCategories])

	return (
		<>
			{data ? (
				<CategoriesSlider
					page={'sale'}
					title={'Клёвые скидки'}
					href={'/sale'}
					categories={data}
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
