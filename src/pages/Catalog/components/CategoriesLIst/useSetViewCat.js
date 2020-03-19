import { useEffect, useState } from 'react'

export default function useSetViewList({
	categories,
	currentPage,
	viewElements,
}) {
	const [hasMore, setHasMore] = useState(true)
	const [thisCategiries, setThisCategiries] = useState(categories)
	const [viewList, setViewList] = useState([
		...categories.slice(0, viewElements),
	])
	const [maxCountPage, setMaxCountPage] = useState(
		Math.ceil(categories.length / viewElements) || 1
	)

	useEffect(() => {
		if (currentPage === 1) {
			if (categories !== thisCategiries) {
				setViewList([...categories.slice(0, viewElements)])
				setHasMore(currentPage < maxCountPage)
				setThisCategiries(categories)
				setMaxCountPage(Math.ceil(categories.length / viewElements) || 1)
			}
		}
	}, [currentPage, viewElements, categories, maxCountPage, thisCategiries])

	useEffect(() => {
		if (thisCategiries.length > 0 && hasMore && currentPage !== 1) {
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
