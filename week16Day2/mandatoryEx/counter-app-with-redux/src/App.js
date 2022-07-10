import React from "react";
import "./App.css";
import { connect } from "react-redux";
import Counter from "./components/Counter";

class App extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Counter />
          {this.props.a_prop}
        </header>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    a_prop: state.count,
  };
};

export default connect(mapStateToProps)(App);
