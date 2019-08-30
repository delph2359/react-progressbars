import React, { Component } from "react";
import "./App.css";
import ProgressBar from "./components/ProgressBar";

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Progress Bars</h1>
        <ProgressBar />
      </div>
    );
  }
}

export default App;
