import { request } from '../helpers/network'

export const searchCollectionsApi = collectionTitle =>
	request(
		`api/collection/searchCollections/
		${collectionTitle}`,
		'GET'
	)
