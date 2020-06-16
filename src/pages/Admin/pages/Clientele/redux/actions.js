import { checkResponse } from '../../../utils/helpers/checkResponse'
import { getAll } from '../../../utils/api/newsApi'
import { error } from './constants'

import * as t from './actionTypes'

export const newsRequest = () => ({
	type: t.NEWS_GET_REQUEST,
})

export const newsSuccess = data => ({
	type: t.NEWS_GET_SUCCESS,
	payload: data,
})

export const newsFailure = (errorMsg = error.connect) => ({
	type: t.NEWS_GET_FAILURE,
	payload: {
		errorMsg,
	},
	error: true,
})

export const getNews = () => {
	return dispatch => {
		dispatch(newsRequest())

		return getAll()
			.then(res => {
				if (checkResponse(res)) {
					dispatch(newsSuccess(res.data))
				} else {
					dispatch(newsFailure(res.message))
				}
			})
			.catch(error => {
				dispatch(newsFailure())
			})
	}
}
