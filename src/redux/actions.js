import { getMainCategories } from '../utils/api/categoriesApi'
import { error } from './constants'
import * as t from './actionTypes'
import { createCatalogTree } from '../pages/Catalog/redux/actions'
import { createTree } from '../utils/helpers/createTree'

export const categoriesRequest = () => ({
	type: t.GET_MAIN_CATEGORIES_REQUEST,
})

export const categoriesSuccess = data => ({
	type: t.GET_MAIN_CATEGORIES_SUCCESS,
	payload: { data: createTree(data), dataRaw: data },
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
				if (res.ok) {
					dispatch(categoriesSuccess(res.groups))
					dispatch(createCatalogTree(createTree(res.groups)))
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
