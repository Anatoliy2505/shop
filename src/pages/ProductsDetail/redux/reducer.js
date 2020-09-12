import * as t from './actionTypes'

export const initialState = {
	collection: null,
	products: null,
	recommendation: null,
	isLoading: false,
	errorMsg: null,
}

export default (state = initialState, action) => {
	switch (action.type) {
		case t.GET_FULL_COLLECTION_DATA_REQUEST:
			return {
				...state,
				collection: null,
				products: null,
				recommendation: null,
				isLoading: true,
				errorMsg: null,
			}
		case t.GET_FULL_COLLECTION_DATA_SUCCESS:
			return {
				...state,
				collection: action.payload.collection,
				products: action.payload.products,
				recommendation: action.payload.recommendation,
				isLoading: false,
			}
		case t.GET_FULL_COLLECTION_DATA_FAILURE:
			return {
				...state,
				isLoading: false,
				errorMsg: action.payload.errorMsg,
			}
		default:
			return state
	}
}
