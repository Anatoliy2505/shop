import { checkResponse } from '../../../utils/helpers/checkResponse'
import { getHitsApi } from '../../../utils/api/collectionApi'
import { error } from './constants'
import * as t from './actionTypes'

export const getHitsCollectionsRequest = () => ({
	type: t.GET_HITS_COLLECTIONS_REQUEST,
})

export const getHitsCollectionsSuccess = collections => ({
	type: t.GET_HITS_COLLECTIONS_SUCCESS,
	collections,
})

export const getHitsCollectionsFailure = (errorMsg = error.connect) => ({
	type: t.GET_HITS_COLLECTIONS_FAILURE,
	payload: {
		errorMsg,
	},
	error: true,
})

export const getHitsCollections = () => {
	return dispatch => {
		dispatch(getHitsCollectionsRequest())

		return getHitsApi()
			.then(res => {
				if (checkResponse(res)) {
					dispatch(getHitsCollectionsSuccess(res.collections))
				} else {
					dispatch(getHitsCollectionsFailure(res.message || error.request))
				}
			})
			.catch(error => {
				dispatch(getHitsCollectionsFailure())
				console.log(error)
			})
	}
}
