import React, { useEffect } from 'react'
import { connect } from 'react-redux'

import { getAllParentsCategories } from './redux/actions'
import { catalogSelector } from './redux/selectors'
import { ProductList } from './components/ProductLIst'

const Catalog = ({
	catalog: { data, isLoading, errorMsg },
	getAllParentsCategories,
	match: {
		params: { mainCategory, parentCategory },
		url,
	},
}) => {
	useEffect(() => {
		if (data && data[mainCategory] && !data[mainCategory].loaded) {
			getAllParentsCategories(mainCategory)
		}
	}, [data, mainCategory, getAllParentsCategories])

	const joinCategories = data => {
		let categories = []
		const children = data.children
		for (let item in children) {
			if (children[item].categories.length)
				categories.push(...children[item].categories)
		}
		return categories
	}

	let categories = null,
		title = null

	if (data && data[mainCategory] && data[mainCategory].loaded) {
		if (parentCategory) {
			if (data[mainCategory].children[parentCategory]) {
				title = data[mainCategory].children[parentCategory].title
				categories = data[mainCategory].children[parentCategory].categories
			} else {
				categories = null
			}
		} else {
			title = data[mainCategory].title
			categories = joinCategories(data[mainCategory])
		}
	}

	return (
		<section className={'catalog page'}>
			{isLoading ? (
				<h1 className={'page-title'}>Loading</h1>
			) : errorMsg && errorMsg[mainCategory] ? (
				<h1 className={'page-title'}>{errorMsg[mainCategory]}</h1>
			) : categories ? (
				<>
					<h1 className={'page-title'}>{title}</h1>
					<ProductList
						products={categories}
						mainCategory={mainCategory}
						parentCategory={parentCategory}
					/>
				</>
			) : null}
		</section>
	)
}

export default connect(
	state => ({
		catalog: catalogSelector(state),
	}),
	{ getAllParentsCategories }
)(Catalog)
