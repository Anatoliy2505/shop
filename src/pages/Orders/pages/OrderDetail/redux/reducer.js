import * as t from './actionTypes'

const initialState = {
	data: null,
	isLoading: false,
	errorMsg: null,
}

export default (state = initialState, action) => {
	switch (action.type) {
		case t.GET_ORDER_REQUEST:
			return {
				...state,
				data: null,
				isLoading: true,
				errorMsg: null,
			}
		case t.GET_ORDER_SUCCESS:
			return {
				...state,
				data: { ...action.payload.order, trackData: action.payload.trackData },
				isLoading: false,
			}
		case t.GET_ORDER_FAILURE:
			return {
				...state,
				isLoading: false,
				errorMsg: action.payload.errorMsg,
			}
		default:
			return state
	}
}
