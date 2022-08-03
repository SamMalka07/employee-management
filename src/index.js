import React from "react";
import ReactDOM from "react-dom/client";
import "./index.scss";
import App from "./App";
import { createStore, combineReducers } from "redux";
import { Provider } from "react-redux";
// import rootReducer from "./reducers/rootReducer";
import employeeReducer from "./reducers/employeeReducer";
import testReducer from "./reducers/testReducer";

const rootReducer = combineReducers({
  emp: employeeReducer,
  test: testReducer,
});
const store = createStore(rootReducer);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
