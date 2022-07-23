import Home from "./components/Home";
import Contact from "./components/Contact";
import Nav from "./components/Nav";
import React, { useState, useEffect } from "react";
import Counter from "./components/Counter";
// import { Routes, Route, Link } from "react-router-dom";
import About from "./components/About";

import "./App.css";

//HOOKS

const App = (props) => {
  const [name, setName] = useState("jhon");
  const [lastName, setLastName] = useState("");
  const [users, setUsers] = useState([]);
  // const [counter, setCounter] = useState(1);
  //sino pongo [] en usestate hago un if en el map

  // const handleChange = (e) => {
  //   setName(e.target.value);
  // };
  // const add = () => {
  //   setCounter(counter + 1);
  // };
  // const subs = () => {
  //   setCounter(counter - 1);
  // };

  useEffect(() => {
    // fetch("https://jsonplaceholder.typicode.com/users")
    //   .then((res) => res.json())
    //   .then((data) => {
    //     setUsers(data);
    //   })
    //   .catch((e) => {
    //     console.log(e);
    //   });
    console.log(name);
    return () => {
      console.log("unmount"); //compoonentunmount por ejemplo pones algo q deje de funcionar, un clear interval
    };
  }, [lastName, name]);
  //[] solo para componentdidmount
  //fetch de una sin clickear
  //[name] cada vez q cambia llama a useeffect como componentdidupdate

  const getUsers = () => {
    // fetch("https://jsonplaceholder.typicode.com/users")
    //   .then((res) => res.json())
    //   .then((data) => {
    //     setUsers(data);
    //   })
    //   .catch((e) => {
    //     console.log(e);
    //   });
  };

  return (
    <>
      <h1>Hooks Example</h1>
      My name is: {name} {lastName}
      <div>
        <input type="text" onChange={(e) => setName(e.target.value)} />
      </div>
      <div>
        <input type="text" onChange={(e) => setLastName(e.target.value)} />
      </div>
      <div>
        <h1>Users:</h1>
        {users.map((item) => {
          return (
            <div key={item.id}>
              <h2>{item.name}</h2>
            </div>
          );
        })}
      </div>
      <div>
        <button onClick={getUsers}>Get Users</button>
      </div>
      <Counter />
      {/* <div>
        <button onClick={add}>+</button>
        {counter}
        <button onClick={subs}>-</button>
      </div> */}
    </>
  );
};

//sin switch
// function App() {
//   return (
//     <div>
//       <Nav />
//       <Routes>
//         <Route
//           path="/"
//           element={
//             <>
//               <Home />
//               {/* <About /> */}
//             </>
//           }
//         />
//         <Route path="/home" element={<Home />} />
//         <Route path="/about" element={<About />} />
//         <Route path="/contact" element={<Contact />} />
//       </Routes>
//     </div>
//   );
// }

// class App extends React.Component {
//   constructor() {
//     super();
//     this.state = {
//       page: "home",
//     };
//   }
//   goto = (page) => {
//     this.setState({ page: page });
//   };
//   render() {
//     switch (this.state.page) {
//       case "home":
//         return (
//           <>
//             <button onClick={() => this.goto("about")}>About</button>
//             <Home />
//           </>
//         );
//       case "about":
//         return (
//           <>
//             <button onClick={() => this.goto("contact")}>contact</button>

//             <About />
//           </>
//         );
//       case "contact":
//         return (
//           <>
//             <button onClick={() => this.goto("home")}>Home</button>

//             <Contact />
//           </>
//         );

//       default:
//         return (
//           <>
//             <Home />
//           </>
//         );
//     }
//   }
// }

export default App;
