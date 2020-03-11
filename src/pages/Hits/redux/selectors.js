import { createSelector } from 'reselect'
import { NAME } from './constants'

export const hitsRootSelector = state => state[NAME]

export const hitsSelector = createSelector(
	hitsRootSelector,
	({ data, isLoading, errorMsg }) => ({
		data,
		isLoading,
		errorMsg,
	})
)
