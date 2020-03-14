import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { getAllParentsCategories } from './redux/actions'
import { catalogSelector } from './redux/selectors'
import { CategoriesLIst } from './components/CategoriesLIst'
import { useParams } from 'react-router'
import { BreadCrumbs } from '../../components'

const Catalog = React.memo(
	({
		catalog: { data, isLoading, errorMsg, viewElements },
		getAllParentsCategories,
	}) => {
		const { mainCategory, parentCategory } = useParams()

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
			title = null,
			routes = null

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

		if (parentCategory && data && data[mainCategory]) {
			routes = [{ path: `/${mainCategory}`, title: data[mainCategory].title }]
		}

		return (
			<section className={'catalog page'}>
				<BreadCrumbs routes={routes} lastElementName={title} />
				{isLoading ? (
					<h1 className={'page-title'}>Loading</h1>
				) : errorMsg && errorMsg[mainCategory] ? (
					<h1 className={'page-title'}>{errorMsg[mainCategory]}</h1>
				) : categories ? (
					<>
						<h1 className={'page-title'}>{title}</h1>
						<CategoriesLIst
							categories={categories}
							mainCategory={mainCategory}
							parentCategory={parentCategory}
							viewElements={viewElements}
						/>
					</>
				) : null}
			</section>
		)
	}
)

export default connect(
	state => ({
		catalog: catalogSelector(state),
	}),
	{ getAllParentsCategories }
)(Catalog)
