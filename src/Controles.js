import React from "react";

const Controls = props => {
  return (
    <section>
      <div id="break-label">
        <h2>Break Length</h2>
        <button id="break-decrement">-</button>
        <h3 id="break-length">5</h3>
        <button id="break-increment">+</button>
      </div>
      <div id="session-label">
        <h2>Session Length</h2>
        <button id="session-decrement">-</button>
        <h3 id="session-length">25</h3>
        <button id="session-increment">+</button>
      </div>
    </section>
  );
};

export default Controls;
