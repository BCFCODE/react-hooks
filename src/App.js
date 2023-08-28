import React from "react";
import "./App.scss";
import NameTag from "./components/nameTag";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1 className="name title">Names List</h1>
        <NameTag firstName="peter" lastName="peterson"></NameTag>
        <NameTag firstName="john" lastName="johnson"></NameTag>
        <NameTag firstName="jill" lastName="jillion"></NameTag>
        <NameTag></NameTag>
      </header>
    </div>
  );
}

export default App;
