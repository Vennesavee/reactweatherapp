import React from "react";
import ReactDOM from "react-dom";

export default function Temperature() {
  return (
    <div>
      <div class="col">
        <span id="temperature" class="temp">
          16{" "}
        </span>
        <span class="units">
          <sup>
            <a href="#" class="celsius-link active">
              °C
            </a>{" "}
            |
            <a href="#" class="fahrenheit-link">
              °F
            </a>
          </sup>
        </span>
        <span>
          <img
            class="icon-name"
            src="images.jpg/cloud-with-rain_1f327-fe0f.png"
            alt=""
          />
        </span>
      </div>
    </div>
  );
}
