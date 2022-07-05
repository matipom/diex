import React from "react";

class Car extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      brand: "Ford",
      model: "Mustang",
      carColor: "red",
      year: 1964,
    };
  }

  changeColor = () => {
    let { colors } = this.props;
    let randomColor = colors[Math.floor(Math.random() * colors.length)];
    this.setState({ carColor: randomColor });
  };
  render() {
    return (
      <div>
        <h1>My {this.state.brand}</h1>
        <p style={{ backgroundColor: this.state.carColor }}>
          It is a {this.state.carColor}
          {this.state.model}
          from {this.state.year}.
        </p>
        <button onClick={this.changeColor}>Change color</button>
      </div>
    );
  }
}

export default Car;
