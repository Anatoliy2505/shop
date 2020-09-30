import { createSelector } from 'reselect'
import { NAME } from './constants'

export const collectionRootSelector = state => state[NAME]

export const collectionDataSelector = createSelector(
	collectionRootSelector,
	state => ({
		...state,
	})
)

export const recommendationSelector = createSelector(
	collectionRootSelector,
	({ recommendation }) => recommendation
)
