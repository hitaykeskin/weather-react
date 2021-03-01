import React from "react";
import "./Current.css";
export default function Current() {
  return (
    <div className="Current">
      <div class="row">
        <div class="col-6">
          <h3 class="current-date">Today</h3>
        </div>
        <div class="col-3">
          <form>
            <label for="city">
              <input
                type="text"
                class="form-control"
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
