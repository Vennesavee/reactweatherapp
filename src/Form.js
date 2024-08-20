import React,  {useState} from "react";
import ReactDOM from "react-dom";
import axios from "axios";


export default function Form() {
  let apiKey = "fda3688b1db05987dd5d07c237aecfba";
  let [city, setCity]= useState("");
  let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;


  function handleSubmit(event)
  {
    event.preventDefault();
    
    axios.get(url).then(DisplayTemperature);

  }

  function showCity(event)
  {
    setCity(event.target.value);
  }
  return (
    <div>
      <form id="city-form"onSubmit={handleSubmit}>
        <input
          id="city-input"
          class="city"
          type="text"
          placeholder="Enter a city"
          autofocus
        onChange={showCity}/>
        <input id="search-ingine" class="search" type="submit" value="Search" />
        <button type="button" class="btn btn-success current-location">
          Current
        </button>
      </form>
    </div>
  );
}
