import { Link } from "wouter";
import GeorgianMap from "@/components/GeorgianMap";
import GeorgianAlphabet from "@/components/GeorgianAlphabet";
import SectionPreview from "@/components/SectionPreview";
import HeroSection from "@/components/HeroSection";
import { useLanguage } from "@/contexts/LanguageContext";

const Home = () => {
  const { t } = useLanguage();
  // Preset images for sections (no API dependency)
  const sectionImages = {
    about: 'https://images.unsplash.com/photo-1548707309-dcebeab9ea9b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80', // Georgia architecture
    gallery: 'https://images.unsplash.com/photo-1565782247805-d0c5155db3fb?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80', // Mountains 
    resorts: 'https://images.unsplash.com/photo-1563198963-6c902a1b8f2b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80', // Batumi
    cuisine: 'https://images.unsplash.com/photo-1604147706283-d7119b5b822c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80', // Georgian food
    traditions: 'https://images.unsplash.com/photo-1580366752989-242883389186?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80', // Culture/traditions
  };

  // Section preview data
  const sections = [
    {
      id: "about",
      title: t("section.about.title"),
      description: [
        "საქართველო (Georgia), a country at the intersection of Europe and Asia, is a former Soviet republic that's home to Caucasus Mountain villages and Black Sea beaches. It's famous for Vardzia, a sprawling cave monastery dating to the 12th century, and the ancient wine-growing region Kakheti.",
        "With a history dating back thousands of years, Georgia offers visitors a unique glimpse into an ancient culture that has preserved its identity through centuries of outside influence."
      ],
      buttonText: t("section.about.btn"),
      buttonLink: "/about",
      imageIcon: "image",
      imageAlt: "Image of Georgian landscape",
      image: sectionImages.about
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
      reversed: true,
      image: sectionImages.gallery
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
      imageAlt: "Image of Georgian resort",
      image: sectionImages.resorts
    },
    {
      id: "cuisine",
      title: t("section.cuisine.title"),
      description: [
        "Georgian cuisine (სამზარეულო) is a delicious blend of Eastern and Western flavors, known for its unique use of spices, herbs, and cooking techniques. Dishes like khachapuri (cheese-filled bread), khinkali (dumplings), and various walnut-based sauces have made Georgian food increasingly popular worldwide.",
        "The country's 8,000-year-old wine-making tradition adds another dimension to its culinary appeal, with distinctive amber wines made in clay vessels called qvevri."
      ],
      buttonText: t("section.cuisine.btn"),
      buttonLink: "/cuisine",
      imageIcon: "restaurant",
      imageAlt: "Image of Georgian cuisine",
      reversed: true,
      image: sectionImages.cuisine
    },
    {
      id: "traditions",
      title: t("section.traditions.title"),
      description: [
        "Georgia's cultural traditions are as diverse as its landscape, shaped by centuries of trade, conflict, and artistic development. From the polyphonic singing recognized by UNESCO to the acrobatic folk dances that defy gravity, Georgian traditions express a unique cultural identity.",
        "Festivals, both religious and secular, punctuate the Georgian calendar, offering visitors insights into local customs that have survived for generations."
      ],
      buttonText: t("section.traditions.btn"),
      buttonLink: "/traditions",
      imageIcon: "festival",
      imageAlt: "Image of Georgian traditions",
      isLast: true,
      image: sectionImages.traditions
    }
  ];

  return (
    <>
      {/* Hero section with dynamic background from Unsplash */}
      <HeroSection />

      {/* Georgian Map & Alphabet section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6">
          <h2 className="font-serif font-bold text-2xl sm:text-3xl lg:text-4xl text-center text-georgian-dark mb-4 sm:mb-6">
            {t("home.discover.title")}
          </h2>
          <h3 className="font-georgian text-lg sm:text-xl text-center text-gray-600 mb-8 sm:mb-12">
            აღმოაჩინეთ საქართველო
          </h3>
          <div className="flex flex-col lg:flex-row items-center gap-8 xl:gap-12">
            <div className="w-full md:w-4/5 lg:w-1/2 mb-8 lg:mb-0 mx-auto">
              <div className="bg-gray-50 p-4 rounded-xl shadow-sm">
                <GeorgianMap />
              </div>
            </div>
            <div className="w-full md:w-4/5 lg:w-1/2 mx-auto">
              <div className="bg-gray-50 p-6 rounded-xl shadow-sm">
                <h3 className="font-serif font-semibold text-xl sm:text-2xl text-georgian-dark mb-3 sm:mb-4">
                  {t("home.alphabet.title")}
                </h3>
                <h4 className="font-georgian text-base sm:text-lg text-gray-600 mb-4 sm:mb-6">
                  ქართული ანბანი
                </h4>
                <p className="text-georgian-dark text-sm sm:text-base mb-6 sm:mb-8">
                  {t("home.alphabet.description")}
                </p>
                <GeorgianAlphabet />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section previews with Unsplash images */}
      {sections.map((section) => (
        <SectionPreview
          key={section.id}
          id={section.id}
          title={section.title}
          description={section.description}
          buttonText={section.buttonText}
          buttonLink={section.buttonLink}
          imageIcon={section.imageIcon}
          imageAlt={section.imageAlt}
          reversed={section.reversed}
          isLast={section.isLast}
          image={section.image}
        />
      ))}

      {/* Book Now Section - elegant travel agency style */}
      <section className="py-16 sm:py-20 lg:py-24 bg-white text-gray-900 relative">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-col lg:flex-row bg-gray-50 rounded-2xl overflow-hidden shadow-lg">
              {/* Left image */}
              <div className="lg:w-1/2 relative h-64 sm:h-80 lg:h-auto">
                <div className="absolute inset-0 bg-cover bg-center" style={{ 
                  backgroundImage: `url('https://images.unsplash.com/photo-1551449464-5070b758f04f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80')`
                }}></div>
                <div className="absolute inset-0 bg-gradient-to-r from-black/40 to-transparent"></div>
                <div className="absolute bottom-0 left-0 p-6 sm:p-8 w-full">
                  <p className="text-xs sm:text-sm text-white/80 uppercase tracking-wider font-light mb-1 sm:mb-2">
                    Premier Destination
                  </p>
                  <h3 className="font-georgian text-2xl sm:text-3xl text-white mb-2">
                    კავკასიის <span className="font-serif italic">Mountains</span>
                  </h3>
                  <div className="w-12 sm:w-16 h-1 bg-white"></div>
                </div>
              </div>
              
              {/* Right booking form */}
              <div className="lg:w-1/2 p-6 sm:p-8 lg:p-12">
                <h2 className="font-serif text-2xl sm:text-3xl mb-2">
                  Ready to <span className="italic">Experience</span> Georgia?
                </h2>
                <p className="text-sm sm:text-base text-gray-600 mb-6 sm:mb-8">
                  Start planning your journey to discover the breathtaking landscapes,
                  rich history, and warm hospitality of this hidden gem in the Caucasus.
                </p>
                
                <div className="space-y-4 mb-6 sm:mb-8">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                    <div className="space-y-1 sm:space-y-2">
                      <label className="text-xs sm:text-sm text-gray-600">Destination</label>
                      <div className="relative">
                        <select className="w-full border border-gray-300 rounded-lg p-2 sm:p-3 text-sm appearance-none bg-white text-gray-900 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary">
                          <option>Tbilisi (თბილისი)</option>
                          <option>Batumi (ბათუმი)</option>
                          <option>Kazbegi (ყაზბეგი)</option>
                        </select>
                        <span className="material-icons absolute right-2 sm:right-3 top-2 sm:top-3 text-gray-500 pointer-events-none text-sm sm:text-base">
                          expand_more
                        </span>
                      </div>
                    </div>
                    <div className="space-y-1 sm:space-y-2">
                      <label className="text-xs sm:text-sm text-gray-600">Travelers</label>
                      <div className="relative">
                        <select className="w-full border border-gray-300 rounded-lg p-2 sm:p-3 text-sm appearance-none bg-white text-gray-900 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary">
                          <option>1 Person</option>
                          <option>2 People</option>
                          <option>3+ People</option>
                        </select>
                        <span className="material-icons absolute right-2 sm:right-3 top-2 sm:top-3 text-gray-500 pointer-events-none text-sm sm:text-base">
                          expand_more
                        </span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                    <div className="space-y-1 sm:space-y-2">
                      <label className="text-xs sm:text-sm text-gray-600">Arrival Date</label>
                      <div className="relative">
                        <input type="text" placeholder="Select Date" className="w-full border border-gray-300 rounded-lg p-2 sm:p-3 text-sm bg-white text-gray-900 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary" />
                        <span className="material-icons absolute right-2 sm:right-3 top-2 sm:top-3 text-gray-500 pointer-events-none text-sm sm:text-base">
                          calendar_today
                        </span>
                      </div>
                    </div>
                    <div className="space-y-1 sm:space-y-2">
                      <label className="text-xs sm:text-sm text-gray-600">Duration</label>
                      <div className="relative">
                        <select className="w-full border border-gray-300 rounded-lg p-2 sm:p-3 text-sm appearance-none bg-white text-gray-900 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary">
                          <option>3-5 days</option>
                          <option>1 week</option>
                          <option>2 weeks</option>
                        </select>
                        <span className="material-icons absolute right-2 sm:right-3 top-2 sm:top-3 text-gray-500 pointer-events-none text-sm sm:text-base">
                          expand_more
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                
                <button className="w-full bg-primary text-white font-medium px-6 sm:px-8 py-3 sm:py-4 rounded-lg shadow-md hover:shadow-lg hover:bg-primary/90 transition-all duration-300 text-xs sm:text-sm uppercase tracking-wide">
                  {t("home.cta.button")}
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Georgian Language Lessons Promo */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gray-100">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="font-serif text-2xl sm:text-3xl mb-2 sm:mb-3">Learn Georgian Language</h2>
            <h3 className="font-georgian text-xl sm:text-2xl text-primary mb-4 sm:mb-6">ისწავლე ქართული ენა</h3>
            <p className="text-sm sm:text-base text-gray-700 mb-6 sm:mb-8 max-w-2xl mx-auto">
              Enhance your Georgian experience by learning the basics of this unique language.
              Our experienced teacher offers personalized lessons with an original training program.
            </p>
            <Link href="/lessons">
              <span className="inline-block bg-primary text-white px-6 sm:px-8 py-2 sm:py-3 rounded-lg font-medium text-sm sm:text-base hover:bg-primary/90 transition-colors cursor-pointer">
                Discover Language Lessons
              </span>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;