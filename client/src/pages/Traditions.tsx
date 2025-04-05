const Traditions = () => {
  // Cultural traditions data
  const traditions = [
    {
      name: "Supra",
      category: "Social Custom",
      description: "The traditional Georgian feast featuring abundant food, wine, and a series of elaborate toasts led by a tamada (toastmaster). An essential part of Georgian hospitality and social life.",
      significance: "Demonstrates hospitality, builds community bonds, and preserves cultural heritage through ritualized toasting"
    },
    {
      name: "Polyphonic Singing",
      category: "Music",
      description: "A distinctive musical style featuring three-part vocal harmony that has been recognized by UNESCO as an Intangible Cultural Heritage. Each region of Georgia has its own characteristic style.",
      significance: "Preserves ancient musical traditions dating back centuries and expresses Georgia's cultural identity"
    },
    {
      name: "Traditional Dances",
      category: "Performing Arts",
      description: "Georgian dance combines precision, athleticism and grace. Male dancers perform spectacular jumps and spins, while women glide across the floor. The Kartuli (wedding dance) is particularly famous.",
      significance: "Tells stories of Georgian history, warfare, romance, and rural life through choreographed movement"
    },
    {
      name: "Chidaoba",
      category: "Sport",
      description: "Traditional Georgian wrestling that dates back to ancient times. Wrestlers wear special pants called 'chokha' and the goal is to throw your opponent on their back.",
      significance: "National sport that builds strength, discipline, and respect; recognized by UNESCO as Intangible Cultural Heritage"
    },
    {
      name: "Rtveli",
      category: "Harvest Festival",
      description: "The traditional grape harvest that takes place in late September/early October, particularly in the Kakheti region. Families and communities gather to pick grapes and process them for winemaking.",
      significance: "Celebrates Georgia's 8,000-year winemaking tradition and strengthens community bonds through collective work"
    },
    {
      name: "Chokha",
      category: "Traditional Clothing",
      description: "The traditional male dress of Georgia featuring a long wool coat with cartridge holders on the chest, a belt, and a dagger. Different regions have their own variations.",
      significance: "Symbol of national identity, honor, and martial tradition; still worn for special occasions and celebrations"
    }
  ];

  // Festivals data
  const festivals = [
    {
      name: "Tbilisoba",
      date: "October",
      location: "Tbilisi",
      description: "Annual festival celebrating the city of Tbilisi with open-air concerts, cultural performances, craft markets, and food stalls throughout the old town."
    },
    {
      name: "New Wine Festival",
      date: "May",
      location: "Various cities",
      description: "Celebration of the first wine of the season where winemakers from across Georgia gather to showcase their wines, often accompanied by traditional music and dancing."
    },
    {
      name: "Shatiloba",
      date: "July-August",
      location: "Khevsureti (Shatili)",
      description: "Traditional festival in the remote mountain village of Shatili featuring horse races, traditional sports, folk music, and celebrations of mountain culture."
    },
    {
      name: "Art Gene Festival",
      date: "July",
      location: "Various locations",
      description: "Cultural festival focused on preserving and showcasing Georgia's traditional music, dance, crafts, and cuisine from different regions."
    }
  ];

  return (
    <div className="bg-white py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h1 className="font-montserrat font-bold text-4xl text-primary mb-6 text-center">
            Georgian Traditions
          </h1>
          
          <p className="text-center mb-12 max-w-3xl mx-auto">
            Georgia's rich cultural traditions have been preserved through centuries of foreign 
            influence and invasion, creating a unique national identity that bridges East and West.
          </p>
          
          <div className="mb-16">
            <h2 className="font-montserrat font-bold text-2xl text-secondary mb-6 text-center">
              Cultural Traditions
            </h2>
            
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {traditions.map((tradition, index) => (
                <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-200">
                  <div className="h-48 bg-gray-200 flex items-center justify-center">
                    <span className="material-icons text-5xl text-gray-400">
                      {getCategoryIcon(tradition.category)}
                    </span>
                  </div>
                  <div className="p-6">
                    <div className="flex justify-between items-center mb-2">
                      <h3 className="font-montserrat font-bold text-xl">{tradition.name}</h3>
                      <span className="bg-gray-100 text-gray-800 text-xs px-2 py-1 rounded">
                        {tradition.category}
                      </span>
                    </div>
                    <p className="text-gray-600 mb-4 text-sm">{tradition.description}</p>
                    <div className="text-sm">
                      <p><span className="font-semibold">Significance:</span> {tradition.significance}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="mb-16">
            <h2 className="font-montserrat font-bold text-2xl text-secondary mb-6 text-center">
              Georgian Hospitality
            </h2>
            
            <div className="bg-gray-50 p-8 rounded-lg shadow-sm mb-8">
              <div className="md:flex items-center gap-8">
                <div className="md:w-1/3 mb-6 md:mb-0">
                  <div className="aspect-w-1 aspect-h-1 bg-gray-200 rounded-lg flex items-center justify-center">
                    <span className="material-icons text-5xl text-gray-400">favorite</span>
                  </div>
                </div>
                <div className="md:w-2/3">
                  <h3 className="font-montserrat font-semibold text-xl mb-3">
                    "A guest is a gift from God"
                  </h3>
                  <p className="mb-4">
                    This Georgian proverb perfectly encapsulates the country's approach to hospitality. 
                    Georgians believe that guests are sacred and should be treated with the utmost respect and generosity.
                  </p>
                  <p>
                    Traditional Georgian hospitality includes welcoming guests with wine, preparing abundant 
                    feasts (supra), offering the best accommodations in the house, and showing guests the 
                    local sights. Even strangers might be invited into homes for meals and celebration, and 
                    refusing such hospitality can be considered impolite.
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="mb-16">
            <h2 className="font-montserrat font-bold text-2xl text-secondary mb-6 text-center">
              Traditional Festivals
            </h2>
            
            <div className="overflow-x-auto mb-8">
              <table className="min-w-full bg-white border border-gray-200">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="py-3 px-4 border text-left">Festival</th>
                    <th className="py-3 px-4 border text-left">When</th>
                    <th className="py-3 px-4 border text-left">Where</th>
                    <th className="py-3 px-4 border text-left">Description</th>
                  </tr>
                </thead>
                <tbody>
                  {festivals.map((festival, index) => (
                    <tr key={index} className={index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
                      <td className="py-3 px-4 border font-semibold">{festival.name}</td>
                      <td className="py-3 px-4 border">{festival.date}</td>
                      <td className="py-3 px-4 border">{festival.location}</td>
                      <td className="py-3 px-4 border">{festival.description}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          
          <div className="mb-16">
            <h2 className="font-montserrat font-bold text-2xl text-secondary mb-6 text-center">
              Religion in Georgian Culture
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <div className="aspect-w-16 aspect-h-9 bg-gray-200 rounded-lg mb-4 flex items-center justify-center">
                  <span className="material-icons text-5xl text-gray-400">church</span>
                </div>
                <h3 className="font-montserrat font-semibold text-lg mb-2">
                  Orthodox Christianity
                </h3>
                <p className="text-gray-600">
                  Georgia was one of the first countries to adopt Christianity in 337 AD. The Georgian 
                  Orthodox Church plays a vital role in national identity and cultural preservation. 
                  Ancient churches and monasteries dot the landscape, many dating back to the 6th century.
                </p>
              </div>
              
              <div>
                <div className="aspect-w-16 aspect-h-9 bg-gray-200 rounded-lg mb-4 flex items-center justify-center">
                  <span className="material-icons text-5xl text-gray-400">calendar_month</span>
                </div>
                <h3 className="font-montserrat font-semibold text-lg mb-2">
                  Religious Celebrations
                </h3>
                <p className="text-gray-600">
                  Religious holidays are celebrated with great enthusiasm in Georgia. Easter is particularly 
                  important, with midnight services, special foods, and the tradition of dyeing eggs red. 
                  Christmas is celebrated on January 7th following the Julian calendar, and the "Alilo" procession 
                  through towns and villages is a beloved tradition.
                </p>
              </div>
            </div>
          </div>
          
          <div className="text-center">
            <button className="bg-primary text-white font-montserrat font-medium px-8 py-3 rounded-lg shadow hover:bg-opacity-90 transition duration-300">
              Explore Georgian Culture
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

// Helper function to get appropriate icon for tradition category
function getCategoryIcon(category: string): string {
  switch (category) {
    case "Social Custom":
      return "groups";
    case "Music":
      return "music_note";
    case "Performing Arts":
      return "theater_comedy";
    case "Sport":
      return "sports";
    case "Harvest Festival":
      return "grass";
    case "Traditional Clothing":
      return "checkroom";
    default:
      return "stars";
  }
}

export default Traditions;
