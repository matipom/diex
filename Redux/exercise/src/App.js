import React from "react";
import "./App.css";
import { connect } from "react-redux";
// import Hello from "./Hello";
import { changePropOne } from "./actions";
import { changePropTwoToOne } from "./actions";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      property_one: "One",
      property_two: "Two",
    };
  }
  handleChange = (event) => {
    this.setState({ property_one: event.target.value });
  };
  render() {
    return (
      <div className="App">
        <header className="App-header">
          This is property_one: {this.state.property_one}
          <br />
          Change prop one:
          <input type="text" onChange={this.handleChange} />
          This is property_two: {this.state.property_two}
          <br />
          {/*1. [call the props function -> aaa */}
          This is property_one from store: {this.props.a_prop_one}
          <br />
          change prop two:
          <input type="text" onChange={this.props.aaa} />
          <button onClick={() => this.props.bbb()}>
            Change prop_two to prop_one
          </button>
          this is property two from store: {this.props.b_prop_two}
        </header>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    //5. get the new state prop_one that is map to a_prop_one
    a_prop_one: state.prop_one,
    b_prop_two: state.prop_two,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    //2. map props to dispatch action aaa -> changePropOne
    aaa: (e) => dispatch(changePropOne(e.target.value)),
    bbb: () => dispatch(changePropTwoToOne()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
