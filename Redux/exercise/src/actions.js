export const changePropOne = (val) => {
  //3. return reducer an object
  return {
    type: "CHANGE_PROP_ONE",
    payload: val,
  };
};

export const changePropTwoToOne = () => {
  return {
    type: "CHANGE_PROP_TWO",
  };
};
