import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { getAllParentsCategories } from './redux/actions'
import { catalogSelector } from './redux/selectors'
import { CategoriesLIst } from './components/CategoriesLIst'
import { BreadCrumbs, Preloader, Empty, Error } from '../../components'

const Catalog = React.memo(
	({
		catalog: { data, isLoading, errorMsg, viewElements },
		getAllParentsCategories,
		match: {
			params: { mainCategory, parentCategory },
		},
	}) => {
		const [categoriesOfMain, setCategoriesOfMain] = useState({})

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
			setCategoriesOfMain(prevState => ({
				...prevState,
				[mainCategory]: categories,
			}))
		}

		let categories = null,
			title = null,
			routes = null

		if (data && data[mainCategory]) {
			title = data[mainCategory].title
			if (parentCategory) {
				if (data[mainCategory].children[parentCategory]) {
					title = data[mainCategory].children[parentCategory].title
					if (data[mainCategory].loaded) {
						categories = data[mainCategory].children[parentCategory].categories
					}
				}
			} else if (data[mainCategory].loaded) {
				if (categoriesOfMain[mainCategory]) {
					categories = categoriesOfMain[mainCategory]
				} else {
					joinCategories(data[mainCategory])
				}
			}
		}

		if (parentCategory && data && data[mainCategory]) {
			routes = [
				{ path: `/catalog/${mainCategory}`, title: data[mainCategory].title },
			]
		}

		return (
			<section className={'catalog-page'}>
				<h1 className={'hidden'}>Страница каталога товаров</h1>
				<BreadCrumbs
					routes={routes}
					lastElementName={title || 'Категория не найдена'}
				/>
				<h2 className={'page-title'}>{title || 'Категория не найдена'}</h2>
				{isLoading ? (
					<Preloader title={'Загрузка...'} />
				) : errorMsg && errorMsg[mainCategory] ? (
					<Error title={errorMsg[mainCategory]} />
				) : categories ? (
					<CategoriesLIst categories={categories} viewElements={viewElements} />
				) : (
					<Empty title={'Нет такой категории...'} />
				)}
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
