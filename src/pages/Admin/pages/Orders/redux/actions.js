import { checkResponse } from '../../../../../utils/helpers/checkResponse'
import {
	getOrderByNumberApi,
	getOrdersByEmailApi,
	getNotRegUsersOrdersApi,
	getOrdersBySurnameApi,
	changeOrderStatusApi,
	deleteProductFromOrdersApi,
	deleteOrderApi,
} from '../../../../../utils/api/adminApi'
import { error } from './constants'

import { logoutSimpleAction } from '../../../../Auth/redux/actions'
import * as t from './actionTypes'

export const getOrdersRequest = () => ({
	type: t.GET_ORDERS_FOR_ADMIN_REQUEST,
})

export const getOrdersSuccess = orders => ({
	type: t.GET_ORDERS_FOR_ADMIN_SUCCESS,
	orders,
})

export const getOrdersByNumberSuccess = order => ({
	type: t.GET_ORDER_BY_NUMBER_SUCCESS,
	order,
})

export const getOrdersFailure = (errorMsg = error.connect) => ({
	type: t.GET_ORDERS_FOR_ADMIN_FAILURE,
	payload: {
		errorMsg,
	},
	error: true,
})

export const getOrdersByNumberAction = (number, setToast = () => {}) => {
	return dispatch => {
		dispatch(getOrdersRequest())

		return getOrderByNumberApi(number)
			.then(res => {
				if (checkResponse(res)) {
					dispatch(getOrdersByNumberSuccess(res.order))
				} else {
					if (res.auth === false) {
						dispatch(logoutSimpleAction())
						setToast({
							data: {
								type: 'error',
								title: 'Ошибка!',
								message: res.message || error.request,
							},
						})
					}
					dispatch(getOrdersFailure(res.message || error.request))
				}
			})
			.catch(error => {
				dispatch(getOrdersFailure())
			})
	}
}

const getOrders = (requestApi, data = '', setToast = () => {}) => dispatch => {
	dispatch(getOrdersRequest())
	return requestApi(data)
		.then(res => {
			if (checkResponse(res)) {
				dispatch(getOrdersSuccess(res.orders))
			} else {
				if (res.auth === false) {
					dispatch(logoutSimpleAction())
					setToast({
						data: {
							type: 'error',
							title: 'Ошибка!',
							message: res.message || error.request,
						},
					})
				}
				dispatch(getOrdersFailure(res.message || error.request))
			}
		})
		.catch(error => {
			dispatch(getOrdersFailure())
		})
}

export const action = (
	data,
	setToast,
	requestApi,
	getNewData = () => {},
	setIsBlocked = () => {}
) => dispatch => {
	setToast({
		data: {
			message: 'Подождите, данные отправляются',
		},
		duration: 1000,
	})
	return requestApi(data)
		.then(res => {
			if (!checkResponse) {
				if (res.auth === false) {
					dispatch(logoutSimpleAction())
				}
				setIsBlocked(false)
				return setToast({
					data: {
						type: 'error',
						title: 'Ошибка!',
						message: res.message || error.request,
					},
				})
			}
			setToast({
				data: {
					type: 'success',
					title: 'Отлично!',
					message: res.message,
				},
			})
			getNewData()
		})
		.catch(() => {
			setToast({
				data: {
					type: 'error',
					title: 'Ошибка!',
					message: error.connect,
				},
			})
		})
}

export const getOrdersByEmailAction = (email, setToast) =>
	getOrders(getOrdersByEmailApi, email, setToast)

export const getOrdersBySurnameAction = (surname, setToast) =>
	getOrders(getOrdersBySurnameApi, surname, setToast)

export const getOrdersByNotRegUsersAction = setToast =>
	getOrders(getNotRegUsersOrdersApi, '', setToast)

export const changeOrderStatusAction = (
	data,
	setToast,
	getNewData,
	setIsBlocked
) => action(data, setToast, changeOrderStatusApi, getNewData, setIsBlocked)

export const deleteProductFromOrdersAction = (data, setToast, getNewData) =>
	action(data, setToast, deleteProductFromOrdersApi, getNewData)

export const deleteOrderAction = (data, setToast, getNewData) =>
	action(data, setToast, deleteOrderApi, getNewData)
