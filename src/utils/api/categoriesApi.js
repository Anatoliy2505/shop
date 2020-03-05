import { httpGet } from '../helpers/network'

export const getAll = () => httpGet('categories')

export const getAllChildren = mainCat => httpGet(mainCat)
