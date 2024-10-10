import { Provider } from "react-redux";
import App from "./App";
import store from "./reduxToolkit/store";
import { createRoot } from "react-dom/client";
import "./index.css";

createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <App />
  </Provider>
);
