import { createSelector } from 'reselect'
import { NAME } from './constants'

export const authRootSelector = state => state[NAME]

export const isAuthSelector = createSelector(
	authRootSelector,
	({ isAuth }) => Boolean(isAuth) || false
)

export const userSelector = createSelector(authRootSelector, ({ user }) =>
	user ? user : null
)

export const isLoadingSelector = createSelector(
	authRootSelector,
	({ isLoading }) => Boolean(isLoading) || false
)
