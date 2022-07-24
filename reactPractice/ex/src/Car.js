import React, { useState } from "react";

const Car = () => {
  const [color, setColor] = useState("red");

  const changeColor = () => {
    setColor("blue");
  };

  return (
    <div>
      <h1>My car is {color}</h1>

      <button type="button" onClick={changeColor}>
        Change color
      </button>
    </div>
  );
};

export default Car;
