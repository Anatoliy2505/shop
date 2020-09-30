import {
	setCollection,
	removeCollection,
	updateCollection,
	removeRecommendationsApi,
	addRecommendationsApi,
} from '../../../../../utils/api/adminApi'

import { action } from '../../../../../utils/helpers/action'

export const setNewCollection = (data, setToast, reset) =>
	action(data, setToast, setCollection, reset)

export const changeCollection = (data, setToast, reset) =>
	action(data, setToast, updateCollection, reset)

export const deleteCollection = (data, setToast, reset) =>
	action(data, setToast, removeCollection, reset)

export const deleteRecommendations = (data, setToast, reset) =>
	action(data, setToast, removeRecommendationsApi, reset)

export const addRecommendations = (data, setToast, reset) =>
	action(data, setToast, addRecommendationsApi, reset)
