import { request } from '../helpers/network'

export const registration = body =>
	request('api/auth/registration', 'POST', body)

export const login = body => request('api/auth/login', 'POST', body)

export const logout = () => request('api/auth/logout', 'POST')
