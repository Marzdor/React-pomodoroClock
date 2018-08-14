import React from "react";

const Settings = props => {
  return (
    <section id="settings">
      <div id="break-setting" className="setting">
        <h2 id="break-label">Break Length</h2>
        <button onClick={props.handleSettingsClick} id="break-decrement">
          🡇
        </button>
        <h3 id="break-length">{props.breakTime}</h3>
        <button onClick={props.handleSettingsClick} id="break-increment">
          🡅
        </button>
      </div>
      <div id="session-setting" className="setting">
        <h2 id="session-label">Session Length</h2>
        <button onClick={props.handleSettingsClick} id="session-decrement">
          🡇
        </button>
        <h3 id="session-length">{props.sessionTime}</h3>
        <button onClick={props.handleSettingsClick} id="session-increment">
          🡅
        </button>
      </div>
    </section>
  );
};

export default Settings;
