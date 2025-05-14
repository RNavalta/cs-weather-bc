//This file fetches weather data from the OpenWeatherMap API based on the selected city and unit (metric or imperial).
const MET_URL = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const IMP_URL = "https://api.openweathermap.org/data/2.5/weather?units=imperial&q=";
const API_KEY = import.meta.env.VITE_API_KEY;

/**
 * Fetch weather data for a given city.
 * @param {string} city - The name of the city.
 * @returns {Promise<Object>} - The weather data.
 */
export const fetchWeatherData = async (city, unit) => {
  try {
    // Dynamically select the URL based on the unit
    const BASE_URL = unit === "metric" ? MET_URL : IMP_URL;
    
    const response = await fetch(`${BASE_URL}${city}&appid=${API_KEY}`);
    if (!response.ok) {
      throw new Error("Failed to fetch weather data");
    }
    return await response.json();
  } catch (error) {
    throw error;
  }
};