import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import { routerConfig } from "./router/routerConfig";
import { store } from "./redux/store";
import React from "react";
import { Provider } from "react-redux";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement,
);
root.render(
  <Provider store={store}>
    <RouterProvider router={routerConfig} />
  </Provider>,
);
