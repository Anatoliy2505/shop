import {
	LOG_IN,
	LOG_OUT,
	LOG_IN_FAIL,
	REMOVE_ERROR_MSG,
	LOG_IN_STARTED,
} from '../actions/sessionActions'

const initialState = {
	userId: localStorage.getItem('userId') || null,
	errorMsg: '',
	logInStarted: false,
}

export default (state = initialState, action) => {
	switch (action.type) {
		case LOG_IN_STARTED:
			return {
				...state,
				logInStarted: true,
			}
		case LOG_IN:
			return {
				...state,
				userId: action.payload,
				errorMsg: '',
				logInStarted: false,
			}
		case LOG_OUT:
			return {
				...state,
				userId: null,
				errorMsg: '',
			}
		case LOG_IN_FAIL:
			return {
				...state,
				userId: null,
				logInStarted: false,
				errorMsg: action.payload.errorMsg,
			}
		case REMOVE_ERROR_MSG:
			return {
				...state,
				errorMsg: '',
			}
		default:
			return state
	}
}
