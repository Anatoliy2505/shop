import * as t from './actionTypes'

const initialState = {
	isAuth: !!localStorage.getItem('token'),
	user: {
		userId: localStorage.getItem('userId') || null,
		email: localStorage.getItem('email') || null,
		name: localStorage.getItem('name') || null,
		surname: localStorage.getItem('surname') || null,
		role: localStorage.getItem('role') || null,
		isCheck: !!localStorage.getItem('check'),
	},
	isLoading: false,
	errorMsg: null,
}

export default (state = initialState, action) => {
	switch (action.type) {
		case t.REGISTRATION_POST_REQUEST:
			return {
				...state,
				isLoading: true,
				errorMsg: null,
			}
		case t.REGISTRATION_POST_SUCCESS:
			return {
				...state,
				isAuth: true,
				isLoading: false,
				user: {
					userId: action.payload.userId,
					email: action.payload.email,
					name: action.payload.name,
					surname: action.payload.surname,
					role: action.payload.role,
					isCheck: action.payload.check,
				},
			}
		case t.REGISTRATION_POST_FAILURE:
			return {
				...state,
				errorMsg: action.payload.errorMsg,
				isLoading: false,
			}
		case t.LOGIN_POST_REQUEST:
			return {
				...state,
				isLoading: true,
				errorMsg: null,
			}
		case t.LOGIN_POST_SUCCESS:
			return {
				...state,
				isAuth: true,
				isLoading: false,
				user: {
					userId: action.payload.userId,
					name: action.payload.name,
					surname: action.payload.surname,
					role: action.payload.role,
					isCheck: action.payload.check,
				},
			}
		case t.LOGIN_POST_FAILURE:
			return {
				...state,
				errorMsg: action.payload.errorMsg,
				isLoading: false,
			}
		case t.LOGOUT:
			return {
				...state,
				isAuth: false,
				user: {
					userId: null,
					name: null,
					surname: null,
					role: null,
					isCheck: false,
				},
			}
		default:
			return state
	}
}
