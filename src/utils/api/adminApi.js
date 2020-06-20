import { request } from '../helpers/network'

export const setGroup = body => request('api/categories/setGroup', 'POST', body)

export const updateGroup = body =>
	request('api/categories/updateGroup', 'PUT', body)

export const removeGroup = body =>
	request('api/categories/removeGroup', 'DELETE', body)

export const setCollection = body =>
	request('api/categories/setCollection', 'POST', body)

export const getCollections = id =>
	request(`api/categories/getCollections/${id}`, 'GET')
