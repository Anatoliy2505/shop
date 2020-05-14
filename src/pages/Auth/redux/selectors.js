import { createSelector } from 'reselect'
import { NAME } from './constants'

export const authRootSelector = state => state[NAME]

export const isAuthSelector = createSelector(authRootSelector, ({ isAuth }) =>
	Boolean(isAuth)
)

export const userSelector = createSelector(authRootSelector, ({ user }) =>
	user ? user : null
)
