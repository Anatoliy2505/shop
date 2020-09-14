import * as t from './actionTypes'
import { error } from './constants'
import { checkResponse } from '../../../utils/helpers/checkResponse'
import { getSaleApi } from '../../../utils/api/collectionApi'

export const getSaleCollectionsRequest = () => ({
	type: t.GET_SALE_COLLECTIONS_REQUEST,
})

export const getSaleCollectionsSuccess = collections => ({
	type: t.GET_SALE_COLLECTIONS_SUCCESS,
	collections,
})

export const getSaleCollectionsFailure = (errorMsg = error.connect) => ({
	type: t.GET_SALE_COLLECTIONS_FAILURE,
	payload: {
		errorMsg,
	},
	error: true,
})

export const getSaleCollections = () => {
	return dispatch => {
		dispatch(getSaleCollectionsRequest())
		return getSaleApi()
			.then(res => {
				if (checkResponse(res)) {
					dispatch(getSaleCollectionsSuccess(res.collections))
				} else {
					dispatch(getSaleCollectionsFailure(res.message || error.request))
				}
			})
			.catch(error => {
				dispatch(getSaleCollectionsFailure())
				console.log(error)
			})
	}
}
