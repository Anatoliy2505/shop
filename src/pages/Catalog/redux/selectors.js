import { createSelector } from 'reselect'
import { NAME } from './constants'

export const catalogRootSelector = state => state[NAME]

export const catalogSelector = createSelector(catalogRootSelector, state => ({
	...state,
}))

export const getViewElementsSelector = createSelector(
	catalogRootSelector,
	({ viewElements }) => viewElements || 12
)
