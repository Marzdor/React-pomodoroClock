import React from "react";

const Timer = props => {
  return (
    <section>
      <h2 id="timer-label">{props.currentTimer}</h2>
      <h3 id="time-left">{props.timerText}</h3>
      <button id="start_stop">►❚❚</button>
      <button id="reset">⟳</button>
    </section>
  );
};

export default Timer;
