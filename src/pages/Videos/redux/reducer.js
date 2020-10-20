import * as t from './actionTypes'

const initialState = {
	data: null,
	isLoading: false,
	errorMsg: null,
}

export default (state = initialState, action) => {
	switch (action.type) {
		case t.GET_VIDEO_REQUEST:
			return {
				data: null,
				isLoading: true,
				errorMsg: null,
			}
		case t.GET_VIDEO_SUCCESS:
			return {
				...state,
				data: action.videos,
				isLoading: false,
			}
		case t.GET_VIDEO_FAILURE:
			return {
				...state,
				isLoading: false,
				errorMsg: action.payload.errorMsg,
			}
		default:
			return state
	}
}
