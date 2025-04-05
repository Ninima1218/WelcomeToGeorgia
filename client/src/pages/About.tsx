const About = () => {
  return (
    <div className="bg-white py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="font-montserrat font-bold text-4xl text-primary mb-6">
            About Georgia
          </h1>
          
          <div className="aspect-w-16 aspect-h-9 bg-gray-200 rounded-lg mb-8 flex items-center justify-center">
            <span className="material-icons text-6xl text-gray-500">image</span>
          </div>
          
          <div className="prose max-w-none">
            <h2 className="font-montserrat text-2xl text-secondary mt-8 mb-4">
              A Land of Ancient History
            </h2>
            <p>
              Georgia, located at the intersection of Eastern Europe and Western Asia, is one of the oldest countries in the world with a history dating back thousands of years. Archaeological evidence suggests human habitation in the region since the Paleolithic era, with significant development during the Bronze Age.
            </p>
            
            <p>
              The country is home to some of the earliest human settlements in Eurasia, and evidence of wine production dates back 8,000 years, making Georgia the cradle of viticulture. Throughout its long history, Georgia has been influenced by Persian, Greek, Roman, Byzantine, Arab, Mongol, and Russian cultures, yet has maintained its unique identity.
            </p>
            
            <h2 className="font-montserrat text-2xl text-secondary mt-8 mb-4">
              Geography and Landscape
            </h2>
            <p>
              Georgia boasts remarkable geographical diversity for a country of its size (69,700 km²). The landscape ranges from subtropical coastlines along the Black Sea to alpine zones in the Greater Caucasus Mountains, which include peaks over 5,000 meters high.
            </p>
            
            <p>
              The country is divided into eastern and western halves by the Likhi Mountain Range, creating distinct climatic zones. Western Georgia features a humid subtropical climate with abundant rainfall, while Eastern Georgia has a more continental climate with hot summers and cold winters.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
              <div className="bg-gray-200 p-4 rounded-lg flex items-center justify-center aspect-w-4 aspect-h-3">
                <span className="material-icons text-4xl text-gray-500">terrain</span>
              </div>
              <div className="bg-gray-200 p-4 rounded-lg flex items-center justify-center aspect-w-4 aspect-h-3">
                <span className="material-icons text-4xl text-gray-500">water</span>
              </div>
            </div>
            
            <h2 className="font-montserrat text-2xl text-secondary mt-8 mb-4">
              Culture and Identity
            </h2>
            <p>
              Georgia has a rich cultural heritage that spans millennia. The country embraced Christianity in the 4th century, making it one of the world's earliest Christian nations. This religious tradition has deeply influenced Georgian architecture, art, and literature.
            </p>
            
            <p>
              The Georgian language, with its unique script, is one of the world's oldest living languages and belongs to its own distinct linguistic family (Kartvelian). Georgian literature dates back to the 5th century, with epic poems and chronicles forming an important part of the national identity.
            </p>
            
            <h2 className="font-montserrat text-2xl text-secondary mt-8 mb-4">
              Modern Georgia
            </h2>
            <p>
              After gaining independence from the Soviet Union in 1991, Georgia has undergone significant political and economic transformations. Today, it is a democracy with a growing economy focused on tourism, agriculture, mining, and hydropower.
            </p>
            
            <p>
              Georgia has increasingly become a popular tourist destination, attracting visitors with its diverse landscapes, historic monuments, distinctive cuisine, and renowned hospitality. The capital city, Tbilisi, seamlessly blends ancient architecture with modern developments, symbolizing Georgia's balance of tradition and progress.
            </p>
          </div>
          
          <div className="mt-12 flex justify-center">
            <button className="bg-primary text-white font-montserrat font-medium px-8 py-3 rounded-lg shadow hover:bg-opacity-90 transition duration-300">
              Explore Georgia's Regions
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
