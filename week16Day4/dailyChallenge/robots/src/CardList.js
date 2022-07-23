import React from "react";
import Card from "./Card";

const CardList = ({ robots }) => {
  // if (true) {
  //   throw new Error("NOOO");
  // }
  const cardComponent = robots.map((robot, i) => {
    return (
      <Card id={robots[i].id} name={robots[i].name} email={robots[i].email} />
    );
  });
  return <div>{cardComponent}</div>;
};

export default CardList;
