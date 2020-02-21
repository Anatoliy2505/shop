import * as t from './actionTypes'

const initialState = {
	posts: {
		data: null,
		isLoading: false,
		errorMsg: null,
	},
}

export default (state = initialState, action) => {
	switch (action.type) {
		case t.POSTS_GET_REQUEST:
			return {
				...state,
				posts: {
					...state.posts,
					errorMsg: null,
					isLoading: true,
				},
			}
		case t.POSTS_GET_SUCCESS:
			return {
				...state,
				posts: {
					...state.posts,
					data: action.payload,
					isLoading: false,
				},
			}
		case t.POSTS_GET_FAILURE:
			return {
				...state,
				posts: {
					...state.posts,
					errorMsg: action.payload.errorMsg,
					isLoading: false,
				},
			}
		default:
			return state
	}
}
