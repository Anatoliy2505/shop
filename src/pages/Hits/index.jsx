import React, { useEffect } from 'react'
import { connect } from 'react-redux'

import { hitsSelector } from './redux/selectors'
import { getHitsCategories } from './redux/actions'
import { CategoriesLIst } from '../Catalog/components/CategoriesLIst'
import { getViewElementsSelector } from '../Catalog/redux/selectors'
import { BreadCrumbs, Preloader, Error, Empty } from '../../components'

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
			<BreadCrumbs lastElementName={'Хиты продаж'} />
			<h1 className={'page-title'}>Хиты продаж</h1>
			{isLoading ? (
				<Preloader title={'Загрузка...'} />
			) : errorMsg ? (
				<Error title={errorMsg} />
			) : data ? (
				<CategoriesLIst
					mainCategory={'hits'}
					categories={data}
					page={'hits'}
					viewElements={viewElements}
				/>
			) : (
				<Empty title={'Хиты продаж не найдены...'} />
			)}
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
