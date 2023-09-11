import React, { useState, useEffect } from "react";
import CitiesCard from "../CityWeather/citiesCard";
import DoubleCard from "./doubleCard";

const Main = ({ tempInfo = { tempInfo }, toggleClick, setToggleClick }) => {
  const [searchvalue, setSearchvalue] = useState("Delhi");
  const [cityInfo, setcityInfo] = useState({});

  const getWeatherInfo = async () => {
    try {
      let url = `https://api.openweathermap.org/data/2.5/weather?q=${searchvalue}&units=metric&appid=3fee5e81d8b5e97bbdea809206f966f8`;
      const res = await fetch(url);
      const data = await res.json();
      console.log(data);

      const { temp, humidity, pressure, feels_like } = data.main;
      const { main: weathermood } = data.weather[0];
      const { name } = data;
      const { speed } = data.wind;
      const { country, sunset, sunrise } = data.sys;
      const mynewweather = {
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
      };
      setcityInfo(mynewweather);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getWeatherInfo();
  }, [searchvalue]);

  //city card onclick//
  const onsearchClick = () => {
    setToggleClick({
      default: false,
      weather: false,
      cities: false,
      searchInput: true,
    });
  };

  return (
    <>
      <div className="middle-container">
        <div className="conatiner">
          <div className="row">
            {/****searchbar */}
            <div className="searchInput">
              <div className="search">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Have a question? Ask Now"
                  value={searchvalue}
                  onChange={(e) => setSearchvalue(e.target.value)}
                  onClick={() => {
                    onsearchClick();
                  }}
                />
              </div>
            </div>
          </div>
          {toggleClick.searchInput && <CitiesCard cityInfo={cityInfo} />}
          {toggleClick.cities && <CitiesCard cityInfo={cityInfo} />}
          {toggleClick.weather && <DoubleCard tempInfo={tempInfo} />}
          {toggleClick.default && <DoubleCard tempInfo={tempInfo} />}
        </div>
      </div>
    </>
  );
};

export default Main;
