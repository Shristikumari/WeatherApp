import React from "react";
import Dailyforcast from "./dailyforcast";
import Aircondition from "./Aircondition";

const DoubleCard = ({ tempInfo }) => {
  // Check if tempInfo exists and has a 'Days' property
  if (!tempInfo || !tempInfo.Days || tempInfo.Days.length === 0) {
    return <p>No forecast data available</p>;
  }

  // Get today's date in the "DD/MM/YYYY" format
  const todayDate = new Date().toLocaleDateString("en-GB");

  // Find today's data in the 'Days' array
  const todayData = tempInfo.Days.find((item) => item.date === todayDate);

  // Check if today's data exists
  if (!todayData) {
    return <p>No data available for today</p>;
  }
  const sunrise = todayData.sunrise_time;
  const temp_max_c = todayData.temp_max_c;

  return (
    <>
      <div className="doubleCard">
        <div className="row">
          <div className="col-8">
            <div className="row">
              <h1>Delhi</h1>
              <p>Sunrise:{sunrise}AM</p>
            </div>
            <div className="row">
              <h1>{temp_max_c}°c</h1>
            </div>
          </div>
          <div className="col-4">
            <i
              className="wi wi-day-sunny"
              style={{ color: "orange", fontSize: "6rem" }}
            ></i>
          </div>
        </div>
        <div className="row">
          <div className="card">
            <h5>Todays Forecast</h5>
            <Dailyforcast tempInfo={tempInfo} />
          </div>
        </div>
        <div className="row">
          <div className="card">
            <h5>AIR condition</h5>
            <Aircondition tempInfo={tempInfo} />
          </div>
        </div>
      </div>
    </>
  );
};

export default DoubleCard;
