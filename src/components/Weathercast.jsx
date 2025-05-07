import React from "react";
import WeatherCard from "./WeatherCard";
import useWeatherData from "../hooks/useWeatherData";

const WeatherCast = ({ selectedCity }) => {
  const { weatherData, loading, error } = useWeatherData(selectedCity);

  if (loading) {
    return <p>Loading weather data...</p>;
  }

  if (error) {
    return <p className="text-red-500">Error: {error}</p>;
  }

  if (!weatherData) {
    return <p>No weather data available.</p>;
  }

  return (
    <div style={{
      padding: "16px",
    }}
    >
    <WeatherCard className="bg-green-200 w-96 shadow-lg"
      temperature={`${weatherData.main.temp}°C`}
      condition={weatherData.weather[0].description}
      humidity={`${weatherData.main.humidity}%`}
      windSpeed={`${weatherData.wind.speed} km/h`}
      location={weatherData.name}
      date={new Date().toLocaleDateString()}
      time={new Date().toLocaleTimeString()}
      sunrise={new Date(weatherData.sys.sunrise * 1000).toLocaleTimeString()}
      sunset={new Date(weatherData.sys.sunset * 1000).toLocaleTimeString()}
      feelsLike={`${weatherData.main.feels_like}°C`}
      cloudCover={`${weatherData.clouds.all}%`}
      weatherIcon={`https://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`}
    />
    </div>
  );
};

export default WeatherCast;
