import * as t from './actionTypes'
import { setParenstCategoriesToMain } from '../../../utils/helpers/setParenstCategoriesToMain'

import { createCatalogTree } from '../../../utils/helpers/createCatalogTree'

export const initialState = {
	data: null,
	isLoading: false,
	errorMsg: null,
}

export default (state = initialState, action) => {
	switch (action.type) {
		case t.CREATE_CATALOG_TREE:
			return {
				...state,
				data: createCatalogTree(action.payload),
			}
		case t.GET_PARENTS_CATEGORIES_REQUEST:
			return {
				...state,
				isLoading: true,
				errorMsg: {
					...state.errorMsg,
					[action.payload.mainCat]: null,
				},
			}
		case t.GET_PARENTS_CATEGORIES_SUCCESS:
			return {
				...state,
				data: {
					...state.data,
					[action.payload.mainCat]: setParenstCategoriesToMain(
						state.data[action.payload.mainCat],
						action.payload.data,
						action.payload.mainCat
					),
				},
				isLoading: false,
			}
		case t.GET_PARENTS_CATEGORIES_FAILURE:
			return {
				...state,
				errorMsg: {
					...state.errorMsg,
					[action.payload.mainCat]: action.payload.errorMsg,
				},
				isLoading: false,
			}
		default:
			return state
	}
}
