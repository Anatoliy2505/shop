import * as t from './actionTypes'

const initialState = {
	slides: null,
	isLoading: false,
	errorMsg: null,
}

export default (state = initialState, action) => {
	switch (action.type) {
		case t.GET_ALL_SLIDES_REQUEST:
			return {
				...state,
				isLoading: true,
				errorMsg: null,
			}
		case t.GET_ALL_SLIDES_SUCCESS:
			return {
				...state,
				slides: action.slides,
				isLoading: false,
			}
		case t.GET_ALL_SLIDES_FAILURE:
			return {
				...state,
				errorMsg: action.payload.errorMsg,
				isLoading: false,
			}
		default:
			return state
	}
}
