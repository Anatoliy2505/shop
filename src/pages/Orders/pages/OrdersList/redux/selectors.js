import { createSelector } from 'reselect'
import { NAME } from './constants'

export const ordersRootSelector = state => state[NAME]

export const ordersSelector = createSelector(ordersRootSelector, state => ({
	...state,
}))
