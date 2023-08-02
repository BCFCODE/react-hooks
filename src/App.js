import React from "react";
import logo from "./logo.svg";
import "./App.scss";
import NameTag from "./components/nameTag";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1 className="name title">Names List</h1>
        <NameTag>peter</NameTag>
        <NameTag>john</NameTag>
        <NameTag>jill</NameTag>
      </header>
    </div>
  );
}

export default App;
