import { createSelector } from 'reselect'
import { NAME } from './constants'

export const saleRootSelector = state => state[NAME]

export const saleSelector = createSelector(
	saleRootSelector,
	({ data, isLoading, errorMsg }) => ({
		data,
		isLoading,
		errorMsg,
	})
)
