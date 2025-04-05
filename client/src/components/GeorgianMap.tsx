import { useEffect, useRef } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

const GeorgianMap = () => {
  const mapRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    // Skip if no ref or already initialized
    if (!mapRef.current || (mapRef.current as any)._leaflet_initialized) return;

    // Initialize the map
    const map = L.map(mapRef.current).setView([42.3154, 43.3569], 7);
    
    // Add OpenStreetMap tiles
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
      maxZoom: 18,
    }).addTo(map);
    
    // Add markers for major Georgian cities
    const cities = [
      { name: 'Tbilisi', coords: [41.7151, 44.8271] },
      { name: 'Batumi', coords: [41.6459, 41.6417] },
      { name: 'Kutaisi', coords: [42.2669, 42.6951] },
      { name: 'Mestia', coords: [43.0423, 42.7161] },
      { name: 'Mtskheta', coords: [41.8536, 44.7178] },
      { name: 'Gori', coords: [41.9842, 44.1158] },
    ];
    
    cities.forEach(city => {
      L.marker(city.coords as [number, number])
        .addTo(map)
        .bindPopup(`<b>${city.name}</b>`);
    });
    
    // Mark the map as initialized to prevent reinitializing
    (mapRef.current as any)._leaflet_initialized = true;
    
    // Cleanup on unmount
    return () => {
      map.remove();
      if (mapRef.current) {
        (mapRef.current as any)._leaflet_initialized = false;
      }
    };
  }, []);
  
  return (
    <div className="bg-gray-100 p-6 rounded-lg shadow-md">
      <h3 className="font-montserrat font-bold text-2xl mb-4 text-secondary">Map of Georgia</h3>
      <div className="bg-white p-4 rounded border border-gray-200">
        <div 
          ref={mapRef} 
          className="w-full h-64 rounded"
          aria-label="Map of Georgia"
        ></div>
        <div className="mt-4 text-sm">
          <p>
            Georgia is located at the crossroads of Eastern Europe and Western Asia, 
            bordered by the Black Sea to the west, Russia to the north, Turkey and 
            Armenia to the south, and Azerbaijan to the southeast.
          </p>
        </div>
      </div>
    </div>
  );
};

export default GeorgianMap;
