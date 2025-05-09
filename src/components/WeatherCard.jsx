// This file displays the weather data in a card format using Material-UI components.
import { Card, CardContent, Typography } from '@mui/material';

const WeatherCard = ({
  temperature,
  condition,
  humidity,
  windSpeed,
  location,
  date,
  time,
  sunrise,
  sunset,
  feelsLike,
  cloudCover,
  weatherIcon,
}) => {
  return (
    <Card className="w-96 shadow-lg">
      <CardContent className="bg-blue-200 text-gray-800 p-4">
        <Typography variant="h5" component="div" className="text-center mb-4">
          {location}
        </Typography>
        <Typography variant="body1" className="mb-2">
          <strong>Temperature:</strong> {temperature}
        </Typography>
        <Typography variant="body1" className="mb-2">
          <strong>Condition:</strong> {condition} 
          <span className="ml-2 flex justify-center items-center">
            {weatherIcon && (
             <img
                src={weatherIcon}
                alt="Weather Icon"
                className="ml-2"
                style={{ 
                  width: "100px", 
                  height: "100px",
                  objectFit: "contain", // Ensures the image scales properly
               }}             
            />
        )}
        </span>
        </Typography>
        <Typography variant="body1" className="mb-2">
          <strong>Humidity:</strong> {humidity}
        </Typography>
        <Typography variant="body1" className="mb-2">
          <strong>Wind Speed:</strong> {windSpeed}
        </Typography>
        <Typography variant="body1" className="mb-2">
          <strong>Date:</strong> {date}
        </Typography>
        <Typography variant="body1" className="mb-2">
          <strong>Time:</strong> {time}
        </Typography>
        <Typography variant="body1" className="mb-2">
          <strong>Sunrise:</strong> {sunrise}
        </Typography>
        <Typography variant="body1" className="mb-2">
          <strong>Sunset:</strong> {sunset}
        </Typography>
        <Typography variant="body1" className="mb-2">
          <strong>Feels Like:</strong> {feelsLike}
        </Typography>     
        <Typography variant="body1" className="mb-2">
          <strong>Cloud Cover:</strong> {cloudCover}
        </Typography>
      </CardContent> 
    </Card>
  );
};

export default WeatherCard;