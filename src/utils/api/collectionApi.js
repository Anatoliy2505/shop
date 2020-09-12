import { request } from '../helpers/network'

export const getCollectionData = collectionName =>
	request(
		`api/collection/getCollection/
		${collectionName}`,
		'GET'
	)
