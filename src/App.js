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

    if (!this.state.timerRunning) {
      if (/break/.test(btn.id)) {
        console.log(btn.innerHTML);
        btn.innerHTML === "+"
          ? this.setState({ breakTime: this.state.breakTime + 1 })
          : this.setState({ breakTime: this.state.breakTime - 1 });
        if (this.state.currentTimer === "Break")
          this.setState({ currentTime: this.state.breakTime });
      } else {
        btn.innerHTML === "+"
          ? this.setState({ sessionTime: this.state.sessionTime + 1 })
          : this.setState({ sessionTime: this.state.sessionTime - 1 });
        if (this.state.currentTimer === "Session")
          this.setState({ currentTime: this.state.sessionTime });
      }
    }
  }

  render() {
    return (
      <div id="App">
        <Settings
          handleSettingsClick={this.handleSettingsClick}
          breakTime={this.state.breakTime}
          sessionTime={this.state.sessionTime}
        />
        <Timer
          timerText={this.state.currentTime}
          currentTimer={this.state.currentTimer}
        />
      </div>
    );
  }
}

export default App;
