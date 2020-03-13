import React, { useEffect } from 'react'
import { connect } from 'react-redux'

import { hitsSelector } from './redux/selectors'
import { getHitsCategories } from './redux/actions'
import { CategoriesLIst } from '../Catalog/components/CategoriesLIst'
import { getViewElementsSelector } from '../Catalog/redux/selectors'

const Hits = ({
	hitsCategories: { data, errorMsg, isLoading },
	viewElements,
	getHitsCategories,
}) => {
	useEffect(() => {
		if (!data) getHitsCategories()
	}, [data, getHitsCategories])

	return (
		<section className={'hits page'}>
			{isLoading ? (
				<h1 className={'page-title'}>Loading...</h1>
			) : errorMsg ? (
				<h1 className={'page-title'}>{errorMsg}</h1>
			) : data ? (
				<>
					<h1 className={'page-title'}>Хиты продаж</h1>
					<CategoriesLIst
						mainCategory={'hits'}
						categories={data}
						page={'hits'}
						viewElements={viewElements}
					/>
				</>
			) : null}
		</section>
	)
}

export default connect(
	state => ({
		hitsCategories: hitsSelector(state),
		viewElements: getViewElementsSelector(state),
	}),
	{
		getHitsCategories,
	}
)(Hits)
