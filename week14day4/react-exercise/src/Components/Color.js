import React from "react";

class Color extends React.Component {
  constructor() {
    super();
    this.state = {
      favoriteColor: "red",
    };
  }

  changeColor = () => {
    this.setState({
      favoriteColor: "blue",
    });
  };

  componentDidMount() {
    setTimeout(() => {
      this.setState({ favoriteColor: "yellow" });
    }, 5000);
  }

  render() {
    return (
      <>
        <header>
          My favorite color is <i>{this.state.favoriteColor}</i>
          <button onClick={this.changeColor}>Click to change</button>
        </header>
      </>
    );
  }
}

export default Color;
