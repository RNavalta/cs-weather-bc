import { useState } from 'react'
import './App.css'
import React from "react";
import CitySelector from "./components/CitySelector";
import Weathercast from "./components/Weathercast";

function App() {
  const [selectedCity, setSelectedCity] = useState("");

  const handleCityChange = (city) => {
    setSelectedCity(city);
  };

  return (
    <>
      <div className="bg-green-200 min-h-screen flex flex-col">
        <div className=" bg-green-200 flex-grow flex flex-col items-center justify-center">
          {/* Render CitySelector */}
          <CitySelector onCityChange={handleCityChange}/>
          
          {/* Render WeatherCast */}
          {selectedCity &&<Weathercast selectedCity={selectedCity} />} 
        </div>
      </div>
      
    </>
  )
}

export default App
