import { request } from '../helpers/network'

export const setGroup = body => request('api/group/setGroup', 'POST', body)

export const updateGroup = body => request('api/group/updateGroup', 'PUT', body)

export const removeGroup = body =>
	request('api/group/removeGroup', 'DELETE', body)

export const setCollection = body =>
	request('api/collection/setCollection', 'POST', body)

export const updateCollection = body =>
	request('api/collection/updateCollection', 'PUT', body)

export const removeCollection = body =>
	request('api/collection/removeCollection', 'DELETE', body)

export const setProduct = body =>
	request('api/product/setProduct', 'POST', body)

export const updateProduct = body =>
	request('api/product/updateProduct', 'PUT', body)

export const removeProduct = body =>
	request('api/product/removeProduct', 'DELETE', body)

export const getProductsFromCollection = collectionId =>
	request(`api/product/getProducts/${collectionId}`, 'GET')
