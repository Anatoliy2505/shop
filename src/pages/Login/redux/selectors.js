import { createSelector } from 'reselect'
import { NAME } from './constants'

export const loginRootSelector = state => state[NAME]

export const isAuthSelector = false

export const postsSelector = createSelector(
	loginRootSelector,
	data => data || null
)
