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
      {/* Hero section - full height with modern design */}
      <section className="relative min-h-[80vh] flex items-center bg-gradient-to-b from-[#1a202c] to-[#2d3748] overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-40 z-10"></div>
        <div className="absolute inset-0 bg-cover bg-center" style={{ 
          backgroundImage: `url('https://images.unsplash.com/photo-1565014292879-8ebb0c73fe8e?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80')`,
          filter: 'blur(2px)'
        }}></div>
        
        <div className="container mx-auto px-4 relative z-20 text-white">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="md:w-1/2 mb-8 md:mb-0">
              <h2 className="font-montserrat font-bold text-4xl md:text-6xl mb-6 leading-tight">
                {t("home.hero.title")}
              </h2>
              <p className="text-xl mb-8 max-w-xl text-gray-200">
                {t("home.hero.subtitle")}
              </p>
              <div className="flex space-x-4">
                <button className="bg-primary text-white font-montserrat font-medium px-8 py-4 rounded-md shadow-xl hover:bg-opacity-90 transition duration-300 text-lg">
                  {t("home.hero.button")}
                </button>
                <Link href="/gallery">
                  <button className="bg-transparent border-2 border-white text-white font-montserrat font-medium px-8 py-4 rounded-md hover:bg-white hover:text-gray-900 transition duration-300 text-lg">
                    {t("section.gallery.btn")}
                  </button>
                </Link>
              </div>
            </div>
            
            {/* Weather Widget - styled to fit the design */}
            <div className="md:w-1/3 backdrop-blur-lg bg-white/10 rounded-xl p-6 shadow-xl">
              <WeatherWidget />
            </div>
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

      {/* Preview Sections - card based layout */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="font-montserrat font-bold text-4xl mb-12 text-center text-gray-900">
            {t("home.explore.title")}
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {sections.map((section, index) => (
              <div key={section.id} className="bg-white rounded-xl shadow-lg overflow-hidden transform transition-transform duration-300 hover:scale-105">
                <div className="h-48 bg-gray-200 flex items-center justify-center">
                  <span className="material-icons text-6xl text-gray-400">{section.imageIcon}</span>
                </div>
                <div className="p-6">
                  <h3 className="font-montserrat font-bold text-xl mb-3 text-primary">{section.title}</h3>
                  <p className="text-gray-600 mb-4 line-clamp-3">{section.description[0]}</p>
                  <Link href={section.buttonLink}>
                    <a className="inline-block bg-secondary text-white font-montserrat font-medium px-5 py-2 rounded-lg hover:bg-opacity-90 transition duration-300">
                      {section.buttonText}
                    </a>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to action - improved design */}
      <section className="py-24 bg-gray-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center opacity-20" style={{ 
          backgroundImage: `url('https://images.unsplash.com/photo-1572446184531-e66aa3e153a2?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80')`
        }}></div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="font-montserrat font-bold text-4xl md:text-5xl mb-6">
            {t("home.cta.title")}
          </h2>
          <p className="max-w-2xl mx-auto mb-10 text-xl text-gray-300">
            {t("home.cta.description")}
          </p>
          <button className="bg-primary text-white font-montserrat font-medium px-10 py-4 rounded-md shadow-xl hover:bg-opacity-90 transition duration-300 text-lg">
            {t("home.cta.button")}
          </button>
        </div>
      </section>
    </>
  );
};

export default Home;
