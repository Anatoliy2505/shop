import { createSelector } from 'reselect'
import { NAME } from './constants'

export const newsRootSelector = state => state[NAME]
const newsSelector = state => state[NAME].data

export const newsAllSelector = createSelector(
	newsRootSelector,
	({ data, isLoading, errorMsg }) => ({
		data,
		isLoading,
		errorMsg,
	})
)

const _cutArr = arr => arr.splice(0, 2)

export const newsPartSelector = createSelector(
	newsSelector,
	data => (data && _cutArr([...data])) || null
)

// export const sessionErrorMsgSelector = createSelector(
// 	newsSelector,
// 	state => (state && state.errorMsg) || ''
// )

// export const sessionUserIdSelector = createSelector(
// 	sessionRootSelector,
// 	state => Number(state && state.userId) || null
// )

// export const sessionLogInStartedSelector = createSelector(
// 	sessionRootSelector,
// 	state => Boolean(state && state.logInStarted)
// )
