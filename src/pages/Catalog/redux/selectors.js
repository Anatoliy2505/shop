import { createSelector } from 'reselect'
import { NAME } from './constants'

export const catalogRootSelector = state => state[NAME]

export const catalogSelector = createSelector(
	catalogRootSelector,
	({ data, isLoading, errorMsg, viewElements }) => ({
		data,
		isLoading,
		errorMsg,
		viewElements,
	})
)

export const getViewElementsSelector = createSelector(
	catalogRootSelector,
	({ viewElements }) => viewElements || 5
)
