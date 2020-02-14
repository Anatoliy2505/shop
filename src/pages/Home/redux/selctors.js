import { createSelector } from 'reselect'

export const sessionRootSelector = state => state.session

export const sessionIsAuthSelector = createSelector(
	sessionRootSelector,
	state => Boolean(state && state.userId)
)

export const sessionErrorMsgSelector = createSelector(
	sessionRootSelector,
	state => (state && state.errorMsg) || ''
)

export const sessionUserIdSelector = createSelector(
	sessionRootSelector,
	state => Number(state && state.userId) || null
)

export const sessionLogInStartedSelector = createSelector(
	sessionRootSelector,
	state => Boolean(state && state.logInStarted)
)
