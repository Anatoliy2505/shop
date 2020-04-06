import { useEffect, useState } from 'react'

export default function useSetViewList({
	categories,
	currentPage,
	viewElements,
}) {
	const [hasMore, setHasMore] = useState(false)
	const [thisCategiries, setThisCategiries] = useState([])
	const [viewList, setViewList] = useState([])
	const [maxCountPage, setMaxCountPage] = useState(1)

	useEffect(() => {
		if (currentPage === 1) {
			if (categories && categories !== thisCategiries) {
				setViewList([...categories.slice(0, viewElements)])
				setThisCategiries(categories)
				setMaxCountPage(Math.ceil(categories.length / viewElements) || 1)
			}
		}
		return () => {
			setHasMore(false)
		}
	}, [currentPage, viewElements, categories, maxCountPage, thisCategiries])

	useEffect(() => {
		if (thisCategiries.length > 0 && hasMore && currentPage > 1) {
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
