import { error } from './constants'
import * as t from './actionTypes'
import { checkResponse } from '../../../utils/helpers/checkResponse'
import { getCollectionData } from '../../../utils/api/collectionApi'

export const getCollectionRequest = () => ({
	type: t.GET_FULL_COLLECTION_DATA_REQUEST,
})

export const getCollectionSuccess = ({
	collection,
	products,
	recommendation,
}) => ({
	type: t.GET_FULL_COLLECTION_DATA_SUCCESS,
	payload: {
		collection,
		products,
		recommendation,
	},
})

export const getCollectionFailure = (errorMsg = error.connect) => ({
	type: t.GET_FULL_COLLECTION_DATA_FAILURE,
	payload: {
		errorMsg,
	},
	error: true,
})

export const getCollection = collectionName => {
	return dispatch => {
		dispatch(getCollectionRequest())

		return getCollectionData(collectionName)
			.then(res => {
				if (checkResponse(res)) {
					const { products, recommendation, ...collection } = res.collection
					dispatch(
						getCollectionSuccess({ products, recommendation, collection })
					)
				} else {
					dispatch(getCollectionFailure(res.message))
				}
			})
			.catch(error => {
				dispatch(getCollectionFailure())
				console.log(error)
			})
	}
}
