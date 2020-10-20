import * as t from './actionTypes'
import { errors } from './constants'
import { checkResponse } from '../../../../../utils/helpers/checkResponse'
import { getOrdersApi } from '../../../../../utils/api/orderApi'
import { logoutSimpleAction } from '../../../../Auth/redux/actions'

export const getOrdersRequest = () => dispatch =>
	dispatch({
		type: t.GET_ORDERS_REQUEST,
	})

export const getOrdersSuccess = orders => dispatch =>
	dispatch({
		type: t.GET_ORDERS_SUCCESS,
		orders,
	})

export const getOrdersFailure = errorMsg => dispatch =>
	dispatch({
		type: t.GET_ORDERS_FAILURE,
		payload: {
			errorMsg,
		},
	})

export const getOrders = (setToast = () => {}) => {
	return dispatch => {
		dispatch(getOrdersRequest())

		return getOrdersApi()
			.then(res => {
				if (checkResponse(res)) {
					dispatch(getOrdersSuccess(res.orders))
				} else {
					dispatch(getOrdersFailure(res.message))
					if (res.auth === false) {
						setToast({
							data: {
								type: 'error',
								title: 'Ошибка!',
								message: res.message || errors.auth,
							},
						})
						return dispatch(logoutSimpleAction())
					}
				}
			})
			.catch(e => {
				console.log(e)
				dispatch(getOrdersFailure(errors.connect))
			})
	}
}
