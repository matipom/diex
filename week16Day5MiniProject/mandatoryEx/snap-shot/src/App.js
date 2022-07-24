import React from "react";
import "./App.css";
import { Routes, Route, Link, useNavigate } from "react-router-dom";
import Gallery from "./Gallery";
import { useState } from "react";

const App = () => {
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  const handleSearch = () => {
    navigate(`/${search}`);
  };
  return (
    <div>
      <input
        type="text"
        display="inline-block"
        placeholder="Search..."
        onChange={(e) => {
          setSearch(e.target.value);
        }}
      />
      <button onClick={handleSearch}>Search</button>

      <ul
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          height: "10px",
        }}
      >
        <li>
          <Link to="/mountain" reloadDocument>
            Mountain
          </Link>
        </li>
        <li>
          <Link to="/beaches" reloadDocument>
            Beaches
          </Link>
        </li>
        <li>
          <Link to="/birds" reloadDocument>
            Birds
          </Link>
        </li>
        <li>
          <Link to="/food" reloadDocument>
            Food
          </Link>
        </li>
      </ul>
      <Routes>
        <Route path="/search/:id" />
        <Route path="/:id" element={<Gallery />} />
      </Routes>
    </div>
  );
};

export default App;
