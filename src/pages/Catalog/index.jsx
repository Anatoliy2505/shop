import React, { useEffect } from 'react'
import { connect } from 'react-redux'

import { getAllChildrenCategories } from '../../redux/actions'
import { catalogSelector } from '../../redux/selectors'
import { ProductList } from './components/ProductLIst'

const Catalog = ({
	catalog: { data, isLoading, errorMsg },
	getAllChildrenCategories,
	match: {
		params: { mainCategory, parentCategory },
		url,
	},
}) => {
	useEffect(() => {
		if (data && data[mainCategory] && !data[mainCategory].loaded) {
			getAllChildrenCategories(mainCategory)
		}
	}, [data, getAllChildrenCategories, mainCategory, parentCategory])

	const arrayCategories = data => {
		let categories = []
		const children = data.children
		for (let item in children) {
			if (children[item].categories.length)
				categories.push(...children[item].categories)
		}
		return categories
	}

	return (
		<div>
			{isLoading ? (
				<h2>Loading</h2>
			) : errorMsg && errorMsg[mainCategory] ? (
				<h2>{errorMsg[mainCategory]}</h2>
			) : parentCategory &&
			  data &&
			  data[mainCategory].children[parentCategory] ? (
				<ProductList
					products={data[mainCategory].children[parentCategory].categories}
					url={url}
				/>
			) : data && data[mainCategory] && data[mainCategory].loaded ? (
				<ProductList products={arrayCategories(data[mainCategory])} url={url} />
			) : null}
		</div>
	)
}

export default connect(
	state => ({
		catalog: catalogSelector(state),
	}),
	{ getAllChildrenCategories }
)(Catalog)
