import { checkResponse } from '../../../utils/helpers/checkResponse'
import { getParentsCategories } from '../../../utils/api/categoriesApi'
import { error } from './constants'
import * as t from './actionTypes'

export const createCatalogTree = data => ({
	type: t.CREATE_CATALOG_TREE,
	payload: data,
})

export const selectParentsCategoriesRequest = mainCat => ({
	payload: { mainCat },
	type: t.GET_PARENTS_CATEGORIES_REQUEST,
})

export const selectParentsCategoriesSuccess = (data, mainCat) => ({
	type: t.GET_PARENTS_CATEGORIES_SUCCESS,
	payload: {
		data,
		mainCat,
	},
})

export const selectParentsCategoriesFailure = (
	mainCat,
	errorMsg = error.connect
) => ({
	type: t.GET_PARENTS_CATEGORIES_FAILURE,
	payload: {
		mainCat,
		errorMsg,
	},
	error: true,
})

export const getAllParentsCategories = mainCat => {
	return dispatch => {
		dispatch(selectParentsCategoriesRequest(mainCat))
		return getParentsCategories(mainCat)
			.then(res => {
				if (checkResponse(res)) {
					dispatch(selectParentsCategoriesSuccess(res.data, mainCat))
				} else {
					dispatch(
						selectParentsCategoriesFailure(
							mainCat,
							res.message || error.request
						)
					)
				}
			})
			.catch(error => {
				dispatch(selectParentsCategoriesFailure(mainCat))
				console.log(error)
			})
	}
}
