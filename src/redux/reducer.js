import * as t from './actionTypes'

export const initialState = {
	data: null,
	rawData: null,
	isLoading: false,
	errorMsg: null,
}

export default (state = initialState, action) => {
	switch (action.type) {
		case t.GET_MAIN_CATEGORIES_REQUEST:
			return {
				...state,
				isLoading: true,
				errorMsg: null,
			}
		case t.GET_MAIN_CATEGORIES_SUCCESS:
			return {
				...state,
				data: action.payload.data,
				rawData: action.payload.dataRaw,
				isLoading: false,
			}
		case t.GET_MAIN_CATEGORIES_FAILURE:
			return {
				...state,
				isLoading: false,
				errorMsg: action.payload.errorMsg,
			}
		default:
			return state
	}
}
