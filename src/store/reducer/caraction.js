export const addTodo = (data) => ({ type: "ADD_TODO", data });
export const addCountAsync = (val) => {
  return (dispatch) => {
    setTimeout(() => {
      dispatch(addTodo(val));
    }, 2000);
  };
};
export const setVisibilityFilter = (filter) => {
  return {
    type: "SET_VISIBILITY_FILTER",
    filter,
  };
};
