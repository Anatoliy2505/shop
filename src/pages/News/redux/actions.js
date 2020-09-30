import { checkResponse } from '../../../utils/helpers/checkResponse'
import { getNewsApi } from '../../../utils/api/newsApi'
import { error } from './constants'

import * as t from './actionTypes'

export const getNewsRequest = () => ({
	type: t.GET_NEWS_REQUEST,
})

export const getNewsSuccess = news => ({
	type: t.GET_NEWS_SUCCESS,
	news,
})

export const getNewsFailure = (errorMsg = error.connect) => ({
	type: t.GET_NEWS_FAILURE,
	payload: {
		errorMsg,
	},
	error: true,
})

export const getNews = () => {
	return dispatch => {
		dispatch(getNewsRequest())

		return getNewsApi()
			.then(res => {
				if (checkResponse(res)) {
					dispatch(getNewsSuccess(res.news))
				} else {
					dispatch(getNewsFailure(res.message || error.request))
				}
			})
			.catch(error => {
				dispatch(getNewsFailure())
			})
	}
}
