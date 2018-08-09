import React from "react";

const Settings = props => {
  return (
    <section>
      <div>
        <h2 id="break-label">Break Length</h2>
        <button id="break-decrement">-</button>
        <h3 id="break-length">5</h3>
        <button id="break-increment">+</button>
      </div>
      <div>
        <h2 id="session-label">Session Length</h2>
        <button id="session-decrement">-</button>
        <h3 id="session-length">25</h3>
        <button id="session-increment">+</button>
      </div>
    </section>
  );
};

export default Settings;
