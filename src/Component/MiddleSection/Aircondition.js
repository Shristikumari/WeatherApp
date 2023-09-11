import React from "react";

const Aircondition = ({ tempInfo }) => {
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

  // Extract relevant information from today's data
  const wind = todayData.windspd_max_kmh; // Replace with the actual property name
  const windgst_max_kts = todayData.windgst_max_kts;
  const windgst_max_mph = todayData.windgst_max_mph;
  const windgst_max_ms = todayData.windgst_max_ms;

  return (
    <>
      <div className="air-condition">
        <div className="col-6">
          <div className="row">
            <span>
              <i className="wi wi-strong-wind"></i>
              Wind in KMH
            </span>
            <span>{wind}kmh</span>
          </div>
          <div className="row">
            <span>
              <i className="wi wi-strong-wind"></i>
              Wind in KTS
            </span>
            <span>{windgst_max_kts}kts</span>
          </div>
        </div>
        <div className="col-6">
          <div className="row">
            <span>
              <i className="wi wi-strong-wind"></i>
              Wind in MPH
            </span>
            <span>
              {windgst_max_mph}
              kmh
            </span>
          </div>
          <div className="row">
            <span>
              <i className="wi wi-strong-wind"></i>
              Wind in MS
            </span>
            <span>{windgst_max_ms}ms</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Aircondition;
