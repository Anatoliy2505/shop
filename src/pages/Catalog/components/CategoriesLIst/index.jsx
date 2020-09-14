import React, { useState, useRef, useEffect, useCallback } from 'react'

import { CategoryCard } from '../../../../components'
import useSetViewList from './useSetViewCat'

import './CategoriesList.scss'
import { useMemo } from 'react'

export const CategoriesLIst = ({ categories, page, viewElements, from }) => {
	const [currentPage, setCurrentPage] = useState(1)
	const [observer, setObserver] = useState(null)
	const [issetObserver, setIssetObserver] = useState(false)
	const observeElement = useRef(null)

	const { viewList, hasMore } = useSetViewList({
		categories,
		currentPage,
		viewElements,
		setCurrentPage,
	})

	const observerMangager = useCallback(() => {
		if (!issetObserver && hasMore && !!observeElement.current) {
			const observ = new IntersectionObserver(
				([entry]) => {
					if (entry && entry.isIntersecting) {
						setCurrentPage(prev => prev + 1)
					}
				},
				{
					threshold: 1.0,
					rootMargin: '0px 0px 150px 0px',
				}
			)
			observ.observe(observeElement.current)
			setObserver(observ)
			setIssetObserver(true)
		} else {
			if (issetObserver && !hasMore) {
				observer.disconnect()
				setObserver(null)
				setIssetObserver(false)
				setCurrentPage(1)
			}
		}
	}, [observer, hasMore, issetObserver, observeElement])

	useEffect(() => {
		observerMangager()
		return () => {
			if (observer) {
				observer.disconnect()
				setIssetObserver(false)
				setObserver(null)
			}
		}
	}, [categories, observerMangager, observer])

	const categoriesList = useMemo(
		() =>
			viewList.map(category => (
				<CategoryCard
					key={category._id}
					{...category}
					page={page}
					from={from}
				/>
			)),
		[viewList, page, from]
	)

	const getNewPage = () => {
		setCurrentPage(prevPage => prevPage + 1)
	}

	return (
		<div className="categories__list">
			{viewList && viewList.length > 0 ? (
				<>
					{categoriesList}

					{hasMore && (
						<div
							className={'categories__list-observe'}
							ref={observeElement}
							onClick={getNewPage}
						>
							<i className={'fas fa-angle-double-down'}></i>
						</div>
					)}
				</>
			) : null}
		</div>
	)
}
