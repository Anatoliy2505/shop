import { createSelector } from 'reselect'
import { NAME } from './constants'

export const catalogRootSelector = state => state[NAME]

export const catalogSelector = createSelector(
	catalogRootSelector,
	({ data, isLoading, errorMsg }) => ({
		data,
		isLoading,
		errorMsg,
	})
)
