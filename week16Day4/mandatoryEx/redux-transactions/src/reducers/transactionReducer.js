import {
  INSERT,
  UPDATE,
  DELETE,
  UPDATE_INDEX,
} from "../actions/transactionActions";

import {
  NAME,
  ACCOUNT_NUMBER,
  FSC,
  AMOUNT,
  RESULT,
} from "../actions/transactionActions";

const initialState = {
  accountNumber: "",
  FSC: "",
  name: "",
  amount: "",
  result: [],
  currentIndex: -1,
};

export const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case NAME:
      return { ...state, name: action.payload };
    case FSC:
      return { ...state, FSC: action.payload };
    case AMOUNT:
      return { ...state, amount: action.payload };
    case RESULT:
      if (state.currentIndex == -1) {
        localStorage.setItem(
          "items",
          JSON.stringify(
            state.result.push({
              FSC: state.FSC,
              name: state.name,
              amount: state.amount,
              accountNumber: state.accountNumber,
            })
          )
        );
      } else {
        // const currentIndexItem = state.result.findIndex((item,i)=> i==currentInd)
        state.result[state.currentIndex].FSC = state.FSC;
        state.result[state.currentIndex].amount = state.amount;
        state.result[state.currentIndex].accountNumber = state.accountNumber;

        state.result[state.currentIndex].name = state.name;
      }

      return {
        ...state,
        result: [...state.result],
        currentIndex: -1,
        FSC: "",
        name: "",
        amount: "",
        accountNumber: "",
      };
    case ACCOUNT_NUMBER:
      return {
        ...state,
        accountNumber: action.payload,
      };
    case DELETE:
      const filter = state.result.filter((item, i) => i != action.payload);
      return { ...state, result: [...filter] };
    case UPDATE:
      const currentItem = state.result.find((item, i) => i == action.payload);
      return {
        ...state,
        currentIndex: action.payload,
        FSC: currentItem.FSC,
        name: currentItem.name,
        amount: currentItem.amount,
        accountNumber: currentItem.accountNumber,
      };
    default:
      return { ...state };
  }
};
