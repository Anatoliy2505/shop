import { request } from '../helpers/network'

export const getCollectionData = collectionName =>
	request(
		`api/collection/getCollection/
		${collectionName}`,
		'GET'
	)

export const getHitsApi = () =>
	request('api/collection/getHitCollections', 'GET')

export const getSaleApi = () =>
	request('api/collection/getSaleCollections', 'GET')
