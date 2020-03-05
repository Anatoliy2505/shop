import { checkResponse } from '../utils/helpers/checkResponse'
import { getAll, getAllChildren } from '../utils/api/categoriesApi'
import { error } from './constants'
import * as t from './actionTypes'

export const categoriesRequest = () => ({
	type: t.GET_CATEGORIES_REQUEST,
})

export const categoriesSuccess = data => ({
	type: t.GET_CATEGORIES_SUCCESS,
	payload: data,
})

export const categoriesFailure = (errorMsg = error.connect) => ({
	type: t.GET_CATEGORIES_FAILURE,
	payload: {
		errorMsg,
	},
	error: true,
})

export const getAllMainCategories = () => {
	return dispatch => {
		dispatch(categoriesRequest())

		return getAll()
			.then(res => {
				if (checkResponse(res)) {
					dispatch(categoriesSuccess(res.data))
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

export const selectAllCategoriesRequest = mainCat => ({
	payload: { mainCat },
	type: t.GET_ALL_CHILDREN_REQUEST,
})

export const selectAllCategoriesSuccess = (data, mainCat) => ({
	type: t.GET_ALL_CHILDREN_SUCCESS,
	payload: {
		data,
		mainCat,
	},
})

export const selectAllCategoriesFailure = (
	mainCat,
	errorMsg = error.connect
) => ({
	type: t.GET_ALL_CHILDREN_FAILURE,
	payload: {
		mainCat,
		errorMsg,
	},
	error: true,
})

export const getAllChildrenCategories = mainCat => {
	return dispatch => {
		dispatch(selectAllCategoriesRequest(mainCat))
		return getAllChildren(mainCat)
			.then(res => {
				if (checkResponse(res)) {
					dispatch(selectAllCategoriesSuccess(res.data, mainCat))
				} else {
					dispatch(
						selectAllCategoriesFailure(mainCat, res.message || error.request)
					)
				}
			})
			.catch(error => {
				dispatch(selectAllCategoriesFailure(mainCat))
				console.log(error)
			})
	}
}
