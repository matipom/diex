import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import BuggyCounter from "./App";
import reportWebVitals from "./reportWebVitals";
import ErrorBoundary from "./ErrorBoundary";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ErrorBoundary>
      <BuggyCounter />
      <BuggyCounter />
    </ErrorBoundary>
    <ErrorBoundary>
      <BuggyCounter />
    </ErrorBoundary>
    <ErrorBoundary>
      <BuggyCounter />
    </ErrorBoundary>
    <BuggyCounter />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
