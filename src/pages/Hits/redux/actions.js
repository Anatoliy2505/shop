import { checkResponse } from '../../../utils/helpers/checkResponse'
import { getHitsCategoriesApi } from '../../../utils/api/categoriesApi'
import { error } from './constants'
import * as t from './actionTypes'

export const hitsCategoriesRequest = () => ({
	type: t.GET_HITS_CATEGORIES_REQUEST,
})

export const hitsCategoriesSuccess = data => ({
	type: t.GET_HITS_CATEGORIES_SUCCESS,
	payload: data,
})

export const hitsCategoriesFailure = (errorMsg = error.connect) => ({
	type: t.GET_HITS_CATEGORIES_FAILURE,
	payload: {
		errorMsg,
	},
	error: true,
})

export const getHitsCategories = () => {
	return dispatch => {
		dispatch(hitsCategoriesRequest())
		return getHitsCategoriesApi()
			.then(res => {
				if (checkResponse(res)) {
					dispatch(hitsCategoriesSuccess(res.data))
				} else {
					dispatch(hitsCategoriesFailure(res.message || error.request))
				}
			})
			.catch(error => {
				dispatch(hitsCategoriesFailure())
				console.log(error)
			})
	}
}
