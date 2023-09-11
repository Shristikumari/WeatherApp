import React, { useEffect, useState } from "react";
import { FaSearch } from "react-icons/fa";
import Main from "./MiddleSection/middleComponent";
import Sidebar from "./sideBar/sidebar";
import Forecast from "./foreCast/forecast";
const WeatherApp = () => {
  const [tempInfo, setTempInfo] = useState({});
  const [time, settime] = useState();
  const [toggleClick, setToggleClick] = useState({
    default: true,
    weather: false,
    cities: false,
    searchInput: false,
  });

  const weatherAPI = async () => {
    try {
      // let url = `https://api.openweathermap.org/data/2.5/forecast?lat=44.34&lon=10.99&appid=3fee5e81d8b5e97bbdea809206f966f8`;
      let url = `http://api.weatherunlocked.com/api/forecast/51.50,-0.12?app_id=2618aa2a&app_key=36121f30029afa3b1e3d752f720628a9`;

      let res = await fetch(url);
      let data = await res.json();
      setTempInfo(data);
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    weatherAPI();
  }, []);

  return (
    <div div className="containe-fluid">
      <div className="container">
        <Sidebar setToggleClick={setToggleClick} />
        <Main
          toggleClick={toggleClick}
          setToggleClick={setToggleClick}
          tempInfo={tempInfo}
        />
        <Forecast tempInfo={tempInfo} />
      </div>
    </div>
  );
};

export default WeatherApp;
