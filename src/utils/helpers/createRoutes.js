export const createRoutes = ({
	firstUrlItem,
	rawData,
	collection,
	backPath,
	group,
	section = '',
}) => {
	switch (firstUrlItem) {
		case 'hits':
			return [{ title: 'Хиты продаж', path: '/hits' }]
		case 'sale':
			return [{ title: 'Товары со скидками', path: '/sale' }]
		case 'search':
			return [{ title: 'Страница поиска', path: '/search' }]
		case 'recommendation': {
			if (!!backPath) {
				return [{ title: 'Назад', path: backPath }]
			}
			const groupData = rawData.find(item => item._id === collection.parentId)
			const sectionData = rawData.find(item => item._id === groupData.parentId)
			return [
				{ title: sectionData.title, path: `/catalog/${sectionData.name}` },
				{
					title: groupData.title,
					path: `/catalog/${sectionData.name}/${groupData.name}`,
				},
			]
		}
		default: {
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
}
