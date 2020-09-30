import * as t from './actionTypes'
import { error } from './constants'
import { registration, login } from '../../../utils/api/authApi'

import { checkResponse } from '../../../utils/helpers/checkResponse'
import { userDataReset } from '../../User/redux/actions'

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

export const registrationAction = (body, setToast) => {
	return dispatch => {
		dispatch(registrationRequest())
		setToast({
			data: {
				message: 'Подождите, данные отправляются',
			},
			duration: 1000,
		})

		return registration(body)
			.then(res => {
				if (checkResponse(res)) {
					dispatch(registrationSuccess(res.data))
					localStorage.setItem('token', res.token)
					for (let key in res.data) {
						localStorage.setItem(key, res.data[key])
					}
					setToast({
						data: {
							type: 'success',
							title: 'Отлично!',
							message: res.message,
						},
					})
				} else {
					dispatch(registrationFailure(res.message))
					setToast({
						data: { type: 'error', title: 'Ошибка!', message: res.message },
					})
				}
			})
			.catch(() => {
				dispatch(registrationFailure())
				setToast({
					data: { type: 'error', title: 'Ошибка!', message: error.connect },
				})
			})
	}
}

export const loginAction = (body, setToast) => {
	return dispatch => {
		dispatch(loginRequest())
		setToast({
			data: {
				message: 'Подождите, данные отправляются',
			},
			duration: 1000,
		})
		return login(body)
			.then(res => {
				if (res.ok) {
					dispatch(loginSuccess(res.data))
					localStorage.setItem('token', res.token)
					setToast({
						data: {
							type: 'success',
							title: 'Отлично!',
							message: res.message,
						},
					})
					for (let key in res.data) {
						localStorage.setItem(key, res.data[key])
					}
				} else {
					dispatch(loginFailure(res.message))
					setToast({
						data: { type: 'error', title: 'Ошибка!', message: res.message },
					})
				}
			})
			.catch(() => {
				dispatch(loginFailure())
				setToast({
					data: { type: 'error', title: 'Ошибка!', message: error.connect },
				})
			})
	}
}

export const logoutAction = setToast => {
	setToast({
		data: {
			type: 'success',
			title: 'Отлично!',
			message: 'Вы успешно вышли из кабинета',
		},
	})
	return dispatch => {
		const localStorageKeys = ['id', 'token', 'email', 'name', 'surname', 'role']
		for (let val of localStorageKeys) {
			localStorage.removeItem(val)
		}
		dispatch(userDataReset())
		dispatch({ type: t.LOGOUT })
	}
}

export const logoutSimpleAction = () => dispatch => {
	const localStorageKeys = ['id', 'token', 'email', 'name', 'surname', 'role']
	for (let val of localStorageKeys) {
		localStorage.removeItem(val)
	}
	dispatch(userDataReset())
	dispatch({ type: t.LOGOUT })
}
