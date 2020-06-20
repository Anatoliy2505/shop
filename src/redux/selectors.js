import { createSelector } from 'reselect'
import { NAME } from './constants'

export const sidebarRootSelector = state => state[NAME]

export const sidebarSelector = createSelector(sidebarRootSelector, state => ({
	...state,
}))

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
