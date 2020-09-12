export const getProperties = (paramCollection, paramProduct) => {
	const paramColArr = paramCollection.split('/')
	const paramProdArr = paramProduct.split('/')

	const allParamArr = [...paramColArr, ...paramProdArr]
	const allParamIsFilter = allParamArr.filter(item => !!item)

	const result = allParamIsFilter.map((item, index) => {
		const itemParam = item.split('-')
		if (itemParam.length === 2) {
			return {
				title: itemParam[0],
				value: itemParam[1],
				key: itemParam[0] + index,
			}
		}
		return false
	})
	return result
}
