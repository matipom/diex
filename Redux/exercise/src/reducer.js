const initState = {
  prop_one: "One (from Store)",
  prop_two: "Two (from Store)",
};

export const reducer = (state = initState, action = {}) => {
  console.log(action.type, action.payload);

  switch (action.type) {
    //4. return the change of the state -> prop_one to the store
    case "CHANGE_PROP_ONE":
      return { ...state, prop_one: action.payload };
    case "CHANGE_PROP_TWO":
      return { ...state, prop_two: state.prop_one };

    default:
      return { ...state };
  }
};
