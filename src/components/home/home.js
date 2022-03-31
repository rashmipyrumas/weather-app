import React, { useState, useEffect } from "react";
import Icon from "@mdi/react";
import { mdiCloud } from "@mdi/js";
import "./home.css";

export default function Home(props) {
  const [weather, setWeather] = useState([]);
  const [temp, setTemp] = useState("");
  const [highTemp, setHighTemp] = useState("");
  const [lowTemp, setLowTemp] = useState("");
  const [toggleData, setToggleData] = useState("");
  const [data, setData] = useState({});
  const loadData = () => {
    fetch(
      "https://api.openweathermap.org/data/2.5/weather?q=New York, NY, USA&APPID=b7b87b0335c725dc048bea24f1743fc6"
    )
      .then((r) => r.json())
      .then((r) => {
        console.log(r);
        setData(r);
        displayWeather(r.weather);
        setTemp(r.main.temp - 273.15);
        setHighTemp(r.main.temp_max - 273.15);
        setLowTemp(r.main.temp_min - 273.15);
      });
  };

  const displayWeather = (weatherList) => {
    weatherList.forEach((element) => {
      setWeather(element.description);
    });
  };

  const checkValue = (e) => {
    if (e.target.id === "wind") {
      setToggleData("Wnid Speed : " + data.wind.speed + " meter/sec");
    } else if (e.target.id === "humidity") {
      setToggleData("Humidity : " + data.main.humidity + " %");
    } else if (e.target.id === "pressure") {
      setToggleData("Pressure : " + data.main.pressure + " hPa");
    } else if (e.target.id === "sys") {
      setToggleData(
        "Sunrice : " + new Date(data.sys.sunrise * 1000) + " Sunset : " + new Date(data.sys.sunset * 1000)
      );
    }
  };

  useEffect(() => {
    loadData();
  }, []);

  return (
    <div className="outer-layer">
      <div className="first-layer">
        <div>
          <Icon
            path={mdiCloud}
            title="Cloud"
            size={2}
            horizontal
            vertical
            rotate={180}
            color="#00c1d5"
          />
        </div>
        <div className="current-temp-style">{Math.floor(temp)}</div>
        <div className="unit-style">°C</div>
        <div>
          <p className="place-style">{data.name}</p>
          <p className="current-weather-style">{weather}</p>
        </div>
      </div>
      <div>
        <span className="high-low-temp">{Math.floor(highTemp)}°</span>
        <span className="high-low-temp">{Math.floor(lowTemp)}°</span>
      </div>
      <div className="toggle-style">
        <ul className="options-list">
          <li className="options-value" id="wind" onClick={checkValue}>
            Wind Speed
          </li>

          <li className="options-value" id="humidity" onClick={checkValue}>
            Humidity
          </li>
          <li className="options-value" id="pressure" onClick={checkValue}>
            Pressure
          </li>
          <li className="options-value" id="sys" onClick={checkValue}>
            Sunrice/Sunset Time
          </li>
        </ul>
      </div>
      <div className="toggle-data-style">{toggleData}</div>
      <div className="daily-style"><a href="/daysChart">Click here</a> to view 7 Day forecast</div>
    </div>
  );
}
