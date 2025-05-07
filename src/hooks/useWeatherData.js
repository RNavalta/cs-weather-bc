import { useState, useEffect } from "react";
import { fetchWeatherData } from "../services/weatherService";

/**
 * Custom hook to fetch weather data for a city.
 * @param {string} city - The name of the city.
 * @returns {Object} - Weather data and loading state.
 */
const useWeatherData = (city) => {
  const [weatherData, setWeatherData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!city) return;

    const fetchData = async () => {
      setLoading(true);
      try {
        const data = await fetchWeatherData(city);
        setWeatherData(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [city]);

  return { weatherData, loading, error };
};

export default useWeatherData;