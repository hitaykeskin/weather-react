import React, { useState } from "react";
import axios from "axios";

import "./Weather.css";
export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  const [ready, setReady] = useState(false);
  function handleResponse(response) {
    console.log(response.data);
    setWeatherData({
      ready: true,
      temperature: response.data.main.temp,
      description: response.data.weather[0].description,
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed,
      city: response.data.name,
      iconUrl: "https://ssl.gstatic.com/onebox/weather/64/sunny.png",
      date: "Sunday 01:13",
    });
    setReady(true);
  }

  if (weatherData.ready) {
    return (
      <div className="Weather">
        <h1>{weatherData.city}</h1>
        <h2>
          <div className="weather-temperature">
            <span className="degree">
              {" "}
              {Math.round(weatherData.temperature)}
            </span>

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
          src={weatherData.iconUrl}
          alt={weatherData.description}
          id="icon"
        />
        <p className="description text-capitalize">{weatherData.description}</p>
        <p className="temp-humidity">
          <span> Humidity:</span>
          <span className="humidity">{weatherData.humidity}</span>
          <span>%</span>
        </p>
        <p className="wind-speed">
          <span>Wind Speed: </span>
          <span className="wind">{weatherData.wind}</span>
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
  } else {
    const apiKey = "8db434350a59b780ed9dec3c5447cf53";
    let apiUrl = `http://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
    return "Loading...";
  }
}
