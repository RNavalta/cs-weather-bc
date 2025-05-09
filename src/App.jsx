
import { useState } from 'react'
import './App.css'
import CitySelector from "./components/CitySelector";
import Weathercast from "./components/Weathercast";
import UnitToggle from "./components/UnitToggle";

function App() {
  // State to manage the selected city
  const [selectedCity, setSelectedCity] = useState("");
  const handleCityChange = (city) => {
    setSelectedCity(city);
  };

  // State to manage the selected unit (metric or imperial)
  const [selectedUnit, setselectedUnit] = useState("metric"); // Default to Metric
  const handleUnitToggle = (unit) => {
    setselectedUnit(unit);
  };

  return (
    <>
      <div className="bg-green-200 min-h-screen flex flex-col">
        <div className=" bg-green-200 flex-grow flex flex-col items-center justify-center">
          {/* Render CitySelector */}
          <CitySelector onCityChange={handleCityChange}/>
          
          {/* Render WeatherCast */}
          {selectedCity &&<Weathercast selectedCity={selectedCity} selectedUnit = {selectedUnit} />} 

          {/* Render UnitToggle */}
          <UnitToggle onToggle={handleUnitToggle} />
        </div>
      </div>
      
    </>
  )
}

export default App
