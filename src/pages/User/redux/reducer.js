import * as t from './actionTypes'

const initialState = {
	user: null,
	address: null,
	isLoading: false,
	errorMsg: null,
}

export default (state = initialState, action) => {
	switch (action.type) {
		case t.GET_USER_DATA_REQEST:
			return {
				...state,
				errorMsg: null,
				isLoading: true,
			}
		case t.GET_USER_DATA_SUCCESS:
			return {
				...state,
				user: action.payload.user,
				address: action.payload.address,
				isLoading: false,
			}
		case t.GET_USER_DATA_FAILURE:
			return {
				...state,
				isLoading: false,
				errorMsg: action.payload.errorMsg,
			}
		case t.USER_DATA_RESET:
			return { ...initialState }
		default:
			return state
	}
}
