import React from "react";
import "./App.css";
import SearchCar from "./SearchCar";
import Car from "./Car";
// import Todolist from "./Todolist";

// class App extends React.Component {
//   constructor() {
//     super();
//   }

//   render() {
//     return (
//       <div className="App">
//         <header className="App-header">
//           <Todolist />
//         </header>
//       </div>
//     );
//   }
// }

const listCars = [
  {
    id: 1,
    brand: "ford",
    name: "ford torino",
    year: "1970-01-01",
    origin: "USA",
  },
  {
    id: 2,
    brand: "ford",
    name: "ford galaxie 500",
    year: "1970-01-01",
    origin: "USA",
  },
  {
    id: 3,
    brand: "chevrolet",
    name: "chevrolet vega 2300",
    year: "1971-01-01",
    origin: "USA",
  },
  {
    id: 4,
    brand: "peugeot",
    name: "peugeot 504 (sw)",
    year: "1972-01-01",
    origin: "Europe",
  },
  {
    id: 5,
    brand: "renault",
    name: "renault 12 (sw)",
    year: "1972-01-01",
    origin: "Europe",
  },
];

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      chosenCars: [],
      nameChosenCar: "",
    };
  }

  handleChange = (event) => {
    const searchedCars = listCars.filter((car) => {
      return car.brand.includes(event.target.value);
    });
    this.setState({
      nameChosenCar: event.target.value,
      chosenCars: searchedCars,
    });
    console.log(this.state);
  };

  render() {
    return (
      <div>
        <SearchCar
          searchCar={this.state.nameChosenCar}
          handleChange={this.handleChange}
        />
        <Car chosenCar={this.state.chosenCars} />
      </div>
    );
  }
}

export default App;
