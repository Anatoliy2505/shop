import React, { useState, useRef, useEffect } from 'react'

import { CategoryCard } from '../../../../components'
import useSetViewList from './useSetViewCat'

import './CategoriesList.scss'

export const CategoriesLIst = React.memo(
	({ categories, page, viewElements, mainCategory, parentCategory }) => {
		const [currentPage, setCurrentPage] = useState(1)
		const [observer, setObserver] = useState(null)

		const observeElement = useRef()

		const { viewList, hasMore } = useSetViewList({
			categories,
			currentPage,
			viewElements,
		})

		useEffect(() => {
			setCurrentPage(1)
			setObserver(null)
		}, [parentCategory, mainCategory])

		useEffect(() => {
			if (!observer && viewList) {
				const cb = ([entry]) => {
					if (entry && entry.isIntersecting) {
						setCurrentPage(cp => cp + 1)
					}
				}
				const observ = new IntersectionObserver(cb, {
					threshold: 1.0,
					rootMargin: '-50px',
				})
				observeElement.current.style.display = 'block'
				observ.observe(observeElement.current)
				setObserver(observ)
			} else {
				if (!hasMore && observer) {
					observer.disconnect()
					observeElement.current.style.display = 'none'
				}
			}
		}, [hasMore, observer, viewList])

		const categoriesList = viewList =>
			viewList.map(category => (
				<CategoryCard key={category.id} {...category} page={page} />
			))

		return (
			<>
				<div className="categories__list">
					{viewList && viewList.length ? categoriesList(viewList) : null}
					<div className={'categories__list-observe'} ref={observeElement}>
						<i className={'fas fa-angle-double-down'}></i>
					</div>
				</div>
			</>
		)
	}
)
