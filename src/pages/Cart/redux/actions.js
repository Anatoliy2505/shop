import * as t from './actionTypes'
import { getProducsDataFromIds } from '../../../utils/api/cartApi'
import { checkResponse } from '../../../utils/helpers/checkResponse'

export const addProductToCart = (data, setToast) => dispatch => {
	try {
		dispatch({
			type: t.ADD_PRODUCT,
			product: data,
		})
		setToast({
			data: {
				type: 'success',
				title: 'Отлично!',
				message: 'Товар успешно добавлен в корзину',
			},
		})
	} catch (e) {
		console.log(e)
		setToast({
			data: {
				type: 'error',
				title: 'Что-то пошло не так',
				message: 'Возникла непредвиденная ошибка',
			},
		})
	}
}

export const addOneProductToCart = id => dispatch =>
	dispatch({
		type: t.ADD_ONE_PRODUCT,
		productId: id,
	})

export const subtractOneProductFromCart = id => dispatch =>
	dispatch({
		type: t.SUBTRACT_ONE_PRODUCT,
		productId: id,
	})

export const removeOneProductFromCart = id => dispatch =>
	dispatch({
		type: t.REMOVE_PRODUCT,
		productId: id,
	})

export const removeAllProductsFromCart = () => dispatch =>
	dispatch({
		type: t.REMOVE_ALL_PRODUCTS,
	})

export const getProductsDataRequest = () => ({
	type: t.GET_PRODUCTS_DATA_REQUEST,
})

export const getProductsDataSuccess = (productsData = []) => ({
	type: t.GET_PRODUCTS_DATA_SUCCESS,
	productsData,
})

export const getProductsDataFailure = errorMsg => ({
	type: t.GET_PRODUCTS_DATA_FAILURE,
	payload: {
		errorMsg,
	},
	error: true,
})

export const getProductsForCart = (productsIds, setToast) => {
	return dispatch => {
		dispatch(getProductsDataRequest())
		console.log(productsIds)
		return getProducsDataFromIds(productsIds)
			.then(res => {
				if (checkResponse(res)) {
					console.log(res.products)
					dispatch(getProductsDataSuccess(res.products))
				} else {
					dispatch(getProductsDataFailure(res.message))
					setToast({
						data: {
							type: 'error',
							title: 'Что-то пошло не так',
							message: res.message,
						},
					})
				}
			})
			.catch(error => {
				console.log(error)
				dispatch(getProductsDataFailure('Ошибка отправки данных на сервер'))
				setToast({
					data: {
						type: 'error',
						title: 'Что-то пошло не так',
						message: 'Ошибка отправки данных на сервер',
					},
				})
			})
	}
}

export const resetProductsData = () => dispatch =>
	dispatch({
		type: t.RESET_PRODUCTS_DATA,
	})
