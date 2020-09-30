import * as t from './actionTypes'
import { error } from './constants'
import {
	getUserDataApi,
	updateUserAddressApi,
	updateUserAvatarApi,
	updateUserDataApi,
} from '../../../utils/api/userApi'
import { actionForUser } from '../../../utils/helpers/actionForUser'
import { checkResponse } from '../../../utils/helpers/checkResponse'

export const getUserDataRequest = () => ({
	type: t.GET_USER_DATA_REQEST,
})

export const getUserDataSuccess = ({ user, address }) => ({
	type: t.GET_USER_DATA_SUCCESS,
	payload: { user, address },
})

export const getUserDataFailure = (errorMsg = error.connect) => ({
	type: t.GET_USER_DATA_FAILURE,
	payload: {
		errorMsg,
	},
	error: true,
})

export const getUserData = () => {
	return dispatch => {
		dispatch(getUserDataRequest())

		return getUserDataApi()
			.then(res => {
				if (checkResponse(res)) {
					dispatch(getUserDataSuccess({ user: res.user, address: res.address }))
				} else {
					dispatch(getUserDataFailure(res.message))
				}
			})
			.catch(error => {
				dispatch(getUserDataFailure())
				console.log(error)
			})
	}
}

export const userDataReset = () => dispatch =>
	dispatch({ type: t.USER_DATA_RESET })

export const changeAvatar = (data, setToast, reset) =>
	actionForUser(data, setToast, updateUserAvatarApi, reset)

export const changeUserData = (data, setToast, reset) =>
	actionForUser(data, setToast, updateUserDataApi, reset)

export const changeAddress = (data, setToast, reset) =>
	actionForUser(data, setToast, updateUserAddressApi, reset)
