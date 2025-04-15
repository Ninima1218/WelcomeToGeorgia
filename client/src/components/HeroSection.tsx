import { useState, useEffect } from 'react';
import { useLanguage } from "@/contexts/LanguageContext";
import WeatherWidget from "@/components/WeatherWidget";
import { getPhotosByCategory } from "@/lib/unsplashService";

// Default beautiful image of Georgia
const DEFAULT_IMAGE = 'https://images.unsplash.com/photo-1565008576549-57cf17a24a91?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080';

const HeroSection = () => {
  const { t } = useLanguage();
  const [backgroundImage, setBackgroundImage] = useState<string>(DEFAULT_IMAGE);
  const [photographer, setPhotographer] = useState<{ name: string; link: string } | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchHeroImage = async () => {
      setLoading(true);
      try {
        // Try to get mountain landscape photos from Georgia
        const { photos } = await getPhotosByCategory('MOUNTAINS', 1, 5);
        
        if (photos && photos.length > 0) {
          // Get a random photo from the results
          const randomIndex = Math.floor(Math.random() * photos.length);
          const photo = photos[randomIndex];
          
          setBackgroundImage(photo.urls.regular);
          setPhotographer({
            name: photo.user.name,
            link: photo.user.links.html
          });
        } else {
          // If no photos were returned, use default
          setBackgroundImage(DEFAULT_IMAGE);
        }
      } catch (error) {
        console.error('Error fetching hero image:', error);
        // Fallback to a default image if Unsplash API fails
        setBackgroundImage(DEFAULT_IMAGE);
      } finally {
        setLoading(false);
      }
    };

    fetchHeroImage();
  }, []);

  return (
    <section className="relative bg-gradient-to-b from-gray-900 to-gray-700 h-screen min-h-[600px] flex items-center">
      {/* Background Image with Overlay */}
      {!loading && backgroundImage && (
        <>
          <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${backgroundImage})` }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70" />
        </>
      )}
      
      {/* Loading State */}
      {loading && (
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-white"></div>
        </div>
      )}

      {/* Content */}
      <div className="container mx-auto px-6 relative z-10 text-white">
        <div className="flex flex-col md:flex-row">
          <div className="md:w-2/3 mb-10 md:mb-0">
            <h1 className="text-5xl md:text-6xl font-serif font-bold mb-4">
              <span className="text-primary">საქართველო</span>
            </h1>
            <h2 className="text-4xl md:text-5xl font-serif font-light mb-8">
              Discover the Heart of Caucasus
            </h2>
            <p className="text-xl text-white/80 max-w-2xl mb-10">
              Experience centuries of history, breathtaking landscapes,
              and legendary hospitality in one of the world's oldest wine regions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="px-8 py-4 bg-primary text-white rounded-lg font-medium text-lg hover:bg-primary/90 transition-colors">
                Plan Your Journey
              </button>
              <button className="px-8 py-4 bg-white/10 backdrop-blur-sm text-white rounded-lg font-medium text-lg hover:bg-white/20 transition-colors">
                Explore Georgia
              </button>
            </div>
          </div>
          
          {/* Weather Widget */}
          <div className="md:w-1/3">
            <div className="bg-black/30 backdrop-blur-md p-6 rounded-xl border border-white/10">
              <WeatherWidget />
            </div>
          </div>
        </div>
        
        {/* Photo credit */}
        {photographer && (
          <div className="absolute bottom-4 right-6 text-xs text-white/60">
            Photo by{" "}
            <a 
              href={photographer.link} 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
            >
              {photographer.name}
            </a>
            {" "}on Unsplash
          </div>
        )}
      </div>
    </section>
  );
};

export default HeroSection;