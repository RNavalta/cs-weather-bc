// CitySelector.jsx
import React, { useState } from "react";
import { Select, MenuItem, FormControl, InputLabel } from "@mui/material";
import { bcCities } from "../utils/cities";

const CitySelector = ({ onCityChange }) => {
  const [selectedCity, setSelectedCity] = useState("");

  const handleChange = (event) => {
    const city = event.target.value;
    setSelectedCity(city);
    if (onCityChange) {
      onCityChange(city); // Notify parent component of the selected city
    }
  };

  return (
    <FormControl className="w-96"> 
      <InputLabel id="city-selector-label">Select a city in BC</InputLabel>
      <Select
        labelId="city-selector-label"
        value={selectedCity}
        onChange={handleChange}
        size="small"
        sx={{ borderRadius: "20px" }}
      >
        {/*MenuItems to create a dropdown list of cities*/}
        {bcCities.map((city) => (
          <MenuItem key={city} value={city}>
            {city}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default CitySelector;