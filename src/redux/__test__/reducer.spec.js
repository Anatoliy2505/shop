import reducer, { initialState } from '../reducer'
import { error } from '../constants'
import * as t from '../actionTypes'

describe('categories reducer', () => {
	it('should return the initial state', () => {
		expect(reducer(undefined, {})).toEqual(initialState)
	})

	it('CATEGORIES_GET_REQUEST after situation without errorMsg', () => {
		const action = {
			type: t.CATEGORIES_GET_REQUEST,
		}

		expect(reducer(initialState, action)).toEqual({
			...initialState,
			isLoading: true,
			errorMsg: null,
		})
	})

	it('CATEGORIES_GET_REQUEST after error', () => {
		const initialStateWithError = {
			data: null,
			isLoading: true,
			errorMsg: error.unknown,
		}

		const action = {
			type: t.CATEGORIES_GET_REQUEST,
		}

		expect(reducer(initialStateWithError, action)).toEqual({
			...initialStateWithError,
			isLoading: true,
			errorMsg: null, // обнулили ошибку
		})
	})

	it('CATEGORIES_GET_SUCCESS', () => {
		const initialState = {
			data: null,
			isLoading: true,
			errorMsg: null,
		}

		const action = {
			type: t.CATEGORIES_GET_SUCCESS,
			payload: [1, 2, 3],
		}

		expect(reducer(initialState, action)).toEqual({
			...initialState,
			isLoading: false,
			data: action.payload,
		})
	})

	it('CATEGORIES_GET_FAILURE', () => {
		const action = {
			type: t.CATEGORIES_GET_FAILURE,
			payload: {
				errorMsg: error.request,
			},
			error: true,
		}

		expect(reducer(initialState, action)).toEqual({
			...initialState,
			isLoading: false,
			errorMsg: action.payload.errorMsg,
		})
	})
})
