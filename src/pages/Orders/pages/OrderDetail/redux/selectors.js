import { createSelector } from 'reselect'
import { NAME } from './constants'

export const orderRootSelector = state => state[NAME]

export const orderSelector = createSelector(orderRootSelector, state => ({
	...state,
}))
