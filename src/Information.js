import React from "react";
import "./Information.css";
export default function Information() {
  return (
    <div className="Information">
      <p className="description">Clouds</p>
      <p className="temp-humidity">
        <span> Humidity:</span>
        <span className="humidity">63</span>
        <span>%</span>
      </p>
      <p className="wind-speed">
        <span>Wind Speed: </span>
        <span className="wind">2</span>
        <span>km/h</span>
      </p>
    </div>
  );
}
