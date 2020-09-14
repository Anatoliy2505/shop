import React, { useEffect } from 'react'
import { connect } from 'react-redux'

import { saleSelector } from '../../../Sale/redux/selectors'
import { getSaleCollections } from '../../../Sale/redux/actions'
import { CategoriesSlider } from '../../../../components'

const SaleSlider = ({ saleCategories: { data }, getSaleCollections }) => {
	useEffect(() => {
		if (!data) getSaleCollections()
	}, [data, getSaleCollections])

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
	{ getSaleCollections }
)(SaleSlider)
