import React, { useEffect } from 'react'
import { connect } from 'react-redux'

import { hitsSelector } from '../../../Hits/redux/selectors'
import { getHitsCollections } from '../../../Hits/redux/actions'
import { CategoriesSlider } from '../../../../components'

const HitsSlider = ({ hitsCategories: { data }, getHitsCollections }) => {
	useEffect(() => {
		if (!data) getHitsCollections()
	}, [data, getHitsCollections])

	return (
		<>
			{data ? (
				<CategoriesSlider
					page={'hits'}
					title={'Хиты продаж'}
					href={'/hits'}
					categories={data}
				/>
			) : null}
		</>
	)
}

export default connect(
	state => ({
		hitsCategories: hitsSelector(state),
	}),
	{ getHitsCollections }
)(HitsSlider)
