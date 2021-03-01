import React from "react";
import "./Forecast.css";
export default function Forecast() {
  return (
    <div className="Forecast">
      <div class="row" id="forecast">
        <div class="col-2">
          <h5 class="twelve">12:00</h5>
          <img
            src="https://ssl.gstatic.com/onebox/weather/48/snow_light.png"
            alt=""
          />
        </div>
        <div class="weather-forecast-temperature">
          <strong>12°C</strong>11°C
        </div>
      </div>
    </div>
  );
}
