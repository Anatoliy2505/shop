import * as t from './actionTypes'

export const initialState = {
	data: null,
	isLoading: false,
	queryStr: '',
	errorMsg: null,
}

export default (state = initialState, action) => {
	switch (action.type) {
		case t.SEARCH_COLLECTIONS_REQUEST:
			return {
				...state,
				isLoading: true,
				queryStr: action.query,
				errorMsg: null,
			}
		case t.SEARCH_COLLECTIONS_SUCCESS:
			return {
				...state,
				data: action.payload,
				isLoading: false,
			}
		case t.SEARCH_COLLECTIONS_FAILURE:
			return {
				...state,
				errorMsg: action.payload.errorMsg,
				isLoading: false,
			}
		default:
			return state
	}
}
