import { createSelector } from 'reselect'
import { NAME } from './constants'

export const allSlidesRootSelector = state => state[NAME]

export const getAllSlidesSelector = createSelector(
	allSlidesRootSelector,
	({ slides }) => slides
)
