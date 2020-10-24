import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import store from "./store";
import { Provider } from "react-redux";
import actionCable from 'actioncable'
import * as serviceWorker from "./serviceWorker";

const CableApp = {}

CableApp.cable = actionCable.createConsumer(`ws://${window.location.hostname}:3000/cable`)

ReactDOM.render(
  <Provider store={store}>
    <App cableApp={CableApp}/>
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();
