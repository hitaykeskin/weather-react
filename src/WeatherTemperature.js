import React, { useState } from "react";

export default function WeatherTemperature(props) {
  const [unit, setUnit] = useState("celsius");

  function showFahrenheit(event) {
    event.preventDefault();
    setUnit("fahrenheit");
  }

  function showCelsius(event) {
    event.preventDefault();
    setUnit("celsius");
  }

  if (unit === "celsius") {
    return (
      <div className="weather-temperature">
        <span className="degree"> {Math.round(props.celsius)}</span>
        <span className="units">°C</span>
        <span className="units">
          <a href="/" onClick={showFahrenheit}>
            °F
          </a>
        </span>
      </div>
    );
  } else {
    let fahrenheit = (props.celsius * 9) / 5 + 32;
    return (
      <div className="weather-temperature">
        <span className="degree"> {Math.round(fahrenheit)}</span>
        <span className="units">
          <a href="/" onClick={showCelsius}>
            °C
          </a>
        </span>
        <span className="units">°F</span>
      </div>
    );
  }
}
