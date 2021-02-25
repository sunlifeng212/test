export default function (state = 9999, action) {
  let { type, data } = action;
  console.log("rere", action);
  switch (type) {
    case "ADD_TODO":
      return state + data;
    case "INCREMENT":
      return state + 1;
    case "DECREMENT":
      return state - 1;
    default:
      return state;
  }
}
