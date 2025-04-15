import { Link } from "wouter";
import GeorgianMap from "@/components/GeorgianMap";
import GeorgianAlphabet from "@/components/GeorgianAlphabet";
import SectionPreview from "@/components/SectionPreview";
import HeroSection from "@/components/HeroSection";
import { useLanguage } from "@/contexts/LanguageContext";
import { getPhotosByCategory } from "@/lib/unsplashService";
import { useEffect, useState } from "react";

const Home = () => {
  const { t } = useLanguage();
  const [sectionImages, setSectionImages] = useState<Record<string, string>>({});

  // Fetch images for section previews
  useEffect(() => {
    const fetchSectionImages = async () => {
      try {
        // Fetch an image for each section
        const categories = ['GEORGIA', 'MOUNTAINS', 'TBILISI', 'FOOD', 'CULTURE'];
        const imagePromises = categories.map(cat => 
          getPhotosByCategory(cat as any, 1, 1)
        );
        
        const results = await Promise.all(imagePromises);
        
        const images: Record<string, string> = {};
        ['about', 'gallery', 'resorts', 'cuisine', 'traditions'].forEach((section, index) => {
          if (results[index].photos.length > 0) {
            images[section] = results[index].photos[0].urls.regular;
          }
        });
        
        setSectionImages(images);
      } catch (error) {
        console.error('Error fetching section images:', error);
      }
    };

    fetchSectionImages();
  }, []);

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
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="font-serif font-bold text-3xl md:text-4xl text-center text-georgian-dark mb-6">
            {t("home.discover.title")}
          </h2>
          <h3 className="font-georgian text-xl text-center text-gray-600 mb-12">
            აღმოაჩინეთ საქართველო
          </h3>
          <div className="flex flex-col lg:flex-row items-center">
            <div className="lg:w-1/2 mb-10 lg:mb-0">
              <GeorgianMap />
            </div>
            <div className="lg:w-1/2">
              <h3 className="font-serif font-semibold text-2xl text-georgian-dark mb-4">
                {t("home.alphabet.title")}
              </h3>
              <h4 className="font-georgian text-lg text-gray-600 mb-6">
                ქართული ანბანი
              </h4>
              <p className="text-georgian-dark mb-8">
                {t("home.alphabet.description")}
              </p>
              <GeorgianAlphabet />
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
                  <h3 className="font-georgian text-3xl text-white mb-2">
                    კავკასიის <span className="font-serif italic">Mountains</span>
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
                          <option>Tbilisi (თბილისი)</option>
                          <option>Batumi (ბათუმი)</option>
                          <option>Kazbegi (ყაზბეგი)</option>
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

      {/* Georgian Language Lessons Promo */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="font-serif text-3xl mb-3">Learn Georgian Language</h2>
            <h3 className="font-georgian text-2xl text-primary mb-6">ისწავლე ქართული ენა</h3>
            <p className="text-gray-700 mb-8">
              Enhance your Georgian experience by learning the basics of this unique language.
              Our experienced teacher offers personalized lessons with an original training program.
            </p>
            <Link href="/lessons">
              <span className="inline-block bg-primary text-white px-8 py-3 rounded-lg font-medium hover:bg-primary/90 transition-colors cursor-pointer">
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