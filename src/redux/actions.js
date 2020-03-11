import { checkResponse } from '../utils/helpers/checkResponse'
import { getMainCategories } from '../utils/api/categoriesApi'
import { error } from './constants'
import * as t from './actionTypes'
import { createCatalogTree } from '../pages/Catalog/redux/actions'

export const categoriesRequest = () => ({
	type: t.GET_MAIN_CATEGORIES_REQUEST,
})

export const categoriesSuccess = data => ({
	type: t.GET_MAIN_CATEGORIES_SUCCESS,
	payload: data,
})

export const categoriesFailure = (errorMsg = error.connect) => ({
	type: t.GET_MAIN_CATEGORIES_FAILURE,
	payload: {
		errorMsg,
	},
	error: true,
})

export const getAllMainCategories = () => {
	return dispatch => {
		dispatch(categoriesRequest())

		return getMainCategories()
			.then(res => {
				if (checkResponse(res)) {
					dispatch(categoriesSuccess(res.data))
					dispatch(createCatalogTree(res.data))
				} else {
					dispatch(categoriesFailure(res.message))
				}
			})
			.catch(error => {
				dispatch(categoriesFailure())
				console.log(error)
			})
	}
}
