import {
	setGroup,
	updateGroup,
	removeGroup,
} from '../../../../../utils/api/adminApi'
import { action } from '../../../../../utils/helpers/action'

export const setNewGroup = (data, setToast, reset) =>
	action(data, setToast, setGroup, reset)

export const changeGroup = (data, setToast, reset) =>
	action(data, setToast, updateGroup, reset)

export const deleteGroup = (data, setToast, reset) =>
	action(data, setToast, removeGroup, reset)
