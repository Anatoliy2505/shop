import { postsError } from './constants'
import * as t from './actionTypes'

export const postsRequest = () => ({
	type: t.POSTS_GET_REQUEST,
})

export const postsSuccess = data => ({
	type: t.POSTS_GET_SUCCESS,
	payload: data,
})

export const postsFailure = (errorMsg = postsError.connect) => ({
	type: t.POSTS_GET_FAILURE,
	payload: {
		errorMsg,
	},
	error: true,
})

export const getPosts = (count = 4, version = '5.103') => {
	const VK = window.VK

	return dispatch => {
		dispatch(postsRequest())
		VK.init({
			apiId: 7328174,
		})
		VK.Api.call(
			'wall.get',
			{
				owner_id: '-60180312',
				count: count,
				filter: 'owner',
				bool: '1',
				v: version,
			},
			r => {
				try {
					r.error
						? dispatch(postsFailure(r.error.error_msg))
						: dispatch(postsSuccess(r.response.items))
				} catch (e) {
					dispatch(postsFailure())
					console.log(e)
				}
			}
		)
	}
}
