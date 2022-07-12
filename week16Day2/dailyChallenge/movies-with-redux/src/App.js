import React from "react";
import "./App.css";
import MovieDetails from "./components/MovieDetails";
import MovieList from "./components/MovieList";

class App extends React.Component {
  constructor() {
    super();
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <MovieList />
          <MovieDetails />
        </header>
      </div>
    );
  }
}

export default App;
