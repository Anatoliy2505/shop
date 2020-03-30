export const createRoutesFromCategiries = (
	data,
	mainCategory,
	parentCategory
) => {
	let routes = []
	data.forEach(element => {
		if (element.name === mainCategory) {
			routes.push({ title: element.title, path: `/catalog/${mainCategory}` })
			if (parentCategory && element.children) {
				element.children.forEach(element => {
					if (element.name === parentCategory) {
						routes.push({
							title: element.title,
							path: `/catalog/${mainCategory}/${parentCategory}`,
						})
					}
				})
			}
		}
	})
	return routes
}

export const createRoutes = (
	firstUrlItem,
	data,
	mainCategory,
	parentCategory
) => {
	switch (firstUrlItem) {
		case 'hits':
			return [{ title: 'Хиты продаж', path: '/hits' }]
		case 'sale':
			return [{ title: 'Товары со скидками', path: '/sale' }]
		case 'search':
			return [{ title: 'Страница поиска', path: '/search' }]
		case 'recommendation':
			return [{ title: 'Рекомендации', path: '/recommendation' }]
		default:
			if (data) {
				return createRoutesFromCategiries(data, mainCategory, parentCategory)
			} else {
				return []
			}
	}
}
