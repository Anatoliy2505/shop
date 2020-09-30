import { createSelector } from 'reselect'
import { NAME } from './constants'

export const slidesRootSelector = state => state[NAME]

export const getSlidesSelector = createSelector(
	slidesRootSelector,
	({ slides, errorMsg }) => ({
		slides,
		errorMsg,
	})
)
