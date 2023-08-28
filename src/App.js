/* eslint-disable react/display-name */
import React from "react";
import "./App.scss";
import NameTag from "./components/nameTag";

const makeGreen = (BaseComponent) => (props) => {
  const addGreen = {
    style: {
      color: "green",
    },
  };

  const newProps = {
    ...props,
    ...addGreen,
  };

  return <BaseComponent {...newProps} />;
};

const removeInline = (BaseComponent) => (props) => {
  const newProps = { ...props };
  delete newProps.style;
  return <BaseComponent {...newProps}></BaseComponent>;
};
const GreenNameTag = makeGreen(NameTag);
const CleanNameTag = removeInline(NameTag);
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1 className="name title">Names List</h1>
        <GreenNameTag firstName="peter" lastName="peterson"></GreenNameTag>
        <CleanNameTag
          style={{ color: "red" }}
          firstName="john"
          lastName="johnson"
        ></CleanNameTag>
        <NameTag
          style={{ color: "red" }}
          firstName="jill"
          lastName="jillion"
        ></NameTag>
        <NameTag></NameTag>
      </header>
    </div>
  );
}

export default App;
