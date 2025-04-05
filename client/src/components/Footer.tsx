import { useLanguage } from "@/contexts/LanguageContext";

const Footer = () => {
  const { t } = useLanguage();
  
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Logo and info section */}
          <div className="flex flex-col md:flex-row gap-12 mb-16">
            {/* Brand section */}
            <div className="md:w-2/5">
              <div className="flex items-center mb-6">
                <div className="h-10 w-10 bg-primary/80 rounded-full flex items-center justify-center text-white font-bold mr-3">
                  <span className="font-georgian text-lg">გე</span>
                </div>
                <h2 className="text-white font-serif text-2xl">xplore<span className="text-primary">.</span></h2>
              </div>
              <p className="text-gray-400 mb-8 leading-relaxed">
                {t("footer.about")}
              </p>
              
              {/* Social media icons */}
              <div className="flex space-x-4">
                <button 
                  className="w-10 h-10 rounded-full bg-gray-800 hover:bg-primary/80 flex items-center justify-center transition-colors duration-300"
                  aria-label="Facebook"
                >
                  <span className="material-icons text-lg">facebook</span>
                </button>
                <button 
                  className="w-10 h-10 rounded-full bg-gray-800 hover:bg-primary/80 flex items-center justify-center transition-colors duration-300"
                  aria-label="Instagram"
                >
                  <span className="material-icons text-lg">camera_alt</span>
                </button>
                <button 
                  className="w-10 h-10 rounded-full bg-gray-800 hover:bg-primary/80 flex items-center justify-center transition-colors duration-300"
                  aria-label="Email"
                >
                  <span className="material-icons text-lg">alternate_email</span>
                </button>
              </div>
            </div>
            
            {/* Links grid */}
            <div className="md:w-3/5 grid grid-cols-1 sm:grid-cols-3 gap-8">
              {/* Explore Links */}
              <div>
                <h4 className="font-semibold text-lg mb-5 text-white">{t("footer.explore")}</h4>
                <ul className="space-y-3">
                  <li>
                    <button 
                      onClick={() => window.location.href = "/about"}
                      className="text-gray-400 hover:text-white transition duration-200 block"
                    >
                      {t("nav.about")}
                    </button>
                  </li>
                  <li>
                    <button 
                      onClick={() => window.location.href = "/gallery"}
                      className="text-gray-400 hover:text-white transition duration-200 block"
                    >
                      {t("nav.gallery")}
                    </button>
                  </li>
                  <li>
                    <button 
                      onClick={() => window.location.href = "/resorts"}
                      className="text-gray-400 hover:text-white transition duration-200 block"
                    >
                      {t("nav.resorts")}
                    </button>
                  </li>
                  <li>
                    <button 
                      onClick={() => window.location.href = "/cuisine"}
                      className="text-gray-400 hover:text-white transition duration-200 block"
                    >
                      {t("nav.cuisine")}
                    </button>
                  </li>
                  <li>
                    <button 
                      onClick={() => window.location.href = "/traditions"}
                      className="text-gray-400 hover:text-white transition duration-200 block"
                    >
                      {t("nav.traditions")}
                    </button>
                  </li>
                </ul>
              </div>
              
              {/* Resources Links */}
              <div>
                <h4 className="font-semibold text-lg mb-5 text-white">{t("footer.resources")}</h4>
                <ul className="space-y-3">
                  <li>
                    <button className="text-gray-400 hover:text-white transition duration-200 block">
                      Travel Tips
                    </button>
                  </li>
                  <li>
                    <button className="text-gray-400 hover:text-white transition duration-200 block">
                      Visa Information
                    </button>
                  </li>
                  <li>
                    <button className="text-gray-400 hover:text-white transition duration-200 block">
                      Transportation
                    </button>
                  </li>
                  <li>
                    <button className="text-gray-400 hover:text-white transition duration-200 block">
                      Accommodation
                    </button>
                  </li>
                  <li>
                    <button className="text-gray-400 hover:text-white transition duration-200 block">
                      FAQ
                    </button>
                  </li>
                </ul>
              </div>
              
              {/* Contact */}
              <div>
                <h4 className="font-semibold text-lg mb-5 text-white">{t("footer.contact")}</h4>
                <address className="not-italic text-gray-400 space-y-3">
                  <p>Tourism Information Center</p>
                  <p>Freedom Square, Tbilisi</p>
                  <p>Georgia</p>
                  <p className="flex items-center gap-2 mt-4">
                    <span className="material-icons text-sm">email</span> 
                    <span>info@xplore.ge</span>
                  </p>
                </address>
              </div>
            </div>
          </div>
        </div>
        
        {/* Copyright section */}
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-500 text-sm">
          <p>&copy; {new Date().getFullYear()} xplore. {t("footer.copyright")}</p>
          <div className="mt-4 flex justify-center space-x-6">
            <button className="hover:text-white transition duration-200">Privacy Policy</button>
            <button className="hover:text-white transition duration-200">Terms of Service</button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
