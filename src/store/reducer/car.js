
export default function (state = 9999, action) {
  switch (action.type) {
    case "ADD_TODO":
      return action.id
    case 'INCREMENT':
      return state + 1;
    case 'DECREMENT':
      return state - 1;
    default:
      return state;
  }
}