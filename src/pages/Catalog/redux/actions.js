import { checkResponse } from '../utils/helpers/checkResponse'
import { getAll } from '../utils/api/categoriesApi'
import { error } from './constants'

import { catalogTree } from '../utils/helpers/catalogTree'
import * as t from './actionTypes'

export const categoriesRequest = () => ({
	type: t.CATEGORIES_GET_REQUEST,
})

export const categoriesSuccess = data => ({
	type: t.CATEGORIES_GET_SUCCESS,
	payload: data,
})

export const categoriesFailure = (errorMsg = error.connect) => ({
	type: t.CATEGORIES_GET_FAILURE,
	payload: {
		errorMsg,
	},
	error: true,
})

export const createCatalogTree = data => ({
	type: t.CREATE_TREE,
	payload: catalogTree(data),
})

export const getCategories = () => {
	return dispatch => {
		dispatch(categoriesRequest())

		return getAll()
			.then(res => {
				if (checkResponse(res)) {
					dispatch(categoriesSuccess(res.data))
					if (res.data.length > 0) {
						dispatch(createCatalogTree(res.data))
					}
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
