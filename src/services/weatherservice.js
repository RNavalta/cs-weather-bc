const BASE_URL = "http://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const API_KEY = import.meta.env.VITE_API_KEY;

/**
 * Fetch weather data for a given city.
 * @param {string} city - The name of the city.
 * @returns {Promise<Object>} - The weather data.
 */
export const fetchWeatherData = async (city) => {
  try {
    const response = await fetch(`${BASE_URL}${city}&appid=${API_KEY}`);
    if (!response.ok) {
      throw new Error("Failed to fetch weather data");
    }
    return await response.json();
  } catch (error) {
    console.error(error);
    throw error;
  }
};