import React, {useState} from "react";
import axios from "axios";





export default function Form() {
  let apiKey = "3f6be1c407b0d9d1933561808db358ba";
  let [city, setCity]= useState("");
  let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;


  function handleSubmit(event)
  {
    event.preventDefault();
     //alert (`The city is ${city}`)
    
    axios.get(url).then(displayTemperature);

  }
  
  function displayTemperature (response)
  {
    alert(response.data.main.temp);

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
          autofocus value={city}
        onChange={showCity}/>
        <input id="search-ingine" class="search" type="submit" value="Search" />
        <button type="button" class="btn btn-success current-location">
          Current
        </button>
      </form>
    </div>
  );
}
