import { checkResponse } from '../../../utils/helpers/checkResponse'
import { getSaleCategoriesApi } from '../../../utils/api/categoriesApi'
import { error } from './constants'
import * as t from './actionTypes'

export const saleCategoriesRequest = () => ({
	type: t.GET_SALE_CATEGORIES_REQUEST,
})

export const saleCategoriesSuccess = data => ({
	type: t.GET_SALE_CATEGORIES_SUCCESS,
	payload: data,
})

export const saleCategoriesFailure = (errorMsg = error.connect) => ({
	type: t.GET_SALE_CATEGORIES_FAILURE,
	payload: {
		errorMsg,
	},
	error: true,
})

export const getSaleCategories = () => {
	return dispatch => {
		dispatch(saleCategoriesRequest())
		return getSaleCategoriesApi()
			.then(res => {
				if (checkResponse(res)) {
					dispatch(saleCategoriesSuccess(res.data))
				} else {
					dispatch(saleCategoriesFailure(res.message || error.request))
				}
			})
			.catch(error => {
				dispatch(saleCategoriesFailure())
				console.log(error)
			})
	}
}
