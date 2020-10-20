import { createSelector } from 'reselect'
import { NAME } from './constants'

export const videosRootSelector = state => state[NAME]

export const videosSelector = createSelector(videosRootSelector, state => ({
	...state,
}))

const _cutArr = arr => arr.splice(0, 2)

export const videosPartSelector = createSelector(
	videosRootSelector,
	({ data }) => (data && _cutArr([...data])) || null
)
