import * as t from './actionTypes'

export const initialState = {
	data: null,
	isLoading: false,
	errorMsg: null,
}

export default (state = initialState, action) => {
	switch (action.type) {
		case t.GET_HITS_COLLECTIONS_REQUEST:
			return {
				...state,
				isLoading: true,
				errorMsg: null,
			}
		case t.GET_HITS_COLLECTIONS_SUCCESS:
			return {
				...state,
				data: action.collections,
				isLoading: false,
			}
		case t.GET_HITS_COLLECTIONS_FAILURE:
			return {
				...state,
				errorMsg: action.payload.errorMsg,
				isLoading: false,
			}
		default:
			return state
	}
}
