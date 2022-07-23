import React from "react";
import "./App.css";
import { Routes, Route, Link } from "react-router-dom";

const SearchBox = () => (
  <div>
    <input type="text" />
  </div>
);

const Mountain = () => (
  <div>
    <h1>Mountain pictures</h1>
    <img
      src="https://cdn.pixabay.com/photo/2018/05/18/15/30/webdesign-3411373_1280.jpg"
      alt="Homepage"
      width="40%"
    />
  </div>
);

const Beaches = () => (
  <div>
    <h1>Beaches pictures</h1>
    <img
      src="https://cdn.pixabay.com/photo/2014/04/03/10/26/turntable-310450_1280.png"
      alt="About"
      width="20%"
    />
  </div>
);

const Birds = () => (
  <div>
    <h1>Birds pictures</h1>
    <img
      src=" https://cdn.pixabay.com/photo/2017/06/10/07/18/list-2389219_1280.png"
      alt="About"
      width="30%"
    />
  </div>
);

const Food = () => (
  <div>
    <h1>Food pictures</h1>
    <img
      src=" https://cdn.pixabay.com/photo/2017/06/10/07/18/list-2389219_1280.png"
      alt="About"
      width="30%"
    />
  </div>
);

const App = () => (
  <div>
    <p style={{ textAlign: "center", marginBottom: "50px" }}>
      <Link to="/search/">
        <input type="text" display="inline-block" placeholder="Search..." />
      </Link>
    </p>
    <ul
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "10px",
      }}
    >
      <li>
        <Link to="/mountain">Mountain</Link>
      </li>
      <li>
        <Link to="/beaches">Beaches</Link>
      </li>
      <li>
        <Link to="/birds">Birds</Link>
      </li>
      <li>
        <Link to="/food">Food</Link>
      </li>
    </ul>
    <Routes>
      <Route path="/search/:id" />
      <Route path="/mountain" element={<Mountain />} />
      <Route path="/beaches" element={<Beaches />} />
      <Route path="/birds" element={<Birds />} />
      <Route path="/food" element={<Food />} />
    </Routes>
  </div>
);

export default App;
