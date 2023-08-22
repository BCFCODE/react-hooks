import React from "react";
import "./App.scss";
import NameTag from "./components/nameTag";
import Input from './components/Input'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Input placeholder="Email" type="text"></Input>
        <h1 className="name title">Names List</h1>
        <NameTag firstName="peter" lastName="peterson"></NameTag>
        <NameTag firstName="john" lastName="johnson"></NameTag>
        <NameTag firstName="jill" lastName="jillion"></NameTag>
      </header>
    </div>
  );
}

export default App;
