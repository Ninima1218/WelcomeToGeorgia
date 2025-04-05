import { WeatherData, WeatherResponse } from "@/types/weather";

// OpenWeatherMap API endpoints
const API_BASE_URL = "https://api.openweathermap.org/data/2.5";
const API_KEY = import.meta.env.VITE_WEATHER_API_KEY || "";

// List of Georgian cities with their coordinates
export const GEORGIAN_CITIES = [
  { name: "Tbilisi", id: "tbilisi" },
  { name: "Batumi", id: "batumi" },
  { name: "Kutaisi", id: "kutaisi" },
  { name: "Mestia", id: "mestia" },
  { name: "Mtskheta", id: "mtskheta" },
  { name: "Gori", id: "gori" },
];

export async function getWeatherByCity(city: string): Promise<WeatherData> {
  try {
    const response = await fetch(
      `${API_BASE_URL}/weather?q=${city},ge&units=metric&appid=${API_KEY}`
    );

    if (!response.ok) {
      throw new Error(`Weather API returned ${response.status}`);
    }

    const data: WeatherResponse = await response.json();

    // Map the API response to our WeatherData type
    return {
      city: data.name,
      temperature: Math.round(data.main.temp),
      condition: data.weather[0].main,
      feelsLike: Math.round(data.main.feels_like),
      humidity: data.main.humidity,
      wind: Math.round(data.wind.speed),
      icon: getWeatherIconName(data.weather[0].icon),
    };
  } catch (error) {
    console.error("Error fetching weather data:", error);
    // Return fallback data in case of an error
    return {
      city: city,
      temperature: 20,
      condition: "Weather Unavailable",
      feelsLike: 20,
      humidity: 50,
      wind: 10,
      icon: "help_outline",
    };
  }
}

// Helper function to map OpenWeatherMap icons to Material Icons
function getWeatherIconName(iconCode: string): string {
  const iconMap: Record<string, string> = {
    '01d': 'wb_sunny',
    '01n': 'nightlight_round',
    '02d': 'partly_cloudy_day',
    '02n': 'nights_stay',
    '03d': 'cloud',
    '03n': 'cloud',
    '04d': 'filter_drama',
    '04n': 'filter_drama',
    '09d': 'grain',
    '09n': 'grain',
    '10d': 'rainy',
    '10n': 'rainy',
    '11d': 'thunderstorm',
    '11n': 'thunderstorm',
    '13d': 'ac_unit',
    '13n': 'ac_unit',
    '50d': 'mist',
    '50n': 'mist'
  };

  return iconMap[iconCode] || 'help_outline';
}
