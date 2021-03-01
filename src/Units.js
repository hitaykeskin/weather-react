import React from "react";
import "./Units.css";
export default function Units() {
  return (
    <div className="Units">
      <h2>
        <div className="weather-temperature">
          <span className="degree"> 13</span>
          <span className="units">
            <a href="#" className="active" id="celsius-unit">
              °C
            </a>
          </span>
          <span className="units">
            <a href="#" id="fahrenheit-unit">
              °F
            </a>
          </span>
        </div>
      </h2>
    </div>
  );
}
