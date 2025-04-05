const Resorts = () => {
  // Resort data
  const resorts = [
    {
      name: "Batumi",
      type: "Seaside Resort",
      description: "Georgia's premier Black Sea resort city, offering beautiful beaches, a charming boulevard, modern architecture, and a vibrant nightlife. Perfect for summer vacations with subtropical climate and palm-lined promenades.",
      attractions: ["Black Sea beaches", "Batumi Boulevard", "Batumi Botanical Garden", "Dolphinarium", "Cable Car"]
    },
    {
      name: "Gudauri",
      type: "Mountain Ski Resort",
      description: "Located in the Greater Caucasus Mountain Range, Gudauri is Georgia's most popular ski resort. With reliable snow from December to April and modern infrastructure, it offers excellent skiing and snowboarding for all levels.",
      attractions: ["Ski slopes for all levels", "Heli-skiing", "Panoramic views", "Winter sports", "Paragliding"]
    },
    {
      name: "Borjomi",
      type: "Spa Resort",
      description: "Famous for its mineral waters, Borjomi is a historic spa town surrounded by forested mountains. Its healing springs have attracted visitors since the 19th century, making it a perfect destination for health and wellness tourism.",
      attractions: ["Mineral springs", "Borjomi Central Park", "Borjomi-Kharagauli National Park", "Historical architecture", "Cable car to viewpoint"]
    },
    {
      name: "Bakuriani",
      type: "Mountain Resort",
      description: "A family-friendly mountain resort with a more relaxed atmosphere than Gudauri. Popular for winter sports in the colder months and as a cool retreat during summer, with beautiful alpine meadows and forests.",
      attractions: ["Skiing and snowboarding", "Didveli slopes", "Botanical Garden", "Hiking trails", "Mountain biking"]
    },
    {
      name: "Sairme",
      type: "Health Resort",
      description: "Nestled in a forested gorge, Sairme is known for its healing mineral waters that help treat various ailments. The resort combines natural therapy with beautiful surroundings for a rejuvenating experience.",
      attractions: ["Mineral springs", "Spa treatments", "Forest hiking", "Clean mountain air", "Wellness centers"]
    },
    {
      name: "Goderdzi",
      type: "Emerging Ski Resort",
      description: "One of Georgia's newest ski resorts, located in the Lesser Caucasus mountains. Less crowded than other ski destinations, offering pristine slopes and a more authentic local experience in the highlands of Adjara region.",
      attractions: ["Uncrowded ski slopes", "Powder snow", "Alpine lake", "Mountain scenery", "Local Adjarian culture"]
    }
  ];

  return (
    <div className="bg-white py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h1 className="font-montserrat font-bold text-4xl text-primary mb-6 text-center">
            Resorts of Georgia
          </h1>
          
          <p className="text-center mb-12 max-w-3xl mx-auto">
            From the sunny shores of the Black Sea to the snow-capped peaks of the Caucasus Mountains, 
            Georgia offers diverse resort destinations for every season and preference.
          </p>
          
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 mb-12">
            {resorts.map((resort, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-200">
                <div className="h-48 bg-gray-200 flex items-center justify-center">
                  <span className="material-icons text-5xl text-gray-400">
                    {getResortIcon(resort.type)}
                  </span>
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-start mb-2">
                    <h2 className="font-montserrat font-bold text-xl">{resort.name}</h2>
                    <span className="bg-gray-100 text-gray-800 text-xs px-2 py-1 rounded">
                      {resort.type}
                    </span>
                  </div>
                  <p className="text-gray-600 mb-4">{resort.description}</p>
                  <h3 className="font-montserrat font-semibold text-sm text-secondary mb-2">
                    Top Attractions:
                  </h3>
                  <ul className="text-sm">
                    {resort.attractions.map((attraction, i) => (
                      <li key={i} className="flex items-center mb-1">
                        <span className="material-icons text-accent text-sm mr-2">
                          circle
                        </span>
                        {attraction}
                      </li>
                    ))}
                  </ul>
                  <button className="mt-6 w-full bg-secondary text-white py-2 rounded hover:bg-opacity-90 transition duration-300">
                    Learn More
                  </button>
                </div>
              </div>
            ))}
          </div>
          
          <div className="bg-gray-50 p-8 rounded-lg shadow-sm mb-12">
            <h2 className="font-montserrat font-bold text-2xl text-secondary mb-4 text-center">
              Best Time to Visit
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-montserrat font-semibold text-lg mb-2">Seaside Resorts</h3>
                <p className="mb-2">
                  <span className="font-medium">Peak Season:</span> June to September
                </p>
                <p className="text-sm text-gray-600">
                  The summer months offer warm water temperatures and sunny weather perfect for beach activities. 
                  July and August are busiest, while June and September provide more moderate crowds.
                </p>
              </div>
              <div>
                <h3 className="font-montserrat font-semibold text-lg mb-2">Mountain Ski Resorts</h3>
                <p className="mb-2">
                  <span className="font-medium">Peak Season:</span> December to March
                </p>
                <p className="text-sm text-gray-600">
                  The winter months provide the best snow conditions for skiing and snowboarding. 
                  January and February typically offer the most reliable snow coverage.
                </p>
              </div>
              <div>
                <h3 className="font-montserrat font-semibold text-lg mb-2">Spa and Health Resorts</h3>
                <p className="mb-2">
                  <span className="font-medium">Year-round</span> with seasonal variations
                </p>
                <p className="text-sm text-gray-600">
                  These resorts operate throughout the year, with spring and autumn offering pleasant 
                  weather for outdoor activities combined with therapeutic treatments.
                </p>
              </div>
              <div>
                <h3 className="font-montserrat font-semibold text-lg mb-2">Mountain Summer Resorts</h3>
                <p className="mb-2">
                  <span className="font-medium">Peak Season:</span> May to October
                </p>
                <p className="text-sm text-gray-600">
                  The warmer months are ideal for hiking, mountain biking, and enjoying the alpine 
                  meadows and forests. July and August offer the warmest weather.
                </p>
              </div>
            </div>
          </div>
          
          <div className="text-center">
            <button className="bg-primary text-white font-montserrat font-medium px-8 py-3 rounded-lg shadow hover:bg-opacity-90 transition duration-300">
              Plan Your Resort Getaway
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

// Helper function to get appropriate icon for resort type
function getResortIcon(type: string): string {
  switch (type) {
    case "Seaside Resort":
      return "beach_access";
    case "Mountain Ski Resort":
    case "Emerging Ski Resort":
      return "downhill_skiing";
    case "Spa Resort":
    case "Health Resort":
      return "spa";
    case "Mountain Resort":
      return "landscape";
    default:
      return "location_on";
  }
}

export default Resorts;
