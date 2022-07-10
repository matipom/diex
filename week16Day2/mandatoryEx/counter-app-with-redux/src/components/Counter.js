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
        <button onClick={() => this.props.aaa()}>+</button>

        <button onClick={() => this.props.bbb()}>-</button>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    aaa: () => dispatch(increase_count()),
    bbb: () => dispatch(decrease_count()),
  };
};
const mapStateToProps = () => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
