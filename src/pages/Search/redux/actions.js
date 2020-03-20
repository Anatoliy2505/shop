import { checkResponse } from '../../../utils/helpers/checkResponse'
import { getSearchCategoriesApi } from '../../../utils/api/categoriesApi'
import { error } from './constants'
import * as t from './actionTypes'

export const searchCategoriesRequest = () => ({
	type: t.GET_SEARCH_CATEGORIES_REQUEST,
})

export const searchCategoriesSuccess = data => ({
	type: t.GET_SEARCH_CATEGORIES_SUCCESS,
	payload: data,
})

export const searchCategoriesFailure = (errorMsg = error.connect) => ({
	type: t.GET_SEARCH_CATEGORIES_FAILURE,
	payload: {
		errorMsg,
	},
	error: true,
})

export const getSearchCategories = query => {
	return dispatch => {
		dispatch(searchCategoriesRequest())
		return getSearchCategoriesApi(query)
			.then(res => {
				const newRes = { status: 'ok', data: res }
				if (checkResponse(newRes)) {
					dispatch(searchCategoriesSuccess(newRes.data))
				} else {
					dispatch(searchCategoriesFailure(newRes.message || error.request))
				}
			})
			.catch(error => {
				dispatch(searchCategoriesFailure())
				console.log(error)
			})
	}
}
