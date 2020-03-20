import { createSelector } from 'reselect'
import { NAME } from './constants'

export const searchRootSelector = state => state[NAME]

export const searchSelector = createSelector(
	searchRootSelector,
	({ data, isLoading, errorMsg }) => ({
		data,
		isLoading,
		errorMsg,
	})
)
