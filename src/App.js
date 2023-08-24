import React from "react";
import "./App.scss";
import Input from './components/Input'


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Input placeholder="Email" type="text"></Input>
      </header>
    </div>
  );
}

export default App;
