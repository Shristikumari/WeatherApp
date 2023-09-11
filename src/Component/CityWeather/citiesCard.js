import React, { useState, useEffect } from "react";
import "./cities.scss";
import DoubleCard from "../MiddleSection/doubleCard";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCloud,
  faSun,
  faSmog,
  faMoon,
  faTemp,
} from "@fortawesome/free-solid-svg-icons";

const CitiesCard = ({ cityInfo, searchvalue, tempInfo }) => {
  const {
    temp,
    humidity,
    pressure,
    weathermood,
    name,
    speed,
    country,
    sunset,
    sunrise,
    feels_like,
  } = cityInfo;

  // Converting sunset & sunrise time in seconds to HH:mm format
  let sunsetsec = sunset;
  let date = new Date(sunsetsec * 1000);
  let sunsets = `${date.getHours()}:${date.getMinutes()}`;
  //sunrise
  let sunrisesec = sunrise;
  let sunriseDate = new Date(sunrisesec * 1000);
  let sunrises = `${sunriseDate.getHours()}:${sunriseDate.getMinutes()}`;

  // Mapping weather mood to Font Awesome icons
  const getWeatherIcon = (weathermood) => {
    switch (weathermood.toLowerCase()) {
      case "clouds":
        return <FontAwesomeIcon icon={faCloud} />;
      case "haze":
        return <FontAwesomeIcon icon={faSmog} />;
      case "clear":
        return <FontAwesomeIcon icon={faSun} />;
      default:
        return <FontAwesomeIcon icon={faMoon} />;
    }
  };

  return (
    <div className="cities">
      <div className="card">
        <div className="row">
          <div className="col-8">
            <div className="eclipse">
              {getWeatherIcon(weathermood)} {/* Display weather icon */}
            </div>
            <div className="citi-name">
              <h1>{name}</h1>
              <p>{weathermood}</p>
            </div>
          </div>
          <div className="col-4">
            <h1>{temp}°</h1>
          </div>
        </div>
      </div>
      <div className="card" style={{ height: "25vh" }}>
        <div className="cityData">
          <div className="cityCard">
            <div className="row">
              <i className="wi wi-sunrise" style={{ color: "yellow" }}>
                sunrise
              </i>
              <h6>{sunrises}AM</h6>
              <i className="wi wi-sunset" style={{ color: "orange" }}>
                sunset
              </i>
              <h6>{sunsets}PM</h6>
            </div>
          </div>
          <div className="cityCard">
            <div className="row">
              <i className="wi wi-thermometer-exterior">Humidity</i>
              <h6>{humidity}</h6>
              <i className="wi wi-meteor">pressure</i>
              <h6>{pressure}</h6>
            </div>
          </div>
          <div className="cityCard">
            <div className="row">
              <i className="wi wi-thermometer-exterior ">Temp</i>
              <h6>{temp}</h6>
              <i className="wi wi-thermometer">Feel Like</i>
              <h6>{feels_like}</h6>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CitiesCard;
