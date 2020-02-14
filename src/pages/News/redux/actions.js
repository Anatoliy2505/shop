import { postLogInfo } from '../../utils/api/session'
import { errorLog } from './constants'

export const LOG_IN_STARTED = 'LOG_IN_STARTED'
export const LOG_IN = 'LOG_IN'
export const LOG_OUT = 'LOG_OUT'
export const LOG_IN_FAIL = 'LOG_IN_FAIL'
export const REMOVE_ERROR_MSG = 'REMOVE_ERROR_MSG'

export function logIn(params) {
	return dispatch => {
		dispatch({ type: LOG_IN_STARTED })
		postLogInfo(params)
			.then(res => {
				if (res.status === 'ok') {
					dispatch({
						type: LOG_IN,
						payload: res.data.id,
					})
					localStorage.setItem('userId', res.data.id)
				} else {
					dispatch({
						type: LOG_IN_FAIL,
						payload: {
							errorMsg: errorLog[res.message],
						},
						error: true, // https://github.com/redux-utilities/flux-standard-action
					})
				}
			})
			.catch(error => {
				dispatch({
					type: LOG_IN_FAIL,
					payload: {
						errorMsg: errorLog.server_connection_failed,
					},
					error: true, // https://github.com/redux-utilities/flux-standard-action
				})
				console.warn('postLogInfo error ', error)
			})
	}
}

export function logOut() {
	localStorage.removeItem('userId')
	return {
		type: LOG_OUT,
	}
}

export function removeErorroMsg() {
	return {
		type: REMOVE_ERROR_MSG,
	}
}

export function logInStarted() {
	return {
		type: LOG_IN_STARTED,
	}
}
