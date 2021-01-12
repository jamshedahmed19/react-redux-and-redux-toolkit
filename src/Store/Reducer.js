import {
  DECREMENT,
  DECREMENT_BY_VALUE,
  INCREMENT,
  INCREMENT_BY_VALUE,
} from "./Action";

const initialState = {
  counter: 0,
};

export const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case INCREMENT: {
      return { ...state, counter: state.counter + 1 };
    }
    case DECREMENT: {
      return {
        ...state,
        counter: state.counter - 1,
      };
    }
    case INCREMENT_BY_VALUE:
      return {
        ...state,
        counter: state.counter + action.payload,
      };
    case DECREMENT_BY_VALUE:
      return {
        ...state,
        counter: state.counter - action.payload,
      };
    default:
      return state;
  }
};
