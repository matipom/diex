import React from "react";

import "./App.css";
// // function App() {
// //   return (
// //     <div className="App">
// //       <header className="App-header">

// //       </header>
// //     </div>
// //   );
// // }

// // import Sunrise from "./Sunrise";
// // import Car2 from "./Components/Car2";
// // import Events from "./Components/Events";
// // const carinfo = { name: "Ford", model: "Mustang" };

// import Fname from "./Components/Fname";
// import Lname from "./Components/Lname";
// import Button from "./Components/Button";
// import Results from "./Components/Results";
// // import Results from "./Components/Results";

// class App extends React.Component {
//   constructor() {
//     super();
//     this.state = {
//       fname: "",
//       sname: "",
//       result: {},
//     };
//   }

//   handleChange = (e) => {
//     // console.log(e.target.value);
//     this.setState({ [e.target.name]: e.target.value });
//   };

//   handleClick = () => {
//     const { fname, sname } = this.state;
//     const options = {
//       method: "GET",
//       headers: {
//         "X-RapidAPI-Key": "5b32186a52msh662881a5bf2d032p1b065fjsn764996b6670a",
//         "X-RapidAPI-Host": "love-calculator.p.rapidapi.com",
//       },
//     };

//     fetch(
//       `https://love-calculator.p.rapidapi.com/getPercentage?sname=${sname}&fname=${fname}`,
//       options
//     )
//       .then((response) => response.json())
//       .then((response) => {
//         console.log(response);
//         this.setState({ result: response });
//       })

//       .catch((err) => console.error(err));
//   };

//   render() {
//     return (
//       <div>
//         <Fname handleChange={this.handleChange} />

//         <Lname handleChange={this.handleChange} />

//         <Button handleClick={this.handleClick} />

//         <Results result={this.state.result} />
//       </div>
//     );
//   }
// }
import Phone from "./Components/Phone";
import Color from "./Components/Color";
const App = () => {
  return (
    <>
      <Phone />
      <Color />
    </>
  );
};

export default App;
