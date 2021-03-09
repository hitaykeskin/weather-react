import React from "react";
import WeatherIcon from "./WeatherIcon";

export default function WeatherForecastPreview(props) {
  function hours() {
    let date = new Date(props.data.dt * 1000);
    let hours = date.getHours();
    return `${hours}:00`;
  }

  function temperature() {
    let temperature = Math.round(props.data.main.temp);
    return `${temperature}°C`;
  }
  return (
    <div className="WeatherForecastPreview col">
      <div className="col">
        <p>{hours()}</p>
      </div>
      <div className="col">
        <WeatherIcon code={props.data.weather[0].icon} />
      </div>
      <div className="col">
        <p>{temperature()}</p>
      </div>
    </div>
  );
}
