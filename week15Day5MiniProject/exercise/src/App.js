import React from "react";
import "./App.css";
import Todolist from "./Todolist";

class App extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Todolist />
        </header>
      </div>
    );
  }
}

export default App;
