export interface WeatherData {
  city: string;
  temperature: number;
  condition: string;
  feelsLike: number;
  humidity: number;
  wind: number;
  icon: string;
}

export interface WeatherResponse {
  main: {
    temp: number;
    feels_like: number;
    humidity: number;
  };
  weather: {
    main: string;
    description: string;
    icon: string;
  }[];
  wind: {
    speed: number;
  };
  name: string;
}
