import { MOVIE_SELECTED } from "../actions";
import { combineReducers } from "redux";

const initState = {
  movies_list: [
    {
      title: "Spider-man: Homecoming",
      releaseDate: "05-07-2017",
      rating: 7.4,
    },
    {
      title: "Aquaman",
      releaseDate: "12-07-2018",
      rating: 7,
    },
    {
      title: "Black Panther",
      releaseDate: "02-13-2018",
      rating: 7.4,
    },
    {
      title: "Avengers: Infinity War",
      releaseDate: "04-25-2018",
      rating: 8.3,
    },
    {
      title: "Guardians of the Galaxy",
      releaseDate: "07-30-2014",
      rating: 7.9,
    },
  ],
  movie: {},
};

export const reducer_list = (state = initState, action = {}) => {
  return { ...state };
};

export const reducer_detail = (state = initState, action = {}) => {
  switch (action.type) {
    //4. return the change of the state -> prop_one to the store
    case MOVIE_SELECTED:
      console.log("=>>>", action.payload);
      return { ...state, movie: action.payload };

    default:
      return { ...state };
  }
};

export const reducer = combineReducers({
  reducer_list,
  reducer_detail,
});
