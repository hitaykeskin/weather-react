import React, { useState } from "react";
import axios from "axios";
import "./Weather.css";
export default function Weather() {
  const [city, setCity] = useState("Istanbul");
  const [weatherData, setWeatherData] = useState({});

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
    setWeatherData({
      temperature: response.data.main.temp,
      wind: response.data.main.wind,
      description: response.data.weather[0].main,
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed,
    });
  }
  return (
    <div className="Weather">
      <h1>{city}</h1>
      <h2>
        <div className="weather-temperature">
          <span className="degree"> {Math.round(weatherData.temperature)}</span>
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
      <img
        src="https://ssl.gstatic.com/onebox/weather/64/sunny.png"
        alt="weather-icon"
        id="icon"
      />
      <p className="description">{weatherData.description}</p>
      <p className="temp-humidity">
        <span> Humidity:</span>
        <span className="humidity">{Math.round(weatherData.humidity)}</span>
        <span>%</span>
      </p>
      <p className="wind-speed">
        <span>Wind Speed: </span>
        <span className="wind">{Math.round(weatherData.wind)}</span>
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
