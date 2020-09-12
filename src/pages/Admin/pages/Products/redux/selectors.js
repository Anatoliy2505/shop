import { createSelector } from 'reselect'
import { NAME } from './constants'

export const productsRootSelector = state => state[NAME]

export const getProductsSelector = createSelector(
	productsRootSelector,
	state => ({ ...state })
)
