import React from "react";
import "./App.scss";
import NameTag from "./components/nameTag";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1 className="name title">Names List</h1>
        <NameTag>Peter</NameTag>
        <NameTag>John</NameTag>
        <NameTag>Jill</NameTag>
      </header>
    </div>
  );
}

export default App;
