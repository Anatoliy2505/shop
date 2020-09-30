import { request } from '../helpers/network'

export const updateUserDataApi = body =>
	request('api/user/changeUserData', 'PUT', body)

export const updateUserAddressApi = body =>
	request('api/user/changeUserAddress', 'PUT', body)

export const updateUserAvatarApi = body =>
	request('api/user/changeAvatar', 'PUT', body)

export const getUserDataApi = (body = {}) =>
	request('api/user/getUserData', 'POST', body)
