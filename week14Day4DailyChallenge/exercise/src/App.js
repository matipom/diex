import "./App.css";
import React from "react";
class App extends React.Component {
  constructor() {
    super();
    this.state = {
      languages: [
        { name: "Php", votes: 0 },
        { name: "Python", votes: 0 },
        { name: "JavaSript", votes: 0 },
        { name: "Java", votes: 0 },
      ],
    };
  }
  // handleChange = (e) => {
  //     // console.log(e.target.value);
  //     this.setState({ [e.target.name]: e.target.value });
  //   };

  incrementVote = (event) => {
    this.setState(
      this.state.languages.map((item) => {
        if (event.target.name == item.name) return { item: item.votes++ };
      })
    );
  };
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Vote your language!</h1>
          <div className="box">
            <p style={{ margin: "20px" }}>{this.state.languages[0].votes}</p>
            <p style={{ margin: "20px" }}>{this.state.languages[0].name}</p>
            <button
              style={{ margin: "20px" }}
              name={this.state.languages[0].name}
              onClick={this.incrementVote}
            >
              Click Here to vote
            </button>
          </div>
          <div className="box">
            <p style={{ margin: "20px" }}>{this.state.languages[1].votes}</p>
            <p style={{ margin: "20px" }}>{this.state.languages[1].name}</p>
            <button
              style={{ margin: "20px" }}
              name={this.state.languages[1].name}
              onClick={this.incrementVote}
            >
              Click Here to vote
            </button>
          </div>
          <div className="box">
            <p style={{ margin: "20px" }}>{this.state.languages[2].votes}</p>
            <p style={{ margin: "20px" }}>{this.state.languages[2].name}</p>
            <button
              style={{ margin: "20px" }}
              name={this.state.languages[2].name}
              onClick={this.incrementVote}
            >
              Click Here to vote
            </button>
          </div>
          <div className="box">
            <p style={{ margin: "20px" }}>{this.state.languages[3].votes}</p>
            <p style={{ margin: "20px" }}>{this.state.languages[3].name}</p>
            <button
              style={{ margin: "20px" }}
              name={this.state.languages[3].name}
              onClick={this.incrementVote}
            >
              Click Here to vote
            </button>
          </div>
        </header>
      </div>
    );
  }
}

export default App;
