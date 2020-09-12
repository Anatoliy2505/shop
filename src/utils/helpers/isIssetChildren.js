// const searchChildren = (data, id) => {
// 	let children = []
// 	if (data) {
// 		data.forEach(element => {
// 			if (element._id === id) {
// 				if ('children' in element && element.children.length) {
// 					children.push(element.children)
// 					return
// 				}
// 			} else {
// 				if ('children' in element && element.children.length) {
// 					const child = searchChildren(element.children, id)
// 					if (!!child.length) {
// 						children.push(child)
// 						return
// 					}
// 				}
// 			}
// 		})
// 	}
// 	return children
// }

export const isIssetChildren = (rawData, id) => {
	const groups = rawData.filter(item => item.parentId === id)
	const group = rawData.find(item => item._id === id)
	if (groups.length > 0 || group.collections.length > 0) {
		return true
	}
	return false
}
