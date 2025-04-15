import { useState } from 'react';
import { useLanguage } from "@/contexts/LanguageContext";
import WeatherWidget from "@/components/WeatherWidget";
import { Link } from 'wouter';

// Beautiful images of Georgia - we'll use these directly to ensure we always have good photos
const GEORGIA_IMAGES = [
  'https://images.unsplash.com/photo-1563284223-333497724fb8?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80', // Tbilisi
  'https://images.unsplash.com/photo-1589318078211-1f5f25fb0fb0?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80', // Kazbegi mountains
  'https://images.unsplash.com/photo-1565008576549-57cf17a24a91?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80', // Georgia landscape
  'https://images.unsplash.com/photo-1623416088467-80d946e5c146?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80', // Mountains and valley
  'https://images.unsplash.com/photo-1601628809817-de3937ad2756?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80', // Aerial view
];

const HeroSection = () => {
  const { t } = useLanguage();
  // Select a random image from our pre-selected array
  const randomIndex = Math.floor(Math.random() * GEORGIA_IMAGES.length);
  const [backgroundImage] = useState<string>(GEORGIA_IMAGES[randomIndex]);

  return (
    <section className="relative bg-gradient-to-b from-gray-900 to-gray-700 h-screen min-h-[600px] flex items-center">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70" />
      
      {/* Content */}
      <div className="container mx-auto px-6 relative z-10 text-white">
        <div className="flex flex-col md:flex-row">
          <div className="md:w-2/3 mb-10 md:mb-0">
            <h1 className="text-5xl md:text-6xl font-serif font-bold mb-4">
              <span className="text-primary">საქართველო</span>
            </h1>
            <h2 className="text-4xl md:text-5xl font-serif font-light mb-8">
              Discover Georgia
            </h2>
            <p className="text-xl text-white/80 max-w-2xl mb-10">
              Experience centuries of history, breathtaking landscapes,
              and legendary hospitality in one of the world's oldest wine regions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/about">
                <span className="inline-block px-8 py-4 bg-primary text-white rounded-lg font-medium text-lg hover:bg-primary/90 transition-colors cursor-pointer">
                  Learn More
                </span>
              </Link>
              <Link href="/gallery">
                <span className="inline-block px-8 py-4 bg-white/10 backdrop-blur-sm text-white rounded-lg font-medium text-lg hover:bg-white/20 transition-colors cursor-pointer">
                  Explore Photos
                </span>
              </Link>
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
        <div className="absolute bottom-4 right-6 text-xs text-white/60">
          Photos courtesy of Unsplash
        </div>
      </div>
    </section>
  );
};

export default HeroSection;