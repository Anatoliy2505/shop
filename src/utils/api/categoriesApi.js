import { httpGet } from '../helpers/network'

export const getAll = () => httpGet('categories')
