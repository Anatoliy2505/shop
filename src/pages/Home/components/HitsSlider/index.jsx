import React, { useEffect } from 'react'
import { connect } from 'react-redux'

import { hitsSelector } from '../../../Hits/redux/selectors'
import { getHitsCategories } from '../../../Hits/redux/actions'
import { CategoriesSlider } from '../CategoriesSlider'

const HitsSlider = ({ hitsCategories, getHitsCategories }) => {
	useEffect(() => {
		if (!hitsCategories.data) getHitsCategories()
	}, [hitsCategories.data, getHitsCategories])

	return (
		<>
			{hitsCategories.data ? (
				<CategoriesSlider
					page={'hits'}
					title={'Хиты продаж'}
					href={'/hits'}
					categories={hitsCategories.data}
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
