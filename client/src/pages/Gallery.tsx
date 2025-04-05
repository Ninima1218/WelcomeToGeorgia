const Gallery = () => {
  return (
    <div className="bg-white py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h1 className="font-montserrat font-bold text-4xl text-primary mb-6 text-center">
            Gallery of Georgia
          </h1>
          
          <p className="text-center mb-12 max-w-3xl mx-auto">
            Explore the breathtaking landscapes, historic architecture, and vibrant cultural scenes of Georgia through our curated collection of images.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {/* Placeholder for gallery images - These would be replaced with actual images */}
            {Array(9).fill(0).map((_, index) => (
              <div 
                key={index} 
                className="bg-gray-200 rounded-lg overflow-hidden aspect-w-4 aspect-h-3 shadow-md hover:shadow-lg transition-shadow duration-300"
              >
                <div className="flex items-center justify-center h-full">
                  <span className="material-icons text-5xl text-gray-400">image</span>
                </div>
                <div className="p-4 bg-white">
                  <h3 className="font-montserrat font-semibold text-lg">
                    {getImageTitle(index)}
                  </h3>
                  <p className="text-sm text-gray-600">
                    {getImageDescription(index)}
                  </p>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mb-8">
            <h2 className="font-montserrat font-bold text-2xl text-secondary mb-6">
              Categories
            </h2>
            <div className="flex flex-wrap justify-center gap-3">
              <button className="px-4 py-2 rounded-full bg-secondary text-white hover:bg-opacity-90 transition">
                Landscapes
              </button>
              <button className="px-4 py-2 rounded-full bg-gray-200 text-gray-800 hover:bg-gray-300 transition">
                Architecture
              </button>
              <button className="px-4 py-2 rounded-full bg-gray-200 text-gray-800 hover:bg-gray-300 transition">
                Culture
              </button>
              <button className="px-4 py-2 rounded-full bg-gray-200 text-gray-800 hover:bg-gray-300 transition">
                Food & Wine
              </button>
              <button className="px-4 py-2 rounded-full bg-gray-200 text-gray-800 hover:bg-gray-300 transition">
                People
              </button>
              <button className="px-4 py-2 rounded-full bg-gray-200 text-gray-800 hover:bg-gray-300 transition">
                Cities
              </button>
            </div>
          </div>
          
          <div className="text-center">
            <button className="bg-primary text-white font-montserrat font-medium px-6 py-3 rounded-lg shadow hover:bg-opacity-90 transition duration-300">
              Load More Images
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

// Helper functions for mock gallery content
function getImageTitle(index: number): string {
  const titles = [
    "Tbilisi Old Town",
    "Caucasus Mountains",
    "Batumi Boulevard",
    "Vardzia Cave Monastery",
    "Mtskheta Ancient Capital",
    "Svaneti Towers",
    "Black Sea Coast",
    "Georgian Wine Harvest",
    "Kazbegi Mountain"
  ];
  return titles[index % titles.length];
}

function getImageDescription(index: number): string {
  const descriptions = [
    "Historical district with traditional Georgian architecture",
    "Snow-capped peaks and alpine meadows",
    "Modern waterfront with subtropical gardens",
    "12th century cave complex carved into hillside",
    "UNESCO World Heritage site with ancient churches",
    "Medieval defensive structures in Georgia's highlands",
    "Pebbly beaches along Georgia's western coast",
    "Traditional winemaking in the Kakheti region",
    "Dramatic mountain landscape with iconic Tsminda Sameba Church"
  ];
  return descriptions[index % descriptions.length];
}

export default Gallery;
