import React, { useEffect } from 'react'
import { connect } from 'react-redux'

import { BreadCrumbs, Preloader, Error, Empty } from '../../components'
import { CategoriesLIst } from '../Catalog/components/CategoriesLIst'

import { searchCollections } from './redux/actions'
import { searchSelector } from './redux/selectors'
import { getViewElementsSelector } from '../Catalog/redux/selectors'

import './Search.scss'

const Search = ({
	collectionsData: { data, isLoading, errorMsg, queryStr },
	searchCollections,
	location: { query },
	viewElements,
}) => {
	useEffect(() => {
		if (!!query) {
			searchCollections(query)
		}
	}, [query, searchCollections])

	return (
		<div className={'search-page'}>
			<BreadCrumbs lastElementName={'Поисковая страница'} />
			<h1 className={'page-title'}>Поисковая страница</h1>
			<>
				{isLoading ? (
					<Preloader title={'Поиск...'} />
				) : errorMsg ? (
					<Error title={errorMsg} />
				) : data && data.length > 0 ? (
					<>
						<h2 className={'search-query'}>
							Вы искали <b>"{queryStr}"</b>, найдены варианты:
						</h2>
						<CategoriesLIst
							categories={data}
							page={'search'}
							viewElements={viewElements}
						/>
					</>
				) : !!query && queryStr ? (
					<Empty title={`По вашему запросу "${queryStr}" нет совпадений`} />
				) : (
					<div className={'search-message'}>
						Введите в поисковую строку название товара, который Вам нужен!
					</div>
				)}
			</>
		</div>
	)
}

export default connect(
	state => ({
		collectionsData: searchSelector(state),
		viewElements: getViewElementsSelector(state),
	}),
	{ searchCollections }
)(Search)
