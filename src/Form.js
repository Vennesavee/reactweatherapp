import React from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.css";

export default function Form() {
  return (
    <div>
      <form id="city-form">
        <input
          id="city-input"
          class="city"
          type="text"
          placeholder="Enter a city"
          autofocus
        />
        <input id="search-ingine" class="search" type="submit" value="Search" />
        <button type="button" class="btn btn-success current-location">
          Current
        </button>
      </form>
    </div>
  );
}
