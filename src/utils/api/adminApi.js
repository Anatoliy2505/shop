import { request } from '../helpers/network'

export const setGroup = body => request('api/group/setGroup', 'POST', body)

export const updateGroup = body => request('api/group/updateGroup', 'PUT', body)

export const removeGroup = body =>
	request('api/group/removeGroup', 'DELETE', body)

export const setCollection = body =>
	request('api/collection/setCollection', 'POST', body)

export const updateCollection = body =>
	request('api/collection/updateCollection', 'PUT', body)

export const removeCollection = body =>
	request('api/collection/removeCollection', 'DELETE', body)

export const removeRecommendationsApi = body =>
	request('api/collection/removeRecommendations', 'PUT', body)

export const addRecommendationsApi = body =>
	request('api/collection/addRecommendations', 'PUT', body)

export const setProduct = body =>
	request('api/product/setProduct', 'POST', body)

export const updateProduct = body =>
	request('api/product/updateProduct', 'PUT', body)

export const removeProduct = body =>
	request('api/product/removeProduct', 'DELETE', body)

export const getProductsFromCollection = collectionId =>
	request(`api/product/getProducts/${collectionId}`, 'GET')

export const getAllSlidesApi = () => request('api/slide/getAllSlides', 'GET')

export const createSlideApi = body =>
	request('api/slide/createSlide', 'POST', body)

export const updateSlideApi = body =>
	request('api/slide/updateSlide', 'PUT', body)

export const removeSlideApi = body =>
	request('api/slide/removeSlide', 'DELETE', body)

export const getAllNewsApi = () => request('api/news/getAllNews', 'GET')

export const createNewsApi = body =>
	request('api/news/createNews', 'POST', body)

export const updateNewsApi = body => request('api/news/updateNews', 'PUT', body)

export const removeNewsApi = body =>
	request('api/news/removeNews', 'DELETE', body)

export const createVideoApi = body =>
	request('api/video/createVideo', 'POST', body)

export const updateVideoApi = body =>
	request('api/video/updateVideo', 'PUT', body)

export const deleteVideoApi = body =>
	request('api/video/removeVideo', 'DELETE', body)

export const getAllVideosApi = () => request('api/video/getAllVideos', 'GET')

export const getOrderByNumberApi = orderNumber =>
	request(`api/order/getOrderByNumber/${orderNumber}`, 'GET')

export const getOrdersByEmailApi = email =>
	request(`api/order/getOrdersByEmail/${email}`, 'GET')

export const getNotRegUsersOrdersApi = () =>
	request(`api/order/getNotRegUsersOrders`, 'GET')

export const getOrdersBySurnameApi = surname =>
	request(`api/order/getOrdersBySurname`, 'POST', { surname })

export const changeOrderStatusApi = body =>
	request('api/order/changeOrderStatus', 'PUT', body)

export const deleteProductFromOrdersApi = body =>
	request('api/order/deleteProductFromOrder', 'DELETE', body)

export const deleteOrderApi = body =>
	request('api/order/deleteOrder', 'DELETE', body)
