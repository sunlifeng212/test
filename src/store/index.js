import { createStore, applyMiddleware } from "redux"
import reducer from "./reducer"
// import createSaga from 'redux-saga';
import thunk from 'redux-thunk';
// import saga from "./saga"
// const sagaMid = createSaga()
// sagaMid.run(saga)
const store = createStore(reducer, applyMiddleware(thunk))
export default store


// function createThunkMiddleware(extraArgument) {
//   return ({ dispatch, getState }) => next => action => {
//     if (typeof action === 'function') {
//       return action(dispatch, getState, extraArgument);
//     }
//     return next(action);
//   };
// }
// const thunk = createThunkMiddleware();
// thunk.withExtraArgument = createThunkMiddleware;
// export default thunk;