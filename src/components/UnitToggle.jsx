//This file uses Material-UI's Switch component to switch between metric and imperial units for weather data.
import React, { useState } from "react";
import { FormControlLabel, Switch } from "@mui/material";

const UnitToggle = ({ onToggle }) => {
  const [isMetric, setIsMetric] = useState(true); // Default to Metric

  const handleToggle = (event) => {
    const newValue = event.target.checked;
    setIsMetric(newValue);
    if (onToggle) {
      onToggle(newValue ? "metric" : "imperial"); // Notify parent of the selected unit
    }
  };

  return (
    <FormControlLabel
      control={
        <Switch
          checked={isMetric}
          onChange={handleToggle}
          color="primary"
        />
      }
      label={isMetric ? "Metric" : "Imperial"}
    />
  );
};

export default UnitToggle;