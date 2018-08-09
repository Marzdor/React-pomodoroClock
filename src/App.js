import React, { Component } from "react";
import "./App.css";
import Settings from "./Settings";
import Timer from "./Timer";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sessionTime: 25,
      breakTime: 5,
      timerRunning: false,
      currentTimer: "Session",
      currentTime: 25
    };
    this.handleSettingsClick = this.handleSettingsClick.bind(this);
  }

  handleSettingsClick(e) {
    const btn = e.target;
    if (/break/.test(btn.id)) {
      console.log(btn.innerHTML);
      btn.innerHTML === "+"
        ? this.setState({ breakTime: this.state.breakTime + 1 })
        : this.setState({ breakTime: this.state.breakTime - 1 });
    } else {
      btn.innerHTML === "+"
        ? this.setState({ sessionTime: this.state.sessionTime + 1 })
        : this.setState({ sessionTime: this.state.sessionTime - 1 });
    }
  }

  render() {
    return (
      <div id="App">
        <Settings handleSettingsClick={this.handleSettingsClick} />
        <Timer
          timerText={this.state.currentTime}
          currentTimer={this.state.currentTimer}
        />
      </div>
    );
  }
}

export default App;
