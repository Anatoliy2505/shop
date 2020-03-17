export const createRoutesFromCategiries = (
	data,
	mainCategory,
	parentCategory
) => {
	let routes = []
	data.forEach(element => {
		if (element.name === mainCategory) {
			routes.push({ title: element.title, path: `/${mainCategory}` })
			if (parentCategory && element.children) {
				element.children.forEach(element => {
					if (element.name === parentCategory) {
						routes.push({
							title: element.title,
							path: `/${mainCategory}/${parentCategory}`,
						})
					}
				})
			}
		}
	})
	return routes
}