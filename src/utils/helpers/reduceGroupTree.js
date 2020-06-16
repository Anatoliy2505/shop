export const reduceGroupTree = groups =>
	groups.reduce((accumulator, currentValue) => {
		const { children, ...rest } = currentValue
		if (children) {
			return [...accumulator, rest, ...children]
		}
		return [...accumulator, rest]
	}, [])
