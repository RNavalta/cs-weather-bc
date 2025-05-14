

import WeatherCard from "./WeatherCard";
import useWeatherData from "../hooks/useWeatherData";

// This component fetches and displays weather data for a selected city
const WeatherCast = ({ selectedCity, selectedUnit}) => {
  // Custom hook to fetch weather data.  It takes a city name and a unit (metric or imperial) as parameters
  // and returns the weather data, loading state, and error message.
  const { weatherData, loading, error } = useWeatherData(selectedCity, selectedUnit);

  if (loading) {
    return <p>Loading weather data...</p>;
  }

  if (error) {
    return <p className="text-red-500">Error: {error}</p>;
  }

  if (!weatherData) {
    return <p>No weather data available.</p>;
  }

  // Determine the unit labels based on the selected unit
  const temperatureUnit = selectedUnit === "metric" ? "°C" : "°F";
  const windSpeedUnit = selectedUnit === "metric" ? "km/h" : "mph";

  // Render the WeatherCard component with the fetched weather data
  return (
    <div style={{padding: "10px" }}> {/*padding around the card */}  
      <WeatherCard className="bg-green-200 w-96 shadow-lg"
        temperature={`${weatherData.main.temp}${temperatureUnit}`}
        condition={weatherData.weather[0].description}
        humidity={`${weatherData.main.humidity}%`}
        windSpeed={`${weatherData.wind.speed} ${windSpeedUnit}`}
        location={weatherData.name}
        date={new Date().toLocaleDateString()}
        time={new Date().toLocaleTimeString()}
        sunrise={new Date(weatherData.sys.sunrise * 1000).toLocaleTimeString()}
        sunset={new Date(weatherData.sys.sunset * 1000).toLocaleTimeString()}
        feelsLike={`${weatherData.main.feels_like}${temperatureUnit}`}
        cloudCover={`${weatherData.clouds.all}%`}
        weatherIcon={`https://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`}
      />
    </div>
  );
}
export default WeatherCast;
