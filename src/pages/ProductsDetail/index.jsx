import React, { useState, useEffect, useMemo, useRef } from 'react'
import { useLocation } from 'react-router'
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
	data: { collection, recommendation, products, isLoading, errorMsg },
	getCollection,
	groups: { rawData },
	addProductToCart,
	match: {
		url,
		params: { group, section, collectionName },
	},
}) => {
	const location = useLocation()
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
		if (!!rawData && !!collection) {
			const routs = createRoutes({
				firstUrlItem: urlItems[0],
				collection,
				rawData,
				backPath: location && location.state ? location.state.prevPath : false,
				section,
				group,
			})
			return routs
		}
		return null
	}, [section, group, rawData, url, collection, location])

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
						recommendation={recommendation}
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
