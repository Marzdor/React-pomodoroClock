import React, { Component } from "react";
import "./App.css";
import Settings from "./Settings";
import Timer from "./Timer";

class App extends Component {
  render() {
    return (
      <div id="App">
        <Settings />
        <Timer />
      </div>
    );
  }
}

export default App;
