import React from "react";

const Forecast = ({ tempInfo }) => {
  // Check if tempInfo exists and has a 'Days' property
  if (!tempInfo || !tempInfo.Days || tempInfo.Days.length === 0) {
    return (
      <div className="forecast">
        <div className="card">
          <h1>7 Day's Forecast</h1>
          <p>No forecast data available</p>
        </div>
      </div>
    );
  }

  return (
    <div className="forecast">
      <div className="card">
        <h1>7 Day's Forecast</h1>
        <div className="table">
          <table>
            <tbody>
              {tempInfo.Days.map((item, index) => {
                return (
                  <tr key={index}>
                    <td>{item.date}</td>
                    <td>
                      <i
                        className="wi wi-sunrise"
                        style={{ color: "yellow" }}
                      ></i>
                      {item.sunrise_time}
                    </td>
                    <td>{`${item.temp_max_c}/${item.temp_min_c}`}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Forecast;
