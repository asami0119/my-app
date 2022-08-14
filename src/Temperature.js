import React from "react";

export default function Temperature() {
  let weatherData = {
    city: "Tokyo",
    date: "Tuesday 12:00",
    description: "cloudy",
    humidity: 40,
    wind: 2,
    temperature: "20",
    image: "https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png",
  };

  return (
    <div>
      <h3 className="mb-0">{weatherData.city}</h3>

      <div>
        <div>
          <img src={weatherData.image} alt="partly-cloudy" />
        </div>
        <p>Last updated:</p>

        <div className="data">
          <li className="details1">
            <ul>{weatherData.date}</ul>
            <ul>{weatherData.description}</ul>
          </li>

          <ul className="details2">
            <li>Humidity:{weatherData.humidity}%</li>
            <li>Wind:{weatherData.wind}km/hr</li>
            <li> {weatherData.temperature} ℃ | °F</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
