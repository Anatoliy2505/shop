import { createSelector } from 'reselect'
import { NAME } from './constants'

export const ordersForAdminRootSelector = state => state[NAME]

export const getOrdersDataSelector = createSelector(
	ordersForAdminRootSelector,
	state => ({
		...state,
	})
)
