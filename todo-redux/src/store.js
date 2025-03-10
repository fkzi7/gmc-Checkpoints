import { createStore } from "redux";
import rootReducer from "./redux/reducers"; // Ensure correct reducer import

const store = createStore(
  rootReducer, 
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() // Optional: for debugging
);

export default store;
