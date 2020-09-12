// export const createCatalogTree = data => {
// 	return data.map(item => {
// 		if ('children' in item) {
// 			return {
// 				name: item.title,
// 				children: createCatalogTree(item.children),
// 			}
// 		} else {
// 			return {
// 				name: item.title,
// 				products: null,
// 			}
// 		}
// 	})
// }

export const createCatalogTree = data => {
	let catalog = {}
	if (data) {
		for (let i = 0; i < data.length; i++) {
			if ('children' in data[i]) {
				catalog[data[i].name] = {
					loaded: false,
					title: data[i].title,
					_id: data[i]._id,
					children: createCatalogTree(data[i].children),
				}
			} else {
				catalog[data[i].name] = {
					_id: data[i]._id,
					title: data[i].title,
					collections: data[i].collections,
				}
			}
		}
	}

	return catalog
}
