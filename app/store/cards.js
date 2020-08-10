// Action types
const RESET_CARDS = "reset";

//Action creators
export function resetCards() {
  return {
    type: RESET_CARDS,
  };
}

let numArr = [];
initialize();

function initialize() {
  numArr = [];
  for (let i = 0; i < 6; i++) {
    let num = Math.floor(Math.random() * 100) + 1;

    // regenerate if existed before
    while (numArr.includes(num)) {
      num = Math.floor(Math.random() * 100) + 1;
    }

    // push numbers in once cfm no duplicate
    numArr.push(num);
    numArr.push(num);
  }
  // shuffle
  var currentIndex = numArr.length,
    temporaryValue,
    randomIndex;
  while (0 !== currentIndex) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;
    temporaryValue = numArr[currentIndex];
    numArr[currentIndex] = numArr[randomIndex];
    numArr[randomIndex] = temporaryValue;
  }
}

const initialState = {
  value: numArr,
};

// Reducer
export default function cardsReducer(state = initialState, action) {
  switch (action.type) {
    case RESET_CARDS:
      initialize();
      return {
        value: numArr,
      };
  }
  return state;
}
