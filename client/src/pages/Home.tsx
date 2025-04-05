import { Link } from "wouter";
import WeatherWidget from "@/components/WeatherWidget";
import GeorgianMap from "@/components/GeorgianMap";
import GeorgianAlphabet from "@/components/GeorgianAlphabet";
import SectionPreview from "@/components/SectionPreview";
import { useLanguage } from "@/contexts/LanguageContext";

const Home = () => {
  const { t } = useLanguage();

  // Section preview data
  const sections = [
    {
      id: "about",
      title: t("section.about.title"),
      description: [
        "Georgia, a country at the intersection of Europe and Asia, is a former Soviet republic that's home to Caucasus Mountain villages and Black Sea beaches. It's famous for Vardzia, a sprawling cave monastery dating to the 12th century, and the ancient wine-growing region Kakheti.",
        "With a history dating back thousands of years, Georgia offers visitors a unique glimpse into an ancient culture that has preserved its identity through centuries of outside influence."
      ],
      buttonText: t("section.about.btn"),
      buttonLink: "/about",
      imageIcon: "image",
      imageAlt: "Image of Georgian landscape"
    },
    {
      id: "gallery",
      title: t("section.gallery.title"),
      description: [
        "Experience the stunning visual feast that is Georgia through our curated collection of photographs showcasing the country's diverse landscapes, historic architecture, and vibrant cultural scenes.",
        "From the towering peaks of the Caucasus Mountains to the ancient stone towers of Svaneti, from bustling markets in Tbilisi to serene coastal views along the Black Sea."
      ],
      buttonText: t("section.gallery.btn"),
      buttonLink: "/gallery",
      imageIcon: "image",
      imageAlt: "Gallery of Georgia images",
      reversed: true
    },
    {
      id: "resorts",
      title: t("section.resorts.title"),
      description: [
        "Georgia offers a diverse array of resort experiences, from skiing in the mountains of Gudauri and Bakuriani to relaxing on the pebble beaches of Batumi and enjoying therapeutic mineral waters in Borjomi.",
        "Each resort area provides its own unique atmosphere and activities, catering to adventure seekers, relaxation enthusiasts, and health-conscious travelers alike."
      ],
      buttonText: t("section.resorts.btn"),
      buttonLink: "/resorts",
      imageIcon: "beach_access",
      imageAlt: "Image of Georgian resort"
    },
    {
      id: "cuisine",
      title: t("section.cuisine.title"),
      description: [
        "Georgian cuisine is an integral part of the country's culture, renowned for its unique combinations of spices, walnuts, and fresh ingredients. Famous dishes include khachapuri (cheese-filled bread), khinkali (dumplings), and various grilled meat preparations.",
        "Georgia is also one of the world's oldest wine regions, with a winemaking tradition stretching back over 8,000 years using distinctive clay vessels called qvevri."
      ],
      buttonText: t("section.cuisine.btn"),
      buttonLink: "/cuisine",
      imageIcon: "restaurant",
      imageAlt: "Image of Georgian cuisine",
      reversed: true
    },
    {
      id: "traditions",
      title: t("section.traditions.title"),
      description: [
        "Georgian traditions are deeply rooted in history, with many customs and celebrations dating back centuries. The supra (feast) is central to Georgian culture, featuring a toastmaster (tamada) who guides guests through a series of toasts.",
        "Music and dance play vital roles in Georgian cultural identity, with polyphonic singing recognized by UNESCO as an intangible cultural heritage and energetic folk dances showcasing the spirit of the Georgian people."
      ],
      buttonText: t("section.traditions.btn"),
      buttonLink: "/traditions",
      imageIcon: "people",
      imageAlt: "Image of Georgian traditions",
      isLast: true
    }
  ];

  return (
    <>
      {/* Hero section - elegant, clean design inspired by xplore template */}
      <section className="relative min-h-[90vh] flex items-center bg-gray-100 overflow-hidden">
        {/* Full-width background image with proper styling */}
        <div className="absolute inset-0 bg-cover bg-center" style={{ 
          backgroundImage: `url('https://images.unsplash.com/photo-1520980190535-d00da19630be?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80')`,
        }}></div>
        
        {/* Overlay for better text contrast */}
        <div className="absolute inset-0 bg-black opacity-25"></div>
        
        <div className="container mx-auto px-6 relative z-20 text-white">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white/10 backdrop-blur-sm inline-block px-6 py-3 rounded-full mb-6">
              <p className="text-sm font-light">{t("home.hero.subtitle")}</p>
            </div>
            
            <h1 className="font-serif italic font-bold text-5xl md:text-7xl mb-8 leading-tight">
              Embark on <span className="font-normal not-italic">journeys</span><br />
              not <span className="italic font-light">just</span> destinations<br />
              with <span className="italic font-normal">our trips.</span>
            </h1>
            
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6 mb-12">
              <button className="bg-white text-gray-900 font-medium px-8 py-3 rounded-full shadow-lg hover:bg-opacity-90 transition duration-300 text-sm uppercase tracking-wide">
                {t("home.hero.button")}
              </button>
              <button 
                onClick={() => window.location.href = "/gallery"} 
                className="bg-transparent border border-white text-white font-medium px-8 py-3 rounded-full hover:bg-white hover:text-gray-900 transition duration-300 text-sm uppercase tracking-wide"
              >
                {t("section.gallery.btn")}
              </button>
            </div>
          </div>
          
          {/* Weather Widget in an elegant position */}
          <div className="absolute top-6 right-6 md:top-10 md:right-10 backdrop-blur-md bg-white/10 rounded-2xl p-5 shadow-xl">
            <WeatherWidget />
          </div>
        </div>
      </section>

      {/* Map and Alphabet section - cleaner design */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12">
            <GeorgianMap />
            <GeorgianAlphabet />
          </div>
        </div>
      </section>

      {/* Tour Packages Section - matching xplore template design */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="flex flex-col items-center justify-center mb-16">
            <p className="text-gray-500 uppercase tracking-wider text-sm mb-3">Discover Georgia</p>
            <h2 className="font-serif text-4xl md:text-5xl mb-4 text-center text-gray-900">
              Tour <span className="italic">Packages</span>
            </h2>
            <div className="w-20 h-1 bg-primary mt-2 mb-6"></div>
            <p className="text-gray-500 max-w-2xl text-center">
              Indulge in our carefully crafted packages to immerse you in the most captivating and
              transformative travel adventures across Georgia.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {sections.slice(0, 3).map((section, index) => (
              <div key={section.id} className="group bg-white rounded-lg shadow-md overflow-hidden transition-all duration-300 hover:shadow-xl">
                <div className="h-60 bg-gray-200 relative overflow-hidden">
                  {/* Using placeholder images based on section ID */}
                  <div className="absolute inset-0 bg-cover bg-center transform transition-transform duration-500 group-hover:scale-110" 
                    style={{ 
                      backgroundImage: `url('https://images.unsplash.com/photo-${
                        section.id === "about" ? "1541410965313-4a35be3f1566" : 
                        section.id === "gallery" ? "1563339007-6088f6601b0f" :
                        "1565019249868-47b2b16ba0b3"
                      }?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80')`
                    }}>
                  </div>
                  <div className="absolute inset-0 bg-black/30 transition-opacity duration-300 group-hover:opacity-20"></div>
                  
                  {/* Title overlay */}
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h3 className="font-serif text-2xl text-white">{section.title}</h3>
                  </div>
                  
                  {/* Heart icon */}
                  <button className="absolute top-4 right-4 bg-white/20 backdrop-blur-sm p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <span className="material-icons text-white">favorite_border</span>
                  </button>
                </div>
                
                <div className="p-6">
                  <div className="flex justify-between items-center mb-4 text-sm text-gray-500">
                    <span className="flex items-center">
                      <span className="material-icons text-xs mr-1">location_on</span> Georgia
                    </span>
                    <span className="flex items-center">
                      <span className="material-icons text-xs mr-1">schedule</span> 5-7 days
                    </span>
                  </div>
                  
                  <p className="text-gray-700 mb-5 line-clamp-2">{section.description[0]}</p>
                  
                  <div className="flex justify-between items-center">
                    <span className="text-xl font-bold text-gray-800">$899</span>
                    <button 
                      onClick={() => window.location.href = section.buttonLink} 
                      className="bg-gray-100 text-gray-800 font-medium px-5 py-2 rounded-full hover:bg-primary hover:text-white transition-colors duration-300 text-sm"
                    >
                      {section.buttonText}
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center">
            <button className="border border-gray-300 text-gray-700 font-medium px-8 py-3 rounded-full hover:bg-gray-100 transition duration-300 text-sm uppercase tracking-wide">
              See All Packages
            </button>
          </div>
        </div>
      </section>
      
      {/* Features Sections - clean, modern design */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-col md:flex-row items-center gap-16">
              {/* Left image */}
              <div className="md:w-1/2 relative">
                <div className="rounded-2xl overflow-hidden aspect-[4/3] relative shadow-xl">
                  <div className="absolute inset-0 bg-cover bg-center" style={{ 
                    backgroundImage: `url('https://images.unsplash.com/photo-1560623229-59eb842a61a8?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80')`
                  }}></div>
                  <div className="absolute inset-0 bg-primary/20"></div>
                </div>
                <div className="absolute -bottom-8 -right-8 bg-white rounded-xl shadow-lg p-6 max-w-xs">
                  <div className="flex items-center gap-4">
                    <div className="bg-primary/10 p-3 rounded-lg">
                      <span className="material-icons text-primary">flag</span>
                    </div>
                    <div>
                      <h4 className="font-bold text-lg">100+ Destinations</h4>
                      <p className="text-gray-500 text-sm">Across Georgia</p>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Right content */}
              <div className="md:w-1/2">
                <h3 className="font-serif text-3xl md:text-4xl mb-6">
                  Discover the Hidden <span className="italic">Gems</span> of Georgia
                </h3>
                <p className="text-gray-600 mb-8">
                  Georgia offers visitors a unique blend of ancient tradition and modern innovation, stunning mountain landscapes and vibrant city life, all infused with legendary hospitality.
                </p>
                
                <div className="space-y-6">
                  {sections.slice(3).map((section, index) => (
                    <div key={section.id} className="flex gap-5 items-start">
                      <div className="bg-gray-100 p-3 rounded-lg shrink-0">
                        <span className="material-icons text-gray-700">{section.imageIcon}</span>
                      </div>
                      <div>
                        <h4 className="font-bold text-lg mb-1">{section.title}</h4>
                        <p className="text-gray-600 line-clamp-2">{section.description[0]}</p>
                        <button 
                          onClick={() => window.location.href = section.buttonLink}
                          className="text-primary font-medium mt-2 inline-flex items-center hover:underline"
                        >
                          {section.buttonText}
                          <span className="material-icons text-sm ml-1">arrow_forward</span>
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Book Now Section - elegant travel agency style */}
      <section className="py-24 bg-white text-gray-900 relative">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-col md:flex-row bg-gray-50 rounded-2xl overflow-hidden shadow-lg">
              {/* Left image */}
              <div className="md:w-1/2 relative h-80 md:h-auto">
                <div className="absolute inset-0 bg-cover bg-center" style={{ 
                  backgroundImage: `url('https://images.unsplash.com/photo-1551449464-5070b758f04f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80')`
                }}></div>
                <div className="absolute inset-0 bg-gradient-to-r from-black/40 to-transparent"></div>
                <div className="absolute bottom-0 left-0 p-8 w-full">
                  <p className="text-sm text-white/80 uppercase tracking-wider font-light mb-2">
                    Premier Destination
                  </p>
                  <h3 className="font-serif text-3xl text-white mb-2">
                    Caucasus <span className="italic">Mountains</span>
                  </h3>
                  <div className="w-16 h-1 bg-white"></div>
                </div>
              </div>
              
              {/* Right booking form */}
              <div className="md:w-1/2 p-8 md:p-12">
                <h2 className="font-serif text-3xl mb-2">
                  Ready to <span className="italic">Experience</span> Georgia?
                </h2>
                <p className="text-gray-600 mb-8">
                  Start planning your journey to discover the breathtaking landscapes,
                  rich history, and warm hospitality of this hidden gem in the Caucasus.
                </p>
                
                <div className="space-y-4 mb-8">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label className="text-sm text-gray-600">Destination</label>
                      <div className="relative">
                        <select className="w-full border border-gray-300 rounded-lg p-3 appearance-none bg-white text-gray-900 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary">
                          <option>Tbilisi</option>
                          <option>Batumi</option>
                          <option>Kazbegi</option>
                        </select>
                        <span className="material-icons absolute right-3 top-3 text-gray-500 pointer-events-none">
                          expand_more
                        </span>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm text-gray-600">Travelers</label>
                      <div className="relative">
                        <select className="w-full border border-gray-300 rounded-lg p-3 appearance-none bg-white text-gray-900 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary">
                          <option>1 Person</option>
                          <option>2 People</option>
                          <option>3+ People</option>
                        </select>
                        <span className="material-icons absolute right-3 top-3 text-gray-500 pointer-events-none">
                          expand_more
                        </span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label className="text-sm text-gray-600">Arrival Date</label>
                      <div className="relative">
                        <input type="text" placeholder="Select Date" className="w-full border border-gray-300 rounded-lg p-3 bg-white text-gray-900 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary" />
                        <span className="material-icons absolute right-3 top-3 text-gray-500 pointer-events-none">
                          calendar_today
                        </span>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm text-gray-600">Duration</label>
                      <div className="relative">
                        <select className="w-full border border-gray-300 rounded-lg p-3 appearance-none bg-white text-gray-900 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary">
                          <option>3-5 days</option>
                          <option>1 week</option>
                          <option>2 weeks</option>
                        </select>
                        <span className="material-icons absolute right-3 top-3 text-gray-500 pointer-events-none">
                          expand_more
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                
                <button className="w-full bg-primary text-white font-medium px-8 py-4 rounded-lg shadow-md hover:shadow-lg hover:bg-primary/90 transition-all duration-300 text-sm uppercase tracking-wide">
                  {t("home.cta.button")}
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
