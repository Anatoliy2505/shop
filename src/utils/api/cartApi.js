import { request } from '../helpers/network'

export const getProducsDataFromIds = body =>
	request('api/product/getProductsForCart', 'POST', body)
