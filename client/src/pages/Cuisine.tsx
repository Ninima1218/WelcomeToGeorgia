const Cuisine = () => {
  // Georgian dishes data
  const dishes = [
    {
      name: "Khachapuri",
      category: "Bread",
      description: "A traditional Georgian dish of cheese-filled bread. The most famous variety is Adjaruli Khachapuri, which is boat-shaped and topped with an egg and butter.",
      origin: "Various regions of Georgia",
      ingredients: ["Flour", "Cheese (usually Sulguni)", "Eggs", "Butter"]
    },
    {
      name: "Khinkali",
      category: "Dumplings",
      description: "Georgian dumplings filled with spiced meat (usually beef and pork mix), herbs, and a rich broth. They're eaten by hand, using the dough knob as a handle.",
      origin: "Mountain regions (Khevsureti, Pshavi, Mtiuleti)",
      ingredients: ["Dough", "Minced meat", "Onions", "Georgian spices", "Herbs"]
    },
    {
      name: "Mtsvadi",
      category: "Grilled Meat",
      description: "Georgian shashlik or barbecue, made from marinated chunks of meat grilled on a skewer. Traditionally it's made with pork or veal and served with sliced raw onions and pomegranate seeds.",
      origin: "Eastern Georgia (Kakheti)",
      ingredients: ["Pork or veal", "Pomegranate juice", "Wine vinegar", "Georgian spices"]
    },
    {
      name: "Churchkhela",
      category: "Dessert",
      description: "A traditional candle-shaped candy made by repeatedly dipping a string of walnuts into concentrated grape juice (Tatara) and then drying them. Often called Georgian Snickers.",
      origin: "Western Georgia (Imereti, Samegrelo)",
      ingredients: ["Walnuts", "Grape juice", "Flour"]
    },
    {
      name: "Lobio",
      category: "Bean Dish",
      description: "A Georgian bean stew typically made with kidney beans, various herbs and spices. It's often served in a clay pot with mchadi (cornbread) on the side.",
      origin: "Throughout Georgia",
      ingredients: ["Kidney beans", "Onions", "Garlic", "Cilantro", "Walnuts", "Georgian spices"]
    },
    {
      name: "Pkhali",
      category: "Vegetable Dish",
      description: "A family of vegetable pâtés made from various vegetables (spinach, beetroot, cabbage) combined with ground walnuts, garlic, and herbs. Typically served as a side dish or appetizer.",
      origin: "Throughout Georgia",
      ingredients: ["Vegetables", "Walnuts", "Garlic", "Herbs", "Vinegar"]
    }
  ];

  // Georgian wines data
  const wines = [
    {
      name: "Saperavi",
      type: "Red (dry)",
      characteristics: "Full-bodied, deep red, rich tannins with notes of dark berries",
      region: "Kakheti"
    },
    {
      name: "Rkatsiteli",
      type: "White (dry)",
      characteristics: "Crisp acidity, hints of green apple and citrus",
      region: "Kakheti"
    },
    {
      name: "Tsinandali",
      type: "White (dry)",
      characteristics: "Light body, floral aroma with notes of tropical fruits",
      region: "Kakheti"
    },
    {
      name: "Mukuzani",
      type: "Red (dry)",
      characteristics: "Full-bodied, complex flavor with cherry and blackberry notes",
      region: "Kakheti"
    },
    {
      name: "Kindzmarauli",
      type: "Red (semi-sweet)",
      characteristics: "Velvety with balanced sweetness and cherry notes",
      region: "Kakheti"
    }
  ];

  return (
    <div className="bg-white py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h1 className="font-montserrat font-bold text-4xl text-primary mb-6 text-center">
            Georgian Cuisine
          </h1>
          
          <p className="text-center mb-12 max-w-3xl mx-auto">
            Georgia's culinary traditions reflect its rich history and geographical diversity, 
            featuring bold flavors, unique cooking techniques, and some of the world's oldest 
            winemaking traditions.
          </p>
          
          <div className="mb-16">
            <h2 className="font-montserrat font-bold text-2xl text-secondary mb-6 text-center">
              Famous Georgian Dishes
            </h2>
            
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {dishes.map((dish, index) => (
                <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-200">
                  <div className="h-48 bg-gray-200 flex items-center justify-center">
                    <span className="material-icons text-5xl text-gray-400">restaurant</span>
                  </div>
                  <div className="p-6">
                    <div className="flex justify-between items-center mb-2">
                      <h3 className="font-montserrat font-bold text-xl">{dish.name}</h3>
                      <span className="bg-gray-100 text-gray-800 text-xs px-2 py-1 rounded">
                        {dish.category}
                      </span>
                    </div>
                    <p className="text-gray-600 mb-4 text-sm">{dish.description}</p>
                    <div className="text-sm">
                      <p><span className="font-semibold">Origin:</span> {dish.origin}</p>
                      <p className="font-semibold mt-2 mb-1">Key Ingredients:</p>
                      <div className="flex flex-wrap gap-1">
                        {dish.ingredients.map((ingredient, i) => (
                          <span key={i} className="bg-gray-100 px-2 py-1 rounded text-xs">
                            {ingredient}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="mb-16">
            <h2 className="font-montserrat font-bold text-2xl text-secondary mb-6 text-center">
              Georgian Wine Tradition
            </h2>
            
            <div className="grid gap-8 md:grid-cols-2 mb-8">
              <div>
                <div className="aspect-w-16 aspect-h-9 bg-gray-200 rounded-lg mb-4 flex items-center justify-center">
                  <span className="material-icons text-5xl text-gray-400">wine_bar</span>
                </div>
                <h3 className="font-montserrat font-semibold text-lg mb-2">8,000 Years of Winemaking</h3>
                <p className="text-gray-600">
                  Georgia is widely considered the birthplace of wine, with archaeological evidence of 
                  winemaking dating back 8,000 years. The traditional Georgian winemaking method using 
                  clay vessels called qvevri is recognized by UNESCO as an intangible cultural heritage.
                </p>
              </div>
              
              <div>
                <div className="aspect-w-16 aspect-h-9 bg-gray-200 rounded-lg mb-4 flex items-center justify-center">
                  <span className="material-icons text-5xl text-gray-400">inventory_2</span>
                </div>
                <h3 className="font-montserrat font-semibold text-lg mb-2">Qvevri Winemaking</h3>
                <p className="text-gray-600">
                  Qvevri are large clay vessels lined with beeswax and buried underground where wine 
                  ferments naturally. This ancient method produces distinctive amber wines with complex 
                  flavors that differ significantly from European-style wines.
                </p>
              </div>
            </div>
            
            <h3 className="font-montserrat font-semibold text-lg mb-4">Popular Georgian Wines</h3>
            <div className="overflow-x-auto">
              <table className="min-w-full bg-white border border-gray-200">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="py-2 px-4 border text-left">Wine Name</th>
                    <th className="py-2 px-4 border text-left">Type</th>
                    <th className="py-2 px-4 border text-left">Characteristics</th>
                    <th className="py-2 px-4 border text-left">Region</th>
                  </tr>
                </thead>
                <tbody>
                  {wines.map((wine, index) => (
                    <tr key={index} className={index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
                      <td className="py-2 px-4 border font-semibold">{wine.name}</td>
                      <td className="py-2 px-4 border">{wine.type}</td>
                      <td className="py-2 px-4 border">{wine.characteristics}</td>
                      <td className="py-2 px-4 border">{wine.region}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          
          <div className="bg-gray-50 p-8 rounded-lg shadow-sm mb-12">
            <h2 className="font-montserrat font-bold text-2xl text-secondary mb-6 text-center">
              The Georgian Supra
            </h2>
            <div className="md:flex items-center gap-8">
              <div className="md:w-1/3 mb-6 md:mb-0">
                <div className="aspect-w-1 aspect-h-1 bg-gray-200 rounded-lg flex items-center justify-center">
                  <span className="material-icons text-5xl text-gray-400">groups</span>
                </div>
              </div>
              <div className="md:w-2/3">
                <p className="mb-4">
                  The supra is a traditional Georgian feast and an important part of the culture. It features 
                  an abundance of food, wine, and most importantly, toasts led by the tamada (toastmaster).
                </p>
                <p className="mb-4">
                  A proper Georgian supra can last for hours or even all night, with multiple courses of food 
                  continuously brought to the table. Each toast follows a specific order, beginning with peace, 
                  then to Georgia, family, ancestors, and friends.
                </p>
                <p>
                  The supra showcases the famous Georgian hospitality where guests are considered "gifts from God" 
                  and treated with the utmost respect and generosity.
                </p>
              </div>
            </div>
          </div>
          
          <div className="text-center">
            <button className="bg-primary text-white font-montserrat font-medium px-8 py-3 rounded-lg shadow hover:bg-opacity-90 transition duration-300">
              Discover Georgian Recipes
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cuisine;
