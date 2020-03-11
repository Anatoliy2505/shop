import { useEffect, useState } from 'react'

export default function useBookSearch(categories, pageNumber) {
	const [viewCat, setViewCat] = useState([])
	const [hasMore, setHasMore] = useState(false)
	const colViewCat = 15

	useEffect(() => {
		if (categories) {
			setViewCat(prevCategories => {
				if (pageNumber === 1) {
					if (categories.length > colViewCat) {
						let newPies = categories.slice(0, colViewCat)
						return [...new Set([...prevCategories, ...newPies])]
					} else {
						return categories
					}
				} else if (categories.length > colViewCat * pageNumber) {
					let newPies = categories.slice(
						colViewCat * (pageNumber - 1),
						colViewCat * pageNumber
					)
					return [...new Set([...prevCategories, ...newPies])]
				} else {
					let newPies = categories.slice(colViewCat * (pageNumber - 1))
					return [...new Set([...prevCategories, ...newPies])]
				}
			})
			setHasMore(categories.length > colViewCat * pageNumber)
		}
	}, [pageNumber, colViewCat, categories])

	return { viewCat, hasMore }
}
