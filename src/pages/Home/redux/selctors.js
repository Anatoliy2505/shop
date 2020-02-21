import { createSelector } from 'reselect'
import { NAME } from './constants'

export const postsRootSelector = state => state[NAME].posts
const postsDataSelector = state => state[NAME].posts.data

export const postsAllSelector = createSelector(
	postsRootSelector,
	({ posts: { data, isLoading, errorMsg } }) => ({
		data,
		isLoading,
		errorMsg,
	})
)

export const postsSelector = createSelector(
	postsDataSelector,
	data => data || null
)
