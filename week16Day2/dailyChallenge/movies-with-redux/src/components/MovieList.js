import React from "react";
import { connect } from "react-redux";
import { movieDetails } from "../actions/index";

class MovieList extends React.Component {
  constructor() {
    super();
  }
  render() {
    return (
      <div>
        <h1>Movie List</h1>
        {this.props.movies.map((item, i) => {
          return (
            <div key={i}>
              <h3>{item.title}</h3>
              <button
                onClick={() => {
                  this.props.getDetails(item);
                }}
              >
                Details
              </button>
            </div>
          );
        })}
      </div>
    );
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    getDetails: (movie) => dispatch(movieDetails(movie)),
  };
};

const mapStateToProps = (state) => {
  return {
    movies: state.reducer_list.movies_list,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(MovieList);
