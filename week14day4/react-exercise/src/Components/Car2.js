import React from "react";
import Garage from "./Garage";
//exercise 1
class Car2 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      color: "",
    };
  }

  componentDidMount() {
    this.setState({ color: "red" });
  }

  render() {
    return (
      <>
        <h1>This car is {this.props.car.model}</h1>
        <p>
          And is a {this.props.car.model} {this.state.color}
        </p>
        <Garage size="small" />
      </>
    );
  }
}

export default Car2;
