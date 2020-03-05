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
	for (let i = 0; i < data.length; i++) {
		if ('children' in data[i]) {
			catalog[data[i].name] = {
				loaded: false,
				title: data[i].title,
				children: createCatalogTree(data[i].children),
			}
		} else {
			catalog[data[i].name] = {
				id: data[i].id,
				title: data[i].title,
				categories: [],
			}
		}
	}
	return catalog
}
