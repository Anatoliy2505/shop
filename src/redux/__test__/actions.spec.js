import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import { API_ROOT } from '../../utils/constants'
import * as t from '../actionTypes'

import {
	catigoriesRequest,
	catigoriesSuccess,
	catigoriesFailure,
	getCatigories,
} from '../actions'

import fetchMock from 'fetch-mock'
import expect from 'expect'

const middlewares = [thunk]
const mockStore = configureMockStore(middlewares)

describe('CategoriesActions', () => {
	describe('Sync actions', () => {
		it('catigoriesRequest(): should create an action to set isLoading', () => {
			const expectedAction = {
				type: t.CATEGORIES_GET_REQUEST,
			}
			expect(catigoriesRequest()).toEqual(expectedAction)
		})

		it('catigoriesSuccess(): should attach news data', () => {
			const expectedAction = {
				type: t.CATEGORIES_GET_SUCCESS,
				payload: [1, 2, 3],
			}
			expect(catigoriesSuccess([1, 2, 3])).toEqual(expectedAction)
		})

		it('catigoriesFailure(): should attach error message', () => {
			const errorMessage = 'wrong'
			const expectedAction = {
				type: t.CATEGORIES_GET_FAILURE,
				payload: {
					errorMsg: errorMessage,
				},
				error: true,
			}
			expect(catigoriesFailure(errorMessage)).toEqual(expectedAction)
		})
	})

	describe('async actions', () => {
		afterEach(() => {
			fetchMock.reset()
			fetchMock.restore()
		})

		it('creates CATEGORIES_GET_SUCCESS when fetching catigories has been done', () => {
			fetchMock.getOnce(`${API_ROOT}/categories`, {
				headers: { 'content-type': 'application/json' },
				body: { data: [1, 2, 3], status: 'ok' },
			})

			const expectedActions = [
				catigoriesRequest(),
				catigoriesSuccess([1, 2, 3]),
			]
			const store = mockStore({})

			return store.dispatch(getCatigories()).then(() => {
				expect(store.getActions()).toEqual(expectedActions)
			})
		})
	})
})
