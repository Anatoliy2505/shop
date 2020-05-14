import { registration, login } from '../../../utils/api/authApi'
import { error } from './constants'

import * as t from './actionTypes'

export const registrationRequest = () => ({
	type: t.REGISTRATION_POST_REQUEST,
})

export const registrationSuccess = data => ({
	type: t.REGISTRATION_POST_SUCCESS,
	payload: data,
})

export const registrationFailure = (errorMsg = error.connect) => ({
	type: t.REGISTRATION_POST_FAILURE,
	payload: {
		errorMsg,
	},
	error: true,
})

export const loginRequest = () => ({
	type: t.LOGIN_POST_REQUEST,
})

export const loginSuccess = data => ({
	type: t.LOGIN_POST_SUCCESS,
	payload: data,
})

export const loginFailure = (errorMsg = error.connect) => ({
	type: t.LOGIN_POST_FAILURE,
	payload: {
		errorMsg,
	},
	error: true,
})

export const registrationAction = (body, setMessage) => {
	return dispatch => {
		dispatch(registrationRequest())

		return registration(body)
			.then(res => {
				if (res.ok) {
					dispatch(registrationSuccess(res.data))
					localStorage.setItem('token', res.token)
					for (let key in res.data) {
						localStorage.setItem(key, res.data[key])
					}
					setMessage({
						type: 'success',
						title: 'Отлично!',
						message: res.message,
					})
				} else {
					dispatch(registrationFailure(res.message))
					setMessage({ type: 'error', title: 'Ошибка!', message: res.message })
				}
			})
			.catch(() => {
				dispatch(registrationFailure())
				setMessage({ type: 'error', title: 'Ошибка!', message: error.connect })
			})
	}
}

export const loginAction = body => {
	return dispatch => {
		dispatch(loginRequest())

		return login(body)
			.then(res => {
				if (res.ok) {
					dispatch(loginSuccess(res.data))
					localStorage.setItem('token', res.token)
					for (let key in res.data) {
						localStorage.setItem(key, res.data[key])
					}
				} else {
					dispatch(loginFailure(res.message))
				}
			})
			.catch(() => {
				dispatch(loginFailure())
			})
	}
}

export const logoutAction = () => {
	return dispatch => {
		localStorage.clear()
		dispatch({ type: t.LOGOUT })
	}
}
