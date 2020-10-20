import * as t from './actionTypes'

const initialState = {
	data: null,
	isLoading: false,
	errorMsg: null,
}

export default (state = initialState, action) => {
	switch (action.type) {
		case t.GET_ORDERS_REQUEST:
			return {
				...state,
				isLoading: true,
				errorMsg: null,
			}
		case t.GET_ORDERS_SUCCESS:
			return {
				...state,
				data: action.orders,
				isLoading: false,
			}
		case t.GET_ORDERS_FAILURE:
			return {
				...state,
				isLoading: false,
				errorMsg: action.payload.errorMsg,
			}
		default:
			return state
	}
}
