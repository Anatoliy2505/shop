import React, { useEffect } from 'react'
import { connect } from 'react-redux'

import { saleSelector } from './redux/selectors'
import { getSaleCategories } from './redux/actions'
import { CategoriesLIst } from '../Catalog/components/CategoriesLIst'
import { getViewElementsSelector } from '../Catalog/redux/selectors'
import { BreadCrumbs, Preloader, Empty, Error } from '../../components'

const Sale = ({
	saleCategories: { data, errorMsg, isLoading },
	viewElements,
	getSaleCategories,
}) => {
	useEffect(() => {
		if (!data) getSaleCategories()
	}, [data, getSaleCategories])

	return (
		<section className={'sale page'}>
			<BreadCrumbs lastElementName={'Товары со скидками'} />
			<h1 className={'page-title'}>Товары с клёвыми скидками</h1>
			{isLoading ? (
				<Preloader title={'Загрузка...'} />
			) : errorMsg ? (
				<Error title={errorMsg} />
			) : data ? (
				<CategoriesLIst
					mainCategory={'sale'}
					categories={data}
					page={'sale'}
					viewElements={viewElements}
				/>
			) : (
				<Empty title={'Товары со скидками не найдены'} />
			)}
		</section>
	)
}

export default connect(
	state => ({
		saleCategories: saleSelector(state),
		viewElements: getViewElementsSelector(state),
	}),
	{
		getSaleCategories,
	}
)(Sale)
