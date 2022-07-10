export const increase_count = () => {
  //3. return reducer an object
  return {
    type: "INCREASE_COUNT",
  };
};

export const decrease_count = () => {
  return {
    type: "DECREASE_COUNT",
  };
};
