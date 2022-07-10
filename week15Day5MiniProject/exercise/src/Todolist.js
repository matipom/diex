import React from "react";

class Todolist extends React.Component {
  constructor() {
    super();
    this.state = {
      task: "",
    };
  }

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
    console.log(event.target.value);
  };

  handleSubmit = (event) => {
    alert("A task was submitted: " + this.state);

    fetch("http://10.0.2.2:3000/tasks", {
      method: "POST",
      // We convert the React state to JSON and send it as the POST body
      body: JSON.stringify(this.state),
    }).then(function (response) {
      console.log(response);
      return response.json();
    });

    event.preventDefault();
  };

  render() {
    return (
      <div>
        <h1>Todo's</h1>
        <div
          style={{ backgroundColor: "white", width: "170px", height: "30px" }}
        >
          <p style={{ color: "black", fontSize: "15px" }}>
            You have no todo's left!
          </p>
        </div>
        <p>Add a new todo</p>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            placeholder="Add a new task"
            onChange={this.handleChange}
          />
        </form>
      </div>
    );
  }
}

export default Todolist;
