import React, { useEffect } from 'react'
import { connect } from 'react-redux'

import { hitsSelector } from './redux/selectors'
import { getHitsCategories } from './redux/actions'
import { ProductList } from '../Catalog/components/ProductLIst'

const Hits = ({
	hitsCategories: { data, errorMsg, isLoading },
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
					<ProductList products={data} page={'hits'} />
				</>
			) : null}
		</section>
	)
}

export default connect(state => ({ hitsCategories: hitsSelector(state) }), {
	getHitsCategories,
})(Hits)
