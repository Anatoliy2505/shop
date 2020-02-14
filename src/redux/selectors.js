import { createSelector } from 'reselect'
import { NAME } from './constants'
//import { filterActive, filterCompleted } from './model';

// TODO: newsSelector, isLoading selector, errorNewsSelector ??
const categoriesSelector = state => state[NAME].data
const categoriesIsLoading = state => state[NAME].isLoading
const categoriesErrorMsg = state => state[NAME].errorMsg

export const categoriesGetAll = createSelector(
	categoriesSelector,
	categoriesIsLoading,
	categoriesErrorMsg,
	(data, isLoading, errorMsg) => ({
		data,
		isLoading,
		errorMsg,
	})
)

/* export const getCounts = createSelector(
  getAll,
  getCompleted,
  getActive,
  (allTodos, completedTodos, activeTodos) => ({
    all: allTodos.length,
    completed: completedTodos.length,
    active: activeTodos.length
  })
); */
