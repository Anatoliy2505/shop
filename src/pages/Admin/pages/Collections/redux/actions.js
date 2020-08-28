import {
	setCollection,
	getCollections,
	removeCollection,
	updateCollection,
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
			setToast({
				data: {
					type: 'success',
					title: 'Отлично!',
					message: res.message,
				},
			})

			reset()
		})
		.catch(() => {
			setToast({
				data: { type: 'error', title: 'Ошибка!', message: error.connect },
			})
		})
}

export const setNewCollection = (data, setToast, reset) =>
	action(data, setToast, setCollection, reset)

export const getAllCollections = (data, setToast) =>
	action(data, setToast, getCollections)

export const changeCollection = (data, setToast, reset) =>
	action(data, setToast, updateCollection, reset)

export const deleteCollection = (data, setToast, reset) =>
	action(data, setToast, removeCollection, reset)
