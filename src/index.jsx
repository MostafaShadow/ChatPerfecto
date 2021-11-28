import React from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.rtl.css";

import "./index.css";
import App from "./App";
import { Provider } from "react-redux";
import { store } from "./Features/Store";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
