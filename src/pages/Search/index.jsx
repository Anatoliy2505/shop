import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { BreadCrumbs } from '../../components'

import './Search.scss'
import { searchSelector } from './redux/selectors'
import { getSearchCategories } from './redux/actions'
import { CategoriesLIst } from '../Catalog/components/CategoriesLIst'
import { getViewElementsSelector } from '../Catalog/redux/selectors'

const Search = ({
	searchCategories: { data, isLoading, errorMsg },
	getSearchCategories,
	location: { query },
	viewElements,
}) => {
	useEffect(() => {
		if (query) {
			getSearchCategories(query)
		}
	}, [query, getSearchCategories])

	console.log(data)
	return (
		<div className={'search-page'}>
			<BreadCrumbs lastElementName={'Поисковая страница'} />
			<h1 className={'page-title'}>Поисковая страница</h1>
			<div>
				{query ? (
					<>
						<h2>По вашему запросу: {query}</h2>
						{isLoading ? (
							<h3>Loading...</h3>
						) : errorMsg ? (
							<h3>errorMsg</h3>
						) : data && data.length ? (
							<CategoriesLIst categories={data} viewElements={viewElements} />
						) : (
							<div>Ничего не найдено</div>
						)}
					</>
				) : (
					<div>Введите в поисковую строку название необходимого товара!</div>
				)}
			</div>
		</div>
	)
}

export default connect(
	state => ({
		searchCategories: searchSelector(state),
		viewElements: getViewElementsSelector(state),
	}),
	{ getSearchCategories }
)(Search)
