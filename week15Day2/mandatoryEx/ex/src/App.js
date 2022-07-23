import "./App.css";
import React from "react";

class BuggyCounter extends React.Component {
  constructor() {
    super();
    this.state = {
      counter: 0,
    };
  }

  handleClick = () => {
    this.setState({
      counter: ++this.state.counter,
    });
  };

  render() {
    if (this.state.counter == 5) {
      throw new Error("I crashed");
    }
    return (
      <>
        <h1>Counter:</h1>
        <p onClick={this.handleClick} style={{ margin: "20px" }}>
          {this.state.counter}
        </p>
      </>
    );
  }
}

export default BuggyCounter;
