import { request } from '../helpers/network'

export const setGroup = body => request('api/group/setGroup', 'POST', body)

export const updateGroup = body => request('api/group/updateGroup', 'PUT', body)

export const removeGroup = body =>
	request('api/group/removeGroup', 'DELETE', body)

export const setCollection = body =>
	request('api/collection/setCollection', 'POST', body)

export const updateCollection = body =>
	request('api/collection/updateCollection', 'PUT', body)

export const getCollections = id =>
	request(`api/collection/getCollections/${id}`, 'GET')

export const removeCollection = body =>
	request('api/collection/removeCollection', 'DELETE', body)
