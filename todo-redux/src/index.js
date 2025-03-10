import React from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux"; // Ensure Provider is used
import store from "./store"; // Import your Redux store
import App from "./App";

const root = createRoot(document.getElementById("root")); // ✅ Use createRoot
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
