import React from 'react'
import { connect } from 'react-redux'
import { BreadCrumbs } from '../../components'
import { sidebarSelector } from '../../redux/selectors'
import { createRoutesFromCategiries } from '../../utils/helpers/createRoutesFromCategiries'

const ProductsDetail = ({ categories, match: { url, params } }) => {
	let routes = null
	const utlItems = url.split('/').slice(1)
	const productsCategory = utlItems[utlItems.length - 1]

	if (utlItems[0] === 'hits') {
		routes = [{ title: 'Хиты продаж', path: '/hits' }]
	} else if (utlItems[0] === 'sale') {
		routes = [{ title: 'Товары со скидками', path: '/sale' }]
	} else if (utlItems[0] === 'search') {
		routes = [{ title: 'Страница поиска', path: '/search' }]
	} else if (categories.data) {
		const { mainCategory, parentCategory } = params
		routes = createRoutesFromCategiries(
			categories.data,
			mainCategory,
			parentCategory
		)
	}

	console.log(productsCategory)

	return (
		<>
			<BreadCrumbs
				routes={routes}
				lastElementName={'Обзор товара' || 'Товар не найден'}
			/>
			<h1 className={'page-title'}>Detail</h1>
		</>
	)
}

export default connect(state => state => ({
	categories: sidebarSelector(state),
}))(ProductsDetail)
