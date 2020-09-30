import * as t from './actionTypes'
import { error } from './constants'
import { checkResponse } from '../../../utils/helpers/checkResponse'
import { searchCollectionsApi } from '../../../utils/api/searchApi'

export const searchCollectionsRequest = query => ({
	type: t.SEARCH_COLLECTIONS_REQUEST,
	query,
})

export const searchCollectionsSuccess = data => ({
	type: t.SEARCH_COLLECTIONS_SUCCESS,
	payload: data,
})

export const searchCollectionsFailure = (errorMsg = error.connect) => ({
	type: t.SEARCH_COLLECTIONS_FAILURE,
	payload: {
		errorMsg,
	},
	error: true,
})

export const searchCollections = query => {
	return dispatch => {
		dispatch(searchCollectionsRequest(query))

		return searchCollectionsApi(query)
			.then(res => {
				if (checkResponse(res)) {
					dispatch(searchCollectionsSuccess(res.collections))
				} else {
					dispatch(searchCollectionsFailure(res.message || error.request))
				}
			})
			.catch(error => {
				dispatch(searchCollectionsFailure())
				console.log(error)
			})
	}
}
