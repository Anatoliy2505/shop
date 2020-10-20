import {
	createVideoApi,
	updateVideoApi,
	deleteVideoApi,
} from '../../../../../utils/api/adminApi'

import { action } from '../../../../../utils/helpers/action'
export const createVideoAction = (data, setToast, reset) =>
	action(data, setToast, createVideoApi, reset)

export const updateVideoAction = (data, setToast, reset) =>
	action(data, setToast, updateVideoApi, reset)

export const removeVideoAction = (data, setToast, reset) =>
	action(data, setToast, deleteVideoApi, reset)
