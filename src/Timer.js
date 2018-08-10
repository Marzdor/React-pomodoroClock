import React from "react";

const Timer = props => {
  return (
    <section>
      <h2 id="timer-label">{props.currentTimer}</h2>
      <h3 id="time-left">{props.timerMin + ":" + props.timerSec}</h3>
      <button id="start_stop" onClick={props.handleStartStopClick}>
        ►❚❚
      </button>
      <button id="reset" onClick={props.handleResetClick}>
        ⟳
      </button>
    </section>
  );
};

export default Timer;
