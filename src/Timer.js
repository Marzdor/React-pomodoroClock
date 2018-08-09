import React from "react";

const Timer = props => {
  return (
    <section>
      <h2 id="timer-label">Session</h2>
      <h3 id="time-left">25:00</h3>
      <button id="start_stop">►❚❚</button>
      <button id="reset">⟳</button>
    </section>
  );
};

export default Timer;
