import React from "react";
import logo from "./logo.svg";
import "./App.scss";
import nameTag from "./components/nameTag";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1 className="name title">Names List</h1>
        <nameTag></nameTag>
        <nameTag></nameTag>
        <nameTag></nameTag>
      </header>
    </div>
  );
}

export default App;
