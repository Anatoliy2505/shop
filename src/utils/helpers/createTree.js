const createChildren = (data, children) => {
	const result = children.reduce((accumulator, element) => {
		const items = data.filter(item => item.parentId === element._id)
		if (items && !items.length) {
			return [...accumulator, element]
		} else {
			return [
				...accumulator,
				{ ...element, children: createChildren(data, items) },
			]
		}
	}, [])
	return result
}

export const createTree = data => {
	if (!data) {
		return null
	}
	const tree = []
	data.forEach(element => {
		if (element.parentId === '0') {
			const children = data.filter(item => item.parentId === element._id)
			if (children && !children.length) {
				tree.push({
					...element,
					children: [],
				})
			} else {
				tree.push({ ...element, children: createChildren(data, children) })
			}
		}
	})

	return tree
}
