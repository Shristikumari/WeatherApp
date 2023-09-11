import React from "react";

const Dailyforcast = ({ tempInfo }) => {
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
  const sunset = todayData.sunset_time;
  const moonrise = todayData.moonrise_time;
  const moonset = todayData.moonset_time;
  const temp_max_c = todayData.temp_max_c;
  const temp_min_c = todayData.temp_min_c;
  const humid_max_pct = todayData.humid_max_pct;
  const humid_min_pct = todayData.humid_min_pct;
  const slp_max_in = todayData.slp_max_in;
  const slp_min_in = todayData.slp_min_in;

  return (
    <>
      <div className="daily-forecast">
        <div className="forecast-card">
          <div className="row" style={{ borderRight: "1px solid white" }}>
            <i className="wi wi-sunrise" style={{ color: "yellow" }}></i>
            <h6>{sunrise}AM</h6>
            <i className="wi wi-sunset" style={{ color: "orange" }}></i>
            <h6>{sunset}PM</h6>
          </div>
        </div>
        <div className="forecast-card">
          <div className="row">
            <i>Moonrise</i>
            <h6>{moonrise}</h6>
            <i>Moonset</i>
            <h6>{moonset}</h6>
          </div>
        </div>
        <div className="forecast-card">
          <div className="row">
            <i>MaxTemp</i>
            <h6>{temp_max_c}</h6>
            <i>MinTemp</i>
            <h6>{temp_min_c}</h6>
          </div>
        </div>
        <div className="forecast-card">
          <div className="row">
            <i>MaxHumidity</i>
            <h6>{humid_max_pct}</h6>
            <i>MinHumidity</i>
            <h6>{humid_min_pct}</h6>
          </div>
        </div>
        {/* <div className="forecast-card">
          <div className="row">
            <h6>{slp_max_in}</h6>
            <i className="wi wi-cloud"></i>
            <h6>{slp_min_in}</h6>
          </div>
        </div> */}
      </div>
    </>
  );
};

export default Dailyforcast;
