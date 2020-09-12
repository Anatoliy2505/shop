import React, { useState, useEffect, useMemo, useRef } from 'react'
import { connect } from 'react-redux'
import { ViewProducts } from './components'

import { BreadCrumbs, Preloader, Error, Empty } from '../../components'

import { getCollection } from './redux/actions'
import { sidebarSelector } from '../../redux/selectors'
import { collectionDataSelector } from './redux/selectors'

import { createRoutes } from '../../utils/helpers/createRoutes'
import { addProductToCart } from '../Cart/redux/actions'

import './ProductsDetail.scss'

const ProductsDetail = ({
	data: { collection, recomendation, products, isLoading, errorMsg },
	getCollection,
	groups: { rawData },
	addProductToCart,
	match: {
		url,
		params: { group, section, collectionName },
	},
}) => {
	const collName = useRef(null)
	const [routes, setRoutes] = useState(null)

	useEffect(() => {
		if (collectionName !== collName) {
			collName.current = collectionName
			getCollection(collectionName)
		}
	}, [getCollection, collName, collectionName])

	const newRouts = useMemo(() => {
		const urlItems = url.split('/').slice(1)
		if (!!collName && !!rawData) {
			const routs = createRoutes(urlItems[0], section, group, rawData)
			return routs
		}
		return null
	}, [section, group, rawData, url, collName])

	useEffect(() => {
		if (!!newRouts) {
			setRoutes(() => newRouts)
		}
	}, [newRouts])

	let collectionTitle = isLoading
		? 'Поиск товаров...'
		: (collection && collection.title) || 'Товары не найдены'

	return (
		<section className={'products'}>
			<BreadCrumbs routes={routes} lastElementName={collectionTitle} />
			<h1 className={'page-title'}>{collectionTitle}</h1>
			{isLoading ? (
				<Preloader title={'Загрузка товаров'} />
			) : errorMsg ? (
				<Error title={errorMsg} />
			) : products && products.length > 0 ? (
				<>
					<ViewProducts
						products={products}
						collection={collection}
						recomendation={recomendation}
						addProductToCart={addProductToCart}
					/>
				</>
			) : (
				<Empty title={'Товары временно отсутствуют'} />
			)}
		</section>
	)
}

export default connect(
	state => ({
		groups: sidebarSelector(state),
		data: collectionDataSelector(state),
	}),
	{ getCollection, addProductToCart }
)(ProductsDetail)
