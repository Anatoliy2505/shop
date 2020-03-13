import { useEffect, useState } from 'react'

export default function useSetViewList({
	categories,
	currentPage,
	viewElements,
}) {
	const [viewList, setViewList] = useState([])
	const [hasMore, setHasMore] = useState(true)
	const [thisCategiries, setThisCategiries] = useState(categories)
	const [maxCountPage, setMaxCountPage] = useState(
		Math.ceil(categories.length / viewElements) || 1
	)

	useEffect(() => {
		if (currentPage === 1) {
			setViewList([])
			if (thisCategiries !== categories) {
				setThisCategiries(categories)
				setMaxCountPage(Math.ceil(categories.length / viewElements) || 1)
				setHasMore(true)
			}
		}
	}, [currentPage, maxCountPage, viewElements, categories, thisCategiries])

	useEffect(() => {
		if (thisCategiries.length > 0 && hasMore) {
			setViewList(viewList => [
				...viewList,
				...thisCategiries.slice(
					(currentPage - 1) * viewElements,
					currentPage * viewElements
				),
			])
		}
		setHasMore(currentPage < maxCountPage)
	}, [hasMore, thisCategiries, viewElements, currentPage, maxCountPage])

	return { viewList, hasMore }
}
