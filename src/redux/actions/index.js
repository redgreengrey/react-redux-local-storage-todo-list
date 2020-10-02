export const addTodo = (text, id) => ({
  type: 'ADD_TODO',
  id,
  text
})

export const setVisibilityFilter = filter => ({
  type: 'SET_VISIBILITY_FILTER',
  filter
})

export const toggleTodo = id => ({
  type: 'TOGGLE_TODO',
  id
})

export const deleteTodo = id => ({
  type: 'DELETE_TODO',
  id
})

export const changeTodoText = payload => ({
  type: 'CHANGE_TODO_TEXT',
  payload
})

export const changeTodoDate = payload => ({
  type: 'CHANGE_TODO_DATE',
  payload
})

export const VisibilityFilters = {
  SHOW_ALL: 'SHOW_ALL',
  SHOW_COMPLETED: 'SHOW_COMPLETED',
  SHOW_ACTIVE: 'SHOW_ACTIVE'
}
