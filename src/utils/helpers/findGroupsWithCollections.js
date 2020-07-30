import { getParentList } from './getParentList'

export default rawData => {
	const parentList = getParentList(rawData)

	const parentGroup = parentList
		? parentList.filter(item => item.collections.length > 0)
		: null

	return parentGroup
}
