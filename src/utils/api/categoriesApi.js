import { httpGet } from '../helpers/network'

export const getMainCategories = () => httpGet('categories')

export const getParentsCategories = mainCat => httpGet(mainCat)

export const getHitsCategoriesApi = () => httpGet('hits')

export const getSaleCategoriesApi = () => httpGet('sale')
