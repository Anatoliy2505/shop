import * as t from './actionTypes'
import { errors } from './constants'
import { checkResponse } from '../../../utils/helpers/checkResponse'
import { getVideosApi } from '../../../utils/api/videoApi'
import { getAllVideosApi } from '../../../utils/api/adminApi'

export const getVideoRequest = () => ({
	type: t.GET_VIDEO_REQUEST,
})

export const getVideoSuccess = videos => ({
	type: t.GET_VIDEO_SUCCESS,
	videos,
})

export const getVideoFailure = (errorMsg = errors.connect) => ({
	type: t.GET_VIDEO_FAILURE,
	payload: {
		errorMsg,
	},
	error: true,
})

export const getVideos = () => {
	return dispatch => {
		dispatch(getVideoRequest())
		return getVideosApi()
			.then(res => {
				if (checkResponse(res)) {
					dispatch(getVideoSuccess(res.videos))
				} else {
					dispatch(getVideoFailure(res.message || errors.request))
				}
			})
			.catch(error => {
				dispatch(getVideoFailure())
				console.log(error)
			})
	}
}

export const getAllVideosAction = () => {
	return dispatch => {
		dispatch(getVideoRequest())
		return getAllVideosApi()
			.then(res => {
				if (checkResponse(res)) {
					dispatch(getVideoSuccess(res.videos))
				} else {
					dispatch(getVideoFailure(res.message || errors.request))
				}
			})
			.catch(error => {
				dispatch(getVideoFailure())
				console.log(error)
			})
	}
}
