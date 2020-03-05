import * as t from './actionTypes'
import { setAllCategoryForMain } from '../utils/helpers/setAllCategoryForMain'

import { createCatalogTree } from '../utils/helpers/createCatalogTree'

export const initialState = {
	sidebar: {
		data: null,
		isLoading: false,
		errorMsg: null,
	},
	catalog: {
		data: null,
		isLoading: false,
		errorMsg: null,
	},

	products: null,
	sale: null,
	hits: null,
}

export default (state = initialState, action) => {
	switch (action.type) {
		case t.GET_CATEGORIES_REQUEST:
			return {
				...state,
				sidebar: {
					...state.sidebar,
					isLoading: true,
					errorMsg: null,
				},
			}
		case t.GET_CATEGORIES_SUCCESS:
			return {
				...state,
				sidebar: {
					...state.sidebar,
					data: action.payload,
					isLoading: false,
				},
				catalog: {
					...state.catalog,
					data: createCatalogTree(action.payload),
				},
			}
		case t.GET_CATEGORIES_FAILURE:
			return {
				...state,
				sidebar: {
					...state.sidebar,
					isLoading: false,
					errorMsg: action.payload.errorMsg,
				},
			}
		case t.GET_ALL_CHILDREN_REQUEST:
			return {
				...state,
				catalog: {
					...state.catalog,
					isLoading: true,
					errorMsg: {
						...state.catalog.errorMsg,
						[action.payload.mainCat]: null,
					},
				},
			}
		case t.GET_ALL_CHILDREN_SUCCESS:
			return {
				...state,
				catalog: {
					...state.catalog,
					data: {
						...state.catalog.data,
						[action.payload.mainCat]: setAllCategoryForMain(
							state.catalog.data[action.payload.mainCat],
							action.payload.data,
							action.payload.mainCat
						),
					},
					isLoading: false,
				},
			}
		case t.GET_ALL_CHILDREN_FAILURE:
			return {
				...state,
				catalog: {
					...state.catalog,
					isLoading: false,
					errorMsg: {
						...state.catalog.errorMsg,
						[action.payload.mainCat]: action.payload.errorMsg,
					},
				},
			}
		default:
			return state
	}
}
