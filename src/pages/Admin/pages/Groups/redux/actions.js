import {
	setGroup,
	updateGroup,
	removeGroup,
} from '../../../../../utils/api/adminApi'
import { error } from './constants'

import { getAllMainCategories } from '../../../../../redux/actions'

const action = (data, setToast, actionType) => dispatch => {
	setToast({
		data: {
			message: 'Подождите, данные отправляются',
		},
		duration: 1000,
	})
	return actionType(data)
		.then(res => {
			if (!res.ok) {
				return setToast({
					data: { type: 'error', title: 'Ошибка!', message: res.message },
				})
			}

			dispatch(getAllMainCategories())
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

export const setNewGroup = (data, setToast) => action(data, setToast, setGroup)

export const changeGroup = (data, setToast) =>
	action(data, setToast, updateGroup)

export const deleteGroup = (data, setToast) =>
	action(data, setToast, removeGroup)
