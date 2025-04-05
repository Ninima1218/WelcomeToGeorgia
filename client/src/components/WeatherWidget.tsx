import { useState } from "react";
import { getWeatherByCity, GEORGIAN_CITIES } from "@/lib/weatherApi";
import { useQuery } from "@tanstack/react-query";
import { useLanguage } from "@/contexts/LanguageContext";

const WeatherWidget = () => {
  const [selectedCity, setSelectedCity] = useState("Tbilisi");
  const [isRefreshing, setIsRefreshing] = useState(false);
  const { t } = useLanguage();
  
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
    <div className="w-full text-white">
      <div className="flex items-center justify-between mb-3">
        <h3 className="font-serif text-lg">{t("home.weather.title")}</h3>
        <button
          className={`bg-white/20 p-1.5 rounded-full transition-all duration-300 hover:bg-white/30 ${isRefreshing ? 'animate-spin' : ''}`}
          onClick={handleRefresh}
          aria-label="Refresh weather"
        >
          <span className="material-icons text-sm">refresh</span>
        </button>
      </div>
      
      <div className="relative mb-4">
        <select
          id="citySelector"
          className="w-full appearance-none bg-white/10 border border-white/20 text-white rounded-lg px-4 py-2 focus:outline-none focus:ring-1 focus:ring-white/30"
          value={selectedCity}
          onChange={handleCityChange}
        >
          {GEORGIAN_CITIES.map((city) => (
            <option key={city.id} value={city.name} className="text-gray-800">
              {city.name}
            </option>
          ))}
        </select>
        <span className="material-icons absolute right-3 top-2 text-white/70 pointer-events-none">
          expand_more
        </span>
      </div>

      {isLoading ? (
        <div className="flex justify-center py-4">
          <div className="animate-spin rounded-full h-8 w-8 border-2 border-white/20 border-t-white"></div>
        </div>
      ) : isError ? (
        <div className="text-center py-4">
          <p className="text-red-300">Unable to load weather data</p>
        </div>
      ) : weatherData ? (
        <div className="flex items-center space-x-4">
          <div className="bg-white/10 rounded-xl p-3 flex items-center justify-center">
            <span className="material-icons text-3xl">
              {weatherData.icon}
            </span>
          </div>
          
          <div>
            <div className="flex items-baseline">
              <span className="text-3xl font-light">{weatherData.temperature}</span>
              <span className="text-xl ml-0.5">°C</span>
            </div>
            <p className="text-sm text-white/80">
              {weatherData.condition}
            </p>
          </div>
          
          <div className="space-y-1 ml-auto">
            <div className="flex items-center text-sm text-white/70">
              <span className="material-icons text-xs mr-1">water_drop</span>
              <span>{weatherData.humidity}%</span>
            </div>
            <div className="flex items-center text-sm text-white/70">
              <span className="material-icons text-xs mr-1">air</span>
              <span>{weatherData.wind} km/h</span>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default WeatherWidget;
