const deepCopy = data => {
	let copyObj = {}
	let copyArray = []

	if (data instanceof Object) {
		if (Object.keys(data).length > 0) {
			for (const item in data) {
				if (typeof data[item] === 'object') {
					copyObj[item] = deepCopy(data[item])
				} else {
					copyObj[item] = data[item]
				}
			}
			return copyObj
		}
	} else if (data instanceof Array) {
		for (let i = 0; i < data.length; i++) {
			if (typeof data[i] === 'object') {
				copyArray[i] = deepCopy(data[i])
			} else {
				copyArray[i] = data[i]
			}
		}
		return copyArray
	}
	return data
}

export const setAllCategoryForMain = (partCatalog, categorys, mainCat) => {
	let newCatalog = deepCopy(partCatalog)

	if (categorys.length) {
		for (const item in newCatalog.children) {
			categorys.forEach(element => {
				if (
					Number(element['parent_id']) === Number(newCatalog.children[item].id)
				) {
					const newElement = { ...element, path: mainCat + '/' + item }
					newCatalog.children[item].categories = [
						...newCatalog.children[item].categories,
						newElement,
					]
				}
			})
		}
		newCatalog.loaded = true
		return newCatalog
	} else {
		return partCatalog
	}
}
