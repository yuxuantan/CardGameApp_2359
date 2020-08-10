// RULE 1 - reducer must be default export
// RULE 2 - export individual action creators

// Action types
const INCREASE_COUNTER = "increaseCounter";
const RESET_COUNTER = "resetCounter";

//Action creators

export function increaseCounter() {
  return {
    type: INCREASE_COUNTER,
  };
}

export function resetCounter() {
  return {
    type: RESET_COUNTER,
  };
}

// Reducer
// One reducer for each slice of the store (initial state)
// **** IMPT - REDUCER - pure function. call multiple times, same arguments=> same results -
//dont work with global arguments/ call api. ISOLATED
const initialState = {
  counter: 0,
};

//NOTE STATE IS CURRENT STATE. Store will call this and pass state and action.
// ACTION IS DISPATCHED TO STORE WHICH WILL CALL REDUCER TO UPDATE

export default function scoreReducer(state = initialState, action) {
  switch (action.type) {
    case INCREASE_COUNTER:
      return { counter: state.counter + 1 };
    case RESET_COUNTER:
      return { counter: 0 };
  }
  // default if action doesnt match any above
  return state;
}
