import React from "react";

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      info: null,
    };
  }

  static getDerivedStateFromError(error, info) {
    // Update state so the next render will show the fallback UI.
    return console.log({ info });
  }

  componentDidCatch(error, info) {
    this.setState({ error: error, info: info });
    console.log(error);
    console.log(info);
  }

  render() {
    console.log(this.state.info);
    if (this.state.error) {
      return (
        <div>
          <h1>{this.state.error.toString()}</h1>

          <p>{this.state.info.toString()}</p>
        </div>
      );
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
