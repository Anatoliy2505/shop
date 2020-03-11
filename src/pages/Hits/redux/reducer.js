import * as t from './actionTypes'

export const initialState = {
	data: null,
	isLoading: false,
	errorMsg: null,
}

export default (state = initialState, action) => {
	switch (action.type) {
		case t.GET_HITS_CATEGORIES_REQUEST:
			return {
				...state,
				isLoading: true,
				errorMsg: null,
			}
		case t.GET_HITS_CATEGORIES_SUCCESS:
			return {
				...state,
				data: action.payload,
				isLoading: false,
			}
		case t.GET_HITS_CATEGORIES_FAILURE:
			return {
				...state,
				errorMsg: action.payload.errorMsg,
				isLoading: false,
			}
		default:
			return state
	}
}
