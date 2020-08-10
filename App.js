import React, { Component } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Provider } from "react-redux";
import GameScreen from "./app/screens/GameScreen";

// if large file, only import what you need

import configureStore from "./app/store/configureStore";

//store locally
const store = configureStore();
/**
 * Store - holds our state - THERE IS ONLY ONE STATE. Methods: getState, dispatch, subscribe
 * Action - State can be modified using actions - SIMPLE OBJECTS
 * Dispatcher - Action needs to be sent by someone - known as dispatching an action
 * Reducer - receives the action and modifies the state to give us a new state
 *  - pure functions
 *  - only mandatory argument is the 'type'
 * Subscriber - listens for state change to update the ui
 */

//USE THIS TO refresh UI whenever state of store change. UI COMPONENTS subscribe to store
// make it const, because if user navigate to other page, we want it to stop subscribing to prevent memory leaks.
// it will run until you call unsubscribe();

// const unsubscribe = store.subscribe(() => {
//   console.log("Store changed!", store.getState());
// });

//dispatching action not easy. create function that creates this action for us so its repeatable
// store.dispatch(actions.increaseCounter());
// store.dispatch(actions.increaseCounter());

// unsubscribe();

// console.log(store.dispatch(actions.resetCounter()));
// console.log(store.getState());

// const initialState = {
//   counter: 0,
//   one: 123,
// };

// const reducer = (state = initialState, action) => {
//   switch (action.type) {
//     case "INCREASE_COUNTER":
//       return { counter: state.counter + 1 };
//     case "DECREASE_COUNTER":
//       return { counter: state.counter - 1 };
//   }
//   // default if action doesnt match any above
//   return state;
// };

// const store = createStore(reducer);

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <GameScreen />
      </Provider>
      // <View></View>
    );
  }
}

export default App;

// export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
