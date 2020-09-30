import * as t from './actionTypes'

const initialState = {
	news: null,
	isLoading: false,
	errorMsg: null,
}

export default (state = initialState, action) => {
	switch (action.type) {
		case t.GET_ALL_NEWS_REQUEST:
			return {
				...state,
				isLoading: true,
				errorMsg: null,
			}
		case t.GET_ALL_NEWS_SUCCESS:
			return {
				...state,
				news: action.news,
				isLoading: false,
			}
		case t.GET_ALL_NEWS_FAILURE:
			return {
				...state,
				errorMsg: action.payload.errorMsg,
				isLoading: false,
			}
		default:
			return state
	}
}
