import React from "react";

class Garage extends React.Component {
  constructor(props) {
    super(props);
  }

  //     componentDidMount() {
  //     this.setState({ size: "red" });
  //   }

  render() {
    return (
      <>
        <p>Who lives in my {this.props.size} Garage? </p>
      </>
    );
  }
}
export default Garage;
