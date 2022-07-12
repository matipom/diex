import { INCREASE_COUNT, DECREASE_COUNT } from "../actions/index";

const initState = {
  count: 0,
};

export const reducer = (state = initState, action = {}) => {
  switch (action.type) {
    //4. return the change of the state -> prop_one to the store
    case INCREASE_COUNT:
      return { ...state, count: ++state.count };
    case DECREASE_COUNT:
      return { ...state, count: --state.count };

    default:
      return { ...state };
  }
};
