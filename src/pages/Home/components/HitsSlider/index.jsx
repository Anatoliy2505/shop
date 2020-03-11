import React, { useEffect } from 'react'
import { connect } from 'react-redux'

import { hitsSelector } from '../../../Hits/redux/selectors'
import { getHitsCategories } from '../../../Hits/redux/actions'
import { ProductSlider } from '../ProductSlider'

const HitsSlider = ({ hitsCategories, getHitsCategories }) => {
	useEffect(() => {
		if (!hitsCategories.data) getHitsCategories()
	}, [hitsCategories.data, getHitsCategories])

	return (
		<>
			{hitsCategories.data ? (
				<ProductSlider
					page={'hits'}
					title={'Хиты продаж'}
					href={'/hits'}
					products={hitsCategories.data}
				/>
			) : null}
		</>
	)
}

export default connect(
	state => ({
		hitsCategories: hitsSelector(state),
	}),
	{ getHitsCategories }
)(HitsSlider)
