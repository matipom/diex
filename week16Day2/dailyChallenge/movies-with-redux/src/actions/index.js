export const MOVIE_SELECTED = "MOVIE_SELECTED";

export const movieDetails = (movie) => {
  return {
    type: MOVIE_SELECTED,
    payload: movie,
  };
};

// const forward = (weekday) => {
//   return {
//     type: "FORWARD_DAY",
//     day: weekday,
//   };
// };

// const backward = (weekday) => {
//   return {
//     type: "BACKWARD_DAY",
//     day: weekday,
//   };
// };

// export { forward, backward };
