import React, { useState } from "react";
import axios from "axios";
import "./Weather.css";
export default function Weather() {
  const [city, setCity] = useState("Istanbul");
  const [temperature, setTemperature] = useState("11");
  const [description, setDescription] = useState("Sunny");
  const [humidity, setHumidity] = useState("63");
  const [wind, setWind] = useState("2");

  function handleSubmit(event) {
    event.preventDefault();
    let apiKey = "8db434350a59b780ed9dec3c5447cf53";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(showTemperature);
  }

  function handleChange(event) {
    setCity(event.target.value);
  }

  function showTemperature(response) {
    setTemperature(Math.round(response.data.main.temp));
    setDescription(response.data.weather[0].main);
    setHumidity(response.data.main.humidity);
    setWind(Math.round(response.data.wind.speed));
  }

  return (
    <div className="Weather">
      <h1>{city}</h1>
      <h2>
        <div className="weather-temperature">
          <span className="degree"> {temperature}</span>
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
          <form onSubmit={handleSubmit}>
            <label for="city">
              <input
                type="text"
                className="form-control"
                placeholder="Please enter your city"
                required
                id="city"
                name="city-name"
                autoFocus="on"
                onChange={handleChange}
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
      <p className="description">{description}</p>
      <p className="temp-humidity">
        <span> Humidity:</span>
        <span className="humidity">{humidity}</span>
        <span>%</span>
      </p>
      <p className="wind-speed">
        <span>Wind Speed: </span>
        <span className="wind">{wind}</span>
        <span>km/h</span>
      </p>
    </div>
  );
}
