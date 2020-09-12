import { createSelector } from 'reselect'
import { NAME } from './constants'

export const cartRootSelector = state => state[NAME]

export const getCartSelector = createSelector(cartRootSelector, state => state)
