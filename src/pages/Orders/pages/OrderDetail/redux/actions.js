import * as t from './actionTypes'
import { errors } from './constants'
import { checkResponse } from '../../../../../utils/helpers/checkResponse'
import { getOrderApi } from '../../../../../utils/api/orderApi'
import { logoutSimpleAction } from '../../../../Auth/redux/actions'

export const getOrderRequest = () => dispatch =>
	dispatch({
		type: t.GET_ORDER_REQUEST,
	})

export const getOrderSuccess = ({ order, trackData }) => dispatch =>
	dispatch({
		type: t.GET_ORDER_SUCCESS,
		payload: {
			order,
			trackData,
		},
	})

export const getOrderFailure = errorMsg => dispatch =>
	dispatch({
		type: t.GET_ORDER_FAILURE,
		payload: {
			errorMsg,
		},
	})

export const getOrder = (orderNumber, setToast = () => {}) => {
	return dispatch => {
		dispatch(getOrderRequest())

		return getOrderApi(orderNumber)
			.then(res => {
				if (checkResponse(res)) {
					dispatch(
						getOrderSuccess({ order: res.order, trackData: res.trackData })
					)
				} else {
					dispatch(getOrderFailure(res.message))
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
				dispatch(getOrderFailure(errors.connect))
			})
	}
}
