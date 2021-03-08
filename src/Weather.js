import React, { useState } from "react";
import axios from "axios";
import FormattedDate from "./FormattedDate";
import "./Weather.css";
import WeatherIcon from "./WeatherIcon";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  const [city, setCity] = useState(props.defaultCity);
  function handleResponse(response) {
    setWeatherData({
      ready: true,
      temperature: response.data.main.temp,
      description: response.data.weather[0].description,
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed,
      city: response.data.name,
      icon: response.data.weather[0].icon,
      date: new Date(response.data.dt * 1000),
    });
  }

  function search() {
    const apiKey = "8db434350a59b780ed9dec3c5447cf53";
    let apiUrl = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search(city);
  }

  function handleCityChange(event) {
    setCity(event.target.value);
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
            <h3 class="current-date">
              <FormattedDate date={weatherData.date} />
            </h3>
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
                  onChange={handleCityChange}
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
        <WeatherIcon code={weatherData.icon} />
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
    search();
    return "Loading...";
  }
}
