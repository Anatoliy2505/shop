import * as t from './actionTypes'

const initialState = {
	data: null,
	isLoading: false,
	errorMsg: null,
}

export default (state = initialState, action) => {
	switch (action.type) {
		case t.NEWS_GET_REQUEST:
			return {
				...state,
				errorMsg: null,
				isLoading: true,
			}
		case t.NEWS_GET_SUCCESS:
			return {
				...state,
				isLoading: false,
				data: action.payload,
			}
		case t.NEWS_GET_FAILURE:
			return {
				...state,
				isLoading: false,
				errorMsg: action.payload.errorMsg,
			}
		default:
			return state
	}
}
