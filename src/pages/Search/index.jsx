import React, { useEffect } from 'react'
import { connect } from 'react-redux'

import { BreadCrumbs, Preloader, Error, Empty } from '../../components'
import { CategoriesLIst } from '../Catalog/components/CategoriesLIst'

import { searchSelector } from './redux/selectors'
import { getViewElementsSelector } from '../Catalog/redux/selectors'
import { getSearchCategories } from './redux/actions'

import './Search.scss'

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

	return (
		<div className={'search-page'}>
			<BreadCrumbs lastElementName={'Поисковая страница'} />
			<h1 className={'page-title'}>Поисковая страница</h1>
			<div>
				{query ? (
					<>
						{isLoading ? (
							<Preloader title={'Поиск...'} />
						) : errorMsg ? (
							<Error title={errorMsg} />
						) : data && data.length ? (
							<>
								<h2 className={'search-query'}>
									Вы искали <b>"{query}"</b>, найдены варианты:
								</h2>
								<CategoriesLIst
									categories={data}
									page={'search'}
									viewElements={viewElements}
								/>
							</>
						) : (
							<Empty title={`По вашему запросу "${query}" нет совпадений`} />
						)}
					</>
				) : (
					<div className={'search-message'}>
						Введите в поисковую строку название товара, который Вам нужен!
					</div>
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
