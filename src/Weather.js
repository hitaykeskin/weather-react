import React from "react";
import "./Weather.css";
export default function Weather() {
  return (
    <div className="Weather">
      <h1>Istanbul</h1>
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
      <div class="row">
        <div class="col-6">
          <h3 class="current-date">Today</h3>
        </div>
        <div class="col-3">
          <form>
            <label for="city">
              <input
                type="text"
                className="form-control"
                placeholder="Please enter your city"
                required
                id="city"
                name="city-name"
                autoFocus="on"
              />
              <button class="btn" title="Search">
                🔎
              </button>
            </label>
          </form>
        </div>
        <div class="col-3">
          <button class="current-location">Current Location📍</button>
        </div>
      </div>
    </div>
  );
}
