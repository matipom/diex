import React from "react";

class Events extends React.Component {
  constructor() {
    super();
    this.state = { isToggleOn: true };
  }

  render() {
    return (
      <>
        <button onClick={clickMe}>Click me</button>
        <input onKeyPress={handleKeyPress} />
        <button onClick={handleToggle}>Click to toggle</button>
      </>
    );
  }
}
const handleKeyPress = (event) => {
  if (event.key === "Enter") {
    alert(event.target.value);
  }
};
const handleToggle = () => {
  if (this.state.isToggleOn == true) {
    this.setState == false;
    alert("exercise 9: ON");
  } else {
    this.setState == true;
    alert("exercise 9: OFF");
  }
};

const clickMe = () => {
  alert("i was clicked");
};

export default Events;
