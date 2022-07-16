import { CHANGE_SEARCH_FIELD } from "./actions";

const initialState = {
  searchField: "",
};

export const reducer = (state = initialState, action = {}) => {
  console.log(action.type);
  switch (action.type) {
    case CHANGE_SEARCH_FIELD:
      return {
        ...state,
        searchField: action.payload,
      };
    default:
      return { ...state };
  }
};
