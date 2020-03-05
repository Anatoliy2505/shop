import { createSelector } from 'reselect'
import { NAME } from './constants'
//import { filterActive, filterCompleted } from './model';

// TODO: newsSelector, isLoading selector, errorNewsSelector ??
export const sidebarRootSelector = state => state[NAME].sidebar
export const catalogRootSelector = state => state[NAME].catalog

export const sidebarSelector = createSelector(
	sidebarRootSelector,
	({ data, isLoading, errorMsg }) => ({
		data,
		isLoading,
		errorMsg,
	})
)

export const catalogSelector = createSelector(
	catalogRootSelector,
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
