import React, { useState, useRef, useEffect } from 'react'

import { ProductCard } from '../../../../components'
import useSetViewList from './useSetViewCat'

import './ProductList.scss'

const ProductList = ({ products, page, mainCategory, parentCategory }) => {
	const [currentPage, setCurrentPage] = useState(1)
	const [observer, setObserver] = useState(null)

	const observeElement = useRef()

	const { viewList, hasMore } = useSetViewList(products, currentPage)

	useEffect(() => {
		setCurrentPage(1)
		setObserver(null)
	}, [parentCategory, mainCategory])

	useEffect(() => {
		if (!observer && viewList) {
			const cb = ([entry]) => {
				console.log('entry', entry)
				if (entry && entry.isIntersecting) {
					setCurrentPage(cp => cp + 1)
				}
			}
			const observ = new IntersectionObserver(cb, {
				threshold: 1.0,
				rootMargin: '-100px',
			})
			observ.observe(observeElement.current)
			setObserver(observ)
		} else {
			if (!hasMore && observer) {
				observer.disconnect()
			}
		}
	}, [hasMore, observer, viewList])

	const poductsList = viewList =>
		viewList.map(product => (
			<ProductCard key={product.id} {...product} page={page} />
		))

	return (
		<>
			<div className="product__list">
				{viewList && viewList.length ? poductsList(viewList) : null}
			</div>
			<div
				className={'observe-element'}
				ref={observeElement}
				style={{ height: '20px', width: '20px' }}
			></div>
		</>
	)
}

export { ProductList }
