import * as t from './actionTypes'
import { error } from './constants'
import {
	removeProduct,
	updateProduct,
	setProduct,
	getProductsFromCollection,
} from '../../../../../utils/api/adminApi'

import { action } from '../../../../../utils/helpers/action'
import { checkResponse } from '../../../../../utils/helpers/checkResponse'

export const setNewProduct = (data, setToast, reset) =>
	action(data, setToast, setProduct, reset)

export const changeProduct = (data, setToast, reset) =>
	action(data, setToast, updateProduct, reset)

export const deleteProduct = (data, setToast, reset) =>
	action(data, setToast, removeProduct, reset)

export const getProductsRequest = () => ({
	type: t.GET_PRODUCTS_REQUEST,
})

export const getProductsSuccess = products => ({
	type: t.GET_PRODUCTS_SUCCESS,
	payload: {
		products,
	},
})

export const getProductsFailure = (errorMsg = error.connect) => ({
	type: t.GET_PRODUCTS_FAILURE,
	payload: {
		errorMsg,
	},
	error: true,
})

export const getProducts = collectionId => {
	return dispatch => {
		dispatch(getProductsRequest())
		return getProductsFromCollection(collectionId)
			.then(res => {
				if (checkResponse(res)) {
					dispatch(getProductsSuccess(res.products))
				} else {
					dispatch(getProductsFailure(res.message))
				}
			})
			.catch(error => {
				dispatch(getProductsFailure())
				console.log(error)
			})
	}
}

export const resetProducts = () => dispatch => {
	dispatch({
		type: t.RESET,
	})
}
