import { combineReducers } from "redux";
import scoreReducer from "./score";
import cardsReducer from "./cards";

export default combineReducers({
  score: scoreReducer,
  cards: cardsReducer,
});
