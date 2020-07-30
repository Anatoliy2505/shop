import {
	setGroup,
	updateGroup,
	removeGroup,
} from '../../../../../utils/api/adminApi'
import { error } from './constants'

import { getAllMainCategories } from '../../../../../redux/actions'
import { logoutSimpleAction } from '../../../../Auth/redux/actions'

const action = (data, setToast, actionType, reset = () => {}) => dispatch => {
	setToast({
		data: {
			message: 'Подождите, данные отправляются',
		},
		duration: 1000,
	})
	return actionType(data)
		.then(res => {
			if (!res.ok) {
				if (res.auth === false) {
					dispatch(logoutSimpleAction())
				}
				return setToast({
					data: { type: 'error', title: 'Ошибка!', message: res.message },
				})
			}

			dispatch(getAllMainCategories())
			reset()
			setToast({
				data: {
					type: 'success',
					title: 'Отлично!',
					message: res.message,
				},
			})
		})
		.catch(() => {
			setToast({
				data: { type: 'error', title: 'Ошибка!', message: error.connect },
			})
		})
}

export const setNewGroup = (data, setToast, reset) =>
	action(data, setToast, setGroup, reset)

export const changeGroup = (data, setToast) =>
	action(data, setToast, updateGroup)

export const deleteGroup = (data, setToast) =>
	action(data, setToast, removeGroup)
