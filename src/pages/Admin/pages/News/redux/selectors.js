import { createSelector } from 'reselect'
import { NAME } from './constants'

export const allNewsRootSelector = state => state[NAME]

export const getAllNewsSelector = createSelector(
	allNewsRootSelector,
	({ news }) => news
)
