import React from "react";
import ReactDOM from "react-dom";

class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
  }

  incrementCount = () => {
    this.setState((state, props) => {
      return { count: state.count + props.step };
    });
  };

  resetCount = () => {
    this.setState({ count: 0 });
  };

  render() {
    return (
      <>
        <p>The count is {this.state.count}.</p>
        <button onClick={this.incrementCount}>+{this.props.step}</button>
        <button onClick={this.resetCount}>Reset count</button>
      </>
    );
  }
}

export default Counter;
