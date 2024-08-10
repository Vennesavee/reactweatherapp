import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import Header from "./Header";
import Form from "./Form";
import Temperature from "./Temperature.js";
import Footer from "./Footer";

export default function App() {
  return (
    <div>
      <div class="main-container">
        <Header />
        <Form />
        <div class="container text-center">
          <div class="row">
            <div class="col">
              <ul>
                <h1>
                  <li id="city-name"></li>
                </h1>
                <li id="date">Last updated : 2 hours ago</li>
                <li id="description"></li>
                <li id="humidity"></li>
                <li id="wind"></li>
              </ul>
            </div>
            <Temperature />
          </div>
        </div>
        <div class="container text-center" id="weather-forecast">
          <div class="row">
            <div class="col-2">
              Wed <br />
              <img
                class="icons"
                src="https://s3.amazonaws.com/shecodesio-production/uploads/files/000/084/639/original/cloudy.png?1686045870"
                alt=""
              />
              <br />
              <div className="weather-forecast-temperatures">
                <span className="weather-forecast-temperature-max">15°</span>/
                <span className="weather-forecast-temperature-min">10°</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
