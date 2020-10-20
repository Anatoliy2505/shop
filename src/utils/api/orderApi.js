import { request } from '../helpers/network'

export const sendOrderApi = body =>
	request('api/order/createOrder', 'POST', body)

export const getOrdersApi = () => request('api/order/getUserOrders', 'GET')

export const getOrderApi = orderNumber =>
	request(`api/order/getUserOrder/${orderNumber}`, 'GET')

export const deletOrderApi = body =>
	request('api/order/createOrder', 'DELETE', body)
