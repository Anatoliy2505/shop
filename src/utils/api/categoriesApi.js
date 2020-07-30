import { httpGet, request } from '../helpers/network'

export const getMainCategories = () => request('/api/group/getGroups', 'GET')

export const getParentsCategories = mainCat => httpGet(mainCat)

export const getHitsCategoriesApi = () => httpGet('hits')

export const getSaleCategoriesApi = () => httpGet('sale')

export const getSearchCategoriesApi = query =>
	httpGet(`search?title_like=${query}`)
