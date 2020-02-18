import { createSelector } from 'reselect'
import { NAME } from './constants'
//import { filterActive, filterCompleted } from './model';

// TODO: newsSelector, isLoading selector, errorNewsSelector ??
export const categoriesRootSelector = state => state[NAME]

export const categoriesGetAll = createSelector(
	categoriesRootSelector,
	({ data, isLoading, errorMsg }) => ({
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
