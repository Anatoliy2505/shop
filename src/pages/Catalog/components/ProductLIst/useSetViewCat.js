import { useEffect, useState } from 'react'

export default function useSetViewList(products, currentPage) {
	const [viewList, setViewList] = useState([])
	const [hasMore, setHasMore] = useState(true)
	const [thisProducts, setThisProducts] = useState(products)
	const [viewElemets] = useState(5)
	const [maxCountPage, setMaxCountPage] = useState(
		Math.ceil(products.length / viewElemets) || 1
	)

	useEffect(() => {
		if (currentPage === 1) {
			setViewList([])
			if (thisProducts !== products) {
				setThisProducts(products)
				setMaxCountPage(Math.ceil(products.length / viewElemets) || 1)
				setHasMore(true)
			}
		}
	}, [currentPage, maxCountPage, viewElemets, products, thisProducts])

	useEffect(() => {
		if (thisProducts.length > 0 && hasMore) {
			setViewList(viewList => [
				...viewList,
				...thisProducts.slice(
					(currentPage - 1) * viewElemets,
					currentPage * viewElemets
				),
			])
		}
		setHasMore(currentPage < maxCountPage)
	}, [hasMore, thisProducts, viewElemets, currentPage, maxCountPage])

	return { viewList, hasMore }
}
