import React, { useState, useRef, useEffect } from 'react'

import { CategoryCard } from '../../../../components'
import useSetViewList from './useSetViewCat'

import './CategoriesList.scss'

export const CategoriesLIst = React.memo(
	({ categories, page, viewElements }) => {
		const [currentPage, setCurrentPage] = useState(1)
		const [observer, setObserver] = useState(null)
		const observeElement = useRef(null)

		const { viewList, hasMore } = useSetViewList({
			categories,
			currentPage,
			viewElements,
		})

		useEffect(() => {
			return () => {
				if (observer) {
					setCurrentPage(1)
					observer.disconnect()
					setObserver(null)
				}
			}
		}, [observer, categories])

		if (!observer && viewList) {
			const observ = new IntersectionObserver(
				([entry]) => {
					if (entry && entry.isIntersecting) {
						setCurrentPage(currentPage => currentPage + 1)
					}
				},
				{
					threshold: 1.0,
					rootMargin: '0px 0px 150px 0px',
				}
			)
			if (observeElement.current && hasMore) {
				observeElement.current.style.display = 'block'
				observ.observe(observeElement.current)
				setObserver(observ)
			} else if (observeElement.current) {
				observeElement.current.style.display = 'none'
			}
		} else {
			if (!hasMore && observer) {
				observer.disconnect()
				observeElement.current.style.display = 'none'
			}
		}

		const categoriesList = viewList =>
			viewList.map(category => (
				<CategoryCard key={category.id} {...category} page={page} />
			))

		const getNewPage = () => {
			setCurrentPage(prevPage => prevPage + 1)
		}

		return (
			<div className="categories__list">
				{viewList && viewList.length ? (
					<>
						{categoriesList(viewList)}
						<div
							className={'categories__list-observe'}
							ref={observeElement}
							onClick={getNewPage}
						>
							<i className={'fas fa-angle-double-down'}></i>
						</div>
					</>
				) : null}
			</div>
		)
	}
)
