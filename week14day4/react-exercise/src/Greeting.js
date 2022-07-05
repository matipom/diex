import React, { Component } from "react";

class Greeting extends Component {
  state = {
    fullname: "",
  };
  stateChange = (f) => {
    const { name, value } = f.target;
    this.setState(
      {
        [name]: value,
      },
      () => {
        console.log("hola");
      }
    );
  };

  render() {
    return (
      <>
        <label>Fullname: </label>
        <input type="text" name="fullname" onChange={this.stateChange} />
        <div>
          <h3>Greeting, {this.state.fullname}</h3>
        </div>
      </>
    );
  }
}

export default Greeting;
