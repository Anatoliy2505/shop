import * as t from './actionTypes'
import { checkResponse } from '../../../../../utils/helpers/checkResponse'
import { getSlidesApi } from '../../../../../utils/api/sliderApi'
import { error } from './constants'

export const getSlidesRequest = () => ({
	type: t.GET_SLIDES_REQUEST,
})

export const getSlidesSuccess = slides => ({
	type: t.GET_SLIDES_SUCCESS,
	slides,
})

export const getSlidesFailure = (errorMsg = error.connect) => ({
	type: t.GET_SLIDES_FAILURE,
	payload: {
		errorMsg,
	},
	error: true,
})

export const getSlides = () => {
	return dispatch => {
		dispatch(getSlidesRequest())
		return getSlidesApi()
			.then(res => {
				if (checkResponse(res)) {
					dispatch(getSlidesSuccess(res.slides))
				} else {
					dispatch(getSlidesFailure(res.message || error.request))
				}
			})
			.catch(error => {
				dispatch(getSlidesFailure())
				console.log(error)
			})
	}
}
