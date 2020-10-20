import * as t from './actionTypes'

const initialState = {
	orders: [],
	isLoading: false,
	errorMsg: null,
}

export default (state = initialState, action) => {
	switch (action.type) {
		case t.GET_ORDERS_FOR_ADMIN_REQUEST:
			return {
				...state,
				orders: [],
				errorMsg: null,
				isLoading: true,
			}
		case t.GET_ORDER_BY_NUMBER_SUCCESS:
			return {
				...state,
				isLoading: false,
				orders: [action.order],
			}
		case t.GET_ORDERS_FOR_ADMIN_FAILURE:
			return {
				...state,
				isLoading: false,
				errorMsg: action.payload.errorMsg,
			}
		case t.GET_ORDERS_FOR_ADMIN_SUCCESS:
			return {
				...state,
				isLoading: false,
				orders: action.orders,
			}
		case t.RESET_ORDERS:
			return {
				...state,
				isLoading: false,
				errorMsg: null,
			}
		default:
			return state
	}
}
