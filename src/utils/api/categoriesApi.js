import { httpGet, request } from '../helpers/network'

export const getGroups = () => request('/api/group/getGroups', 'GET')

export const getParentsCategories = mainCat => httpGet(mainCat)
