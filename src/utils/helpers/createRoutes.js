export const createRoutes = (firstUrlItem, section, group, rawData) => {
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
			if (section && rawData) {
				const sectionData = rawData.find(item => item.name === section)
				if (group) {
					const groupData = rawData.find(item => item.name === group)
					return [
						{ title: sectionData.title, path: `/catalog/${section}` },
						{ title: groupData.title, path: `/catalog/${section}/${group}` },
					]
				}
				return [{ title: sectionData.title, path: `/catalog/${section}` }]
			} else {
				return []
			}
	}
}
