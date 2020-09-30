import * as t from './actionTypes'
import { error } from './constants'
import {
	createSlideApi,
	updateSlideApi,
	removeSlideApi,
	getAllSlidesApi,
} from '../../../../../utils/api/adminApi'

import { action } from '../../../../../utils/helpers/action'
import { checkResponse } from '../../../../../utils/helpers/checkResponse'

export const createSlide = (data, setToast, reset) =>
	action(data, setToast, createSlideApi, reset)

export const updateSlide = (data, setToast, reset) =>
	action(data, setToast, updateSlideApi, reset)

export const removeSlide = (data, setToast, reset) =>
	action(data, setToast, removeSlideApi, reset)

export const getAllSlidesRequest = () => ({
	type: t.GET_ALL_SLIDES_REQUEST,
})

export const getAllSlidesSuccess = slides => ({
	type: t.GET_ALL_SLIDES_SUCCESS,
	slides,
})

export const getAllSlidesFailure = (errorMsg = error.connect) => ({
	type: t.GET_ALL_SLIDES_FAILURE,
	payload: {
		errorMsg,
	},
	error: true,
})

export const getAllSlides = () => {
	return dispatch => {
		dispatch(getAllSlidesRequest())
		return getAllSlidesApi()
			.then(res => {
				if (checkResponse(res)) {
					dispatch(getAllSlidesSuccess(res.slides))
				} else {
					dispatch(getAllSlidesFailure(res.message || error.request))
				}
			})
			.catch(error => {
				dispatch(getAllSlidesFailure())
				console.log(error)
			})
	}
}
