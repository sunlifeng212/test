import React from "react";
import ReactDOM from "react-dom";
import App from "@/App";
import { Provider } from "react-redux";
import store from "@/store";
const render = (Component) => {
  ReactDOM.render(
    <Provider store={store}>
      <Component />
    </Provider>,
    document.getElementById("root")
  );
};
render(App);
if ('serviceWorker' in navigator) {
  navigator.serviceWorker
    .register('/service-worker.js')
    .then(registration => {
      console.log(
        'ServiceWorker registration successful with scope: ',
        registration.scope
      )
    })
    .catch(err => {
      console.log('ServiceWorker registration failed: ', err)
    })
}