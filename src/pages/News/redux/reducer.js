import * as t from './actionTypes'

const initialState = {
	data: null,
	isLoading: false,
	errorMsg: null,
}

export default (state = initialState, action) => {
	switch (action.type) {
		case t.GET_NEWS_REQUEST:
			return {
				...state,
				errorMsg: null,
				isLoading: true,
			}
		case t.GET_NEWS_SUCCESS:
			return {
				...state,
				isLoading: false,
				data: action.news,
			}
		case t.GET_NEWS_FAILURE:
			return {
				...state,
				isLoading: false,
				errorMsg: action.payload.errorMsg,
			}
		default:
			return state
	}
}
