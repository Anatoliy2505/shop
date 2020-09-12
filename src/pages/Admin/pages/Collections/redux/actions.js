import {
	setCollection,
	removeCollection,
	updateCollection,
} from '../../../../../utils/api/adminApi'

import { action } from '../../../../../utils/helpers/action'

export const setNewCollection = (data, setToast, reset) =>
	action(data, setToast, setCollection, reset)

export const changeCollection = (data, setToast, reset) =>
	action(data, setToast, updateCollection, reset)

export const deleteCollection = (data, setToast, reset) =>
	action(data, setToast, removeCollection, reset)
