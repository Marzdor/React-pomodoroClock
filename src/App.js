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
      timerState: "off",
      currentTimer: "Session",
      time: {},
      seconds: 1500
    };
    this.handleSettingsClick = this.handleSettingsClick.bind(this);
    this.handleStartStopClick = this.handleStartStopClick.bind(this);
    this.handleResetClick = this.handleResetClick.bind(this);

    this.timer = 0;
    this.startTimer = this.startTimer.bind(this);
    this.countDown = this.countDown.bind(this);
  }

  secondsToTime(secs) {
    let divisor_for_minutes = secs % (60 * 60);
    let minutes = Math.floor(divisor_for_minutes / 60);

    let divisor_for_seconds = divisor_for_minutes % 60;
    let seconds = Math.ceil(divisor_for_seconds);

    if (seconds < 10) seconds = ("0" + seconds).slice(-2);
    if (minutes < 10) minutes = ("0" + minutes).slice(-2);

    let obj = {
      m: minutes,
      s: seconds
    };
    return obj;
  }

  componentDidMount() {
    let timeLeftVar = this.secondsToTime(this.state.seconds);
    this.setState({ time: timeLeftVar });
  }

  startTimer() {
    this.timer = setInterval(this.countDown, 1000);
  }

  countDown() {
    // Remove one second, set state so a re-render happens.
    let seconds = this.state.seconds - 1;
    this.setState({
      time: this.secondsToTime(seconds),
      seconds: seconds
    });

    // Check if we're at zero.
    if (seconds === 0) {
      clearInterval(this.timer);
      if (this.state.currentTimer === "Session") {
        let sec = this.state.breakTime * 60;
        this.setState({ currentTimer: "Break", seconds: sec });
        this.startTimer();
      } else if (this.state.currentTimer === "Break") {
        let sec = this.state.sessionTime * 60;
        this.setState({ currentTimer: "Session", seconds: sec });
        this.startTimer();
      }
    }
  }

  handleSettingsClick(e) {
    const btn = e.target;

    if (this.state.timerState === "off") {
      let newTime;

      if (/break/.test(btn.id)) {
        if (btn.innerHTML === "+" && this.state.breakTime < 60) {
          newTime = this.state.breakTime + 1;
          this.setState({
            breakTime: newTime,
            seconds: newTime * 60
          });
        } else if (btn.innerHTML === "-" && this.state.breakTime > 1) {
          newTime = this.state.breakTime - 1;
          this.setState({
            breakTime: newTime,
            seconds: newTime * 60
          });
        }
        if (this.state.currentTimer === "Break")
          this.setState({ time: this.secondsToTime(newTime * 60) });
      } else {
        if (btn.innerHTML === "+" && this.state.sessionTime < 60) {
          newTime = this.state.sessionTime + 1;
          this.setState({
            sessionTime: newTime,
            seconds: newTime * 60
          });
        } else if (btn.innerHTML === "-" && this.state.sessionTime > 1) {
          newTime = this.state.sessionTime - 1;
          this.setState({
            sessionTime: newTime,
            seconds: newTime * 60
          });
        }
        if (this.state.currentTimer === "Session")
          this.setState({ time: this.secondsToTime(newTime * 60) });
      }
    }
  }

  handleStartStopClick(e) {
    switch (this.state.timerState) {
      case "off":
        this.setState({ timerState: "on" });
        this.startTimer();
        break;
      case "on":
        clearInterval(this.timer);
        this.setState({ timerState: "paused" });
        break;
      case "paused":
        this.setState({ timerState: "on" });
        this.startTimer();
        break;
      default:
        console.log(this.state.timerState);
    }
  }

  handleResetClick(e) {
    if (this.state.timerState === "on") {
      clearInterval(this.timer);
    }
    let restTime = this.secondsToTime(25 * 60);
    this.setState({
      sessionTime: 25,
      breakTime: 5,
      timerState: "off",
      currentTimer: "Session",
      time: restTime,
      seconds: 1500
    });
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
          timerMin={this.state.time.m}
          timerSec={this.state.time.s}
          currentTimer={this.state.currentTimer}
          timerState={this.state.timerState}
          handleStartStopClick={this.handleStartStopClick}
          handleResetClick={this.handleResetClick}
        />
      </div>
    );
  }
}

export default App;
