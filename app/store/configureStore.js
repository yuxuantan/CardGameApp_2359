import { createStore } from "redux";
import reducer from "./reducer";

// store doesnt have set state method. need to dispatch an action.
export default function configureStore() {
  const store = createStore(reducer);
  return store;
}
