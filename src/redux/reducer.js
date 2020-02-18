import * as t from './actionTypes'

export const initialState = {
	data: null,
	isLoading: false,
	errorMsg: null,
}

export default (state = initialState, action) => {
	switch (action.type) {
		case t.CATEGORIES_GET_REQUEST:
			return {
				...state,
				isLoading: true,
				errorMsg: null,
			}
		case t.CATEGORIES_GET_SUCCESS:
			return {
				data: action.payload,
				isLoading: false,
			}
		case t.CATEGORIES_GET_FAILURE:
			return {
				...state,
				isLoading: false,
				errorMsg: action.payload.errorMsg,
			}
		default:
			return state
	}
}
