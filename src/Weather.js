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
          <h3 class="current-date">Today </h3>
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
      <img
        src="https://ssl.gstatic.com/onebox/weather/64/sunny.png"
        alt="weather-icon"
        id="icon"
      />
      <p className="description">Cloudy</p>
      <p className="temp-humidity">
        <span> Humidity:</span>
        <span className="humidity">42</span>
        <span>%</span>
      </p>
      <p className="wind-speed">
        <span>Wind Speed: </span>
        <span className="wind">3</span>
        <span>km/h</span>
      </p>
      <div id="forecast">
        <h5 class="twelve">12:00</h5>
        <img
          src="https://ssl.gstatic.com/onebox/weather/48/snow_light.png"
          alt=""
        />
      </div>
      <div class="weather-forecast-temperature">
        <strong>12°C </strong>11°C
      </div>
    </div>
  );
}
