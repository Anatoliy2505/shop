import * as t from './actionTypes'

export const initialState = {
	products: null,
	isLoading: false,
	errorMsg: null,
}

export default (state = initialState, action) => {
	switch (action.type) {
		case t.GET_PRODUCTS_REQUEST:
			return {
				products: null,
				isLoading: true,
				errorMsg: null,
			}
		case t.GET_PRODUCTS_SUCCESS:
			return {
				...state,
				products: action.payload.products,
				isLoading: false,
			}
		case t.GET_PRODUCTS_FAILURE:
			return {
				products: null,
				isLoading: false,
				errorMsg: action.payload.errorMsg,
			}
		case t.RESET:
			return {
				products: null,
				isLoading: false,
				errorMsg: null,
			}
		default:
			return state
	}
}
