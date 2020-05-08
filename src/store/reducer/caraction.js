
export const addTodo = id => {
  return {
    type: 'ADD_TODO',
    id
  }
}
export const addCountAsync = val => {
  return dispatch => {
    setTimeout(() => {
      dispatch(addTodo(val))
    }, 2000)
  }
}
export const setVisibilityFilter = filter => {
  return {
    type: 'SET_VISIBILITY_FILTER',
  }
}
