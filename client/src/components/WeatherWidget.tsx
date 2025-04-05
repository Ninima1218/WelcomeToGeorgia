import { useState, useEffect } from "react";
import { getWeatherByCity, GEORGIAN_CITIES } from "@/lib/weatherApi";
import { WeatherData } from "@/types/weather";
import { useQuery } from "@tanstack/react-query";

const WeatherWidget = () => {
  const [selectedCity, setSelectedCity] = useState("Tbilisi");
  const [isRefreshing, setIsRefreshing] = useState(false);
  
  // Fetch weather data for the selected city
  const { data: weatherData, refetch, isLoading, isError } = useQuery({
    queryKey: ['/api/weather', selectedCity],
    queryFn: async () => {
      return await getWeatherByCity(selectedCity);
    },
  });

  // Handle city selection change
  const handleCityChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedCity(e.target.value);
  };

  // Handle refresh button click
  const handleRefresh = async () => {
    setIsRefreshing(true);
    await refetch();
    setTimeout(() => {
      setIsRefreshing(false);
    }, 500);
  };

  return (
    <div className="bg-white text-georgian-dark rounded-lg shadow-lg p-4 w-full md:w-auto">
      <h3 className="font-montserrat font-semibold text-lg mb-2">Weather in Georgia</h3>
      <div className="flex items-center justify-between mb-4">
        <select
          id="citySelector"
          className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-secondary"
          value={selectedCity}
          onChange={handleCityChange}
        >
          {GEORGIAN_CITIES.map((city) => (
            <option key={city.id} value={city.name}>
              {city.name}
            </option>
          ))}
        </select>
        <button
          className={`ml-2 bg-secondary text-white p-2 rounded-full ${isRefreshing ? 'animate-spin' : ''}`}
          onClick={handleRefresh}
          aria-label="Refresh weather"
        >
          <span className="material-icons text-sm">refresh</span>
        </button>
      </div>

      {isLoading ? (
        <div className="flex justify-center">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-secondary"></div>
        </div>
      ) : isError ? (
        <div className="text-center text-red-500">
          <p>Unable to load weather data</p>
        </div>
      ) : weatherData ? (
        <div className="text-center">
          <div className="flex items-center justify-center mb-2">
            <span className="material-icons text-4xl text-accent mr-2">
              {weatherData.icon}
            </span>
            <span className="text-3xl font-semibold">{weatherData.temperature}°C</span>
          </div>
          <p className="text-sm text-gray-600">
            {weatherData.condition}, feels like {weatherData.feelsLike}°C
          </p>
          <div className="grid grid-cols-2 gap-2 mt-3 text-sm">
            <div>
              <p className="text-gray-500">Humidity</p>
              <p className="font-semibold">{weatherData.humidity}%</p>
            </div>
            <div>
              <p className="text-gray-500">Wind</p>
              <p className="font-semibold">{weatherData.wind} km/h</p>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default WeatherWidget;
