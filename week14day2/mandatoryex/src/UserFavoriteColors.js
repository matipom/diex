import React from "react";

const animals = (props) => {
  return (
    <>
      <h3>{props.animal}</h3>
      {props.animal.map((item, i) => {
        return <li key={i}>{item}</li>;
      })}
    </>
  );
};

export default animals;

// In the UserFavoriteColors component, use the map function to create a
//  new array of <li>‘s.

// Each <li> corresponds to one animal from the fav_animals array.
// Display the <li>‘s. Tip : You can use the second parameter of the map
//  function as a key to uniquely identify each HTML item
