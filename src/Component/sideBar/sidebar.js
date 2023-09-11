import React, { useState } from "react";
import { NavLink } from "react-router-dom";
const Sidebar = (props) => {
  const { setToggleClick } = props;

  const onUmbrelaClick = () => {
    setToggleClick({
      default: true,
      weather: false,
      cities: false,
      searchInput: false,
    });
  };

  const onWeatherClick = () => {
    setToggleClick({
      default: false,
      weather: true,
      cities: false,
      searchInput: false,
    });
  };

  const onCityClick = () => {
    setToggleClick({
      default: false,
      weather: false,
      cities: true,
      searchInput: false,
    });
  };

  return (
    <div className="sidebar-caontainer">
      <div className="card">
        <div className="menu">
          <span
            className="icon"
            onClick={() => {
              onUmbrelaClick();
            }}
            style={{ marginTop: "30px", color: "skyblue", fontSize: "32px" }}
          >
            <i className="wi wi-umbrella"></i>
          </span>
          <span
            className="weather"
            onClick={() => {
              onWeatherClick();
            }}
          >
            <i className="wi wi-day-snow-wind"></i>
            Weather
          </span>
          <span
            className="cities"
            onClick={() => {
              onCityClick();
            }}
          >
            <i className="wi wi-windy"></i>cities
          </span>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
