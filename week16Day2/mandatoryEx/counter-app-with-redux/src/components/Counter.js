import React from "react";
import { connect } from "react-redux";
import { increase_count } from "../actions/index.js";
import { decrease_count } from "../actions/index.js";

class Counter extends React.Component {
  constructor() {
    super();
  }
  render() {
    return (
      <div>
        <button onClick={() => this.props.add()}>+</button>
        {this.props.my_counter}
        <button onClick={() => this.props.minus()}>-</button>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    add: () => dispatch(increase_count()),
    minus: () => dispatch(decrease_count()),
  };
};
const mapStateToProps = (state) => {
  return {
    my_counter: state.count,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
