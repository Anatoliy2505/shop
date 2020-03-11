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

export const setParenstCategoriesToMain = (partCatalog, categorys, mainCat) => {
	let newPartCatalog = deepCopy(partCatalog)

	if (categorys.length && !categorys.loaded) {
		for (const item in newPartCatalog.children) {
			categorys.forEach(element => {
				if (
					Number(element['parent_id']) ===
					Number(newPartCatalog.children[item].id)
				) {
					const newElement = { ...element, path: mainCat + '/' + item }
					newPartCatalog.children[item].categories = [
						...newPartCatalog.children[item].categories,
						newElement,
					]
				}
			})
		}
		newPartCatalog.loaded = true
		return newPartCatalog
	} else {
		return partCatalog
	}
}
