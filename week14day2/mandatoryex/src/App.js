import "./App.css";
import React from "react";
import UserFavoriteColors from "./UserFavoriteColors";
import Exercise2 from "./Exercise2";
import Sum from "./Sum";
import Exercise4 from "./Exercise4";
import Carrousel from "./Carrousel";

const user = {
  first_name: "Bob",
  last_name: "Dylan",
  fav_animals: ["Horse", "Turtle", "Elephant", "Monkey"],
};

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Hello world</h1>
        <Carrousel />
        {/* <Exercise2 />
        <Sum />
        <h3>{user.first_name}</h3>
        <h3>{user.last_name}</h3>
        <UserFavoriteColors animal={user.fav_animals} />
        <Exercise4 /> */}
      </header>
    </div>
  );
};

export default App;
