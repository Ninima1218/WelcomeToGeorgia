import type { Express } from "express";
import { createServer, type Server } from "http";
import axios from "axios";

export async function registerRoutes(app: Express): Promise<Server> {
  // Weather API proxy to avoid CORS issues and hide API key
  app.get("/api/weather/:city", async (req, res) => {
    const city = req.params.city;
    const apiKey = process.env.WEATHER_API_KEY || "";
    
    if (!apiKey) {
      return res.status(500).json({ message: "Weather API key not configured" });
    }

    try {
      const weatherResponse = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city},ge&units=metric&appid=${apiKey}`
      );
      
      res.json(weatherResponse.data);
    } catch (error) {
      if (axios.isAxiosError(error) && error.response) {
        return res.status(error.response.status).json({
          message: `Weather API error: ${error.response.statusText}`,
        });
      }
      res.status(500).json({ message: "Failed to fetch weather data" });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
