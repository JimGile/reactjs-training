import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import App from "./components/App.tsx";
import "./index.css";
import "bootstrap/dist/css/bootstrap.css";
import {store} from "./redux_store.js"

const element = document.getElementById("root");
if (element !== null) {
  const root = ReactDOM.createRoot(element);
  root.render(
    <React.StrictMode>
      <Provider store={store}>
        <App />
      </Provider>
    </React.StrictMode>
  );
}

