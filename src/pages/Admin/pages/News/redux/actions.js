import * as t from './actionTypes'
import { error } from './constants'
import {
	createNewsApi,
	updateNewsApi,
	removeNewsApi,
	getAllNewsApi,
} from '../../../../../utils/api/adminApi'

import { action } from '../../../../../utils/helpers/action'
import { checkResponse } from '../../../../../utils/helpers/checkResponse'

export const createNews = (data, setToast, reset) =>
	action(data, setToast, createNewsApi, reset)

export const updateNews = (data, setToast, reset) =>
	action(data, setToast, updateNewsApi, reset)

export const removeNews = (data, setToast, reset) =>
	action(data, setToast, removeNewsApi, reset)

export const getAllNewsRequest = () => ({
	type: t.GET_ALL_NEWS_REQUEST,
})

export const getAllNewsSuccess = news => ({
	type: t.GET_ALL_NEWS_SUCCESS,
	news,
})

export const getAllNewsFailure = (errorMsg = error.connect) => ({
	type: t.GET_ALL_NEWS_FAILURE,
	payload: {
		errorMsg,
	},
	error: true,
})

export const getAllNews = () => {
	return dispatch => {
		dispatch(getAllNewsRequest())
		return getAllNewsApi()
			.then(res => {
				if (checkResponse(res)) {
					dispatch(getAllNewsSuccess(res.news))
				} else {
					dispatch(getAllNewsFailure(res.message || error.request))
				}
			})
			.catch(error => {
				dispatch(getAllNewsFailure())
				console.log(error)
			})
	}
}
