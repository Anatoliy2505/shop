import { useEffect, useState, useRef, useCallback } from 'react'

export default function useSetViewList({
	categories,
	currentPage,
	viewElements = 12,
	setCurrentPage,
}) {
	const [hasMore, setHasMore] = useState(false)
	const thisCategiries = useRef([])
	const [viewList, setViewList] = useState([])
	const [maxCountPage, setMaxCountPage] = useState(
		() => Math.ceil(categories.length / viewElements) || 1
	)

	useEffect(() => {
		if (!!categories && categories !== thisCategiries.current) {
			setCurrentPage(() => 1)
			setViewList(() => [...categories.slice(0, viewElements)])
			setMaxCountPage(() => {
				const maxCount = Math.ceil(categories.length / viewElements)
				if (maxCount > 1) {
					setHasMore(true)
					return maxCount
				}
				setHasMore(false)
				return 1
			})
			thisCategiries.current = categories
		} else {
			setHasMore(false)
		}
	}, [categories, viewElements, setCurrentPage])

	const setCategories = useCallback(
		pageNamber => {
			if (hasMore && pageNamber > 1) {
				setViewList(prev => [
					...prev,
					...thisCategiries.current.slice(
						(pageNamber - 1) * viewElements,
						pageNamber * viewElements
					),
				])
			}
		},
		[hasMore, thisCategiries, viewElements]
	)

	useEffect(() => {
		if (currentPage <= maxCountPage) {
			setCategories(currentPage)
			if (currentPage === maxCountPage) {
				setHasMore(() => false)
			}
		}
	}, [currentPage, maxCountPage, setCategories])

	return { viewList, hasMore }
}
