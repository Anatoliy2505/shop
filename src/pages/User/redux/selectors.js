import { createSelector } from 'reselect'
import { NAME } from './constants'

export const userRootSelector = state => state[NAME]

export const userDataSelector = createSelector(userRootSelector, state => ({
	...state,
}))
